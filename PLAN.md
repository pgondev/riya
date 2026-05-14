# Riya / DECA Study App — Rebuild Plan

## Part 1 — Why the current app needs a rebuild, not a refactor

Beyond surface bugs, the *structural* problems are:

**A. Content and code are fused.** Every question, PI, flashcard, and roleplay is a TypeScript literal compiled into the JS bundle. Adding 10 questions means a code change, a PR, a redeploy. The bundle is ~25K lines of data alone — bad for load time, impossible for a non-developer to edit, and version control gives you nothing useful (a fixed typo and a new exam look identical in `git diff`).

**B. No source of truth.** The same PI appears in `deca-data.ts` (as a `Cluster.performanceIndicators` entry), in `performanceIndicators.ts`, *and* corrupted into the `CAREER_CLUSTERS` array. Question references to PIs are free-form strings (`"EI:001"`) with no FK guarantee — a typo silently breaks the "concepts you struggle with" analytics.

**C. No write path.** Users can "save" notebook entries and flashcards but those only live in their browser's `localStorage`. Clear cookies → all study notes are gone. No sync between devices, no recovery, no analytics for a teacher.

**D. No admin surface.** The 25 root-level `.cjs` scripts (`parse_ei.cjs`, `update_ec_*.cjs`, `clean_deca*.cjs`) *are* the content pipeline. They're hand-coded regex scrapers run from a developer's laptop. The "admin" role today is "whoever can open VS Code and run a script."

**E. View routing by string union + manual history stack.** The `View` type at `App.tsx:58` and the hand-rolled `history` array at `App.tsx:2509` reinvent react-router badly. Deep links, browser back/forward, and refreshes all break.

**F. UI shape is locked to one school.** "WeddingtonDECA" is hard-coded in 8 places, the chapter goal widget is hard-coded `12/20`, study groups are mock data. There's no concept of "tenant."

**G. Security.** Gemini API key inlined into the browser bundle (`vite.config.ts:11`); mock auth that stores a self-asserted user object in localStorage (`App.tsx:236-248`).

**H. Performance.** First-load JS includes every question of every exam of every cluster. No code-splitting, no lazy loading, no pagination.

The takeaway: the front-end is mostly *competent React with quirks*. The real failure is that there is no backend, no data model, and no content pipeline. A refactor of `App.tsx` won't fix any of that. We need to introduce three things that don't exist today: a database, an API, and an admin/ingestion workflow.

---

## Part 2 — Target architecture

### Data model (the most important decision)

Move to a normalized schema. Suggested tables:

```
users(id, email, password_hash, role, chapter_id, primary_event_id, created_at)
chapters(id, name, school, settings_json)               -- multi-tenant
clusters(id, code, name, color)                         -- 7 fixed rows
events(id, cluster_id, code, name, category, description)
performance_indicators(id, code, cluster_id, level, name, description, key_points_json)
                                                        -- 288 rows, code is unique (e.g. EI:001)
exams(id, source, year, level, cluster_id, title, pdf_url, status, uploaded_by, created_at)
                                                        -- status: draft|review|published
questions(id, exam_id, number, stem, correct_answer, explanation, notes, source_page)
question_options(id, question_id, label, text)          -- 4 rows per question
question_pis(question_id, pi_id)                        -- m:n (a question can hit several PIs)
flashcards(id, owner_id|null, event_id|null, pi_id|null, term, definition, source)
                                                        -- owner_id NULL = global, set = personal
test_attempts(id, user_id, exam_id, started_at, finished_at, score, answers_json)
notebook_entries(id, user_id, title, content, source_question_id, created_at)
```

Key wins: questions/PIs are first-class, FK-enforced. Adding an exam doesn't touch app code. Analytics ("which PIs do you struggle with?") becomes a SQL query, not an `Array.filter`.

### Stack

- **Backend**: Node + Fastify (or Hono) + TypeScript. Postgres via Prisma or Drizzle. S3-compatible blob storage (or local disk for now) for PDFs.
- **Auth**: Lucia, Better-Auth, or Clerk/Supabase if you don't want to run it. Email+password to start; magic-link or Google later.
- **Frontend**: keep React + Vite + Tailwind + shadcn (this part is fine). Add **React Router** for real URLs. Add **TanStack Query** for server state. Replace `localStorage` glue with proper queries/mutations.
- **API shape**: REST is fine for this scale (`GET /api/exams`, `POST /api/admin/exams`, etc.). tRPC if you want end-to-end types and don't need third-party consumers.
- **Deploy**: one Node container, one Postgres, one S3 bucket. Fly.io / Railway / Render all fit.

### Front-end restructure

- Split `App.tsx` into per-route files: `routes/dashboard.tsx`, `routes/cluster/$id.tsx`, `routes/exam/$id.tsx`, `routes/admin/*`, etc.
- Real router → real URLs → shareable, refreshable, back-button works.
- Lazy-load route bundles; the exam data is fetched, not bundled.
- Move shadcn into `src/components/ui/` (standard).
- Strip the `motion` animations from non-critical paths — they hide route bugs.

### Roles

- **Student** — take exams, save notes, star flashcards.
- **Teacher/Advisor** — see all students in their chapter, assign exams, view chapter analytics.
- **Admin** — upload PDFs, edit question bank, manage PIs, manage chapters.

### Telemetry/analytics worth having

Per-PI mastery (correct ÷ attempted), per-instructional-area, time-per-question, frequently-missed questions chapter-wide. All falls out of the schema above with a few views.

---

## Part 3 — PDF → question bank: the full menu

This is the hardest piece.

### First, understand what we're parsing

DECA publishes two PDFs per exam:
1. **Exam booklet** — questions 1-100, each with 4 options (A-D), no answers visible.
2. **Test key/rationale** — answer letter, the **PI code** (e.g. `EI:001`), and an explanation paragraph.

The format is **highly regular**. Question stems are numbered, options are labeled, the key has columnar structure. This matters: we don't actually need an LLM to parse most exams. We need a good rules-based parser with a human-in-the-loop review step.

### Option 1 — Manual entry (admin UI form)

How: admin types each question into a form, picks the cluster/PI from a dropdown, marks the correct answer, pastes the explanation.

- **Pros**: zero parsing risk; quality is whatever you put in; trivial to build (a couple of forms + REST endpoints).
- **Cons**: 100 questions × ~3 min/each = 5 hours per exam. With 10 ICDC exams + per-cluster tests, this is weeks of work.
- **Verdict**: needed anyway as a fallback and editor. Build first. But not the primary ingestion path.

### Option 2 — Deterministic PDF parsing (the recommendation)

How: server extracts text from PDFs, regex/structure-aware code splits it into question records, an admin reviews-and-approves in the UI before publishing.

Tooling choices:
- **`pdfjs-dist`** (Node) — Mozilla's PDF.js, gives positioned text items (x, y, fontSize, fontName). Best for layout-aware parsing.
- **`pdf-parse`** — quick text dump, no layout. Fine for simple, well-formed PDFs.
- **`mupdf-js`** or **Poppler's `pdftotext -layout`** (CLI, via spawn) — fastest, preserves columns reasonably.
- **Tesseract.js** — only for scanned/image PDFs (older DECA practice exams sometimes are). OCR is slower and noisier; trigger only when text extraction yields little/nothing.

Parsing strategy (works for DECA exam booklets):
```
1. pdftotext -layout  →  newline-preserved text
2. Regex split:        ^\s*(\d{1,3})\.\s   → question boundaries
3. Within each block:  ^\s*([A-D])\.\s      → 4 options
4. Merge with key PDF on question number → {correct, pi_code, rationale}
5. PI code (EI:001) → FK lookup in performance_indicators
6. Emit JSON; queue for human review
```

A 100-question exam parses in <1s. Cost per exam: zero compute, ~10-20 min for an admin to skim and click-approve.

- **Pros**: deterministic, debuggable, free, fast, works offline, no model drift.
- **Cons**: brittle when DECA changes their template. Tables and diagrams need special handling (rare in DECA). Scanned PDFs need OCR fallback.
- **Verdict**: **this is what we should build.** It's how Quizlet, Anki imports, and edtech publishers actually do this at scale.

### Option 3 — Local LLM extraction (no cloud)

How: run an open-weight LLM on your own hardware or a cheap VM. Feed it PDF text + a JSON schema, get structured questions out.

Tooling:
- **Ollama** — easiest. `ollama pull llama3.1:8b` or `qwen2.5:7b` or `mistral-nemo`. HTTP API at localhost.
- **llama.cpp** server — leaner; runs on CPU if needed (slow), good with quantized models.
- **vLLM / TGI** — GPU-grade serving if you have one.
- Models worth trying for structured extraction: **Qwen2.5-7B-Instruct** (very strong at JSON), **Llama 3.1 8B**, **Phi-3.5-mini** (small, fast).

Hardware reality:
- 7-8B quantized (Q4) runs on a Mac M-series, a $300 GPU, or modern CPU at 5-15 tok/s.
- 70B-class needs serious GPU (24GB+).

Workflow:
```
PDF → text → chunk per-question → LLM with schema → JSON → human review
```

- **Pros**: handles weird formatting that regex doesn't; "free" once running; no data leaves your machine; LLM can also draft explanations or tag PIs when missing.
- **Cons**: hallucinations (invents PI codes, "fixes" answer letters); much slower than regex; ops overhead (GPU box, model server, monitoring); model upgrades = re-validation.
- **Verdict**: **good fallback for the 10-20% of exams that the regex parser chokes on**, and useful for *enrichment* (auto-suggest PI codes for questions missing them, draft explanations, generate flashcards from explanations). Don't make it the primary path.

### Option 4 — Hybrid (recommended)

What to actually build:

```
Admin uploads PDF →
  text extraction (pdfjs or pdftotext) →
  rules-based parser →
  IF parser confidence ≥ threshold:  go to review queue
  ELSE:                              fall back to local LLM (Ollama) →
                                     go to review queue
Admin reviews in a side-by-side UI (original PDF page | parsed question card),
edits any field, picks PI from a dropdown, approves →
question published to question bank.
```

Confidence signals for the parser: question count matches answer-key row count; every block has exactly 4 options; every option starts with A-D; every PI code resolves to a known PI; no orphan text between blocks.

The review UI is the most important piece — even with a perfect parser, a human must approve before publishing. It also doubles as the manual-entry UI from Option 1.

### Option 5 — Crowdsource / structured import

- Define a **CSV/JSON import format**. Teachers prep questions in Google Sheets, upload.
- Useful for chapter-specific question sets, but doesn't solve the original-DECA-PDF problem.
- Build later; not blocking.

### Option 6 — Specialized OCR + layout services

- **Unstructured.io**, **Mathpix**, **AWS Textract**, **Azure Document Intelligence** — commercial services that return structured doc trees. Good if budget allows and you want minimal ops.
- **Marker** (open-source, github.com/VikParuchuri/marker) — PDF → markdown, surprisingly good, runs locally on GPU.
- **Docling** (IBM, open-source) — newer, layout-aware, runs locally.
- **Verdict**: Marker or Docling are real options if pdftotext+regex isn't enough and you don't want to maintain a full LLM pipeline. They're focused tools for exactly this problem.

### Recommendation

Build **Option 2** (deterministic parser + review UI) as the v1 pipeline. The DECA format is regular enough that you'll get 80-90% of questions parsed clean. Add **Option 1** (manual editor) as the universal fallback and editor surface — needed anyway. Reserve **Option 3** (local LLM via Ollama) as a v2 enhancement: triggered on parser failure, and offered as an "auto-suggest PI" / "auto-draft explanation" assist in the review UI. Skip commercial OCR services until something the open stack can't handle shows up.

---

## Part 4 — Proposed phased plan

**Phase 0 — Decisions (you)**
PDF source(s), DB choice, hosting target, multi-tenant or single-chapter, who the admin is.

**Phase 1 — Backend foundation (1-2 weeks)**
Postgres schema, Prisma/Drizzle, auth, REST API for read paths. Seed scripts to migrate the existing TS data files into the DB *once* (the 25 cjs scripts already prove this is doable — adapt them to write rows instead of TS files).

**Phase 2 — Frontend rewire (1 week)**
React Router, TanStack Query, split `App.tsx` into routes, swap localStorage for API calls. UI looks identical; data comes from the server. Delete the data files and the 25 cjs scripts.

**Phase 3 — Admin: manual editor (3-5 days)**
CRUD UIs for PIs, exams, questions. Role-gated routes. This is also the "approve parsed question" UI.

**Phase 4 — PDF ingestion pipeline (1-2 weeks)**
Upload endpoint → S3. Background job (BullMQ + Redis, or just a queue table) runs the parser. Review queue UI. Publish action that moves question rows from `status=draft` to `status=published`.

**Phase 5 — Local LLM fallback (optional, 3-5 days)**
Stand up Ollama on the server box. Wire as fallback when parser confidence is low. Surface "AI suggest" buttons in the review UI for PI tagging and explanation drafting.

**Phase 6 — Polish**
Real student analytics dashboards, teacher view, assignment flows, sync across devices.

---

## Part 5 — Locked decisions

| Decision | Choice | Implication |
|---|---|---|
| **PDF corpus** | Some on hand, more later | Build for repeatable ingestion, not one-time. Manual + parser hybrid. |
| **Database** | SQLite now → Supabase (Postgres) later | Use **Drizzle ORM** (clean SQLite↔Postgres swap, type-safe migrations). Avoid SQLite-only features (`AUTOINCREMENT` quirks, dynamic typing, JSON1 unless mirrored to JSONB). UUIDs as text columns. ISO timestamp strings, not SQLite `datetime()`. |
| **Multi-tenant** | Yes, from day one | `chapter_id` FK on every owned row. Server-side scoping middleware on every query. Plan for Supabase **Row-Level Security** policies at migration time — design queries that already pass `chapter_id` so RLS is a tightening, not a rewrite. |
| **Hardware** | Windows desktop, no GPU | Local LLM is realistic but slow. **Ollama on Windows** can run a 7B Q4 model on CPU at ~2-5 tok/s — fine for processing a handful of PDFs/week, not for real-time inference. Treat the LLM as a *batch* enrichment step, not a live API. Until proven needed, don't build it. |
| **Admins** | A team | Review UI needs collaboration: assignment, status (unreviewed / in-review / approved / rejected), reviewer attribution, audit log. Roles: `super_admin`, `content_admin`, `chapter_advisor`, `student`. |
| **Resourcing** | Part-time, team-driven | Bias toward boring proven tech. Use hosted/managed services where cheap. Lean on shadcn admin templates instead of building a design system. Document everything so contributors can pick up tickets cold. |

---

## Part 6 — Tightened Phase 1 spec (Backend foundation)

### Tech picks (concrete)

- **Runtime**: Node 20+ LTS. TypeScript strict mode.
- **Server**: **Hono** (lighter than Fastify, runs anywhere including future edge/Supabase Edge Functions, simpler middleware story).
- **ORM**: **Drizzle**. Schema in `db/schema.ts`. Migrations via `drizzle-kit`.
- **DB drivers**: `better-sqlite3` (dev/now), `postgres` (when on Supabase). Drizzle abstracts both.
- **Auth**: **Better-Auth** (open source, framework-agnostic, supports email/password + OAuth, plays well with multi-tenant orgs). Avoid Clerk (per-seat pricing scales poorly for a chapter app). Avoid rolling our own.
- **Validation**: Zod schemas shared between server and client.
- **File storage**: local disk under `./uploads/` now; pluggable interface (`StorageAdapter`) so swapping to Supabase Storage is one file.
- **Background jobs**: a simple `jobs` table + a cron-ticked worker process. No Redis/BullMQ until volume demands it.
- **Logging**: pino, JSON structured logs.

### Repo layout

```
riya-v2/
├── apps/
│   ├── web/          # Vite + React (the front-end)
│   └── api/          # Hono server
├── packages/
│   ├── db/           # Drizzle schema, migrations, seed scripts
│   ├── shared/       # Zod schemas, shared types
│   └── parser/       # PDF → questions pipeline (no DB deps; pure)
├── uploads/          # PDFs (gitignored)
└── package.json      # pnpm workspace
```

A monorepo (pnpm workspaces) keeps types end-to-end and lets the parser run as a CLI for batch ingestion of existing PDFs.

### Schema (Drizzle, SQLite-compatible)

Same shape as Part 2, with these additions for multi-tenant + admin workflow:

```ts
chapters       (id, name, school, slug_unique, settings_json, created_at)
chapter_members(chapter_id, user_id, role)                     -- m:n + role
users          (id, email_unique, password_hash, primary_event_id, created_at)
                                                                -- chapter membership via chapter_members
performance_indicators(id, code_unique, cluster_id, level, name, description, key_points_json)
                                                                -- 288 rows, global (not chapter-scoped)
exams          (id, chapter_id_nullable, source, year, level, cluster_id, title, pdf_path, status, uploaded_by, created_at)
                                                                -- chapter_id NULL = global library
questions      (id, exam_id, number, stem, correct_answer_label, explanation, notes, source_page,
                review_status, reviewed_by, reviewed_at, parser_confidence)
                                                                -- review_status: draft|in_review|approved|rejected
question_options(id, question_id, label, text)
question_pis   (question_id, pi_id, source: 'parser'|'llm'|'human')
flashcards     (id, owner_id_nullable, chapter_id_nullable, event_id_nullable, pi_id_nullable, term, definition, source)
test_attempts  (id, user_id, exam_id, started_at, finished_at, score, answers_json)
notebook_entries(id, user_id, title, content, source_question_id_nullable, created_at)
audit_log      (id, actor_id, action, entity_type, entity_id, diff_json, created_at)
jobs           (id, kind, payload_json, status, attempts, error, scheduled_at, started_at, finished_at)
```

`chapter_id_nullable` on `exams` and `flashcards` is the multi-tenant escape hatch: chapter-private vs. shared library.

### API surface (v1)

```
Public/auth:
POST   /api/auth/signup
POST   /api/auth/login
POST   /api/auth/logout

Student:
GET    /api/me
GET    /api/clusters
GET    /api/clusters/:id
GET    /api/events/:id
GET    /api/exams?cluster_id=&level=
GET    /api/exams/:id            # includes questions if user has access
GET    /api/pis?cluster_id=
POST   /api/attempts             # start
PATCH  /api/attempts/:id         # submit/answer
GET    /api/me/notebook | POST | DELETE /api/me/notebook/:id
GET    /api/me/flashcards | POST | DELETE | PATCH (star)

Admin (content_admin):
POST   /api/admin/exams                    # multipart, PDF upload → triggers parse job
GET    /api/admin/exams                    # all, with status
GET    /api/admin/exams/:id/review-queue   # questions awaiting review
PATCH  /api/admin/questions/:id            # edit fields
POST   /api/admin/questions/:id/approve
POST   /api/admin/questions/:id/reject
POST   /api/admin/exams/:id/publish        # all approved → published
CRUD   /api/admin/pis                      # rare edits
CRUD   /api/admin/events
CRUD   /api/admin/chapters                 # super_admin only
```

Every admin route writes to `audit_log`.

### Seed plan

One-off script in `packages/db/scripts/seed-from-legacy.ts`: reads the existing `riya/src/data/*.ts` files, normalizes them, inserts into SQLite. The 25 root cjs scripts go in the bin. This is throwaway code — do it once, delete it.

---

## Part 7 — Tightened Phase 4 spec (PDF ingestion)

### Pipeline

```
1. POST /api/admin/exams (multipart)
   → save PDF to uploads/ (or storage adapter)
   → create exams row with status='uploaded'
   → enqueue job kind='parse_exam', payload={exam_id, pdf_path}
   → return 202 + exam_id

2. Worker picks up job
   → run packages/parser:
       a. pdftotext -layout pdf_path → text
       b. detect format: is there a key section? if not, expect a separate key PDF
       c. split into questions (regex on ^\d+\.)
       d. split each into stem + 4 options (regex on ^[A-D]\.)
       e. parse key page → answer letters + PI codes + rationales
       f. join on question number
       g. score each question's confidence (option count, key match, PI resolvable, ...)
   → insert questions with review_status='in_review', parser_confidence=N
   → update exams.status='ready_for_review'

3. Admin opens /admin/exams/:id/review
   → side-by-side: PDF page preview (pdfjs) | parsed question card
   → can edit any field, change PI (typeahead by code/name), reorder options
   → approve / reject / leave for later
   → each action writes audit_log

4. Admin clicks "Publish" on exam
   → all approved questions become user-visible
   → unreviewed/rejected questions stay hidden but kept (for analytics: which exams have low parser quality)
```

### Confidence heuristic (v1)

Per question: `score = sum(weights)` where each passing check contributes:
- `+2` exactly 4 options
- `+2` answer letter from key resolves to one of the options
- `+2` PI code matches a known PI
- `+1` rationale non-empty
- `+1` stem ends in `?` or `:` or has more than 8 words
- `-3` any option longer than 400 chars (likely a parsing run-on)

`parser_confidence` field stores the score. Threshold for auto-approve in v2: ≥7. For v1, every question goes to review regardless — humans always look.

### Manual PDF format note

DECA bundles vary:
- Combined booklet+key (one file) — most common for older ICDC.
- Separate booklet PDF + key PDF — common for cluster exams.
- Scanned image PDFs — rare; if `pdftotext` returns < 500 chars for a 30-page PDF, route to OCR (Tesseract.js) before parsing.

The upload UI should accept either one or two files and label them.

### Review UI requirements

- Keyboard shortcuts: `A` approve, `R` reject, `J/K` next/prev, `E` edit, `Esc` close.
- "Bulk approve all with confidence ≥ X" button for the trusted-format case.
- Filter by status / PI / confidence range.
- "Compare to PDF" toggle — splits view to show source page.
- Reviewer attribution visible.

### Local LLM (Phase 5, deferred)

Don't build until at least 3 different exams have failed deterministic parsing in ways that suggest a model would help. When we do:

- Ollama on the same Windows box. Model: `qwen2.5:7b-instruct-q4_K_M` (best JSON adherence at this size).
- Invoked only as a **fallback for low-confidence questions**, not as the primary parser.
- Prompted with a strict Zod schema; output validated; rejections re-prompted once then sent to manual review.
- Treat output as "parser_confidence=LLM" — humans review it the same way.

---

## Part 8 — What to do this week

Concrete next ticket list, in order:

1. **Spike**: pick 3 DECA exam PDFs (ideally varied vintages). Run `pdftotext -layout` manually. Eyeball whether the regex strategy in Part 7 works. This validates Option 2 before committing to it.
2. Initialize the `riya-v2/` monorepo skeleton (Part 6 layout).
3. Drizzle schema for the core tables. Generate first migration.
4. Seed script porting `src/data/icdc-exams.ts` and `src/data/performanceIndicators.ts` into SQLite. (Skip cluster practice tests for now — focus on ICDC + PIs.)
5. Hono server with read-only endpoints: `GET /api/clusters`, `GET /api/pis`, `GET /api/exams`, `GET /api/exams/:id`. Better-Auth scaffolded but routes unprotected initially.
6. Strip the new front-end down to one route that lists exams from the API and lets you take one. Prove the loop works before porting the rest of the UI.

Stop there, demo it to the team, decide whether to keep going or course-correct.


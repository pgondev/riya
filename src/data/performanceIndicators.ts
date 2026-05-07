export interface PerformanceIndicatorDetail {
  id: string;
  code: string;
  name: string;
  definition: string;
  keyPoints: string[];
  roleplayTips: string[];
}

export const PERFORMANCE_INDICATOR_DETAILS: Record<string, PerformanceIndicatorDetail> = {

  // ── BL: Business Law ──────────────────────────────────────────────────────

  "BL001": {
    id: "BL001",
    code: "BL:001",
    name: "Explain the nature of business law",
    definition: "Business law consists of the rules, statutes, codes, and regulations that govern commercial interactions, protecting both businesses and the public in a market economy.",
    keyPoints: [
      "Sources: Business law flows from constitutions, federal/state statutes, administrative regulations, and case law.",
      "Scope: It covers contracts, torts, property, employment, and commercial transactions.",
      "Protection: Laws shield consumers, employees, and investors from fraudulent or harmful business practices.",
      "Compliance: Violations can result in civil liability, criminal penalties, fines, or loss of operating licenses.",
      "Evolution: Regulations expand in response to new technology, globalization, and societal expectations."
    ],
    roleplayTips: [
      "\"Before we move forward, I want to flag that this arrangement has potential breach-of-contract exposure—let me walk you through how we can structure it to limit our liability.\"",
      "\"Regulatory compliance isn't just a legal checkbox; it's a competitive advantage because it builds trust with customers and investors.\"",
      "\"Our legal framework here is grounded in the Uniform Commercial Code, which standardizes commercial transactions across state lines and gives us predictability.\""
    ]
  },

  "BL002": {
    id: "BL002",
    code: "BL:002",
    name: "Explain types of business ownership",
    definition: "Business ownership structures define how a business is legally organized, determining liability, taxation, management control, and the ability to raise capital.",
    keyPoints: [
      "Sole Proprietorship: One owner holds all control and unlimited personal liability for debts.",
      "Partnership: Two or more owners share profits, management, and liability as defined in a partnership agreement.",
      "Corporation: A separate legal entity that limits owner liability but faces double taxation on profits.",
      "LLC: A limited liability company blends corporate liability protection with pass-through taxation flexibility.",
      "Selection Factors: Owners choose a structure based on liability exposure, tax implications, funding needs, and growth plans."
    ],
    roleplayTips: [
      "\"Given your growth trajectory and investor interest, forming a C-corp now positions you to issue equity and attract venture capital down the road.\"",
      "\"An LLC gives you the liability shield of a corporation while letting profits flow directly to your personal return—that's significant tax savings at your revenue level.\"",
      "\"Unlimited personal liability in a sole proprietorship means your house and savings are on the line; let's discuss restructuring before you scale.\""
    ]
  },

  "BL003": {
    id: "BL003",
    code: "BL:003",
    name: "Describe the nature of legally binding contracts",
    definition: "A legally binding contract is an enforceable agreement between two or more parties that requires an offer, acceptance, consideration, capacity, and legality to be valid.",
    keyPoints: [
      "Offer: One party must make a definite proposal that the other can accept or reject.",
      "Acceptance: Agreement must mirror the offer exactly—any modification creates a counteroffer.",
      "Consideration: Each party must give something of value; gratuitous promises are generally unenforceable.",
      "Capacity: Parties must be of legal age and sound mind to enter a binding agreement.",
      "Legality: Contracts for illegal activities are void and cannot be enforced by courts."
    ],
    roleplayTips: [
      "\"This agreement is enforceable because we have clear offer, acceptance, and mutual consideration—both sides are exchanging value.\"",
      "\"Without written documentation of the consideration, we risk a court finding no valid contract if the relationship turns adversarial.\"",
      "\"I'd recommend we include a liquidated-damages clause so both parties know upfront what breach looks like financially—that prevents costly litigation.\""
    ]
  },

  "BL004": {
    id: "BL004",
    code: "BL:004",
    name: "Describe the legal relationship between businesses and consumers",
    definition: "Consumer protection law defines the rights of buyers and the obligations of sellers, ensuring fair trade, truthful advertising, product safety, and recourse for harm.",
    keyPoints: [
      "FTC Authority: The Federal Trade Commission prohibits deceptive advertising and unfair trade practices.",
      "Product Liability: Businesses can be held liable for injuries caused by defective products under strict liability doctrine.",
      "Warranty Law: Express and implied warranties create enforceable promises about product quality and fitness.",
      "Privacy Rights: Laws like CCPA and GDPR restrict how businesses collect and use consumer data.",
      "Remedies: Consumers can seek refunds, replacements, or damages through regulatory agencies or civil courts."
    ],
    roleplayTips: [
      "\"Under the implied warranty of merchantability, our product must do what a reasonable consumer expects—failing that standard creates significant liability.\"",
      "\"Our privacy policy isn't just legal boilerplate; it's a contractual commitment to customers about how we handle their data.\"",
      "\"Proactively addressing this complaint keeps us out of a class-action scenario and preserves the customer relationship at a fraction of the litigation cost.\""
    ]
  },

  "BL005": {
    id: "BL005",
    code: "BL:005",
    name: "Describe the nature of regulatory compliance",
    definition: "Regulatory compliance is the process by which organizations adhere to laws, regulations, guidelines, and specifications relevant to their industry and operations.",
    keyPoints: [
      "Mandatory vs. Voluntary: Some compliance is legally required; industry standards may be voluntary but competitively expected.",
      "Compliance Programs: Effective programs include written policies, employee training, monitoring, and corrective action plans.",
      "Industry-Specific Rules: Healthcare faces HIPAA, finance faces SEC/FINRA, food businesses face FDA regulations.",
      "Risk of Non-Compliance: Penalties include fines, license revocation, reputational damage, and criminal prosecution.",
      "Ongoing Process: Regulations change frequently, requiring businesses to continuously monitor and update practices."
    ],
    roleplayTips: [
      "\"We've built compliance into our onboarding workflow so employees understand the rules before they ever touch customer data.\"",
      "\"A compliance audit right now is cheaper than a regulatory fine later—I'd recommend we schedule one this quarter.\"",
      "\"Our ISO certification demonstrates to clients that we meet internationally recognized quality and safety standards, which is a genuine differentiator.\""
    ]
  },

  "BL006": {
    id: "BL006",
    code: "BL:006",
    name: "Explain the nature of agency relationships",
    definition: "An agency relationship exists when one party (the agent) is authorized to act on behalf of another (the principal), creating legal obligations and liabilities for both parties.",
    keyPoints: [
      "Creation: Agency can be formed by express agreement, implication, ratification, or apparent authority.",
      "Fiduciary Duty: Agents must act in the principal's best interest, avoiding conflicts of interest and self-dealing.",
      "Scope of Authority: Principals are bound only by actions the agent takes within their actual or apparent authority.",
      "Liability: Principals can be held liable for torts committed by agents acting within the scope of employment.",
      "Termination: Agency ends by mutual agreement, completion of purpose, or revocation by either party."
    ],
    roleplayTips: [
      "\"As your agent in this transaction, I have a fiduciary duty to disclose any conflicts of interest before we proceed.\"",
      "\"Our sales rep exceeded their authorized discount level, so we may not be bound by that price—let me clarify the scope of their authority in writing going forward.\"",
      "\"Apparent authority means if we allow an employee to appear authorized to clients, we're legally responsible for commitments they make.\""
    ]
  },

  "BL007": {
    id: "BL007",
    code: "BL:007",
    name: "Discuss the nature of debtor-creditor relationships",
    definition: "A debtor-creditor relationship arises when one party (debtor) owes a financial obligation to another (creditor), governed by contract terms and applicable lending laws.",
    keyPoints: [
      "Credit Agreement: The contract specifies loan amount, interest rate, repayment schedule, and default consequences.",
      "Secured vs. Unsecured: Secured debt is backed by collateral; unsecured debt relies solely on the borrower's creditworthiness.",
      "Default Remedies: Creditors may pursue collection, repossession, or legal judgment against a defaulting debtor.",
      "Bankruptcy Protection: Federal bankruptcy law allows debtors to restructure or discharge debts under court supervision.",
      "Consumer Protections: FDCPA restricts collection practices; TILA requires lenders to disclose credit terms clearly."
    ],
    roleplayTips: [
      "\"We need to renegotiate the covenant on this line of credit before we breach the debt-to-equity ratio threshold—proactive restructuring is far better than default.\"",
      "\"Requiring a UCC lien on their inventory as collateral gives us a secured position that dramatically reduces our exposure if they can't repay.\"",
      "\"Under the Fair Debt Collection Practices Act, we have very specific rules about when and how we can contact this customer—let me make sure our collections team is trained on those limits.\""
    ]
  },

  "BL008": {
    id: "BL008",
    code: "BL:008",
    name: "Describe the nature of negotiable instruments",
    definition: "Negotiable instruments are written documents that promise or order payment of a specific sum of money and can be transferred from one party to another in commerce.",
    keyPoints: [
      "Types: Common negotiable instruments include checks, promissory notes, drafts, and certificates of deposit.",
      "Requirements: To be negotiable, an instrument must be in writing, signed, unconditional, for a fixed amount, and payable on demand or at a definite time.",
      "Transfer: Instruments are transferred by endorsement and delivery, conveying rights to the new holder.",
      "Holder in Due Course: A good-faith purchaser for value can enforce the instrument free of most defenses.",
      "Dishonor: Failure to pay when due allows the holder to pursue legal remedies against the maker or endorsers."
    ],
    roleplayTips: [
      "\"This promissory note is a negotiable instrument—once we endorse it to our bank, they become a holder in due course with strong collection rights.\"",
      "\"A cashier's check eliminates counterparty risk because the bank, not the buyer, is liable for payment upon presentment.\"",
      "\"We should require payment by certified funds for this transaction; a personal check creates too much dishonor risk at this dollar amount.\""
    ]
  },

  "BL009": {
    id: "BL009",
    code: "BL:009",
    name: "Describe the nature of property rights",
    definition: "Property rights define the legal authority to use, transfer, exclude others from, and benefit from real, personal, or intellectual property.",
    keyPoints: [
      "Real Property: Land and permanently attached structures are governed by deed, title, and zoning regulations.",
      "Personal Property: Tangible movable assets can be owned, sold, leased, or gifted subject to contract law.",
      "Intellectual Property: Patents, trademarks, copyrights, and trade secrets protect creative and commercial innovation.",
      "Transfers: Property changes hands through sale, gift, inheritance, or adverse possession under specific legal conditions.",
      "Limitations: Eminent domain, easements, and zoning laws can restrict how owners use their property."
    ],
    roleplayTips: [
      "\"We need to file a trademark registration immediately—without it, a competitor can adopt a confusingly similar name and we have limited legal recourse.\"",
      "\"Our NDA protects this trade secret as intellectual property, but only if we consistently take steps to keep it confidential.\"",
      "\"The lease grants us an easement across their parking lot, which is a real property right that transfers with the land even if they sell it.\""
    ]
  },

  "BL010": {
    id: "BL010",
    code: "BL:010",
    name: "Explain types of business risk",
    definition: "Business risk refers to the exposure a company faces to factors that could reduce profits or cause failure, including economic, legal, strategic, operational, and reputational threats.",
    keyPoints: [
      "Economic Risk: Downturns, inflation, and currency fluctuations can erode revenue and increase costs.",
      "Legal/Regulatory Risk: Non-compliance with laws can trigger fines, litigation, or forced shutdowns.",
      "Operational Risk: Process failures, supply chain disruptions, and technology outages threaten daily operations.",
      "Reputational Risk: Negative publicity or ethical scandals can permanently damage customer trust and brand equity.",
      "Mitigation: Businesses manage risk through insurance, diversification, contingency planning, and compliance programs."
    ],
    roleplayTips: [
      "\"Our risk matrix shows that supply chain concentration is our highest-probability, high-impact exposure—we need a second-source supplier strategy immediately.\"",
      "\"Cyber liability insurance doesn't prevent a data breach, but it limits the financial fallout and covers notification costs, which can reach millions.\"",
      "\"Diversifying revenue across three market segments means no single customer downturn can threaten the business's solvency.\""
    ]
  },

  // ── CO: Communications ────────────────────────────────────────────────────

  "CO001": {
    id: "CO001",
    code: "CO:001",
    name: "Explain the nature of effective communications",
    definition: "Effective communication is the clear, accurate, and timely exchange of information between a sender and receiver, resulting in shared understanding and appropriate action.",
    keyPoints: [
      "Components: Every communication involves a sender, message, channel, receiver, and feedback loop.",
      "Clarity: Effective messages use precise language, logical structure, and appropriate vocabulary for the audience.",
      "Channel Selection: Choosing the right medium—email, face-to-face, phone—depends on urgency, complexity, and relationship.",
      "Barriers: Noise, assumptions, cultural differences, and emotional filters can distort the intended message.",
      "Feedback: Confirming understanding through responses or paraphrasing closes the communication loop."
    ],
    roleplayTips: [
      "\"Let me confirm my understanding—you're saying the deadline moved to Friday and the budget is now capped at fifty thousand? I want to make sure we're aligned before I brief the team.\"",
      "\"I chose to deliver this update in person rather than over email because the complexity of the issue warrants a real-time dialogue where we can address questions immediately.\"",
      "\"To ensure nothing gets lost in translation, I'll follow up this conversation with a written summary and action items within the hour.\""
    ]
  },

  "CO002": {
    id: "CO002",
    code: "CO:002",
    name: "Identify sources of information for use in making business decisions",
    definition: "Business decision-making relies on gathering data from primary sources (original research) and secondary sources (published data) to ensure decisions are informed and evidence-based.",
    keyPoints: [
      "Primary Sources: Surveys, interviews, focus groups, and direct observation generate original, first-hand data.",
      "Secondary Sources: Industry reports, government databases, academic journals, and trade publications provide existing research.",
      "Internal Sources: Sales records, CRM data, financial statements, and employee feedback reveal company-specific insights.",
      "Reliability Assessment: Sources should be evaluated for accuracy, currency, authority, purpose, and bias.",
      "Synthesis: Combining multiple source types creates a more complete and credible information base for decisions."
    ],
    roleplayTips: [
      "\"Before we finalize this market entry strategy, I want to cross-reference our internal sales data with the latest IBISWorld industry report to validate our assumptions.\"",
      "\"The Bureau of Labor Statistics employment data gives us a reliable, unbiased baseline, but I'd also commission a primary survey to capture this specific demographic's preferences.\"",
      "\"Our CRM shows a 23% repeat-purchase rate in the Northeast—that internal data point is more actionable than any third-party benchmark for this decision.\""
    ]
  },

  "CO003": {
    id: "CO003",
    code: "CO:003",
    name: "Handle telephone calls in a businesslike manner",
    definition: "Professional telephone communication requires proper greeting, active listening, clear message delivery, and accurate documentation to represent the organization effectively.",
    keyPoints: [
      "Opening: Identify yourself and your organization immediately to establish professionalism and context.",
      "Tone: A warm, clear, and measured voice conveys competence and respect even without visual cues.",
      "Listening: Avoid interrupting; take notes to capture key details and action items accurately.",
      "Hold Protocol: Always ask permission before placing someone on hold and provide a realistic wait time.",
      "Closing: Summarize agreed actions, confirm contact information, and end with a courteous farewell."
    ],
    roleplayTips: [
      "\"Thank you for calling Acme Solutions, this is Jordan in client services—how can I help you today?\"",
      "\"I want to make sure I have all the details right—could you repeat the account number? I'd rather confirm now than send you to the wrong department.\"",
      "\"I'm going to need to pull that information; may I place you on a brief hold, or would you prefer I call you back within ten minutes?\""
    ]
  },

  "CO004": {
    id: "CO004",
    code: "CO:004",
    name: "Write business letters",
    definition: "Business letters are formal written communications that represent an organization professionally, following standard formatting conventions to convey information clearly and credibly.",
    keyPoints: [
      "Format: Standard business letters use block or modified block format with date, addresses, salutation, body, and closing.",
      "Tone: Professional letters are direct, courteous, and free of slang, emotional language, or ambiguity.",
      "Purpose Clarity: State the letter's objective in the opening paragraph so the reader immediately understands the intent.",
      "Conciseness: Limit length by including only relevant information; respect the reader's time.",
      "Proofreading: Grammar, spelling, and factual errors undermine credibility and must be eliminated before sending."
    ],
    roleplayTips: [
      "\"I structured the letter with the key ask in the first paragraph—busy executives decide whether to read on based on the opening line.\"",
      "\"Using the recipient's correct title and full name in the salutation signals attention to detail, which matters when you're asking someone for a significant decision.\"",
      "\"This letter functions as a paper trail confirming the verbal agreement we reached last week, which protects both parties if there's any future misunderstanding.\""
    ]
  },

  "CO005": {
    id: "CO005",
    code: "CO:005",
    name: "Write informational messages",
    definition: "Informational messages convey facts, updates, instructions, or data to a defined audience in a clear, organized format suited to the channel and recipient.",
    keyPoints: [
      "Purpose: Informational messages transmit data without seeking a decision, unlike persuasive messages.",
      "Organization: Use the direct approach—lead with the most important information, then add supporting detail.",
      "Audience Adaptation: Tailor technical depth and vocabulary to the reader's knowledge level and role.",
      "Formatting: Bullet points, headers, and white space improve scannability in emails and memos.",
      "Accuracy: All facts, figures, and dates must be verified before distribution to maintain credibility."
    ],
    roleplayTips: [
      "\"I used bullet points rather than paragraphs in this update so the field team can scan it in thirty seconds during a busy shift.\"",
      "\"The subject line reads 'Q3 Sales Results—Action Required by Friday' so recipients immediately know the urgency and what they need to do.\"",
      "\"I led with the deadline change because that's the most time-sensitive piece; the context and rationale follow for those who need it.\""
    ]
  },

  "CO006": {
    id: "CO006",
    code: "CO:006",
    name: "Prepare simple written reports",
    definition: "A business report is a structured document that presents information, analysis, and recommendations on a specific topic to support organizational decision-making.",
    keyPoints: [
      "Structure: Reports typically include an executive summary, introduction, findings, analysis, conclusions, and recommendations.",
      "Executive Summary: A one-page overview allows busy decision-makers to grasp key points without reading the full report.",
      "Data Visualization: Charts, tables, and graphs make complex quantitative data more accessible and persuasive.",
      "Objectivity: Reports should present evidence fairly, acknowledging limitations and alternative interpretations.",
      "Recommendations: Action-oriented conclusions tied directly to evidence give the report practical value."
    ],
    roleplayTips: [
      "\"The executive summary on page one captures the three key findings—leadership can make a decision from that page alone if time is short.\"",
      "\"I included a variance analysis comparing projected versus actual revenue because decision-makers need to understand why the gap occurred, not just that it exists.\"",
      "\"Each recommendation in this report links directly to a specific data point so you can see exactly what's driving the suggested course of action.\""
    ]
  },

  "CO007": {
    id: "CO007",
    code: "CO:007",
    name: "Use presentation software",
    definition: "Presentation software enables communicators to structure and deliver visual, slide-based content that supports spoken messages and engages an audience in business settings.",
    keyPoints: [
      "Design Principles: Limit each slide to one idea; use high contrast, readable fonts, and minimal text.",
      "Visual Hierarchy: Headlines, subheads, and bullet points guide the audience's eye and reinforce key messages.",
      "Data Slides: Charts should have clear titles, labeled axes, and highlighted takeaways rather than raw data dumps.",
      "Speaker Notes: Notes enable presenters to stay on message without reading directly from slides.",
      "Delivery Integration: Slides support the speaker—they should not replace or overshadow the human connection."
    ],
    roleplayTips: [
      "\"I kept each slide to a single headline and supporting visual so the audience listens to me explain, rather than reading paragraphs off the screen.\"",
      "\"This bar chart highlights Q4 as an outlier with the bar colored in red—the visual immediately directs attention to what needs discussion.\"",
      "\"I'm going to advance the slide now to show you the trend line, which makes the growth story far more compelling than a table of numbers would.\""
    ]
  },

  "CO008": {
    id: "CO008",
    code: "CO:008",
    name: "Demonstrate oral presentation skills",
    definition: "Oral presentation skills involve structuring and delivering spoken information persuasively and clearly to an audience using voice, body language, and appropriate content.",
    keyPoints: [
      "Structure: Effective presentations have a clear opening, organized body, and memorable conclusion with a call to action.",
      "Vocal Variety: Varying pace, pitch, and volume maintains audience attention and emphasizes key points.",
      "Eye Contact: Making consistent eye contact with different audience members builds connection and credibility.",
      "Body Language: Open posture, purposeful gestures, and controlled movement reinforce spoken messages.",
      "Q&A Handling: Listening fully, pausing to think, and answering concisely demonstrates expertise under pressure."
    ],
    roleplayTips: [
      "\"I'll start with a question to engage you immediately: how much revenue do you think poor communication costs the average Fortune 500 company each year?\"",
      "\"Let me pause here and check in—does that financial model make sense before I move to the implementation timeline?\"",
      "\"That's an excellent question about scalability; the short answer is yes, and I'll explain exactly how we've accounted for that in the third section.\""
    ]
  },

  "CO009": {
    id: "CO009",
    code: "CO:009",
    name: "Write persuasive messages",
    definition: "Persuasive messages use logical argument, emotional appeal, and credible evidence to influence the attitudes, beliefs, or actions of a target audience.",
    keyPoints: [
      "AIDA Framework: Effective persuasion captures Attention, builds Interest, creates Desire, and calls for Action.",
      "Audience Analysis: Understanding the reader's needs, values, and objections allows writers to tailor the appeal.",
      "Evidence: Data, testimonials, case studies, and expert opinion substantiate claims and overcome skepticism.",
      "Tone: Confident but respectful language avoids coming across as manipulative or high-pressure.",
      "Call to Action: A specific, time-bound request tells the reader exactly what to do next and when."
    ],
    roleplayTips: [
      "\"Our pilot customers reduced processing time by 40%—that's not a projection, that's a documented result from a company with the same operational profile as yours.\"",
      "\"I'm not asking you to make a final commitment today; I'm asking for a 30-minute technical call so your team can evaluate this with full information.\"",
      "\"The cost of inaction here isn't zero—every month you delay, you're leaving approximately twelve thousand dollars in efficiency gains on the table.\""
    ]
  },

  "CO010": {
    id: "CO010",
    code: "CO:010",
    name: "Facilitate a meeting",
    definition: "Meeting facilitation involves planning, leading, and managing group discussions to achieve defined objectives efficiently while ensuring all participants contribute productively.",
    keyPoints: [
      "Agenda: A distributed agenda with time allocations sets expectations and keeps the meeting focused.",
      "Opening: Clarifying the meeting's objective and ground rules at the start prevents scope creep.",
      "Participation: Skilled facilitators draw out quieter voices and tactfully redirect dominant speakers.",
      "Time Management: Monitoring time and parking off-topic discussions ensures the meeting ends on schedule.",
      "Closing: Summarizing decisions, assigning action items with owners and deadlines, and confirming next steps converts talk into progress."
    ],
    roleplayTips: [
      "\"Before we start, let me confirm our objective today: we're here to align on the product launch date, not to revisit the scope—let's keep that boundary.\"",
      "\"I'm going to table that pricing discussion for a separate session so we stay on track; I'll add it to next week's agenda.\"",
      "\"To close out, let me read back the action items: Sarah owns the vendor proposal by Thursday, and Marcus sends the revised timeline by end of day Friday—does that match everyone's understanding?\""
    ]
  },

  "CO011": {
    id: "CO011",
    code: "CO:011",
    name: "Explain the nature of effective written communications",
    definition: "Effective written communication achieves its intended purpose by presenting accurate, clear, and appropriately formatted information tailored to the audience and channel.",
    keyPoints: [
      "Clarity: Sentences should be direct, free of jargon, and structured so the meaning is immediately apparent.",
      "Conciseness: Every word must earn its place; unnecessary padding dilutes the message and wastes the reader's time.",
      "Correctness: Grammar, spelling, and factual accuracy protect credibility and prevent misinterpretation.",
      "Completeness: The message must include all information the reader needs to act or respond without follow-up.",
      "Tone Consistency: Written tone should match the relationship and context—formal for clients, direct for colleagues."
    ],
    roleplayTips: [
      "\"I rewrote the executive's memo in active voice and cut it from four paragraphs to two—the message is the same but now it actually gets read.\"",
      "\"Ambiguous phrasing in a contract is a legal risk; every term needs to be defined precisely so there's no room for interpretation disputes.\"",
      "\"A poorly written email to a major client can cost us the relationship before we ever get on the phone—written communications are often the only impression we make.\""
    ]
  },

  "CO012": {
    id: "CO012",
    code: "CO:012",
    name: "Address people properly",
    definition: "Properly addressing people in business contexts demonstrates respect, cultural awareness, and professionalism by using correct titles, names, and forms of address.",
    keyPoints: [
      "Titles: Use professional titles (Dr., Ms., Mr.) until invited to use first names, especially with senior contacts.",
      "Name Accuracy: Verify the correct spelling and pronunciation of names before meetings or written communication.",
      "Cultural Sensitivity: Address norms vary globally—research expectations when communicating across cultures.",
      "Hierarchy Awareness: Formal address signals respect in hierarchical organizations and first meetings.",
      "Consistency: Consistent, correct address in all written and verbal channels reinforces professional credibility."
    ],
    roleplayTips: [
      "\"I always verify the correct title before the first meeting—addressing a Ph.D. as 'Mr.' signals that I haven't done my homework.\"",
      "\"In our correspondence with the Tokyo office, I'll use family name first with the honorific 'san'—adapting to local business etiquette shows respect and builds trust.\"",
      "\"Until our client explicitly says to call her by her first name, I'll use 'Ms. Chen'—it's a small detail that communicates a lot about our professionalism.\""
    ]
  },

  "CO013": {
    id: "CO013",
    code: "CO:013",
    name: "Give verbal directions for completing job tasks",
    definition: "Giving verbal directions involves communicating task instructions clearly, sequentially, and completely so that the recipient can perform the work accurately without repeated clarification.",
    keyPoints: [
      "Clarity: Use specific, concrete language rather than vague or assumed instructions.",
      "Sequencing: Present steps in chronological order with logical transitions so the listener can follow without backtracking.",
      "Confirmation: Ask the listener to repeat key steps to verify they understood the instructions correctly.",
      "Availability: Let the employee know where to go for questions or if they encounter an unexpected situation.",
      "Feedback: After the task, debrief on what went well and what could be clearer for next time."
    ],
    roleplayTips: [
      "\"Let me walk you through this in order: first you'll log into the portal, then pull the weekly report, and finally export it as a PDF to the shared drive—does that make sense so far?\"",
      "\"Before you start, can you repeat back the three steps so I know we're on the same page? I'd rather spend thirty seconds confirming now than have you redo two hours of work.\"",
      "\"If you run into anything unexpected at step four, come find me immediately rather than guessing—I'd rather be interrupted than have the process break down.\""
    ]
  },

  "CO014": {
    id: "CO014",
    code: "CO:014",
    name: "Exhibit active listening skills",
    definition: "Active listening is the deliberate practice of fully concentrating on, understanding, responding to, and retaining what a speaker communicates, both verbally and nonverbally.",
    keyPoints: [
      "Attention: Eliminate distractions, maintain eye contact, and give the speaker your full mental presence.",
      "Withholding Judgment: Avoid forming responses while the other person is still speaking.",
      "Clarifying Questions: Ask open-ended questions to deepen understanding and show genuine interest.",
      "Paraphrasing: Reflect the speaker's message back in your own words to confirm accuracy.",
      "Nonverbal Cues: Nodding, appropriate facial expressions, and an open posture signal engagement and encourage sharing."
    ],
    roleplayTips: [
      "\"Let me make sure I'm understanding you correctly—you're saying the delivery timeline is the primary concern, not the price point? I want to address the right issue.\"",
      "\"I noticed you hesitated when you mentioned the budget; is that an area where you have flexibility, or is it a firm constraint I should design around?\"",
      "\"I'm going to put my phone away completely for this conversation because what you're describing deserves my full attention.\""
    ]
  },

  "CO015": {
    id: "CO015",
    code: "CO:015",
    name: "Ask relevant questions",
    definition: "Asking relevant questions in business settings gathers information, clarifies understanding, uncovers needs, and moves conversations productively toward solutions or decisions.",
    keyPoints: [
      "Open vs. Closed: Open questions elicit narrative responses; closed questions confirm specific facts—both serve distinct purposes.",
      "Relevance: Every question should advance the conversation's objective, not satisfy idle curiosity.",
      "Timing: Questions asked before speaking show preparation; questions asked during discussion show engagement.",
      "Follow-Up: Follow-up questions based on the answer demonstrate active listening and deeper interest.",
      "Framing: Well-framed questions are neutral and non-threatening, making respondents more willing to share fully."
    ],
    roleplayTips: [
      "\"What does success look like for you twelve months from now? I want to align our proposal with your actual outcome goals, not just the stated deliverables.\"",
      "\"Can you walk me through how your team currently handles that workflow? Understanding the existing process helps me identify exactly where we add value.\"",
      "\"You mentioned efficiency as a priority—is that about reducing headcount cost, processing time, or error rate? The answer changes how I'd structure our solution.\""
    ]
  },

  "CO016": {
    id: "CO016",
    code: "CO:016",
    name: "Interpret others' nonverbal cues",
    definition: "Interpreting nonverbal cues involves reading body language, facial expressions, gestures, and tone of voice to understand the emotions and intentions behind spoken words.",
    keyPoints: [
      "Types: Nonverbal communication includes facial expressions, posture, gestures, eye contact, proximity, and tone.",
      "Congruence: When verbal and nonverbal signals align, the message is credible; incongruence signals hidden concerns.",
      "Cultural Variation: Nonverbal norms differ across cultures—a gesture may mean different things in different countries.",
      "Context Matters: Interpret cues in context; crossed arms may indicate skepticism or simply cold temperature.",
      "Application: Reading nonverbal cues allows communicators to adapt their approach in real time."
    ],
    roleplayTips: [
      "\"I noticed you leaned back and folded your arms when I mentioned the implementation timeline—is there a concern about the schedule I haven't fully addressed?\"",
      "\"Your tone shifted when we discussed the pricing model; I want to make sure we've answered all your questions about the cost structure before we move on.\"",
      "\"Reading the room tells me this isn't the right moment for the full product demo—let me first address the budget concerns that are clearly on everyone's mind.\""
    ]
  },

  "CO017": {
    id: "CO017",
    code: "CO:017",
    name: "Explain the nature of staff communication",
    definition: "Staff communication encompasses the formal and informal channels, messages, and practices through which organizations share information internally to coordinate work and build culture.",
    keyPoints: [
      "Formal Channels: Memos, emails, intranet posts, and town halls are structured methods for official organizational messages.",
      "Informal Channels: Workplace conversations, instant messaging, and team chats transmit culture, context, and informal updates.",
      "Downward Communication: Management communicates goals, policies, and feedback to employees below them.",
      "Upward Communication: Employees share performance data, concerns, and ideas with leadership.",
      "Horizontal Communication: Peers and cross-functional teams exchange information to coordinate tasks and projects."
    ],
    roleplayTips: [
      "\"Our weekly team stand-up isn't just a status update—it's a structured touchpoint that prevents information silos and keeps everyone moving in the same direction.\"",
      "\"When major changes aren't communicated clearly from leadership, the rumor mill fills the vacuum—which is why I prioritize transparent, timely internal messaging.\"",
      "\"I'm proposing a cross-departmental Slack channel for this project so sales, marketing, and ops are seeing the same information in real time rather than working from different versions.\""
    ]
  },

  "CO018": {
    id: "CO018",
    code: "CO:018",
    name: "Participate in group/team discussion",
    definition: "Productive participation in team discussions involves contributing relevant ideas, listening respectfully, building on others' input, and working toward consensus or a decision.",
    keyPoints: [
      "Preparation: Reviewing the agenda and relevant materials before a discussion enables more substantive contributions.",
      "Contribution Quality: Share ideas that advance the group's objective rather than seeking personal recognition.",
      "Respectful Challenge: Disagreement should address ideas and evidence, not personalities or positions.",
      "Building on Ideas: Acknowledging others' contributions before adding your own signals collaboration over competition.",
      "Consensus Building: Effective participants help the group move from debate to decision by summarizing points of agreement."
    ],
    roleplayTips: [
      "\"I want to build on what Marcus just said—his point about customer acquisition cost actually connects directly to the pricing model I'd like to propose.\"",
      "\"I see the data differently than what's been suggested, and I think it's worth examining before we commit to this direction—can I share an alternative interpretation?\"",
      "\"It sounds like the group is aligned on the timeline but split on the vendor; let me summarize both positions so we can make a structured decision.\""
    ]
  },

  "CO019": {
    id: "CO019",
    code: "CO:019",
    name: "Communicate effectively with customers",
    definition: "Effective customer communication involves listening to customer needs, responding with accurate information, and engaging in ways that build trust and satisfaction.",
    keyPoints: [
      "Empathy: Acknowledging the customer's feelings or situation before responding demonstrates that their concern is heard.",
      "Clarity: Use language the customer understands, avoiding internal jargon or technical terms without explanation.",
      "Responsiveness: Timely responses signal that the customer is valued and that their issue is a priority.",
      "Problem-Solving Orientation: Frame every interaction around what can be done to help, not what policy prevents.",
      "Follow-Through: Delivering on commitments made during the interaction builds credibility and loyalty."
    ],
    roleplayTips: [
      "\"I completely understand how frustrating a delayed delivery is, especially for a time-sensitive event—let me see exactly where your order is right now and what we can do.\"",
      "\"What I can do for you today is expedite the replacement shipment and apply a 15% credit to your next order as an apology for the inconvenience.\"",
      "\"Before I transfer you to the technical team, let me give you my direct extension so you have a point of contact if anything gets lost in the handoff.\""
    ]
  },

  "CO020": {
    id: "CO020",
    code: "CO:020",
    name: "Conduct interviews",
    definition: "Business interviews are structured conversations used to gather information, assess candidates, or research customer or market insights through a prepared set of questions and active listening.",
    keyPoints: [
      "Preparation: Define the interview's objectives and prepare questions that directly address those goals.",
      "Open-Ended Questions: Behavioral and situational questions reveal more than yes/no questions in candidate interviews.",
      "Structured Format: A consistent question set allows fair comparison across multiple interviewees.",
      "Note-Taking: Documenting responses during the interview ensures accuracy when making post-interview evaluations.",
      "Legal Boundaries: Employment interviews must avoid questions about protected characteristics like age, religion, or national origin."
    ],
    roleplayTips: [
      "\"Tell me about a time you had to manage a project under a tight deadline with limited resources—what was your approach and what was the outcome?\"",
      "\"I ask every candidate that behavioral question because past behavior in a real situation is a far better predictor than a hypothetical answer.\"",
      "\"We avoid questions about family status or plans because they touch on protected classes under Title VII—our questions stay strictly focused on job-relevant competencies.\""
    ]
  },

  "CO021": {
    id: "CO021",
    code: "CO:021",
    name: "Explain the nature of communications plans",
    definition: "A communications plan is a strategic document that outlines what messages an organization will deliver, to which audiences, through which channels, and on what timeline to achieve business objectives.",
    keyPoints: [
      "Audience Segmentation: Different stakeholders—employees, investors, customers, media—require tailored messages and channels.",
      "Message Strategy: Core messages must be consistent across channels while being adapted for each audience.",
      "Channel Mix: Effective plans use a combination of owned, earned, and paid media to reach diverse audiences.",
      "Timing: Message sequencing and scheduling ensure that the right people receive information at the right moment.",
      "Measurement: KPIs like reach, engagement rate, and message recall allow teams to evaluate plan effectiveness."
    ],
    roleplayTips: [
      "\"Our communications plan sequences the employee announcement before the press release—internal audiences should never learn about major changes from the news.\"",
      "\"We've mapped each stakeholder group to a specific channel: executives get direct briefings, employees get a town hall, and customers get an email campaign with a FAQ page.\"",
      "\"We'll measure success by tracking open rates, earned media mentions, and a post-campaign Net Promoter Score survey to see if the message actually landed.\""
    ]
  },

  // ── CR: Customer Relations ────────────────────────────────────────────────

  "CR001": {
    id: "CR001",
    code: "CR:001",
    name: "Explain the nature of customer relationship management",
    definition: "Customer relationship management (CRM) is a business strategy and technology approach that manages interactions with current and potential customers to improve retention, loyalty, and lifetime value.",
    keyPoints: [
      "CRM Systems: Software platforms centralize customer data, interaction history, and sales pipeline in one accessible location.",
      "Customer Lifetime Value: CRM strategy focuses on maximizing long-term revenue from each customer, not just single transactions.",
      "Personalization: Data-driven insights allow businesses to tailor communications, offers, and service to individual preferences.",
      "Retention vs. Acquisition: Retaining an existing customer costs significantly less than acquiring a new one.",
      "Cross-Functional Impact: CRM connects sales, marketing, and service teams around a unified view of the customer."
    ],
    roleplayTips: [
      "\"Our CRM tells me you last purchased in Q2 and have been interested in the enterprise tier—I want to make sure we're proactively addressing your evolving needs before renewal.\"",
      "\"Increasing customer retention by just 5% can increase profitability by 25 to 95%—that's why CRM investment has a measurable ROI, not just a soft benefit.\"",
      "\"Every customer interaction, positive or negative, gets logged in our CRM so any team member can provide continuity without the customer having to repeat their history.\""
    ]
  },

  "CR002": {
    id: "CR002",
    code: "CR:002",
    name: "Determine factors affecting business risk",
    definition: "Businesses assess internal and external factors that create uncertainty in achieving objectives, including market dynamics, operational vulnerabilities, legal exposure, and competitive threats.",
    keyPoints: [
      "External Factors: Economic conditions, regulatory changes, competitor actions, and market shifts are outside management's direct control.",
      "Internal Factors: Operational inefficiencies, talent gaps, financial leverage, and process failures originate within the organization.",
      "Risk Assessment: A risk matrix maps the probability and potential impact of each identified risk to prioritize mitigation.",
      "Industry-Specific Risk: Each sector faces unique risks—retailers face inventory risk, tech companies face IP theft, banks face credit risk.",
      "Dynamic Nature: Risk profiles change as business conditions, technology, and regulations evolve continuously."
    ],
    roleplayTips: [
      "\"Our biggest risk right now is customer concentration—two clients represent 60% of revenue, and losing either would be existentially threatening.\"",
      "\"I'd recommend a quarterly risk review process so we're not discovering material threats in the middle of a crisis.\"",
      "\"Rising interest rates are an external risk we can't control, but we can hedge by locking in fixed-rate debt now rather than floating—that's a manageable mitigation.\""
    ]
  },

  "CR003": {
    id: "CR003",
    code: "CR:003",
    name: "Handle difficult customers",
    definition: "Handling difficult customers involves de-escalating conflict, identifying the root cause of dissatisfaction, and delivering a resolution that preserves the customer relationship and business reputation.",
    keyPoints: [
      "Empathy First: Acknowledging the customer's frustration before problem-solving reduces emotional intensity immediately.",
      "Stay Calm: Maintaining a composed, professional tone prevents escalation regardless of the customer's behavior.",
      "Root Cause: Look beyond the surface complaint to understand the underlying need or expectation that was unmet.",
      "Solution Focus: Offer concrete, realistic options rather than vague promises or deflection.",
      "Documentation: Record difficult interactions to identify patterns, improve processes, and protect the business legally."
    ],
    roleplayTips: [
      "\"I hear you, and I completely understand why this is frustrating—you expected delivery by Tuesday and it's now Thursday. Let me find out exactly what happened and make this right.\"",
      "\"I'm going to own this issue personally; you won't need to call back and repeat your story to someone else.\"",
      "\"Here are two options I can offer you right now: a full refund processed today, or expedited replacement with overnight shipping at no charge—which works better for you?\""
    ]
  },

  "CR004": {
    id: "CR004",
    code: "CR:004",
    name: "Handle customer complaints",
    definition: "Customer complaint handling is the structured process of receiving, acknowledging, investigating, and resolving customer grievances in a way that restores satisfaction and prevents recurrence.",
    keyPoints: [
      "Acknowledge Promptly: A fast initial response signals the complaint is taken seriously, even if resolution takes longer.",
      "Listen Without Interrupting: Let the customer explain fully before offering solutions—interrupting feels dismissive.",
      "Investigate Fairly: Gather facts from both the customer and internal records before determining a resolution.",
      "Resolution Options: Offer appropriate remedies such as refunds, replacements, discounts, or service recovery.",
      "Follow-Up: Contacting the customer after resolution confirms satisfaction and reinforces the relationship."
    ],
    roleplayTips: [
      "\"Thank you for bringing this to our attention—feedback like yours is exactly how we identify and fix gaps in our service process.\"",
      "\"I've reviewed your account and I can see exactly where the error occurred on our end; I take full responsibility and want to make this right immediately.\"",
      "\"A complaint resolved well can actually create a more loyal customer than one who never experienced a problem—that's why this interaction matters.\""
    ]
  },

  "CR005": {
    id: "CR005",
    code: "CR:005",
    name: "Handle merchandise returns/refunds",
    definition: "A merchandise return and refund process manages customer requests to return purchased items, requiring clear policy application, efficient processing, and professional service.",
    keyPoints: [
      "Policy Knowledge: Representatives must know and apply return policy terms consistently to ensure fairness and legal compliance.",
      "Verification: Confirm purchase with receipt, order number, or account lookup before processing any return.",
      "Condition Assessment: Inspect returned merchandise to determine eligibility for full refund, exchange, or store credit.",
      "Process Efficiency: Streamlined return procedures reduce customer wait time and minimize operational cost.",
      "Data Capture: Recording return reasons helps identify product quality issues, policy gaps, and training needs."
    ],
    roleplayTips: [
      "\"I can absolutely process this return for you—our policy covers items in original condition within 30 days, and your purchase is well within that window.\"",
      "\"I see that this item is outside our return window, but given your history with us, I'm going to make an exception and issue a store credit—your loyalty matters to us.\"",
      "\"Your refund will appear on the original card within 3 to 5 business days; I'm emailing you a confirmation right now so you have the transaction reference.\""
    ]
  },

  "CR006": {
    id: "CR006",
    code: "CR:006",
    name: "Build customer loyalty",
    definition: "Customer loyalty is the result of consistently delivering exceptional experiences that cause customers to repeat purchases, resist competitive offers, and advocate for the brand to others.",
    keyPoints: [
      "Consistency: Meeting or exceeding expectations at every touchpoint builds the trust that loyalty requires.",
      "Loyalty Programs: Points, rewards, and exclusive benefits create tangible incentives for repeat purchases.",
      "Personalization: Customers feel valued when interactions reflect their individual preferences and purchase history.",
      "Community Building: Creating forums, events, or exclusive access deepens emotional connection to the brand.",
      "Advocacy: Highly loyal customers generate referrals that are more credible and cost-effective than paid advertising."
    ],
    roleplayTips: [
      "\"A loyal customer who refers three friends has a total lifetime value that's four times the individual—that's why our customer success investment pays for itself.\"",
      "\"We track Net Promoter Score quarterly specifically to identify detractors early enough to recover them before they churn and start recommending our competitors.\"",
      "\"Our tiered loyalty program doesn't just reward spending; it creates status levels that make our best customers feel recognized, which is more powerful than a discount.\""
    ]
  },

  "CR007": {
    id: "CR007",
    code: "CR:007",
    name: "Interpret business policies to customers/clients",
    definition: "Interpreting business policies involves clearly explaining organizational rules, terms, and procedures to customers in a way that is accurate, empathetic, and preserves the relationship.",
    keyPoints: [
      "Accuracy: Policy explanations must be factually correct to prevent legal disputes and customer confusion.",
      "Plain Language: Translate policy terms from legal or technical language into clear, everyday explanations.",
      "Empathy: Acknowledge when a policy is inconvenient without apologizing for the policy's existence.",
      "Context: Help the customer understand why the policy exists when that knowledge reduces frustration.",
      "Escalation: Know when a situation warrants escalation to a supervisor who has authority to make exceptions."
    ],
    roleplayTips: [
      "\"Our 14-day return policy exists to protect both customers and our inventory quality standards—I understand that's tighter than some retailers, and I want to find the best option within those parameters.\"",
      "\"I can't process a cash refund for card purchases per our fraud prevention policy, but I can issue store credit today or return to the original card within five business days—which works best?\"",
      "\"Let me connect you with my supervisor, who has discretion to review exceptions—I want to make sure you're heard at the right level for this situation.\""
    ]
  },

  "CR008": {
    id: "CR008",
    code: "CR:008",
    name: "Use social media to support customer service",
    definition: "Social media customer service uses digital platforms to monitor, respond to, and resolve customer inquiries and complaints publicly and privately at scale.",
    keyPoints: [
      "Monitoring: Social listening tools track brand mentions, hashtags, and comments to catch service issues quickly.",
      "Response Time: Customer expectations for social media response are faster than email—often within hours.",
      "Tone: Public responses must be professional, empathetic, and brand-consistent while being appropriately conversational.",
      "Channel Migration: Complex or sensitive issues should be moved to private direct messaging to protect customer privacy.",
      "Brand Impact: Public service interactions are visible to thousands; excellent responses can enhance brand perception while poor ones go viral negatively."
    ],
    roleplayTips: [
      "\"We monitor our social channels 7 days a week because a complaint that sits unanswered for 12 hours on Twitter can reach thousands of potential customers.\"",
      "\"I responded publicly to acknowledge the issue and then moved the conversation to DM to protect their account information and resolve it properly.\"",
      "\"A well-handled public complaint is actually a brand asset—it shows every observer that we take customer concerns seriously and act on them quickly.\""
    ]
  },

  "CR009": {
    id: "CR009",
    code: "CR:009",
    name: "Use customer service as a management tool",
    definition: "Customer service data and processes can be leveraged as strategic management inputs to drive product improvement, operational change, and competitive differentiation.",
    keyPoints: [
      "Feedback Loop: Systematically capturing customer feedback creates a continuous improvement mechanism across the organization.",
      "Root Cause Analysis: Complaint patterns reveal systemic product or process failures that management can correct.",
      "Competitive Intelligence: Customer service interactions often reveal what competitors are doing that customers prefer.",
      "Employee Performance: Service metrics like resolution time and satisfaction scores provide objective performance data.",
      "Revenue Impact: Tracking the correlation between service quality and retention, upsell, and referral rates quantifies the business value of service investment."
    ],
    roleplayTips: [
      "\"Our quarterly CSAT analysis showed packaging complaints tripling in March, which led us to identify a supplier change that was causing damage in transit—data drove a real operational fix.\"",
      "\"Customer service isn't a cost center; it's a revenue-generating intelligence function when you use the data correctly to reduce churn and identify upsell opportunities.\"",
      "\"Every complaint that reaches a rep is one your VOC system should analyze so product development can prioritize fixes based on customer impact, not internal assumptions.\""
    ]
  },

  "CR010": {
    id: "CR010",
    code: "CR:010",
    name: "Monitor and evaluate customer service",
    definition: "Monitoring and evaluating customer service involves systematically measuring performance against established standards to identify gaps, recognize excellence, and drive continuous improvement.",
    keyPoints: [
      "Key Metrics: CSAT, NPS, first-call resolution rate, average handle time, and churn rate measure service health.",
      "Mystery Shopping: Unannounced service evaluations provide candid assessment of real customer experiences.",
      "Call Monitoring: Recorded interactions enable quality assurance review and targeted coaching.",
      "Benchmarking: Comparing metrics to industry standards reveals whether performance is competitive.",
      "Continuous Improvement: Evaluation findings should feed directly into training updates, process changes, and policy revisions."
    ],
    roleplayTips: [
      "\"Our first-call resolution rate dropped from 82% to 74% this quarter, which tells me we have a training or process gap I need to investigate before it shows up in our churn data.\"",
      "\"I use NPS cohort analysis to distinguish between customers whose low score reflects a one-time issue versus a systemic frustration—the intervention is completely different for each.\"",
      "\"We review 10% of calls weekly as part of quality assurance; the patterns we find drive our monthly training agenda rather than guessing at what skills need reinforcement.\""
    ]
  },

  "CR011": {
    id: "CR011",
    code: "CR:011",
    name: "Analyze data to make decisions about customer service",
    definition: "Data-driven customer service decision-making uses quantitative and qualitative customer feedback to prioritize investments, allocate resources, and improve service delivery.",
    keyPoints: [
      "Quantitative Data: Transaction volumes, resolution times, and satisfaction scores provide objective performance measurement.",
      "Qualitative Data: Customer verbatims, open-ended survey responses, and interview transcripts reveal the 'why' behind numbers.",
      "Segmentation: Breaking data by customer segment, product line, or channel identifies where service gaps are most damaging.",
      "Trend Analysis: Tracking metrics over time distinguishes temporary spikes from structural problems requiring systemic fixes.",
      "Decision Criteria: Define in advance which data thresholds trigger specific actions to prevent subjective bias in decisions."
    ],
    roleplayTips: [
      "\"The data shows that 68% of our service tickets relate to billing questions—that tells me a self-service FAQ or improved invoice design could deflect the majority of inbound volume.\"",
      "\"I don't act on a single month's CSAT dip; I look for three-month trends to distinguish noise from signal before committing resources to a structural fix.\"",
      "\"Cross-referencing satisfaction scores with renewal rates showed that customers with two or more service contacts in their first 90 days churn at three times the rate—that's an onboarding problem, not a service problem.\""
    ]
  },


  // ── EC: Economics ─────────────────────────────────────────────────────────

  "EC001": {
    id: "EC001",
    code: "EC:001",
    name: "Distinguish between economic goods and services",
    definition: "Goods are tangible, physical products that can be stored and transported, while services are intangible acts or performances consumed at the point of delivery.",
    keyPoints: [
      "Tangibility: Goods can be seen, touched, and stored; services are experienced and cannot be inventoried.",
      "Perishability: Unsold services expire instantly—an empty airline seat or hotel room is revenue lost forever.",
      "Inseparability: Services are typically produced and consumed simultaneously, requiring the provider to be present.",
      "Quality Variability: Service quality varies with the provider, time, and context, unlike standardized manufactured goods.",
      "Business Implications: Goods require supply chain and inventory management; services require capacity planning and talent management."
    ],
    roleplayTips: [
      "\"Our consulting engagement is a service—you're purchasing expertise and outcomes, not a physical product you can return, which is why we define deliverables so precisely in the contract.\"",
      "\"Unlike a software license you can resell, a training session is consumed when delivered—that's why we price it differently and focus on measurable skill outcomes.\"",
      "\"Understanding whether you're marketing a good or a service changes everything from pricing to distribution strategy to how you measure customer satisfaction.\""
    ]
  },

  "EC002": {
    id: "EC002",
    code: "EC:002",
    name: "Explain the concept of economic resources",
    definition: "Economic resources—land, labor, capital, and entrepreneurship—are the inputs used to produce goods and services, and their scarcity is the fundamental economic problem.",
    keyPoints: [
      "Land: Natural resources including raw materials, water, and physical space used in production.",
      "Labor: Human effort—physical and intellectual—applied to creating goods and services.",
      "Capital: Man-made tools, machinery, technology, and infrastructure that enhance productive capacity.",
      "Entrepreneurship: The risk-taking ability to combine the other resources innovatively to create value.",
      "Scarcity: Because resources are limited relative to wants, every use involves an opportunity cost."
    ],
    roleplayTips: [
      "\"Our competitive advantage is really a capital allocation advantage—we've invested in automation that reduces the labor cost per unit by 34%, which competitors haven't matched.\"",
      "\"Entrepreneurship isn't just about starting a company; it's about recognizing that combining existing resources in a new way creates value the market hasn't priced yet.\"",
      "\"Scarcity of skilled labor in this region is the binding constraint on our expansion—until we solve the talent pipeline, adding more capital equipment won't move output.\""
    ]
  },

  "EC003": {
    id: "EC003",
    code: "EC:003",
    name: "Describe the concepts of economics and economic activities",
    definition: "Economics is the social science studying how individuals, businesses, and governments allocate scarce resources to satisfy unlimited wants through production, distribution, and consumption.",
    keyPoints: [
      "Microeconomics: Studies decision-making at the level of individual consumers, firms, and markets.",
      "Macroeconomics: Analyzes economy-wide phenomena including GDP growth, unemployment, and inflation.",
      "Economic Systems: Societies organize resource allocation through market, command, traditional, or mixed economic systems.",
      "Economic Actors: Households, businesses, and governments interact in product and factor markets.",
      "Circular Flow: Money flows from households to businesses as payment for goods, and back as wages, rents, and profits."
    ],
    roleplayTips: [
      "\"Our pricing decision is a microeconomic one—we're responding to local supply and demand signals—but the macroeconomic environment of rising inflation affects our cost structure simultaneously.\"",
      "\"In a market economy, price signals tell producers what to make and how much—when prices rise, it's the economy's way of saying 'produce more of this.'\"",
      "\"Understanding the circular flow model helps explain why stimulus spending generates a multiplier effect: one dollar of government spending becomes income that gets spent again.\""
    ]
  },

  "EC004": {
    id: "EC004",
    code: "EC:004",
    name: "Determine economic utilities created by business activities",
    definition: "Economic utility is the value or satisfaction a business adds to a product through form, place, time, information, and possession utility.",
    keyPoints: [
      "Form Utility: Converting raw materials into finished goods creates value by changing the product's physical composition.",
      "Place Utility: Moving products from where they're produced to where customers need them adds location value.",
      "Time Utility: Making products available when customers want them—seasonal inventory management—creates time value.",
      "Information Utility: Communicating product benefits through marketing increases perceived value and enables purchasing decisions.",
      "Possession Utility: Facilitating ownership transfer through financing, credit, or payment options adds value by making purchase possible."
    ],
    roleplayTips: [
      "\"Amazon's core value proposition is time and place utility—they put products where you are, when you need them, which is why Prime delivery speed is a competitive moat.\"",
      "\"Our financing program creates possession utility for customers who couldn't otherwise afford our product—it expands the addressable market while generating interest income.\"",
      "\"Marketing creates information utility; without it, customers don't know our product exists or why it's better, even if the form utility is superior to competitors.\""
    ]
  },

  "EC005": {
    id: "EC005",
    code: "EC:005",
    name: "Explain the principles of supply and demand",
    definition: "Supply and demand describes the relationship between the quantity of a good producers offer and the quantity consumers want, with price serving as the mechanism that balances the two.",
    keyPoints: [
      "Law of Demand: As price increases, quantity demanded decreases, all else being equal—inverse relationship.",
      "Law of Supply: As price increases, quantity supplied increases—producers are incentivized to produce more at higher prices.",
      "Equilibrium: The market-clearing price where quantity supplied equals quantity demanded, eliminating shortages and surpluses.",
      "Shifts: Non-price factors like income, consumer preferences, input costs, and technology shift entire supply or demand curves.",
      "Elasticity: Price elasticity measures how sensitive quantity demanded is to price changes—critical for pricing strategy."
    ],
    roleplayTips: [
      "\"When we raised prices by 10% and saw volume drop only 4%, that tells me our demand is relatively inelastic—customers value our product enough to absorb price increases.\"",
      "\"The chip shortage shifted the supply curve left, which drove prices up—that's textbook supply-demand mechanics playing out in real time.\"",
      "\"Understanding where we are on the demand curve helps us decide whether to use penetration pricing to build volume or premium pricing to maximize margin.\""
    ]
  },

  "EC006": {
    id: "EC006",
    code: "EC:006",
    name: "Describe the functions of prices in markets",
    definition: "Prices serve as signals, incentives, and rationing mechanisms in markets, guiding resource allocation by communicating information about scarcity, value, and opportunity.",
    keyPoints: [
      "Signaling: Rising prices signal that a resource is becoming scarcer, prompting producers to increase supply.",
      "Rationing: Prices allocate goods to those willing and able to pay, resolving competition for scarce items.",
      "Incentivizing: High prices attract new suppliers and innovation; low prices discourage excess production.",
      "Information Aggregation: Market prices encode the collective knowledge and preferences of all buyers and sellers.",
      "Resource Allocation: Prices direct capital and labor toward higher-valued uses without central planning."
    ],
    roleplayTips: [
      "\"The surge pricing model during peak demand isn't price gouging—it's the price system rationing a scarce service to those who value it most and incentivizing more supply.\"",
      "\"When commodity prices spiked, they were sending a clear signal that we needed to find substitute inputs or redesign around a different material.\"",
      "\"Setting prices below market rate feels customer-friendly but actually creates shortages and misallocates resources—the market signal gets distorted.\""
    ]
  },

  "EC007": {
    id: "EC007",
    code: "EC:007",
    name: "Explain the role of business in society",
    definition: "Businesses create economic value by producing goods and services, providing employment, paying taxes, and driving innovation, while also bearing responsibilities to stakeholders and the broader community.",
    keyPoints: [
      "Economic Value Creation: Businesses transform inputs into outputs worth more than their cost, generating wealth and jobs.",
      "Tax Revenue: Corporate and employment taxes fund public infrastructure, education, and social programs.",
      "Innovation: Competitive pressure drives businesses to invest in R&D, generating technological progress that benefits society.",
      "Corporate Social Responsibility: Businesses are increasingly expected to address environmental, social, and governance (ESG) impacts.",
      "Stakeholder Theory: Modern business success requires balancing the interests of shareholders, employees, customers, and communities."
    ],
    roleplayTips: [
      "\"Our ESG report isn't just for investors; it documents how we're creating value for the community, which is increasingly a competitive factor in recruiting top talent.\"",
      "\"We treat our social responsibility commitments as business strategy, not philanthropy—they build brand trust that translates into customer preference and employee engagement.\"",
      "\"A business that maximizes short-term profit at the expense of its workforce or community is destroying long-term value, not creating it.\""
    ]
  },

  "EC008": {
    id: "EC008",
    code: "EC:008",
    name: "Explain the concept of competition",
    definition: "Competition in markets occurs when multiple businesses rival each other for customers, resources, or market share, driving innovation, quality improvement, and price efficiency.",
    keyPoints: [
      "Perfect Competition: Many sellers offer identical products; price is set by the market and individual firms are price takers.",
      "Monopolistic Competition: Many firms sell differentiated products; brand and quality competition replace pure price competition.",
      "Oligopoly: A few large firms dominate the market; each firm's decisions significantly impact rivals.",
      "Monopoly: A single seller controls the market, facing no direct competition, often requiring regulatory oversight.",
      "Competitive Advantage: Firms gain sustainable advantage through cost leadership, differentiation, or niche focus strategies."
    ],
    roleplayTips: [
      "\"We operate in a monopolistically competitive market—we can't compete on price alone, so we're investing in differentiation through superior design and customer service.\"",
      "\"Our sustainable competitive advantage is our proprietary dataset, which took six years to build and can't be replicated quickly—that's our moat.\"",
      "\"Understanding our competitive structure tells us whether to focus on beating competitors on price or creating a category where comparison becomes irrelevant.\""
    ]
  },

  "EC009": {
    id: "EC009",
    code: "EC:009",
    name: "Describe the nature of business risk",
    definition: "Business risk is the possibility that a company's earnings or operations will be negatively affected by internal or external uncertainties that may prevent achievement of objectives.",
    keyPoints: [
      "Speculative Risk: Risk involving the possibility of either gain or loss, such as entering a new market.",
      "Pure Risk: Risk that can only result in loss, such as fire or theft—typically insurable.",
      "Systematic Risk: Market-wide risks like recessions or interest rate changes that affect all businesses.",
      "Unsystematic Risk: Company or industry-specific risks that can be mitigated through diversification.",
      "Risk Management: Businesses address risk through avoidance, reduction, transfer (insurance), or acceptance."
    ],
    roleplayTips: [
      "\"We carry product liability insurance to transfer the pure risk of customer injury—the premium is far lower than the potential settlement cost.\"",
      "\"Expanding into Southeast Asia is a speculative risk with both upside and downside; our risk assessment quantifies both scenarios before we commit capital.\"",
      "\"Diversifying across five product lines reduces unsystematic risk so that a single product failure doesn't threaten the company's survival.\""
    ]
  },

  "EC010": {
    id: "EC010",
    code: "EC:010",
    name: "Explain the concept of productivity",
    definition: "Productivity measures the efficiency of production, defined as the ratio of outputs produced to inputs consumed, and is the primary driver of economic growth and business profitability.",
    keyPoints: [
      "Labor Productivity: Output per worker hour—the most common productivity measure for business and national economies.",
      "Capital Productivity: Output relative to capital invested—measures how effectively equipment and technology generate revenue.",
      "Total Factor Productivity: The portion of output growth not explained by increased inputs—reflects innovation and efficiency.",
      "Improvement Levers: Training, technology, process redesign, and better resource allocation all increase productivity.",
      "Economic Significance: Rising productivity allows higher wages without inflation and is the foundation of rising living standards."
    ],
    roleplayTips: [
      "\"After implementing the new workflow software, our output per employee-hour increased by 18%—that's a direct productivity gain that drops straight to the bottom line.\"",
      "\"Investing in employee training isn't an expense, it's a productivity investment with a documented ROI when you measure output quality and speed pre- and post-training.\"",
      "\"Our revenue per employee is the KPI I track to measure whether we're scaling efficiently—if it's declining as we hire, our processes aren't keeping up with growth.\""
    ]
  },

  "EC011": {
    id: "EC011",
    code: "EC:011",
    name: "Analyze the impact of specialization/division of labor",
    definition: "Specialization and division of labor involve assigning workers to specific tasks based on skill, enabling higher productivity, expertise, and output than generalist production methods.",
    keyPoints: [
      "Comparative Advantage: Individuals and firms should specialize in what they produce most efficiently relative to alternatives.",
      "Productivity Gains: Repetition of specialized tasks builds speed and skill that dramatically increases output per hour.",
      "Coordination Costs: High specialization requires more coordination infrastructure—management layers, communication systems.",
      "Interdependence: Specialized workers depend on each other; disruption at one stage can halt the entire production chain.",
      "Trade Enablement: Specialization creates the surplus production that makes exchange and trade economically worthwhile."
    ],
    roleplayTips: [
      "\"By restructuring our development team into specialized squads—frontend, backend, and DevOps—we reduced integration errors by 40% and increased deployment frequency threefold.\"",
      "\"Comparative advantage means we should outsource our IT infrastructure to a specialist who does it better and cheaper, and focus our resources on our core competency.\"",
      "\"Division of labor is why our assembly line outproduces craft production by a factor of twenty—but we've also invested in cross-training to reduce single-point-of-failure risk.\""
    ]
  },

  "EC012": {
    id: "EC012",
    code: "EC:012",
    name: "Explain the nature of money",
    definition: "Money is any commonly accepted medium of exchange that serves as a store of value, unit of account, and standard of deferred payment in an economy.",
    keyPoints: [
      "Medium of Exchange: Money eliminates the inefficiency of barter by providing a universally accepted payment instrument.",
      "Store of Value: Money preserves purchasing power over time, though inflation erodes this function.",
      "Unit of Account: Money provides a common measure for comparing the value of different goods and services.",
      "Liquidity: Money is the most liquid asset—immediately usable for transactions without conversion.",
      "Money Supply: Central banks control money supply through monetary policy to manage inflation and economic growth."
    ],
    roleplayTips: [
      "\"Inflation erodes money's store-of-value function, which is why we invest excess cash in short-duration securities rather than holding it idle in a checking account.\"",
      "\"Our international pricing is denominated in USD to reduce our currency risk—using a stable store of value simplifies cross-border transactions.\"",
      "\"Understanding the money supply cycle helps us anticipate when the Fed will raise rates, which directly affects our cost of capital and investment timing.\""
    ]
  },

  "EC013": {
    id: "EC013",
    code: "EC:013",
    name: "Describe the concept of trade",
    definition: "Trade is the voluntary exchange of goods, services, or resources between parties who each believe they will benefit, enabling specialization and access to a wider range of products.",
    keyPoints: [
      "Voluntary Exchange: Trade occurs because both parties expect to gain—it's not zero-sum but mutually beneficial.",
      "Comparative Advantage: Trade enables countries and firms to specialize in what they produce most efficiently.",
      "Trade Barriers: Tariffs, quotas, and regulations restrict trade, raising prices and reducing efficiency.",
      "Balance of Trade: The difference between a country's exports and imports affects currency values and economic growth.",
      "Global Value Chains: Modern trade involves components crossing borders multiple times before final assembly."
    ],
    roleplayTips: [
      "\"The new tariff on our primary input increases our landed cost by 12%—we need to decide whether to absorb it, raise prices, or source from a non-tariffed country.\"",
      "\"Our export strategy targets markets where our technology creates more value than domestically available alternatives—that's comparative advantage working at the firm level.\"",
      "\"Free trade agreements reduce barriers that create inefficiency; when they're signed, we need to move quickly to access the newly opened market before competitors do.\""
    ]
  },

  "EC014": {
    id: "EC014",
    code: "EC:014",
    name: "Explain the impact of the law of diminishing returns",
    definition: "The law of diminishing returns states that adding more of one variable input to fixed inputs eventually yields smaller and smaller increases in output.",
    keyPoints: [
      "Short-Run Phenomenon: Diminishing returns occur when at least one input is fixed—such as a factory of fixed size.",
      "Marginal Product: The additional output from one more unit of input decreases as input is increased beyond the optimal level.",
      "Optimal Input Level: Firms should add inputs until marginal revenue product equals marginal input cost.",
      "Practical Applications: Staffing decisions, advertising spend, and technology investment all follow diminishing return curves.",
      "Long-Run Escape: Businesses escape diminishing returns by expanding capacity or changing production technology."
    ],
    roleplayTips: [
      "\"We added three more salespeople last quarter and saw total revenue increase only 8%—diminishing returns are setting in; we need better leads, not more headcount.\"",
      "\"Our digital ad spend shows diminishing returns above a $50k monthly budget—beyond that threshold, the marginal cost per customer acquisition exceeds the customer's lifetime value.\"",
      "\"To break out of the diminishing returns trap, we need to expand capacity or redesign the process, not just push more through a constrained system.\""
    ]
  },

  "EC015": {
    id: "EC015",
    code: "EC:015",
    name: "Explain the concept of opportunity cost",
    definition: "Opportunity cost is the value of the best foregone alternative when a choice is made, representing the true economic cost of any decision because resources used one way cannot simultaneously be used another way.",
    keyPoints: [
      "Implicit Cost: Opportunity cost includes implicit costs like forgone salary or investment returns, not just cash outlays.",
      "Decision Framework: Every business decision should be evaluated against the best alternative use of those same resources.",
      "Sunk Costs: Sunk costs are irrelevant to future decisions; only opportunity costs of future choices matter.",
      "Capital Allocation: Firms should invest in projects where the return exceeds the opportunity cost of capital (WACC).",
      "Trade-Off Recognition: Acknowledging opportunity cost prevents organizations from defaulting to habit rather than choosing optimally."
    ],
    roleplayTips: [
      "\"Building this feature in-house has a $200k cost, but the real cost is the three other projects we can't pursue during that time—that's the opportunity cost we need to weigh.\"",
      "\"Our hurdle rate is 12% because that's what we can earn in our next-best investment; any project returning less than that destroys value even if it's profitable in absolute terms.\"",
      "\"The question isn't whether this expansion is profitable—it is. The question is whether it's the highest-value use of our available capital, because the opportunity cost of deploying it elsewhere is real.\""
    ]
  },

  "EC016": {
    id: "EC016",
    code: "EC:016",
    name: "Explain the impact of government actions on business activities",
    definition: "Government actions including taxation, regulation, monetary policy, fiscal policy, and trade policy significantly shape the business environment, affecting costs, competition, and opportunity.",
    keyPoints: [
      "Taxation: Corporate, payroll, and property taxes affect profitability and investment decisions.",
      "Regulation: Environmental, labor, safety, and antitrust rules set operational boundaries and compliance costs.",
      "Monetary Policy: Central bank interest rate decisions affect business borrowing costs and consumer spending.",
      "Fiscal Policy: Government spending and deficit levels influence aggregate demand and infrastructure quality.",
      "Trade Policy: Tariffs, trade agreements, and export controls reshape competitive dynamics in global markets."
    ],
    roleplayTips: [
      "\"The Fed rate hike increases our variable-rate debt cost by roughly $400k annually—we need to evaluate refinancing into fixed-rate instruments before the next move.\"",
      "\"New EPA emissions standards represent both a compliance cost and a market opportunity: companies that develop cleaner alternatives first capture the regulatory premium.\"",
      "\"We're lobbying for a targeted R&D tax credit because it directly reduces the effective cost of innovation investment, which is our primary growth driver.\""
    ]
  },

  "EC017": {
    id: "EC017",
    code: "EC:017",
    name: "Describe the nature of taxes",
    definition: "Taxes are compulsory financial charges levied by government on individuals and businesses to fund public expenditures, redistribute income, and influence economic behavior.",
    keyPoints: [
      "Tax Types: Income, payroll, sales, property, excise, and corporate taxes each target different economic activities.",
      "Progressive vs. Regressive: Progressive taxes take a higher percentage from higher earners; regressive taxes take proportionally more from lower earners.",
      "Tax Incidence: The economic burden of a tax may fall differently than its legal obligation—consumers often bear the cost of business taxes through higher prices.",
      "Tax Planning: Legal strategies like deductions, credits, timing, and entity structure minimize tax liability.",
      "Business Impact: Tax rates and structures affect location decisions, investment levels, and capital structure choices."
    ],
    roleplayTips: [
      "\"Structuring this transaction as an asset purchase rather than a stock purchase gives us a step-up in basis that creates substantial depreciation tax shields going forward.\"",
      "\"Sales tax is legally collected from the customer, but economically the burden is shared between buyer and seller depending on price elasticity.\"",
      "\"Our R&D tax credits reduce our effective tax rate by nearly 4 percentage points, which is why investing in qualified research spending is a financial strategy, not just a technology strategy.\""
    ]
  },

  "EC018": {
    id: "EC018",
    code: "EC:018",
    name: "Explain the concept of private enterprise",
    definition: "Private enterprise is an economic system in which individuals and businesses own resources and make production and distribution decisions based on market signals and profit incentives.",
    keyPoints: [
      "Private Property: Individuals and firms have the legal right to own, use, and profit from resources.",
      "Freedom of Choice: Consumers choose what to buy; producers choose what to make; workers choose where to work.",
      "Profit Motive: The pursuit of profit incentivizes entrepreneurs to take risks and innovate efficiently.",
      "Competition: Multiple private firms compete for customers, driving quality improvements and cost reductions.",
      "Limited Government: In a private enterprise system, government's role is primarily to enforce contracts and property rights, not to direct production."
    ],
    roleplayTips: [
      "\"The private enterprise system rewards us for solving customer problems efficiently—profit is the signal that we're creating real value, not destroying it.\"",
      "\"Our ability to own our intellectual property is foundational to our business model; without private property rights, we couldn't capture the returns from our R&D investment.\"",
      "\"Competition in a private enterprise system means we can't become complacent—the moment we do, a new entrant finds a way to serve our customers better at a lower cost.\""
    ]
  },

  "EC019": {
    id: "EC019",
    code: "EC:019",
    name: "Identify factors affecting a business's profit",
    definition: "A business's profit is determined by the difference between revenue and total costs, and is affected by pricing decisions, cost structure, volume, competition, and economic conditions.",
    keyPoints: [
      "Revenue Drivers: Price, unit volume, and product mix determine total revenue—improving any of these increases profit.",
      "Cost Structure: The ratio of fixed to variable costs affects how sensitive profit is to volume changes.",
      "Gross Margin: The difference between revenue and cost of goods sold reveals core product profitability before overhead.",
      "Operating Leverage: High fixed costs magnify both profits in growth and losses in downturns.",
      "External Factors: Input costs, interest rates, competitive pricing, and economic conditions affect profitability independently of management decisions."
    ],
    roleplayTips: [
      "\"Our gross margin improved from 42% to 48% this year not by raising prices, but by renegotiating our top three supplier contracts—cost management is as powerful as revenue growth.\"",
      "\"We have a highly leveraged cost structure, which means hitting our volume targets is critical—missing by even 10% has a disproportionate impact on net income.\"",
      "\"Pricing strategy is the highest-leverage profit driver: a 1% price increase with stable volume flows almost entirely to operating income.\""
    ]
  },

  // ── EI: Emotional Intelligence ────────────────────────────────────────────

  "EI001": {
    id: "EI001",
    code: "EI:001",
    name: "Explain the concept of self-worth",
    definition: "Self-worth is an individual's sense of their own value and competence, independent of external validation, which forms the psychological foundation for confident professional behavior.",
    keyPoints: [
      "Intrinsic Value: Self-worth comes from internal beliefs about one's competence and dignity, not from achievements or approval.",
      "Professional Confidence: A healthy sense of self-worth enables professionals to take initiative, voice ideas, and accept feedback constructively.",
      "Resilience: People with strong self-worth recover faster from setbacks because failure doesn't define their identity.",
      "Distinction from Arrogance: Genuine self-worth is grounded in honest self-assessment; arrogance is self-worth disconnected from reality.",
      "Development: Self-worth grows through mastery experiences, positive relationships, and reflective self-assessment over time."
    ],
    roleplayTips: [
      "\"I disagree with that assessment, and I want to explain my reasoning—I'm confident in the analysis I've done and believe we should examine this from another angle.\"",
      "\"Receiving critical feedback helps me improve; I don't take it as a judgment of my value as a professional, just as information about how to do this better.\"",
      "\"I'm comfortable saying I don't know the answer to that question right now—I'd rather acknowledge a gap and research it than project false confidence.\""
    ]
  },

  "EI002": {
    id: "EI002",
    code: "EI:002",
    name: "Recognize personal biases and stereotypes",
    definition: "Personal biases are unconscious or conscious mental shortcuts that influence judgment in ways that may be inaccurate or unfair, requiring awareness and deliberate correction in professional settings.",
    keyPoints: [
      "Implicit Bias: Unconscious attitudes shaped by culture and experience can influence decisions without awareness.",
      "Affinity Bias: Tendency to favor people who are similar to ourselves in background, interests, or appearance.",
      "Confirmation Bias: Seeking information that confirms existing beliefs while ignoring contradictory evidence.",
      "Impact on Decisions: Unchecked bias affects hiring, promotion, customer service, and strategic choices.",
      "Mitigation: Structured processes, diverse perspectives, and deliberate reflection reduce the influence of personal bias."
    ],
    roleplayTips: [
      "\"I want to make sure our candidate evaluation is based on demonstrated competencies, not cultural fit—'fit' is often a proxy for bias that limits our talent pool.\"",
      "\"Before we finalize this market analysis, let me challenge our assumptions—I'm noticing we've only sought out data that supports our initial hypothesis.\"",
      "\"Recognizing that I have biases doesn't make me a bad professional; acting on them without reflection does. That's why we use structured evaluation rubrics.\""
    ]
  },

  "EI003": {
    id: "EI003",
    code: "EI:003",
    name: "Exhibit self-control",
    definition: "Self-control in a professional context is the ability to regulate one's emotions, impulses, and reactions in order to respond thoughtfully rather than reactively in challenging situations.",
    keyPoints: [
      "Emotional Regulation: The ability to recognize and manage emotional states before they affect behavior or judgment.",
      "Impulse Management: Pausing before responding prevents reactions that could damage relationships or reputation.",
      "Stress Response: Self-control under pressure is a visible signal of professional maturity and leadership potential.",
      "Conflict Situations: Remaining composed during disagreements de-escalates tension and focuses energy on resolution.",
      "Consistency: Predictable, even-keeled behavior builds trust because colleagues and clients know what to expect."
    ],
    roleplayTips: [
      "\"I understand this situation is frustrating for both of us—let me take a moment to make sure my response is productive rather than reactive.\"",
      "\"My initial reaction was strong disagreement, but I've thought about it and want to engage with the substance of the argument rather than my emotional response to it.\"",
      "\"In negotiations, the party that maintains composure longest has a significant advantage—I don't let the other side's pressure tactics accelerate my decision-making.\""
    ]
  },

  "EI004": {
    id: "EI004",
    code: "EI:004",
    name: "Handle stress in positive ways",
    definition: "Positive stress management involves recognizing stress triggers and applying healthy coping strategies that preserve performance, relationships, and physical and mental well-being.",
    keyPoints: [
      "Awareness: Identifying personal stress triggers enables early intervention before performance is affected.",
      "Physical Strategies: Exercise, adequate sleep, and proper nutrition are foundational stress management tools.",
      "Cognitive Reframing: Viewing stressors as challenges rather than threats improves resilience and problem-solving.",
      "Prioritization: Breaking large stressors into manageable tasks and prioritizing ruthlessly reduces overwhelm.",
      "Support Systems: Professional mentors, trusted colleagues, and counseling services are legitimate workplace resources."
    ],
    roleplayTips: [
      "\"When I feel overwhelmed by competing priorities, I write everything down, identify what must be done today versus what can wait, and communicate constraints to my manager proactively.\"",
      "\"I've learned that a 20-minute break when I hit a wall produces better output than four hours of diminishing-returns effort—productivity isn't just hours in.\"",
      "\"Admitting that this project load is unsustainable isn't weakness; it's the kind of honest capacity assessment that prevents quality failures down the line.\""
    ]
  },

  "EI005": {
    id: "EI005",
    code: "EI:005",
    name: "Demonstrate ethical work habits",
    definition: "Ethical work habits are consistent behaviors that reflect honesty, integrity, accountability, and respect for colleagues, customers, and organizational standards in every professional interaction.",
    keyPoints: [
      "Integrity: Doing the right thing consistently, whether or not being observed, forms the foundation of professional trust.",
      "Accountability: Taking ownership of mistakes rather than deflecting builds credibility and organizational trust.",
      "Honesty: Accurate and complete communication—including bad news—enables sound decision-making at every level.",
      "Confidentiality: Protecting sensitive information about clients, colleagues, and the organization demonstrates trustworthiness.",
      "Fairness: Treating all colleagues and customers equitably, regardless of status or relationship, reflects ethical character."
    ],
    roleplayTips: [
      "\"I need to flag an error in the report I submitted yesterday—I found a calculation mistake that changes one of the conclusions, and I want to correct the record before it informs any decisions.\"",
      "\"I was asked to share confidential client information with a competitor, and I declined—that's a legal and ethical line I won't cross regardless of the business rationale offered.\"",
      "\"Ethical behavior isn't situational for me—I behave the same way in this meeting as I do when no one senior is in the room.\""
    ]
  },

  "EI006": {
    id: "EI006",
    code: "EI:006",
    name: "Exhibit a professional image",
    definition: "Professional image encompasses personal appearance, demeanor, communication style, and behavior standards that project competence, credibility, and respect in a business environment.",
    keyPoints: [
      "Appearance: Dress, grooming, and accessories should align with industry norms and the audience's expectations.",
      "Demeanor: Posture, eye contact, handshake, and facial expressions collectively communicate confidence and approachability.",
      "Communication Style: Vocabulary, tone, and formality level should match the professional context.",
      "Digital Presence: Social media profiles, email tone, and video call backgrounds are extensions of professional image.",
      "Consistency: Professional image must be consistent across in-person, phone, email, and social interactions."
    ],
    roleplayTips: [
      "\"I research the client's company culture before every meeting so I can calibrate my attire and communication style to match their norms—first impressions are permanent.\"",
      "\"My LinkedIn profile is a professional asset that clients review before we meet—it needs to reflect the same credibility I project in person.\"",
      "\"Showing up five minutes early, prepared, and professionally dressed is non-verbal communication that says 'I respect your time and take this seriously.'\""
    ]
  },

  "EI007": {
    id: "EI007",
    code: "EI:007",
    name: "Exhibit positive attitude",
    definition: "A positive attitude in the workplace is the consistent orientation toward constructive thinking, solutions-focused communication, and enthusiasm that elevates team performance and professional relationships.",
    keyPoints: [
      "Optimism: Approaching challenges with confidence that solutions exist encourages team engagement and creative problem-solving.",
      "Energy: Enthusiasm is contagious—positive team members elevate the mood and motivation of those around them.",
      "Solutions Focus: Redirecting from problem description to solution generation is a learned, professionally valuable skill.",
      "Resilience: Maintaining positivity after setbacks models the emotional durability that high-performing teams require.",
      "Authenticity: Genuine positivity differs from toxic positivity—it acknowledges challenges while maintaining forward momentum."
    ],
    roleplayTips: [
      "\"This is a difficult situation, but I see a viable path forward—let me walk through the three options I've identified and my recommendation.\"",
      "\"I'm excited about this challenge specifically because it's new territory for us; the learning curve creates a capability we'll be able to leverage on future projects.\"",
      "\"I make a deliberate choice to focus energy on what's actionable rather than what's frustrating—it makes me more effective and more valuable to the team.\""
    ]
  },

  "EI008": {
    id: "EI008",
    code: "EI:008",
    name: "Demonstrate interest and enthusiasm",
    definition: "Genuine interest and enthusiasm for one's work and colleagues drives engagement, builds relationships, and signals the intrinsic motivation that high-performing professionals possess.",
    keyPoints: [
      "Curiosity: Asking thoughtful questions about the business, customers, and industry demonstrates authentic engagement.",
      "Initiative: Voluntarily going beyond assigned tasks signals enthusiasm and investment in outcomes.",
      "Preparation: Showing up fully prepared for meetings and tasks demonstrates that the work matters to you.",
      "Recognition of Others: Enthusiastically acknowledging colleagues' contributions energizes teams and builds loyalty.",
      "Career Investment: Professionals who genuinely love their domain build deeper expertise and outperform those who are merely transactional."
    ],
    roleplayTips: [
      "\"I read your recent case study on this before our meeting because I wanted to come in with informed questions rather than starting from zero.\"",
      "\"I stayed late to finish the competitive analysis because I find this market genuinely fascinating—and frankly, the deeper I went, the more opportunity I found.\"",
      "\"I'd love to shadow your operations team for a day if that's possible; understanding how the product is built would make me a much more effective account manager.\""
    ]
  },

  "EI009": {
    id: "EI009",
    code: "EI:009",
    name: "Foster positive working relationships",
    definition: "Positive working relationships are built through trust, mutual respect, reliable follow-through, and the genuine investment in others' success that creates high-functioning professional networks.",
    keyPoints: [
      "Trust: Reliability—doing what you say you'll do—is the single most important factor in building professional trust.",
      "Empathy: Understanding colleagues' perspectives, pressures, and goals strengthens collaboration and goodwill.",
      "Recognition: Acknowledging others' contributions publicly and sincerely fosters loyalty and reciprocal support.",
      "Conflict Navigation: Addressing relationship friction directly and respectfully prevents it from becoming toxic.",
      "Network Value: Strong professional relationships are the foundation of career advancement, referrals, and collaborative success."
    ],
    roleplayTips: [
      "\"I always make time to follow up when I say I will—even if it's just to say 'I'm still working on it'—because predictability is the foundation of trust.\"",
      "\"When a colleague solves a hard problem, I name it specifically in our team meeting; recognition costs nothing and builds the kind of team culture where people go the extra mile.\"",
      "\"I'd rather address a relationship tension directly in a private conversation than let it fester and affect our collaboration on a client project.\""
    ]
  },

  "EI010": {
    id: "EI010",
    code: "EI:010",
    name: "Demonstrate adaptability",
    definition: "Adaptability is the ability to adjust effectively to changing circumstances, new information, shifting priorities, or unfamiliar situations while maintaining performance and composure.",
    keyPoints: [
      "Cognitive Flexibility: Willingness to revise plans, assumptions, or approaches when evidence warrants it.",
      "Change Embrace: Viewing change as opportunity rather than threat positions professionals for advancement.",
      "Learning Agility: Quickly acquiring new skills or knowledge when the role demands it demonstrates high adaptability.",
      "Ambiguity Tolerance: Comfortable operating with incomplete information without becoming paralyzed or reactive.",
      "Recovery Speed: Bouncing back from disruption quickly minimizes the performance cost of change."
    ],
    roleplayTips: [
      "\"When the project scope changed completely last month, I restructured our approach within 48 hours—flexibility is a competitive advantage in a fast-moving environment.\"",
      "\"I've shifted strategy three times this quarter as market conditions evolved; I don't treat the original plan as sacred when the facts on the ground change.\"",
      "\"I actively seek out assignments in unfamiliar areas because discomfort is how I know I'm building the range I'll need at the next level.\""
    ]
  },

  "EI011": {
    id: "EI011",
    code: "EI:011",
    name: "Use appropriate assertiveness",
    definition: "Assertiveness is the ability to express one's needs, ideas, and boundaries confidently and respectfully without aggression, enabling professionals to advocate effectively for themselves and their positions.",
    keyPoints: [
      "Assertiveness vs. Aggression: Assertiveness respects others' rights while expressing one's own; aggression disregards others' perspectives.",
      "Passive vs. Assertive: Passive communication suppresses needs and creates resentment; assertive communication resolves issues directly.",
      "I-Statements: Framing concerns as personal observations ('I observed' or 'I need') rather than accusations reduces defensiveness.",
      "Negotiation: Assertiveness is essential in salary discussions, contract negotiations, and advocating for resources.",
      "Context Calibration: Appropriate assertiveness is calibrated to the relationship, culture, and stakes of the situation."
    ],
    roleplayTips: [
      "\"I want to be direct with you: my analysis supports a different recommendation than the one on the table, and I think it's worth a thorough discussion before we commit.\"",
      "\"I appreciate the additional request, but I need to flag that adding this scope will require either adjusting the deadline or adding resources—which would you prefer?\"",
      "\"I'm not comfortable proceeding with this approach given the compliance implications I've outlined; I'd like to escalate to the legal team before we move forward.\""
    ]
  },

  "EI012": {
    id: "EI012",
    code: "EI:012",
    name: "Use conflict-resolution skills",
    definition: "Conflict resolution involves identifying the source of disagreement, facilitating open dialogue, and reaching a mutually acceptable solution that preserves relationships and moves work forward.",
    keyPoints: [
      "Early Intervention: Addressing conflict at early stages prevents escalation into entrenched positions or damaged relationships.",
      "Separate People from Problems: Focus on interests and issues, not personalities, to depersonalize the conflict.",
      "Active Listening: Both parties must feel heard before they're willing to consider the other's perspective.",
      "Common Ground: Finding shared goals creates a foundation for compromise that all parties can support.",
      "Formal Escalation: When direct resolution fails, involving HR, mediators, or leadership is the appropriate next step."
    ],
    roleplayTips: [
      "\"I'd like us to take a step back from our positions and identify what each of us actually needs from this outcome—I think we have more common ground than this conversation suggests.\"",
      "\"I want to understand your concern from your perspective before I respond; can you walk me through what specifically isn't working for you?\"",
      "\"We both want this project to succeed; the disagreement is about method, not objective—let's document both approaches and evaluate them against our shared success criteria.\""
    ]
  },

  "EI013": {
    id: "EI013",
    code: "EI:013",
    name: "Manage commitments in a timely manner",
    definition: "Managing commitments means accurately scoping what can be delivered, communicating proactively about constraints, and consistently completing obligations on time to maintain professional reliability.",
    keyPoints: [
      "Commitment Accuracy: Over-promising and under-delivering destroys trust faster than setting realistic expectations upfront.",
      "Prioritization: When resources are constrained, identifying which commitments are highest-priority allows intentional trade-offs.",
      "Proactive Communication: Informing stakeholders early when a commitment is at risk prevents surprises and enables replanning.",
      "Task Management Systems: Tools like calendars, project boards, and to-do lists externalize commitments so nothing is forgotten.",
      "Recovery Protocols: When a commitment is missed, fast acknowledgment and a revised plan mitigates relationship damage."
    ],
    roleplayTips: [
      "\"I want to flag now that the Thursday deadline is at risk given the additional scope added this week—I'd rather tell you today than deliver partial work on Thursday.\"",
      "\"Before I commit to that timeline, let me check my current workload so I can give you a date I'll actually hit rather than one that sounds good but isn't achievable.\"",
      "\"I've built buffer into every milestone in this project plan because I know from experience that unforeseen obstacles will arise, and I'd rather be early than apologetic.\""
    ]
  },

  "EI014": {
    id: "EI014",
    code: "EI:014",
    name: "Use time-management skills",
    definition: "Time management is the deliberate planning and prioritization of tasks and activities to maximize productive output and minimize wasted time across professional and personal obligations.",
    keyPoints: [
      "Prioritization Frameworks: Methods like Eisenhower Matrix (urgent/important) help distinguish high-value tasks from busywork.",
      "Time Blocking: Scheduling specific time for specific tasks protects high-priority work from reactive interruption.",
      "Delegation: Assigning appropriate tasks to others leverages team capacity and focuses leaders on highest-value work.",
      "Eliminating Time Drains: Identifying and reducing low-value meetings, interruptions, and inefficient processes recaptures significant time.",
      "Review and Adjustment: Weekly review of progress against goals allows real-time course correction before deadlines are missed."
    ],
    roleplayTips: [
      "\"I batch my email responses twice a day rather than responding reactively because constant context switching reduces deep work output by up to 40%.\"",
      "\"My calendar is organized around three 'deep work' blocks per week that are protected from meetings—that's when our most complex strategic work actually gets done.\"",
      "\"I review my task list every Monday morning and rank by impact, not urgency—it prevents me from spending the week reacting to others' priorities at the expense of our own goals.\""
    ]
  },

  "EI015": {
    id: "EI015",
    code: "EI:015",
    name: "Maintain appropriate personal appearance",
    definition: "Appropriate personal appearance in a professional setting involves dressing, grooming, and presenting oneself in a way that aligns with workplace standards, industry norms, and the expectations of clients and colleagues.",
    keyPoints: [
      "Industry Norms: Appropriate appearance differs across sectors—financial services expect formal attire; tech startups may favor business casual.",
      "Client-Facing Standards: Customer-facing roles require higher appearance standards than back-office positions.",
      "Consistency: Appearance standards should be maintained consistently, not only on days when important meetings are scheduled.",
      "Hygiene and Grooming: Clean, neat, and well-maintained personal hygiene is a non-negotiable baseline in professional settings.",
      "Brand Alignment: Personal appearance contributes to or detracts from the company's brand perception during external interactions."
    ],
    roleplayTips: [
      "\"I always dress one level above what's required for a meeting—it signals to the client that I take the relationship seriously.\"",
      "\"When I'm presenting to the board versus having a working session with my team, my attire reflects the difference in audience and context.\"",
      "\"Personal appearance is a form of professional communication—it tells people how seriously you take the role before you've said a word.\""
    ]
  },

  "EI016": {
    id: "EI016",
    code: "EI:016",
    name: "Show empathy for others",
    definition: "Empathy is the ability to understand and share the feelings of others, enabling professionals to build deeper relationships, navigate conflict constructively, and lead more effectively.",
    keyPoints: [
      "Cognitive Empathy: Understanding another person's perspective and reasoning, even without sharing their emotion.",
      "Affective Empathy: Experiencing a shared emotional response that creates genuine connection and solidarity.",
      "Professional Application: Empathetic leaders, salespeople, and service professionals achieve better outcomes through stronger relationships.",
      "Active Listening: Empathy requires full attention to both what is said and the emotional subtext underneath the words.",
      "Appropriate Expression: Empathy in professional settings must be genuine but calibrated—acknowledging feelings without losing objectivity."
    ],
    roleplayTips: [
      "\"I can hear how stressful this situation has been for your team—losing a key account is genuinely difficult, and I want to understand fully before we discuss solutions.\"",
      "\"I'm not going to jump straight to fixing this; first tell me how this is affecting you, because the solution needs to address the real impact, not just the surface problem.\"",
      "\"Putting myself in the customer's position, I'd be frustrated too—let me think about what I'd want to happen if I were in their situation, and let that guide our response.\""
    ]
  },

  // ── EN: Entrepreneurship ──────────────────────────────────────────────────

  "EN001": {
    id: "EN001",
    code: "EN:001",
    name: "Explain the concept of entrepreneurship",
    definition: "Entrepreneurship is the process of identifying market opportunities, organizing resources, and accepting risk to create new ventures or drive innovation within existing organizations for value creation.",
    keyPoints: [
      "Risk-Reward Relationship: Entrepreneurs accept uncertainty and potential loss in exchange for the possibility of exceptional returns.",
      "Opportunity Recognition: Entrepreneurs identify needs the market is not yet serving or is serving poorly.",
      "Resource Mobilization: Entrepreneurial skill involves assembling land, labor, capital, and knowledge to execute on an opportunity.",
      "Value Creation: Successful entrepreneurship creates economic, social, or organizational value that did not exist before.",
      "Intrapreneurship: Entrepreneurial behavior within an existing organization drives innovation without creating a new entity."
    ],
    roleplayTips: [
      "\"Entrepreneurship isn't just about starting companies—it's about seeing a problem that others have normalized and refusing to accept that it can't be solved differently.\"",
      "\"The risk I'm taking is calculated: I've validated demand with 50 paying pilot customers before investing in full development, which dramatically de-risks the venture.\"",
      "\"Every successful business started as someone's conviction that the current solution wasn't good enough—that's the entrepreneurial mindset I bring to this market.\""
    ]
  },

  "EN002": {
    id: "EN002",
    code: "EN:002",
    name: "Describe the entrepreneurial discovery process",
    definition: "The entrepreneurial discovery process is the systematic approach of identifying, evaluating, and validating business opportunities through market research, hypothesis testing, and iterative learning.",
    keyPoints: [
      "Opportunity Identification: Opportunities emerge from gaps between what customers need and what currently exists in the market.",
      "Idea Generation: Techniques like design thinking, customer interviews, and trend analysis surface potential opportunities.",
      "Feasibility Assessment: Evaluating technical, financial, and market feasibility filters ideas to actionable opportunities.",
      "Market Validation: Testing hypotheses with real customers before full investment reduces the risk of building something nobody wants.",
      "Iteration: Discovery is non-linear; insights from validation often redefine the original opportunity significantly."
    ],
    roleplayTips: [
      "\"Before writing a single line of code, I interviewed 40 potential customers to validate that the pain point I'd identified was real, frequent, and worth paying to solve.\"",
      "\"Our MVP was intentionally rough—we wanted to learn whether the concept had legs before over-investing in a polished solution the market might not want.\"",
      "\"The discovery process doesn't end at launch; we're continuously testing assumptions about customer needs, willingness to pay, and acquisition channels as we scale.\""
    ]
  },

  "EN003": {
    id: "EN003",
    code: "EN:003",
    name: "Assess global trends and opportunities",
    definition: "Assessing global trends involves analyzing macroeconomic, demographic, technological, regulatory, and cultural shifts to identify entrepreneurial opportunities created by change.",
    keyPoints: [
      "PESTEL Analysis: A framework that systematically examines Political, Economic, Social, Technological, Environmental, and Legal trends.",
      "Megatrends: Long-term shifts like aging populations, urbanization, and digitalization create durable new market opportunities.",
      "Emerging Markets: Developing economies with rising middle classes represent significant growth opportunities for scalable businesses.",
      "Disruption Patterns: Established industries with high margins, poor customer experience, or inefficient processes are ripe for disruption.",
      "Competitive Timing: Entering a market at the right point of trend adoption—not too early or too late—determines success probability."
    ],
    roleplayTips: [
      "\"The demographic trend of 10,000 Baby Boomers retiring daily for the next decade creates a structural demand surge for healthcare, financial planning, and leisure services.\"",
      "\"AI is not a product; it's a platform technology that will reshape cost structures across every industry—the opportunity is in identifying which incumbents are most vulnerable.\"",
      "\"We're building for the global market from day one because the technology enables it and limiting to domestic markets arbitrarily caps our total addressable market.\""
    ]
  },

  "EN004": {
    id: "EN004",
    code: "EN:004",
    name: "Determine opportunities for venture creation",
    definition: "Identifying venture creation opportunities requires evaluating market gaps, customer pain points, competitive weaknesses, and resource access against the entrepreneur's capabilities and risk tolerance.",
    keyPoints: [
      "Market Gap Analysis: Comparing existing solutions against unmet customer needs reveals white space for new ventures.",
      "Customer Pain Points: Problems customers experience frequently, urgently, and expensively represent the strongest venture opportunities.",
      "Competitive Landscape: Industries with fragmented, complacent, or high-cost incumbents offer more entry opportunity than consolidated markets.",
      "Resource Requirements: Assessing capital, talent, and technology needs against available resources validates venture feasibility.",
      "Founder-Market Fit: Ventures led by founders with relevant expertise, networks, or domain insight have higher success rates."
    ],
    roleplayTips: [
      "\"The opportunity I'm pursuing sits at the intersection of two market shifts that neither incumbent is addressing simultaneously—that's the white space.\"",
      "\"I've identified that the top three complaints in this industry's customer reviews cluster around the same three issues—that's the roadmap for a better solution.\"",
      "\"Before we pursue this opportunity, I want to stress-test whether we have—or can acquire—the capabilities that will make us the right team to win in this market.\""
    ]
  },

  "EN005": {
    id: "EN005",
    code: "EN:005",
    name: "Assess entrepreneurial opportunities",
    definition: "Opportunity assessment evaluates potential ventures across market size, competitive advantage, financial viability, team capability, and strategic timing to determine whether to pursue, modify, or abandon an idea.",
    keyPoints: [
      "Market Size (TAM/SAM/SOM): Total addressable, serviceable addressable, and obtainable market sizing determines revenue ceiling.",
      "Competitive Advantage: Sustainable differentiation—IP, network effects, cost structure, or brand—determines defensibility over time.",
      "Unit Economics: Positive contribution margin (revenue minus variable cost per unit) is the foundation of a scalable business.",
      "Go-to-Market Feasibility: A realistic customer acquisition strategy with validated channels is essential for conversion.",
      "Risk Profile: Identifying the key risks and the assumptions that must prove true structures a rational pursuit decision."
    ],
    roleplayTips: [
      "\"Our serviceable addressable market is $2.4 billion, and we need only 0.5% share to hit profitability—the math works even with conservative assumptions.\"",
      "\"The key assumption I'm most uncertain about is our customer acquisition cost; that's why our first investment dollar goes into testing two acquisition channels side by side.\"",
      "\"A large TAM isn't enough—I look for TAMs with fragmented supply, urgent demand, and room for a 10x better solution, because that's where venture returns are created.\""
    ]
  },

  "EN006": {
    id: "EN006",
    code: "EN:006",
    name: "Describe the sources of capital for entrepreneurial ventures",
    definition: "Entrepreneurial ventures are funded through a spectrum of capital sources—from personal savings and friends-and-family to angel investors, venture capital, bank debt, and government programs—each with different terms, expectations, and implications.",
    keyPoints: [
      "Bootstrapping: Self-funded growth from revenue preserves equity and control but limits speed of growth.",
      "Angel Investment: High-net-worth individuals provide early-stage capital in exchange for equity, often with mentorship.",
      "Venture Capital: VC firms invest institutional funds in high-growth startups, expecting 10x+ returns and board representation.",
      "Debt Financing: SBA loans, bank loans, and revenue-based financing provide capital without equity dilution.",
      "Crowdfunding: Reward, equity, or debt crowdfunding platforms access capital from large numbers of small investors."
    ],
    roleplayTips: [
      "\"We're using revenue-based financing rather than equity for this growth phase because I don't want to dilute the cap table before we've proven the scalability of the model.\"",
      "\"An angel round at this stage buys us 18 months of runway to hit the milestones that will justify a Series A at a significantly higher valuation.\"",
      "\"Every capital source has a cost—equity costs you ownership and control; debt costs you cash flow; the right choice depends on your growth rate and risk tolerance.\""
    ]
  },

  "EN007": {
    id: "EN007",
    code: "EN:007",
    name: "Explain factors to consider in choosing a form of business ownership",
    definition: "Selecting a business ownership structure requires balancing liability protection, tax treatment, management flexibility, fundraising ability, and administrative complexity based on the venture's specific needs.",
    keyPoints: [
      "Liability: Sole proprietors and general partners have unlimited personal liability; LLCs and corporations limit owner exposure.",
      "Taxation: Sole proprietorships and partnerships use pass-through taxation; C-corps face double taxation but enable equity financing.",
      "Control: Sole proprietorships offer complete control; corporations distribute authority among shareholders, directors, and officers.",
      "Capital Access: Corporations can issue equity widely; LLCs are restricted; sole proprietors rely on personal assets and debt.",
      "Administrative Burden: Corporations require formal governance—board meetings, minutes, bylaws—while LLCs and sole proprietorships have fewer requirements."
    ],
    roleplayTips: [
      "\"I'm recommending an LLC at formation because it gives you personal liability protection and pass-through taxation without the governance overhead of a corporation at this stage.\"",
      "\"If you plan to raise venture capital, you'll need to convert to a Delaware C-corp—VCs won't invest in LLCs due to the tax complexity for their fund structures.\"",
      "\"The right ownership structure isn't permanent—it should evolve as the business grows, the investor base changes, and the tax situation becomes more complex.\""
    ]
  },

  "EN008": {
    id: "EN008",
    code: "EN:008",
    name: "Write a business plan",
    definition: "A business plan is a formal document that articulates a venture's mission, market opportunity, competitive strategy, operational model, financial projections, and funding requirements to guide internal decisions and attract external support.",
    keyPoints: [
      "Executive Summary: A compelling one-to-two page overview that captures the essence of the opportunity and the ask.",
      "Market Analysis: Data-supported assessment of target market size, growth rate, segmentation, and customer personas.",
      "Competitive Analysis: Honest evaluation of direct and indirect competitors with clear articulation of differentiation.",
      "Financial Projections: Revenue model, cost structure, and 3-5 year P&L, cash flow, and balance sheet projections.",
      "Team Section: Bios highlighting founders' relevant expertise and the rationale for why this team can execute."
    ],
    roleplayTips: [
      "\"The executive summary is written last and read first—it needs to stand alone and make an investor want to read the rest of the plan.\"",
      "\"Our financial projections are built bottom-up from unit economics, not top-down from market share—that makes the assumptions auditable and the model credible.\"",
      "\"The team slide is often the most important section for early-stage investors; they're betting on people as much as plans, because the plan will change.\""
    ]
  },

  "EN009": {
    id: "EN009",
    code: "EN:009",
    name: "Develop company goals/objectives",
    definition: "Company goals define the long-term aspirations of the venture, while objectives are specific, measurable, time-bound milestones that operationalize those goals into actionable targets.",
    keyPoints: [
      "SMART Framework: Objectives should be Specific, Measurable, Achievable, Relevant, and Time-bound.",
      "Goal Hierarchy: Strategic goals cascade into departmental objectives and individual KPIs through alignment.",
      "OKRs: Objectives and Key Results is a popular framework that pairs qualitative goals with quantitative success metrics.",
      "Stretch Goals: Ambitious targets that require innovative thinking can unlock outsized performance.",
      "Regular Review: Goals should be reviewed quarterly and adjusted when market conditions or priorities change materially."
    ],
    roleplayTips: [
      "\"Our Q3 objective isn't 'grow revenue'—it's 'increase MRR by 22% through expansion of existing accounts, measured weekly in our CRM dashboard.'\"",
      "\"Setting a goal without a measurable metric attached is just a wish; we define exactly how we'll know we've hit it before the quarter begins.\"",
      "\"Our annual goals are aspirational; our quarterly objectives are achievable with focused execution—that distinction keeps the team both motivated and grounded.\""
    ]
  },

  "EN010": {
    id: "EN010",
    code: "EN:010",
    name: "Explain the concept of risk management",
    definition: "Risk management is the systematic process of identifying, assessing, prioritizing, and mitigating threats to an organization's objectives through strategic planning, insurance, controls, and contingency measures.",
    keyPoints: [
      "Risk Identification: Systematic scanning of internal and external environments to surface potential threats.",
      "Risk Assessment: Evaluating each risk by its likelihood and potential impact to prioritize management attention.",
      "Mitigation Strategies: Risks can be avoided, reduced, transferred (insurance/contracts), or accepted with contingency plans.",
      "Risk Tolerance: Organizations define acceptable risk levels that guide which threats require active management.",
      "Monitoring: Continuous tracking of risk indicators allows early response before threats materialize fully."
    ],
    roleplayTips: [
      "\"Our risk register identifies 15 material risks; we've tiered them by impact and probability and have active mitigation plans for the top five.\"",
      "\"We transfer this category of risk through insurance because the potential cost exceeds our risk tolerance, even though the probability is low.\"",
      "\"Scenario planning for our top three risks—not just identifying them—is what allows us to respond quickly when they materialize rather than improvising under pressure.\""
    ]
  },

  "EN011": {
    id: "EN011",
    code: "EN:011",
    name: "Identify risks associated with venture creation",
    definition: "New ventures face a distinct profile of risks including market, financial, operational, competitive, regulatory, and team risks that must be explicitly identified and managed to increase success probability.",
    keyPoints: [
      "Market Risk: Uncertainty about whether sufficient customer demand exists at the price point required for viability.",
      "Financial Risk: Insufficient capital to reach profitability or survive longer-than-expected ramp periods.",
      "Execution Risk: The team's ability to build and deliver the product or service at the required quality and pace.",
      "Competitive Risk: Established players or new entrants could replicate or pre-empt the venture's value proposition.",
      "Regulatory Risk: Unforeseen compliance requirements or regulatory changes could fundamentally alter the business model."
    ],
    roleplayTips: [
      "\"Our biggest single risk is customer acquisition cost coming in above model; that's why we're running paid channel tests before committing to a growth budget.\"",
      "\"I've built 18 months of runway into our funding ask specifically to withstand a longer-than-expected sales cycle in an enterprise market.\"",
      "\"We've filed a provisional patent to protect our core innovation against competitive replication while we validate the business model.\""
    ]
  },

  "EN012": {
    id: "EN012",
    code: "EN:012",
    name: "Develop strategies to establish a competitive advantage",
    definition: "Competitive advantage strategies enable a business to deliver superior value to customers in a sustainable way, outperforming rivals on dimensions that matter most to the target market.",
    keyPoints: [
      "Cost Leadership: Achieving the lowest cost of production allows competitive pricing or superior margins.",
      "Differentiation: Offering unique features, quality, or experience for which customers will pay a premium.",
      "Focus/Niche: Targeting a specific segment so precisely that the business becomes the undisputed best option for that group.",
      "Barriers to Entry: Patents, network effects, switching costs, and brand equity protect advantages from competitive erosion.",
      "Continuous Innovation: Advantages erode over time; companies must continuously evolve to sustain differentiation."
    ],
    roleplayTips: [
      "\"Our competitive moat is our proprietary training dataset, which took three years to curate and cannot be replicated without the same time investment—that's a durable structural advantage.\"",
      "\"We're pursuing a niche focus strategy in manufacturing SMBs rather than chasing the enterprise market, because we can be the clear category leader in a segment our competitors underserve.\"",
      "\"Differentiation through service is our strategy—our NPS is 72 versus the industry average of 31, and customers pay a 15% premium specifically because of that difference.\""
    ]
  },


  // ── FI: Financial Analysis ────────────────────────────────────────────────

  "FI001": {
    id: "FI001",
    code: "FI:001",
    name: "Explain the role of finance in business",
    definition: "Finance encompasses the management of money, credit, investments, and assets to fund business operations, maximize firm value, and support strategic decision-making.",
    keyPoints: [
      "Capital Acquisition: Finance determines how businesses raise money through debt, equity, or retained earnings.",
      "Capital Allocation: Finance guides where scarce capital is deployed across competing investment opportunities.",
      "Risk Management: Financial tools including derivatives, insurance, and diversification manage exposure to uncertainty.",
      "Performance Measurement: Financial statements and ratios quantify business performance against benchmarks and targets.",
      "Value Maximization: The primary financial objective of a for-profit firm is to maximize long-term shareholder value."
    ],
    roleplayTips: [
      "\"Finance isn't just accounting—it's the discipline that determines how we deploy limited capital to maximize the return shareholders expect.\"",
      "\"Our cost of capital is 9%; any project we fund must return above that threshold or we're destroying shareholder value, even if it's profitable in absolute terms.\"",
      "\"The finance function is how we translate strategy into resource commitments and measure whether our execution is actually creating the value we promised investors.\""
    ]
  },

  "FI002": {
    id: "FI002",
    code: "FI:002",
    name: "Explain types of business risk",
    definition: "Financial risk encompasses systematic market risks, interest rate and credit risks, liquidity constraints, and operational exposures that can reduce a company's earnings or threaten its solvency.",
    keyPoints: [
      "Market Risk: Exposure to adverse changes in prices, interest rates, or exchange rates that affect asset values.",
      "Credit Risk: The possibility that borrowers or counterparties will default on their financial obligations.",
      "Liquidity Risk: The inability to meet short-term financial obligations due to insufficient cash or liquid assets.",
      "Operational Risk: Financial losses arising from failed processes, systems, human error, or external events.",
      "Leverage Risk: High debt levels amplify both gains and losses, increasing the probability of financial distress."
    ],
    roleplayTips: [
      "\"Our current ratio of 1.8 gives us a comfortable liquidity cushion, but I'd like to build it to 2.2 before we take on the acquisition debt.\"",
      "\"We're exposed to significant foreign exchange risk given 40% of our revenue is euro-denominated—I recommend a natural hedge through euro-denominated supplier contracts.\"",
      "\"Credit risk concentration in two major customers represents a material vulnerability; we need covenant protections and credit insurance to manage that exposure.\""
    ]
  },

  "FI003": {
    id: "FI003",
    code: "FI:003",
    name: "Interpret financial statements",
    definition: "Financial statement interpretation involves reading and understanding the income statement, balance sheet, and cash flow statement to assess a company's profitability, financial position, and liquidity.",
    keyPoints: [
      "Income Statement: Reports revenue, expenses, and profit over a period—answers 'Is the company profitable?'",
      "Balance Sheet: Shows assets, liabilities, and equity at a point in time—answers 'What does the company own and owe?'",
      "Cash Flow Statement: Tracks operating, investing, and financing cash flows—answers 'Where did cash come from and go?'",
      "Interconnections: Net income links income statement to equity on the balance sheet; non-cash adjustments reconcile to cash flow.",
      "Notes: Footnotes contain critical detail on accounting policies, contingencies, and segment performance."
    ],
    roleplayTips: [
      "\"The income statement shows strong net income, but the cash flow from operations is negative—that tells me earnings quality is low and I need to investigate working capital.\"",
      "\"A high debt-to-equity ratio on the balance sheet signals financial leverage that could limit strategic flexibility in a downturn.\"",
      "\"I always start with the cash flow statement because cash is harder to manipulate than accrual-based earnings—it tells the most honest story.\""
    ]
  },

  "FI004": {
    id: "FI004",
    code: "FI:004",
    name: "Analyze financial statements",
    definition: "Financial statement analysis applies ratio analysis, trend analysis, and benchmarking to evaluate a company's profitability, efficiency, liquidity, and solvency relative to prior periods and industry peers.",
    keyPoints: [
      "Profitability Ratios: Gross margin, net margin, ROE, and ROA measure how efficiently the company generates profit.",
      "Liquidity Ratios: Current ratio and quick ratio assess ability to meet short-term obligations.",
      "Leverage Ratios: Debt-to-equity and interest coverage ratios evaluate financial risk and solvency.",
      "Efficiency Ratios: Asset turnover and inventory turnover reveal how productively resources generate revenue.",
      "Trend Analysis: Comparing ratios over multiple periods identifies improving or deteriorating performance trajectories."
    ],
    roleplayTips: [
      "\"EBITDA margin expanded 3 points year-over-year while revenue grew 18%—that tells me we're achieving operating leverage, which is the right direction for a growth company.\"",
      "\"Their interest coverage ratio has fallen from 4.2x to 1.8x over three years—that's a yellow flag on credit quality that I'd want explained before extending trade credit.\"",
      "\"I benchmark against the top-quartile peer group, not the average, because average performance in this industry still produces below-cost-of-capital returns.\""
    ]
  },

  "FI005": {
    id: "FI005",
    code: "FI:005",
    name: "Calculate financial ratios",
    definition: "Financial ratios are mathematical relationships between financial statement figures that provide standardized, comparable measures of a company's performance, position, and risk.",
    keyPoints: [
      "Gross Margin: (Revenue − COGS) ÷ Revenue — measures product-level profitability before overhead.",
      "Current Ratio: Current Assets ÷ Current Liabilities — measures short-term liquidity.",
      "Debt-to-Equity: Total Debt ÷ Total Equity — measures financial leverage.",
      "Return on Equity: Net Income ÷ Shareholders' Equity — measures profitability from shareholders' perspective.",
      "Inventory Turnover: COGS ÷ Average Inventory — measures how efficiently inventory is managed."
    ],
    roleplayTips: [
      "\"Our gross margin of 58% versus the industry average of 43% tells me our pricing power or supply chain efficiency is a genuine competitive advantage.\"",
      "\"A current ratio of 0.85 means we have less current assets than current liabilities—that's a liquidity warning sign we need to address before the credit line renewal.\"",
      "\"Return on equity of 22% significantly exceeds our cost of equity of 11%, confirming we're generating economic profit and creating real shareholder value.\""
    ]
  },

  "FI006": {
    id: "FI006",
    code: "FI:006",
    name: "Describe the nature of budgets",
    definition: "A budget is a formal financial plan that allocates expected revenue and expenditures over a defined period, serving as a tool for planning, coordination, control, and performance evaluation.",
    keyPoints: [
      "Operating Budget: Projects revenues and operating expenses for the coming period based on business plans.",
      "Capital Budget: Allocates funds for long-term asset investments like equipment, facilities, and technology.",
      "Master Budget: Integrates all departmental budgets into a unified organizational financial plan.",
      "Variance Analysis: Comparing actual results to budget identifies overspending, under-performance, or opportunity.",
      "Zero-Based Budgeting: Requires every expense to be justified anew each period rather than based on prior year."
    ],
    roleplayTips: [
      "\"Our budget isn't just a spending plan; it's a performance contract—every department head commits to delivering their numbers as a condition of receiving the allocation.\"",
      "\"A 12% favorable variance in Q2 marketing spend with only a 3% revenue shortfall tells me we achieved most of the impact with less spend—let's understand why before we cut the budget.\"",
      "\"Zero-based budgeting forces every team to defend their spend from first principles, which surfaces legacy costs that would otherwise roll forward unexamined for years.\""
    ]
  },

  "FI007": {
    id: "FI007",
    code: "FI:007",
    name: "Develop a personal budget",
    definition: "A personal budget is an individual financial plan that tracks and allocates income across expenses, savings, and investments to achieve personal financial goals and maintain solvency.",
    keyPoints: [
      "Income Tracking: Accurately capturing all income sources is the starting point for any realistic budget.",
      "Fixed vs. Variable Expenses: Fixed costs (rent, insurance) are consistent; variable costs (dining, entertainment) can be managed.",
      "Emergency Fund: Financial planning best practice allocates 3–6 months of expenses to liquid savings before investing.",
      "Debt Management: Prioritizing high-interest debt repayment reduces total interest cost and improves financial health.",
      "Savings Rate: The percentage of income saved is the single most powerful driver of long-term wealth accumulation."
    ],
    roleplayTips: [
      "\"Paying yourself first by automating a fixed savings transfer on payday removes the temptation to spend what you haven't allocated, which is the most common budget failure mode.\"",
      "\"Tracking discretionary spending for 30 days almost always reveals significant gaps between what people think they spend and what they actually spend.\"",
      "\"A personal budget isn't about restriction—it's about ensuring your money is deliberately directed toward the things you've decided matter most.\""
    ]
  },

  "FI008": {
    id: "FI008",
    code: "FI:008",
    name: "Explain the nature of long-term financial planning",
    definition: "Long-term financial planning aligns resource allocation, investment decisions, and capital structure with an organization's strategic objectives over a multi-year horizon.",
    keyPoints: [
      "Strategic Alignment: Financial plans must reflect strategic priorities like market expansion, R&D investment, or acquisition.",
      "Forecasting: Multi-year revenue and cost projections create the financial context for strategic resource allocation.",
      "Capital Structure Planning: Optimizing the debt-equity mix over time minimizes cost of capital and maximizes flexibility.",
      "Scenario Planning: Modeling optimistic, base, and downside scenarios prepares the organization for range of outcomes.",
      "Investment Prioritization: Long-term planning creates a pipeline of capital investment decisions evaluated against return thresholds."
    ],
    roleplayTips: [
      "\"Our five-year plan isn't a forecast—it's a strategic commitment about where we're deploying capital and what returns we're holding ourselves accountable to deliver.\"",
      "\"I run three financial scenarios for every major strategic decision: what does this look like if things go well, on plan, or significantly worse than expected?\"",
      "\"The purpose of long-term financial planning is to identify capital needs before they become crises, so we can access markets on our terms rather than under duress.\""
    ]
  },

  "FI009": {
    id: "FI009",
    code: "FI:009",
    name: "Describe the concept of the time value of money",
    definition: "The time value of money is the principle that a dollar today is worth more than a dollar in the future because of its potential to earn investment returns over time.",
    keyPoints: [
      "Present Value: The current worth of a future cash flow, discounted at the appropriate rate of return.",
      "Future Value: The value of a current sum at a specified date in the future given an assumed rate of return.",
      "Discount Rate: The rate used to convert future cash flows to present value—typically the cost of capital.",
      "Net Present Value: The sum of discounted future cash flows minus the initial investment—positive NPV creates value.",
      "Applications: TVM underlies capital budgeting, loan amortization, valuation, and retirement planning."
    ],
    roleplayTips: [
      "\"This investment has a positive NPV of $340,000 at our 12% discount rate, which means it's expected to create real economic value beyond covering our cost of capital.\"",
      "\"We're delaying capex by 18 months, which isn't 'free'—the time value of the returns we could have been generating during that period is a real cost we need to quantify.\"",
      "\"A dollar of savings today is worth more than a dollar of savings five years from now because we can invest today's dollar and compound it forward.\""
    ]
  },

  "FI010": {
    id: "FI010",
    code: "FI:010",
    name: "Explain the investment-decision process",
    definition: "The investment-decision process involves identifying, evaluating, ranking, and selecting capital projects or financial assets based on expected risk-adjusted returns and strategic alignment.",
    keyPoints: [
      "Capital Budgeting: The process of evaluating major investments in assets like equipment, facilities, or acquisitions.",
      "Evaluation Methods: NPV, IRR, payback period, and profitability index each provide different perspectives on investment merit.",
      "Hurdle Rate: The minimum acceptable return (often WACC) that a project must exceed to receive capital allocation.",
      "Risk Assessment: Higher-risk investments require higher expected returns to compensate for additional uncertainty.",
      "Portfolio Approach: Investment decisions should consider how new assets interact with existing portfolio risk and return."
    ],
    roleplayTips: [
      "\"We rank competing capital projects by NPV per dollar of invested capital, not absolute NPV, because our capital is finite and we need the highest return on each dollar deployed.\"",
      "\"This project's IRR of 18% exceeds our hurdle rate of 12% and has a payback period of 2.8 years—it meets all three of our investment criteria.\"",
      "\"I won't approve a project based on payback period alone because it ignores cash flows beyond the payback date—we use NPV as the primary decision criterion.\""
    ]
  },

  "FI011": {
    id: "FI011",
    code: "FI:011",
    name: "Describe the nature of investment portfolio management",
    definition: "Portfolio management is the process of selecting and managing a mix of investments to achieve desired risk-adjusted returns aligned with the investor's objectives, time horizon, and risk tolerance.",
    keyPoints: [
      "Diversification: Spreading investments across uncorrelated assets reduces portfolio risk without sacrificing expected return.",
      "Asset Allocation: The strategic distribution of capital across asset classes (equities, bonds, real estate, cash) is the primary determinant of long-term returns.",
      "Risk Tolerance: An investor's capacity to withstand portfolio volatility determines the appropriate asset allocation.",
      "Rebalancing: Periodically restoring target allocations captures gains from outperforming assets and re-diversifies.",
      "Performance Measurement: Returns should be evaluated against relevant benchmarks and adjusted for risk taken."
    ],
    roleplayTips: [
      "\"Our portfolio is overweight technology after this year's run-up; I recommend rebalancing to target allocation to reduce concentration risk before market volatility returns.\"",
      "\"Diversification across asset classes isn't just a risk management tool—it's how we ensure we're not dependent on a single economic scenario to meet our return objective.\"",
      "\"Generating alpha consistently requires either an information edge, a process edge, or a behavioral edge over the market—most active managers lack all three, which is why index allocation makes sense for core positions.\""
    ]
  },

  "FI012": {
    id: "FI012",
    code: "FI:012",
    name: "Explain the nature of accounts receivable",
    definition: "Accounts receivable represents money owed to a business by customers for goods or services delivered on credit, and its management directly affects cash flow, working capital, and credit risk.",
    keyPoints: [
      "Credit Terms: Net 30, Net 60, and 2/10 Net 30 are common terms that define when payment is due and any early payment discounts.",
      "Aging Schedule: Categorizing receivables by age (0-30, 31-60, 61-90 days) identifies collection risk and overdue accounts.",
      "Days Sales Outstanding (DSO): Average collection period measures efficiency of receivables management—lower is better.",
      "Bad Debt Reserve: Businesses estimate and reserve for uncollectible accounts using historical default rates.",
      "Factoring: Selling receivables to a third party at a discount converts credit sales to immediate cash."
    ],
    roleplayTips: [
      "\"Our DSO has increased from 38 to 52 days over the past two quarters—that 14-day increase represents $2.3M of additional cash tied up in receivables that we need to recover.\"",
      "\"I'm implementing automated payment reminders at day 25 and a collections call process at day 40 to bring our aging profile back in line with our credit terms.\"",
      "\"Extending net 60 terms to win this customer effectively provides them with a 60-day interest-free loan—we need to price that cost into the deal or negotiate a deposit.\""
    ]
  },

  "FI013": {
    id: "FI013",
    code: "FI:013",
    name: "Explain the nature of accounts payable",
    definition: "Accounts payable represents a company's short-term obligations to suppliers for goods and services received on credit, and its management directly affects working capital, supplier relationships, and cash efficiency.",
    keyPoints: [
      "Payment Terms: Negotiating favorable terms (Net 60 vs. Net 30) extends the use of supplier credit as working capital.",
      "Early Payment Discounts: 2/10 Net 30 offers a 2% discount for payment within 10 days—an annualized 36% return if taken.",
      "Days Payable Outstanding (DPO): Measures average days to pay suppliers—higher DPO improves cash conversion cycle.",
      "Supplier Relationships: Consistently paying on time builds trust and can provide preferential treatment during shortages.",
      "Cash Conversion Cycle: Effective payables management (high DPO), receivables collection (low DSO), and inventory management combine to minimize the cash conversion cycle."
    ],
    roleplayTips: [
      "\"Extending our payables from 30 to 45 days with this supplier frees up $1.8M of working capital at no cost—it's functionally free financing.\"",
      "\"I always take the 2/10 Net 30 discount when we have the cash; the effective annualized interest rate you're forgoing by paying late is 36%.\"",
      "\"Our DPO is 22 days versus a peer average of 41—we're paying suppliers significantly faster than industry standard, which is unnecessarily sacrificing cash efficiency.\""
    ]
  },

  "FI014": {
    id: "FI014",
    code: "FI:014",
    name: "Manage the accounting cycle",
    definition: "The accounting cycle is the sequential process of recording, classifying, summarizing, and reporting financial transactions to produce accurate financial statements at the end of each accounting period.",
    keyPoints: [
      "Transaction Recording: Identifying and entering each business event into the accounting system using journal entries.",
      "Ledger Posting: Transferring journal entries to individual account ledgers to track running balances.",
      "Trial Balance: Verifying that total debits equal total credits across all accounts before period-end adjustments.",
      "Adjusting Entries: Recording accruals, deferrals, depreciation, and corrections to ensure accurate period matching.",
      "Financial Statement Preparation: Producing the income statement, balance sheet, and cash flow statement from adjusted balances."
    ],
    roleplayTips: [
      "\"Accrual accounting requires us to recognize revenue when earned, not when cash is received—the accounting cycle ensures our statements reflect economic reality, not just cash flow.\"",
      "\"Our month-end close takes 12 days, which is above best practice; I'm targeting 5 days through automation and earlier cutoff discipline so management gets timely data.\"",
      "\"Reconciling every balance sheet account monthly is non-negotiable—unreconciled accounts are where errors hide until they become material misstatements.\""
    ]
  },

  "FI015": {
    id: "FI015",
    code: "FI:015",
    name: "Describe the nature of cash flow statements",
    definition: "The cash flow statement reports the actual cash generated and used in operating, investing, and financing activities during a period, providing insight into liquidity independent of accrual-based earnings.",
    keyPoints: [
      "Operating Activities: Cash flows from core business operations—collections from customers, payments to suppliers and employees.",
      "Investing Activities: Cash used for capital expenditures, acquisitions, and asset sales.",
      "Financing Activities: Cash flows from issuing or repaying debt and equity, and paying dividends.",
      "Free Cash Flow: Operating cash flow minus capex—the cash available for debt service, dividends, and reinvestment.",
      "Earnings Quality: Companies with high net income but low operating cash flow may have aggressive accounting or working capital issues."
    ],
    roleplayTips: [
      "\"Free cash flow of $4.2M on net income of $3.8M tells me earnings quality is high—the business is generating more cash than it's reporting as profit.\"",
      "\"The investing section shows $12M of capex versus $8M of depreciation—that's an expansion signal, not just maintenance, which should accelerate future revenue capacity.\"",
      "\"I care more about operating cash flow than EBITDA because cash pays the bills; EBITDA is a useful approximation but it excludes real working capital dynamics.\""
    ]
  },

  "FI016": {
    id: "FI016",
    code: "FI:016",
    name: "Explain the nature of balance sheets",
    definition: "The balance sheet is a financial snapshot at a point in time showing what a company owns (assets), what it owes (liabilities), and the residual ownership interest (equity) of its shareholders.",
    keyPoints: [
      "Accounting Equation: Assets = Liabilities + Equity — this equation must always balance.",
      "Current Assets: Cash, receivables, and inventory expected to be converted to cash within one year.",
      "Non-Current Assets: Property, plant, equipment, intangibles, and long-term investments.",
      "Current Liabilities: Obligations due within one year, including accounts payable, accrued expenses, and short-term debt.",
      "Equity: Represents shareholders' residual claim—common stock, retained earnings, and other comprehensive income."
    ],
    roleplayTips: [
      "\"Their intangible assets represent 70% of total assets, nearly all goodwill from acquisitions—that's a balance sheet that requires close scrutiny of impairment risk.\"",
      "\"The balance sheet shows $8M of cash but $6M of current liabilities due in 90 days—the liquidity position is tighter than it looks and we need to watch working capital closely.\"",
      "\"Return on assets of 14% means we're generating $0.14 of net income for every dollar of assets deployed—that's how I evaluate capital efficiency on the balance sheet.\""
    ]
  },

  "FI017": {
    id: "FI017",
    code: "FI:017",
    name: "Explain the nature of income statements",
    definition: "The income statement reports a company's revenues, expenses, and profitability over a specific time period, showing how sales translate through cost layers into net income.",
    keyPoints: [
      "Revenue: The top-line measure of total sales from goods delivered or services rendered during the period.",
      "Gross Profit: Revenue minus cost of goods sold—reveals product-level profitability before operating overhead.",
      "Operating Income (EBIT): Earnings before interest and taxes—reflects core business profitability from operations.",
      "Net Income: The bottom-line profit after all expenses, taxes, and interest—available for reinvestment or distribution.",
      "EPS: Earnings per share divides net income by shares outstanding, enabling cross-company comparison on a per-share basis."
    ],
    roleplayTips: [
      "\"Gross margin contracted 4 points despite revenue growth—that tells me COGS is rising faster than revenue, which is a pricing or procurement problem we need to diagnose immediately.\"",
      "\"Operating income grew 22% while revenue grew 15%—we're achieving the operating leverage that signals our fixed cost base is scaling well against incremental revenue.\"",
      "\"Net income overstates real profitability here because it includes a one-time asset sale gain; I look at recurring operating income as the true measure of business performance.\""
    ]
  },

  // ── HR: Human Resources Management ───────────────────────────────────────

  "HR001": {
    id: "HR001",
    code: "HR:001",
    name: "Explain the role of human resources management",
    definition: "Human resources management is the strategic function responsible for attracting, developing, engaging, and retaining the talent an organization needs to achieve its business objectives.",
    keyPoints: [
      "Strategic Alignment: HR translates business strategy into workforce plans, capabilities, and organizational structures.",
      "Talent Acquisition: Recruiting, selecting, and onboarding qualified candidates is the foundation of organizational capability.",
      "Development: Training, coaching, and career pathing grow employee skills to meet current and future business needs.",
      "Retention: Compensation, culture, recognition, and growth opportunity are the primary levers for reducing voluntary turnover.",
      "Compliance: HR ensures the organization meets all employment law requirements, protecting both employees and the company."
    ],
    roleplayTips: [
      "\"HR's role isn't just administrative—it's strategic workforce planning that ensures we have the right capabilities in the right roles to execute our three-year business plan.\"",
      "\"Our voluntary turnover rate of 18% costs the company approximately $2.4M annually in recruiting, onboarding, and lost productivity—retention is a financial imperative, not a soft goal.\"",
      "\"I partner with every business unit leader to translate their growth plans into specific headcount, skills, and timeline requirements so we're recruiting proactively, not reactively.\""
    ]
  },

  "HR002": {
    id: "HR002",
    code: "HR:002",
    name: "Orient new employees",
    definition: "Employee orientation is the structured process of welcoming new hires, introducing them to the organization's culture, policies, systems, and colleagues to accelerate their integration and productivity.",
    keyPoints: [
      "First Day Experience: A welcoming, organized first day dramatically impacts new hire impressions and early retention.",
      "Organizational Context: Understanding the company's mission, history, structure, and strategic priorities helps new employees see how their role contributes.",
      "Policy and Compliance: Communicating key policies—code of conduct, safety, data security—ensures legal and ethical compliance from day one.",
      "Role Clarity: New hires need a clear understanding of their responsibilities, success metrics, and 30/60/90-day expectations.",
      "Social Integration: Introductions to key colleagues, mentors, and team members accelerate relationship-building and belonging."
    ],
    roleplayTips: [
      "\"A structured 90-day onboarding plan with clear milestones reduces time-to-full-productivity by an average of 40 days, which directly impacts the return on our recruiting investment.\"",
      "\"Our onboarding doesn't end on day five; we have structured check-ins at 30, 60, and 90 days because most voluntary departures happen within the first 90 days of tenure.\"",
      "\"The goal of orientation isn't just paperwork and policies—it's helping the new hire understand how they contribute to something meaningful, which is what drives early engagement.\""
    ]
  },

  "HR003": {
    id: "HR003",
    code: "HR:003",
    name: "Describe methods of employee compensation",
    definition: "Employee compensation encompasses the total value delivered to employees including base salary, variable pay, equity, benefits, and non-monetary rewards in exchange for their contribution.",
    keyPoints: [
      "Base Salary: Fixed periodic pay set based on job value, market rates, and individual performance.",
      "Variable Pay: Bonuses, commissions, and profit-sharing tie pay directly to individual or organizational performance.",
      "Equity Compensation: Stock options and restricted stock units align employee and shareholder interests in growth-stage companies.",
      "Benefits: Health, dental, retirement plans, and paid time off are significant components of total compensation value.",
      "Total Compensation Philosophy: Competitive total comp attracts and retains talent; the mix signals what behaviors the company values."
    ],
    roleplayTips: [
      "\"Our compensation philosophy is to pay base salary at the 50th percentile and offer variable pay that can reach the 75th percentile for top performers—we reward results, not tenure.\"",
      "\"RSUs that vest over four years align employee incentives with long-term value creation and reduce voluntary attrition among top performers.\"",
      "\"A 10% salary increase is more retention-powerful than most managers assume—losing a high performer costs 150 to 200% of their annual salary in recruiting and productivity loss.\""
    ]
  },

  "HR004": {
    id: "HR004",
    code: "HR:004",
    name: "Explain human resources activities",
    definition: "HR activities span the full employee lifecycle, including workforce planning, recruitment, selection, onboarding, training, performance management, compensation, and separation.",
    keyPoints: [
      "Workforce Planning: Forecasting future talent needs based on business strategy and current workforce capabilities.",
      "Recruitment: Attracting qualified candidates through job postings, networking, agencies, and campus programs.",
      "Selection: Evaluating candidates through structured interviews, assessments, and reference checks.",
      "Performance Management: Continuous feedback, goal-setting, and formal reviews align and develop employee performance.",
      "Separation: Managing voluntary and involuntary exits through offboarding, knowledge transfer, and exit interviews."
    ],
    roleplayTips: [
      "\"Structured behavioral interviews with standardized scoring rubrics reduce hiring bias and improve predictive validity compared to unstructured conversational interviews.\"",
      "\"Our exit interview data shows that 'limited growth opportunity' is the top driver of voluntary turnover—that's an organizational design problem we need to address at the manager level.\"",
      "\"Workforce planning 18 months out means we're rarely in reactive hiring mode; we're building capabilities before we need them, which improves quality and reduces time-to-fill.\""
    ]
  },

  "HR005": {
    id: "HR005",
    code: "HR:005",
    name: "Explain the role of training and development",
    definition: "Training and development is the HR function that builds employee knowledge, skills, and competencies to improve current job performance and prepare individuals for future organizational roles.",
    keyPoints: [
      "Needs Assessment: Identifying gaps between current and required skills ensures training addresses real performance issues.",
      "Learning Modalities: Effective programs combine instructor-led, online, on-the-job, and coaching-based learning.",
      "Transfer of Learning: Training that includes practice, feedback, and post-training application achieves behavioral change.",
      "ROI Measurement: Training investment should be measured against productivity improvement, error reduction, or retention impact.",
      "Succession Planning: Development programs build the internal pipeline for critical roles, reducing dependence on external hiring."
    ],
    roleplayTips: [
      "\"We don't train people on things they can Google; we develop capabilities that require practice, feedback, and coaching over time—that's where the real performance gap lives.\"",
      "\"Our leadership development program has a 68% internal promotion rate for participants, which validates the investment and significantly reduces senior-level hiring costs.\"",
      "\"Training without accountability for application is an expensive entertainment event; we build post-training behavioral commitments and 90-day follow-up into every development program.\""
    ]
  },

  "HR006": {
    id: "HR006",
    code: "HR:006",
    name: "Describe the importance of diversity in the workplace",
    definition: "Workplace diversity encompasses the range of differences—including race, gender, age, background, experience, and perspective—that, when actively included, improve organizational creativity, decision-making, and performance.",
    keyPoints: [
      "Business Case: Diverse teams generate more creative solutions and make better decisions by avoiding groupthink.",
      "Talent Access: Inclusive recruiting practices expand the available talent pool significantly.",
      "Market Representation: Teams that reflect customer demographics better understand and serve those markets.",
      "Equity vs. Equality: Equity requires providing differentiated support to ensure fair opportunity, not just identical treatment.",
      "Inclusion Imperative: Diversity without inclusion creates environments where diverse voices aren't heard—both are required."
    ],
    roleplayTips: [
      "\"Diverse leadership teams outperform homogeneous ones on financial metrics by a documented margin—this is a performance imperative, not just an ethical one.\"",
      "\"We're building inclusion practices into our core processes—interview panels, decision-making forums, and promotion criteria—not treating it as a standalone initiative.\"",
      "\"Representation in the pipeline requires active sourcing investment; if we rely on passive applicants, we'll replicate the demographic biases of our existing network.\""
    ]
  },

  "HR007": {
    id: "HR007",
    code: "HR:007",
    name: "Explain the nature of personnel records",
    definition: "Personnel records are the official employment documents maintained for each employee, including hiring records, performance evaluations, compensation history, and disciplinary actions, governed by legal requirements.",
    keyPoints: [
      "Legal Requirements: Employment law mandates retention of I-9 forms, tax documents, and certain records for specified periods.",
      "Confidentiality: Personnel files contain sensitive personal information and must be protected from unauthorized access.",
      "Accuracy: Records must be current, accurate, and free of subjective or discriminatory language.",
      "Access Rights: Employees typically have the right to review their own personnel file under state law provisions.",
      "Retention Schedules: Different record types have different legally required retention periods after employee separation."
    ],
    roleplayTips: [
      "\"All disciplinary documentation must be factual, specific, and signed by both parties—subjective language in personnel records creates significant legal exposure in wrongful termination disputes.\"",
      "\"We store personnel records in an encrypted, access-controlled system because a data breach involving employee SSNs and compensation history creates serious legal liability.\"",
      "\"Retention schedules aren't optional—destroying records too early or too late can create legal problems in litigation or regulatory audits.\""
    ]
  },

  "HR008": {
    id: "HR008",
    code: "HR:008",
    name: "Describe the types of personnel records",
    definition: "Personnel record types include hiring documents, performance records, compensation records, benefits enrollment, training certifications, disciplinary records, and separation documents, each serving a specific legal or operational purpose.",
    keyPoints: [
      "Hiring Records: Applications, offer letters, I-9 forms, and background check results document the selection process.",
      "Performance Records: Annual reviews, goal-setting documents, and performance improvement plans create a documented performance history.",
      "Compensation Records: Salary history, bonus awards, and equity grants track the evolution of total compensation.",
      "Training Records: Certifications, course completions, and skills assessments document employee development.",
      "Disciplinary Records: Written warnings, corrective action plans, and termination documentation protect the company in disputes."
    ],
    roleplayTips: [
      "\"Having complete, accurate performance records dating back three years is what allows us to defend a termination decision in litigation—documentation is our protection.\"",
      "\"We maintain I-9 employment eligibility verification records separately from the main personnel file as required by federal regulations.\"",
      "\"Compensation record accuracy is critical for equal pay compliance—any unexplained pay disparity between similarly situated employees creates legal exposure.\""
    ]
  },

  "HR009": {
    id: "HR009",
    code: "HR:009",
    name: "Administer and monitor policies/procedures",
    definition: "HR policy administration involves developing, communicating, consistently applying, and updating workplace policies that govern employee conduct, safety, compensation, and benefits.",
    keyPoints: [
      "Policy Development: Effective policies are clear, legally compliant, business-justified, and developed with stakeholder input.",
      "Communication: Policies must be effectively communicated through handbooks, training, and visible posting where required.",
      "Consistent Application: Inconsistent policy enforcement creates discrimination claims and undermines organizational trust.",
      "Monitoring: Regular audits ensure policies are being followed consistently across departments and locations.",
      "Updating: Policies must be reviewed when laws change, issues arise, or business practices evolve to remain relevant and compliant."
    ],
    roleplayTips: [
      "\"Inconsistent enforcement of our attendance policy across departments is our biggest legal risk right now—I'm conducting a systematic audit before we address any individual cases.\"",
      "\"Every new employee acknowledges receipt of our policy handbook with a signature, which creates a documented record that they were informed of the rules.\"",
      "\"When we updated our remote work policy, we communicated it through three channels—email, all-hands meeting, and manager briefings—to ensure uniform understanding.\""
    ]
  },

  "HR010": {
    id: "HR010",
    code: "HR:010",
    name: "Explain the nature of employee discipline",
    definition: "Employee discipline is the corrective process used to address performance or conduct deficiencies, typically following a progressive sequence designed to document issues and give employees the opportunity to improve.",
    keyPoints: [
      "Progressive Discipline: A sequence from verbal warning to written warning to final warning to termination provides due process.",
      "Documentation: Every disciplinary action must be documented with specific facts, dates, and the employee's response.",
      "Consistency: Applying discipline consistently across similarly situated employees prevents discrimination claims.",
      "Performance Improvement Plans (PIPs): Formal plans set specific, measurable improvement targets with defined timelines.",
      "At-Will Exceptions: Even at-will employees should receive documented progressive discipline to reduce legal risk."
    ],
    roleplayTips: [
      "\"A performance improvement plan isn't just HR paperwork—it's a documented commitment to give the employee a fair opportunity to succeed with clear expectations and support.\"",
      "\"Every disciplinary conversation is documented with three elements: the specific behavior observed, the policy it violates, and the required change with a clear timeline.\"",
      "\"Terminating without documentation, even an at-will employee, creates wrongful termination exposure; our progressive discipline process is the protection that makes terminations defensible.\""
    ]
  },

  "HR011": {
    id: "HR011",
    code: "HR:011",
    name: "Conduct performance reviews",
    definition: "Performance reviews are structured evaluations of an employee's contributions against defined goals and competencies, used to provide feedback, guide development, inform compensation decisions, and drive accountability.",
    keyPoints: [
      "Goal Alignment: Reviews should evaluate performance against pre-established, mutually agreed-upon SMART goals.",
      "Balanced Feedback: Effective reviews address both strengths to build on and specific development areas to address.",
      "Frequency: Annual reviews alone are insufficient; quarterly or monthly check-ins provide timely course correction.",
      "Rating Calibration: Calibration sessions among managers ensure rating consistency across teams and departments.",
      "Development Planning: Reviews should conclude with agreed development actions and goals for the next period."
    ],
    roleplayTips: [
      "\"I separate the compensation conversation from the development conversation by holding them in different meetings—mixing them means employees stop hearing the feedback the moment salary is mentioned.\"",
      "\"I document specific behavioral examples for every rating—'meets expectations' without evidence is useless for development and legally problematic in a dispute.\"",
      "\"Our 360-degree feedback process gives employees input from peers and direct reports in addition to manager assessment, which creates a far richer picture of actual impact.\""
    ]
  },

  "HR012": {
    id: "HR012",
    code: "HR:012",
    name: "Select and place employees",
    definition: "Employee selection involves using validated methods to identify and hire candidates whose skills, values, and capabilities best fit the role requirements and organizational culture.",
    keyPoints: [
      "Job Analysis: Defining the specific competencies, skills, and behaviors required for success is the foundation of valid selection.",
      "Structured Interviews: Standardized questions with scored rubrics improve predictive validity and reduce interviewer bias.",
      "Assessment Tools: Cognitive ability tests, work samples, and personality assessments provide additional predictive validity.",
      "Reference Checks: Verifying employment history and performance through prior managers validates candidate self-reporting.",
      "Placement: Matching selected candidates to the specific role, team, and manager most likely to enable their success."
    ],
    roleplayTips: [
      "\"We use competency-based behavioral interviews with a scoring rubric because research shows they predict job performance three times better than unstructured interviews.\"",
      "\"A work sample test for this technical role reveals actual capability in a way that no interview question can—we've reduced 90-day failures by 35% since implementing them.\"",
      "\"Reference checks aren't a checkbox; I ask specific behavioral questions about past performance, and what people don't say is often as informative as what they do.\""
    ]
  },

  "HR013": {
    id: "HR013",
    code: "HR:013",
    name: "Describe recruitment methods",
    definition: "Recruitment methods are the channels and strategies organizations use to attract and identify qualified candidates for open positions, ranging from passive sourcing to active campus and employee referral programs.",
    keyPoints: [
      "Job Postings: Online boards (LinkedIn, Indeed) reach broad audiences but may generate high volume of unqualified applicants.",
      "Employee Referrals: Referred candidates typically have higher performance, faster integration, and better retention rates.",
      "Campus Recruiting: Building relationships with universities creates a pipeline of entry-level and intern talent.",
      "Executive Search: Retained and contingency search firms specialize in sourcing hard-to-find senior talent.",
      "Employer Brand: A strong reputation as an employer of choice reduces cost-per-hire by attracting inbound applications."
    ],
    roleplayTips: [
      "\"Our employee referral program generates 35% of hires at 40% lower cost-per-hire and 20% lower first-year turnover than other channels—it's our highest-ROI recruiting investment.\"",
      "\"For this senior technical role, a retained search firm with vertical market expertise will reach candidates who will never see a job posting.\"",
      "\"Employer brand investment—Glassdoor reviews, LinkedIn content, candidate experience—reduces cost-per-hire because we're attracting inbound interest rather than only competing for active job seekers.\""
    ]
  },

  "HR014": {
    id: "HR014",
    code: "HR:014",
    name: "Discuss the nature of labor relations",
    definition: "Labor relations encompasses the legal framework and practical relationship between employers and employees or their union representatives, governing collective bargaining, grievance processes, and workplace rights.",
    keyPoints: [
      "NLRA: The National Labor Relations Act protects employees' rights to organize, bargain collectively, and engage in concerted activity.",
      "Collective Bargaining: Unions and management negotiate contracts covering wages, hours, benefits, and working conditions.",
      "Grievance Process: A formal procedure for employees to raise and resolve disputes about contract interpretation or working conditions.",
      "Unfair Labor Practices: Both employers and unions can commit ULPs, including interfering with organizing or refusing to bargain in good faith.",
      "Union vs. Non-Union: Management practices in non-union settings should address employee concerns proactively to maintain direct relationships."
    ],
    roleplayTips: [
      "\"The collective bargaining agreement governs this situation explicitly—any deviation from the contractual process, even well-intentioned, creates grievance exposure.\"",
      "\"In non-union environments, employees who feel their concerns aren't heard are more likely to organize—proactive communication and fair treatment are the best union avoidance strategy.\"",
      "\"Before responding to the organizing campaign, I want our employment counsel involved immediately—there are very specific rules about what we can and cannot say during an organizing drive.\""
    ]
  },

  // ── MK: Marketing ─────────────────────────────────────────────────────────

  "MK001": {
    id: "MK001",
    code: "MK:001",
    name: "Explain marketing and its importance in a global economy",
    definition: "Marketing is the set of activities that create, communicate, deliver, and exchange offerings that have value for customers, clients, partners, and society, serving as the bridge between an organization's capabilities and the market's needs.",
    keyPoints: [
      "Value Creation: Marketing identifies what customers value and aligns product development to deliver it profitably.",
      "Global Reach: Digital platforms and global supply chains allow even small businesses to access international markets.",
      "Economic Role: Marketing drives consumer demand, which fuels production, employment, and economic growth.",
      "Competitive Differentiation: In commoditized markets, superior marketing is often the primary source of competitive advantage.",
      "Two-Way Communication: Modern marketing is dialogue, not monologue—customer feedback shapes product and message."
    ],
    roleplayTips: [
      "\"Marketing isn't the department that makes the pretty brochures—it's the discipline that ensures our product, price, placement, and promotion are aligned with what customers actually value.\"",
      "\"In a global economy, our brand can be discovered anywhere; a consistent digital marketing strategy ensures our international presence is as strong as our domestic reputation.\"",
      "\"Marketing's ultimate metric isn't impressions or clicks—it's whether customers choose us over alternatives because we've communicated a compelling reason why.\""
    ]
  },

  "MK002": {
    id: "MK002",
    code: "MK:002",
    name: "Describe marketing functions and related activities",
    definition: "The seven marketing functions—distribution, financing, marketing-information management, pricing, product/service management, promotion, and selling—represent the core activities businesses perform to move products from producers to consumers.",
    keyPoints: [
      "Distribution: Determining how products flow from producers to consumers through channel selection and logistics.",
      "Financing: Providing credit or financing options that enable customers to purchase goods or services.",
      "Marketing-Information Management: Collecting, analyzing, and distributing market data to guide decisions.",
      "Pricing: Setting prices that balance customer value perception, competitive positioning, and profitability.",
      "Promotion: Communicating product value to target audiences through advertising, PR, sales promotion, and digital marketing."
    ],
    roleplayTips: [
      "\"All seven marketing functions are interconnected—a pricing decision affects distribution channel economics, promotional messaging, and product positioning simultaneously.\"",
      "\"Our marketing-information management function is essentially our early warning system—it tells us what customers want before they tell us they're leaving for a competitor.\"",
      "\"Distribution is often the underestimated marketing function; being in the right place at the right time is as important as having the right product and message.\""
    ]
  },

  "MK003": {
    id: "MK003",
    code: "MK:003",
    name: "Explain the concept of marketing strategies",
    definition: "A marketing strategy is the long-term plan for achieving marketing objectives by identifying target markets, defining competitive positioning, and allocating marketing resources to deliver superior customer value.",
    keyPoints: [
      "STP Process: Effective strategy begins with Segmentation, then Targeting, then Positioning.",
      "Competitive Positioning: A positioning statement defines how the brand is uniquely different and better for the target customer.",
      "Value Proposition: The clear articulation of why a customer should choose this offering over all alternatives.",
      "Resource Allocation: Strategy determines which customer segments and channels receive marketing investment.",
      "Sustainability: Strong strategies are built on capabilities that competitors cannot easily or quickly replicate."
    ],
    roleplayTips: [
      "\"Our strategy is to be the premium option for time-pressed professionals—not trying to win every customer, but completely owning the segment that values quality over price.\"",
      "\"A positioning statement that works for everyone positions you for no one; the most powerful brands have a precise definition of who they serve and why.\"",
      "\"Our competitive advantage is our customer data moat—it enables personalization at scale that new entrants cannot replicate without years of customer interaction history.\""
    ]
  },

  "MK004": {
    id: "MK004",
    code: "MK:004",
    name: "Explain the role of promotion as a marketing function",
    definition: "Promotion encompasses all marketing communications used to inform, persuade, and remind target audiences about a product or brand, using a coordinated mix of advertising, sales promotion, PR, and direct marketing.",
    keyPoints: [
      "Promotional Mix: Advertising, personal selling, sales promotion, public relations, and direct marketing are the core tools.",
      "AIDA Model: Promotional communications should move audiences from Awareness to Interest to Desire to Action.",
      "Integrated Marketing Communications: All promotional channels must deliver a consistent brand message.",
      "Push vs. Pull: Push strategies target channel intermediaries; pull strategies create consumer demand that pulls product through channels.",
      "Digital Shift: Search, social, email, and content marketing have shifted promotional investment toward measurable digital channels."
    ],
    roleplayTips: [
      "\"Integrated marketing communications means a customer hears the same core message whether they see our TV ad, visit our website, or talk to a sales rep—consistency builds brand trust.\"",
      "\"Our promotional spend is 60% digital because digital channels give us precise attribution, audience targeting, and real-time optimization that traditional media cannot match.\"",
      "\"Sales promotion drives short-term volume but can erode brand equity if overused—we limit promotional discounting to three events per year to protect our premium positioning.\""
    ]
  },

  "MK005": {
    id: "MK005",
    code: "MK:005",
    name: "Describe the concept of market and market identification",
    definition: "A market consists of all actual and potential buyers who have the need, ability, and willingness to purchase a particular product or service, and market identification involves precisely defining who those buyers are.",
    keyPoints: [
      "Market Definition: A market is bounded by geography, customer type, need served, and price range.",
      "Total Addressable Market: The maximum revenue opportunity if a company achieved 100% market share.",
      "Target Market: The specific subset of the addressable market a company chooses to serve with its current strategy.",
      "Market Potential: An estimate of the maximum demand that could be generated under ideal conditions.",
      "Market Share: A company's percentage of total market sales—a key competitive performance indicator."
    ],
    roleplayTips: [
      "\"Our total addressable market is $4.8 billion, but our serviceable addressable market is $620 million based on geographic coverage and product fit—that's the realistic ceiling we're planning against.\"",
      "\"Market identification isn't just demographics—we define our target market by the specific job they're trying to do and the constraints they're working within.\"",
      "\"Gaining 1% market share in a $2 billion market is $20M of incremental revenue—that context helps calibrate whether our current marketing investment is proportionate to the opportunity.\""
    ]
  },

  "MK006": {
    id: "MK006",
    code: "MK:006",
    name: "Explain the concept of market segmentation",
    definition: "Market segmentation divides a heterogeneous market into distinct subgroups of customers who share similar characteristics, needs, or behaviors, enabling more precise targeting and effective resource allocation.",
    keyPoints: [
      "Demographic: Segmenting by age, income, gender, education, or occupation.",
      "Psychographic: Segmenting by values, lifestyle, personality, and motivations.",
      "Behavioral: Segmenting by purchase frequency, brand loyalty, usage rate, or benefits sought.",
      "Geographic: Segmenting by country, region, climate, or urban/rural density.",
      "Effective Segmentation: Good segments are measurable, substantial, accessible, differentiable, and actionable."
    ],
    roleplayTips: [
      "\"We segment behaviorally by purchase frequency and lifetime value, because treating your highest-value customers the same as occasional buyers is the fastest way to lose them.\"",
      "\"Psychographic segmentation reveals that two customers with identical demographics can have completely different motivations—demographic segmentation alone misses that.\"",
      "\"Our highest-growth segment is 'reluctant adopters'—buyers who want our category but are held back by a specific friction; designing directly for them unlocked 30% of untapped demand.\""
    ]
  },

  "MK007": {
    id: "MK007",
    code: "MK:007",
    name: "Explain the nature of marketing plans",
    definition: "A marketing plan is a strategic document that outlines marketing objectives, target markets, competitive analysis, marketing mix strategies, budget allocations, and measurement frameworks for a defined time period.",
    keyPoints: [
      "Situational Analysis: The plan begins with an assessment of internal capabilities and external market conditions (SWOT, PESTEL).",
      "Objectives: SMART marketing objectives define measurable outcomes the plan is designed to achieve.",
      "Strategy: Target market selection, positioning, and value proposition guide all tactical decisions.",
      "Tactics and Budget: Specific marketing activities and resource allocations translate strategy into execution.",
      "Measurement: KPIs, tracking mechanisms, and review cadences ensure the plan is evaluated against its objectives."
    ],
    roleplayTips: [
      "\"Our marketing plan is a living document with quarterly reviews built in—markets change too fast for an annual plan that isn't regularly pressure-tested against current conditions.\"",
      "\"Every tactic in this plan ties directly to one of three marketing objectives; if a proposed activity doesn't advance an objective, it doesn't make the cut.\"",
      "\"The situational analysis section is where most plans are weakest—teams skip the hard work of honestly assessing competitive position and end up with strategies that look good on paper but ignore market reality.\""
    ]
  },

  "MK008": {
    id: "MK008",
    code: "MK:008",
    name: "Describe the elements of the marketing mix",
    definition: "The marketing mix, traditionally defined as the 4 Ps—Product, Price, Place, and Promotion—is the set of controllable tactical tools a company uses to produce the desired response in its target market.",
    keyPoints: [
      "Product: The bundle of benefits offered, including features, quality, branding, packaging, and lifecycle stage.",
      "Price: The amount charged, including pricing strategy, discount structures, and payment terms.",
      "Place: Distribution channels and logistics that ensure the product is available where and when customers want it.",
      "Promotion: The communications mix used to create awareness, interest, and purchase intent.",
      "Extended Mix: Service businesses often add People, Process, and Physical Evidence as additional Ps."
    ],
    roleplayTips: [
      "\"Our pricing dropped to match the competitor, but we didn't adjust our promotion strategy—now we have discount pricing with premium messaging, and customers are confused.\"",
      "\"The marketing mix works as a system—a superior product with poor distribution still fails; we need all four Ps aligned with our customer's buying journey.\"",
      "\"Moving distribution from retail to direct-to-consumer changes everything—margin profile, customer relationship, promotional strategy, and pricing all require reconsideration when Place changes.\""
    ]
  },

  "MK009": {
    id: "MK009",
    code: "MK:009",
    name: "Explain the concept of brand management",
    definition: "Brand management is the process of creating, maintaining, and evolving a brand's identity, positioning, and equity to ensure it resonates with target audiences and commands preference over competitors.",
    keyPoints: [
      "Brand Identity: The visual and verbal elements—name, logo, tagline, color palette—that make a brand recognizable.",
      "Brand Positioning: The distinctive place the brand occupies in customers' minds relative to competitors.",
      "Brand Equity: The value premium customers assign to a branded product over an unbranded equivalent.",
      "Brand Consistency: Delivering a uniform experience across all touchpoints builds the trust that equity requires.",
      "Brand Extension: Leveraging an existing brand name into new categories must be managed carefully to protect core equity."
    ],
    roleplayTips: [
      "\"Our brand commands a 22% price premium over private-label alternatives, and that premium is entirely attributable to the trust and quality perception we've built over 15 years.\"",
      "\"Brand consistency isn't just visual—it's ensuring the tone of our customer service email matches the premium experience our advertising promises.\"",
      "\"Brand equity is a balance sheet asset that doesn't show up in GAAP accounting but absolutely shows up in acquisition premiums and customer willingness to pay.\""
    ]
  },

  "MK010": {
    id: "MK010",
    code: "MK:010",
    name: "Describe the use of technology in marketing",
    definition: "Marketing technology encompasses the digital tools and platforms used to automate, analyze, personalize, and scale marketing activities, including CRM, marketing automation, analytics, and social media management.",
    keyPoints: [
      "Marketing Automation: Software that automates repetitive tasks like email campaigns, lead scoring, and social posting.",
      "CRM Integration: Connecting marketing data with CRM systems enables personalized, lifecycle-based customer communications.",
      "Analytics Platforms: Tools like Google Analytics and attribution software measure campaign effectiveness and inform optimization.",
      "AI and Personalization: Machine learning enables real-time content and offer personalization at scale.",
      "Martech Stack: The combination of tools must be integrated to share data and avoid creating information silos."
    ],
    roleplayTips: [
      "\"Our marketing automation platform nurtures 4,000 leads simultaneously with personalized content sequences—no sales team could do that at scale without technology.\"",
      "\"Multi-touch attribution modeling shows that SEO content initiates 45% of deals that ultimately close through a sales conversation—proving the ROI of content investment that previously looked invisible.\"",
      "\"AI-powered email subject line optimization increased our open rates by 18% with no additional creative investment—that's technology creating leverage from existing effort.\""
    ]
  },

  "MK011": {
    id: "MK011",
    code: "MK:011",
    name: "Explain the concept of marketing research",
    definition: "Marketing research is the systematic process of designing, collecting, analyzing, and interpreting information to help marketing decision-makers understand market opportunities, evaluate strategies, and measure performance.",
    keyPoints: [
      "Problem Definition: Clearly stating the research question prevents wasted effort on irrelevant data collection.",
      "Research Design: Determines whether exploratory, descriptive, or causal research methods best address the question.",
      "Data Collection: Primary research (surveys, interviews) or secondary research (existing data) provides the input.",
      "Analysis: Statistical analysis, coding, or thematic synthesis converts raw data into actionable insights.",
      "Decision Application: Research value is only realized when findings actually change decisions or validate strategies."
    ],
    roleplayTips: [
      "\"We don't run focus groups to validate decisions already made; we use them to generate hypotheses we then test with larger, statistically valid surveys.\"",
      "\"Our customer satisfaction research showed that 'reliability' was the top purchase driver—we repositioned our messaging around that insight and saw conversion rates increase 28%.\"",
      "\"The difference between good and great marketing research isn't the data collected; it's asking a precise enough question that the answer is genuinely actionable.\""
    ]
  },

  "MK012": {
    id: "MK012",
    code: "MK:012",
    name: "Identify and describe types of marketing research",
    definition: "Marketing research types range from exploratory methods that generate hypotheses to descriptive and causal methods that quantify relationships and test whether specific actions produce specific outcomes.",
    keyPoints: [
      "Exploratory Research: Qualitative methods (focus groups, in-depth interviews) used to explore unknown territory and generate hypotheses.",
      "Descriptive Research: Surveys and observational research that quantify characteristics of a market or customer base.",
      "Causal Research: Controlled experiments and A/B tests that establish cause-and-effect relationships.",
      "Quantitative vs. Qualitative: Numbers answer 'how many'; stories answer 'why'—both are needed for complete insight.",
      "Secondary Research: Analysis of existing data (census, industry reports, CRM) that is faster and cheaper but less specific."
    ],
    roleplayTips: [
      "\"We started with focus groups to understand the emotional drivers behind purchase hesitation, then built a quantitative survey to measure how prevalent those drivers are across the market.\"",
      "\"A/B testing is our gold standard for causal claims—if we want to say 'this message drives conversion,' we need a controlled experiment, not a correlation.\"",
      "\"Secondary research gets us 70% of the answer at 10% of the cost—we validate with primary research only on the questions where existing data is insufficient or outdated.\""
    ]
  },

  "MK013": {
    id: "MK013",
    code: "MK:013",
    name: "Explain the nature of marketing mix decisions",
    definition: "Marketing mix decisions determine how a company configures its product, price, distribution, and promotion to deliver a compelling value proposition to its target market.",
    keyPoints: [
      "Interdependence: Changes to one mix element typically require adjustments to others to maintain coherence.",
      "Customer Centricity: Mix decisions should be guided by target customer insights, not internal convenience.",
      "Competitive Context: Mix configuration must be evaluated against competitor offerings on each dimension.",
      "Lifecycle Considerations: The optimal mix evolves as products move through introduction, growth, maturity, and decline.",
      "Trade-offs: Budget constraints require prioritization—investing more in product quality may mean less for promotion."
    ],
    roleplayTips: [
      "\"When we increased quality to justify a premium price, we also had to shift distribution to specialty retailers—you can't charge premium prices in a discount channel.\"",
      "\"Our product is in the maturity phase; the right mix decision now is defending margin through targeted promotions and loyalty, not investing in broad brand awareness.\"",
      "\"Every marketing mix decision is a hypothesis about what customers value; our job is to test those hypotheses efficiently and reallocate based on what the data tells us.\""
    ]
  },

  "MK014": {
    id: "MK014",
    code: "MK:014",
    name: "Describe the nature of product/service management",
    definition: "Product/service management encompasses the strategic decisions about developing, positioning, pricing, branding, and managing offerings throughout their lifecycle to maximize customer value and business profitability.",
    keyPoints: [
      "Product Lifecycle: Products move through introduction, growth, maturity, and decline stages, each requiring different strategies.",
      "Product Mix: The breadth, depth, and consistency of an organization's total product portfolio.",
      "New Product Development: A stage-gate process from ideation through commercialization reduces risk and improves success rates.",
      "Product Positioning: Defining the product's unique place in customers' minds relative to competitive alternatives.",
      "Portfolio Pruning: Eliminating underperforming products from the portfolio redirects resources toward higher-value offerings."
    ],
    roleplayTips: [
      "\"Our product is entering the maturity phase—growth is slowing, margins are compressing, and the right response is differentiation or cost reduction, not more promotional spending.\"",
      "\"New product development without formal stage-gates is how companies waste millions on products nobody wants; we validate customer demand before any significant engineering investment.\"",
      "\"Twelve percent of our SKUs generate 78% of our revenue—the product rationalization opportunity here is significant and would reduce operational complexity substantially.\""
    ]
  },

  "MK015": {
    id: "MK015",
    code: "MK:015",
    name: "Explain the nature of channel management",
    definition: "Channel management involves selecting, motivating, and evaluating the intermediaries—wholesalers, retailers, distributors, and agents—through which products flow from producers to end customers.",
    keyPoints: [
      "Channel Structure: Choices between direct, indirect, or hybrid channels affect cost, control, and customer experience.",
      "Channel Conflict: Competing channels (direct vs. retailer) must be managed to prevent destructive price and customer conflicts.",
      "Channel Power: Large retailers like Walmart or Amazon hold significant negotiating power over suppliers.",
      "Omnichannel Integration: Customers expect a seamless experience across in-store, online, and mobile channels.",
      "Channel Performance: Metrics like sell-through rate, inventory turns, and channel profitability evaluate intermediary effectiveness."
    ],
    roleplayTips: [
      "\"Adding a direct-to-consumer channel is creating channel conflict with our retail partners; we need a pricing structure that protects retail margins while enabling our DTC premium.\"",
      "\"Our Amazon store generates 22% of revenue but only 8% of margin after fees—we need to rebalance channel mix toward higher-margin direct channels without alienating marketplace customers.\"",
      "\"Choosing the right channel isn't just about reaching customers; it's about matching the buying experience to the complexity of the purchase decision.\""
    ]
  },

  "MK016": {
    id: "MK016",
    code: "MK:016",
    name: "Explain the concept of pricing strategies",
    definition: "Pricing strategy is the approach a company uses to set prices that balance customer value perception, competitive positioning, cost recovery, and profit objectives in its target market.",
    keyPoints: [
      "Cost-Plus Pricing: Adding a markup to cost—simple but ignores customer value and competitive dynamics.",
      "Value-Based Pricing: Setting price based on customer-perceived value rather than cost—typically yields higher margins.",
      "Competitive Pricing: Aligning prices with market rates—appropriate when differentiation is limited.",
      "Penetration Pricing: Low initial prices to build market share, with the intent to raise prices as loyalty develops.",
      "Price Elasticity: Understanding how sensitive demand is to price changes informs how aggressively prices can be adjusted."
    ],
    roleplayTips: [
      "\"We shifted from cost-plus to value-based pricing and increased our average selling price by 31% without a meaningful volume decline—we were dramatically underpricing relative to customer value.\"",
      "\"Penetration pricing works when you have a clear path to profitability at scale; if the economics don't improve with volume, you've just built a money-losing loyal customer base.\"",
      "\"Our A/B test at $49 versus $79 showed only a 7% demand difference—that's highly inelastic demand, which means we should be at $79 immediately.\""
    ]
  },

  // ── NF: Financial Services ────────────────────────────────────────────────

  "NF001": {
    id: "NF001",
    code: "NF:001",
    name: "Explain the nature of financial services",
    definition: "Financial services encompass the broad range of activities performed by banks, investment firms, insurance companies, and other institutions that manage, invest, transfer, and protect money and financial assets.",
    keyPoints: [
      "Scope: Financial services include banking, insurance, investment management, lending, payment processing, and financial planning.",
      "Economic Role: A healthy financial system allocates capital efficiently from savers to productive uses in the economy.",
      "Regulation: Financial services are heavily regulated to protect consumers, ensure stability, and prevent systemic risk.",
      "Consumer vs. Commercial: Services differ significantly between individual consumers and business clients in scope and complexity.",
      "Digital Transformation: Fintech companies are disrupting traditional financial services with lower-cost, technology-driven alternatives."
    ],
    roleplayTips: [
      "\"Financial services create the infrastructure that makes all other commerce possible—payment systems, credit markets, and risk transfer are foundational to a functioning economy.\"",
      "\"Fintech disruptors are succeeding by identifying the friction points in traditional financial services and removing them through technology and better user experience.\"",
      "\"Our value proposition in financial services is trust and expertise—in a regulated industry where products are often similar, relationship quality and advice quality are the true differentiators.\""
    ]
  },

  "NF002": {
    id: "NF002",
    code: "NF:002",
    name: "Identify financial services providers",
    definition: "Financial services providers are institutions and organizations that deliver financial products and advice, including commercial banks, credit unions, investment banks, insurance companies, and broker-dealers.",
    keyPoints: [
      "Commercial Banks: Accept deposits, make loans, and provide payment services to individuals and businesses.",
      "Credit Unions: Member-owned cooperatives that offer banking services, typically with lower fees and better rates.",
      "Investment Banks: Underwrite securities, facilitate M&A, and provide capital markets services to corporations and governments.",
      "Insurance Companies: Assume and pool risk in exchange for premiums, providing financial protection against loss.",
      "Broker-Dealers: Facilitate securities transactions, providing access to capital markets for investors."
    ],
    roleplayTips: [
      "\"For this transaction we need an investment bank, not a commercial bank—the complexity of the capital structure requires M&A advisory and underwriting capability that a regional bank can't provide.\"",
      "\"A credit union often offers meaningfully better deposit rates and loan terms than commercial banks because they return profits to members rather than shareholders.\"",
      "\"Understanding which type of financial institution best serves your specific need is the first decision—using the wrong provider often means paying more for less appropriate service.\""
    ]
  },

  "NF003": {
    id: "NF003",
    code: "NF:003",
    name: "Explain types of financial institutions",
    definition: "Financial institutions are categorized by their primary function—depository institutions, insurance companies, investment intermediaries, and finance companies—each operating under distinct regulatory frameworks and serving different financial needs.",
    keyPoints: [
      "Depository Institutions: Commercial banks, savings banks, and credit unions accept deposits and create loans.",
      "Insurance Companies: Life, health, and property-casualty insurers pool risk and invest premiums to fund claims.",
      "Investment Intermediaries: Mutual funds, ETFs, hedge funds, and pension funds aggregate and invest pooled capital.",
      "Finance Companies: Consumer and commercial finance companies provide loans without accepting deposits.",
      "Regulatory Bodies: The Fed, FDIC, OCC, SEC, and CFPB oversee different financial institution types to ensure stability and consumer protection."
    ],
    roleplayTips: [
      "\"A money market mutual fund and a money market bank account appear similar but are regulated differently and have meaningfully different risk profiles—that distinction matters for institutional cash management.\"",
      "\"The FDIC insures bank deposits up to $250,000 per depositor per institution—understanding that limit is critical for clients with significant cash holdings.\"",
      "\"Hedge funds and mutual funds both pool investor capital, but they operate under entirely different regulatory regimes with different investor eligibility requirements and disclosure obligations.\""
    ]
  },

  "NF004": {
    id: "NF004",
    code: "NF:004",
    name: "Describe the nature of bank products/services",
    definition: "Bank products and services include deposit accounts, credit products, payment services, and treasury management solutions that meet the financial needs of individuals, businesses, and government entities.",
    keyPoints: [
      "Deposit Accounts: Checking, savings, money market, and CDs provide safe storage for funds with varying liquidity and yield.",
      "Credit Products: Personal loans, business lines of credit, mortgages, and credit cards extend purchasing power.",
      "Payment Services: Wire transfers, ACH, merchant processing, and digital wallets facilitate money movement.",
      "Treasury Management: Cash pooling, sweep accounts, and payroll services help businesses manage working capital efficiently.",
      "Advisory Services: Wealth management, business banking advisors, and commercial lending provide expertise alongside products."
    ],
    roleplayTips: [
      "\"A business line of credit gives you flexible access to capital for working capital needs without the fixed repayment schedule of a term loan—it's the right tool for managing seasonal cash flow.\"",
      "\"Our treasury management platform automates your payables and receivables processing, reducing manual handling costs and improving cash visibility across all of your accounts.\"",
      "\"A certificate of deposit locks your rate for a defined term—in a rising rate environment, shorter terms give you flexibility to reinvest at higher rates as they become available.\""
    ]
  },

  "NF005": {
    id: "NF005",
    code: "NF:005",
    name: "Explain the nature of financial planning",
    definition: "Financial planning is the comprehensive process of assessing current financial status, defining goals, and developing strategies for income, savings, investment, insurance, and estate planning to achieve financial security.",
    keyPoints: [
      "Goal Setting: Financial plans begin with defining short, medium, and long-term financial objectives.",
      "Net Worth Analysis: Calculating assets minus liabilities establishes the current financial baseline.",
      "Cash Flow Management: Budgeting and debt management ensure income is allocated toward priorities.",
      "Risk Management: Insurance coverage protects against catastrophic losses that could derail financial plans.",
      "Investment Planning: Asset allocation, diversification, and time horizon guide investment selection toward long-term goals."
    ],
    roleplayTips: [
      "\"Financial planning isn't just for the wealthy—it's for anyone who has goals that require money to achieve, which is essentially everyone.\"",
      "\"We begin with your goals, not your portfolio; the investment strategy follows the plan, not the other way around.\"",
      "\"The most expensive financial planning mistake is starting too late—compounding requires time, and every year of delay has an exponential cost to your ultimate wealth accumulation.\""
    ]
  },

  // ── OP: Operations ────────────────────────────────────────────────────────

  "OP001": {
    id: "OP001",
    code: "OP:001",
    name: "Explain the nature of operations management",
    definition: "Operations management is the administration of business practices to create the highest level of efficiency possible within an organization by transforming inputs into goods and services that meet customer requirements.",
    keyPoints: [
      "Transformation Process: Operations converts labor, materials, energy, and information into valuable outputs.",
      "Efficiency vs. Effectiveness: Efficiency means doing things right; effectiveness means doing the right things—operations must optimize both.",
      "Capacity Management: Aligning production capacity with demand prevents both costly excess and damaging shortages.",
      "Process Design: The layout and sequencing of activities determines throughput, quality, and cost.",
      "Continuous Improvement: Ongoing measurement and refinement of operational processes drives competitive advantage."
    ],
    roleplayTips: [
      "\"Operations management is where strategy meets execution—a brilliant strategy with poor operational execution produces consistently disappointing results.\"",
      "\"Our throughput analysis showed a single bottleneck step was limiting the entire production line; relieving it increased total capacity by 23% with no additional capex.\"",
      "\"We track OEE—Overall Equipment Effectiveness—because it combines availability, performance, and quality into a single metric that exposes where operational value is leaking.\""
    ]
  },

  "OP002": {
    id: "OP002",
    code: "OP:002",
    name: "Describe the role of quality control in operations",
    definition: "Quality control is the operational system of testing, measuring, and inspecting products and processes to ensure they meet specified standards and customer expectations consistently.",
    keyPoints: [
      "Prevention vs. Detection: Modern quality management focuses on preventing defects through process design rather than detecting them post-production.",
      "Statistical Process Control: Using control charts to monitor process variation in real time identifies drift before defects occur.",
      "Acceptance Sampling: Statistical sampling of incoming materials or outgoing products tests quality without 100% inspection.",
      "Cost of Quality: The cost of prevention plus appraisal is always lower than the cost of internal and external failure.",
      "Zero Defects: A quality philosophy that sets the target as eliminating defects rather than accepting a tolerance level."
    ],
    roleplayTips: [
      "\"Our defect rate dropped from 1.8% to 0.3% after implementing statistical process control, and the cost of quality prevention program paid for itself in two months through reduced rework.\"",
      "\"A defect that reaches the customer costs 10 to 100 times more to address than one caught in production—investing in upstream quality control is always the right economic decision.\"",
      "\"Six Sigma targets 3.4 defects per million opportunities—it's not about zero defects philosophically, it's about having a rigorous data-driven methodology to get there systematically.\""
    ]
  },

  "OP003": {
    id: "OP003",
    code: "OP:003",
    name: "Identify the components of operations management",
    definition: "Operations management components include process design, capacity planning, inventory management, quality control, supply chain management, and performance measurement, all of which must be coordinated to deliver customer value efficiently.",
    keyPoints: [
      "Process Design: Determining the optimal sequence, technology, and layout for producing goods or services.",
      "Capacity Planning: Matching production capability to forecasted demand to avoid shortages or excess.",
      "Inventory Management: Balancing carrying costs against service levels through reorder points and safety stock.",
      "Supply Chain Management: Coordinating suppliers, production, and distribution to optimize the flow of goods.",
      "Performance Metrics: KPIs like OEE, yield rate, throughput, and lead time measure operational effectiveness."
    ],
    roleplayTips: [
      "\"Each component of operations management is a lever; improving one while neglecting others creates new bottlenecks—you have to manage the system, not just individual parts.\"",
      "\"Our capacity planning model now uses rolling 13-week demand forecasts; we eliminated both stockouts and excess inventory by connecting planning to real demand signals rather than historical averages.\"",
      "\"Supply chain visibility—knowing where every input is at any time—is the precondition for effective inventory management; you can't optimize what you can't see.\""
    ]
  },

  "OP004": {
    id: "OP004",
    code: "OP:004",
    name: "Explain production/operations management activities",
    definition: "Production management activities encompass planning, scheduling, controlling, and improving the conversion of inputs into finished products or services in a way that meets cost, quality, and delivery objectives.",
    keyPoints: [
      "Production Planning: Determining what to produce, in what quantities, on what schedule, using which resources.",
      "Scheduling: Sequencing and timing production activities to meet delivery commitments while minimizing idle time.",
      "Material Requirements Planning (MRP): Calculating when and how much material to order based on production schedules.",
      "Lean Production: Eliminating waste in materials, time, and motion to reduce cost and increase throughput.",
      "Production Control: Monitoring actual output against plan and adjusting to address variances in real time."
    ],
    roleplayTips: [
      "\"Our MRP system calculates material needs based on the master production schedule, eliminating the guesswork that used to cause both shortages and excess inventory simultaneously.\"",
      "\"Lean production isn't about cutting people—it's about eliminating the eight types of waste so the same people can produce more value per hour of work.\"",
      "\"When our actual production fell 12% behind schedule last week, we identified a raw material delay in 24 hours and rescheduled downstream operations before the shortfall became a customer delivery failure.\""
    ]
  },

  "OP005": {
    id: "OP005",
    code: "OP:005",
    name: "Explain inventory management",
    definition: "Inventory management balances the cost of carrying stock against the risk of stockouts, using demand forecasting, reorder points, and safety stock to maintain the right quantity of goods at the right time.",
    keyPoints: [
      "Carrying Costs: Holding inventory incurs costs including warehousing, insurance, obsolescence, and tied-up capital.",
      "Ordering Costs: Each replenishment order incurs administrative and logistics costs that favor larger, less frequent orders.",
      "Economic Order Quantity (EOQ): Calculates the optimal order size that minimizes total carrying and ordering costs.",
      "Safety Stock: Buffer inventory maintained to absorb demand variability and protect against stockouts.",
      "Just-In-Time (JIT): A lean inventory philosophy of receiving goods only as needed, minimizing carrying costs but requiring supplier reliability."
    ],
    roleplayTips: [
      "\"Our inventory carrying cost is 25% of the value held per year—every dollar of excess stock costs us 25 cents annually, which makes inventory reduction a very high-ROI initiative.\"",
      "\"We moved to a demand-signal-driven reorder system and reduced safety stock by 40% without increasing stockouts—the key was improving forecast accuracy, not just cutting buffer.\"",
      "\"JIT works when your supplier is reliable; we found it failed us during the supply chain disruption, which is why we've reintroduced strategic buffer stock for critical components.\""
    ]
  },

  "OP006": {
    id: "OP006",
    code: "OP:006",
    name: "Explain supply chain management",
    definition: "Supply chain management coordinates the flow of materials, information, and financial resources from raw material suppliers through manufacturers, distributors, and retailers to the final customer.",
    keyPoints: [
      "Supply Chain Tiers: Modern supply chains have multiple tiers of suppliers; disruptions at tier-2 and tier-3 suppliers are often invisible until they cause shortages.",
      "Visibility: End-to-end supply chain visibility enables proactive disruption management and demand sensing.",
      "Sourcing Strategy: Decisions about single vs. dual sourcing, near-shoring vs. offshoring involve trade-offs between cost, risk, and flexibility.",
      "Logistics Coordination: Transportation, warehousing, and inventory placement decisions determine delivery speed and cost.",
      "Sustainability: Supply chain ESG risk—environmental impact, labor practices, governance—is increasingly a material business risk."
    ],
    roleplayTips: [
      "\"The COVID disruption revealed that 60% of our supply chain risk sat in tier-2 suppliers we had zero visibility into—we've since built a digital mapping of our full supplier network.\"",
      "\"Dual sourcing for critical components costs 3 to 5% more in normal conditions but prevents the 30% revenue hit we took during the last single-source disruption.\"",
      "\"Supply chain resilience and efficiency are often in tension—the most cost-efficient chain is typically the most brittle; the optimal point is where the insurance cost equals the expected disruption cost.\""
    ]
  },

  "OP007": {
    id: "OP007",
    code: "OP:007",
    name: "Describe the nature of logistics",
    definition: "Logistics is the planning, implementation, and control of the efficient movement and storage of goods, services, and information from origin to consumption to meet customer requirements.",
    keyPoints: [
      "Transportation Modes: Road, rail, air, sea, and pipeline each offer different cost, speed, and capacity trade-offs.",
      "Warehousing: Storage facilities balance the time gap between production and consumption while minimizing holding costs.",
      "Last-Mile Delivery: The final delivery step to the customer is often the most expensive and complex logistics element.",
      "Third-Party Logistics (3PL): Outsourcing logistics to specialists provides scale, technology, and geographic reach.",
      "Reverse Logistics: Managing product returns, recycling, and disposal has become a significant operational and sustainability challenge."
    ],
    roleplayTips: [
      "\"Last-mile delivery represents 53% of total shipping cost for e-commerce operations—optimizing the final mile has more leverage than any other logistics decision.\"",
      "\"We shifted from full truckload to less-than-truckload for our mid-size customers, which increased our logistics cost per unit but reduced their minimum order requirement and tripled the addressable customer base.\"",
      "\"Our 3PL partner provides fulfillment capability in 15 markets without the capital investment of building our own warehouse network—that flexibility is worth the margin I give up.\""
    ]
  },

  "OP008": {
    id: "OP008",
    code: "OP:008",
    name: "Explain the nature of project management",
    definition: "Project management is the application of knowledge, skills, tools, and techniques to project activities to meet defined project requirements within constraints of scope, time, cost, and quality.",
    keyPoints: [
      "Triple Constraint: Every project balances scope, schedule, and budget—changing one requires trade-offs in the others.",
      "Project Initiation: Defining objectives, stakeholders, success criteria, and preliminary resources before work begins.",
      "Planning: Work breakdown structures, Gantt charts, and resource plans translate project scope into actionable schedules.",
      "Risk Management: Identifying and planning for potential obstacles prevents surprises that derail timelines and budgets.",
      "Monitoring and Control: Earned value management and regular status reporting measure progress and enable corrective action."
    ],
    roleplayTips: [
      "\"Any project with undefined scope will exceed budget and miss deadline—our first deliverable is always a signed scope statement before we create a timeline or budget.\"",
      "\"We're at 40% of budget and 30% of timeline—earned value analysis shows we're burning faster than we're delivering, which means we need to have a scope or schedule conversation now.\"",
      "\"The three biggest project failure causes are unclear requirements, unrealistic timelines, and inadequate risk planning—our project charter addresses all three before kickoff.\""
    ]
  },

  "OP009": {
    id: "OP009",
    code: "OP:009",
    name: "Describe quality-management systems",
    definition: "Quality management systems are frameworks of policies, processes, documented procedures, and records that define how an organization ensures its products and services consistently meet customer and regulatory requirements.",
    keyPoints: [
      "ISO 9001: The internationally recognized quality management standard requiring documented processes, customer focus, and continuous improvement.",
      "Process Approach: A QMS manages activities as interconnected processes rather than isolated functions.",
      "Documentation: Documented procedures ensure consistency regardless of which individual performs a task.",
      "Internal Audits: Regular self-assessment identifies non-conformances before they become customer or regulatory issues.",
      "Management Review: Executive review of QMS performance ensures quality is treated as a strategic priority."
    ],
    roleplayTips: [
      "\"ISO 9001 certification isn't just a plaque on the wall—it demonstrates to enterprise clients that our processes are documented, audited, and continuously improved.\"",
      "\"A quality management system makes our processes independent of any individual—when a key employee leaves, the documented procedure ensures quality doesn't leave with them.\"",
      "\"Our internal audit program caught a process drift six months before it would have become a customer complaint; the QMS created the visibility to find and fix it proactively.\""
    ]
  },

  "OP010": {
    id: "OP010",
    code: "OP:010",
    name: "Explain the nature of total quality management",
    definition: "Total Quality Management (TQM) is an organization-wide management philosophy focused on continuous improvement, customer satisfaction, and employee involvement in quality processes at every level.",
    keyPoints: [
      "Customer Focus: TQM defines quality as meeting or exceeding customer expectations, not just internal specifications.",
      "Continuous Improvement (Kaizen): Small, incremental improvements accumulate into significant operational gains over time.",
      "Employee Involvement: TQM engages frontline workers as quality problem-solvers, not just quality control inspectors.",
      "Process Orientation: Quality is built into processes rather than inspected into finished products.",
      "Data-Driven Decisions: TQM relies on measurement, analysis, and statistical methods rather than intuition."
    ],
    roleplayTips: [
      "\"TQM means our warehouse associates have the authority and responsibility to stop the line when they see a quality problem—we don't wait for a quality manager to identify it.\"",
      "\"Continuous improvement isn't a project with an end date; it's a cultural commitment to never accepting the current state as the best we can do.\"",
      "\"Our Kaizen event last quarter generated 34 employee-submitted process improvement ideas; implementing the top 12 reduced our defect rate by 0.8 points with zero capital expenditure.\""
    ]
  },

  "OP011": {
    id: "OP011",
    code: "OP:011",
    name: "Select vendors",
    definition: "Vendor selection is the process of evaluating, comparing, and choosing suppliers based on quality, price, reliability, capacity, financial stability, and alignment with organizational requirements.",
    keyPoints: [
      "Criteria Development: Define selection criteria based on what's most critical—quality, price, lead time, service—before evaluating candidates.",
      "Request for Proposal: RFPs provide structured information from multiple vendors enabling objective comparison.",
      "Financial Stability: Evaluating vendor solvency protects against supply disruption from supplier failure.",
      "Quality Assessment: Certifications, audits, and sample evaluations verify vendor quality capability.",
      "Total Cost of Ownership: Purchase price plus quality costs, delivery reliability, and switching costs determines true vendor economics."
    ],
    roleplayTips: [
      "\"We weight quality reliability at 40% of our vendor scorecard because a 5% cheaper supplier who causes a 2% defect rate costs more in total than our current supplier at market price.\"",
      "\"Before awarding a major contract, we conduct an on-site audit of the supplier's facility—a paper qualification doesn't reveal the reality of their operational capability.\"",
      "\"Total cost of ownership for this vendor is actually 8% higher than the low-bid alternative when you factor in their defect rate, longer lead times, and our quality inspection cost.\""
    ]
  },

  "OP012": {
    id: "OP012",
    code: "OP:012",
    name: "Evaluate vendor performance",
    definition: "Vendor performance evaluation is the systematic measurement and review of supplier performance against contracted terms and expectations to drive improvement, manage risk, and inform future sourcing decisions.",
    keyPoints: [
      "Scorecard Metrics: On-time delivery, quality conformance, pricing accuracy, and responsiveness are common vendor KPIs.",
      "Regular Reviews: Quarterly or annual reviews create accountability and provide data for contract renegotiation.",
      "Corrective Action: Vendors falling below performance thresholds receive documented corrective action plans.",
      "Reward and Consequence: Top performers receive preferred status and volume; chronic underperformers are replaced.",
      "Continuous Development: Working with key suppliers to improve their processes benefits both parties in cost and quality."
    ],
    roleplayTips: [
      "\"Our vendor scorecard is shared with suppliers at the beginning of each year so there are no surprises when we review performance—transparency drives improvement better than annual surprises.\"",
      "\"When this supplier's on-time delivery dropped to 78% for two consecutive quarters, we issued a formal corrective action request and began dual-sourcing qualification as a contingency.\"",
      "\"Our top supplier receives a preferred partner designation that includes early access to our demand forecasts; they reward us with priority production scheduling during capacity constraints.\""
    ]
  },

  "OP013": {
    id: "OP013",
    code: "OP:013",
    name: "Describe the concept of supply chain management",
    definition: "Supply chain management integrates the sourcing, production, logistics, and distribution activities across multiple organizations to deliver products and services efficiently from raw material to end customer.",
    keyPoints: [
      "Integration: SCM requires coordination across procurement, manufacturing, logistics, and customer service functions.",
      "Information Flow: Demand signals from customers should flow upstream to suppliers to enable responsive, not reactive, planning.",
      "Financial Flow: Working capital optimization across the supply chain involves managing payables, receivables, and inventory simultaneously.",
      "Risk Resilience: Building flexibility into the supply chain through alternative sources and buffer stock mitigates disruption impact.",
      "Value Creation: An optimized supply chain creates competitive advantage through cost, speed, reliability, or all three."
    ],
    roleplayTips: [
      "\"The bullwhip effect shows that small demand variations at retail amplify dramatically upstream—sharing real POS data with our suppliers dampens that effect and stabilizes our production.\"",
      "\"Supply chain management isn't just procurement; it's orchestrating the flow of materials, information, and money across an entire network of partners.\"",
      "\"A three-day improvement in our cash conversion cycle freed up $4.7M of working capital—supply chain optimization and financial optimization are the same conversation.\""
    ]
  },

  // ── PD: Professional Development ──────────────────────────────────────────

  "PD001": {
    id: "PD001",
    code: "PD:001",
    name: "Identify the importance of professional development",
    definition: "Professional development is the ongoing process of acquiring new skills, knowledge, and competencies that enhance an individual's effectiveness and advance their career in a changing business environment.",
    keyPoints: [
      "Career Advancement: Continuous skill development is the primary mechanism through which professionals qualify for higher-level roles.",
      "Relevance Maintenance: Rapidly changing industries require ongoing learning to prevent skill obsolescence.",
      "Organizational Value: Employees who invest in development deliver more value and are harder to replace.",
      "Personal Confidence: Expanded competence builds the confidence to take on new challenges and opportunities.",
      "Network Growth: Professional development activities connect individuals with peers, mentors, and industry leaders."
    ],
    roleplayTips: [
      "\"The half-life of professional skills is shrinking—what made you effective five years ago may be insufficient today, which is why learning is now a career survival skill, not an optional enhancement.\"",
      "\"I allocate 5% of my working time to deliberate learning—courses, reading, and mentoring—because the compound interest on capability development is the highest return investment I can make.\"",
      "\"The professionals who get promoted consistently aren't those who do their current job best; they're those who've already developed the skills required at the next level.\""
    ]
  },

  "PD002": {
    id: "PD002",
    code: "PD:002",
    name: "Maintain appropriate personal appearance",
    definition: "Professional personal appearance involves consistently presenting oneself through dress, grooming, and manner in a way that meets or exceeds workplace and industry standards, building credibility and trust.",
    keyPoints: [
      "Industry Standards: Appearance expectations differ significantly across industries and roles—research and align to context.",
      "Client-Facing Considerations: Customer-facing roles often require higher appearance standards than internal roles.",
      "Consistency: Maintaining standards daily, not just for important meetings, demonstrates reliable professionalism.",
      "Brand Expression: Personal appearance is an extension of the professional brand one builds in the marketplace.",
      "Cultural Sensitivity: Appearance norms vary across cultures and global business environments."
    ],
    roleplayTips: [
      "\"I dress for the meeting I want to have, not the minimum required—it signals preparation and respect before a word is spoken.\"",
      "\"In a video-call world, background, lighting, and framing are part of professional appearance—a cluttered or dark background undermines the credibility of your message.\"",
      "\"Personal appearance is a form of professional communication—every detail either reinforces or undermines the impression you want to make.\""
    ]
  },

  "PD003": {
    id: "PD003",
    code: "PD:003",
    name: "Demonstrate systematic behavior",
    definition: "Systematic behavior is the disciplined practice of approaching work through structured, repeatable processes and organized methods that produce consistent, high-quality results.",
    keyPoints: [
      "Process Orientation: Developing checklists, templates, and standard procedures for recurring tasks reduces error and improves speed.",
      "Organization: Maintaining organized files, calendars, and task systems prevents important work from falling through the cracks.",
      "Priority Management: Systematic professionals plan their work around impact rather than urgency.",
      "Follow-Through: Completing tasks to the defined standard, rather than approximately, distinguishes systematic professionals.",
      "Habit Formation: Productive behaviors become automatic through consistent repetition, reducing the cognitive cost of doing them."
    ],
    roleplayTips: [
      "\"I use a weekly planning session every Monday to review commitments, realign priorities, and ensure nothing important gets crowded out by the week's reactive demands.\"",
      "\"For complex recurring processes, I build and maintain a checklist—not because I'll forget the steps, but because cognitive load adds up, and checklists eliminate the error risk.\"",
      "\"Systematic behavior isn't rigidity; it's building the reliable foundation of routine work so your cognitive energy can be devoted to the genuinely novel problems.\""
    ]
  },

  "PD004": {
    id: "PD004",
    code: "PD:004",
    name: "Set personal goals",
    definition: "Personal goal-setting is the deliberate process of defining specific, achievable objectives across professional and personal domains and developing plans to pursue them systematically.",
    keyPoints: [
      "SMART Goals: Effective personal goals are Specific, Measurable, Achievable, Relevant, and Time-bound.",
      "Long vs. Short Term: Balancing long-term aspirations with short-term milestones creates a motivating trajectory.",
      "Written Commitment: Writing goals down increases follow-through by externalizing the commitment.",
      "Review Cadence: Regular review of goals against progress enables course correction and maintains motivation.",
      "Growth Mindset: Framing goals as development opportunities rather than pass/fail tests builds productive persistence."
    ],
    roleplayTips: [
      "\"My 12-month professional goal is to lead my first cross-functional project by Q4, which means I'm actively seeking visibility with senior leaders and taking on coordination responsibilities now.\"",
      "\"I review my goals every quarter not to grade myself but to ask whether they're still the right goals—circumstances change, and goals should evolve with them.\"",
      "\"The most important element of goal-setting isn't the goal—it's identifying the specific behaviors and habits that will produce the outcome, then tracking those rather than the outcome itself.\""
    ]
  },

  "PD005": {
    id: "PD005",
    code: "PD:005",
    name: "Balance personal and professional responsibilities",
    definition: "Work-life balance is the ongoing management of time, energy, and priorities across professional obligations and personal needs to sustain high performance in both domains over the long term.",
    keyPoints: [
      "Boundary Setting: Clear professional boundaries protect personal time and prevent burnout without sacrificing performance.",
      "Energy Management: Managing physical, emotional, and mental energy—not just time—determines sustainable productivity.",
      "Priority Clarity: Knowing what matters most in each domain guides decisions when demands conflict.",
      "Recovery Time: Rest, relationships, and personal interests replenish the capacity to perform at high levels professionally.",
      "Long-Term Sustainability: Careers are marathons; pace and recovery determine who performs consistently over decades."
    ],
    roleplayTips: [
      "\"I protect my personal commitments with the same intentionality I apply to professional ones—if I wouldn't cancel a client meeting for something, I won't cancel my personal commitment either.\"",
      "\"Sustainable high performance requires deliberate recovery; the professionals who consistently outperform over decades are those who treat rest as productive, not indulgent.\"",
      "\"When work demands spike temporarily, I communicate that clearly to my family and my team—transparency about the trade-off reduces resentment and enables everyone to adjust.\""
    ]
  },

  "PD006": {
    id: "PD006",
    code: "PD:006",
    name: "Apply ethics in professional environments",
    definition: "Professional ethics involves applying moral principles—honesty, fairness, respect, and responsibility—consistently in workplace decisions and behaviors, regardless of convenience or pressure.",
    keyPoints: [
      "Integrity: Acting in alignment with stated values even when no one is watching is the foundation of professional character.",
      "Conflict of Interest: Disclosing and recusing from situations where personal interest could compromise professional judgment.",
      "Confidentiality: Protecting sensitive organizational and client information as a core professional responsibility.",
      "Whistleblowing: Legal and ethical obligations exist to report serious ethical violations through appropriate channels.",
      "Ethical Culture: Individual ethics are shaped and reinforced by the organizational culture around them."
    ],
    roleplayTips: [
      "\"I flagged the conflict of interest before the committee meeting because the appearance of a conflict is as damaging as an actual one—transparency protects everyone.\"",
      "\"When my manager asked me to adjust the data presentation in a way that would mislead stakeholders, I declined and explained why; I can disagree on strategy but not on honesty.\"",
      "\"Ethics isn't easy when it's costly; the test of professional integrity is precisely whether you maintain your standards when doing so is inconvenient or professionally risky.\""
    ]
  },

  "PD007": {
    id: "PD007",
    code: "PD:007",
    name: "Explain the need for continuing education and training",
    definition: "Continuing education and training is the ongoing commitment to learning that enables professionals to maintain current competencies, adapt to industry changes, and qualify for career advancement.",
    keyPoints: [
      "Skills Obsolescence: Technology and market changes continuously depreciate the value of existing skills without ongoing renewal.",
      "Credentialing: Certifications, licenses, and professional designations provide market-recognized evidence of expertise.",
      "Competitive Differentiation: Credentials and demonstrated learning separate high performers from peers in career competition.",
      "Organizational Benefit: Employees with current skills deliver more value and require less supervision.",
      "Learning Modes: Formal coursework, industry conferences, peer learning, and mentorship all contribute to professional development."
    ],
    roleplayTips: [
      "\"My CFA designation required 900 hours of study and three examinations—that investment in credentialing opened client relationships and salary levels that wouldn't have been accessible otherwise.\"",
      "\"I attend one industry conference per year specifically to expose myself to ideas and people outside my daily context—it's consistently my highest return professional development investment.\"",
      "\"The professionals who stop learning peak early; the ones who stay curious keep advancing because they bring evolving value to every role they fill.\""
    ]
  },

  "PD008": {
    id: "PD008",
    code: "PD:008",
    name: "Identify sources of career information",
    definition: "Career information sources include professional networks, industry associations, career counselors, online platforms, and informational interviews that help individuals make informed career decisions.",
    keyPoints: [
      "Professional Networks: Mentors, alumni, and industry contacts provide insider perspective on careers and opportunities.",
      "Industry Associations: Organizations like DECA, SHRM, or CFA Institute publish salary surveys, career guides, and job boards.",
      "Informational Interviews: Conversations with professionals in target roles provide firsthand insight unavailable in published resources.",
      "Online Platforms: LinkedIn, Glassdoor, and professional forums aggregate salary data, company reviews, and job postings.",
      "Career Services: University career centers, professional coaches, and placement agencies provide structured guidance."
    ],
    roleplayTips: [
      "\"The most valuable career information I've received came from informational interviews with people five years ahead of me on the path I wanted—not from job websites.\"",
      "\"LinkedIn isn't just a job board; it's a research tool for understanding career paths, salary bands, and the skills that hiring managers in my target role consistently list.\"",
      "\"Industry salary surveys from professional associations give you credible benchmarking data that's far more accurate than anonymous online submissions when you're preparing for a compensation conversation.\""
    ]
  },

  "PD009": {
    id: "PD009",
    code: "PD:009",
    name: "Explain employment opportunities in business",
    definition: "Business offers diverse career pathways across functional areas including marketing, finance, operations, HR, and general management in organizations ranging from startups to multinationals across every industry.",
    keyPoints: [
      "Functional Diversity: Business careers span finance, marketing, operations, HR, sales, strategy, and technology roles.",
      "Industry Breadth: Business skills are transferable across industries—finance skills apply in healthcare, technology, manufacturing, and beyond.",
      "Career Trajectories: Entry-level positions in business can lead to specialist, management, or executive tracks.",
      "Entrepreneurial Path: Business education also prepares individuals to start and run their own ventures.",
      "Compensation Range: Business careers offer a wide range of compensation, with financial services, consulting, and technology among the highest-paying fields."
    ],
    roleplayTips: [
      "\"A business degree is a platform, not a destination—the skills you build are applicable everywhere, which means you should target industries where you have genuine interest and differentiated insight.\"",
      "\"Starting in a rotational program exposes you to multiple business functions in two years, which accelerates career clarity and builds cross-functional credibility faster than a specialized hire.\"",
      "\"The highest-compensation business careers—investment banking, consulting, private equity—are accessible but require early planning, relevant experience, and deliberate network-building to enter competitively.\""
    ]
  },

  "PD010": {
    id: "PD010",
    code: "PD:010",
    name: "Implement a self-improvement plan",
    definition: "A self-improvement plan is a structured personal development document that identifies development goals, prioritized actions, required resources, timelines, and measurement criteria for professional and personal growth.",
    keyPoints: [
      "Self-Assessment: Honest identification of strengths to leverage and gaps to close is the starting point.",
      "Priority Focus: Addressing one to three development areas deeply is more effective than spreading improvement efforts thin.",
      "Actionable Steps: Development goals must be translated into specific, schedulable actions to be achievable.",
      "Accountability: Sharing the plan with a mentor or manager creates external accountability that improves follow-through.",
      "Progress Tracking: Regularly measuring progress against development goals enables adjustment and maintains momentum."
    ],
    roleplayTips: [
      "\"My self-improvement plan has one primary focus this quarter—improving my executive presentation skills—because concentrated development creates faster results than trying to improve everything simultaneously.\"",
      "\"I share my development plan with my manager not to make it their responsibility, but to invite coaching, sponsorship, and accountability that accelerates my progress.\"",
      "\"A self-improvement plan without calendar appointments is wishful thinking; I schedule my development activities the same way I schedule client meetings—with defined time blocks and preparation.\""
    ]
  },

  "PD011": {
    id: "PD011",
    code: "PD:011",
    name: "Participate in career planning",
    definition: "Career planning is the ongoing process of assessing interests, values, and skills; exploring options; setting career goals; and creating action plans to achieve professional objectives over time.",
    keyPoints: [
      "Self-Assessment: Understanding one's strengths, interests, values, and personality informs more satisfying career choices.",
      "Career Exploration: Researching roles, industries, and career paths prevents career choices made from limited information.",
      "Goal Setting: Defining a desired career destination with interim milestones creates a navigable path.",
      "Action Planning: Identifying specific experience, education, and relationships needed to reach goals makes progress tangible.",
      "Adaptability: Career plans should be reviewed and revised as opportunities emerge and interests evolve."
    ],
    roleplayTips: [
      "\"Career planning isn't a one-time event in senior year—it's a continuous process of matching your evolving capabilities and interests against the opportunities the market offers.\"",
      "\"The most important career planning question isn't 'what do I want to be?' but 'what problems am I most passionate about solving, and who pays well to solve them?'\"",
      "\"I map out my two-year career horizon in detail and my five-year horizon directionally—far enough to make strategic moves, close enough to stay grounded in what's actually achievable.\""
    ]
  },

  "PD012": {
    id: "PD012",
    code: "PD:012",
    name: "Prepare a resume",
    definition: "A resume is a professional marketing document that presents an individual's education, experience, skills, and accomplishments concisely to persuade an employer that the candidate deserves an interview.",
    keyPoints: [
      "Accomplishment-Focused: Strong resumes describe achievements with quantified results rather than listing job duties.",
      "Tailoring: Adapting the resume for each position to emphasize relevant experience increases relevance and ATS scoring.",
      "Format: Clean, scannable formatting with consistent hierarchy allows reviewers to extract key information in six seconds.",
      "ATS Optimization: Applicant Tracking Systems scan resumes for keywords; matching job description language improves pass-through rates.",
      "Brevity: One page for candidates with under ten years of experience; two pages maximum for senior professionals."
    ],
    roleplayTips: [
      "\"Every bullet on my resume follows the CAR format—Context, Action, Result—with a quantified outcome so the hiring manager sees what I can do, not just what my job required.\"",
      "\"I customize the top third of my resume for every application to mirror the language and priorities in the job description—that's where ATS systems focus their scoring.\"",
      "\"A resume isn't a biography—it's a targeted argument that you're the right solution to this employer's specific problem; every word should serve that argument.\""
    ]
  },

  "PD013": {
    id: "PD013",
    code: "PD:013",
    name: "Write a cover letter",
    definition: "A cover letter is a professional document that accompanies a resume, explaining why the candidate is interested in the role and how their specific qualifications make them the ideal choice.",
    keyPoints: [
      "Customization: A generic cover letter signals low interest; tailoring it to the specific role and company demonstrates genuine motivation.",
      "Opening Hook: The first sentence must create a compelling reason to read further—not 'I am applying for...'",
      "Evidence Alignment: Connect two or three specific qualifications directly to the role's key requirements with concrete examples.",
      "Company Research: Demonstrating knowledge of the company's challenges, values, or initiatives shows genuine interest.",
      "Call to Action: Close with a specific, confident request for an interview rather than a passive 'I look forward to hearing from you.'"
    ],
    roleplayTips: [
      "\"My cover letter opens with the insight I gained from researching their Q3 earnings call, which immediately signals that I understand their business well enough to contribute on day one.\"",
      "\"I never summarize my resume in a cover letter—the letter explains why this specific company at this specific moment is where I want to bring my skills, which a resume can't communicate.\"",
      "\"I close my letter by naming a specific date I'll follow up and then actually do it—confidence and follow-through begin in the application process, not the interview.\""
    ]
  },

  "PD014": {
    id: "PD014",
    code: "PD:014",
    name: "Interview for a job",
    definition: "A job interview is a structured or semi-structured conversation in which an employer evaluates a candidate's qualifications, fit, and potential through questions designed to predict job performance.",
    keyPoints: [
      "Preparation: Researching the company, role, and industry enables specific, informed responses that demonstrate genuine interest.",
      "STAR Method: Behavioral questions are best answered with Situation, Task, Action, and Result structure.",
      "Question Preparation: Preparing thoughtful questions demonstrates engagement and helps evaluate mutual fit.",
      "First Impression: Non-verbal communication, punctuality, and professional appearance create lasting first impressions.",
      "Follow-Up: A thank-you note within 24 hours reinforces interest, recalls a key conversation point, and differentiates from other candidates."
    ],
    roleplayTips: [
      "\"I prepare three to four STAR stories per core competency before every interview so I can draw on real examples under pressure without scrambling to remember details.\"",
      "\"My questions for the interviewer focus on what success looks like in the first 90 days and what the biggest challenge the team is working through—those questions advance the conversation from evaluation to collaboration.\"",
      "\"My thank-you email references a specific part of our conversation and adds a brief thought I had afterward—it demonstrates I was genuinely engaged, not just completing a checklist.\""
    ]
  },

  // ── SM: Selling ───────────────────────────────────────────────────────────

  "SM001": {
    id: "SM001",
    code: "SM:001",
    name: "Explain the nature and scope of the selling function",
    definition: "Selling is the personal, interactive process through which a salesperson identifies customer needs and communicates how a product or service's benefits satisfy those needs to create a mutually beneficial exchange.",
    keyPoints: [
      "Relationship Building: Modern selling is relationship-centered, prioritizing long-term trust over individual transaction wins.",
      "Consultative Approach: Effective sellers act as advisors, diagnosing needs before prescribing solutions.",
      "Value Communication: Selling communicates how product benefits translate into outcomes the customer values.",
      "Scope: Selling encompasses prospecting, qualifying, presenting, overcoming objections, closing, and follow-up.",
      "Ethical Selling: Professional sellers represent their products accurately and prioritize customer outcomes over personal commissions."
    ],
    roleplayTips: [
      "\"My job isn't to sell you something—it's to understand your business challenge well enough to tell you honestly whether what we offer will help, and to walk away if it won't.\"",
      "\"The selling function is the bridge between what we've built and the customer who needs it; great selling creates value by connecting those two things efficiently.\"",
      "\"I track customer outcomes after the sale as carefully as I track the sale itself—because a customer who achieves results renews, expands, and refers, which is the real selling objective.\""
    ]
  },

  "SM002": {
    id: "SM002",
    code: "SM:002",
    name: "Determine customer/client needs",
    definition: "Needs determination is the sales process of using targeted questioning, active listening, and observation to uncover the customer's stated and unstated requirements before presenting any solution.",
    keyPoints: [
      "Open-Ended Questions: Questions that invite explanation reveal needs the customer might not have volunteered spontaneously.",
      "Probing Techniques: Follow-up questions like SPIN (Situation, Problem, Implication, Need-Payoff) deepen need discovery.",
      "Active Listening: Hearing and reflecting back what the customer says ensures accurate understanding.",
      "Emotional vs. Rational Needs: Customers have both rational requirements and emotional motivations—both drive purchasing decisions.",
      "Need Prioritization: Not all needs are equally important; identifying the primary driver guides solution selection."
    ],
    roleplayTips: [
      "\"Before I describe anything we offer, tell me—what's the biggest challenge in your current process that, if solved, would make the most difference to your team?\"",
      "\"You mentioned the timeline is critical; help me understand what happens if this isn't resolved by your September deadline—what's the downstream impact?\"",
      "\"I'm going to resist the urge to pitch until I fully understand your situation, because the worst thing I can do is recommend something that technically works but doesn't solve your actual problem.\""
    ]
  },

  "SM003": {
    id: "SM003",
    code: "SM:003",
    name: "Recommend specific product",
    definition: "Product recommendation is the sales process of matching the customer's identified needs to specific product features and benefits, presenting the solution as the best answer to the customer's situation.",
    keyPoints: [
      "Feature-Benefit Translation: Translating product features into customer benefits makes the recommendation personally relevant.",
      "Needs Matching: The recommendation should directly reference the needs discovered during needs analysis.",
      "Evidence: Supporting recommendations with data, testimonials, or case studies increases persuasive credibility.",
      "Options Framing: Presenting tiered options (good/better/best) allows customers to self-select based on their value priority.",
      "Specificity: Precise recommendations based on the customer's situation are more compelling than general product descriptions."
    ],
    roleplayTips: [
      "\"Based on what you've shared about your team size and integration requirements, I'd recommend the Professional tier specifically—the enterprise plan has features you'd pay for but not use.\"",
      "\"The reason I'm recommending this model over the alternatives is the combination of battery life and processing speed you described as non-negotiable—this one delivers both.\"",
      "\"Here's a case study from a company in the same industry with the same workflow challenge—they implemented this solution and reduced processing time by 34% in the first quarter.\""
    ]
  },

  "SM004": {
    id: "SM004",
    code: "SM:004",
    name: "Convert customer/client objections into selling points",
    definition: "Objection handling is the sales skill of acknowledging customer concerns, addressing them with accurate information and empathy, and reframing them as reasons to move forward rather than barriers to purchase.",
    keyPoints: [
      "Listen Fully: Let the customer complete their objection before responding—interrupting signals defensiveness.",
      "Acknowledge First: Validating the concern before addressing it reduces adversarial tension.",
      "Clarify: Confirm that you understand the real objection before offering a response—surface objections often mask deeper ones.",
      "Evidence-Based Response: Address objections with facts, testimonials, or demonstrations rather than assertions.",
      "Reframe: Convert the objection into a selling point by connecting the concern to a product strength."
    ],
    roleplayTips: [
      "\"That's a completely fair concern about implementation time—and actually, our dedicated onboarding team means most customers are fully operational in 14 days, not the 6 weeks typical in this category.\"",
      "\"You're right that our price is higher than the alternative, and I want to show you exactly what you're getting for that difference—because when you compare total cost of ownership, the economics shift significantly.\"",
      "\"When clients raise the integration concern, it's usually because they've had a bad experience elsewhere; let me walk you through how our API documentation and support process specifically addresses that.\""
    ]
  },

  "SM005": {
    id: "SM005",
    code: "SM:005",
    name: "Close the sale",
    definition: "Closing is the sales process of gaining the customer's commitment to purchase, using techniques that confirm readiness, address final hesitations, and move the interaction from discussion to decision.",
    keyPoints: [
      "Trial Close: Testing the customer's readiness throughout the presentation with questions like 'Does this address your concern?' identifies objections before the final close.",
      "Assumptive Close: Proceeding on the assumption of agreement—'When would you like delivery?'—is appropriate when clear buying signals are present.",
      "Summary Close: Reviewing agreed needs and matched benefits before asking for the decision reinforces value.",
      "Urgency: Legitimate time-based or quantity-based urgency can accelerate decisions for genuinely ready customers.",
      "Ask: Many sales are lost because the salesperson never directly asks for the order—a direct, confident close is essential."
    ],
    roleplayTips: [
      "\"Based on everything we've discussed, it sounds like this solution addresses your three key requirements; are you ready to move forward with the Professional tier?\"",
      "\"We have one installation slot available in your target month—if we can finalize the agreement today, I can lock that in and ensure your team is up and running on your timeline.\"",
      "\"You've confirmed the product meets your needs and the pricing works within your budget—what's the best path to getting this approved on your end so we can set a start date?\""
    ]
  },

  "SM006": {
    id: "SM006",
    code: "SM:006",
    name: "Demonstrate suggestion selling",
    definition: "Suggestion selling (upselling and cross-selling) is the ethical practice of recommending additional or upgraded products that genuinely enhance the customer's primary purchase or address related needs.",
    keyPoints: [
      "Customer Benefit Focus: Suggestions should offer genuine additional value, not just higher revenue—customers sense the difference.",
      "Timing: Suggestion selling is most effective after the primary sale is committed, not before.",
      "Relevance: Recommendations should be directly related to the primary purchase and the needs already established.",
      "Confidence: Delivering suggestions with confidence and a clear benefit rationale increases acceptance.",
      "Limits: Excessive suggestions or pressure to upsell erodes trust and can reverse the primary purchase commitment."
    ],
    roleplayTips: [
      "\"Since you're investing in the CRM platform, I'd recommend also adding the advanced reporting module—given the data analysis needs you described, it will pay for itself in the first quarter.\"",
      "\"Most customers who purchase this equipment also add the extended warranty; given your production environment, the downtime cost of a major repair would significantly exceed the warranty premium.\"",
      "\"Before I let you go, I want to mention one complementary item that your colleagues at similar companies almost always add—it directly addresses the secondary issue you mentioned at the beginning of our conversation.\""
    ]
  },

  "SM007": {
    id: "SM007",
    code: "SM:007",
    name: "Process the sale",
    definition: "Processing the sale encompasses the transactional steps required to complete a purchase, including payment handling, documentation, order entry, and providing the customer with purchase confirmation and next steps.",
    keyPoints: [
      "Accuracy: Errors in order processing create customer frustration, returns, and potential legal issues.",
      "Payment Methods: Familiarity with all accepted payment methods—cash, card, financing, purchase orders—enables smooth transactions.",
      "Documentation: Receipts, invoices, contracts, and warranties create records that protect both the customer and the business.",
      "Security: Handling payment information requires strict adherence to PCI-DSS standards and company security protocols.",
      "Handoff: Clearly communicating next steps—delivery date, installation schedule, account setup—sets expectations and begins fulfillment."
    ],
    roleplayTips: [
      "\"I'm going to walk you through the order confirmation step by step to make sure every detail is exactly as we discussed—accuracy at this stage prevents problems downstream.\"",
      "\"Your purchase order will be followed by an email confirmation with your order number, expected delivery window, and your account manager's direct contact information.\"",
      "\"PCI compliance means I can't write down your full card number—our secure terminal handles the transaction and neither you nor I has access to the raw data afterward.\""
    ]
  },

  "SM008": {
    id: "SM008",
    code: "SM:008",
    name: "Describe the use of technology in the selling function",
    definition: "Sales technology encompasses CRM systems, sales automation, data analytics, and digital communication tools that increase sales productivity, improve customer intelligence, and enable more effective selling at scale.",
    keyPoints: [
      "CRM Systems: Salesforce, HubSpot, and similar platforms centralize customer data, opportunity management, and communication history.",
      "Sales Automation: Email sequences, meeting schedulers, and auto-dialing tools reduce administrative time and increase selling time.",
      "Sales Intelligence: Platforms like ZoomInfo and LinkedIn Sales Navigator provide account data and buyer intent signals.",
      "Analytics: Pipeline reporting, win/loss analysis, and activity metrics help sales managers coach based on data.",
      "Virtual Selling: Video conferencing and digital demo tools enable effective selling without geographic constraints."
    ],
    roleplayTips: [
      "\"My CRM tells me this prospect visited our pricing page three times this week but didn't request a demo—that intent signal is my cue to reach out with a relevant, timely message.\"",
      "\"Sales automation handles my follow-up sequence for inbound leads so no one falls through the cracks while I'm focused on the closing conversations that require human judgment.\"",
      "\"Our pipeline analytics show that deals that include a technical demo close at 2.3x the rate of those that don't—so we've made demos a mandatory step in our sales process.\""
    ]
  },

  "SM009": {
    id: "SM009",
    code: "SM:009",
    name: "Conduct post-sales follow-up activities",
    definition: "Post-sales follow-up is the deliberate set of activities a salesperson undertakes after a purchase to confirm satisfaction, resolve implementation issues, and create the conditions for renewal and referral.",
    keyPoints: [
      "Timing: An initial follow-up within 48 hours of purchase addresses early questions and reinforces the buying decision.",
      "Outcome Verification: Confirming the customer is achieving the expected results demonstrates accountability and surfaces problems early.",
      "Relationship Maintenance: Regular contact between purchases prevents competitors from accessing the relationship during quiet periods.",
      "Expansion Identification: Satisfied customers often have additional needs that follow-up conversations naturally uncover.",
      "Referral Solicitation: Customers who are genuinely satisfied are willing to provide referrals when asked specifically and at the right moment."
    ],
    roleplayTips: [
      "\"I'm calling to check in three weeks after implementation, not to sell you anything—I want to make sure the onboarding went smoothly and that you're seeing the efficiency gains we discussed.\"",
      "\"You mentioned at 90 days that you'd be evaluating expansion to your European offices—I wanted to circle back now that we're at that point and understand where you are in that decision.\"",
      "\"If the experience has been as positive as it sounds, would you be open to a brief call with one of our prospects who has a similar use case? A peer recommendation from you would be extremely valuable to them.\""
    ]
  },

  "SM010": {
    id: "SM010",
    code: "SM:010",
    name: "Analyze sales data",
    definition: "Sales data analysis involves using CRM reporting, pipeline metrics, win/loss data, and customer analytics to identify trends, diagnose performance gaps, and optimize sales strategy and resource allocation.",
    keyPoints: [
      "Pipeline Metrics: Conversion rates at each stage reveal where deals are won or lost and where process improvement is needed.",
      "Win/Loss Analysis: Systematic debrief of won and lost deals surfaces competitive positioning, pricing, and process insights.",
      "Activity Metrics: Call volume, demo rates, and proposal frequency are leading indicators of future pipeline health.",
      "Cohort Analysis: Comparing performance across rep cohorts, geographies, or market segments identifies best practices to replicate.",
      "Forecasting: Historical data and pipeline probability-weighting produce revenue forecasts that guide business planning."
    ],
    roleplayTips: [
      "\"Our win rate drops from 41% to 18% when the buying committee exceeds five stakeholders—that tells me we need to develop a multi-threading strategy rather than relying on a single champion.\"",
      "\"Win/loss interviews revealed that price wasn't the primary defection reason—it was implementation support; we've since added a dedicated customer success resource to the Q4 cohort and win rates are recovering.\"",
      "\"My Q4 revenue forecast is weighted by stage probability and historical stage conversion rates—it's not the sum of every deal in the pipeline, because that number is never what closes.\""
    ]
  },

};

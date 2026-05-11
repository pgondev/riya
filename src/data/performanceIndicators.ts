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

  "BL163": {
    id: "BL163",
    code: "BL:163",
    name: "Comply with the spirit and intent of laws and regulations",
    definition: "Follow both the written law and its intended purpose to ensure ethical business practices.",
    keyPoints: [
      "Consumer Protection: Laws exist to protect consumers, employees, and businesses from harm and exploitation.",
      "Beyond Loopholes: Ethical compliance means following the intent of the law, not just its technical letter.",
      "Trust Building: Spirit-of-the-law compliance builds stakeholder trust and enhances the company's reputation.",
      "Legal Consequences: Violations of regulatory intent can result in fines, lawsuits, or loss of operating licenses.",
      "Ethical Culture: Organizations that comply with the spirit of regulations foster an ethical workplace culture."
    ],
    roleplayTips: [
      "\"Our compliance program is designed around the intent of the regulation, not just the minimum letter of the law—we believe that's the only approach that truly protects our customers and our business.\"",
      "\"Finding a loophole may be technically legal, but if it violates the spirit of the regulation, we're exposing the company to reputational and regulatory risk that isn't worth it.\"",
      "\"We train every employee that compliance isn't a checkbox—it's a commitment to the purpose behind the rule.\""
    ]
  },

  "BL067": {
    id: "BL067",
    code: "BL:067",
    name: "Discuss the nature of law and sources of law in the United States",
    definition: "Explain what laws are and where they originate in the U.S. legal system.",
    keyPoints: [
      "Constitutional Law: The U.S. Constitution is the supreme law of the land, establishing fundamental rights and government structure.",
      "Statutory Law: Legislatures at the federal and state level pass statutes that govern specific behaviors and industries.",
      "Administrative Law: Government agencies create rules and regulations that have the force of law within their jurisdiction.",
      "Case Law: Court decisions and legal precedents form common law that guides future rulings.",
      "Hierarchy: When laws conflict, constitutional law supersedes statutory law, which supersedes administrative regulations."
    ],
    roleplayTips: [
      "\"The FTC's advertising guidelines are administrative law—they carry the force of statute and our marketing team is trained to comply with every requirement.\"",
      "\"This contract dispute will be governed by case law precedent from our state's appellate courts, not just the written statute.\"",
      "\"Understanding where a law comes from tells you who has the authority to change it and what level of enforcement to expect.\""
    ]
  },

  "BL068": {
    id: "BL068",
    code: "BL:068",
    name: "Describe the United States' judicial system",
    definition: "Explain how courts are structured and how legal cases are resolved.",
    keyPoints: [
      "Dual System: The U.S. has parallel federal and state court systems, each with its own jurisdiction and structure.",
      "Court Hierarchy: Trial courts hear cases first; appellate courts review decisions; the Supreme Court issues final rulings.",
      "Civil Cases: Civil litigation involves disputes between parties seeking monetary damages or injunctive relief.",
      "Criminal Cases: Criminal proceedings involve the government prosecuting individuals or organizations for violations of law.",
      "Jurisdiction: Courts can only hear cases within their defined geographic and subject-matter authority."
    ],
    roleplayTips: [
      "\"This contract dispute belongs in federal court because it involves parties from different states and exceeds the diversity jurisdiction threshold.\"",
      "\"We lost at the trial court level but have strong grounds for appeal—the appellate court reviews legal errors, not just factual findings.\"",
      "\"Understanding whether we're in a civil or criminal matter determines our burden of proof and the range of possible remedies.\""
    ]
  },

  "BL051": {
    id: "BL051",
    code: "BL:051",
    name: "Describe methods used to protect intellectual property",
    definition: "Explain legal protections for ideas, creations, and inventions.",
    keyPoints: [
      "Trademarks: Registered trademarks protect brand names, logos, and slogans from unauthorized use by competitors.",
      "Copyrights: Copyright law automatically protects original written, artistic, and creative works from reproduction.",
      "Patents: Utility and design patents give inventors exclusive rights to their inventions for a defined period.",
      "Trade Secrets: Confidential business information is protected through NDAs and internal security protocols.",
      "Enforcement: IP owners must actively monitor and enforce their rights to prevent loss of protection."
    ],
    roleplayTips: [
      "\"We filed a utility patent on our core algorithm before launch—without that protection, a well-funded competitor could replicate our innovation immediately.\"",
      "\"Every employee with access to our proprietary formula signs an NDA, which legally protects it as a trade secret indefinitely as long as we maintain confidentiality.\"",
      "\"Our trademark registration gives us the right to stop competitors from using confusingly similar names in our market—that brand protection is a real business asset.\""
    ]
  },

  "BL001": {
    id: "BL001",
    code: "BL:001",
    name: "Describe legal issues affecting businesses",
    definition: "Identify common legal challenges businesses face.",
    keyPoints: [
      "Contract Disputes: Disagreements over terms, performance, or breach of contract are among the most common business legal issues.",
      "Employment Law: Businesses must comply with labor regulations governing hiring, wages, discrimination, and termination.",
      "Consumer Protection: Companies face legal exposure when products or practices harm or deceive customers.",
      "Liability: Negligence claims can arise when a business fails to meet its duty of care to customers or the public.",
      "Proactive Management: Identifying legal risks early and consulting counsel prevents costly disputes and regulatory action."
    ],
    roleplayTips: [
      "\"Our biggest legal exposure right now is employment classification—we need to verify that our contractor relationships are structured correctly before an audit.\"",
      "\"Product liability is a real risk in this industry; that's why we carry product liability insurance and conduct rigorous quality testing before launch.\"",
      "\"Proactive legal review of our contracts has prevented three potential disputes this year—it's far cheaper to fix issues before signing than after.\""
    ]
  },

  "BL069": {
    id: "BL069",
    code: "BL:069",
    name: "Identify the basic torts relating to business enterprises",
    definition: "Explain civil wrongs that can result in lawsuits against businesses.",
    keyPoints: [
      "Negligence: Businesses can be liable when they fail to exercise reasonable care and that failure causes harm.",
      "Fraud: Intentional misrepresentation of facts to induce a transaction creates civil and potential criminal liability.",
      "Defamation: False statements that damage a person's or company's reputation can result in defamation claims.",
      "Product Liability: Manufacturers and sellers may be held strictly liable for injuries caused by defective products.",
      "Prevention: Documenting procedures, training employees, and carrying appropriate insurance reduces tort exposure."
    ],
    roleplayTips: [
      "\"A product liability claim doesn't require proof of negligence—strict liability means we're responsible if our product caused harm, regardless of intent.\"",
      "\"That marketing claim is potentially fraudulent if we can't substantiate it with data—I'd recommend we remove it from the campaign immediately.\"",
      "\"Our general liability policy covers most negligence claims, but we should review the coverage limits given our increased customer traffic.\""
    ]
  },

  "BL002": {
    id: "BL002",
    code: "BL:002",
    name: "Describe the nature of legally binding contracts",
    definition: "Explain what makes a contract valid and enforceable.",
    keyPoints: [
      "Offer and Acceptance: A valid contract requires a clear offer from one party and an unambiguous acceptance by the other.",
      "Consideration: Each party must exchange something of value—without consideration, the agreement is unenforceable.",
      "Legal Purpose: Contracts for illegal activities are void and cannot be enforced by any court.",
      "Capacity: All parties must have the legal ability to enter contracts—minors and mentally incapacitated persons lack full capacity.",
      "Enforceability: A written contract with clear terms provides far stronger legal protection than a verbal agreement."
    ],
    roleplayTips: [
      "\"This agreement is enforceable because we have documented offer, acceptance, and mutual consideration—both parties exchanged real value.\"",
      "\"A handshake deal may be binding, but without a written contract I can't prove the terms if this relationship breaks down—let's get it in writing.\"",
      "\"The other party lacked capacity to sign this agreement, which means it's voidable at their election—we need to renegotiate with someone who has authority.\""
    ]
  },

  "BL070": {
    id: "BL070",
    code: "BL:070",
    name: "Describe the nature of legal procedure",
    definition: "Explain the steps used to resolve legal disputes.",
    keyPoints: [
      "Filing: Legal disputes begin when a plaintiff files a complaint with the court outlining the claim and relief sought.",
      "Discovery: Both parties exchange evidence, documents, and depositions before trial to build their cases.",
      "Trial: A judge or jury hears arguments and evidence and renders a verdict based on the applicable legal standard.",
      "Appeals: A losing party may appeal on the grounds of legal error to a higher court for review.",
      "Alternative Dispute Resolution: Mediation and arbitration can resolve disputes faster and cheaper than full litigation."
    ],
    roleplayTips: [
      "\"Before we litigate, I'd recommend mediation—we can likely resolve this in one session for a fraction of the cost of a full trial.\"",
      "\"The discovery process requires us to preserve all relevant communications and documents immediately—destroying evidence after a claim is filed creates serious legal risk.\"",
      "\"Our arbitration clause means this dispute stays out of court, which protects our timeline and keeps the matter confidential.\""
    ]
  },

  "BL071": {
    id: "BL071",
    code: "BL:071",
    name: "Discuss the nature of debtor-creditor relationships",
    definition: "Explain the legal relationship between borrowers and lenders.",
    keyPoints: [
      "Credit Agreements: Loan contracts specify the amount, interest rate, repayment schedule, and default consequences.",
      "Interest and Terms: Lenders charge interest as compensation for the time value of money and credit risk assumed.",
      "Default: Failure to repay triggers remedies including collection, repossession of collateral, or legal judgment.",
      "Bankruptcy: Federal bankruptcy law allows debtors to restructure or discharge debts under court supervision.",
      "Consumer Protections: Laws like the FDCPA restrict collection practices and require transparent disclosure of credit terms."
    ],
    roleplayTips: [
      "\"We need to restructure this line of credit before we breach the debt-service coverage covenant—proactive renegotiation is far better than triggering a default event.\"",
      "\"Requiring a UCC security interest in their receivables as collateral gives us a secured position that dramatically improves our recovery in a default scenario.\"",
      "\"Under the Fair Debt Collection Practices Act, there are strict rules about when and how we can contact this customer—our collections team must be trained on those limits.\""
    ]
  },

  "BL072": {
    id: "BL072",
    code: "BL:072",
    name: "Explain the nature of agency relationships",
    definition: "Describe situations where one party acts on behalf of another.",
    keyPoints: [
      "Principal and Agent: The principal authorizes the agent to act on their behalf, creating legal obligations for both.",
      "Authority: Agents may have actual authority (explicitly granted) or apparent authority (perceived by third parties).",
      "Fiduciary Duty: Agents owe loyalty to the principal and must avoid conflicts of interest and self-dealing.",
      "Liability: Principals are bound by and liable for actions agents take within the scope of their authority.",
      "Termination: Agency relationships end by agreement, completion of purpose, or revocation by either party."
    ],
    roleplayTips: [
      "\"Our sales rep exceeded their authorized discount level, so we may not be bound by that price—I'm updating our authorization policy to prevent apparent authority issues.\"",
      "\"As your agent in this negotiation, I have a fiduciary duty to prioritize your interests—any conflict of interest I become aware of will be disclosed immediately.\"",
      "\"Apparent authority means if we allow an employee to appear authorized to clients, we're legally responsible for commitments they make, even without explicit approval.\""
    ]
  },

  "BL073": {
    id: "BL073",
    code: "BL:073",
    name: "Discuss the nature of environmental law",
    definition: "Explain laws designed to protect the environment from business harm.",
    keyPoints: [
      "Pollution Control: Environmental laws limit air, water, and soil pollution through permits, standards, and penalties.",
      "Waste Disposal: Regulations govern how businesses must handle, store, and dispose of hazardous and solid waste.",
      "Sustainability Compliance: Companies are increasingly required to meet environmental standards as part of doing business.",
      "Agency Enforcement: The EPA and state agencies enforce environmental regulations through inspections and penalties.",
      "Strategic Opportunity: Proactive environmental compliance can reduce costs and attract sustainability-focused customers and investors."
    ],
    roleplayTips: [
      "\"Our facility is subject to EPA effluent standards—we've invested in treatment infrastructure to ensure full compliance and avoid penalties that would far exceed the capital cost.\"",
      "\"The new emissions regulation represents both a compliance obligation and a market opportunity—companies that exceed the standard earn premium pricing in certain customer segments.\"",
      "\"Environmental liability from improper waste disposal can follow a company for decades—we use certified disposal vendors and maintain complete documentation.\""
    ]
  },

  "BL074": {
    id: "BL074",
    code: "BL:074",
    name: "Discuss the role of administrative law",
    definition: "Explain laws created and enforced by government agencies.",
    keyPoints: [
      "Agency Regulations: Federal and state agencies create rules within their area of authority that have the force of law.",
      "Enforcement Powers: Agencies can investigate, issue fines, and revoke licenses for violations of their regulations.",
      "Business Compliance: Companies must monitor and comply with regulations from multiple agencies simultaneously.",
      "Rulemaking Process: Agencies propose and finalize rules through a public comment process that businesses can participate in.",
      "Appeals: Businesses can challenge agency actions through administrative appeals and federal court review."
    ],
    roleplayTips: [
      "\"The FTC's new rule goes into effect in 90 days—we need to review our marketing practices against the updated requirements and adjust before the deadline.\"",
      "\"We submitted public comments during the rulemaking process to protect our operational interests—that's a legitimate and important way businesses influence regulatory outcomes.\"",
      "\"When the agency issued an enforcement action, we requested an administrative hearing to contest the findings—the process gives us due process rights before penalties are imposed.\""
    ]
  },

  "BL003": {
    id: "BL003",
    code: "BL:003",
    name: "Explain types of business ownership",
    definition: "Describe common legal forms of business ownership.",
    keyPoints: [
      "Sole Proprietorship: One owner has complete control but bears unlimited personal liability for all business debts.",
      "Partnership: Two or more owners share profits, management, and liability as defined in a partnership agreement.",
      "Corporation: A legally separate entity that limits owner liability but is subject to double taxation on profits.",
      "LLC: A limited liability company combines personal liability protection with pass-through taxation flexibility.",
      "Selection Criteria: Owners choose a structure based on liability tolerance, tax goals, funding needs, and desired management control."
    ],
    roleplayTips: [
      "\"Given your growth plans and need for outside investment, forming a C-corp now creates the equity structure that venture investors and future employees expect.\"",
      "\"An LLC gives you the liability protection of a corporation while avoiding double taxation—for a small business at your stage, it's often the most efficient structure.\"",
      "\"Operating as a sole proprietor means your personal assets are at risk for every business obligation—let's discuss restructuring before you take on this level of contract liability.\""
    ]
  },

  "BL145": {
    id: "BL145",
    code: "BL:145",
    name: "Explain the nature of import/export law",
    definition: "Explain laws governing international trade.",
    keyPoints: [
      "Trade Agreements: Bilateral and multilateral agreements like USMCA reduce tariffs and set trading rules between countries.",
      "Tariffs and Quotas: Import duties and quantity limits protect domestic industries but increase costs for importers.",
      "Export Controls: The U.S. restricts export of certain technologies, materials, and goods for national security reasons.",
      "Foreign Law Compliance: Exporters must comply with both U.S. law and the destination country's import regulations.",
      "Documentation: Accurate commercial invoices, certificates of origin, and export licenses are required for legal cross-border trade."
    ],
    roleplayTips: [
      "\"The new tariff on this product category increases our landed cost by 15%—we need to evaluate near-shoring or renegotiating supplier contracts to maintain margin.\"",
      "\"Our export compliance program includes screening every transaction against the denied parties list—a single violation of export control law carries severe criminal penalties.\"",
      "\"Under the USMCA, goods that meet rules-of-origin requirements enter Canada duty-free—qualifying our product saves us 6.5% on every cross-border shipment.\""
    ]
  },

  "BL126": {
    id: "BL126",
    code: "BL:126",
    name: "Describe the nature of customs regulations",
    definition: "Explain rules for moving goods across national borders.",
    keyPoints: [
      "Inspections: Customs authorities inspect shipments to verify declarations and ensure prohibited goods aren't imported.",
      "Duties and Taxes: Import duties are calculated based on the HS tariff code, declared value, and country of origin.",
      "Documentation: Accurate commercial invoices, packing lists, and bills of lading are required for customs clearance.",
      "Compliance Risk: Misdeclaring the value or classification of goods constitutes fraud and can result in seizure and penalties.",
      "Customs Brokers: Licensed brokers navigate complex customs requirements on behalf of importers and exporters."
    ],
    roleplayTips: [
      "\"We use a licensed customs broker for all international shipments because the documentation requirements are complex enough that a classification error can delay our entire supply chain.\"",
      "\"Accurate tariff code classification matters—misclassifying a product to lower duties is customs fraud, and the penalties far exceed any duty savings.\"",
      "\"Our C-TPAT certification as a trusted trader reduces customs inspections and speeds clearance time, which is a real competitive advantage for our just-in-time supply chain.\""
    ]
  },

  // ── CO: Communication Skills ──────────────────────────────────────────────

  "CO054": {
    id: "CO054",
    code: "CO:054",
    name: "Identify sources that provide relevant, valid written material",
    definition: "Locate credible and accurate written sources that can be used to complete tasks or make informed decisions.",
    keyPoints: [
      "Credible Sources: Reliable written materials include official publications, peer-reviewed research, industry reports, and company manuals.",
      "Authority Check: Evaluate the author's credentials and the publishing organization's reputation before using a source.",
      "Currency: Information should be recent enough to remain accurate—outdated sources can lead to flawed decisions.",
      "Bias Awareness: Identify potential conflicts of interest or slant that may affect the objectivity of a source.",
      "Cross-Verification: Confirming facts across multiple credible sources increases confidence in accuracy."
    ],
    roleplayTips: [
      "\"Before including this data in our analysis, I verified it against two independent industry reports—we can't present unverified statistics to the executive team.\"",
      "\"The source is a sponsored white paper from a vendor with an obvious interest in the conclusion—I'd recommend we find independent research to validate those claims.\"",
      "\"For regulatory information, I always go directly to the agency's official website rather than secondary summaries, which can be outdated or misinterpreted.\""
    ]
  },

  "CO055": {
    id: "CO055",
    code: "CO:055",
    name: "Extract relevant information from written materials",
    definition: "Identify and select key information from written documents that is directly useful for tasks or decisions.",
    keyPoints: [
      "Focus on Facts: Identify actionable facts, instructions, and critical data rather than background or padding.",
      "Filter Irrelevance: Deliberately skip content that doesn't advance the task objective to save time.",
      "Annotation: Highlighting, underlining, or noting key passages aids retention and later reference.",
      "Summarization: Condensing extracted information into brief notes makes it usable and shareable.",
      "Context Preservation: Record enough context around key facts to ensure they're accurately interpreted later."
    ],
    roleplayTips: [
      "\"I pulled the three critical data points from that 40-page report and summarized them in a one-paragraph brief for the team—they don't need the full document to make this decision.\"",
      "\"When reviewing contracts, I focus on payment terms, termination clauses, and liability limitations—those are the sections that matter most in a dispute.\"",
      "\"Extracting only relevant information isn't laziness; it's professional efficiency that respects everyone's time.\""
    ]
  },

  "CO056": {
    id: "CO056",
    code: "CO:056",
    name: "Apply written directions to achieve tasks",
    definition: "Follow instructions from written documents accurately to complete assignments or processes.",
    keyPoints: [
      "Full Read First: Reading all instructions before starting prevents errors caused by missing steps discovered midway.",
      "Step-by-Step Execution: Breaking complex instructions into discrete sequential actions reduces the chance of skipping steps.",
      "Accuracy Check: Comparing results against the original instructions confirms the task was completed correctly.",
      "Clarification: When instructions are ambiguous, seek clarification before proceeding to avoid wasting effort.",
      "Documentation: Note any deviations from instructions and their reasons to maintain an accurate process record."
    ],
    roleplayTips: [
      "\"I read the entire procedure before starting so I could gather all the required materials upfront—following instructions out of order would have caused a compliance error.\"",
      "\"When step three of the protocol was ambiguous, I flagged it with my supervisor rather than guessing—proceeding on an assumption would have invalidated the entire process.\"",
      "\"After completing the report, I compared every section against the client's written requirements to confirm nothing was missed.\""
    ]
  },

  "CO057": {
    id: "CO057",
    code: "CO:057",
    name: "Analyze company resources to ascertain policies and procedures",
    definition: "Review internal documents and materials to understand and apply company rules and procedures.",
    keyPoints: [
      "Document Review: Employee handbooks, policy manuals, and SOPs are the primary sources for workplace rules.",
      "Gap Identification: Comparing written policies against actual practices reveals inconsistencies that need to be addressed.",
      "Compliance Verification: Confirming that actions align with documented procedures protects employees and the organization.",
      "Update Awareness: Policies change; regularly reviewing current versions prevents inadvertent non-compliance.",
      "Communication: When policies are unclear, clarifying them with management ensures consistent application."
    ],
    roleplayTips: [
      "\"Before taking that action, I reviewed the policy manual and found that the approval threshold requires a director signature—I'm routing it through the correct channel.\"",
      "\"Our written expense policy hasn't been updated since 2019 and no longer reflects current reimbursement limits—I'm flagging that for revision before our next audit.\"",
      "\"When I noticed that field practice differed from the documented procedure, I raised it with the team lead so we could either update the policy or correct the practice.\""
    ]
  },

  "CO082": {
    id: "CO082",
    code: "CO:082",
    name: "Explain communication techniques that support and encourage a speaker",
    definition: "Recognize and use strategies that make speakers feel heard and understood.",
    keyPoints: [
      "Verbal Acknowledgment: Short affirmations like 'I understand' or 'That makes sense' encourage speakers to continue sharing.",
      "Eye Contact: Consistent, natural eye contact signals attention and respect during face-to-face conversations.",
      "Clarifying Questions: Asking follow-up questions confirms understanding and shows genuine interest in the speaker's message.",
      "Nonverbal Signals: Nodding, open posture, and appropriate facial expressions communicate engagement nonverbally.",
      "Patience: Allowing the speaker to finish without interruption demonstrates respect and often reveals information that would otherwise be lost."
    ],
    roleplayTips: [
      "\"I nodded and paraphrased back what the customer said before responding—it signaled that I was genuinely listening, which immediately reduced the tension in the conversation.\"",
      "\"When my colleague was presenting, I made consistent eye contact and asked a clarifying question at the end—it showed I was engaged, not just waiting for my turn to talk.\"",
      "\"Verbal acknowledgments cost nothing and make speakers feel valued—they're one of the most underused tools in professional communication.\""
    ]
  },

  "CO119": {
    id: "CO119",
    code: "CO:119",
    name: "Follow oral directions",
    definition: "Listen carefully and carry out spoken instructions accurately.",
    keyPoints: [
      "Full Attention: Focusing completely on the speaker without distractions ensures critical steps aren't missed.",
      "Note-Taking: Writing down key points during complex oral instructions prevents memory gaps.",
      "Repetition: Mentally or verbally repeating instructions confirms understanding before acting.",
      "Verification: Checking completed work against the original instructions confirms accurate execution.",
      "Clarification: Asking for repetition or elaboration is professional, not a sign of weakness."
    ],
    roleplayTips: [
      "\"Before starting, I repeated the instructions back to confirm I understood the sequence—it took 30 seconds and prevented a potentially costly mistake.\"",
      "\"I kept a notepad during the briefing because the instructions had six steps; relying on memory alone for complex oral directions is a setup for errors.\"",
      "\"When I wasn't sure about step four, I asked for clarification immediately rather than guessing—my supervisor appreciated the check.\""
    ]
  },

  "CO017": {
    id: "CO017",
    code: "CO:017",
    name: "Demonstrate active listening skills",
    definition: "Show understanding through verbal and nonverbal feedback.",
    keyPoints: [
      "Paraphrasing: Summarizing the speaker's message in your own words confirms accurate comprehension.",
      "Follow-Up Questions: Relevant questions based on what was said demonstrate genuine engagement with the content.",
      "Nonverbal Engagement: Maintaining eye contact, nodding, and facing the speaker communicates attentiveness.",
      "Withhold Judgment: Listening fully before forming a response prevents premature conclusions.",
      "Eliminate Distractions: Putting away phones and other devices signals that the conversation is the priority."
    ],
    roleplayTips: [
      "\"Let me make sure I understand correctly—you're saying the delivery timeline is the primary concern, not the price? I want to address the right issue.\"",
      "\"I put my phone away for this conversation because what you're describing deserves my complete attention—I can follow up on everything else later.\"",
      "\"I noticed you hesitated when you mentioned the budget—is there flexibility there, or is that a constraint I should design around?\""
    ]
  },

  "CO147": {
    id: "CO147",
    code: "CO:147",
    name: "Explain the nature of effective verbal communications",
    definition: "Communicate clearly, respectfully, and appropriately for the situation.",
    keyPoints: [
      "Conciseness: Effective verbal communication makes the point clearly without unnecessary filler or repetition.",
      "Logical Structure: Organizing spoken content with a clear opening, middle, and conclusion aids comprehension.",
      "Appropriate Vocabulary: Matching word choice to the audience's knowledge level ensures the message is understood.",
      "Professional Tone: Maintaining a respectful, measured tone regardless of the topic reflects well on the speaker.",
      "Feedback Loop: Checking for understanding through questions or pausing confirms the message landed correctly."
    ],
    roleplayTips: [
      "\"I structured my explanation with the key point first, then the supporting context—busy professionals absorb information better when the headline comes before the details.\"",
      "\"When presenting to the operations team, I avoided finance jargon and used production-focused language they work with daily—same message, different vocabulary.\"",
      "\"Pausing to ask 'does that make sense so far?' isn't a sign of uncertainty—it's professional communication practice that prevents misunderstandings from compounding.\""
    ]
  },

  "CO058": {
    id: "CO058",
    code: "CO:058",
    name: "Ask relevant questions",
    definition: "Seek additional information or clarification to improve understanding.",
    keyPoints: [
      "Relevance: Every question should advance the conversation's objective or fill a specific knowledge gap.",
      "Open-Ended Questions: Questions that invite explanation elicit richer information than yes/no questions.",
      "Timing: Asking questions before acting shows preparation; asking during discussion shows active engagement.",
      "Follow-Up: Building on the answer with a follow-up question demonstrates that you're processing the response.",
      "Professional Framing: Neutral, non-leading questions make respondents more comfortable and forthcoming."
    ],
    roleplayTips: [
      "\"What does success look like for your team twelve months from now? I want to align our proposal with your actual outcome goals, not just the stated deliverables.\"",
      "\"Can you walk me through how your team handles that process today? Understanding the current workflow helps me identify where we add the most value.\"",
      "\"You mentioned efficiency as a priority—is that about reducing cost, processing time, or error rate? The answer changes how I'd structure the solution.\""
    ]
  },

  "CO059": {
    id: "CO059",
    code: "CO:059",
    name: "Interpret others' nonverbal cues",
    definition: "Understand meaning from body language, facial expressions, and tone.",
    keyPoints: [
      "Body Language: Posture, crossed arms, and physical orientation communicate comfort or defensiveness.",
      "Facial Expressions: Micro-expressions like furrowed brows or pursed lips often reveal emotions the speaker hasn't verbalized.",
      "Tone of Voice: Changes in pace, pitch, or volume signal emotional states that words alone may not convey.",
      "Congruence Check: When verbal and nonverbal signals conflict, the nonverbal signal is usually the more honest indicator.",
      "Context Matters: Interpret cues in context—crossed arms may signal skepticism or simply that the room is cold."
    ],
    roleplayTips: [
      "\"I noticed you leaned back when I mentioned the implementation timeline—is there a concern about the schedule I haven't fully addressed?\"",
      "\"Your tone shifted when we discussed pricing; I want to make sure all your cost questions are answered before we move forward.\"",
      "\"Reading the room told me this wasn't the right moment for the full technical demo—I pivoted to addressing the budget concern that was clearly on everyone's mind.\""
    ]
  },

  "CO060": {
    id: "CO060",
    code: "CO:060",
    name: "Provide legitimate responses to inquiries",
    definition: "Answer questions accurately and professionally.",
    keyPoints: [
      "Accuracy: Responses must be based on verified facts, policies, or procedures rather than assumptions.",
      "Honesty: Admitting when you don't know something and committing to follow up is more professional than guessing.",
      "Completeness: Providing enough information for the inquirer to act or make a decision without needing further clarification.",
      "Professional Tone: Maintaining a respectful tone even when the question is challenging or the answer is negative.",
      "Timeliness: Responding promptly signals that the inquiry is valued and taken seriously."
    ],
    roleplayTips: [
      "\"I don't have that figure in front of me, but I'll have an accurate answer to you by end of day—I'd rather take 30 minutes to confirm than give you a wrong number now.\"",
      "\"The answer to your question is covered by our privacy policy—I can walk you through exactly what we can and cannot share and why.\"",
      "\"That's a great question and I want to give you a complete answer; let me pull up the relevant data so I can respond accurately rather than from memory.\""
    ]
  },

  "CO083": {
    id: "CO083",
    code: "CO:083",
    name: "Give verbal directions",
    definition: "Convey instructions clearly to ensure tasks are completed correctly.",
    keyPoints: [
      "Sequential Order: Presenting steps in the correct chronological sequence prevents confusion and rework.",
      "Clarity: Using specific, concrete language eliminates ambiguity that could cause the listener to take incorrect action.",
      "Pacing: Speaking at a measured pace allows the listener to process and remember each step.",
      "Confirmation: Asking the listener to repeat key steps back verifies that the directions were understood correctly.",
      "Availability: Letting the employee know who to contact with questions prevents them from proceeding incorrectly when they hit an obstacle."
    ],
    roleplayTips: [
      "\"Let me walk you through this in order: first log into the portal, then pull the weekly report, then export it as a PDF to the shared drive—can you repeat those steps back to me?\"",
      "\"Before you start, I want to confirm you have everything you need—if you run into anything unexpected at step three, come find me before proceeding.\"",
      "\"I'd rather spend two minutes confirming you understood the instructions than have you spend an hour redoing work that was done incorrectly.\""
    ]
  },

  "CO084": {
    id: "CO084",
    code: "CO:084",
    name: "Employ communication styles appropriate to target audience",
    definition: "Adjust verbal communication based on the audience's role or knowledge.",
    keyPoints: [
      "Expertise Level: Use technical vocabulary with subject-matter experts and plain language with general audiences.",
      "Role Awareness: Executives want conclusions and implications; technical staff want details and methodology.",
      "Cultural Sensitivity: Communication norms vary across cultures—adapting style demonstrates respect and awareness.",
      "Formality Calibration: Match tone and register to the relationship and context, from formal presentations to casual team check-ins.",
      "Feedback Integration: Adjusting in real time based on audience reactions improves message reception."
    ],
    roleplayTips: [
      "\"When I presented to the board, I led with the ROI figure and kept the technical details in the appendix—executives need the business case, not the methodology.\"",
      "\"I simplified the compliance explanation for our frontline staff by using scenarios from their daily work rather than legal terminology they don't encounter.\"",
      "\"The same message delivered in the wrong style loses half its impact—I always research my audience before a high-stakes communication.\""
    ]
  },

  "CO061": {
    id: "CO061",
    code: "CO:061",
    name: "Defend ideas objectively",
    definition: "Present and support ideas using facts and reasoning rather than emotion.",
    keyPoints: [
      "Evidence-Based Argument: Strong positions are supported by data, research, or documented precedent rather than personal opinion.",
      "Acknowledge Counterarguments: Addressing objections proactively demonstrates intellectual honesty and strengthens credibility.",
      "Calm Demeanor: Maintaining composure when challenged signals confidence and prevents the discussion from becoming personal.",
      "Logic Structure: Organizing the argument with a clear thesis, supporting evidence, and conclusion is persuasive and professional.",
      "Openness to Revision: Being willing to update a position when faced with compelling counter-evidence builds long-term credibility."
    ],
    roleplayTips: [
      "\"I disagree with that assessment, and here's my reasoning—the data from our last three quarters supports a different conclusion that I'd like to walk through.\"",
      "\"I hear the objection, and it's a fair one; here's the evidence that addresses it and why I still recommend this approach.\"",
      "\"I'm confident in this recommendation, but if you have data that contradicts my analysis, I genuinely want to see it—let's evaluate both positions together.\""
    ]
  },

  "CO114": {
    id: "CO114",
    code: "CO:114",
    name: "Handle telephone calls in a businesslike manner",
    definition: "Communicate effectively and professionally over the phone.",
    keyPoints: [
      "Professional Opening: Identify yourself and your organization at the start of every call to establish context immediately.",
      "Clear Communication: Speak clearly and at a measured pace—phone calls remove visual cues that aid understanding.",
      "Note-Taking: Document caller information, key details, and action items during the call for accuracy.",
      "Hold Protocol: Always ask permission before placing a caller on hold and provide a realistic wait time.",
      "Definitive Closing: Summarize agreed actions, confirm contact information, and close with a courteous farewell."
    ],
    roleplayTips: [
      "\"Thank you for calling Acme Solutions, this is Jordan in client services—how can I help you today?\"",
      "\"I want to make sure I have all the details right—could you repeat the account number? I'd rather confirm now than route you incorrectly.\"",
      "\"I need to pull up your file to answer that accurately; may I place you on a brief hold, or would you prefer I call you back in ten minutes?\""
    ]
  },

  "CO053": {
    id: "CO053",
    code: "CO:053",
    name: "Participate in group discussions",
    definition: "Contribute ideas, listen, and collaborate in team settings.",
    keyPoints: [
      "Relevant Contribution: Add ideas that advance the group's objective rather than repeating points already made.",
      "Active Listening: Engaging with what others say before responding builds on contributions rather than talking past them.",
      "Respectful Disagreement: Challenge ideas using evidence and logic, never personal criticism.",
      "Balanced Participation: Avoid dominating discussion; invite quieter members' perspectives to improve group thinking.",
      "Goal Orientation: Keep contributions focused on the meeting's stated objective to make the session productive."
    ],
    roleplayTips: [
      "\"I want to build on what was just said—that point about customer acquisition cost connects directly to the pricing model I'd like to propose.\"",
      "\"I see the data differently and think it's worth examining before we commit to this direction—can I share an alternative interpretation?\"",
      "\"It sounds like the group is aligned on timeline but split on vendor; let me summarize both positions so we can make a structured decision.\""
    ]
  },

  "CO201": {
    id: "CO201",
    code: "CO:201",
    name: "Facilitate (lead) group discussions",
    definition: "Guide discussion toward objectives while encouraging participation.",
    keyPoints: [
      "Agenda Setting: Distributing an agenda in advance sets expectations and keeps discussion focused on priorities.",
      "Inclusive Facilitation: Drawing out quieter voices and managing dominant speakers ensures balanced input.",
      "Time Management: Monitoring time and parking off-topic threads keeps the meeting on schedule.",
      "Summarization: Periodically summarizing key points confirms shared understanding and moves the group forward.",
      "Decision Clarity: Closing with documented decisions, action items, owners, and deadlines converts discussion into accountability."
    ],
    roleplayTips: [
      "\"Before we start, let me clarify our objective: we're here to align on the go-to-market date, not revisit product scope—let's hold that boundary.\"",
      "\"I'm going to table the pricing discussion for a separate session so we stay on track; I'll put it on next week's agenda.\"",
      "\"To close out: Sarah owns the vendor proposal by Thursday and Marcus sends the revised timeline by Friday—does that match everyone's understanding?\""
    ]
  },

  "CO025": {
    id: "CO025",
    code: "CO:025",
    name: "Make oral presentations",
    definition: "Present information clearly and confidently to an audience.",
    keyPoints: [
      "Structure: Effective presentations have a compelling opening, organized body with clear transitions, and a memorable conclusion.",
      "Vocal Delivery: Varying pace, pitch, and volume maintains audience attention and emphasizes key points.",
      "Eye Contact: Consistent eye contact with different audience members builds connection and communicates confidence.",
      "Visual Aids: Slides and props should support the speaker's message, not replace or distract from it.",
      "Q&A Readiness: Anticipating audience questions and preparing responses demonstrates expertise and thorough preparation."
    ],
    roleplayTips: [
      "\"I'll open with a question to engage you immediately: how much do you think communication inefficiency costs the average company annually?\"",
      "\"Let me pause here and check in—does the financial model make sense before I move to the implementation timeline?\"",
      "\"That's an excellent question about scalability; the short answer is yes, and I'll walk you through exactly how we've built for that in the next section.\""
    ]
  },

  "CO085": {
    id: "CO085",
    code: "CO:085",
    name: "Utilize note-taking strategies",
    definition: "Apply methods to efficiently capture and organize information for later use.",
    keyPoints: [
      "Selective Recording: Capture key facts, decisions, and action items rather than trying to transcribe everything verbatim.",
      "Visual Organization: Using bullet points, headings, and indentation creates a structured record that's easy to scan later.",
      "Symbols and Abbreviations: Developing a personal shorthand system speeds up note-taking without sacrificing accuracy.",
      "Post-Meeting Review: Reviewing and clarifying notes while the conversation is fresh fills gaps and corrects errors.",
      "Actionable Notes: Flagging action items, deadlines, and follow-ups separately from information makes notes immediately useful."
    ],
    roleplayTips: [
      "\"I flag every action item in my notes with a star so I can extract them immediately after the meeting—I never leave a session without a clear list of what I own.\"",
      "\"My notes from that client call are organized by topic, not chronologically—that way I can find any point instantly when I'm writing the follow-up proposal.\"",
      "\"I review my notes within an hour of every important meeting because waiting until the next day means losing context that's critical to accurate interpretation.\""
    ]
  },

  "CO086": {
    id: "CO086",
    code: "CO:086",
    name: "Organize information",
    definition: "Structure information logically to make it easy to understand and use.",
    keyPoints: [
      "Logical Grouping: Clustering related information together makes the overall structure easier to navigate and understand.",
      "Hierarchy: Using headings, subheadings, and numbering creates clear visual levels of importance and relationship.",
      "Sequence: Ordering information chronologically or by priority helps the reader follow the intended logic.",
      "Conciseness: Removing redundant or irrelevant content keeps organized information lean and actionable.",
      "Accessibility: Well-organized information can be scanned quickly, enabling readers to find what they need without reading everything."
    ],
    roleplayTips: [
      "\"I reorganized the research document by decision category rather than by source—now the team can go directly to the section relevant to their part of the project.\"",
      "\"Before presenting this data to the client, I grouped findings by impact level so the most critical issues are immediately visible at the top.\"",
      "\"A well-organized document communicates that the presenter is professional and has done the analytical work—disorganized information undermines the content's credibility.\""
    ]
  },

  "CO087": {
    id: "CO087",
    code: "CO:087",
    name: "Select and use appropriate graphic aids",
    definition: "Choose visuals that enhance understanding of information.",
    keyPoints: [
      "Purpose Match: Select the chart type that best represents the data—bar charts for comparison, line charts for trends, pie charts for composition.",
      "Audience Appropriateness: Match the complexity of visuals to the audience's data literacy and familiarity with the subject.",
      "Clarity: Every graphic should have a clear title, labeled axes, and a highlighted takeaway that requires no additional explanation.",
      "Visual Simplicity: Avoid overly complex graphics that obscure rather than illuminate the key message.",
      "Integration: Graphics should support and reinforce the narrative rather than stand as unexplained data dumps."
    ],
    roleplayTips: [
      "\"I chose a waterfall chart to show the revenue variance because it makes the individual contributing factors visible in a way a simple bar chart wouldn't.\"",
      "\"This pie chart has twelve slices—that's too many for a viewer to extract meaning. I'm consolidating to the top five categories and an 'other' bucket.\"",
      "\"Every graphic in this deck has a one-line takeaway headline above it so the audience knows what conclusion to draw before they even study the chart.\""
    ]
  },

  "CO016": {
    id: "CO016",
    code: "CO:016",
    name: "Explain the nature of effective written communications",
    definition: "Communicate ideas clearly, concisely, and professionally in writing.",
    keyPoints: [
      "Clarity: Effective written communication uses direct language and logical structure so meaning is immediately apparent.",
      "Conciseness: Every word must earn its place—unnecessary padding dilutes the message and wastes the reader's time.",
      "Correctness: Grammar, spelling, and factual accuracy protect credibility and prevent costly misinterpretations.",
      "Completeness: The message must include all information the reader needs to act without requiring follow-up.",
      "Tone Alignment: Written tone should match the relationship and context—formal for external communications, direct for internal ones."
    ],
    roleplayTips: [
      "\"I rewrote the memo in active voice and cut it from four paragraphs to two—the message is the same but now it actually gets read.\"",
      "\"Ambiguous contract language is a legal risk; every term needs to be defined precisely so there's no room for disputed interpretation.\"",
      "\"A poorly written client email can cost us the relationship before we ever get on the phone—written communication is often the only impression we make.\""
    ]
  },

  "CO088": {
    id: "CO088",
    code: "CO:088",
    name: "Select and utilize appropriate formats for professional writing",
    definition: "Choose the correct structure and style for emails, letters, or reports.",
    keyPoints: [
      "Format Matching: Different communication purposes require different formats—memos for internal, letters for external, reports for analysis.",
      "Structural Elements: Include appropriate components such as headings, salutations, body paragraphs, and closings for each format.",
      "Readability: Consistent formatting with white space, bullet points, and headers improves scannability.",
      "Professional Appearance: Correct formatting signals attention to detail and organizational competence.",
      "Context Sensitivity: The formality of the format should match the audience, relationship, and subject matter."
    ],
    roleplayTips: [
      "\"A memo is the right format for this internal policy update—an email would get buried, and a full report would be disproportionate to the content.\"",
      "\"I used a formal block-letter format for the legal notice because professional correspondence in legal matters requires standard document structure.\"",
      "\"Consistent heading hierarchy throughout this report makes it navigable for a reader who only has time to read the sections relevant to their function.\""
    ]
  },

  "CO089": {
    id: "CO089",
    code: "CO:089",
    name: "Edit and revise written work consistent with professional standards",
    definition: "Review writing for accuracy, clarity, and professionalism.",
    keyPoints: [
      "Grammar and Mechanics: Eliminate spelling, grammar, and punctuation errors that undermine credibility.",
      "Clarity Improvement: Rework sentences that are unclear, convoluted, or open to misinterpretation.",
      "Tone Review: Ensure the tone is appropriate for the audience and consistent throughout the document.",
      "Structural Revision: Confirm the document is logically organized with ideas flowing smoothly from one to the next.",
      "Final Proofread: A fresh read after a pause catches errors missed in the heat of drafting."
    ],
    roleplayTips: [
      "\"I always edit with a fresh eye after setting the draft aside for at least an hour—proximity to the writing blinds you to its flaws.\"",
      "\"Reading the document aloud catches awkward phrasing that looks fine on paper but sounds unnatural when spoken.\"",
      "\"I edited the proposal for tone as much as content—the original draft was technically accurate but sounded defensive, which isn't the impression we want to make on a new client.\""
    ]
  },

  "CO090": {
    id: "CO090",
    code: "CO:090",
    name: "Write professional emails",
    definition: "Compose clear, polite, and concise email messages.",
    keyPoints: [
      "Subject Line: A specific, informative subject line helps recipients prioritize and search for emails efficiently.",
      "Opening and Closing: Begin with an appropriate greeting and close with a professional sign-off that matches the relationship.",
      "Completeness: Include all information the recipient needs to respond or act without requiring follow-up questions.",
      "Brevity: Respect the recipient's time by keeping emails as short as the content allows.",
      "Tone Awareness: Reread emails before sending to verify the tone reads as intended, especially for sensitive topics."
    ],
    roleplayTips: [
      "\"My subject line reads 'Action Required by Friday: Q3 Budget Approval'—recipients immediately know what it is, why it matters, and when they need to act.\"",
      "\"I never send a critical email from a mobile device without rereading it—autocorrect errors and tonal issues in professional email are avoidable and embarrassing.\"",
      "\"A good professional email can stand alone: the recipient understands the purpose, has the context, knows what action is expected, and has a clear deadline.\""
    ]
  },

  "CO133": {
    id: "CO133",
    code: "CO:133",
    name: "Write business letters",
    definition: "Compose formal letters using standard business conventions.",
    keyPoints: [
      "Standard Format: Business letters include date, sender/recipient addresses, salutation, body, closing, and signature in a defined order.",
      "Professional Tone: Language should be formal, direct, and respectful regardless of the nature of the message.",
      "Purpose Clarity: State the letter's objective in the opening paragraph so the reader immediately understands the intent.",
      "Accuracy: Verify all facts, names, titles, and addresses before sending—errors in formal correspondence reflect poorly on the organization.",
      "Record Function: A business letter creates a formal paper trail that documents communication for future reference."
    ],
    roleplayTips: [
      "\"I structured the letter with the key request in the opening paragraph—busy executives decide whether to read further based on the first two sentences.\"",
      "\"Using the recipient's correct title and full name signals preparation and professionalism before the reader has evaluated a single argument.\"",
      "\"This letter serves as written confirmation of the verbal agreement we reached last week—it protects both parties if there's any future misunderstanding about the terms.\""
    ]
  },

  "CO039": {
    id: "CO039",
    code: "CO:039",
    name: "Write informational messages",
    definition: "Convey facts or instructions clearly in written form.",
    keyPoints: [
      "Direct Organization: Lead with the most important information; supporting detail follows for those who need it.",
      "Accuracy: All facts, figures, and dates must be verified before distribution.",
      "Audience Focus: Tailor technical depth and vocabulary to the recipient's role and knowledge level.",
      "Scannability: Bullet points and headers allow time-pressed recipients to extract key information quickly.",
      "Completeness: Include all information necessary for the recipient to understand and act without follow-up."
    ],
    roleplayTips: [
      "\"I used bullet points rather than paragraphs in this update so the field team can absorb it in 30 seconds during a busy shift.\"",
      "\"I led with the deadline change because that's the most time-sensitive element—context and rationale follow for those who need it.\"",
      "\"The message answers the three questions every recipient has: what happened, what does it mean for me, and what do I need to do next.\""
    ]
  },

  "CO040": {
    id: "CO040",
    code: "CO:040",
    name: "Write inquiries",
    definition: "Request information or clarification politely and professionally.",
    keyPoints: [
      "Specific Request: Clearly state exactly what information is needed to make the recipient's response easier.",
      "Context Provision: Explain why the information is needed so the respondent can tailor their answer appropriately.",
      "Courteous Framing: Use polite, professional language that acknowledges the recipient's time.",
      "Response Facilitation: Make it easy for the recipient to respond by specifying format, deadline, or preferred contact method.",
      "Follow-Up Plan: Note when and how you'll follow up if no response is received."
    ],
    roleplayTips: [
      "\"I'm reaching out to request your current price list and lead time schedule for Q4; this will help us finalize our procurement plan by the end of the month.\"",
      "\"Could you provide the updated compliance documentation for your facility? We need it to complete our supplier audit by November 15th.\"",
      "\"I want to make it as easy as possible to respond—I've included a brief template with the four specific data points we need; feel free to fill it in directly.\""
    ]
  },

  "CO031": {
    id: "CO031",
    code: "CO:031",
    name: "Write persuasive messages",
    definition: "Influence the reader to take action using reasoning and evidence.",
    keyPoints: [
      "AIDA Structure: Effective persuasion captures Attention, builds Interest, creates Desire, and calls for Action.",
      "Audience Motivation: Understanding what the reader values most allows the writer to appeal to the right benefit.",
      "Evidence: Data, case studies, and testimonials substantiate claims and overcome skepticism.",
      "Confident Tone: Assertive but respectful language conveys conviction without being manipulative.",
      "Clear Call to Action: A specific, time-bound request tells the reader exactly what to do and when."
    ],
    roleplayTips: [
      "\"Our pilot customers reduced processing time by 40%—that's a documented result from a company with the same operational profile as yours, not a projected estimate.\"",
      "\"I'm not asking for a final commitment today; I'm asking for a 30-minute technical call so your team can evaluate this with full information.\"",
      "\"The cost of inaction here isn't zero—every month you delay, you're leaving approximately $12,000 in efficiency gains on the table.\""
    ]
  },

  "CO091": {
    id: "CO091",
    code: "CO:091",
    name: "Write executive summaries",
    definition: "Summarize key points from longer reports or analyses for management.",
    keyPoints: [
      "Audience Focus: Executives need conclusions and recommendations first—they decide whether to read further based on the summary.",
      "Critical Findings: Highlight only the most impactful insights, not every data point from the underlying document.",
      "Recommendation Clarity: Include specific, actionable recommendations tied directly to the findings.",
      "Brevity: An executive summary should typically fit on one page and be readable in under three minutes.",
      "Stand-Alone Quality: The summary must make sense independently—readers shouldn't need the full report to understand the key points."
    ],
    roleplayTips: [
      "\"The executive summary I wrote can stand alone—leadership can make a decision from that one page without reading the full 40-page analysis.\"",
      "\"I wrote the summary last and revised it after finishing the full report—the conclusions evolved during the analysis, and the summary had to reflect the final thinking.\"",
      "\"Every recommendation in the summary links to a specific finding so executives can trace the logic without diving into the supporting appendix.\""
    ]
  },

  "CO094": {
    id: "CO094",
    code: "CO:094",
    name: "Prepare simple written reports",
    definition: "Present information in structured written form for clarity and understanding.",
    keyPoints: [
      "Standard Structure: Reports include an introduction, body with findings, conclusions, and actionable recommendations.",
      "Visual Aids: Tables, charts, and graphs make complex quantitative data more accessible and persuasive.",
      "Objectivity: Present evidence fairly, acknowledging data limitations and alternative interpretations.",
      "Accuracy: All data and claims must be verified before inclusion in a formal report.",
      "Professional Formatting: Consistent headings, pagination, and layout demonstrate care and make the report navigable."
    ],
    roleplayTips: [
      "\"Each recommendation in this report links directly to a specific data finding so you can see exactly what's driving the suggested course of action.\"",
      "\"I included a limitations section because decision-makers need to understand what the data can't tell us, not just what it can.\"",
      "\"The report is formatted so leadership can read the introduction and conclusion to get the full story, or go deeper into any section they want to scrutinize.\""
    ]
  },

  "CO202": {
    id: "CO202",
    code: "CO:202",
    name: "Explain how digital communications expose business to risk",
    definition: "Identify potential legal, security, and reputational risks of digital communication.",
    keyPoints: [
      "Confidentiality Risk: Sensitive business information shared over unsecured digital channels can be intercepted or leaked.",
      "Permanent Record: Digital communications are discoverable in litigation and can be used as evidence against the company.",
      "Reputational Exposure: Careless or inappropriate digital communications can damage brand reputation instantly and permanently.",
      "Privacy Compliance: Digital communications must comply with GDPR, CCPA, and other data privacy regulations.",
      "Phishing and Social Engineering: Employees are the most common attack vector for cybercriminals using deceptive digital communication."
    ],
    roleplayTips: [
      "\"Everything we send over email is potentially discoverable in litigation—we train employees to write every message as if a judge might read it.\"",
      "\"A single careless social media post from an employee has the potential to reach millions of people and create reputational damage that takes years to repair.\"",
      "\"Our digital communication policy includes data classification guidelines because not every message should travel over every channel—some information requires encrypted, audited systems.\""
    ]
  },

  "CO203": {
    id: "CO203",
    code: "CO:203",
    name: "Adapt written correspondence to targeted audiences",
    definition: "Adjust style, tone, and content to meet the needs of the intended audience.",
    keyPoints: [
      "Knowledge Level: Technical depth should match what the audience already knows—over-explaining insults experts; under-explaining confuses novices.",
      "Role Relevance: Emphasize benefits and information most relevant to the recipient's responsibilities and concerns.",
      "Formality Calibration: Match register to the relationship—formal for executives and clients, direct for colleagues.",
      "Cultural Awareness: Consider the audience's cultural background when crafting tone, humor, and examples.",
      "Purpose Alignment: Every element of the message should serve the communication objective for that specific reader."
    ],
    roleplayTips: [
      "\"The same market analysis required three different documents: a one-page summary for the CEO, a detailed memo for the strategy team, and a technical appendix for the data science team.\"",
      "\"I removed all internal acronyms from the client version—our shorthand makes sense to us but creates confusion and distance for external readers.\"",
      "\"Adapting for the audience isn't dumbing down—it's professional respect for the reader's time and context.\""
    ]
  },

  "CO204": {
    id: "CO204",
    code: "CO:204",
    name: "Use data visualization techniques",
    definition: "Present information visually to enhance understanding and analysis.",
    keyPoints: [
      "Chart Selection: Match the visualization type to the data—trends use line charts, comparisons use bar charts, proportions use pie charts.",
      "Clarity: Every visualization needs a clear title, labeled axes, and a highlighted insight that makes the takeaway obvious.",
      "Simplicity: Remove unnecessary grid lines, colors, and decorative elements that distract from the data.",
      "Audience Calibration: Adjust the complexity of visualizations to the data literacy of the intended audience.",
      "Narrative Support: Visualizations should reinforce the analytical story, not stand as unexplained data exhibits."
    ],
    roleplayTips: [
      "\"I used a heat map for the regional sales data because it allows the audience to identify geographic patterns in seconds—a table with the same data would take minutes to interpret.\"",
      "\"Every chart in this presentation has a one-sentence takeaway headline above it so the audience knows what conclusion to draw before studying the visual.\"",
      "\"A chart with twelve colors is a chart with no insight—I condensed to three categories and the story became immediately clear.\""
    ]
  },

  "CO205": {
    id: "CO205",
    code: "CO:205",
    name: "Describe the impact of a person's social media brand on the achievement of organizational objectives",
    definition: "Understand how an individual's professional social media presence can affect a company's reputation and goals.",
    keyPoints: [
      "Brand Representation: Employees' public social media activity reflects on the organization, whether or not the account is labeled professional.",
      "Trust Building: Positive, professional online presence can enhance the organization's credibility and attract business.",
      "Reputational Risk: Inappropriate posts—even on personal accounts—can damage company relationships and brand equity.",
      "Thought Leadership: Employees who share industry insights publicly can position the company as a knowledgeable authority.",
      "Policy Alignment: Personal social media use should align with the organization's values and communication guidelines."
    ],
    roleplayTips: [
      "\"Our executives' LinkedIn activity is part of our thought leadership strategy—their professional posts generate more qualified inbound than most of our paid campaigns.\"",
      "\"We train every client-facing employee that their personal social media is visible to clients—a careless post on a personal account has cost us business relationships before.\"",
      "\"An employee with 5,000 industry followers who shares company content is a significant brand asset—that reach would cost thousands in paid media to replicate.\""
    ]
  },

  "CO206": {
    id: "CO206",
    code: "CO:206",
    name: "Distinguish between using social media for business and personal purposes",
    definition: "Recognize the difference between professional and personal social media use to protect company interests.",
    keyPoints: [
      "Account Separation: Maintaining separate accounts for professional and personal use reduces accidental cross-contamination.",
      "Content Standards: Business social media must meet professional standards; personal accounts carry different but still relevant reputational considerations.",
      "Confidentiality: Company information, client data, and internal discussions must never appear on personal social media.",
      "Policy Compliance: Employees must understand and follow company social media guidelines for both business and personal use.",
      "Audience Awareness: Business audiences expect professional content; personal audiences have different expectations and norms."
    ],
    roleplayTips: [
      "\"Our social media policy clearly distinguishes between personal and business accounts and includes specific guidance on what can and cannot be shared on each.\"",
      "\"Sharing an internal product roadmap on a personal LinkedIn post—even with good intentions—is a confidentiality breach with real competitive consequences.\"",
      "\"I keep my professional and personal social presence completely separate; clients who search for me should find only content I'd be comfortable showing them in a meeting.\""
    ]
  },

  "CO014": {
    id: "CO014",
    code: "CO:014",
    name: "Explain the nature of staff communication",
    definition: "Share and receive information among staff to ensure clarity, understanding, and teamwork.",
    keyPoints: [
      "Clarity and Accuracy: Clear staff communication reduces errors, misunderstandings, and wasted effort across the organization.",
      "Open Dialogue: Encouraging questions and feedback creates a culture where important information flows freely in both directions.",
      "Goal Alignment: Regular communication ensures all team members understand organizational objectives and their role in achieving them.",
      "Channel Selection: Choosing the right communication channel—meeting, email, or instant message—matches the format to the message's urgency and complexity.",
      "Feedback Culture: Organizations with strong internal communication identify and fix problems faster than those with siloed information."
    ],
    roleplayTips: [
      "\"Our weekly team stand-up isn't just a status update—it's a structured touchpoint that prevents information silos and keeps everyone moving in the same direction.\"",
      "\"When major changes aren't communicated clearly from leadership, the rumor mill fills the vacuum—that's why I prioritize transparent, timely internal messaging.\"",
      "\"I'm proposing a cross-departmental communication channel for this project so sales, marketing, and operations are working from the same information in real time.\""
    ]
  },

  "CO092": {
    id: "CO092",
    code: "CO:092",
    name: "Choose and use appropriate channel for workplace communication",
    definition: "Select the best method to communicate messages effectively in the workplace.",
    keyPoints: [
      "Urgency Matching: Use instant messaging or phone for urgent matters; email for formal communication; meetings for complex discussions.",
      "Complexity Consideration: Simple updates work well in writing; nuanced or emotional topics require face-to-face or video conversation.",
      "Audience Access: Choose channels that all intended recipients can access reliably and promptly.",
      "Confidentiality: Sensitive information about personnel, strategy, or finances requires secure, controlled channels.",
      "Confirmation Needs: When documentation matters, follow up verbal communication with written confirmation."
    ],
    roleplayTips: [
      "\"I'm having this performance conversation in person rather than over email—tone and nuance matter too much for this message to travel over text.\"",
      "\"For a quick scheduling update, a Slack message is appropriate; for a complex policy change with legal implications, email creates the documentation trail we need.\"",
      "\"We chose a video call over email for this client concern because we needed to see their reaction and adjust our response in real time.\""
    ]
  },

  "CO063": {
    id: "CO063",
    code: "CO:063",
    name: "Participate in a staff meeting",
    definition: "Engage actively and constructively in team or staff meetings.",
    keyPoints: [
      "Preparation: Reviewing the agenda and relevant materials before the meeting enables more substantive contributions.",
      "Active Contribution: Share insights and questions that are relevant to the meeting's objectives.",
      "Respectful Listening: Give full attention when others speak and acknowledge their contributions before adding your own.",
      "Note-Taking: Documenting key decisions and action items ensures accountability after the meeting ends.",
      "Constructive Engagement: Raise concerns and disagreements professionally, focused on issues rather than personalities."
    ],
    roleplayTips: [
      "\"I reviewed the pre-read materials before this meeting so I could contribute to the discussion rather than spending time catching up during it.\"",
      "\"I want to build on what was just proposed—I think there's a way to achieve the same outcome with lower implementation risk that's worth considering.\"",
      "\"I took notes throughout the meeting and I want to confirm: the three action items are these, with these owners and these deadlines—does that match everyone's understanding?\""
    ]
  },

  "CO067": {
    id: "CO067",
    code: "CO:067",
    name: "Participate in problem-solving groups",
    definition: "Work collaboratively with others to identify problems and develop solutions.",
    keyPoints: [
      "Objective Brainstorming: Generate ideas without immediate judgment to maximize the range of potential solutions.",
      "Evidence-Based Evaluation: Assess options against defined criteria rather than personal preferences.",
      "Active Contribution: Share relevant knowledge, challenge assumptions, and build on others' ideas.",
      "Decision Support: Align behind the group's final decision even when personal preference differs.",
      "Solution Focus: Direct energy toward resolving the problem rather than assigning blame for its existence."
    ],
    roleplayTips: [
      "\"Let's separate the brainstorming phase from the evaluation phase—every idea gets listed before any of them get critiqued, so we don't self-censor potentially valuable options.\"",
      "\"The root cause of this problem is the process, not the person—let's design a solution that addresses the system so the error can't recur.\"",
      "\"I disagreed with the group's final choice, but I'm fully committed to executing it well—the decision was made with good information and a fair process.\""
    ]
  },


  // ── EC: Economics ─────────────────────────────────────────────────────────

  "EC002": {
    id: "EC002",
    code: "EC:002",
    name: "Distinguish between economic goods and services",
    definition: "Differentiate between tangible products (goods) and intangible activities performed for others (services) in the economy.",
    keyPoints: [
      "Tangibility: Goods are physical, touchable items while services are intangible and cannot be stored in advance.",
      "Production vs. Performance: Goods are manufactured or grown; services are performed by people or technology in real time.",
      "Perishability: Services perish immediately if not consumed—an empty seat on a flight is revenue lost forever.",
      "Economic Value: Both goods and services create economic value and satisfy consumer wants and needs.",
      "Business Mix: Most modern businesses offer a blend of goods and services to differentiate their offerings."
    ],
    roleplayTips: [
      "\"Our product line combines physical goods—the hardware—with a subscription service model, so we capture recurring revenue that a one-time goods sale can't provide.\"",
      "\"The key challenge with our service offering is that we can't inventory it—we have to match capacity to demand in real time, which is why staffing forecasting is so critical.\"",
      "\"When we look at customer lifetime value, our service revenue actually outpaces product revenue three-to-one after year two.\""
    ]
  },

  "EC003": {
    id: "EC003",
    code: "EC:003",
    name: "Explain the concept of economic resources",
    definition: "Describe the four factors of production—land, labor, capital, and entrepreneurship—that are used to produce goods and services.",
    keyPoints: [
      "Land: All natural resources used in production, from raw materials to physical locations.",
      "Labor: The human effort—physical and intellectual—that transforms resources into goods and services.",
      "Capital: Man-made tools, equipment, and technology used to produce other goods and services.",
      "Entrepreneurship: The organizing force that combines the other three factors and bears the risk of production.",
      "Scarcity: All economic resources are limited, requiring businesses and societies to make allocation decisions."
    ],
    roleplayTips: [
      "\"Our competitive advantage comes from deploying capital—our proprietary technology platform—more efficiently than competitors who rely on labor-intensive processes.\"",
      "\"The entrepreneur's role is to combine land, labor, and capital in a new configuration that delivers more value than existing alternatives.\"",
      "\"When we evaluate this facility decision, we're really asking: how do we allocate limited capital resources to generate the highest return?\""
    ]
  },

  "EC001": {
    id: "EC001",
    code: "EC:001",
    name: "Describe the types of economic systems",
    definition: "Compare and contrast market, command, traditional, and mixed economic systems and how each answers the basic economic questions of what, how, and for whom to produce.",
    keyPoints: [
      "Market Economy: Prices and competition driven by supply and demand allocate resources with minimal government intervention.",
      "Command Economy: Central government makes all major production and distribution decisions.",
      "Traditional Economy: Resource allocation follows customs, cultural practices, and historical roles.",
      "Mixed Economy: Most modern economies blend market and government mechanisms to balance efficiency with equity goals.",
      "Business Implications: The type of economic system determines the regulatory environment, competition level, and profit potential businesses face."
    ],
    roleplayTips: [
      "\"Entering that market requires understanding it's a mixed economy with significant state-owned enterprises—government relationships are as important as market strategy.\"",
      "\"In a market economy, the price signal is the most powerful information system we have—rising prices tell producers to produce more and consumers to conserve.\"",
      "\"Our international expansion strategy has to account for the fact that each country operates a different type of economic system with different rules for foreign investment.\""
    ]
  },

  "EC004": {
    id: "EC004",
    code: "EC:004",
    name: "Describe the principles of supply and demand",
    definition: "Explain how the interaction between the quantity of a good producers are willing to sell and the quantity consumers are willing to buy determines market prices.",
    keyPoints: [
      "Law of Demand: As price rises, quantity demanded falls; as price falls, quantity demanded rises, all else equal.",
      "Law of Supply: As price rises, quantity supplied increases; as price falls, quantity supplied decreases.",
      "Equilibrium: The market-clearing price where quantity supplied equals quantity demanded.",
      "Shifting Curves: Changes in income, preferences, input costs, or technology shift the supply or demand curve.",
      "Business Application: Understanding supply and demand helps businesses set prices, manage inventory, and time market entry."
    ],
    roleplayTips: [
      "\"We're seeing a demand curve shift, not just movement along the curve—consumer preferences have fundamentally changed, so we need to reprice and reposition, not just discount.\"",
      "\"Our supply chain disruption reduced market supply, which drove prices up—the smart move was to increase output before competitors could respond to the price signal.\"",
      "\"The equilibrium price isn't always the right price for our strategy; we may price above equilibrium to signal premium quality and accept lower volume.\""
    ]
  },

  "EC005": {
    id: "EC005",
    code: "EC:005",
    name: "Explain the concept of price as a measure of value",
    definition: "Describe how prices communicate information about the relative value of goods and services and coordinate economic decisions across markets.",
    keyPoints: [
      "Information Signal: Prices aggregate vast amounts of dispersed information about scarcity, demand, and production costs.",
      "Incentive Mechanism: High prices attract new producers; low prices signal overproduction and drive producers to shift resources.",
      "Value Measure: Price reflects what buyers are collectively willing to sacrifice to obtain a good or service.",
      "Market Coordination: Prices coordinate supply and demand decisions of millions of people without central direction.",
      "Price vs. Value: Price is the market measure of value, but individual value (willingness to pay) can diverge significantly from market price."
    ],
    roleplayTips: [
      "\"Our premium pricing isn't just about margin—it communicates quality and exclusivity to the market and attracts the customer segment willing to pay for it.\"",
      "\"When commodity prices spiked, that was the market sending a clear signal to invest in alternative inputs—we responded faster than competitors.\"",
      "\"Value-based pricing starts with what the customer is willing to pay, not our cost structure—we need to quantify the value we deliver before we set the price.\""
    ]
  },

  "EC006": {
    id: "EC006",
    code: "EC:006",
    name: "Explain factors affecting the business environment",
    definition: "Identify and analyze the economic, political, social, technological, and competitive forces that shape the conditions in which businesses operate.",
    keyPoints: [
      "Economic Factors: GDP growth, interest rates, inflation, and unemployment affect consumer purchasing power and business costs.",
      "Political/Legal: Government regulations, tax policy, and trade agreements create the rules within which businesses must operate.",
      "Social/Cultural: Demographic trends, consumer values, and cultural norms drive demand patterns and workforce composition.",
      "Technological: Innovation creates new products and disrupts existing industries, requiring constant adaptation.",
      "Competitive: Industry rivalry, barriers to entry, substitute products, and buyer/supplier power shape profitability potential."
    ],
    roleplayTips: [
      "\"Before we enter this market, we need to complete a PESTEL analysis—the regulatory environment alone could make or break our margin model.\"",
      "\"The demographic shift toward older consumers isn't just a social trend—it's a direct demand driver that we should be designing new products around.\"",
      "\"Rising interest rates affect both our cost of capital and consumer willingness to finance large purchases, so we need to stress-test our revenue model against a 200-basis-point increase.\""
    ]
  },

  "EC070": {
    id: "EC070",
    code: "EC:070",
    name: "Explain the role of business in society",
    definition: "Describe how businesses create value for multiple stakeholders—customers, employees, communities, and shareholders—and contribute to economic and social well-being.",
    keyPoints: [
      "Value Creation: Businesses transform inputs into outputs worth more to consumers than the cost of production.",
      "Employment: Businesses are the primary source of jobs, wages, and career development in market economies.",
      "Innovation: Competitive pressure drives businesses to innovate, raising living standards and productivity over time.",
      "Tax Revenue: Business profits and payrolls generate tax revenue that funds public goods and services.",
      "Stakeholder Responsibility: Modern businesses balance shareholder returns with obligations to employees, communities, and the environment."
    ],
    roleplayTips: [
      "\"Our business creates value at every level—jobs for employees, tax revenue for the community, returns for investors, and products that improve customers' lives.\"",
      "\"The shareholder vs. stakeholder debate is a false choice; long-term shareholder value requires maintaining trust with employees, customers, and communities.\"",
      "\"We measure our social impact as rigorously as our financial performance because our license to operate depends on both.\""
    ]
  },

  "EC071": {
    id: "EC071",
    code: "EC:071",
    name: "Describe types of businesses",
    definition: "Distinguish among the major forms of business ownership and organization, including sole proprietorships, partnerships, corporations, and limited liability companies.",
    keyPoints: [
      "Sole Proprietorship: Single owner, simple setup, unlimited personal liability, and business income taxed at individual rate.",
      "Partnership: Two or more owners share profits, losses, and management responsibilities.",
      "Corporation: Separate legal entity, limited liability for shareholders, subject to double taxation but able to raise capital through stock.",
      "LLC: Combines limited liability protection of a corporation with the pass-through taxation of a partnership.",
      "Selection Factors: Business type choice depends on liability exposure, capital needs, tax strategy, and growth objectives."
    ],
    roleplayTips: [
      "\"We structured the new venture as an LLC to get liability protection for the founders while avoiding the double-taxation that comes with a C-corp structure at this stage.\"",
      "\"Transitioning from a sole proprietorship to a corporation signals to investors that we're serious about scaling—it also separates personal assets from business risk.\"",
      "\"The partnership structure works when you have complementary skills and shared vision, but you need a bulletproof partnership agreement that covers exit scenarios.\""
    ]
  },

  "EC138": {
    id: "EC138",
    code: "EC:138",
    name: "Explain the nature of capital formation",
    definition: "Describe how savings are channeled into investment in physical and human capital, driving long-term economic growth and productivity gains.",
    keyPoints: [
      "Savings-Investment Link: Capital formation requires deferring consumption today to invest in productive capacity for tomorrow.",
      "Physical Capital: Machinery, equipment, infrastructure, and technology that increase productive output per worker.",
      "Human Capital: Education, training, and skills development that increase worker productivity and earning potential.",
      "Financial Intermediaries: Banks, capital markets, and investors channel savings from households to businesses for investment.",
      "Growth Impact: Economies with higher rates of capital formation tend to grow faster and achieve higher living standards."
    ],
    roleplayTips: [
      "\"Our R&D investment is capital formation—we're forgoing current profit to build intellectual capital that will generate returns for the next decade.\"",
      "\"The training program is a human capital investment; the payback period is shorter than most equipment purchases because productivity gains start immediately.\"",
      "\"Our ability to raise capital efficiently from markets gives us a lower cost of capital than private competitors, which is a structural advantage in capital-intensive projects.\""
    ]
  },

  "EC103": {
    id: "EC103",
    code: "EC:103",
    name: "Describe the concept of fiscal policy",
    definition: "Explain how government spending and taxation decisions are used to influence aggregate demand, economic output, and employment.",
    keyPoints: [
      "Expansionary Fiscal Policy: Increased government spending or tax cuts stimulate demand during recessions.",
      "Contractionary Fiscal Policy: Reduced spending or tax increases cool an overheating economy and reduce inflation.",
      "Multiplier Effect: Each dollar of government spending generates more than one dollar of economic activity through successive rounds of spending.",
      "Budget Deficits/Surpluses: Fiscal policy creates deficits when spending exceeds revenue or surpluses when revenue exceeds spending.",
      "Business Impact: Fiscal policy shifts consumer purchasing power, government contract opportunities, and the competitive cost environment."
    ],
    roleplayTips: [
      "\"The infrastructure bill is expansionary fiscal policy—it injects demand into the construction sector directly and generates multiplier effects across suppliers.\"",
      "\"Tax cuts increase disposable income for consumers, which translates to higher demand for our products—we should adjust our production forecast accordingly.\"",
      "\"Government contract revenue is more stable during downturns because fiscal policy typically expands public spending in recessions.\""
    ]
  },

  "EC104": {
    id: "EC104",
    code: "EC:104",
    name: "Explain the role of the Federal Reserve",
    definition: "Describe the functions of the U.S. central bank, including controlling the money supply, setting interest rates, and maintaining financial system stability.",
    keyPoints: [
      "Monetary Policy Tool: The Fed sets the federal funds rate target, influencing borrowing costs throughout the economy.",
      "Money Supply: Open market operations—buying and selling government securities—expand or contract the money supply.",
      "Bank Regulation: The Fed supervises and regulates banks to ensure financial system safety and soundness.",
      "Lender of Last Resort: The Fed provides emergency liquidity to banks during financial crises to prevent system collapse.",
      "Dual Mandate: The Fed is charged with achieving maximum employment and price stability—often competing objectives."
    ],
    roleplayTips: [
      "\"The Fed's rate hike signals tighter monetary policy—our floating-rate debt costs will increase, so we should look at refinancing to fixed rates now.\"",
      "\"When the Fed reduces its balance sheet through quantitative tightening, it withdraws liquidity from financial markets, which increases the cost and reduces availability of credit.\"",
      "\"Understanding the Fed's dual mandate helps you anticipate policy decisions—when inflation is high, rate hikes are likely even if unemployment is elevated.\""
    ]
  },

  "EC105": {
    id: "EC105",
    code: "EC:105",
    name: "Describe the concept of monetary policy",
    definition: "Explain how central banks use interest rate adjustments, reserve requirements, and open market operations to manage money supply and achieve macroeconomic goals.",
    keyPoints: [
      "Interest Rate Tool: Lowering rates encourages borrowing and spending; raising rates discourages them to control inflation.",
      "Open Market Operations: Buying securities injects money into the economy; selling securities withdraws it.",
      "Reserve Requirements: Minimum reserves banks must hold affect the money multiplier and overall credit creation.",
      "Transmission Mechanism: Monetary policy affects the economy through credit markets, asset prices, exchange rates, and expectations.",
      "Effectiveness Limits: Monetary policy is less effective at the zero lower bound and cannot address supply-side problems."
    ],
    roleplayTips: [
      "\"Loose monetary policy means cheap credit—this is the right time to lock in long-term financing for our capital expansion before rates normalize.\"",
      "\"The interest rate environment directly affects our customers' willingness to finance large purchases, so Fed policy is a leading indicator for our sales pipeline.\"",
      "\"Quantitative easing isn't just an academic concept—when the Fed buys assets, it pushes investors into riskier assets, which is why equity markets respond positively.\""
    ]
  },

  "EC106": {
    id: "EC106",
    code: "EC:106",
    name: "Explain the concept of inflation/deflation",
    definition: "Describe the causes and consequences of sustained rises (inflation) or falls (deflation) in the general price level of goods and services.",
    keyPoints: [
      "Demand-Pull Inflation: Prices rise when aggregate demand exceeds productive capacity.",
      "Cost-Push Inflation: Rising input costs—wages, energy, materials—push up production costs and prices.",
      "Deflation Risk: Falling prices sound positive but can trigger a deflationary spiral as consumers defer purchases.",
      "Real vs. Nominal: Inflation erodes the purchasing power of money and nominal returns; real returns are adjusted for inflation.",
      "Business Implications: Inflation affects pricing strategy, contract terms, debt management, and supplier negotiations."
    ],
    roleplayTips: [
      "\"With input cost inflation running at 8%, we need to evaluate our pricing power—can we pass costs to customers, or do we need to absorb margin compression?\"",
      "\"Our long-term contracts have CPI escalation clauses built in specifically to protect us from inflation eroding the real value of our revenue streams.\"",
      "\"Inflationary periods favor debtors—our fixed-rate debt becomes cheaper in real terms, which actually improves our capital structure position.\""
    ]
  },

  "EC107": {
    id: "EC107",
    code: "EC:107",
    name: "Describe the nature of business cycles",
    definition: "Explain the recurring pattern of expansion, peak, contraction, and trough in economic activity and how businesses can adapt to each phase.",
    keyPoints: [
      "Expansion: Rising employment, output, and consumer confidence; businesses invest and hire aggressively.",
      "Peak: Maximum output and employment; inflation pressures build as the economy operates at or above capacity.",
      "Contraction/Recession: Declining output, rising unemployment, and reduced business investment.",
      "Trough: The lowest point of the cycle before recovery begins.",
      "Cyclical Strategy: Leading indicators help businesses anticipate cycle turning points to adjust inventory, hiring, and capital plans proactively."
    ],
    roleplayTips: [
      "\"We're late in the expansion phase—leading indicators are softening, so we're building cash reserves and deferring discretionary capital projects to prepare for a potential contraction.\"",
      "\"Counter-cyclical investments in talent and capacity during recessions let us emerge from the trough with competitive advantages competitors couldn't afford to build.\"",
      "\"Our business has low cyclicality because our products are necessities—that's a deliberate portfolio choice to reduce earnings volatility through the business cycle.\""
    ]
  },

  "EC007": {
    id: "EC007",
    code: "EC:007",
    name: "Determine economic utilities created by businesses",
    definition: "Identify how businesses add value through form, time, place, possession, and information utilities that make goods and services more useful to consumers.",
    keyPoints: [
      "Form Utility: Transforming raw materials into finished products that are useful to consumers.",
      "Time Utility: Making goods available when consumers want them through inventory management and extended hours.",
      "Place Utility: Distributing goods to locations where consumers can access them conveniently.",
      "Possession Utility: Facilitating ownership transfer through financing, leasing, and payment options.",
      "Information Utility: Providing knowledge about products and services that enables informed consumer decisions."
    ],
    roleplayTips: [
      "\"Our same-day delivery creates time utility—customers pay a premium because we solve their immediacy problem better than any competitor.\"",
      "\"We added form utility by pre-assembling components the customer would have to install themselves—that manufacturing step is the core of our value-add.\"",
      "\"Our financing program creates possession utility for customers who want the product but can't purchase outright—it expands our addressable market significantly.\""
    ]
  },

  "EC065": {
    id: "EC065",
    code: "EC:065",
    name: "Explain the concept of competition",
    definition: "Describe how businesses compete for customers, resources, and market share, and how competition drives innovation, efficiency, and consumer benefit.",
    keyPoints: [
      "Price Competition: Businesses lower prices to attract customers, benefiting consumers but pressuring margins.",
      "Non-Price Competition: Differentiation through quality, features, service, and branding reduces direct price comparison.",
      "Market Structures: Competition intensity varies from perfect competition to oligopoly to monopoly.",
      "Innovation Driver: Competitive pressure forces businesses to innovate or lose market share to more efficient rivals.",
      "Consumer Benefit: Competition generally lowers prices, raises quality, and expands choice for consumers."
    ],
    roleplayTips: [
      "\"We compete on differentiation, not price—our goal is to create enough perceived value that customers don't want to compare us to lower-cost alternatives.\"",
      "\"The entry of a new competitor is actually a market validation signal—it confirms there's demand worth fighting for, and we should use it as motivation to strengthen our position.\"",
      "\"Understanding Porter's Five Forces gives you a complete picture of competitive intensity—it's not just direct rivals, it's substitutes, new entrants, and supplier/buyer power too.\""
    ]
  },

  "EC009": {
    id: "EC009",
    code: "EC:009",
    name: "Explain the concept of opportunity cost",
    definition: "Describe the value of the best alternative forgone when a decision is made, recognizing that every choice has a cost even when no money changes hands.",
    keyPoints: [
      "Real Cost of Choice: Every decision to use a resource one way means forgoing the next-best use of that resource.",
      "Implicit Costs: Opportunity costs include non-monetary foregone benefits like time, skills, and capital.",
      "Marginal Analysis: Good decisions compare the marginal benefit of an action to its opportunity cost.",
      "Sunk Cost Trap: Past expenditures are sunk costs—irrelevant to future decisions; only opportunity costs matter going forward.",
      "Strategic Application: Resource-constrained businesses must prioritize projects by opportunity cost to maximize value creation."
    ],
    roleplayTips: [
      "\"The real cost of building this feature in-house isn't just the engineering hours—it's what those engineers could be building instead, which is our highest-value opportunity cost.\"",
      "\"We're not asking whether this project makes money; we're asking whether it's the best use of our capital compared to the alternatives available to us.\"",
      "\"The sunk cost is $2 million already spent—that's irrelevant to today's decision. The question is: does the incremental investment justify the incremental return from this point forward?\""
    ]
  },

  "EC010": {
    id: "EC010",
    code: "EC:010",
    name: "Explain the concept of scarcity",
    definition: "Describe the fundamental economic problem that unlimited human wants exceed the limited resources available to satisfy them, requiring choices and trade-offs.",
    keyPoints: [
      "Unlimited Wants: Human desires for goods and services are infinite and can never be fully satisfied.",
      "Limited Resources: Land, labor, capital, and entrepreneurship are finite and cannot satisfy all wants simultaneously.",
      "Necessity of Choice: Scarcity forces individuals, businesses, and governments to make allocation decisions with trade-offs.",
      "Rationing Mechanism: Prices ration scarce resources in market economies by allocating them to those willing and able to pay.",
      "Economic Problem: All economic analysis stems from scarcity—it is why economics exists as a discipline."
    ],
    roleplayTips: [
      "\"Scarcity applies to our business too—we have limited engineering capacity, limited capital, and limited management attention, so every yes to one project is a no to another.\"",
      "\"When there's a supply shortage, prices rise to ration the scarce resource—that price signal tells us to increase production and tells consumers to reduce consumption.\"",
      "\"Our premium pricing strategy leverages perceived scarcity—limited editions and exclusive access create the psychological and economic reality of scarcity to drive demand.\""
    ]
  },

  "EC011": {
    id: "EC011",
    code: "EC:011",
    name: "Explain the concept of market structures",
    definition: "Compare the four main market structures—perfect competition, monopolistic competition, oligopoly, and monopoly—and their implications for pricing, output, and profit.",
    keyPoints: [
      "Perfect Competition: Many sellers, identical products, free entry/exit, and price-taking behavior; zero long-run economic profit.",
      "Monopolistic Competition: Many sellers with differentiated products, some pricing power, easy entry, and advertising competition.",
      "Oligopoly: Few dominant firms, high barriers to entry, strategic interdependence, and potential for price coordination.",
      "Monopoly: Single seller, no close substitutes, significant barriers to entry, and the ability to set price above marginal cost.",
      "Strategic Implications: Market structure determines the degree of pricing power, competitive intensity, and long-run profitability."
    ],
    roleplayTips: [
      "\"We're operating in an oligopoly—there are three dominant players, and price moves by any one of us are immediately matched, so we compete on service and innovation instead.\"",
      "\"Our goal is to achieve a monopolistic position in our niche through differentiation—we want customers to see our product as unique enough that price comparison is irrelevant.\"",
      "\"The high barriers to entry in this market are our moat—capital requirements, regulatory approvals, and switching costs make new competition extremely difficult.\""
    ]
  },

  "EC012": {
    id: "EC012",
    code: "EC:012",
    name: "Describe the concept of risk",
    definition: "Explain the uncertainty inherent in business decisions and how businesses identify, assess, and manage risks to protect value and achieve objectives.",
    keyPoints: [
      "Types of Risk: Business, financial, operational, market, and reputational risks each require different management strategies.",
      "Risk vs. Reward: Higher potential returns generally require accepting higher risk—the risk-return trade-off is fundamental to investing.",
      "Risk Management: Identification, assessment, mitigation, and monitoring form the cycle of effective risk management.",
      "Diversification: Spreading investments or revenue streams across multiple areas reduces concentrated exposure.",
      "Risk Transfer: Insurance, hedging, and contractual provisions can transfer risk to parties better able to bear it."
    ],
    roleplayTips: [
      "\"Our risk management framework identifies concentration risk as the top priority—45% of revenue from one customer is an existential threat if that relationship deteriorates.\"",
      "\"We hedge our currency exposure with forward contracts because FX risk isn't a risk we get paid to take—our competitive advantage is in operations, not speculation.\"",
      "\"Every strategic decision involves accepting some risks and mitigating others—the board needs to be clear about which risks we're deliberately taking and why.\""
    ]
  },

  "EC008": {
    id: "EC008",
    code: "EC:008",
    name: "Explain the concept of productivity",
    definition: "Describe how productivity—output per unit of input—drives economic growth, business competitiveness, and living standards.",
    keyPoints: [
      "Labor Productivity: Output per worker hour; increased by capital investment, technology, and human capital development.",
      "Total Factor Productivity: Efficiency gains from better technology, processes, or organizational design beyond input increases.",
      "Competitive Advantage: Higher productivity allows businesses to produce at lower cost or higher quality than competitors.",
      "Economic Growth: Rising productivity is the primary driver of long-term economic growth and rising real wages.",
      "Measurement: Productivity can be measured at the worker, department, facility, or economy-wide level."
    ],
    roleplayTips: [
      "\"Our automation investment increased output per worker by 35%—that productivity gain lets us price competitively and still improve margins.\"",
      "\"Productivity isn't just about working faster; it's about working smarter—our process redesign eliminated non-value-added steps and doubled throughput without adding headcount.\"",
      "\"The best investment we can make in productivity is training—human capital development compounds over time and drives performance improvements year after year.\""
    ]
  },

  "EC072": {
    id: "EC072",
    code: "EC:072",
    name: "Explain the nature of trade",
    definition: "Describe how voluntary exchange—both domestically and internationally—creates mutual benefit when parties trade based on comparative advantage.",
    keyPoints: [
      "Voluntary Exchange: Both parties in a trade expect to benefit; otherwise, the trade wouldn't occur.",
      "Specialization Gains: Trade allows regions and nations to specialize in what they produce most efficiently.",
      "Comparative Advantage: Even if one party is more efficient at everything, both benefit from specializing where their relative advantage is greatest.",
      "Trade Barriers: Tariffs, quotas, and regulations restrict trade, typically reducing overall economic efficiency.",
      "Global Integration: International trade increases access to markets, inputs, and ideas that drive innovation and growth."
    ],
    roleplayTips: [
      "\"Free trade expands our export markets and gives us access to lower-cost inputs—restrictions that protect one domestic sector impose costs on many others.\"",
      "\"We source components globally based on comparative advantage—it would be inefficient to produce everything domestically when specialized suppliers have significant cost and quality advantages.\"",
      "\"New tariffs on our imported materials are essentially a tax on our production costs—we need to model the impact and evaluate whether to absorb, pass through, or source domestically.\""
    ]
  },

  "EC013": {
    id: "EC013",
    code: "EC:013",
    name: "Describe the concept of gross domestic product",
    definition: "Explain GDP as the total monetary value of all final goods and services produced within a country in a given period and its use as a measure of economic output.",
    keyPoints: [
      "GDP Components: Consumption, investment, government spending, and net exports are the four components of GDP.",
      "Nominal vs. Real GDP: Nominal GDP is measured in current prices; real GDP adjusts for inflation to reflect true output changes.",
      "GDP per Capita: GDP divided by population provides a rough measure of average living standards.",
      "Growth Rate: Quarter-over-quarter GDP growth signals economic expansion; two consecutive quarters of decline signal recession.",
      "Limitations: GDP doesn't capture income distribution, environmental degradation, or informal economic activity."
    ],
    roleplayTips: [
      "\"GDP growth of 3% means the total economic pie is expanding—that generally creates a favorable environment for sales growth across most consumer-facing businesses.\"",
      "\"Real GDP is the metric that matters; if nominal GDP grew 4% but inflation was 5%, the economy actually shrank in real terms.\"",
      "\"We use GDP growth forecasts as a top-down input to our revenue planning—in economies growing above 2.5%, our historical data shows strong correlation to our category growth.\""
    ]
  },

  "EC014": {
    id: "EC014",
    code: "EC:014",
    name: "Describe the concept of unemployment",
    definition: "Explain the types of unemployment, how it is measured, and its economic and social consequences for businesses and communities.",
    keyPoints: [
      "Types: Frictional (job transitions), structural (skills mismatch), cyclical (demand-driven), and seasonal unemployment each have different causes.",
      "Unemployment Rate: Percentage of the labor force actively seeking work but unable to find it.",
      "Natural Rate: Some frictional and structural unemployment always exists; full employment doesn't mean zero unemployment.",
      "Economic Cost: High unemployment reduces consumer spending, tax revenue, and economic output.",
      "Business Talent: Low unemployment tightens labor markets, raising wages and making talent acquisition more competitive."
    ],
    roleplayTips: [
      "\"With unemployment at a 50-year low, we're competing for talent in the tightest labor market in a generation—compensation and culture are now strategic differentiators.\"",
      "\"Structural unemployment in our region means there are workers available but their skills don't match our needs—we built an apprenticeship program to close that gap.\"",
      "\"Rising unemployment signals a cyclical slowdown—we should expect softening consumer demand in discretionary categories over the next two quarters.\""
    ]
  },

  "EC015": {
    id: "EC015",
    code: "EC:015",
    name: "Describe the concept of balance of trade",
    definition: "Explain the relationship between a country's exports and imports, and the meaning and implications of trade surpluses and deficits.",
    keyPoints: [
      "Trade Balance: The difference between the value of a country's exports and its imports of goods and services.",
      "Trade Surplus: Exports exceed imports; associated with strong domestic manufacturing and saving.",
      "Trade Deficit: Imports exceed exports; indicates domestic consumption and investment exceed domestic production.",
      "Current Account: The trade balance is the primary component of the current account in the balance of payments.",
      "Business Impact: Trade imbalances affect exchange rates, domestic production, and competitive pressure from imports."
    ],
    roleplayTips: [
      "\"A trade deficit isn't automatically bad for business—it often reflects strong consumer demand and investment that draws in imports, which signals economic strength.\"",
      "\"Our export revenue is sensitive to the trade environment—new bilateral agreements could open markets, while tariff escalation could close them.\"",
      "\"The persistent trade deficit in manufactured goods reflects structural factors like relative productivity and wage levels—trade policy can shift the balance but can't eliminate the underlying economics.\""
    ]
  },

  "EC023": {
    id: "EC023",
    code: "EC:023",
    name: "Describe the nature of taxes",
    definition: "Explain the types, purposes, and economic effects of taxation, and how tax policy affects business decisions and resource allocation.",
    keyPoints: [
      "Tax Types: Income, payroll, sales, property, excise, and corporate taxes are the primary categories of taxation.",
      "Revenue Function: Taxes fund government services, public goods, and transfer payments.",
      "Incentive Effects: Tax rates and structures influence decisions about work, investment, consumption, and business organization.",
      "Tax Incidence: The economic burden of a tax falls on consumers, producers, or both depending on supply and demand elasticity.",
      "Business Strategy: Tax planning—legal optimization of tax liability—is a legitimate business function that affects after-tax returns."
    ],
    roleplayTips: [
      "\"Our entity structure decision has significant tax implications—the difference between pass-through and corporate taxation affects after-tax returns for investors by several percentage points.\"",
      "\"Tax incidence analysis shows that the proposed excise tax will fall primarily on consumers because demand is relatively inelastic in this category.\"",
      "\"Effective tax rate management through credits, deductions, and jurisdiction optimization is legal and responsible—it's part of our fiduciary duty to shareholders.\""
    ]
  },

  "EC081": {
    id: "EC081",
    code: "EC:081",
    name: "Explain the impact of international trade on business",
    definition: "Describe how global trade affects business opportunities, competition, supply chains, pricing, and strategic decisions.",
    keyPoints: [
      "Market Expansion: International trade opens access to billions of additional consumers beyond the domestic market.",
      "Import Competition: Foreign competitors can enter domestic markets with lower costs, pressuring margins and market share.",
      "Supply Chain Integration: Global sourcing provides access to specialized inputs and lower-cost materials.",
      "Currency Risk: International transactions create exposure to exchange rate fluctuations affecting revenues and costs.",
      "Regulatory Complexity: Operating across borders requires navigating tariffs, trade agreements, customs, and local regulations."
    ],
    roleplayTips: [
      "\"Our export strategy targets three high-growth emerging markets that represent $200M in addressable revenue we can't access in our saturated domestic market.\"",
      "\"The FTA with that region eliminates a 15% tariff on our exported products—that's a direct improvement to our price competitiveness and should accelerate market share growth.\"",
      "\"Global sourcing reduces our input costs by 22%, but it creates supply chain vulnerability—we're building dual-sourcing into our strategy to manage concentration risk.\""
    ]
  },

  "EC083": {
    id: "EC083",
    code: "EC:083",
    name: "Explain the nature of global trade",
    definition: "Describe the forces, institutions, and agreements that shape the movement of goods, services, capital, and ideas across national borders.",
    keyPoints: [
      "WTO Framework: The World Trade Organization establishes rules for international trade and resolves disputes between nations.",
      "Trade Agreements: Bilateral and multilateral agreements reduce barriers and create preferential trading relationships.",
      "Globalization Drivers: Advances in transportation, communications, and finance have dramatically reduced the cost of international trade.",
      "Emerging Markets: Rapid economic growth in developing countries creates major new markets and competitive dynamics.",
      "Trade Friction: Geopolitical tensions, nationalism, and inequality concerns drive periodic pushback against globalization."
    ],
    roleplayTips: [
      "\"We need to monitor the WTO dispute resolution process—a ruling in this case could affect tariff treatment for our entire product category.\"",
      "\"Our global strategy has to account for the geopolitical risk of supply chain concentration in any single country—recent disruptions proved that diversification is essential.\"",
      "\"Emerging market growth is the largest opportunity in our five-year plan—middle-class expansion in Southeast Asia represents a generational consumer demand wave.\""
    ]
  },

  "EC017": {
    id: "EC017",
    code: "EC:017",
    name: "Explain the concept of specialization",
    definition: "Describe how individuals, businesses, and nations focus on producing what they do best, then trade for other goods and services, increasing overall productivity and wealth.",
    keyPoints: [
      "Division of Labor: Breaking production into specialized tasks increases efficiency and output per worker.",
      "Comparative Advantage: Specializing in the activity with the lowest opportunity cost maximizes overall output.",
      "Interdependence: Specialization creates mutual dependence—specialists rely on trade to meet all their needs.",
      "Skill Development: Repeated practice in a specialized task builds expertise that compounds over time.",
      "Scale Effects: Specialization enables economies of scale as production volume increases in a focused area."
    ],
    roleplayTips: [
      "\"We made a strategic decision to specialize in our core competency and outsource non-core functions—this focus drives better outcomes at lower cost than trying to do everything.\"",
      "\"Our team structure is built around specialization—deep expertise in each function beats generalists when you're competing at the frontier of your industry.\"",
      "\"Comparative advantage applies to our sourcing decisions: even if we could manufacture every component, there are suppliers who specialize and produce them more efficiently than we ever could.\""
    ]
  },

  "EC082": {
    id: "EC082",
    code: "EC:082",
    name: "Describe the concept of comparative advantage",
    definition: "Explain how an entity benefits from producing goods or services where its relative efficiency is greatest, even if another entity is absolutely more efficient at everything.",
    keyPoints: [
      "Relative Efficiency: Comparative advantage is about relative cost, not absolute productivity.",
      "Mutual Gain: Both parties gain from trade when each specializes in their comparative advantage.",
      "Opportunity Cost: Comparative advantage is determined by the opportunity cost of production, not absolute cost.",
      "Application to Business: Businesses should specialize in activities where their relative competitive advantage is strongest.",
      "Global Trade Foundation: Comparative advantage is the theoretical foundation for why free trade increases global wealth."
    ],
    roleplayTips: [
      "\"Even though our software team could handle IT support, their comparative advantage is in product development—outsourcing support frees them to create much higher-value work.\"",
      "\"Comparative advantage explains why we source manufacturing offshore even though our domestic facilities are technically more productive—the relative cost difference is still favorable.\"",
      "\"Understanding our comparative advantage tells us where to compete and where to partner—we fight hard where we have a structural edge and collaborate where others can do it better.\""
    ]
  },

  "EC084": {
    id: "EC084",
    code: "EC:084",
    name: "Describe the nature of foreign exchange rates",
    definition: "Explain how currency exchange rates are determined, how they fluctuate, and their impact on international business transactions.",
    keyPoints: [
      "Exchange Rate: The price of one currency in terms of another, determined primarily by supply and demand in forex markets.",
      "Appreciation/Depreciation: A strengthening currency makes exports more expensive and imports cheaper; weakening has the opposite effect.",
      "Fixed vs. Floating: Fixed rates are pegged by government policy; floating rates are determined by market forces.",
      "Business Exposure: Companies with cross-border transactions face transaction, translation, and economic FX risk.",
      "Hedging: Forwards, options, and natural hedges reduce exposure to adverse exchange rate movements."
    ],
    roleplayTips: [
      "\"With the euro weakening against the dollar, our European revenue translates to fewer dollars—we use forward contracts to lock in the rate and protect our reported earnings.\"",
      "\"A stronger domestic currency actually helps our import costs but hurts our export competitiveness—the net effect depends on whether we're a net exporter or importer.\"",
      "\"Our natural hedge strategy matches revenue and costs in the same currency wherever possible to reduce the need for financial hedging instruments.\""
    ]
  },

  "EC018": {
    id: "EC018",
    code: "EC:018",
    name: "Explain the nature of wages",
    definition: "Describe how wages are determined in labor markets, the factors that influence wage levels, and the relationship between wages, productivity, and business performance.",
    keyPoints: [
      "Labor Market Equilibrium: Wages are set by the supply of and demand for workers with particular skills.",
      "Productivity Link: Long-run wage growth is driven by productivity growth—workers are generally paid their marginal product.",
      "Wage Differentials: Differences in skill, education, risk, geography, and experience create wage variation across jobs.",
      "Minimum Wage: Legal floors for compensation affect low-wage labor markets, employment levels, and consumer spending.",
      "Total Compensation: Wages are one component of total compensation that includes benefits, equity, flexibility, and development opportunities."
    ],
    roleplayTips: [
      "\"We benchmark compensation to the 75th percentile of our talent market—paying above average is the most cost-effective retention strategy when replacement costs are high.\"",
      "\"Wage increases tied to productivity metrics align employee and company interests—workers earn more when they generate more value.\"",
      "\"The minimum wage increase will affect our cost structure, but higher consumer income for low-wage workers also increases demand in our market—the net effect is more nuanced than the cost line alone.\""
    ]
  },

  "EC016": {
    id: "EC016",
    code: "EC:016",
    name: "Explain the nature of profit",
    definition: "Describe profit as the reward for entrepreneurial risk-taking and the signal that resources are being used to create value exceeding the cost of inputs.",
    keyPoints: [
      "Accounting Profit: Revenue minus explicit costs; the figure reported on financial statements.",
      "Economic Profit: Revenue minus both explicit and implicit (opportunity) costs; a stricter measure of value creation.",
      "Signal Function: Profit signals that resources are creating more value in their current use than in alternatives.",
      "Entrepreneurial Reward: Profit compensates entrepreneurs for bearing risk, organizing resources, and creating value.",
      "Profit Motive: The incentive of profit drives innovation, efficiency, and the discovery of new ways to meet consumer needs."
    ],
    roleplayTips: [
      "\"We're generating accounting profit but negative economic profit once you account for the opportunity cost of capital—we're not actually creating shareholder value at this margin.\"",
      "\"Profit is the scorecard and the fuel—it tells us where we're creating value, and it funds the investment needed to create more.\"",
      "\"Sustained above-average profit signals a competitive advantage; if we're earning economic profit, we can expect competitors to enter the market and compete it away unless our moat holds.\""
    ]
  },

  "EC109": {
    id: "EC109",
    code: "EC:109",
    name: "Describe the impact of government spending",
    definition: "Explain how government expenditures on goods, services, and transfer payments influence aggregate demand, resource allocation, and business activity.",
    keyPoints: [
      "Demand Stimulus: Government spending directly adds to aggregate demand and can stimulate private sector activity through the multiplier.",
      "Public Goods: Government funds national defense, infrastructure, education, and research that markets underproduct.",
      "Transfer Payments: Social security, welfare, and unemployment benefits redistribute income and stabilize consumer spending.",
      "Crowding Out: Deficit-financed government spending may compete with private investment for loanable funds.",
      "Business Opportunity: Government contracts, grants, and spending programs represent significant revenue opportunities for many businesses."
    ],
    roleplayTips: [
      "\"The federal infrastructure program is a direct revenue opportunity—we should be positioned to bid on contracts in our service areas before the funds are allocated.\"",
      "\"Government spending in healthcare is the largest and most stable demand source in our sector—policy stability matters more to our planning than economic cycles.\"",
      "\"Transfer payment recipients spend a high fraction of income on necessities—when those programs expand, we see near-immediate uplift in our value-segment sales.\""
    ]
  },

  "EC100": {
    id: "EC100",
    code: "EC:100",
    name: "Explain the concept of interest rates",
    definition: "Describe the price of borrowing money, how interest rates are determined, and their broad effects on consumer behavior, business investment, and economic growth.",
    keyPoints: [
      "Price of Credit: Interest rates are the cost of borrowing, compensating lenders for risk and the time value of money.",
      "Risk Premium: Riskier borrowers pay higher rates; safer borrowers (like governments) pay lower rates.",
      "Economic Effects: Low rates stimulate borrowing and investment; high rates restrain spending and cool inflation.",
      "Real vs. Nominal Rate: The real interest rate equals the nominal rate minus inflation; it measures the true cost of borrowing.",
      "Business Decisions: Interest rates affect capital budgeting, debt financing choices, real estate investment, and consumer financing."
    ],
    roleplayTips: [
      "\"Rising interest rates increase our cost of capital, which raises the hurdle rate for capital projects—we'll need to reject some investments that would have been approved in the low-rate environment.\"",
      "\"Consumer installment purchases are highly rate-sensitive—a 2% increase in financing rates will reduce our financed sales volume and we need to model that in the revenue forecast.\"",
      "\"We issued long-term fixed-rate debt before the rate cycle turned—that financing decision now saves us significantly compared to floating-rate alternatives.\""
    ]
  },

  "EC110": {
    id: "EC110",
    code: "EC:110",
    name: "Explain the concept of consumer spending",
    definition: "Describe how consumers allocate income on goods and services, the factors that influence spending decisions, and the role of consumer spending in driving economic activity.",
    keyPoints: [
      "GDP Share: Consumer spending represents approximately 70% of U.S. GDP, making it the dominant driver of economic growth.",
      "Income Effect: Higher incomes increase spending capacity; lower incomes or income uncertainty reduce it.",
      "Consumer Confidence: Expectations about future income and economic conditions strongly influence current spending decisions.",
      "Marginal Propensity to Consume: The fraction of an additional dollar of income that is spent rather than saved.",
      "Debt and Credit: Consumer credit expands purchasing power beyond current income but creates future spending constraints."
    ],
    roleplayTips: [
      "\"Consumer confidence data is one of our most reliable leading indicators—a confidence decline of 10 points typically precedes a 3-4% softening in our category within two quarters.\"",
      "\"The marginal propensity to consume is higher for lower-income households—stimulus directed at that segment has a larger demand multiplier effect on our volume.\"",
      "\"Consumer deleveraging after a credit expansion phase compresses spending for years—we need to factor that into our long-range revenue projections.\""
    ]
  },

  "EC045": {
    id: "EC045",
    code: "EC:045",
    name: "Describe the concept of income distribution",
    definition: "Explain how total income in an economy is divided among individuals and groups, the measures used to assess inequality, and the implications for businesses and policy.",
    keyPoints: [
      "Gini Coefficient: A statistical measure of income inequality ranging from 0 (perfect equality) to 1 (perfect inequality).",
      "Income Quintiles: Dividing the population into five equal groups by income to analyze distribution patterns.",
      "Causes of Inequality: Skill differences, education, technology adoption, globalization, and policy all affect income distribution.",
      "Business Implications: Income distribution shapes market segmentation—bifurcated markets require different strategies for premium and value segments.",
      "Policy Tools: Progressive taxation, minimum wage, education investment, and transfer payments are used to address income inequality."
    ],
    roleplayTips: [
      "\"Income polarization is reshaping our market—growth is concentrated at the premium and value extremes, while the middle is being squeezed, so our portfolio strategy needs to reflect that reality.\"",
      "\"Our target customer is in the top income quintile—that segment has seen the strongest real income growth and has the spending power for our premium positioning.\"",
      "\"Understanding income distribution in our markets helps us size addressable market accurately—applying average income assumptions to a highly unequal market leads to significant forecast errors.\""
    ]
  },

  "EC111": {
    id: "EC111",
    code: "EC:111",
    name: "Explain the nature of economic sanctions",
    definition: "Describe how governments use economic restrictions—including trade embargoes, asset freezes, and investment bans—to achieve foreign policy objectives.",
    keyPoints: [
      "Types: Export controls, import bans, financial sanctions, travel restrictions, and asset freezes are common sanction tools.",
      "Policy Purpose: Sanctions aim to change behavior of targeted countries, entities, or individuals through economic pressure.",
      "Business Risk: Companies face severe legal and reputational consequences for violating sanctions programs.",
      "OFAC Compliance: The U.S. Treasury's Office of Foreign Assets Control administers and enforces economic sanctions.",
      "Extraterritorial Reach: U.S. sanctions can apply to foreign companies doing business with sanctioned parties using U.S. goods, technology, or financial systems."
    ],
    roleplayTips: [
      "\"Our export compliance team screens every transaction against the OFAC SDN list—a single violation can result in criminal penalties and loss of export privileges.\"",
      "\"The new sanctions on that country's financial sector effectively close off U.S. dollar clearing, which makes business with entities there extremely high-risk.\"",
      "\"Sanctions exposure has to be part of our market entry due diligence—the last thing we want is to build a supply chain that becomes illegal to operate overnight.\""
    ]
  },

  "EC112": {
    id: "EC112",
    code: "EC:112",
    name: "Describe the impact of technology on business",
    definition: "Explain how technological innovation transforms business models, competitive dynamics, productivity, and the nature of work.",
    keyPoints: [
      "Disruption: New technologies can render existing products obsolete and destroy incumbents who fail to adapt.",
      "Productivity Gains: Automation, AI, and digital tools increase output per worker and reduce operating costs.",
      "New Business Models: Technology enables new ways to create, deliver, and capture value (e.g., platform businesses, subscription models).",
      "Data as Asset: Digital businesses generate data that can be used to improve products, personalize offerings, and create competitive advantages.",
      "Workforce Transformation: Technology changes the skills demanded in the labor market, requiring continuous learning and adaptation."
    ],
    roleplayTips: [
      "\"AI adoption in our operations isn't just a cost-reduction play—it's a capability-building investment that will determine whether we're competitive five years from now.\"",
      "\"The platform business model our competitor adopted fundamentally changed the economics of the industry—we need to evaluate whether our current model can compete or whether we need to transform.\"",
      "\"Technology is our biggest productivity lever and our biggest disruption risk simultaneously—the companies that thrive will be the ones that use it before it's used against them.\""
    ]
  },

  "EC113": {
    id: "EC113",
    code: "EC:113",
    name: "Explain the concept of entrepreneurship in economics",
    definition: "Describe the entrepreneur's role as the fourth factor of production that identifies opportunities, organizes resources, bears risk, and drives innovation in a market economy.",
    keyPoints: [
      "Opportunity Recognition: Entrepreneurs identify unmet needs, inefficiencies, and gaps between current reality and potential.",
      "Risk-Bearing: Entrepreneurs accept uncertainty and financial risk in exchange for the potential of profit.",
      "Innovation Driver: Entrepreneurial activity introduces new products, processes, and business models that advance productivity.",
      "Creative Destruction: Entrepreneurship destroys outdated industries and businesses while creating new ones.",
      "Economic Growth: High rates of entrepreneurship correlate with job creation, innovation, and GDP growth."
    ],
    roleplayTips: [
      "\"The entrepreneurial insight here isn't just a new product—it's a new business model that changes the cost structure for the entire category.\"",
      "\"Every entrepreneurial venture requires accepting genuine risk; the expected return has to be commensurate with the risk we're taking on relative to safer alternatives.\"",
      "\"Schumpeter's creative destruction is happening in real time in our industry—the right response is to be the disruptor, not the disrupted.\""
    ]
  },

  "EC114": {
    id: "EC114",
    code: "EC:114",
    name: "Describe the nature of nonprofit organizations",
    definition: "Explain the purpose, structure, funding, and economic role of organizations that operate for social benefit rather than private profit.",
    keyPoints: [
      "Tax Status: Qualifying nonprofits receive 501(c)(3) exemption from federal income tax and can receive tax-deductible donations.",
      "Mission Focus: Nonprofits exist to advance a social, educational, religious, or charitable mission rather than generate profit.",
      "Revenue Sources: Grants, donations, membership fees, program revenue, and government contracts fund nonprofit operations.",
      "Governance: Nonprofits are governed by volunteer boards of directors with fiduciary responsibilities.",
      "Economic Role: Nonprofits fill gaps left by markets and government, providing public goods and services in health, education, arts, and social services."
    ],
    roleplayTips: [
      "\"Our foundation partnership creates shared value—they bring mission credibility and donor relationships; we provide operational capacity and in-kind contributions.\"",
      "\"Nonprofits still need to operate efficiently and sustainably—mission-driven doesn't mean financially undisciplined; overhead ratios and program impact metrics matter to donors.\"",
      "\"The corporate giving program generates tax deductions, employee engagement, and community goodwill—it's a triple-return investment that belongs in our ESG strategy.\""
    ]
  },

  "EC115": {
    id: "EC115",
    code: "EC:115",
    name: "Explain the concept of economic equity",
    definition: "Describe the principle of fairness in the distribution of economic resources, opportunities, and outcomes, and the tension between equity and efficiency in economic policy.",
    keyPoints: [
      "Equity vs. Equality: Equality means same treatment; equity means fair treatment accounting for different needs and circumstances.",
      "Horizontal Equity: People in similar situations should be treated similarly by the economic system.",
      "Vertical Equity: People with greater ability to pay should contribute more to public goods (progressive taxation).",
      "Efficiency Trade-off: Policies that improve equity often reduce efficiency incentives; finding the right balance is a core policy challenge.",
      "Business Role: Companies can advance economic equity through fair hiring, pay equity, supplier diversity, and community investment."
    ],
    roleplayTips: [
      "\"Pay equity analysis isn't just a compliance exercise—unexplained wage gaps represent both a legal risk and a talent retention problem we need to address.\"",
      "\"Our supplier diversity program isn't charity—it's a strategic decision to broaden our supply base and develop competitive vendors while advancing economic equity.\"",
      "\"The equity-efficiency trade-off is real, but false dichotomies are unhelpful—the evidence suggests that more equitable economies often also achieve stronger long-run growth.\""
    ]
  },

  "EC116": {
    id: "EC116",
    code: "EC:116",
    name: "Describe the nature of income inequality",
    definition: "Explain the causes and consequences of growing disparities in income and wealth distribution, and strategies for businesses and policymakers to address inequality.",
    keyPoints: [
      "Skill Premium: Technological change increasingly rewards high-skill workers, widening the gap with low-skill wages.",
      "Capital vs. Labor: Returns to capital have grown faster than returns to labor in recent decades, concentrating wealth at the top.",
      "Geographic Concentration: Economic opportunity and income are increasingly concentrated in a few metropolitan areas.",
      "Social Mobility: High inequality can reduce intergenerational social mobility, perpetuating disadvantage.",
      "Business Risk: Extreme inequality can reduce consumer demand, increase political instability, and create reputational risk for businesses."
    ],
    roleplayTips: [
      "\"Income polarization in our core markets means the middle segment is shrinking—we've repositioned our portfolio toward premium and value tiers to follow where the spending is.\"",
      "\"Addressing income inequality isn't just good ethics—it's good economics; broader middle-class prosperity expands the consumer base that drives our revenue growth.\"",
      "\"Investing in workforce development and above-market wages in our lowest-paid jobs reduces turnover costs and builds community goodwill—it's a business case, not just a social case.\""
    ]
  },

  "EC140": {
    id: "EC140",
    code: "EC:140",
    name: "Explain the concept of sustainable business practices",
    definition: "Describe how businesses can meet current economic, social, and environmental needs without compromising the ability of future generations to meet their own needs.",
    keyPoints: [
      "Triple Bottom Line: Sustainable businesses balance financial performance with social responsibility and environmental stewardship.",
      "ESG Framework: Environmental, Social, and Governance metrics provide a framework for measuring sustainability performance.",
      "Long-term Value: Sustainable practices reduce regulatory, reputational, and operational risks while building long-term competitive advantage.",
      "Circular Economy: Designing products for reuse, repair, and recycling reduces resource consumption and waste.",
      "Investor Demand: ESG investing has grown rapidly, making sustainability performance relevant to capital access and cost."
    ],
    roleplayTips: [
      "\"Our sustainability roadmap isn't a cost center—reducing energy consumption and waste directly improves our margin while reducing our regulatory exposure.\"",
      "\"ESG performance now affects our cost of capital; institutional investors apply sustainability screens, so poor ESG ratings can increase our financing costs.\"",
      "\"Sustainable supply chain practices reduce the risk of disruption from regulatory changes, resource scarcity, and reputational events that hit our suppliers.\""
    ]
  },

  "EC141": {
    id: "EC141",
    code: "EC:141",
    name: "Describe the nature of the circular economy",
    definition: "Explain the economic model that eliminates waste by keeping resources in use through reuse, remanufacturing, and recycling, in contrast to the traditional linear take-make-dispose model.",
    keyPoints: [
      "Linear vs. Circular: Linear economies extract, produce, use, and discard; circular economies recover and regenerate materials.",
      "Design for Circularity: Products designed for disassembly, repair, and material recovery enable circular business models.",
      "Business Models: Product-as-a-service, take-back programs, and remanufacturing create revenue from the circular flow.",
      "Resource Efficiency: Circularity reduces dependence on virgin resource extraction, lowering costs and supply chain risk.",
      "Regulatory Trend: Extended producer responsibility laws and sustainability regulations are accelerating the shift to circular models."
    ],
    roleplayTips: [
      "\"Our product leasing model is a circular economy play—we retain ownership, recover products at end-of-life, and remanufacture components, which reduces material costs and creates a closed-loop supply chain.\"",
      "\"The circular economy isn't just an environmental story—recovering and reusing materials reduces our exposure to commodity price volatility and supply disruptions.\"",
      "\"Extended producer responsibility regulations are coming in our key markets—building circularity into product design now is cheaper than retrofitting our supply chain after the law changes.\""
    ]
  },


  // ── CR: Customer Relations ────────────────────────────────────────────────

  "CR003": {
    id: "CR003",
    code: "CR:003",
    name: "Reinforce service orientation through communication",
    definition: "Use verbal and non-verbal communication to consistently express a genuine commitment to serving customers and meeting their needs.",
    keyPoints: [
      "Tone Alignment: Verbal and non-verbal cues must align to convey authentic service commitment to customers.",
      "Empathy Language: Use phrases that acknowledge customer feelings and demonstrate understanding of their perspective.",
      "Positive Framing: Focus on what you can do rather than limitations, to keep interactions solution-oriented.",
      "Active Listening: Demonstrate attentiveness through eye contact, nodding, paraphrasing, and asking clarifying questions.",
      "Consistency: Service orientation must be communicated consistently across every touchpoint, not just face-to-face."
    ],
    roleplayTips: [
      "\"What I'm hearing is that timing is the priority for you—let me see exactly what we can do to meet that deadline and I'll come back to you with a concrete plan.\"",
      "\"I completely understand why that situation was frustrating, and I want to make sure we resolve it in a way that works for you.\"",
      "\"My goal is to make sure you leave this interaction with everything you need—let's walk through this together until we have it sorted out.\""
    ]
  },

  "CR004": {
    id: "CR004",
    code: "CR:004",
    name: "Respond to customer inquiries",
    definition: "Address customer questions, requests, and concerns in a timely, accurate, and helpful manner that builds trust and satisfaction.",
    keyPoints: [
      "Timeliness: Prompt responses signal that the customer's time is valued and reduce frustration.",
      "Accuracy: Provide correct information; if uncertain, verify before responding rather than guessing.",
      "Completeness: Address all aspects of the inquiry rather than only the easiest portion.",
      "Tone: Maintain a professional, helpful tone regardless of the complexity or nature of the inquiry.",
      "Follow-Through: Confirm that the response resolved the customer's issue and offer further assistance."
    ],
    roleplayTips: [
      "\"That's a great question—I want to make sure I give you the correct information, so let me pull up your account details to verify before I answer.\"",
      "\"I've addressed your main question about pricing, but I noticed you also asked about delivery timelines—let me cover that as well so you have the complete picture.\"",
      "\"Is there anything else I can help you with today, or does that answer everything you needed?\""
    ]
  },

  "CR029": {
    id: "CR029",
    code: "CR:029",
    name: "Deliver quality customer service",
    definition: "Consistently meet or exceed customer expectations by providing reliable, responsive, empathetic, and competent service at every interaction.",
    keyPoints: [
      "RATER Model: Reliability, Assurance, Tangibles, Empathy, and Responsiveness are the five dimensions of service quality.",
      "Reliability: Deliver on promises consistently; do what you say you will do, every time.",
      "Responsiveness: Be willing and able to help customers promptly, especially when issues arise.",
      "Empathy: Demonstrate genuine care for the customer's individual situation and needs.",
      "Recovery: How a service failure is handled often determines customer loyalty more than whether failure occurred at all."
    ],
    roleplayTips: [
      "\"Quality service isn't just about the transaction—it's about making every customer feel that their business matters and that we'll stand behind our commitments.\"",
      "\"When a service failure occurs, the recovery is the moment that defines the customer relationship—a well-handled recovery can actually increase loyalty over a flawless experience.\"",
      "\"I set a personal standard of responding to every customer inquiry within the same business day—responsiveness is one of the most controllable dimensions of service quality.\""
    ]
  },

  "CR005": {
    id: "CR005",
    code: "CR:005",
    name: "Determine customer needs",
    definition: "Use questioning, listening, and observation to understand what customers want, need, and value in order to provide solutions that truly satisfy them.",
    keyPoints: [
      "Open-Ended Questions: Broad questions encourage customers to share their needs, preferences, and concerns in their own words.",
      "Probing Questions: Follow-up questions clarify vague responses and uncover deeper or unstated needs.",
      "Active Listening: Give undivided attention to what customers say and don't say, including body language.",
      "Need Categories: Distinguish between stated needs (what they say), actual needs (what they really want), and unstated needs (expected but unspoken).",
      "Confirmation: Summarize your understanding of the customer's needs before presenting solutions."
    ],
    roleplayTips: [
      "\"Before I show you any options, help me understand what's most important to you in this decision—is it price, timeline, reliability, or something else?\"",
      "\"When you say you need a 'better solution,' can you tell me more about what's not working with the current approach? That'll help me find the right fit for you.\"",
      "\"Let me make sure I understand correctly—you need it delivered by the 15th, within a $5,000 budget, and the quality has to match your current supplier. Is that right?\""
    ]
  },

  "CR006": {
    id: "CR006",
    code: "CR:006",
    name: "Handle difficult customers",
    definition: "Manage challenging customer interactions—including complaints, frustration, and unreasonable demands—professionally and constructively to reach a satisfactory resolution.",
    keyPoints: [
      "Stay Calm: Emotional regulation is the first step; a calm, professional demeanor de-escalates most situations.",
      "Acknowledge Feelings: Validating the customer's frustration shows empathy and reduces defensiveness.",
      "Focus on Solutions: Redirect from the complaint to what can be done to resolve the issue.",
      "Boundaries: Set clear, professional boundaries when behavior becomes abusive without abandoning the goal of resolution.",
      "Document: Record difficult interactions to identify patterns, protect the business, and improve processes."
    ],
    roleplayTips: [
      "\"I understand this situation has been frustrating, and I take that seriously—let me focus all my attention right now on finding a resolution that works for you.\"",
      "\"I hear your concern and I want to help you, but I need us to work together constructively to find a solution—can we focus on what outcome would satisfy you?\"",
      "\"I can't reverse that policy, but here's what I can do—let me walk you through the options available to make this right.\""
    ]
  },

  "CR019": {
    id: "CR019",
    code: "CR:019",
    name: "Build and maintain customer/client relationships",
    definition: "Develop long-term, trust-based relationships with customers and clients through consistent communication, follow-through, and genuine interest in their success.",
    keyPoints: [
      "Trust Foundation: Relationships are built on reliability—doing what you say, when you say you'll do it.",
      "Personalization: Remembering preferences, history, and individual circumstances signals that you value the specific relationship.",
      "Proactive Communication: Reach out with relevant information before customers have to ask.",
      "Value Delivery: Continuously demonstrate that the relationship produces tangible benefits for the customer.",
      "Longevity: Long-term relationships have compounding value—loyal customers buy more, refer others, and are more forgiving of mistakes."
    ],
    roleplayTips: [
      "\"I check in with my top accounts quarterly even when there's no transaction pending—the relationship has to be about more than the sale for customers to stay loyal.\"",
      "\"I noticed your contract renewal is coming up in 90 days—I wanted to reach out proactively to discuss how we can improve the terms based on what we've learned about your needs this year.\"",
      "\"Our relationship over the last three years gives me a strong understanding of your business—that context is part of the value I bring that a new vendor can't match.\""
    ]
  },

  "CR007": {
    id: "CR007",
    code: "CR:007",
    name: "Handle customer/client complaints",
    definition: "Receive, investigate, and resolve customer complaints in a way that restores satisfaction, preserves the relationship, and identifies systemic improvements.",
    keyPoints: [
      "Listen First: Let customers fully express their complaint before responding; don't interrupt or defend.",
      "Empathize: Acknowledge the impact of the problem on the customer without immediately debating fault.",
      "Investigate: Gather the facts needed to understand what went wrong before proposing solutions.",
      "Resolve: Offer a concrete solution that addresses the customer's core concern.",
      "Follow Up: Check that the resolution was satisfactory and the issue is fully closed."
    ],
    roleplayTips: [
      "\"Thank you for bringing this to my attention—I want to understand exactly what happened before we talk about how to fix it. Can you walk me through the issue from the beginning?\"",
      "\"I apologize that this happened—regardless of how it occurred, it shouldn't have, and I'm going to make it right.\"",
      "\"I'll follow up with you by end of day to confirm the credit has been applied and everything is resolved—I want to make sure this is completely taken care of.\""
    ]
  },

  "CR030": {
    id: "CR030",
    code: "CR:030",
    name: "Provide post-sales service",
    definition: "Deliver support, follow-up, and value-added service after a sale to ensure customer satisfaction, drive repeat business, and generate referrals.",
    keyPoints: [
      "Onboarding: Help customers get maximum value from their purchase quickly through training and implementation support.",
      "Check-In Calls: Proactive follow-up demonstrates care and catches problems before they become complaints.",
      "Issue Resolution: Address post-sale problems promptly and generously to protect the relationship.",
      "Upsell/Cross-sell: Post-sale interactions create natural opportunities to identify additional needs.",
      "Referral Generation: Satisfied customers are the most credible source of new business referrals."
    ],
    roleplayTips: [
      "\"I'm calling to check in now that you've had two weeks with the new system—how is onboarding going, and is there anything we can do to help your team get up to speed faster?\"",
      "\"Post-sale service is where loyalty is actually built—the transaction is just the beginning of the relationship.\"",
      "\"Based on how you're using the platform, I think there are two features you haven't activated yet that would significantly improve your workflow—can I walk you through them?\""
    ]
  },

  "CR009": {
    id: "CR009",
    code: "CR:009",
    name: "Interpret business policies to customers/clients",
    definition: "Explain organizational policies clearly and positively to customers, helping them understand the rationale while maintaining a service-oriented approach.",
    keyPoints: [
      "Clarity: Use plain language to explain policies without jargon or bureaucratic phrasing.",
      "Rationale: Where appropriate, explain why a policy exists to help customers understand and accept it.",
      "Empathy: Acknowledge when a policy is inconvenient for the customer while maintaining the boundary.",
      "Alternatives: Offer any available alternatives or exceptions within your authority.",
      "Consistency: Apply policies uniformly to avoid perceptions of unfairness."
    ],
    roleplayTips: [
      "\"Our 30-day return policy exists to protect both customers and the business—it ensures items are returnable in resellable condition, which keeps our prices fair for everyone.\"",
      "\"I understand that policy is frustrating in your situation. Unfortunately, it's not something I can override, but here's what I can offer within my authority to make this work for you.\"",
      "\"Let me explain how the policy applies to your specific situation—there are some nuances that might actually work in your favor.\""
    ]
  },

  "CR010": {
    id: "CR010",
    code: "CR:010",
    name: "Discuss the importance of customer satisfaction",
    definition: "Explain why meeting and exceeding customer expectations is critical to business success, profitability, and sustainable growth.",
    keyPoints: [
      "Revenue Impact: Satisfied customers buy more, buy more often, and resist competitive overtures.",
      "Referral Value: Loyal customers generate referrals that are more credible and cost-effective than advertising.",
      "Retention Economics: Retaining customers costs significantly less than acquiring new ones.",
      "Reputation: Customer satisfaction drives online reviews, word-of-mouth, and brand reputation at scale.",
      "Lifetime Value: Customer lifetime value—the total revenue from a long-term customer—dwarfs the value of a single transaction."
    ],
    roleplayTips: [
      "\"A satisfied customer is worth 10x their first purchase over their lifetime—and an unsatisfied one shares their experience with far more people than a satisfied one ever will.\"",
      "\"Our NPS score is a leading indicator of future revenue growth—every point improvement correlates to measurable improvement in retention and referral rates.\"",
      "\"Customer satisfaction isn't a soft metric—it's the most reliable predictor of whether our revenue base is growing or eroding.\""
    ]
  },

  "CR001": {
    id: "CR001",
    code: "CR:001",
    name: "Explain the nature of positive customer relations",
    definition: "Describe how consistent, customer-focused behavior builds the trust and loyalty that are the foundation of long-term business success.",
    keyPoints: [
      "Customer Focus: Orienting every business decision around customer needs and expectations.",
      "Trust: Built through consistent reliability, honesty, and follow-through on commitments.",
      "Emotional Connection: Customers who feel valued as individuals develop emotional loyalty beyond rational calculation.",
      "Mutual Value: Positive relationships create value for both customer and business through ongoing exchange.",
      "Culture Foundation: Positive customer relations must be embedded in organizational culture, not just individual behavior."
    ],
    roleplayTips: [
      "\"Positive customer relations aren't a department—they're an organizational philosophy where every employee understands that customer trust is the company's most valuable asset.\"",
      "\"The most powerful retention tool is making customers feel genuinely valued, not just processed—that distinction is what separates great service organizations from average ones.\"",
      "\"I approach every customer interaction as a trust-building opportunity—the relationship is more valuable than any individual transaction.\""
    ]
  },

  "CR002": {
    id: "CR002",
    code: "CR:002",
    name: "Demonstrate a customer service mindset",
    definition: "Exhibit attitudes, behaviors, and habits that consistently place customer needs at the center of every decision and interaction.",
    keyPoints: [
      "Proactive Mindset: Anticipate customer needs rather than waiting for problems to arise.",
      "Ownership: Take personal responsibility for customer outcomes rather than deflecting or blaming systems.",
      "Adaptability: Adjust communication style and approach to meet different customer personalities and needs.",
      "Pride in Service: View excellent service as a professional accomplishment worthy of genuine effort.",
      "Continuous Improvement: Seek feedback and constantly look for ways to serve customers better."
    ],
    roleplayTips: [
      "\"A customer service mindset means asking 'what does this customer actually need?' before jumping to solutions—the presenting request isn't always the real need.\"",
      "\"I own every customer interaction I'm part of—if something went wrong upstream, I'm still the person responsible for making it right from the customer's perspective.\"",
      "\"I treat every interaction as if the customer is telling 50 friends about it—because in the age of social media, they very well might be.\""
    ]
  },

  "CR016": {
    id: "CR016",
    code: "CR:016",
    name: "Identify company's brand promise",
    definition: "Articulate the specific commitment an organization makes to customers about the experience and value they can consistently expect from every interaction with the brand.",
    keyPoints: [
      "Brand Promise Definition: The explicit or implicit commitment that shapes customer expectations about the brand experience.",
      "Differentiation: The brand promise should articulate what makes the company distinctly valuable compared to alternatives.",
      "Internal Alignment: Every employee must understand and deliver the brand promise in their role.",
      "Trust Source: When the brand promise is consistently kept, it builds trust; when broken, it damages loyalty.",
      "Customer Decision: The brand promise is the reason customers choose you—it must be meaningful, believable, and deliverable."
    ],
    roleplayTips: [
      "\"Our brand promise is that every customer gets the same premium experience regardless of which location or channel they use—consistency is the foundation of our brand trust.\"",
      "\"When I make a commitment to a customer, I'm delivering on the brand promise personally—my behavior is the brand in that moment.\"",
      "\"A brand promise that can't be delivered consistently is worse than no promise at all—it creates expectations you're guaranteed to break.\""
    ]
  },

  "CR017": {
    id: "CR017",
    code: "CR:017",
    name: "Demonstrate responsiveness to customer needs",
    definition: "Act quickly and effectively when customers express needs, requests, or concerns, demonstrating that their issues are treated with urgency and priority.",
    keyPoints: [
      "Speed Matters: Response time is one of the most significant drivers of customer satisfaction ratings.",
      "Accessibility: Being available through preferred channels when customers need assistance.",
      "Action Orientation: Move from acknowledgment to action promptly; don't just acknowledge, resolve.",
      "Prioritization: Triage customer needs by urgency and impact to allocate attention effectively.",
      "Communication: Keep customers informed about progress even when a full resolution isn't immediately available."
    ],
    roleplayTips: [
      "\"I'm going to resolve your issue before I do anything else today—this is my priority right now.\"",
      "\"I can't give you a full answer in the next five minutes, but I can tell you exactly what I'm doing to get it and when you'll hear from me—I'll have an update for you by 3pm.\"",
      "\"Our standard response time is 24 hours, but for your situation I'm treating this as urgent—you'll hear from me before end of business today.\""
    ]
  },

  "CR018": {
    id: "CR018",
    code: "CR:018",
    name: "Explain the importance of connecting with customer",
    definition: "Describe how genuine personal connection—beyond transactional efficiency—creates emotional loyalty that protects customer relationships from competitive threats.",
    keyPoints: [
      "Beyond Transactions: Customers who feel personally connected are significantly less price-sensitive and more loyal.",
      "Personalization: Using customer names, remembering preferences, and acknowledging history creates connection.",
      "Authentic Interest: Genuine curiosity about the customer as a person—not just their purchase—builds rapport.",
      "Emotional Loyalty: Emotionally connected customers have three times the lifetime value of satisfied customers.",
      "Memory Creation: Memorable experiences—both positive surprises and graceful recovery—create the stories customers tell others."
    ],
    roleplayTips: [
      "\"I remember you mentioned last time that you were renovating your office—how did that turn out? I'd love to hear whether the solution we helped with worked well in the new space.\"",
      "\"Customer connection is what turns a transaction into a relationship—the goal is for customers to choose us not just because we're good, but because they trust us personally.\"",
      "\"The moment a customer feels like a number rather than a person, you've lost the emotional loyalty that protects the relationship—personalization at every touchpoint is non-negotiable.\""
    ]
  },

  // ── EI: Emotional Intelligence ────────────────────────────────────────────

  "EI001": {
    id: "EI001",
    code: "EI:001",
    name: "Describe the nature of emotional intelligence",
    definition: "Explain the ability to recognize, understand, manage, and effectively use emotions in oneself and others to guide thinking and behavior in professional contexts.",
    keyPoints: [
      "Five Domains: Self-awareness, self-regulation, motivation, empathy, and social skills are the core components of EI.",
      "Self-Awareness: Recognizing your own emotions and their impact on your thinking and behavior.",
      "Self-Regulation: Managing disruptive emotions and impulses to maintain professional effectiveness.",
      "Empathy: Understanding others' emotional states and perspectives to build more effective relationships.",
      "Business Value: High-EI leaders build stronger teams, navigate conflict more effectively, and achieve better organizational outcomes."
    ],
    roleplayTips: [
      "\"Emotional intelligence is what separates technically competent professionals from truly effective leaders—the ability to read a room and respond appropriately is a learnable, developable skill.\"",
      "\"My self-awareness practice means I recognize when I'm frustrated before it affects my communication—that pause between stimulus and response is where professional effectiveness lives.\"",
      "\"Understanding the emotional dynamics in a negotiation gives you information that pure logic misses—knowing when the other party feels unheard is as important as knowing their position.\""
    ]
  },

  "EI016": {
    id: "EI016",
    code: "EI:016",
    name: "Identify ones strengths and weaknesses",
    definition: "Conduct honest self-assessment to understand the capabilities you can leverage and the areas requiring development to achieve professional goals.",
    keyPoints: [
      "Honest Assessment: Effective self-assessment requires intellectual honesty that overcomes ego and self-deception.",
      "Leverage Strengths: High performers maximize time spent in their areas of greatest strength.",
      "Address Weaknesses: Identify gaps that limit performance and develop targeted improvement plans.",
      "Feedback Sources: 360-degree feedback, performance data, and reflective practice provide more accurate assessment than self-report alone.",
      "Dynamic Profile: Strengths and weaknesses change over time with experience, learning, and changing role requirements."
    ],
    roleplayTips: [
      "\"My greatest professional strength is analytical problem-solving under ambiguity—I'm least effective in highly political environments, which is something I'm actively developing.\"",
      "\"I regularly ask for direct feedback from colleagues who will tell me the truth rather than what I want to hear—accurate self-knowledge is a competitive advantage.\"",
      "\"Knowing my weaknesses isn't about dwelling on deficits; it's about making smart decisions about where to invest development time and where to partner with people who complement my gaps.\""
    ]
  },

  "EI017": {
    id: "EI017",
    code: "EI:017",
    name: "Assess personal emotional intelligence",
    definition: "Evaluate your own emotional intelligence across key dimensions to identify development priorities and track growth over time.",
    keyPoints: [
      "Baseline Assessment: Validated EI assessments provide a structured starting point for development planning.",
      "Behavioral Evidence: Look at patterns in how you handle stress, conflict, feedback, and ambiguity as data points.",
      "Impact Analysis: Assess how your emotional responses affect relationships, decisions, and professional outcomes.",
      "Development Planning: Convert assessment insights into specific behavioral goals with measurable indicators.",
      "Ongoing Practice: EI is a skill that improves with deliberate practice and honest reflection over time."
    ],
    roleplayTips: [
      "\"I assessed my EI and found that empathy is a relative strength but self-regulation under pressure is a development area—I've built specific practices to close that gap.\"",
      "\"The most useful EI assessment isn't a questionnaire; it's honest reflection on situations where your emotional response didn't serve you well and what you'd do differently.\"",
      "\"I track my EI development by reviewing difficult interactions quarterly and asking: did I respond or react? That distinction is the core of emotional regulation.\""
    ]
  },

  "EI002": {
    id: "EI002",
    code: "EI:002",
    name: "Demonstrate self-control",
    definition: "Manage impulsive emotions, maintain composure under pressure, and respond thoughtfully rather than reactively in challenging professional situations.",
    keyPoints: [
      "Pause Practice: Creating a brief gap between trigger and response enables thoughtful rather than reactive behavior.",
      "Stress Management: Physical and mental practices that reduce baseline stress increase the capacity for self-control.",
      "Professional Composure: Maintaining calm under pressure is a leadership signal that builds team confidence.",
      "Impulse Awareness: Recognizing emotional triggers before they escalate prevents counterproductive reactions.",
      "Recovery: When self-control lapses, acknowledging it quickly and returning to professional behavior minimizes damage."
    ],
    roleplayTips: [
      "\"When I feel my frustration rising in a difficult conversation, I've learned to slow down my speech and take a breath—that physical change creates the mental space to respond thoughtfully.\"",
      "\"I never respond to a tense email in the first five minutes of reading it—I let the initial emotional reaction pass and then draft a response that addresses the substance, not the tone.\"",
      "\"Self-control in a negotiation means not reacting visibly to a surprise offer—maintaining a neutral expression and pausing to think is itself a negotiating asset.\""
    ]
  },

  "EI126": {
    id: "EI126",
    code: "EI:126",
    name: "Explain the use of feedback for personal growth",
    definition: "Describe how seeking, receiving, and acting on honest feedback accelerates professional development and helps close the gap between self-perception and actual performance.",
    keyPoints: [
      "Feedback Mindset: Treating feedback as information rather than criticism enables learning rather than defensiveness.",
      "Active Seeking: Proactively asking for feedback rather than waiting for performance reviews accelerates development.",
      "Specificity: The most useful feedback is specific, behavioral, and actionable—not vague or character-based.",
      "Selective Use: Evaluate feedback critically; consider the source, context, and pattern before acting on it.",
      "Closing the Loop: Following up with feedback givers demonstrates that you valued their input and builds a culture of candor."
    ],
    roleplayTips: [
      "\"After every major presentation, I ask two or three people for specific feedback on what landed and what I should improve—I've learned more from those five-minute conversations than from any training program.\"",
      "\"The best feedback I ever received was uncomfortable to hear, but it changed a behavior pattern that was limiting my career—I've tried to cultivate relationships where people will tell me the truth.\"",
      "\"I close the feedback loop by telling people what I did with their input—it signals that their time was well spent and makes them more likely to give me candid feedback in the future.\""
    ]
  },

  "EI018": {
    id: "EI018",
    code: "EI:018",
    name: "Respect the privacy of others",
    definition: "Demonstrate awareness of and adherence to personal, professional, and legal boundaries around private information in all business interactions.",
    keyPoints: [
      "Information Boundaries: Recognize what information is private and should not be shared without explicit consent.",
      "Professional Discretion: Handle sensitive information about colleagues, clients, and business matters with appropriate confidentiality.",
      "Legal Requirements: Privacy laws like HIPAA, GDPR, and CCPA create specific obligations for handling personal data.",
      "Trust Foundation: Respecting privacy builds the trust that makes professional relationships effective.",
      "Digital Privacy: Apply privacy standards to digital communications, data storage, and social media activity."
    ],
    roleplayTips: [
      "\"Client information shared with me in confidence stays in confidence—I would never share it with colleagues who don't have a business need to know, let alone externally.\"",
      "\"Our data handling practices comply with GDPR requirements—customer consent and data minimization aren't just legal requirements, they're trust-building practices.\"",
      "\"If a colleague shares personal information with me, I treat it as private by default—professional discretion means I don't discuss others' personal situations without their consent.\""
    ]
  },

  "EI023": {
    id: "EI023",
    code: "EI:023",
    name: "Show empathy for others",
    definition: "Demonstrate the ability to understand and share the feelings of others, communicating care and consideration for their emotional experience.",
    keyPoints: [
      "Cognitive Empathy: Understanding another person's perspective intellectually, even without shared emotional experience.",
      "Affective Empathy: Sharing the emotional experience of another person, feeling what they feel.",
      "Active Listening: Full attention and non-judgmental presence communicate empathy more powerfully than words.",
      "Validation: Acknowledging the legitimacy of another's emotional experience without necessarily agreeing with their view.",
      "Empathy Limits: Avoid empathy overload by maintaining appropriate professional boundaries while remaining genuinely caring."
    ],
    roleplayTips: [
      "\"I can hear how stressful this situation has been for you—that would be difficult for anyone to navigate, and I want to help make it more manageable.\"",
      "\"Before I respond to the substance of this issue, I want to make sure you feel heard—can you tell me more about how this has been affecting you?\"",
      "\"I'm not going to pretend I fully understand what you're going through, but I can see it matters deeply to you, and that means it matters to me too.\""
    ]
  },

  "EI020": {
    id: "EI020",
    code: "EI:020",
    name: "Exhibit a positive attitude",
    definition: "Display optimism, enthusiasm, and a constructive outlook that energizes others and creates a productive work environment.",
    keyPoints: [
      "Choice: Attitude is a deliberate choice—responding to circumstances with positivity is a discipline, not a natural state.",
      "Contagion Effect: Positive and negative attitudes are socially contagious; leaders set the emotional climate.",
      "Resilience: A positive attitude supports recovery from setbacks and maintains performance under adversity.",
      "Opportunity Focus: Positive thinkers look for what's possible rather than focusing exclusively on obstacles.",
      "Authenticity: Forced positivity undermines trust; effective positive attitude acknowledges challenges while maintaining forward focus."
    ],
    roleplayTips: [
      "\"I approach every challenge as a problem to be solved rather than a complaint to be made—that mindset is how I keep my team focused on progress when conditions are difficult.\"",
      "\"A positive attitude doesn't mean ignoring problems; it means confronting them with the belief that we can find solutions.\"",
      "\"Energy is contagious in a team—I make a deliberate choice to bring the energy I want to see in the room, because my attitude as a leader sets the tone for everyone.\""
    ]
  },

  "EI024": {
    id: "EI024",
    code: "EI:024",
    name: "Take responsibility for decisions and actions",
    definition: "Own the outcomes of your choices—both positive and negative—without deflecting blame, making excuses, or minimizing accountability.",
    keyPoints: [
      "Ownership Mindset: High performers treat outcomes as their responsibility regardless of contributing external factors.",
      "Admitting Mistakes: Acknowledging errors quickly and honestly builds trust far more than defensiveness or denial.",
      "No Excuses: Explaining context is appropriate; making excuses that minimize accountability is not.",
      "Course Correction: Taking responsibility means not just acknowledging mistakes but actively fixing them.",
      "Credibility: Consistent personal accountability builds the credibility and trust that make leadership effective."
    ],
    roleplayTips: [
      "\"That was my call, and it didn't produce the result we needed—here's what I've learned from it and here's the adjusted approach I'm recommending.\"",
      "\"I'm not going to point fingers at the circumstances—the decision was mine, and I own the outcome, including figuring out how to fix it.\"",
      "\"Taking responsibility doesn't mean flagellating yourself—it means being honest about what happened and making it right as quickly as possible.\""
    ]
  },

  "EI022": {
    id: "EI022",
    code: "EI:022",
    name: "Maintain the confidentiality of others",
    definition: "Protect sensitive personal and professional information shared in confidence, honoring the trust placed in you by colleagues, clients, and the organization.",
    keyPoints: [
      "Professional Obligation: Confidentiality is both an ethical duty and a legal requirement in many professional contexts.",
      "Information Tiering: Not all information is equally confidential—understanding the classification of information guides appropriate handling.",
      "Need-to-Know Principle: Share confidential information only with those who have a legitimate business need for it.",
      "Discretion in Practice: Avoid discussing confidential matters in public places, on unsecured channels, or in mixed company.",
      "Trust Currency: Demonstrating consistent confidentiality builds the deep trust that enables candid professional relationships."
    ],
    roleplayTips: [
      "\"What was shared with me in that meeting stays in that room—I won't discuss it outside the team without explicit authorization from leadership.\"",
      "\"Client data is treated as confidential by default regardless of sensitivity—our data governance policy determines what can be shared and with whom.\"",
      "\"The moment people know you can keep a confidence, they trust you with information that makes you more effective—confidentiality is a professional asset, not just an obligation.\""
    ]
  },

  "EI021": {
    id: "EI021",
    code: "EI:021",
    name: "Demonstrate interest in/enthusiasm for the job",
    definition: "Express genuine engagement with your work, showing that you care about quality, growth, and the organization's success.",
    keyPoints: [
      "Intrinsic Motivation: Genuine enthusiasm comes from finding meaning and purpose in the work itself.",
      "Initiative: Enthusiastic employees look for ways to contribute beyond their defined role.",
      "Learning Orientation: Interest in the job manifests as curiosity about how to do it better.",
      "Visible Engagement: Energy, attention, and follow-through communicate engagement to colleagues and leaders.",
      "Culture Contribution: Enthusiastic team members elevate the energy and performance of the people around them."
    ],
    roleplayTips: [
      "\"I asked to join this project because I'm genuinely interested in solving this problem—I see it as an opportunity to develop a capability our whole team needs.\"",
      "\"Enthusiasm isn't performative for me—it's the natural result of working on something I believe matters, with people I respect, toward a goal worth achieving.\"",
      "\"I read everything I can find about this industry because I'm genuinely curious about where it's going—that curiosity is what makes my work feel energizing rather than draining.\""
    ]
  },

  "EI127": {
    id: "EI127",
    code: "EI:127",
    name: "Demonstrate ethics in professional life",
    definition: "Consistently apply ethical principles—honesty, fairness, integrity, and respect—in all professional decisions and interactions.",
    keyPoints: [
      "Values Alignment: Ethical behavior flows from clearly held personal values that guide decisions when rules don't cover the situation.",
      "Consistency: Ethical behavior must be consistent regardless of who is watching or the personal cost involved.",
      "Stakeholder Consideration: Ethical decisions account for impact on all stakeholders, not just immediate interests.",
      "Moral Courage: Doing the right thing often requires willingness to raise difficult issues and resist pressure to compromise.",
      "Long-term Lens: Ethical shortcuts may provide short-term advantages but create long-term risk to reputation and relationships."
    ],
    roleplayTips: [
      "\"I flagged the billing discrepancy even though fixing it cost us the bonus—the right answer was obvious, and compromising on something that clear creates a precedent I don't want to set.\"",
      "\"Ethical behavior in business isn't situational—my standard doesn't change based on whether the decision is visible or who's affected.\"",
      "\"The reputational and legal risk of an ethical shortcut almost always outweighs the short-term gain—I've never seen a case where cutting ethical corners was actually worth it.\""
    ]
  },

  "EI091": {
    id: "EI091",
    code: "EI:091",
    name: "Lead change management efforts",
    definition: "Guide individuals and organizations through transitions by managing resistance, building alignment, and creating conditions for successful adoption of new ways of working.",
    keyPoints: [
      "Urgency Building: Creating a compelling case for change motivates people to overcome the discomfort of transition.",
      "Coalition Building: Identifying and engaging change champions across the organization accelerates adoption.",
      "Communication: Frequent, clear, two-way communication reduces anxiety and builds understanding during change.",
      "Short-Term Wins: Visible early successes build momentum and demonstrate that the change is working.",
      "Embedding Change: New behaviors must be reinforced through systems, incentives, and culture to become permanent."
    ],
    roleplayTips: [
      "\"Change succeeds when people understand not just what is changing but why—I spend as much time communicating the 'why' as I do designing the 'what.'\"",
      "\"Resistance to change is information, not insubordination—I listen to it carefully because it often surfaces legitimate concerns that improve the implementation.\"",
      "\"I track leading indicators of change adoption—not just outputs but behaviors—so I can identify where additional support or coaching is needed before problems compound.\""
    ]
  },

  "EI004": {
    id: "EI004",
    code: "EI:004",
    name: "Demonstrate interest in/enthusiasm for learning",
    definition: "Show genuine curiosity and commitment to acquiring new knowledge and skills, recognizing that continuous learning is fundamental to professional excellence.",
    keyPoints: [
      "Growth Mindset: Believing that abilities can be developed through dedication and hard work.",
      "Proactive Learning: Seeking out new knowledge without waiting to be directed toward development opportunities.",
      "Application Focus: Converting learning into behavioral change and improved performance.",
      "Learning Agility: The ability to learn quickly from experience and apply new insights to novel situations.",
      "Feedback Integration: Treating feedback and failure as learning inputs rather than judgments."
    ],
    roleplayTips: [
      "\"I read one industry publication every morning before starting work—I want to understand the context my decisions operate in, not just the immediate task in front of me.\"",
      "\"After every project, I do a structured reflection on what I learned—the most valuable development happens when I'm deliberate about extracting lessons from experience.\"",
      "\"A learning orientation means I approach things I'm not good at yet with curiosity rather than avoidance—growth lives outside the comfort zone.\""
    ]
  },

  "EI075": {
    id: "EI075",
    code: "EI:075",
    name: "Develop cultural sensitivity",
    definition: "Build awareness of and respect for cultural differences in values, communication styles, and business practices to work effectively in diverse environments.",
    keyPoints: [
      "Cultural Awareness: Understanding that different cultures have fundamentally different assumptions about communication, hierarchy, time, and relationships.",
      "Perspective-Taking: Actively trying to understand situations from the cultural frame of reference of others.",
      "Communication Adaptation: Adjusting style—directness, formality, eye contact, personal space—to cultural norms.",
      "Avoiding Stereotypes: Cultural sensitivity requires recognizing patterns without reducing individuals to generalizations.",
      "Business Impact: Cultural intelligence reduces friction in cross-cultural business dealings and expands global effectiveness."
    ],
    roleplayTips: [
      "\"Before our meeting with the Japanese partner team, I briefed our team on relationship-building expectations—jumping straight to business would have been seen as disrespectful.\"",
      "\"Cultural sensitivity means adapting my communication style, not just my content—the same message delivered in the same way lands very differently across cultural contexts.\"",
      "\"I approach cultural differences with curiosity rather than judgment—understanding why practices differ tells me something valuable about values and priorities that I can use to build better relationships.\""
    ]
  },

  "EI128": {
    id: "EI128",
    code: "EI:128",
    name: "Inspire others",
    definition: "Motivate individuals and teams to exceed expectations by connecting their work to meaningful purpose, demonstrating genuine belief in their capabilities, and modeling exceptional performance.",
    keyPoints: [
      "Purpose Connection: People are most inspired when they understand how their work contributes to something larger than themselves.",
      "Authentic Belief: Genuine confidence in others' potential is more inspiring than manufactured praise.",
      "Modeling: Consistent demonstration of the values and performance you expect from others is the most powerful inspirational tool.",
      "Recognition: Specific acknowledgment of exceptional contributions reinforces inspired behavior.",
      "Vulnerability: Sharing your own struggles and growth journey makes you relatable and encourages others to push their limits."
    ],
    roleplayTips: [
      "\"I share our company's mission in every team meeting because I want every person to connect their daily work to the impact we're having—purpose is the most sustainable motivator.\"",
      "\"The best way I know to inspire my team is to work harder than I ask them to—leadership by example is more powerful than any speech.\"",
      "\"I specifically tell team members what I see in them that they might not see in themselves—sometimes people need someone to believe in their potential before they believe in it themselves.\""
    ]
  },

  "EI123": {
    id: "EI123",
    code: "EI:123",
    name: "Demonstrate responsible behaviors in the workplace",
    definition: "Exhibit reliability, professionalism, accountability, and ethical conduct in all aspects of work, meeting commitments and honoring obligations to colleagues and the organization.",
    keyPoints: [
      "Reliability: Consistently delivering on commitments, meeting deadlines, and being counted on by colleagues.",
      "Professionalism: Maintaining standards of conduct, appearance, and communication that reflect well on yourself and the organization.",
      "Accountability: Owning outcomes and taking corrective action without needing external oversight.",
      "Ethical Conduct: Acting with integrity in all situations, especially when no one is watching.",
      "Stewardship: Treating organizational resources—time, money, equipment, and information—with appropriate care."
    ],
    roleplayTips: [
      "\"My standard is to be the kind of colleague that makes everyone around me more confident—they know that what I commit to will get done.\"",
      "\"Responsible behavior means I apply the same standards when I'm working independently as when I'm being evaluated—the only consistent measure is my own standard.\"",
      "\"I treat organizational resources as if I own them personally—that mindset drives better decisions about spending, time use, and asset care than any policy.\""
    ]
  },

  "EI124": {
    id: "EI124",
    code: "EI:124",
    name: "Demonstrate honesty and integrity",
    definition: "Act with truthfulness and moral consistency in all professional dealings, maintaining alignment between stated values and actual behavior.",
    keyPoints: [
      "Truthfulness: Providing accurate information even when the truth is inconvenient.",
      "Consistency: Behaving the same way whether observed or not.",
      "Promise-Keeping: Honoring commitments and communicating proactively when circumstances require changes.",
      "Transparency: Sharing relevant information that others need, even when not explicitly asked.",
      "Character: Integrity is the foundation of professional reputation—once lost, it is extremely difficult to rebuild."
    ],
    roleplayTips: [
      "\"I'd rather deliver uncomfortable news early than let someone proceed with incorrect information—honesty in the short term prevents much larger problems later.\"",
      "\"Integrity means that my private behavior and my public behavior are the same—there's no version of me that acts differently when no one is watching.\"",
      "\"When I make a commitment, it's a promise—if circumstances change and I can't deliver, I say so immediately and propose alternatives rather than hoping no one notices.\""
    ]
  },

  "EI125": {
    id: "EI125",
    code: "EI:125",
    name: "Use appropriate assertiveness",
    definition: "Express views, needs, and limits clearly and confidently while respecting the rights and perspectives of others, finding the balance between passivity and aggression.",
    keyPoints: [
      "Rights and Responsibilities: Assertiveness means claiming your right to be heard while respecting others' equal right.",
      "I-Statements: Framing positions in terms of your experience and perspective reduces defensiveness.",
      "Directness: State your position clearly rather than hinting or hoping others will infer it.",
      "Boundary-Setting: Assertiveness enables clear, professional responses to unreasonable demands.",
      "Assertion vs. Aggression: Assertiveness focuses on the issue and respects the person; aggression attacks the person."
    ],
    roleplayTips: [
      "\"I disagree with that assessment, and I want to explain why—I have data that suggests a different conclusion.\"",
      "\"I need to be direct with you: the current scope exceeds what was originally agreed, and we'll need to adjust timeline or budget to deliver it.\"",
      "\"I'm not comfortable with that approach for the following reasons—let me propose an alternative that I think achieves your goals without the risks I see in the original plan.\""
    ]
  },

  "EI077": {
    id: "EI077",
    code: "EI:077",
    name: "Process information to determine alternative solutions to a problem",
    definition: "Systematically gather, analyze, and synthesize relevant information to generate multiple potential solutions before selecting the best course of action.",
    keyPoints: [
      "Information Gathering: Collect data from multiple sources to build a comprehensive picture of the problem.",
      "Root Cause Analysis: Identify the underlying cause rather than treating surface symptoms.",
      "Alternative Generation: Develop multiple potential solutions before evaluating any of them.",
      "Criteria Evaluation: Assess options against defined criteria—cost, feasibility, risk, and expected impact.",
      "Decision Quality: The quality of the final decision is limited by the quality of the information and alternatives considered."
    ],
    roleplayTips: [
      "\"Before we decide, I want to make sure we've generated at least three alternatives—we tend to anchor on the first solution and stop looking, which leads to suboptimal choices.\"",
      "\"The root cause here is a process gap, not a people problem—any solution that doesn't address the process will only produce temporary improvement.\"",
      "\"I've evaluated five alternatives against our four key criteria—here's the matrix, and here's my recommendation with the reasoning behind it.\""
    ]
  },

  "EI092": {
    id: "EI092",
    code: "EI:092",
    name: "Manage organizational change",
    definition: "Plan and implement changes to organizational structure, processes, and culture while minimizing disruption and sustaining performance through the transition.",
    keyPoints: [
      "Change Models: Frameworks like Kotter's 8-Step Model and ADKAR provide structured approaches to managing complex organizational change.",
      "Stakeholder Mapping: Identify who will be affected by change and how, to design targeted engagement strategies.",
      "Communication Planning: Frequent, two-way communication reduces uncertainty and builds understanding.",
      "Resistance Management: Anticipate and address resistance proactively rather than dismissing or fighting it.",
      "Measurement: Define success metrics for the change before implementation to track progress and demonstrate value."
    ],
    roleplayTips: [
      "\"Our change management plan maps every stakeholder group to their current state, desired state, and the specific interventions needed to move them through the transition.\"",
      "\"I never launch an organizational change without a communication plan that includes the 'why' as prominently as the 'what'—people support what they understand and help design.\"",
      "\"We'll track adoption metrics weekly for the first 90 days—not just outputs but the leading behavioral indicators that tell us whether the change is taking hold.\""
    ]
  },

  "EI019": {
    id: "EI019",
    code: "EI:019",
    name: "Demonstrate positive working relationships",
    definition: "Build and sustain productive, respectful, and collaborative relationships with colleagues, supervisors, and stakeholders that enhance individual and team performance.",
    keyPoints: [
      "Trust Building: Reliability, honesty, and follow-through are the foundations of all effective working relationships.",
      "Mutual Respect: Value colleagues' expertise, perspective, and time regardless of title or position.",
      "Constructive Conflict: Navigate disagreements professionally, focusing on issues and maintaining the relationship.",
      "Collaboration: Share information, resources, and credit generously to build a culture of cooperation.",
      "Relationship Maintenance: Invest in relationships proactively, not just when you need something."
    ],
    roleplayTips: [
      "\"I make a point of understanding what my colleagues need to be successful, not just what I need from them—relationships built on mutual support are more productive and more durable.\"",
      "\"When I disagree with a colleague, I address it directly with them before going around them—working through tension directly is the only way to maintain a genuinely strong relationship.\"",
      "\"My professional network is my most valuable career asset—I invest in those relationships continuously, not just when I need a favor.\""
    ]
  },

  "EI025": {
    id: "EI025",
    code: "EI:025",
    name: "Demonstrate problem-solving skills",
    definition: "Apply systematic thinking, creative analysis, and decisive action to identify, analyze, and resolve problems effectively.",
    keyPoints: [
      "Problem Definition: Clearly defining the problem is the most critical and often most neglected step.",
      "Structured Approach: Use frameworks like PDCA, A3, or 5-Why to bring rigor to complex problems.",
      "Data Use: Ground solutions in evidence rather than assumption or anecdote.",
      "Root Cause: Solutions that address root causes produce lasting improvement; symptom-focused solutions create recurrence.",
      "Iteration: Be willing to adjust solutions as implementation reveals new information."
    ],
    roleplayTips: [
      "\"I always start by writing a crisp one-sentence problem statement and making sure everyone agrees on it—problem definition determines everything that follows.\"",
      "\"We ran a five-why analysis and discovered the root cause was three layers deeper than what initially appeared to be the problem—that's why structured root cause analysis matters.\"",
      "\"I proposed three solution options with a pros/cons matrix—the goal is to make the decision criteria transparent so the team can choose with confidence.\""
    ]
  },

  "EI003": {
    id: "EI003",
    code: "EI:003",
    name: "Demonstrate clean/healthy/neat appearance",
    definition: "Maintain personal grooming, hygiene, and professional dress standards that project credibility, respect for others, and alignment with the organization's professional culture.",
    keyPoints: [
      "First Impressions: Appearance is among the first cues people use to form professional assessments.",
      "Industry Standards: Appropriate professional dress varies by industry, role, and culture.",
      "Brand Representation: Personal appearance reflects on the organization when interacting with clients and stakeholders.",
      "Consistency: Maintaining appearance standards consistently is as important as meeting them in high-visibility moments.",
      "Self-Respect Signal: Well-maintained appearance communicates self-respect that others tend to mirror in how they treat you."
    ],
    roleplayTips: [
      "\"Before any client-facing meeting, I make sure my appearance would make my most professional role model proud—the impression you make before you speak matters.\"",
      "\"Professional appearance standards aren't about conformity; they're about removing unnecessary friction from communication so your ideas can speak for themselves.\"",
      "\"I dress for the role I want to play, not just the role I have—appearance is one of the most visible signals of professional aspiration.\""
    ]
  },

  "EI026": {
    id: "EI026",
    code: "EI:026",
    name: "Develop team-building skills",
    definition: "Build the practices and behaviors that transform a group of individuals into a high-performing team with shared purpose, mutual trust, and complementary capabilities.",
    keyPoints: [
      "Psychological Safety: Teams perform best when members feel safe to take risks, raise concerns, and share ideas without fear.",
      "Shared Purpose: Aligning the team around a common goal that everyone understands and values.",
      "Role Clarity: Each team member understands their contribution and how it connects to the whole.",
      "Trust Development: Structured interactions that build interpersonal knowledge and trust accelerate team cohesion.",
      "Conflict Navigation: High-performing teams address conflict constructively, treating it as a source of better decisions."
    ],
    roleplayTips: [
      "\"Team-building isn't a retreat activity—it's daily practice in how we communicate, resolve conflict, and support each other's success.\"",
      "\"I invest heavily in the psychological safety of my team—people who feel safe to disagree and raise concerns make better collective decisions and deliver better outcomes.\"",
      "\"I start every new team by clarifying purpose, roles, and norms explicitly—avoiding those conversations early creates confusion that compounds over time.\""
    ]
  },

  "EI029": {
    id: "EI029",
    code: "EI:029",
    name: "Explain the needs and motivations of others",
    definition: "Apply understanding of human motivation theories and individual differences to explain why people behave as they do in professional and organizational contexts.",
    keyPoints: [
      "Maslow's Hierarchy: People are motivated by unmet needs, from physiological to safety, social, esteem, and self-actualization.",
      "Intrinsic Motivation: Autonomy, mastery, and purpose drive sustained high performance more effectively than external rewards.",
      "Extrinsic Motivation: Financial incentives, recognition, and status motivators are powerful but have limits.",
      "Individual Differences: Different people are motivated by different things—effective leaders understand individual drivers.",
      "Application: Understanding motivation helps design roles, incentives, and communication strategies that engage specific individuals."
    ],
    roleplayTips: [
      "\"Before assigning stretch projects, I ask myself what each team member is trying to achieve in their career—the best development assignments are the ones that serve both business needs and personal aspirations.\"",
      "\"This person isn't undermotivated—they're motivated by things we're not currently providing: recognition and autonomy. Adjusting how we structure their role would unlock significant additional performance.\"",
      "\"Understanding Herzberg's two-factor theory helps explain why removing dissatisfiers doesn't create satisfaction—you need both hygiene factors and genuine motivators.\""
    ]
  },

  "EI030": {
    id: "EI030",
    code: "EI:030",
    name: "Demonstrate leadership skills",
    definition: "Influence others to achieve shared goals through vision, communication, decision-making, and the ability to develop and motivate people.",
    keyPoints: [
      "Vision: Articulating a clear, compelling picture of where the team or organization is going.",
      "Influence: Leadership is about inspiring voluntary followership, not commanding compliance.",
      "Decision-Making: Leaders make timely, well-informed decisions and take accountability for outcomes.",
      "Development: Effective leaders grow the capabilities of the people around them.",
      "Adaptability: Leadership style must flex to match the situation, the team's experience, and the urgency of the challenge."
    ],
    roleplayTips: [
      "\"Leadership isn't about having all the answers—it's about creating the conditions where the best answers can emerge and be executed with commitment.\"",
      "\"I lead by setting clear expectations, providing the resources and support people need to succeed, and then staying out of the way while they deliver.\"",
      "\"The best signal of my leadership effectiveness isn't what happens when I'm present—it's what happens when I'm not.\""
    ]
  },

  "EI103": {
    id: "EI103",
    code: "EI:103",
    name: "Develop an achievement orientation",
    definition: "Build the intrinsic drive to set challenging goals, persist through obstacles, and hold yourself to high performance standards in all professional endeavors.",
    keyPoints: [
      "Goal Setting: Achievement-oriented people set specific, challenging, self-imposed performance goals.",
      "Intrinsic Drive: Performance motivation comes from internal standards, not just external rewards.",
      "Persistence: High achievers treat obstacles as problems to solve rather than reasons to lower expectations.",
      "Excellence Standards: Consistent commitment to quality and improvement, not just meeting minimum requirements.",
      "Feedback Seeking: Achievement orientation includes actively seeking performance feedback to close gaps."
    ],
    roleplayTips: [
      "\"I set my own performance targets above what's expected—meeting expectations is the floor, not the ceiling.\"",
      "\"When I hit a goal, my first question is what I'm aiming for next—I'm not motivated by having already achieved something, I'm motivated by the pursuit of the next challenge.\"",
      "\"I track my own performance metrics independently of any management system—accountability to myself is more motivating than accountability to my performance review.\""
    ]
  },

  "EI033": {
    id: "EI033",
    code: "EI:033",
    name: "Demonstrate adaptability",
    definition: "Adjust effectively to changing circumstances, new information, and unexpected challenges while maintaining performance and professional composure.",
    keyPoints: [
      "Cognitive Flexibility: The ability to shift mental frameworks and approaches when circumstances change.",
      "Ambiguity Tolerance: Functioning effectively without complete information or clear direction.",
      "Learning Agility: Quickly extracting lessons from new situations and applying them to future challenges.",
      "Resilience: Recovering from setbacks and maintaining performance under adversity.",
      "Change Embracement: Treating change as opportunity rather than threat."
    ],
    roleplayTips: [
      "\"The strategy changed three months into execution—I adjusted my approach without losing momentum because the goal remained constant even as the path changed.\"",
      "\"Adaptability isn't about lacking conviction; it's about holding goals firmly while holding methods loosely, ready to change course when evidence warrants it.\"",
      "\"The most valuable professional asset in a volatile environment isn't expertise in current conditions—it's the ability to learn faster than conditions change.\""
    ]
  },

  "EI104": {
    id: "EI104",
    code: "EI:104",
    name: "Use consensus-building skills",
    definition: "Facilitate a process by which diverse stakeholders reach a shared decision that all parties can support, even if it doesn't represent everyone's first preference.",
    keyPoints: [
      "Inclusive Process: Consensus requires that all voices be heard and considered before a decision is made.",
      "Common Ground: Effective facilitators identify shared interests and values that bridge different positions.",
      "Active Facilitation: Consensus doesn't emerge automatically—it requires skilled facilitation of structured dialogue.",
      "Commitment to Support: Consensus means agreement to support the decision, not necessarily enthusiastic endorsement.",
      "Limits: Consensus is powerful for complex decisions requiring buy-in but too slow for urgent, operational choices."
    ],
    roleplayTips: [
      "\"Before we debate solutions, let's make sure we agree on the problem—if we're solving different things, we'll never reach consensus on the approach.\"",
      "\"I want to make sure everyone at this table can live with the decision we reach—I'm looking for a solution you can actively support, not just tolerate.\"",
      "\"We've identified the areas of agreement and the remaining points of contention—let me propose a path that addresses the core concerns on both sides.\""
    ]
  },

  "EI007": {
    id: "EI007",
    code: "EI:007",
    name: "Apply ethics to professional life",
    definition: "Integrate ethical principles systematically into professional decisions, relationships, and actions, creating consistent alignment between values and behavior.",
    keyPoints: [
      "Ethical Frameworks: Utilitarian, deontological, virtue, and stakeholder approaches provide different lenses for ethical analysis.",
      "Values Inventory: Identifying your core professional values provides a stable anchor for ethical decisions.",
      "Gray Areas: Most ethical challenges involve competing goods rather than clear right vs. wrong.",
      "Organizational Ethics: Individual ethics operate within and are shaped by organizational culture and incentives.",
      "Moral Courage: Applying ethics in professional life often requires willingness to accept personal cost for doing the right thing."
    ],
    roleplayTips: [
      "\"When I face an ethical gray area, I ask myself: how would I explain this decision to my most respected professional mentor—would I be comfortable with full transparency?\"",
      "\"The stakeholder test is my primary ethical filter: who is affected by this decision, and am I treating each of them fairly?\"",
      "\"Ethics aren't just constraints on behavior—they're a source of competitive advantage; organizations with genuine ethical cultures attract better talent and customer trust.\""
    ]
  },

  "EI038": {
    id: "EI038",
    code: "EI:038",
    name: "Develop company loyalty",
    definition: "Build genuine commitment to the organization's success by aligning personal goals with company mission, investing in the organization's reputation, and advocating for its interests.",
    keyPoints: [
      "Mission Alignment: Loyalty is most sustainable when built on genuine belief in the organization's purpose.",
      "Investment Mentality: Loyal employees treat organizational resources and reputation as their own.",
      "Advocacy: Genuinely loyal employees speak positively about the organization externally and constructively internally.",
      "Reciprocity: Strong organizational loyalty typically requires the organization to demonstrate loyalty to employees in return.",
      "Limits: Loyalty should be to mission and values, not unconditional compliance with all directives."
    ],
    roleplayTips: [
      "\"My loyalty to this company is based on genuine belief in what we're trying to accomplish—that makes it sustainable in a way that purely transactional employment never could be.\"",
      "\"I represent the company the same way whether I'm in a formal meeting or at a social event—my reputation and the company's reputation are linked.\"",
      "\"Loyalty doesn't mean silence when I see something wrong—it means raising it internally with the goal of making the organization better rather than publicly criticizing it.\""
    ]
  },

  "EI129": {
    id: "EI129",
    code: "EI:129",
    name: "Demonstrate workplace ethics",
    definition: "Apply ethical standards consistently in the workplace through honest communication, fair treatment of others, protection of confidential information, and responsible use of organizational resources.",
    keyPoints: [
      "Conflict of Interest: Recognize and disclose situations where personal interests may conflict with professional obligations.",
      "Honest Communication: Provide accurate information to colleagues, clients, and leadership even when the truth is inconvenient.",
      "Fair Treatment: Apply consistent standards in all professional decisions regardless of personal relationships.",
      "Resource Stewardship: Use organizational resources—time, money, equipment—only for legitimate business purposes.",
      "Reporting Obligation: Understand the obligation and mechanisms for reporting observed ethical violations."
    ],
    roleplayTips: [
      "\"I disclosed the potential conflict of interest to my manager immediately—even if the conflict is minor, transparency is always the right call.\"",
      "\"Workplace ethics means I apply the same standards to the vendor my friend runs as I do to any other supplier—personal relationships can't influence business decisions.\"",
      "\"When I saw the billing irregularity, I reported it through the proper channel the same day—there's no version of good workplace ethics that involves looking the other way.\""
    ]
  },

  "EI130": {
    id: "EI130",
    code: "EI:130",
    name: "Manage commitments in a timely fashion",
    definition: "Prioritize, track, and deliver on professional obligations within agreed timelines, proactively communicating when circumstances create timing risks.",
    keyPoints: [
      "Commitment Clarity: Ensure that every commitment made is specific, with a clear deliverable and deadline.",
      "Prioritization: Manage competing commitments through explicit prioritization rather than hoping capacity exists.",
      "Early Warning: Communicate timeline risks as soon as they emerge, not after the deadline is missed.",
      "Follow-Through: Treat commitments as promises, not intentions.",
      "Reliable Reputation: Consistent timely delivery builds a professional reputation that creates career opportunities."
    ],
    roleplayTips: [
      "\"I maintain a commitment tracker so nothing falls through the cracks—if I've said I'll do something by a specific date, I have a system to ensure it happens.\"",
      "\"I proactively told my client that the timeline was at risk three weeks before the deadline—that transparency is why they trust us even when things don't go perfectly.\"",
      "\"Reliability is the simplest form of professional differentiation—most people underestimate how much career advancement comes from just doing what you say you'll do, when you say you'll do it.\""
    ]
  },

  "EI106": {
    id: "EI106",
    code: "EI:106",
    name: "Make decisions",
    definition: "Gather relevant information, evaluate alternatives, and select a course of action confidently and timely, balancing analytical rigor with the judgment needed to act under uncertainty.",
    keyPoints: [
      "Decision Process: Define the decision, gather information, identify options, evaluate, decide, and review.",
      "Timeliness: Good decisions made promptly outperform perfect decisions made too late.",
      "Uncertainty Management: Most decisions must be made with incomplete information—build judgment through experience.",
      "Accountability: Decide with clear ownership; ambiguous responsibility leads to no decision or poor decisions.",
      "Review and Learn: Post-decision review improves decision quality over time by surfacing biases and process weaknesses."
    ],
    roleplayTips: [
      "\"I make decisions at the right time—neither so fast that I miss important information nor so slow that the window closes.\"",
      "\"Before I decide, I ask: what would change my recommendation? If the answer is nothing plausible, I'm ready to act; if there's a critical unknown, I do the work to resolve it first.\"",
      "\"The decision framework I use is simple: what are we deciding, what criteria matter, what are the options, and what does the evidence say? Running through that takes five minutes and dramatically improves the quality of even routine decisions.\""
    ]
  },

  "EI107": {
    id: "EI107",
    code: "EI:107",
    name: "Demonstrate negotiation skills",
    definition: "Apply principled negotiation techniques to reach agreements that satisfy the core interests of all parties while preserving and strengthening professional relationships.",
    keyPoints: [
      "Interest vs. Position: Focus on underlying interests rather than stated positions to find creative solutions.",
      "BATNA: Know your Best Alternative to a Negotiated Agreement—it determines your walk-away point.",
      "Preparation: Thorough preparation including research, objective criteria, and scenario planning is the foundation of negotiation success.",
      "Active Listening: Understanding the other party's interests and constraints is essential to crafting mutually acceptable solutions.",
      "Relationship Preservation: Principled negotiation separates the people from the problem to preserve working relationships."
    ],
    roleplayTips: [
      "\"My preparation for this negotiation included modeling three scenarios—I know my walk-away point and I have objective market data to anchor the conversation on fair value.\"",
      "\"Rather than haggling on price, let me understand what outcome you're trying to achieve—there may be a structure that gives us both what we actually need.\"",
      "\"I'm not going to negotiate against myself; I've stated my position clearly and I'll wait for a counter rather than making concessions to silence.\""
    ]
  },

  "EI108": {
    id: "EI108",
    code: "EI:108",
    name: "Use conflict-resolution skills",
    definition: "Navigate professional disagreements constructively by identifying root causes, facilitating dialogue, and reaching resolutions that preserve working relationships and move the work forward.",
    keyPoints: [
      "Root Cause Focus: Address the underlying source of conflict, not just its surface manifestation.",
      "Neutral Facilitation: Effective conflict resolution requires creating a space where both parties feel heard.",
      "Interests Alignment: Look for solutions that address the core interests of all parties.",
      "Process Agreement: Before addressing substance, establish an agreed process for the conversation.",
      "Relationship Maintenance: The goal is to resolve the conflict in a way that preserves a functional working relationship."
    ],
    roleplayTips: [
      "\"Before we discuss the substance of the disagreement, I want to make sure we both understand each other's perspective—can each of us take two minutes to explain our view without interruption?\"",
      "\"The conflict here is about a process gap, not a personality issue—if we fix the process, we eliminate the recurring source of friction.\"",
      "\"I want to find a resolution that we both feel good about—not a win-lose, but a solution that serves our shared goals and lets us maintain an effective working relationship.\""
    ]
  },

  "EI012": {
    id: "EI012",
    code: "EI:012",
    name: "Work as a member of a team",
    definition: "Contribute effectively as part of a collaborative group by supporting shared goals, fulfilling individual responsibilities, and helping others succeed.",
    keyPoints: [
      "Role Clarity: Understand your specific contribution and how it connects to the team's overall objective.",
      "Reliability: Team success depends on every member fulfilling their commitments on time.",
      "Support Orientation: Help team members who are struggling rather than advancing at their expense.",
      "Communication: Share relevant information proactively so the team can make good collective decisions.",
      "Constructive Conflict: Raise disagreements professionally and seek resolution that improves the team's output."
    ],
    roleplayTips: [
      "\"I measure my success as a team member not just by what I deliver personally but by whether I made the people around me more effective.\"",
      "\"When I see a colleague struggling on a deliverable that affects the team's timeline, I offer to help—team success is more important than individual credit.\"",
      "\"I bring my full expertise to the table but I'm also genuinely open to better ideas from anyone on the team—good ideas don't care about hierarchy.\""
    ]
  },

  "EI062": {
    id: "EI062",
    code: "EI:062",
    name: "Demonstrate responsible behavior",
    definition: "Consistently meet professional obligations, act with integrity, and make decisions that balance personal interests with obligations to colleagues, customers, and the organization.",
    keyPoints: [
      "Obligation Fulfillment: Responsible people honor their professional commitments even when it is inconvenient.",
      "Impact Awareness: Consider the effect of your actions on others before acting.",
      "Self-Management: Take ownership of your performance without requiring constant external monitoring.",
      "Error Correction: When you make mistakes, acknowledge them quickly and take corrective action.",
      "Professional Standards: Uphold the standards of your profession regardless of what others around you do."
    ],
    roleplayTips: [
      "\"Responsible behavior means I hold myself to the standard I'd want applied to me—I don't need surveillance to do the right thing.\"",
      "\"When I realized the error in the report, I corrected it and disclosed it immediately—delaying or hoping no one noticed would have compounded the problem.\"",
      "\"I think about the second-order effects of my decisions—not just whether something is acceptable for me, but what precedent it sets and how it affects others.\""
    ]
  },

  "EI008": {
    id: "EI008",
    code: "EI:008",
    name: "Handle stressful situations",
    definition: "Maintain composure, performance, and judgment under pressure by applying stress management techniques and emotional regulation skills.",
    keyPoints: [
      "Stress Recognition: Identifying personal stress signals early enables intervention before they affect performance.",
      "Physiological Regulation: Controlled breathing, physical movement, and rest are immediate tools for managing acute stress.",
      "Perspective: Maintaining proportionate perspective on challenges prevents catastrophizing and decision impairment.",
      "Prioritization: Under pressure, clear prioritization of the most critical tasks prevents paralysis.",
      "Recovery: Building recovery time and practices into routine maintains the capacity to handle stress over time."
    ],
    roleplayTips: [
      "\"When the pressure peaked during the crisis, I took 60 seconds to breathe, reassess the situation calmly, and identify the two most critical next actions—that discipline prevented the situation from getting worse.\"",
      "\"I've learned my personal stress signals—when I notice them, I've trained myself to slow down rather than speed up, because fast-but-impaired decisions make high-stress situations worse.\"",
      "\"I don't manage stress by eliminating it; I manage it by building the capacity to absorb and recover from it without compromising my judgment or relationships.\""
    ]
  },

  "EI015": {
    id: "EI015",
    code: "EI:015",
    name: "Be sensitive to others' needs",
    definition: "Recognize and respond to the emotional, practical, and professional needs of colleagues and stakeholders with appropriate support and consideration.",
    keyPoints: [
      "Situational Awareness: Notice changes in behavior, mood, or performance that may signal unmet needs.",
      "Check-In Practice: Proactively asking colleagues how they're doing demonstrates care and surfaces needs before they become problems.",
      "Flexible Response: Tailor your support to what the person actually needs rather than what you assume they need.",
      "Workload Sensitivity: Recognize when colleagues are overwhelmed and offer concrete help rather than adding pressure.",
      "Personal Circumstances: Professional sensitivity means accounting for personal factors that affect a colleague's capacity without prying."
    ],
    roleplayTips: [
      "\"I noticed you seem overwhelmed this week—I have some capacity and I'd like to help. What's the most valuable thing I could take off your plate right now?\"",
      "\"Before I give feedback on this deliverable, I want to check in—I know you've had a challenging few weeks and I want to make sure the timing works for you.\"",
      "\"Sensitivity to others' needs isn't softness—it's how you keep high-performing people performing. Ignoring the human dimension of work is how you burn out your best people.\""
    ]
  },

  "EI109": {
    id: "EI109",
    code: "EI:109",
    name: "Foster open, honest communication",
    definition: "Create an environment where people feel safe to share ideas, raise concerns, and provide candid feedback without fear of negative consequences.",
    keyPoints: [
      "Psychological Safety: People share honest information only when they believe it is safe to do so.",
      "Modeling: Leaders must model vulnerable, honest communication before they can expect it from others.",
      "Non-Punitive Response: How leaders respond to bad news determines whether people will share it in the future.",
      "Active Solicitation: Genuinely seeking input—not just tolerating it—signals that honesty is valued.",
      "Feedback Culture: Organizations with strong feedback cultures learn and improve faster than those without."
    ],
    roleplayTips: [
      "\"I explicitly tell my team that bringing me problems is a sign of good judgment, not failure—the worst thing someone can do is hide a problem that grows.\"",
      "\"When someone gives me critical feedback, I thank them and ask follow-up questions—the moment I become defensive, I've closed the feedback loop and limited my own development.\"",
      "\"Open communication doesn't happen by accident; it requires leaders who consistently reward honesty and never punish people for telling the truth.\""
    ]
  },

  "EI095": {
    id: "EI095",
    code: "EI:095",
    name: "Explain the nature of organizational culture",
    definition: "Describe how the shared values, beliefs, assumptions, and behaviors that define an organization shape individual conduct, decisions, and performance.",
    keyPoints: [
      "Culture Definition: The set of shared assumptions and values that guide how people in an organization think and behave.",
      "Visible vs. Invisible: Culture manifests in visible symbols, rituals, and stories but is driven by deeper, invisible assumptions.",
      "Leadership Impact: Leaders shape culture through what they pay attention to, reward, punish, and model.",
      "Culture-Strategy Alignment: Culture either accelerates or undermines strategy execution.",
      "Change Difficulty: Culture changes slowly and requires sustained, consistent effort rather than one-time interventions."
    ],
    roleplayTips: [
      "\"The culture problem we have isn't visible in any policy—it's in the unwritten rules about what behaviors actually get rewarded versus what the stated values say.\"",
      "\"Culture is the operating system of an organization—everything else runs on top of it, and if the OS is broken, no individual program can compensate.\"",
      "\"I pay as much attention to what gets celebrated and what gets tolerated as I do to what gets written in the values statement—those informal signals are the real culture.\""
    ]
  },

  "EI028": {
    id: "EI028",
    code: "EI:028",
    name: "Assess risks",
    definition: "Identify, evaluate, and prioritize potential threats to business objectives so that mitigation resources can be allocated effectively.",
    keyPoints: [
      "Risk Identification: Systematically identify all potential threats across operational, financial, strategic, and compliance dimensions.",
      "Probability Assessment: Estimate the likelihood of each risk materializing based on available evidence.",
      "Impact Analysis: Assess the potential severity of consequences if a risk materializes.",
      "Risk Matrix: Plot risks by probability and impact to prioritize mitigation investment.",
      "Mitigation Planning: Develop specific plans to reduce, transfer, accept, or avoid each prioritized risk."
    ],
    roleplayTips: [
      "\"I use a risk matrix to prioritize our mitigation investments—the high-probability, high-impact risks get resources first; low-probability, low-impact risks get accepted.\"",
      "\"The risk we're underweighting is operational concentration—45% of our fulfillment capacity in one facility is an existential risk we should actively mitigate.\"",
      "\"Risk assessment isn't about predicting the future; it's about making sure we've thought through what could go wrong so we're not surprised by foreseeable events.\""
    ]
  },

  "EI045": {
    id: "EI045",
    code: "EI:045",
    name: "Persuade others",
    definition: "Influence the beliefs, attitudes, and behaviors of others through credible, well-reasoned communication that appeals to logic, emotion, and shared values.",
    keyPoints: [
      "Ethos: Credibility and trustworthiness of the communicator is the foundation of persuasion.",
      "Logos: Logical arguments supported by evidence, data, and sound reasoning.",
      "Pathos: Emotional appeals that connect to the audience's values, needs, and aspirations.",
      "Understanding the Audience: Effective persuasion requires knowing what the audience cares about and tailoring arguments accordingly.",
      "Call to Action: Every persuasive communication should end with a clear, specific requested action."
    ],
    roleplayTips: [
      "\"Before I make my case, I want to understand your current perspective—effective persuasion starts with knowing exactly where the gap is between our views.\"",
      "\"Here's the data supporting the recommendation, but I also want to explain why I believe it's the right thing to do for our customers—the logical and values cases reinforce each other.\"",
      "\"I've addressed the objections I anticipated, but I'm genuinely curious whether there's a concern I haven't addressed—I'd rather hear it now and respond than lose you at the decision point.\""
    ]
  },

  "EI011": {
    id: "EI011",
    code: "EI:011",
    name: "Develop coping strategies",
    definition: "Build and apply healthy, effective approaches to managing professional setbacks, adversity, and chronic stress to maintain long-term performance and well-being.",
    keyPoints: [
      "Problem-Focused Coping: Actively addressing the source of stress through problem-solving and direct action.",
      "Emotion-Focused Coping: Managing the emotional response to stress when the stressor cannot be directly changed.",
      "Social Support: Leveraging trusted colleagues and mentors for perspective, advice, and emotional support.",
      "Reframing: Changing the interpretation of a stressful situation to reduce its negative emotional impact.",
      "Recovery Practices: Building restorative routines that maintain the physical and mental capacity to handle adversity."
    ],
    roleplayTips: [
      "\"When a major setback hits, my first step is always to separate what I can control from what I can't—I put all my energy into the controllable elements and accept the rest.\"",
      "\"I've built a network of trusted advisors I can call when I need honest perspective—some problems look very different when you explain them to someone you respect.\"",
      "\"Recovery is a professional skill, not just a personal one—the ability to bounce back quickly from setbacks is a competitive advantage that's as important as technical expertise.\""
    ]
  },

  "EI059": {
    id: "EI059",
    code: "EI:059",
    name: "Demonstrate ethical leader behaviors",
    definition: "Model and reinforce ethical conduct through personal behavior, decision-making, and the norms you establish and enforce within your sphere of leadership influence.",
    keyPoints: [
      "Behavioral Modeling: Leaders' own ethical behavior is the most powerful signal of organizational ethical standards.",
      "Consistent Standards: Apply the same ethical standards regardless of the seniority or influence of the person involved.",
      "Reward and Sanction: What leaders reward and punish signals what ethical behaviors are actually valued.",
      "Transparent Decision-Making: Explaining the values-based reasoning behind decisions reinforces ethical norms.",
      "Courageous Action: Ethical leadership sometimes requires taking positions that are unpopular or costly."
    ],
    roleplayTips: [
      "\"I refused to approve the proposal even though it would have hit our quarterly number—the approach wasn't consistent with how we've told customers we operate, and that matters more than one quarter.\"",
      "\"I hold high performers to the same ethical standards as anyone else—if I apply the rules selectively, I've communicated that results justify any behavior.\"",
      "\"Ethical leadership means speaking up when you see something wrong even when it's awkward—silence in the face of misconduct is tacit endorsement.\""
    ]
  },

  "EI009": {
    id: "EI009",
    code: "EI:009",
    name: "Demonstrate patience",
    definition: "Maintain composure and a constructive attitude when dealing with delays, setbacks, and interactions that require extended time and attention.",
    keyPoints: [
      "Composure Under Delay: Maintaining professional effectiveness when timelines extend or progress is slow.",
      "Teaching Patience: With developing employees or clients, patience is the bridge between where they are and where they need to be.",
      "Process Trust: Patience requires belief that a good process will ultimately yield good results even when progress seems slow.",
      "Listening Patience: Allowing others to fully express themselves without interrupting or rushing to respond.",
      "Strategic Patience: Recognizing that some opportunities require waiting for the right timing rather than forcing premature action."
    ],
    roleplayTips: [
      "\"I've learned that rushing a decision to relieve the discomfort of uncertainty almost always produces a worse outcome than taking the time to get it right.\"",
      "\"With a new team member, I invest patient coaching time early because it pays back exponentially—the temptation to just do it yourself is a trap that stunts their development.\"",
      "\"Patient listening isn't passive—it's the active choice to fully understand before I respond, which consistently leads to better conversations than reacting to the first thing I hear.\""
    ]
  },

  "EI131": {
    id: "EI131",
    code: "EI:131",
    name: "Take initiative",
    definition: "Identify and act on opportunities for contribution without waiting to be directed, demonstrating self-motivation and ownership of outcomes.",
    keyPoints: [
      "Proactive Identification: Initiative starts with noticing what needs to be done before being asked.",
      "Bias for Action: Moving forward with available information rather than waiting for perfect clarity.",
      "Scope Extension: Doing more than the minimum defined job to contribute additional value.",
      "Entrepreneurial Thinking: Treating problems as opportunities to demonstrate capability and create value.",
      "Organizational Impact: High-initiative individuals create disproportionate organizational value and build strong professional reputations."
    ],
    roleplayTips: [
      "\"I saw the gap in our onboarding process and developed a solution without being asked—it's now used across the department and reduced ramp time by 30%.\"",
      "\"Initiative means I don't wait for permission to identify a problem and draft a proposed solution—I bring the analysis and recommendation, not just the question.\"",
      "\"The difference between good and great professionals is often simply that great ones move first—they don't wait to be told there's an opportunity.\""
    ]
  },

  "EI132": {
    id: "EI132",
    code: "EI:132",
    name: "Demonstrate creativity",
    definition: "Generate novel and useful ideas, solutions, and approaches that create value by connecting concepts in new ways or challenging existing assumptions.",
    keyPoints: [
      "Divergent Thinking: Generating many possible ideas before evaluating and converging on the best.",
      "Assumption Challenging: Creativity often requires questioning constraints that seem fixed but are actually malleable.",
      "Cross-Domain Thinking: Applying concepts from one field to challenges in another generates novel solutions.",
      "Psychological Safety: Creative thinking requires environments where new ideas can be expressed without ridicule.",
      "Disciplined Creativity: The most valuable creativity produces actionable, feasible ideas rather than purely theoretical ones."
    ],
    roleplayTips: [
      "\"The breakthrough came when we stopped accepting the constraint as fixed and asked: what if we approached the problem from the opposite direction?\"",
      "\"I borrowed the subscription model from software and applied it to our maintenance services—it transformed our revenue profile and created a stickier customer relationship.\"",
      "\"Creativity isn't a personality trait—it's a process. If I use divergent thinking before evaluation, I consistently generate better solutions than if I evaluate ideas as they occur.\""
    ]
  },

  "EI063": {
    id: "EI063",
    code: "EI:063",
    name: "Demonstrate stress tolerance",
    definition: "Maintain effective performance, sound judgment, and professional composure when working under pressure, ambiguity, or in high-stakes situations.",
    keyPoints: [
      "Baseline Preparation: Physical fitness, sleep, and recovery practices build the neurological capacity for stress tolerance.",
      "Cognitive Reframing: Viewing pressure as a performance signal rather than a threat reduces stress impairment.",
      "Performance Under Pressure: Stress tolerance is the ability to access capability when conditions are demanding.",
      "Team Impact: Leaders who maintain composure under pressure stabilize their teams; those who don't amplify the stress.",
      "Long-term Sustainability: Stress tolerance enables high performance over extended periods without burnout."
    ],
    roleplayTips: [
      "\"I've trained myself to treat high-pressure moments as the situations my work is for, not exceptions to it—that reframe actually improves my performance when stakes are high.\"",
      "\"During the product launch crisis, I deliberately slowed down while everyone else sped up—calmness under pressure is a leadership asset that the team needed from me in that moment.\"",
      "\"My stress tolerance comes from preparation and from having navigated difficult situations before—experience builds confidence that you can handle what's coming.\""
    ]
  },

  "EI133": {
    id: "EI133",
    code: "EI:133",
    name: "Apply self-management principles",
    definition: "Manage your own behavior, time, emotions, and professional development to maximize effectiveness and achieve personal and organizational goals.",
    keyPoints: [
      "Goal Setting: Define clear professional goals that guide daily decisions and effort allocation.",
      "Time Management: Prioritize activities by value created and protect time for high-impact work.",
      "Emotional Management: Regulate emotional responses to maintain effectiveness across different situations.",
      "Self-Development: Take active ownership of continuous skill and knowledge development.",
      "Accountability: Hold yourself to commitments and performance standards without requiring external monitoring."
    ],
    roleplayTips: [
      "\"I plan my week on Sunday evening and review my priorities every morning—self-management is a system, not a personality trait.\"",
      "\"I treat my development as a personal responsibility, not a benefit my employer provides—I invest in my own skills regardless of whether training is offered.\"",
      "\"Self-management means I produce the same quality of work whether my manager is watching or not—the standard is internal, not external.\""
    ]
  },

  "EI006": {
    id: "EI006",
    code: "EI:006",
    name: "Use time-management skills",
    definition: "Plan, prioritize, and execute professional activities to maximize productive use of time and consistently deliver results within required timeframes.",
    keyPoints: [
      "Priority Clarity: Identify the highest-value activities and protect time for them before addressing lower-priority demands.",
      "Planning: Effective time management requires thinking ahead—daily, weekly, and project-level planning.",
      "Batching: Group similar tasks to reduce cognitive switching costs and improve efficiency.",
      "Delegation: Assign appropriate tasks to others to free capacity for work only you can do.",
      "Time Tracking: Understanding how time is actually spent is prerequisite to improving how it's used."
    ],
    roleplayTips: [
      "\"I time-block my calendar for the three most important projects each week before anything else gets scheduled—if the critical work doesn't have protected time, it won't happen.\"",
      "\"Delegation isn't abdication—I match tasks to the person with the right skill and capacity, set clear expectations, and follow up at appropriate checkpoints.\"",
      "\"I audited how I spent time last month and found 30% was in meetings that didn't require my participation—reallocating that time to high-priority projects produced measurable results.\""
    ]
  },

  "EI027": {
    id: "EI027",
    code: "EI:027",
    name: "Develop self-understanding",
    definition: "Build accurate knowledge of your own values, motivations, emotional patterns, and behavioral tendencies to make better professional decisions and work more effectively with others.",
    keyPoints: [
      "Values Clarity: Understanding what you fundamentally care about guides decisions when external criteria are ambiguous.",
      "Motivational Awareness: Knowing what drives your best performance enables you to seek and create those conditions.",
      "Trigger Identification: Recognizing personal emotional triggers allows you to manage responses before they escalate.",
      "Impact Awareness: Understanding how your behavior affects others is essential to self-knowledge.",
      "Continuous Inquiry: Self-understanding is dynamic—it requires ongoing reflection as experience and context evolve."
    ],
    roleplayTips: [
      "\"Self-understanding has helped me recognize that I do my best thinking in quiet, uninterrupted blocks—I've structured my work environment to protect that condition.\"",
      "\"I know that my tendency to move toward action quickly is a strength in crisis situations and a weakness in complex decisions—I've built deliberate practices to slow down when the situation calls for it.\"",
      "\"Understanding my own values has made professional decisions much clearer—when an opportunity conflicts with what I care about, the answer is obvious regardless of the financial appeal.\""
    ]
  },

  "EI134": {
    id: "EI134",
    code: "EI:134",
    name: "Demonstrate adaptability in professional life",
    definition: "Adjust effectively to evolving professional demands, organizational changes, and career transitions while maintaining high performance and continued growth.",
    keyPoints: [
      "Career Adaptability: Willingness and ability to evolve skills, roles, and strategies in response to changing market demands.",
      "Learning Agility: Acquiring new capabilities quickly when current skills are insufficient for emerging challenges.",
      "Change Tolerance: Maintaining performance through organizational transitions without waiting for certainty to act.",
      "Perspective Flexibility: Adjusting viewpoints when new evidence challenges existing assumptions.",
      "Resilient Identity: Maintaining a stable professional identity while adapting methods and approaches to new contexts."
    ],
    roleplayTips: [
      "\"When my industry automated the work I'd specialized in for years, I treated it as a prompt to develop the adjacent skills that create more value than the automated task ever did.\"",
      "\"Adaptability in my career has meant being willing to take lateral moves when they accelerated my development, not just pursuing vertical advancement.\"",
      "\"I hold my professional methods loosely but my values firmly—that distinction is what allows genuine adaptability without losing professional identity.\""
    ]
  },

  "EI005": {
    id: "EI005",
    code: "EI:005",
    name: "Develop personal budget",
    definition: "Create and maintain a financial plan that allocates income across spending, saving, and investing categories to achieve personal financial goals and build long-term security.",
    keyPoints: [
      "Income and Expense Tracking: Accurate records of inflows and outflows are the foundation of effective budgeting.",
      "Needs vs. Wants: Distinguishing between essential and discretionary spending enables informed prioritization.",
      "Savings Priority: Effective budgets treat saving as a fixed expense, not a residual from whatever is left over.",
      "Emergency Fund: Maintaining 3-6 months of essential expenses in accessible savings protects against income disruption.",
      "Goal Alignment: Budgets that reflect personal goals produce more sustained commitment than arbitrary expense limits."
    ],
    roleplayTips: [
      "\"I treat my savings contribution as the first line item in my budget, not the last—if saving comes after spending, it doesn't happen consistently.\"",
      "\"My budget is built around my financial goals—knowing exactly what I'm saving for makes it easier to make trade-offs on discretionary spending.\"",
      "\"Building a personal budget is the same discipline as building a business budget—income, fixed costs, variable costs, and the surplus allocated to priority investments.\""
    ]
  },

  "EI060": {
    id: "EI060",
    code: "EI:060",
    name: "Exhibit a professional image",
    definition: "Present yourself through appearance, communication, and behavior in a way that conveys competence, credibility, and professionalism aligned with your role and industry.",
    keyPoints: [
      "Consistent Branding: Your professional image should be consistent across in-person, digital, and social media presence.",
      "Industry Calibration: Professional image standards vary by industry—calibrating to the right benchmark is essential.",
      "Communication Style: Word choice, tone, grammar, and format all contribute to professional image.",
      "Digital Presence: LinkedIn profile, email communication, and social media activity are visible components of professional image.",
      "Reputation Capital: Professional image is an asset that opens opportunities—or closes them—based on the impression you create."
    ],
    roleplayTips: [
      "\"My professional brand is: strategic, reliable, and direct—every communication I send should reinforce those attributes, whether it's a quick email or a formal presentation.\"",
      "\"Before I post anything professionally, I ask: does this reflect how I want to be known? Professional image is built one impression at a time.\"",
      "\"I invest in my professional image because it creates opportunities—people extend trust and opportunity to those who look and act the part.\""
    ]
  },

  "EI041": {
    id: "EI041",
    code: "EI:041",
    name: "Maintain positive attitude",
    definition: "Consistently project optimism, resilience, and forward-focus that energizes colleagues and creates momentum toward goals even in difficult circumstances.",
    keyPoints: [
      "Choice Architecture: Positive attitude is a deliberate choice, not a passive state that depends on circumstances.",
      "Adversity Response: The distinguishing feature of a positive attitude is how it holds up under difficulty, not just good times.",
      "Energy Management: Positive individuals manage their own energy actively, protecting it and renewing it as needed.",
      "Solution Focus: Positive people orient conversation and thinking toward what is possible rather than cataloging what's wrong.",
      "Team Climate: Leaders who maintain positive attitude set the emotional climate for their teams."
    ],
    roleplayTips: [
      "\"I've trained myself to find at least one thing I can control and improve in every difficult situation—that discipline prevents me from staying stuck in a negative frame.\"",
      "\"A positive attitude doesn't mean pretending problems don't exist—it means addressing them with the conviction that solutions are findable.\"",
      "\"I notice when my energy is running low and I take proactive steps to recharge rather than trying to push through—sustainable positive attitude requires intentional management.\""
    ]
  },

  "EI135": {
    id: "EI135",
    code: "EI:135",
    name: "Demonstrate self-confidence",
    definition: "Project appropriate confidence in your capabilities, judgment, and contributions in professional settings, building the credibility that enables effective influence.",
    keyPoints: [
      "Competence Foundation: Genuine self-confidence is built on actual capability developed through preparation and experience.",
      "Calibrated Confidence: Effective confidence is proportionate to actual competence—neither underconfident nor overconfident.",
      "Presence: Self-confidence manifests in body language, eye contact, vocal quality, and willingness to take up appropriate space.",
      "Risk Tolerance: Confident professionals are willing to voice unpopular views and take calculated risks.",
      "Recovery: True self-confidence includes the ability to acknowledge mistakes without having your sense of competence shattered."
    ],
    roleplayTips: [
      "\"I prepared thoroughly for this presentation because confidence is earned, not assumed—I know this material cold, and that foundation lets me engage confidently with any question.\"",
      "\"I stated my recommendation clearly and directly, not tentatively—hedging and qualifications signal doubt that undermines the message I was trying to deliver.\"",
      "\"Self-confidence doesn't mean being right every time; it means being willing to take a clear position and adjusting it when evidence warrants, without either rigidity or excessive deference.\""
    ]
  },

  "EI014": {
    id: "EI014",
    code: "EI:014",
    name: "Respect others",
    definition: "Treat all individuals with dignity, fairness, and consideration regardless of role, background, or perspective, creating an environment where diverse people can contribute effectively.",
    keyPoints: [
      "Fundamental Dignity: Every person deserves baseline respect regardless of their status or relationship to you.",
      "Active Respect: Respect is demonstrated through actions—listening fully, following through, giving credit—not just words.",
      "Perspective Validation: Respect includes taking others' perspectives seriously even when you disagree.",
      "Inclusive Behavior: Respectful workplaces actively include all voices rather than allowing default patterns to marginalize some.",
      "Reciprocity: Respect tends to be reciprocal—those who genuinely respect others typically receive respect in return."
    ],
    roleplayTips: [
      "\"I make a point of engaging with the ideas, not the title—the most junior person in the room sometimes has the most accurate read on a problem.\"",
      "\"Respect means I give every person I interact with my genuine attention, not my divided attention—that simple behavior communicates more than any policy.\"",
      "\"Treating people with respect isn't contingent on whether I agree with them—I can disagree strongly and still honor the person I'm disagreeing with.\""
    ]
  },

  "EI036": {
    id: "EI036",
    code: "EI:036",
    name: "Assess oneself and set goals",
    definition: "Conduct honest self-evaluation to identify development priorities and translate them into specific, measurable professional goals with action plans.",
    keyPoints: [
      "Honest Assessment: Effective self-evaluation requires confronting uncomfortable gaps between current and desired performance.",
      "SMART Goals: Development goals should be Specific, Measurable, Achievable, Relevant, and Time-bound.",
      "Gap Analysis: Compare current performance to desired state to identify the highest-priority development areas.",
      "Action Planning: Goals without action plans are wishes—identify the specific steps and resources needed.",
      "Progress Review: Regular review of goals against progress enables course correction and celebrates milestones."
    ],
    roleplayTips: [
      "\"My annual self-assessment starts with asking the people who see my work every day for candid feedback—that input shapes my development priorities more reliably than my own perception.\"",
      "\"My development goal this year is specific: improve my financial modeling skills to the point where I can build a three-statement model independently by Q3.\"",
      "\"I review my professional goals monthly, not just at annual review time—development happens through consistent small steps, not periodic sprints.\""
    ]
  },

  "EI037": {
    id: "EI037",
    code: "EI:037",
    name: "Balance personal and professional life",
    definition: "Manage the allocation of energy, time, and attention across personal and professional domains in a way that sustains performance and well-being over the long term.",
    keyPoints: [
      "Sustainability: Extreme imbalance leads to burnout that ultimately harms both professional performance and personal well-being.",
      "Boundary Setting: Establishing and communicating clear boundaries between work and personal time enables genuine renewal.",
      "Energy Management: Professional effectiveness depends on managing personal energy—physical, emotional, mental, and spiritual.",
      "Integration vs. Balance: Some periods require significant imbalance; the goal is recovery and rebalancing, not constant equilibrium.",
      "Values Alignment: Work-life balance decisions should reflect your values about what matters most in the long run."
    ],
    roleplayTips: [
      "\"I protect my boundaries not as a limitation on my commitment, but because I know my professional effectiveness is directly tied to my recovery and renewal outside of work.\"",
      "\"There are seasons in my career that require intense professional investment—I accept that, but I make sure to rebalance deliberately when the intense period ends.\"",
      "\"Balance isn't a static state; it's an active practice of monitoring and adjusting based on the signals from both your professional performance and your personal well-being.\""
    ]
  },

  "EI136": {
    id: "EI136",
    code: "EI:136",
    name: "Recognize and address personal biases",
    definition: "Identify the unconscious mental shortcuts and assumptions that affect your professional decisions and take deliberate steps to reduce their distorting influence.",
    keyPoints: [
      "Bias Types: Confirmation bias, anchoring, availability heuristic, and affinity bias are among the most common professional biases.",
      "Impact Awareness: Unconscious biases affect hiring, performance evaluation, resource allocation, and strategic decisions.",
      "Debiasing Practices: Structured processes, diverse input, and deliberate devil's advocacy reduce bias influence.",
      "Self-Knowledge: Recognizing your specific biases is the first requirement for managing them.",
      "Organizational Design: Systems and processes can be designed to reduce the influence of individual bias on key decisions."
    ],
    roleplayTips: [
      "\"I run a structured interview process with defined criteria and diverse interviewers specifically to reduce the influence of affinity bias on hiring decisions.\"",
      "\"I noticed I was anchoring on the first number in the negotiation—recognizing that bias in real time let me consciously adjust my evaluation before making a counteroffer.\"",
      "\"Building cognitive diversity into every decision-making group is my primary debiasing practice—different thinkers challenge each other's blind spots in ways that no individual self-check can replicate.\""
    ]
  },

  "EI137": {
    id: "EI137",
    code: "EI:137",
    name: "Demonstrate resilience",
    definition: "Recover effectively from setbacks, failures, and adversity, returning to high performance without losing momentum or professional confidence.",
    keyPoints: [
      "Recovery Speed: Resilience is measured by how quickly and completely you return to effective functioning after a setback.",
      "Cognitive Reframing: Viewing setbacks as temporary, specific, and changeable—rather than permanent, pervasive, and personal—supports resilience.",
      "Support Networks: Strong professional and personal relationships accelerate resilience by providing perspective and encouragement.",
      "Learning Extraction: Resilient people extract learning from failure rather than avoiding or ruminating on it.",
      "Adversity History: Successfully navigating past adversity builds the confidence and capability to navigate future challenges."
    ],
    roleplayTips: [
      "\"After we lost that major contract, I spent one day fully acknowledging the setback and then shifted completely to what we were going to do next—resilience requires moving through, not around, difficult emotions.\"",
      "\"Every significant failure in my career has been a forcing function for growth that wouldn't have happened otherwise—that pattern makes current setbacks easier to put in perspective.\"",
      "\"Resilience isn't the absence of being affected by difficulty—it's the ability to come back from it with your capabilities and your confidence intact.\""
    ]
  },

  "EI061": {
    id: "EI061",
    code: "EI:061",
    name: "Exhibit ethical work habits",
    definition: "Demonstrate consistent ethical conduct in daily work practices including honesty, accuracy, fair dealing, and respect for others' time, property, and information.",
    keyPoints: [
      "Work Quality Honesty: Represent the quality and completeness of your work accurately to supervisors and colleagues.",
      "Time Integrity: Honor time commitments and use work time for work purposes.",
      "Credit Attribution: Give accurate credit for others' contributions rather than claiming unearned recognition.",
      "Resource Integrity: Use organizational resources—equipment, supplies, information systems—only for legitimate business purposes.",
      "Process Compliance: Follow established procedures and controls rather than finding shortcuts that bypass safeguards."
    ],
    roleplayTips: [
      "\"I attributed the idea to the person who originated it in my presentation—proper credit isn't just ethically required, it builds the team trust that produces more good ideas.\"",
      "\"When my work has errors, I disclose them proactively rather than hoping they go unnoticed—the ethical habit of accurate representation is non-negotiable.\"",
      "\"Ethical work habits compound over time into a professional reputation that's more valuable than any individual achievement—it takes years to build and moments to destroy.\""
    ]
  },

  "EI034": {
    id: "EI034",
    code: "EI:034",
    name: "Set personal goals",
    definition: "Identify and commit to specific personal and professional development objectives that provide direction, motivation, and a standard for measuring growth.",
    keyPoints: [
      "Goal Clarity: Specific goals outperform vague aspirations by providing clear targets for effort and attention.",
      "Intrinsic Alignment: Goals connected to personal values and purpose generate more sustained motivation.",
      "Stretch vs. Achievable: Effective goals are challenging enough to require genuine effort but realistic enough to sustain motivation.",
      "Written Commitment: Writing goals increases commitment and the likelihood of follow-through.",
      "Review Cadence: Regular review maintains focus and enables adjustment when circumstances change."
    ],
    roleplayTips: [
      "\"My three-year professional goal is to lead a P&L—every development decision I make is evaluated against whether it builds the capabilities that goal requires.\"",
      "\"I write my goals down and review them weekly—that practice makes them active guides rather than aspirations I express once and forget.\"",
      "\"Goals without deadlines are dreams—I always attach a specific timeline to a professional objective because the constraint creates the urgency that drives action.\""
    ]
  },

  "EI064": {
    id: "EI064",
    code: "EI:064",
    name: "Act as a professional",
    definition: "Consistently demonstrate the standards of conduct, performance, and values that define professionalism in your field, regardless of external pressures or observation.",
    keyPoints: [
      "Standards Internalization: True professionalism reflects internalized standards, not external compliance.",
      "Conduct Consistency: Professional behavior applies in all settings—formal presentations, casual interactions, and stressful moments.",
      "Continuous Development: Professionals invest continuously in the expertise and skills that define excellence in their field.",
      "Accountability: Professionals hold themselves to high standards and own outcomes without making excuses.",
      "Representation: As a professional, your behavior reflects on your organization and profession, not just yourself."
    ],
    roleplayTips: [
      "\"I hold myself to professional standards because they're mine, not because someone is evaluating me—the distinction between external compliance and internal commitment makes all the difference.\"",
      "\"Professionalism in a difficult situation means maintaining my standards when it's hardest—the client who's being unreasonable gets the same professional behavior as the delightful one.\"",
      "\"I represent this company in every interaction I have—that responsibility is part of what it means to be a professional, and I take it seriously.\""
    ]
  },

  "EI112": {
    id: "EI112",
    code: "EI:112",
    name: "Exhibit entrepreneurial mindset",
    definition: "Approach professional challenges and opportunities with the proactive, creative, and value-creating orientation of an entrepreneur, regardless of organizational context.",
    keyPoints: [
      "Opportunity Orientation: Entrepreneurial thinkers see unmet needs and inefficiencies as opportunities to create value.",
      "Resourcefulness: Finding creative solutions within constraints rather than waiting for ideal conditions.",
      "Risk Tolerance: Accepting appropriate uncertainty in pursuit of significant value creation.",
      "Ownership: Taking personal responsibility for outcomes as if the business is your own.",
      "Innovation Drive: Continuously questioning current approaches and searching for better alternatives."
    ],
    roleplayTips: [
      "\"I run my function as if I own it—every budget decision, every hire, every process choice is evaluated against what I'd do if my personal capital were at stake.\"",
      "\"The entrepreneurial mindset means I'm always asking: is there a better way to do this? And when I find one, I champion it rather than accepting the status quo.\"",
      "\"Intrapreneurship—bringing entrepreneurial thinking to a corporate context—is how large organizations stay innovative; I see myself as responsible for that in my area.\""
    ]
  },


  // ── HR: Human Resources Management ───────────────────────────────────────

  "HR410": {
    id: "HR410",
    code: "HR:410",
    name: "Orient new employees",
    definition: "Introduce new employees to the organization's culture, policies, roles, and expectations in a structured process that accelerates productivity and builds engagement.",
    keyPoints: [
      "First Impression: Orientation sets the tone for the employee relationship and significantly affects early engagement and retention.",
      "Cultural Immersion: Communicating organizational values, norms, and expectations clearly establishes the cultural foundation.",
      "Role Clarity: New employees need a clear picture of their responsibilities, success metrics, and near-term priorities.",
      "Relationship Building: Introductions to key colleagues and stakeholders accelerate integration and informal learning.",
      "Structured Timeline: A phased 30-60-90 day plan provides scaffolding that helps new employees build capability and confidence."
    ],
    roleplayTips: [
      "\"Our orientation program is designed to accelerate time-to-contribution—by day 30, every new employee has a clear picture of their role, their team, and the three things they need to accomplish in their first 90 days.\"",
      "\"The most important thing we communicate in orientation isn't process—it's the values and culture that explain how we make decisions when the rules don't cover the situation.\"",
      "\"I pair every new hire with a peer mentor for the first 90 days—the formal orientation covers what's written; the mentor covers the unwritten rules that actually determine success here.\""
    ]
  },

  "HR411": {
    id: "HR411",
    code: "HR:411",
    name: "Plan employee training and development activities",
    definition: "Design and implement learning experiences that build the capabilities employees need to perform their current roles excellently and prepare for future responsibilities.",
    keyPoints: [
      "Needs Analysis: Identify skill gaps between current capabilities and performance requirements before designing training.",
      "Learning Methods: Effective development uses a blended approach—formal training, on-the-job experience, coaching, and peer learning.",
      "70-20-10 Model: 70% of learning comes from experience, 20% from relationships, and 10% from formal training.",
      "Individual Plans: Tailored development plans linked to individual goals and organizational needs maximize return.",
      "Measurement: Training effectiveness should be measured at the level of behavior change and business impact, not just satisfaction."
    ],
    roleplayTips: [
      "\"Before I design any training program, I do a gap analysis—training that doesn't address an actual performance gap is an expense without a return.\"",
      "\"The most powerful development investment we make is stretch assignments—putting people in roles slightly beyond their current capability, with support, produces growth that classrooms can't replicate.\"",
      "\"I measure training effectiveness at level 3 and 4 of the Kirkpatrick model—not just reaction and learning, but whether behaviors changed and whether business results improved.\""
    ]
  },

  "HR412": {
    id: "HR412",
    code: "HR:412",
    name: "Assess employee performance",
    definition: "Systematically evaluate individual contributions against defined expectations to provide feedback, support development, inform compensation decisions, and improve organizational performance.",
    keyPoints: [
      "Clear Standards: Effective assessment requires performance standards that are defined, communicated, and understood in advance.",
      "Multiple Data Points: Rigorous performance assessment draws on objective results, behavioral observations, and stakeholder feedback.",
      "Ongoing Feedback: Formal reviews should summarize continuous feedback, not introduce surprises.",
      "Developmental Focus: Assessment's primary purpose should be improvement, not judgment—combine evaluation with specific development support.",
      "Bias Reduction: Structured assessment processes with defined criteria reduce the influence of personal bias on evaluations."
    ],
    roleplayTips: [
      "\"Effective performance assessment has no surprises—if someone is hearing significant feedback for the first time in their annual review, I've failed as a manager throughout the year.\"",
      "\"I assess performance against the expectations we agreed to at the start of the period—anything else is moving the goalposts, which destroys trust and motivation.\"",
      "\"I calibrate my assessments across the team before communicating them—calibration ensures I'm applying consistent standards rather than letting individual relationships bias my ratings.\""
    ]
  },

  "HR360": {
    id: "HR360",
    code: "HR:360",
    name: "Explain the role of ethics in human resources management",
    definition: "Describe the ethical obligations and standards that govern HR practices including hiring, compensation, performance management, and employee relations.",
    keyPoints: [
      "Fairness: HR decisions must be based on job-related criteria and applied consistently to avoid unfair discrimination.",
      "Confidentiality: Employee information shared with HR is confidential and must be handled with strict discretion.",
      "Legal Compliance: Employment law establishes minimum ethical standards for treatment of employees and applicants.",
      "Transparency: Honest communication about policies, decisions, and their rationale builds organizational trust.",
      "Advocate Role: HR has an ethical obligation to advocate for fair treatment of employees, not just organizational interests."
    ],
    roleplayTips: [
      "\"Every HR decision I make passes a simple test: if the employee knew everything I know and observed everything I did, would they view the process as fair—even if they disagree with the outcome?\"",
      "\"Employee information shared in confidence stays that way—I don't discuss one employee's performance or personal situation with colleagues who don't have a need to know.\"",
      "\"HR's ethical obligation is to the organization and its people simultaneously—when those interests conflict, I advocate for the solution that is both legally defensible and genuinely fair.\""
    ]
  },

  // ── MK: Marketing ─────────────────────────────────────────────────────────

  "MK001": {
    id: "MK001",
    code: "MK:001",
    name: "Explain the nature and scope of the marketing function",
    definition: "Describe what marketing encompasses—from identifying customer needs to delivering value—and how the marketing function connects business capabilities with market opportunities.",
    keyPoints: [
      "Marketing Definition: Creating, communicating, delivering, and exchanging offerings that have value for customers and society.",
      "Marketing Mix: Product, price, place, and promotion are the four controllable variables marketers use to reach target markets.",
      "Customer Orientation: Effective marketing starts with understanding customer needs and works backward to product development.",
      "Scope Breadth: Marketing spans market research, product development, pricing, distribution, promotion, and customer relationship management.",
      "Value Creation: Marketing's fundamental purpose is to create and communicate value that attracts and retains profitable customers."
    ],
    roleplayTips: [
      "\"Marketing isn't just advertising—it's everything from identifying unmet customer needs to designing the product, setting the price, choosing the distribution channel, and communicating the value proposition.\"",
      "\"The marketing function is the organization's connection to the market—it translates customer insights into business decisions and business capabilities into customer value.\"",
      "\"A customer-centric marketing approach starts with 'what does the customer need?' rather than 'what do we want to sell?'—that orientation is the foundation of sustainable growth.\""
    ]
  },

  "MK002": {
    id: "MK002",
    code: "MK:002",
    name: "Explain the role of customer relationship management in the marketing function",
    definition: "Describe how CRM strategies and systems enable businesses to build and maintain profitable long-term customer relationships by managing interactions across the customer lifecycle.",
    keyPoints: [
      "CRM Definition: Strategies, processes, and technologies for managing customer interactions and data throughout the relationship lifecycle.",
      "Customer Lifetime Value: CRM focuses marketing investment on customers who generate the greatest long-term value.",
      "Personalization: CRM data enables personalized communication and offers that increase relevance and response rates.",
      "Retention Focus: Acquiring new customers costs 5-7x more than retaining existing ones—CRM prioritizes retention economics.",
      "Data Integration: Effective CRM integrates data across marketing, sales, and service touchpoints for a complete customer view."
    ],
    roleplayTips: [
      "\"Our CRM gives us a complete view of every customer interaction across marketing, sales, and service—that data is what enables us to personalize at scale and identify at-risk customers before they churn.\"",
      "\"CRM isn't software—it's a business strategy; the technology enables the strategy but doesn't substitute for a genuine commitment to understanding and serving individual customers.\"",
      "\"We use CRM data to calculate customer lifetime value by segment, which tells us exactly where to allocate acquisition and retention investment for maximum return.\""
    ]
  },

  "MK014": {
    id: "MK014",
    code: "MK:014",
    name: "Explain the concept of market and market identification",
    definition: "Describe how businesses define the specific groups of customers they intend to serve and the processes used to identify, segment, and prioritize markets.",
    keyPoints: [
      "Market Definition: A market is a group of potential customers with similar needs and the willingness and ability to purchase.",
      "Segmentation Variables: Markets are segmented by demographics, psychographics, geographics, and behavioral characteristics.",
      "Target Market Selection: Not all segments are equally attractive—evaluate size, growth, profitability, and fit with capabilities.",
      "Positioning: Once a target market is selected, position the offering to occupy a distinctive, valued place in customers' minds.",
      "Market Size: Estimating TAM (total addressable market), SAM (serviceable available market), and SOM (serviceable obtainable market) frames growth potential."
    ],
    roleplayTips: [
      "\"Our target market is defined by three criteria: they have the problem our product solves, they have the budget to pay for our solution, and they are reachable through our distribution channels.\"",
      "\"Market segmentation tells us which customers to prioritize—not all customers are equally valuable, and trying to serve everyone usually means serving no one particularly well.\"",
      "\"I estimated our serviceable obtainable market at $50M based on segment size, competitive share assumptions, and our distribution capacity—that's the number that drives our growth plan.\""
    ]
  },

  "MK015": {
    id: "MK015",
    code: "MK:015",
    name: "Describe the role of marketing research",
    definition: "Explain how systematic collection and analysis of market information reduces decision uncertainty and guides strategic choices about products, pricing, distribution, and promotion.",
    keyPoints: [
      "Research Purpose: Marketing research reduces the risk of poor decisions by replacing assumption with evidence.",
      "Primary Research: Original data collected for a specific purpose through surveys, interviews, focus groups, and observation.",
      "Secondary Research: Existing data from industry reports, government statistics, and competitor analysis.",
      "Quantitative vs. Qualitative: Quantitative research measures; qualitative research explains—both are needed for complete insight.",
      "Research Process: Define the problem, design the study, collect data, analyze results, and translate findings into actionable recommendations."
    ],
    roleplayTips: [
      "\"Before we invest in product development, we validate the concept with qualitative research—it's far cheaper to discover a weak value proposition in research than in launch.\"",
      "\"Our pricing research used conjoint analysis to quantify how much customers value each feature—that data tells us exactly where to set the price to maximize revenue.\"",
      "\"Marketing research doesn't eliminate risk; it reduces it—the goal is to make decisions based on evidence rather than intuition whenever the cost of research is lower than the cost of being wrong.\""
    ]
  },

  "MK019": {
    id: "MK019",
    code: "MK:019",
    name: "Explain the concept of product in the marketing mix",
    definition: "Describe the product variable of the marketing mix, including how product decisions about features, quality, branding, and packaging create customer value and competitive differentiation.",
    keyPoints: [
      "Product Levels: Core benefit, actual product (features, quality, design), and augmented product (warranty, service, support).",
      "Product Life Cycle: Introduction, growth, maturity, and decline stages each require different marketing strategies.",
      "Branding: A strong brand creates recognition, trust, and permission to charge premium prices.",
      "Product Mix Decisions: Width (number of lines), length (items per line), depth (variants), and consistency of the product portfolio.",
      "New Product Development: The innovation funnel from ideation through concept testing, development, and launch."
    ],
    roleplayTips: [
      "\"Customers don't buy products—they buy the benefits and solutions products deliver; understanding the job-to-be-done defines what our product actually needs to do.\"",
      "\"Our product is in the maturity stage—we're investing in feature extensions and brand reinforcement to maintain share rather than the penetration spending appropriate for introduction.\"",
      "\"The augmented product—our warranty, customer support, and implementation services—is as important to the customer's purchase decision as the core product features.\""
    ]
  },

  // ── EN: Entrepreneurship ──────────────────────────────────────────────────

  "EN039": {
    id: "EN039",
    code: "EN:039",
    name: "Explain the role of ethics in entrepreneurship",
    definition: "Describe how ethical conduct shapes the entrepreneur's relationships with customers, investors, employees, and the community, and why ethical practices are fundamental to sustainable business success.",
    keyPoints: [
      "Trust Foundation: Ethical behavior builds the stakeholder trust that is the foundation of sustainable entrepreneurial ventures.",
      "Reputation Asset: An entrepreneur's reputation is a primary competitive asset—ethical lapses destroy it faster than success builds it.",
      "Investor Confidence: Investors assess the founder's integrity as a critical risk factor in funding decisions.",
      "Employee Attraction: Ethical organizations attract and retain higher-quality talent than those with ambiguous values.",
      "Long-term Lens: Ethical shortcuts that produce short-term gains typically create long-term liabilities that outweigh the benefit."
    ],
    roleplayTips: [
      "\"My founding principle is that every customer interaction, every investor communication, and every employee decision must be something I'd be comfortable describing publicly—that test has guided every major choice.\"",
      "\"We walked away from a $2M contract because the terms would have required us to compromise how we represent our product to end users—our reputation with customers is worth more than any single deal.\"",
      "\"Ethical entrepreneurship isn't just idealism—investors, customers, and top talent all do due diligence on founder character, and the premium for integrity is real.\""
    ]
  },

  "EN040": {
    id: "EN040",
    code: "EN:040",
    name: "Describe the concept of entrepreneurship",
    definition: "Explain the nature of entrepreneurship as the identification of opportunities, assembly of resources, and creation of new ventures to generate economic and social value.",
    keyPoints: [
      "Opportunity Recognition: Entrepreneurs identify gaps between current reality and potential value that others overlook.",
      "Resource Assembly: Entrepreneurs combine land, labor, capital, and knowledge in new configurations to create value.",
      "Risk Acceptance: Entrepreneurs voluntarily bear financial and personal risk in pursuit of profit or mission.",
      "Value Creation: Successful entrepreneurship creates value for customers, employees, investors, and communities.",
      "Innovation: Entrepreneurship drives the innovation that creates new industries and disrupts existing ones."
    ],
    roleplayTips: [
      "\"Entrepreneurship is fundamentally about creating value that didn't exist before—the financial return is the measure of that value creation, not the purpose of it.\"",
      "\"The entrepreneurial insight is rarely a completely new idea; it's more often a new combination of existing elements—seeing how to connect things others haven't connected yet.\"",
      "\"Every entrepreneur accepts the possibility of failure as the price of attempting something meaningful—the risk-return trade-off is explicit in the entrepreneurial choice.\""
    ]
  },

  "EN044": {
    id: "EN044",
    code: "EN:044",
    name: "Determine the feasibility of a business idea",
    definition: "Assess whether a proposed business concept has sufficient market demand, competitive viability, operational feasibility, and financial potential to justify pursuing.",
    keyPoints: [
      "Market Feasibility: Is there sufficient demand for the product or service at a price that generates adequate margin?",
      "Technical Feasibility: Can the product or service be delivered with available or accessible technology and expertise?",
      "Financial Feasibility: Do projected revenues, costs, and capital requirements support a viable return on investment?",
      "Competitive Feasibility: Can the venture achieve a sustainable competitive advantage against existing and potential competitors?",
      "Founder Fit: Does the founding team have the skills, network, and commitment the venture requires?"
    ],
    roleplayTips: [
      "\"Before writing a business plan, I validate the core assumption: will customers actually pay for this solution? I talk to 50 potential customers before I invest in anything else.\"",
      "\"The financial feasibility test isn't whether the business can make money—it's whether the return justifies the risk compared to what we could do with the same capital and time elsewhere.\"",
      "\"A great idea with the wrong team is not a feasible business—founder-market fit is as important as product-market fit in determining whether a venture can succeed.\""
    ]
  },

  "EN041": {
    id: "EN041",
    code: "EN:041",
    name: "Describe the use of business plans",
    definition: "Explain the purpose, components, and strategic value of business plans as tools for planning, communication, and securing resources for new ventures.",
    keyPoints: [
      "Planning Function: The discipline of writing a business plan forces rigorous thinking about every aspect of the business model.",
      "Communication Tool: Business plans communicate the venture's opportunity, strategy, and team to investors, lenders, and partners.",
      "Key Components: Executive summary, company description, market analysis, competitive analysis, marketing plan, operations plan, and financial projections.",
      "Financial Model: The financial section translates business assumptions into projected income statements, balance sheets, and cash flow statements.",
      "Living Document: Business plans should be updated regularly as the venture learns and market conditions change."
    ],
    roleplayTips: [
      "\"The most valuable part of writing the business plan wasn't the document—it was the conversations it forced with customers, competitors, and advisors that revealed assumptions I needed to validate or change.\"",
      "\"Investors read the executive summary and the financial model first—if those don't make a compelling case, the rest of the plan doesn't get read.\"",
      "\"A business plan that hasn't been revised in 18 months is a history document, not a planning tool—we update ours quarterly to reflect what we've learned.\""
    ]
  },


  // ── FI: Financial Analysis ────────────────────────────────────────────────

  "FI058": {
    id: "FI058",
    code: "FI:058",
    name: "Explain the nature of financial management",
    definition: "Describe the role of financial management in planning, organizing, directing, and controlling the financial activities of an organization to achieve its objectives.",
    keyPoints: [
      "Financial Planning: Forecasting future financial needs and developing plans to meet them.",
      "Capital Structure: Decisions about the mix of debt and equity financing that fund the organization's assets.",
      "Working Capital: Managing short-term assets and liabilities to maintain liquidity and operational efficiency.",
      "Investment Decisions: Allocating capital to projects and assets that generate returns exceeding the cost of capital.",
      "Risk Management: Identifying and mitigating financial risks that could impair the organization's ability to meet its objectives."
    ],
    roleplayTips: [
      "\"Financial management is the discipline that ensures the organization always has the capital it needs to operate and invest, at the lowest possible cost, with acceptable risk.\"",
      "\"Our financial management framework starts with a three-year plan, translates it to an annual budget, and then manages monthly to close gaps between plan and actual performance.\"",
      "\"The CFO's job isn't just to report on past performance—it's to provide the financial intelligence that improves future decisions and protects the organization from financial risk.\""
    ]
  },

  "FI059": {
    id: "FI059",
    code: "FI:059",
    name: "Describe the nature of budgets",
    definition: "Explain budgets as financial plans that quantify expected revenues and expenses over a future period, serving as both a planning tool and a performance management standard.",
    keyPoints: [
      "Planning Function: Budgets translate strategic plans into financial terms, forcing specific resource allocation decisions.",
      "Coordination: Budgets coordinate the plans of different departments by establishing a shared financial framework.",
      "Control Standard: Actual performance is compared to budget to identify variances that require management attention.",
      "Budget Types: Operating budgets, capital budgets, and cash budgets serve different financial planning purposes.",
      "Behavioral Effects: Budget targets motivate performance but can also create dysfunctional behaviors if poorly designed."
    ],
    roleplayTips: [
      "\"A budget isn't a wish list—it's a commitment backed by a plan; if you can't explain how you'll achieve the revenue line, you don't have a budget, you have a hope.\"",
      "\"We use zero-based budgeting for discretionary categories—every dollar has to be justified from scratch each year rather than using last year's budget as a baseline.\"",
      "\"Budget variance analysis is the most actionable management tool we have—favorable and unfavorable variances both tell us something important about the business that we need to understand and act on.\""
    ]
  },

  "FI060": {
    id: "FI060",
    code: "FI:060",
    name: "Explain the nature of financial statements",
    definition: "Describe the purpose, structure, and relationships among the income statement, balance sheet, and cash flow statement as the primary tools for communicating financial performance.",
    keyPoints: [
      "Income Statement: Reports revenues, expenses, and profit or loss over a period—the 'movie' of financial performance.",
      "Balance Sheet: Reports assets, liabilities, and equity at a point in time—the 'photograph' of financial position.",
      "Cash Flow Statement: Reports cash inflows and outflows from operating, investing, and financing activities.",
      "Interconnection: Net income flows from the income statement to retained earnings on the balance sheet; the cash flow statement reconciles accounting income with cash.",
      "Analysis Use: Financial statements enable ratio analysis, trend analysis, and benchmarking to evaluate financial health."
    ],
    roleplayTips: [
      "\"You can be profitable on the income statement and bankrupt in reality—that's why the cash flow statement is the document I read first when evaluating a business.\"",
      "\"The three financial statements are a system—changes on the income statement flow through to the balance sheet, and the cash flow statement explains why the cash balance changed.\"",
      "\"Accrual accounting means the income statement can diverge significantly from cash reality—understanding that difference is fundamental to financial literacy.\""
    ]
  },

  "FI061": {
    id: "FI061",
    code: "FI:061",
    name: "Explain the purposes and importance of obtaining business credit",
    definition: "Describe how businesses use debt financing to fund operations and growth, and the strategic considerations in establishing and managing business creditworthiness.",
    keyPoints: [
      "Working Capital: Credit lines fund day-to-day operations when cash receipts lag disbursements.",
      "Growth Financing: Debt allows businesses to invest in growth-generating assets before accumulating sufficient retained earnings.",
      "Leverage Effect: Debt financing can amplify returns on equity when the return on investment exceeds the cost of debt.",
      "Credit Establishment: Building business credit history is essential for accessing favorable financing terms.",
      "Risk Management: Excessive debt creates financial fragility—optimal leverage balances growth and solvency risk."
    ],
    roleplayTips: [
      "\"We established a revolving credit facility when we didn't need it because credit is easiest to obtain from a position of strength—waiting until you're desperate is the worst time to borrow.\"",
      "\"Business credit is a strategic asset; our strong credit profile gives us access to capital at rates that provide a meaningful cost advantage over less creditworthy competitors.\"",
      "\"The leverage decision comes down to one question: is our return on invested capital reliably above our cost of debt? If yes, debt amplifies our equity returns; if not, it amplifies our losses.\""
    ]
  },

  "FI062": {
    id: "FI062",
    code: "FI:062",
    name: "Identify the impact of credit on business operations",
    definition: "Explain how business credit availability affects purchasing power, vendor relationships, cash flow management, and the ability to pursue growth opportunities.",
    keyPoints: [
      "Operational Flexibility: Credit provides the financial flexibility to manage timing mismatches between revenue and expenses.",
      "Supplier Relationships: Trade credit from suppliers is often the cheapest form of short-term financing.",
      "Growth Enablement: Access to credit allows businesses to invest in inventory, equipment, and talent ahead of revenue.",
      "Cost of Capital: Interest rates and credit terms directly affect profitability and competitiveness.",
      "Credit Risk: Excessive reliance on credit creates vulnerability to tightening credit conditions or rising interest rates."
    ],
    roleplayTips: [
      "\"Our supplier payment terms represent 45 days of free working capital financing—optimizing payment terms across our vendor base has reduced our revolving credit needs significantly.\"",
      "\"When the credit market tightened, competitors without established credit facilities had to turn down orders they couldn't finance—our proactive credit management was a direct competitive advantage.\"",
      "\"Credit availability affects our operations every day—it's what lets us carry the inventory our customers need without tying up all our equity capital in working capital.\""
    ]
  },

  "FI002": {
    id: "FI002",
    code: "FI:002",
    name: "Explain the role of finance in business",
    definition: "Describe how financial management supports strategic objectives by ensuring capital availability, managing risk, optimizing returns, and providing decision-relevant information.",
    keyPoints: [
      "Capital Allocation: Finance channels limited capital to the highest-return opportunities.",
      "Decision Support: Financial analysis provides the quantitative foundation for strategic and operational decisions.",
      "Risk Management: Finance identifies, measures, and mitigates financial risks that could impair business performance.",
      "Performance Measurement: Financial metrics create accountability and guide operational improvement.",
      "Stakeholder Communication: Finance translates business performance into the financial language that investors, lenders, and regulators require."
    ],
    roleplayTips: [
      "\"Finance's role isn't to say 'no'—it's to provide the analytical framework that helps the business make better decisions about where to invest and how to structure those investments.\"",
      "\"Every strategic decision is also a financial decision—the finance team adds value by quantifying trade-offs that might otherwise remain qualitative.\"",
      "\"The best finance functions act as business partners to operational teams, not as scorekeepers—that partnership model produces better decisions and better performance.\""
    ]
  },

  "FI063": {
    id: "FI063",
    code: "FI:063",
    name: "Describe the nature of income statements",
    definition: "Explain the structure, components, and analytical use of the income statement as a report of revenues, costs, and profits over a specific accounting period.",
    keyPoints: [
      "Revenue Line: Top-line revenue represents total sales before any deductions.",
      "Gross Profit: Revenue minus cost of goods sold; measures the profitability of core operations before overhead.",
      "Operating Income: Gross profit minus operating expenses; also called EBIT—earnings before interest and taxes.",
      "Net Income: The 'bottom line' after all expenses, interest, and taxes; available for dividends or retention.",
      "Margin Analysis: Gross margin, operating margin, and net margin percentages reveal profitability at each level."
    ],
    roleplayTips: [
      "\"I focus first on gross margin when evaluating an income statement—if the core business model can't generate adequate gross margin, no amount of overhead cutting will fix it.\"",
      "\"Revenue growth with declining gross margin tells me the company is buying growth by discounting or accepting unfavorable mix—that's a business model signal, not just an accounting one.\"",
      "\"Operating income is the cleanest measure of the business's underlying performance—it strips out the financing choices (interest) and tax treatment that can obscure operating trends.\""
    ]
  },

  "FI270": {
    id: "FI270",
    code: "FI:270",
    name: "Explain the nature of balance sheets",
    definition: "Describe the structure and components of the balance sheet as a financial snapshot of what a business owns, what it owes, and the residual value belonging to owners.",
    keyPoints: [
      "Accounting Equation: Assets = Liabilities + Equity—the balance sheet always balances.",
      "Assets: Resources the business controls that are expected to generate future economic benefits.",
      "Liabilities: Obligations to creditors that represent claims against the business's assets.",
      "Equity: The residual ownership claim after all liabilities are satisfied—also called net worth or book value.",
      "Liquidity: Current assets and current liabilities reveal the business's short-term financial health."
    ],
    roleplayTips: [
      "\"The balance sheet tells you whether a business can survive a setback—if current liabilities significantly exceed current assets, the business is financially fragile regardless of reported profitability.\"",
      "\"I look at the asset composition of a balance sheet to understand the business model—asset-heavy businesses have different risk profiles and return expectations than asset-light ones.\"",
      "\"Equity on the balance sheet is the cumulative result of all historical earnings and losses—it tells you the book value of the owners' stake, which may be very different from market value.\""
    ]
  },

  "FI065": {
    id: "FI065",
    code: "FI:065",
    name: "Describe the nature of cash flow statements",
    definition: "Explain the purpose and structure of the cash flow statement, which reconciles net income with actual cash generation and reveals the sources and uses of cash in three activity categories.",
    keyPoints: [
      "Operating Cash Flow: Cash generated from core business operations—the most important indicator of business health.",
      "Investing Cash Flow: Cash used for or generated by capital expenditures and asset sales.",
      "Financing Cash Flow: Cash flows related to debt borrowing and repayment, equity issuance, and dividends.",
      "Free Cash Flow: Operating cash flow minus capital expenditures—the cash available after maintenance and growth investment.",
      "Accrual Reconciliation: The statement explains why net income and cash generation differ due to non-cash items and working capital changes."
    ],
    roleplayTips: [
      "\"Free cash flow is the metric that matters most to valuation—a business that generates strong FCF can fund its own growth, pay down debt, and return capital to shareholders.\"",
      "\"A company reporting strong net income with weak operating cash flow is burning through working capital—that divergence is often the first sign of business model stress.\"",
      "\"Investing cash flow tells you where management is allocating capital—the quality of those investment decisions will determine the company's future earning power.\""
    ]
  },

  "FI066": {
    id: "FI066",
    code: "FI:066",
    name: "Describe types of financial statement analysis",
    definition: "Explain the analytical techniques—including ratio analysis, trend analysis, common-size analysis, and benchmarking—used to extract insights from financial statements.",
    keyPoints: [
      "Ratio Analysis: Calculates relationships between financial statement items to assess liquidity, leverage, profitability, and efficiency.",
      "Trend Analysis: Compares financial metrics over multiple periods to identify improving or deteriorating performance patterns.",
      "Common-Size Analysis: Expresses income statement items as a percentage of revenue and balance sheet items as a percentage of total assets for comparison.",
      "Benchmarking: Compares a company's ratios to industry averages or specific competitors to assess relative performance.",
      "Integrated Analysis: Effective financial analysis combines multiple techniques and connects quantitative findings to qualitative business context."
    ],
    roleplayTips: [
      "\"Ratio analysis in isolation is meaningless—a ratio is only useful when compared to the company's history, its plan, or its industry benchmark.\"",
      "\"Common-size income statements strip out the effect of scale and let you compare profitability profiles across companies of very different sizes.\"",
      "\"The DuPont analysis is my preferred framework for understanding ROE—it decomposes return into margin, asset efficiency, and leverage, which tells you exactly what's driving or limiting the company's return.\""
    ]
  },

  "FI562": {
    id: "FI562",
    code: "FI:562",
    name: "Conduct financial ratio analysis",
    definition: "Calculate and interpret financial ratios to assess a company's liquidity, solvency, profitability, and operational efficiency.",
    keyPoints: [
      "Liquidity Ratios: Current ratio and quick ratio measure the ability to meet short-term obligations.",
      "Leverage Ratios: Debt-to-equity and interest coverage ratios assess financial risk from debt obligations.",
      "Profitability Ratios: Return on assets, return on equity, and profit margins measure earnings relative to resources.",
      "Efficiency Ratios: Asset turnover, inventory turnover, and days sales outstanding reveal operational productivity.",
      "Interpretation: Ratios require context—compare to prior periods, peers, and industry norms to be actionable."
    ],
    roleplayTips: [
      "\"The current ratio of 0.8 tells me the business may struggle to pay current obligations from current assets—I need to understand the cash conversion cycle before concluding there's a liquidity crisis.\"",
      "\"Our ROIC of 18% compared to a WACC of 9% tells me we're creating significant economic value—that spread is what justifies continued investment in the business.\"",
      "\"I run a full ratio analysis quarterly and compare every metric to our internal benchmark and two closest competitors—the gaps tell me exactly where to focus management attention.\""
    ]
  },

  "FI067": {
    id: "FI067",
    code: "FI:067",
    name: "Analyze cash flow",
    definition: "Evaluate the timing, sources, and sustainability of cash flows to assess business liquidity, financial health, and the ability to fund operations and investment.",
    keyPoints: [
      "Cash vs. Profit: Profitability and cash generation often diverge significantly in growth businesses and those with extended credit terms.",
      "Operating Cash Quality: High-quality earnings are supported by strong operating cash flow; divergence is a warning signal.",
      "Cash Conversion Cycle: Days of inventory, receivables, and payables determine how efficiently working capital is converted to cash.",
      "Runway Analysis: Divide current cash by monthly burn rate to determine how long operations can continue without new financing.",
      "Forecasting: Cash flow forecasting 13 weeks forward is the standard for managing short-term liquidity."
    ],
    roleplayTips: [
      "\"The business was profitable but running out of cash because growth was consuming working capital faster than earnings were generating it—a classic growth cash trap.\"",
      "\"Our cash conversion cycle improvement from 45 to 28 days freed up $3M of working capital—that's the equivalent of raising capital without any dilution or interest cost.\"",
      "\"I maintain a 13-week rolling cash forecast—liquidity surprises are management failures; if you're monitoring carefully, you see cash problems coming weeks in advance.\""
    ]
  },

  "FI068": {
    id: "FI068",
    code: "FI:068",
    name: "Forecast revenue",
    definition: "Develop evidence-based projections of future sales using historical data, market analysis, pipeline information, and growth assumptions.",
    keyPoints: [
      "Bottom-Up Forecasting: Build revenue from individual products, customers, or sales territories for detail-rich projections.",
      "Top-Down Forecasting: Start with market size and apply market share assumptions for a market-level check.",
      "Drivers: Identify the 3-5 key variables that most reliably predict revenue and model them explicitly.",
      "Scenario Analysis: Develop base, upside, and downside scenarios to quantify revenue risk.",
      "Validation: Compare forecast to pipeline, leading indicators, and external market data to pressure-test assumptions."
    ],
    roleplayTips: [
      "\"Our revenue forecast starts with the sales pipeline and applies conversion rate assumptions by stage—it's more reliable than extrapolating last year's results because it's grounded in current opportunity data.\"",
      "\"I always present three revenue scenarios to the board—base, upside, and stress case—with explicit assumptions for each so the board can evaluate the risk profile, not just the central estimate.\"",
      "\"The most important part of the revenue forecast is identifying the two or three assumptions that drive most of the variance—those are the ones to track closely and update frequently.\""
    ]
  },

  "FI560": {
    id: "FI560",
    code: "FI:560",
    name: "Describe the nature of budgets",
    definition: "Explain how operating budgets quantify the financial plan for a period, allocate resources across functions, and establish standards for performance measurement.",
    keyPoints: [
      "Operating Budget: Combines revenue forecasts and expense plans to produce a projected income statement for the period.",
      "Capital Budget: Plans expenditures for long-term assets that will generate benefits over multiple periods.",
      "Budget Process: Effective budgeting involves bottom-up input from operating managers within top-down strategic constraints.",
      "Variance Management: Regular comparison of actual to budget performance with required explanation of significant variances.",
      "Rolling Forecasts: Some organizations supplement or replace static annual budgets with rolling forecasts that continuously update the projection."
    ],
    roleplayTips: [
      "\"Our budget process is zero-based for new spending and activity-based for existing programs—that combination prevents budget inflation while ensuring new investments are properly vetted.\"",
      "\"Budget variances are management information—a favorable variance isn't automatically good if it means we underinvested, and an unfavorable variance isn't bad if it reflects planned investment.\"",
      "\"We moved to rolling 12-month forecasts to supplement the annual budget because business conditions change faster than a once-a-year planning cycle can accommodate.\""
    ]
  },

  "FI069": {
    id: "FI069",
    code: "FI:069",
    name: "Explain the need for accounting standards",
    definition: "Describe why consistent, transparent financial reporting standards are essential for investor confidence, capital market efficiency, and informed business decision-making.",
    keyPoints: [
      "GAAP: Generally Accepted Accounting Principles establish standardized rules for U.S. financial reporting.",
      "IFRS: International Financial Reporting Standards govern financial reporting in most countries outside the U.S.",
      "Comparability: Standardized reporting enables meaningful comparison of financial performance across companies.",
      "Investor Protection: Consistent standards protect investors from misleading financial presentation.",
      "Regulatory Compliance: Public companies are legally required to report in compliance with applicable accounting standards."
    ],
    roleplayTips: [
      "\"Accounting standards exist because without them, every company would design financial statements to present itself in the most favorable possible light—comparability would be impossible.\"",
      "\"When we acquire a foreign company, we restate their IFRS financials to GAAP—the differences can be material and affect valuation, so reconciliation is essential before completing the deal.\"",
      "\"Revenue recognition standards under ASC 606 changed how we report SaaS contracts significantly—the economic reality didn't change, but the accounting presentation did, which affected reported margins.\""
    ]
  },

  "FI070": {
    id: "FI070",
    code: "FI:070",
    name: "Explain the nature of depreciation and amortization",
    definition: "Describe how the cost of long-term assets is systematically allocated over their useful lives as an expense, and how this non-cash charge affects financial statements.",
    keyPoints: [
      "Matching Principle: Depreciation matches the cost of an asset to the periods in which it generates revenue.",
      "Non-Cash Expense: Depreciation reduces reported profit without a corresponding cash outflow.",
      "Methods: Straight-line, declining balance, and units-of-production methods allocate cost differently over an asset's life.",
      "EBITDA: Earnings before interest, taxes, depreciation, and amortization removes non-cash charges to assess operating cash generation.",
      "Book vs. Tax: Depreciation methods for financial reporting often differ from those used for tax purposes."
    ],
    roleplayTips: [
      "\"Our capital-intensive operations make depreciation a significant income statement expense, but it's non-cash—that's why EBITDA is a useful supplemental metric for understanding our cash generation.\"",
      "\"The depreciation schedule for this acquisition creates a significant non-cash charge that will depress GAAP earnings for five years—investors need to understand that to value the business correctly.\"",
      "\"Accelerated depreciation for tax purposes creates a timing difference that generates a deferred tax liability on the balance sheet—that's accounting mechanics, not an economic change.\""
    ]
  },

  "FI782": {
    id: "FI782",
    code: "FI:782",
    name: "Explain the nature of data-driven financial decisions",
    definition: "Describe how quantitative analysis of financial and operational data improves the quality of business decisions by replacing intuition with evidence.",
    keyPoints: [
      "Decision Quality: Data-driven decisions produce systematically better outcomes than intuition-based decisions in most business contexts.",
      "Relevant Metrics: Identifying the key financial metrics that most reliably predict performance for each decision type.",
      "Data Integrity: Decision quality is only as good as the quality of underlying data—governance and validation are essential.",
      "Analytical Tools: Financial modeling, regression analysis, and scenario analysis structure the translation from data to decision.",
      "Judgment Integration: Data informs but doesn't replace judgment—the best decisions combine quantitative analysis with qualitative context."
    ],
    roleplayTips: [
      "\"We built a pricing analytics model that analyzes 50,000 transactions to identify the price elasticity by segment—those data-driven insights replaced intuition with evidence and improved our gross margin by 2.3 points.\"",
      "\"Data-driven doesn't mean data-only—there are qualitative factors that don't show up in the numbers that a good analyst incorporates alongside the quantitative analysis.\"",
      "\"The discipline I apply to every financial decision is: what does the data say, what does it not tell us, and what judgment is required to bridge the gap?\""
    ]
  },

  "FI071": {
    id: "FI071",
    code: "FI:071",
    name: "Describe the nature of equity capital",
    definition: "Explain equity financing as ownership-based funding that provides capital without repayment obligations in exchange for ownership stakes and participation in profits and losses.",
    keyPoints: [
      "Ownership Exchange: Equity investors receive ownership shares in exchange for capital contributions.",
      "No Repayment: Unlike debt, equity has no required repayment schedule—investors are repaid through dividends or appreciation.",
      "Risk Position: Equity holders are the residual claimants—they are paid last but benefit from unlimited upside.",
      "Dilution: Issuing new equity dilutes existing ownership percentages and earnings per share.",
      "Cost of Equity: The expected return demanded by equity investors reflects the risk they bear as residual claimants."
    ],
    roleplayTips: [
      "\"Equity capital is permanent—it doesn't need to be repaid, which gives us the flexibility to invest in long-duration projects that debt financing couldn't support.\"",
      "\"The cost of equity is higher than the cost of debt because equity investors bear more risk—they get paid last, which demands a higher expected return to compensate.\"",
      "\"Before we accept another round of equity financing, I model the dilution impact on our cap table—equity is not free money; the ownership cost can be significant if we raise at low valuations.\""
    ]
  },

  "FI072": {
    id: "FI072",
    code: "FI:072",
    name: "Describe the nature of debt financing",
    definition: "Explain debt as a financing mechanism that provides capital with a contractual obligation to repay principal and interest, and its strategic role in the capital structure.",
    keyPoints: [
      "Contractual Obligation: Debt requires regular interest payments and principal repayment on a defined schedule regardless of business performance.",
      "Tax Shield: Interest payments are tax-deductible, reducing the effective cost of debt below the stated interest rate.",
      "Leverage: Debt amplifies returns on equity when returns exceed the cost of borrowing.",
      "Types: Term loans, revolving credit facilities, bonds, equipment financing, and convertible notes serve different financing needs.",
      "Covenants: Lenders impose financial covenants that restrict certain business decisions to protect their repayment priority."
    ],
    roleplayTips: [
      "\"We use debt to finance assets with predictable, long-duration cash flows—the interest coverage from those assets comfortably exceeds the debt service, so the leverage is accretive.\"",
      "\"The tax shield from our debt financing reduces our effective cost of capital by approximately 1.5 percentage points—that benefit is built into our capital structure decision.\"",
      "\"I review our debt covenants quarterly before closing the books—a covenant violation would be a serious event that triggers lender rights we want to avoid at all costs.\""
    ]
  },

  "FI073": {
    id: "FI073",
    code: "FI:073",
    name: "Explain the concept of internal rate of return",
    definition: "Describe IRR as the discount rate at which the net present value of an investment's cash flows equals zero, and its use in evaluating and ranking capital investment opportunities.",
    keyPoints: [
      "Definition: IRR is the compound annual return that makes the present value of future cash flows equal to the initial investment.",
      "Hurdle Rate: Investments with IRR above the company's cost of capital create value; those below destroy value.",
      "Ranking Projects: When capital is constrained, rank projects by IRR to prioritize the highest-return investments.",
      "Limitations: IRR assumes reinvestment at the IRR rate, which may be unrealistic for very high-return projects.",
      "Comparison to NPV: When IRR and NPV rankings conflict, NPV is theoretically superior for value maximization decisions."
    ],
    roleplayTips: [
      "\"The project IRR of 22% exceeds our 12% hurdle rate by a significant margin—this investment creates substantial economic value and should be prioritized in our capital allocation.\"",
      "\"When comparing two mutually exclusive projects with different scales, I rely on NPV rather than IRR—a smaller project with a higher IRR can produce less total value than a larger project with a lower IRR.\"",
      "\"IRR is a powerful communication tool for presenting investment returns to non-finance stakeholders—it translates complex cash flow projections into a single, intuitive annual return metric.\""
    ]
  },

  "FI074": {
    id: "FI074",
    code: "FI:074",
    name: "Explain the concept of net present value",
    definition: "Describe NPV as the sum of all discounted future cash flows from an investment minus the initial cost, representing the economic value created for shareholders by making the investment.",
    keyPoints: [
      "Time Value: A dollar today is worth more than a dollar in the future because of investment opportunity.",
      "Discount Rate: NPV uses the cost of capital as the discount rate to express all future cash flows in today's dollars.",
      "Decision Rule: Accept projects with positive NPV (they create value) and reject those with negative NPV.",
      "Sensitivity Analysis: Test NPV under different assumptions to understand how robust the investment case is.",
      "NPV vs. Payback: NPV is theoretically superior to payback period because it accounts for the time value of money and all cash flows."
    ],
    roleplayTips: [
      "\"The NPV of $4.2M at our 10% cost of capital means this investment creates $4.2M of economic value above and beyond what investors could earn in the next-best alternative—that's the fundamental case for making it.\"",
      "\"Before presenting an NPV analysis to the board, I run sensitivity analysis on the three assumptions that most affect the result—that transparency about uncertainty is more credible than a single-point estimate.\"",
      "\"NPV is the theoretically correct framework for capital allocation decisions because it directly measures value creation—that makes it our primary decision tool for capital budgeting.\""
    ]
  },

  "FI075": {
    id: "FI075",
    code: "FI:075",
    name: "Interpret financial statements",
    definition: "Extract meaningful business insights from income statements, balance sheets, and cash flow statements by identifying trends, relationships, and performance signals beyond the reported numbers.",
    keyPoints: [
      "Beyond the Numbers: Financial statement interpretation connects the numbers to the underlying business drivers.",
      "Cross-Statement Reading: Insights emerge from reading the three statements together rather than in isolation.",
      "Trend Identification: Multi-period comparison reveals trajectory—whether performance is improving, stable, or deteriorating.",
      "Red Flags: Receivables growing faster than revenue, declining gross margin, and negative operating cash flow are common warning signals.",
      "Footnote Importance: Footnotes disclose accounting policies, contingencies, and details that affect interpretation of headline numbers."
    ],
    roleplayTips: [
      "\"Revenue grew 15% but accounts receivable grew 35%—that divergence tells me either collection is slowing or customers are being given extended terms to drive growth, both of which need explanation.\"",
      "\"The footnote on revenue recognition reveals a policy change that inflated this quarter's recognized revenue—always read the footnotes before drawing conclusions from the headline numbers.\"",
      "\"I read the three statements as a system: the income statement told me profits were growing, but the cash flow statement showed operating cash was declining—that divergence was the real story.\""
    ]
  },

  "FI076": {
    id: "FI076",
    code: "FI:076",
    name: "Describe the use of financial statements in financial analysis",
    definition: "Explain how analysts use income statements, balance sheets, and cash flow statements to evaluate investment quality, creditworthiness, operational efficiency, and strategic performance.",
    keyPoints: [
      "Investment Analysis: Analysts evaluate growth rate, profitability, and capital efficiency to assess equity investment attractiveness.",
      "Credit Analysis: Lenders focus on leverage ratios, coverage ratios, and cash flow to evaluate debt repayment capacity.",
      "Operational Assessment: Management uses financial statements to identify improvement opportunities in margin, working capital, and asset utilization.",
      "Valuation: Financial statements provide the earnings, cash flow, and book value inputs for valuation multiples and discounted cash flow models.",
      "Due Diligence: In acquisitions, detailed financial statement analysis reveals quality of earnings, working capital norms, and hidden liabilities."
    ],
    roleplayTips: [
      "\"My credit analysis starts with the debt service coverage ratio—if operating cash flow doesn't cover debt service by at least 1.25x, the business doesn't have adequate margin of safety for the proposed debt level.\"",
      "\"The quality of earnings analysis identified that 30% of reported net income came from one-time gains and accounting choices—adjusting for those, the core earnings power was significantly lower than the headline number.\"",
      "\"In the acquisition due diligence, we normalized three years of financials to remove owner perquisites, one-time items, and accounting policies that differed from our standards—the adjusted EBITDA was 18% lower than reported.\""
    ]
  },

  "FI077": {
    id: "FI077",
    code: "FI:077",
    name: "Discuss the role of ethics in accounting",
    definition: "Explain the ethical obligations of accounting professionals to provide accurate, transparent, and unbiased financial information and the consequences of ethical violations.",
    keyPoints: [
      "Accuracy Obligation: Accountants have an absolute obligation to represent financial information accurately and completely.",
      "Independence: External auditors and internal controllers must maintain independence from management pressure to misstate results.",
      "Fraud Prevention: Accounting ethics is the first line of defense against financial fraud and misrepresentation.",
      "Professional Standards: CPA ethics codes, AICPA standards, and the Sarbanes-Oxley Act establish legal and professional obligations.",
      "Consequences: Accounting fraud harms investors, employees, customers, and communities—consequences include criminal prosecution."
    ],
    roleplayTips: [
      "\"My obligation as the controller is to the accuracy of the financial statements, not to the story management wants to tell—if the numbers don't support the narrative, the narrative needs to change.\"",
      "\"The pressure to make the quarter-end numbers was significant, but I refused to accelerate revenue recognition that didn't meet our revenue recognition policy—short-term pressure never justifies misrepresentation.\"",
      "\"Accounting fraud starts small—a rounding here, a deferral there—and compounds until the cover-up becomes worse than the original problem; the only ethical position is to never start.\""
    ]
  },

  "FI081": {
    id: "FI081",
    code: "FI:081",
    name: "Explain the concept of return on investment",
    definition: "Describe ROI as a performance measure that evaluates the efficiency of an investment by expressing the net return as a percentage of the investment's cost.",
    keyPoints: [
      "Calculation: ROI = (Net Return / Investment Cost) × 100%.",
      "Comparability: ROI enables comparison of investments of different sizes and types on a common percentage basis.",
      "Time Factor: Simple ROI doesn't account for the time value of money; annualized ROI or IRR addresses this limitation.",
      "Application: ROI is applied to marketing campaigns, capital investments, training programs, and technology deployments.",
      "Benchmarking: Compare calculated ROI to cost of capital, alternative investments, and industry benchmarks to assess value creation."
    ],
    roleplayTips: [
      "\"The marketing campaign generated $480K in attributed revenue against a $120K investment—a 300% ROI that significantly exceeded our 150% hurdle rate for marketing spend.\"",
      "\"ROI is a useful screening tool but it's only as good as the attribution—if we can't reliably connect the investment to the return, the calculation is more art than science.\"",
      "\"We require every capital project proposal to include a three-year ROI calculation with explicit assumptions—that discipline has improved the quality of investment decisions significantly.\""
    ]
  },

  "FI579": {
    id: "FI579",
    code: "FI:579",
    name: "Analyze technology investments",
    definition: "Evaluate technology capital expenditures using financial analysis tools to determine whether the productivity, cost, or revenue benefits justify the investment and ongoing costs.",
    keyPoints: [
      "Total Cost of Ownership: Technology investments include not just acquisition cost but implementation, training, maintenance, and upgrade costs.",
      "Benefit Quantification: Rigorously quantify productivity gains, cost reductions, and revenue enhancements to build the business case.",
      "Payback Period: Calculate how long it takes for cumulative benefits to recover the initial investment.",
      "Risk Assessment: Technology investments carry implementation risk, adoption risk, and technology obsolescence risk.",
      "Build vs. Buy: Evaluate whether to develop proprietary solutions or purchase and configure existing platforms."
    ],
    roleplayTips: [
      "\"The ERP business case showed a 2.5-year payback and a five-year NPV of $4.2M—but we also stress-tested the case against 30% benefit underperformance and 25% cost overrun to make sure the investment held up.\"",
      "\"Technology ROI calculations fail most often because the productivity benefits are overstated and the implementation costs are understated—I apply a 30% haircut to benefit estimates and a 25% contingency to cost estimates.\"",
      "\"The build vs. buy decision came down to strategic differentiation—we buy commodity capabilities and build only where the technology itself is a competitive differentiator.\""
    ]
  },

  "FI085": {
    id: "FI085",
    code: "FI:085",
    name: "Manage financial resources",
    definition: "Allocate, monitor, and optimize the use of an organization's financial assets to achieve strategic objectives while maintaining appropriate liquidity and risk controls.",
    keyPoints: [
      "Capital Allocation: Direct financial resources to the highest-return opportunities aligned with strategic priorities.",
      "Liquidity Management: Maintain sufficient liquid assets to meet obligations while minimizing idle cash.",
      "Cost Control: Monitor spending against budget and implement corrective action when variances exceed tolerance.",
      "Financial Controls: Policies, procedures, and systems that prevent waste, fraud, and unauthorized expenditure.",
      "Performance Review: Regular financial performance reviews identify resource allocation adjustments needed to achieve targets."
    ],
    roleplayTips: [
      "\"I review actual spending against budget monthly at the line-item level—not to micromanage but to identify early whether our resource allocation assumptions are playing out as expected.\"",
      "\"Our capital allocation process forces every initiative to compete for resources on the basis of expected return—that discipline has shifted our portfolio toward higher-return investments over three years.\"",
      "\"Financial resource management is about more than control—it's about ensuring the organization always has the capital to pursue its best opportunities without being constrained by inefficient resource use elsewhere.\""
    ]
  },

  "FI351": {
    id: "FI351",
    code: "FI:351",
    name: "Develop company's/department's budget",
    definition: "Create a comprehensive financial plan that allocates resources across activities and accounts to achieve performance objectives within authorized spending limits.",
    keyPoints: [
      "Strategic Alignment: The budget must reflect and enable the strategic priorities agreed for the planning period.",
      "Bottom-Up Input: Operational managers who execute the work should provide input to the budget for accuracy and buy-in.",
      "Assumptions Documentation: Every material budget assumption should be explicitly stated and defensible.",
      "Sensitivity: Identify the assumptions that most significantly affect the budget and stress-test them.",
      "Review and Approval: The budget should be reviewed by appropriate leadership and formally approved before the period begins."
    ],
    roleplayTips: [
      "\"I build the budget from a zero-based foundation for discretionary spending—requiring every line to be justified eliminates the budget inflation that comes from using prior year as a baseline.\"",
      "\"The most important part of the budget presentation is the assumption page—if leadership approves the assumptions, they're approving the budget; the numbers are just math from there.\"",
      "\"I build three budget scenarios—base, conservative, and aggressive—so that leadership can choose the risk profile they want to operate against rather than seeing only one view of the future.\""
    ]
  },

  "FI352": {
    id: "FI352",
    code: "FI:352",
    name: "Forecast sales",
    definition: "Develop evidence-based revenue projections that translate market opportunity, competitive position, and sales capacity into quantified future revenue estimates.",
    keyPoints: [
      "Historical Analysis: Past performance provides the base from which to project future results, adjusted for known changes.",
      "Pipeline-Based: Bottom-up forecasting from the sales pipeline is most reliable for short-term projections.",
      "Market-Based: Top-down market share analysis validates the reasonableness of pipeline-based forecasts.",
      "Leading Indicators: Track metrics that lead sales by one or two periods—qualified leads, proposal volume, win rate—to improve forecast accuracy.",
      "Accountability: Forecast owners should be accountable for accuracy, creating incentives for honest rather than optimistic projections."
    ],
    roleplayTips: [
      "\"My forecast is built from the pipeline, not from the number we need to hit—starting with the need creates a wishful thinking bias that produces poor forecasts.\"",
      "\"I track forecast accuracy by rep and by quarter—consistent overestimation tells me someone is sandbagging; consistent underestimation tells me someone has an optimism problem.\"",
      "\"The leading indicator I weight most heavily in the forecast is qualified pipeline at 90+ days—it has the strongest historical correlation with closed revenue in my business.\""
    ]
  },

  "FI353": {
    id: "FI353",
    code: "FI:353",
    name: "Explain the nature of financial planning",
    definition: "Describe the process of setting financial goals, projecting future performance, and developing strategies to close gaps between projected and desired financial outcomes.",
    keyPoints: [
      "Goal Setting: Financial planning starts with defining specific, measurable financial objectives over defined time horizons.",
      "Current State Analysis: Assess current financial position and recent trends as the foundation for planning.",
      "Gap Identification: Compare projected performance under current trajectory to desired goals to identify the strategic gap.",
      "Strategy Development: Design specific initiatives to close the financial gap within the planning horizon.",
      "Monitoring: Establish milestones and review cadences to track execution and enable course correction."
    ],
    roleplayTips: [
      "\"Financial planning is the bridge between where we are and where we want to be—without it, strategy is aspiration without a credible path.\"",
      "\"Our financial planning process starts with the long-range strategic plan and works backward to define the near-term actions required to put us on the right trajectory.\"",
      "\"I always build the financial plan around value drivers rather than accounting line items—driving the right underlying metrics is what produces the financial outcomes we're targeting.\""
    ]
  },

  "FI091": {
    id: "FI091",
    code: "FI:091",
    name: "Explain the time value of money",
    definition: "Describe the principle that money available today is worth more than the same amount in the future due to its investment potential, and how this concept underlies all financial valuation.",
    keyPoints: [
      "Opportunity Cost: Money today can be invested to earn a return, making future money worth less in present-value terms.",
      "Present Value: The current worth of a future cash flow, discounted at an appropriate rate.",
      "Future Value: The value of a present amount compounded forward at a given rate.",
      "Compounding: Interest earned on prior interest produces exponential growth over time.",
      "Applications: Time value of money underpins loan pricing, bond valuation, investment analysis, and retirement planning."
    ],
    roleplayTips: [
      "\"The time value of money is why we can't evaluate a $1M payment today against $1M received in five years as equivalent—the correct comparison requires discounting the future payment to its present value.\"",
      "\"Compounding is why early career savings are so disproportionately valuable—a dollar invested at 25 has 40 years of compounding behind it by retirement, while a dollar invested at 45 has only 20.\"",
      "\"Every NPV calculation is an application of time value of money—we're asking: what are those future cash flows worth today, given that money today is more valuable than money tomorrow?\""
    ]
  },

  "FI093": {
    id: "FI093",
    code: "FI:093",
    name: "Describe sources of income",
    definition: "Identify and explain the various streams of income available to individuals and businesses, including earned income, investment income, passive income, and capital gains.",
    keyPoints: [
      "Earned Income: Wages, salaries, and self-employment income from active work.",
      "Investment Income: Dividends, interest, and distributions from financial assets.",
      "Passive Income: Rental income, royalties, and limited partnership distributions that don't require active involvement.",
      "Capital Gains: Profits from the sale of appreciated assets, taxed differently than ordinary income.",
      "Diversification: Multiple income streams reduce dependence on any single source and provide financial stability."
    ],
    roleplayTips: [
      "\"Building multiple income streams is the foundation of financial resilience—dependence on a single income source creates concentrated risk that a layoff or business disruption can eliminate overnight.\"",
      "\"Capital gains are taxed at preferential rates compared to earned income—that tax treatment is a significant factor in long-term wealth building strategy.\"",
      "\"Our business generates income from three streams: product sales, maintenance contracts, and consulting services—that diversification smooths revenue volatility and reduces customer concentration risk.\""
    ]
  },

  "FI094": {
    id: "FI094",
    code: "FI:094",
    name: "Discuss the nature of taxes",
    definition: "Explain how various forms of taxation—income, capital gains, payroll, sales, and property—affect individuals, businesses, and investment decisions.",
    keyPoints: [
      "Progressive Income Tax: Higher marginal rates apply to income above each threshold bracket.",
      "Capital Gains Tax: Long-term gains on assets held over one year are taxed at preferential rates.",
      "Payroll Taxes: Social Security and Medicare taxes fund federal social insurance programs.",
      "Deductions and Credits: Tax planning uses deductions and credits to legally minimize tax liability.",
      "Business Entity Taxes: Different business entities face different tax treatment—C-corps face double taxation; pass-throughs are taxed once at the owner level."
    ],
    roleplayTips: [
      "\"Tax efficiency is a legitimate business objective—every dollar of taxes saved through legal planning is a dollar available for reinvestment.\"",
      "\"The choice between a C-corp and pass-through structure has significant tax implications—at our current income level and distribution policy, the analysis clearly favors one structure over the other.\"",
      "\"Maximizing pre-tax retirement contributions reduces current taxable income and allows tax-deferred compounding—it's one of the highest-return financial decisions most individuals can make.\""
    ]
  },

  "FI354": {
    id: "FI354",
    code: "FI:354",
    name: "Manage personal finances",
    definition: "Apply financial planning principles to personal income, expenses, savings, debt management, and investment decisions to achieve financial security and long-term goals.",
    keyPoints: [
      "Budgeting: Track income and expenses to understand cash flow and identify savings opportunities.",
      "Debt Management: Prioritize high-interest debt elimination while maintaining minimum payments on lower-rate debt.",
      "Emergency Fund: Build 3-6 months of expenses in accessible savings before investing aggressively.",
      "Retirement Savings: Maximize tax-advantaged retirement contributions early to harness compounding.",
      "Insurance: Protect against catastrophic financial risks with appropriate health, life, disability, and property coverage."
    ],
    roleplayTips: [
      "\"Personal finance is just business finance applied to one person—the same principles of budgeting, cash management, and investment return apply.\"",
      "\"The order of operations matters in personal finance: eliminate high-interest debt first, build emergency fund second, maximize tax-advantaged retirement contributions third, then invest remaining savings.\"",
      "\"The biggest mistake I see is treating savings as a residual—whatever is left after spending. The right approach is to pay yourself first and adjust spending to the remainder.\""
    ]
  },

  "FI355": {
    id: "FI355",
    code: "FI:355",
    name: "Explain the nature of income",
    definition: "Describe the various forms of income, their sources, and how income flows affect financial planning, taxation, and wealth-building decisions.",
    keyPoints: [
      "Income Definition: Money received in exchange for work, investment, or the use of assets.",
      "Gross vs. Net: Gross income is pre-tax; net income is what remains after taxes and other deductions.",
      "Discretionary Income: What remains after paying taxes and essential expenses—the amount available for savings and discretionary spending.",
      "Income Growth: Increasing income through career development, skill building, and entrepreneurship is the primary lever for building wealth.",
      "Income Protection: Disability insurance, emergency funds, and income diversification protect against income disruption."
    ],
    roleplayTips: [
      "\"Understanding the difference between gross and net income is fundamental—many people make financial commitments based on gross income they'll never see after taxes and deductions.\"",
      "\"Increasing income is the highest-leverage personal finance action—cost cutting has a floor, but income has no ceiling.\"",
      "\"I plan around net disposable income, not gross—that discipline prevents overcommitting to fixed expenses that look affordable on paper but strain cash flow in practice.\""
    ]
  },

  "FI356": {
    id: "FI356",
    code: "FI:356",
    name: "Explain the nature of financial risk",
    definition: "Describe the types of financial risk that individuals and businesses face and the strategies available to measure, manage, and mitigate those risks.",
    keyPoints: [
      "Market Risk: The risk that asset values will decline due to market fluctuations.",
      "Credit Risk: The risk that a counterparty will fail to meet financial obligations.",
      "Liquidity Risk: The risk of being unable to meet cash obligations when they come due.",
      "Operational Risk: The risk of financial loss from failures in internal processes, systems, or external events.",
      "Risk-Return Tradeoff: Higher expected returns require accepting higher risk—the goal is optimal risk-adjusted return."
    ],
    roleplayTips: [
      "\"Our risk management framework maps every financial risk to a probability, an impact, and a mitigation strategy—we don't eliminate risk, we manage it to an acceptable level.\"",
      "\"Liquidity risk is the one that kills companies; you can survive low profitability for a period, but you can't survive running out of cash—liquidity management is always my first priority.\"",
      "\"The risk-return tradeoff is fundamental to every financial decision: the higher return we're chasing has to be commensurate with the additional risk we're accepting.\""
    ]
  },

  "FI106": {
    id: "FI106",
    code: "FI:106",
    name: "Establish project budget",
    definition: "Define the financial resources required to complete a project, allocating costs by category and work package to create a baseline for performance management.",
    keyPoints: [
      "Work Breakdown: Decompose project scope into work packages before estimating costs to ensure complete coverage.",
      "Bottom-Up Estimation: Build the budget from detailed activity-level estimates rather than top-down allocation.",
      "Contingency Reserve: Include explicit contingency for identified risks and management reserve for unknown unknowns.",
      "Cost Baseline: The approved budget becomes the baseline against which actual costs are tracked.",
      "Change Control: Establish a formal process for approving scope changes that affect the budget."
    ],
    roleplayTips: [
      "\"I build project budgets from the work breakdown structure, not from a round number top-down allocation—the discipline of estimating each work package surfaces assumptions that top-down budgeting hides.\"",
      "\"I include a 15% contingency reserve and get it approved explicitly in the project budget—projects without contingency are almost always over budget because reality is never exactly as planned.\"",
      "\"Cost baseline management means we track actual vs. budget at the work package level monthly—catching variances early when they're still manageable is the whole point.\""
    ]
  },

  "FI565": {
    id: "FI565",
    code: "FI:565",
    name: "Develop and use a data-driven financial model",
    definition: "Build quantitative models that translate business assumptions into financial projections and support rigorous analysis of investment opportunities and strategic decisions.",
    keyPoints: [
      "Model Structure: Effective financial models separate inputs (assumptions), calculations (logic), and outputs (results) clearly.",
      "Driver-Based: Link outputs to business drivers—units, prices, headcount, utilization—rather than modeling line items in isolation.",
      "Scenario Capability: Build the model to easily toggle between scenarios by changing key assumption inputs.",
      "Audit Trail: Document assumptions and formulas to enable review, update, and verification by others.",
      "Validation: Cross-check model outputs against historical performance, comparable transactions, and sanity checks."
    ],
    roleplayTips: [
      "\"My financial model has a single assumptions page that drives everything downstream—changing any assumption instantly updates all outputs, which makes scenario analysis fast and reliable.\"",
      "\"A model that can't be audited by someone else isn't a professional model—I structure my work so that any informed colleague can follow the logic from assumptions to conclusions.\"",
      "\"The first validation test for any financial model is the sanity check: do the results make intuitive business sense? If the model says a business is worth 50x revenue, either the model is wrong or I need to explain why.\""
    ]
  },

  "FI625": {
    id: "FI625",
    code: "FI:625",
    name: "Explain the concept of weighted average cost of capital",
    definition: "Describe WACC as the blended cost of all capital sources—debt and equity—weighted by their proportions in the capital structure, used as the minimum return required on investments.",
    keyPoints: [
      "WACC Formula: WACC = (Weight of Equity × Cost of Equity) + (Weight of Debt × After-Tax Cost of Debt).",
      "Hurdle Rate: WACC is the minimum return a project must earn to create value for all capital providers.",
      "Capital Structure Impact: Changing the debt-equity mix changes WACC—up to a point, adding debt reduces WACC due to the tax shield.",
      "Risk Reflection: Projects riskier than the company's average should use a higher discount rate than WACC.",
      "Value Creation: Investments earning above WACC create value; those earning below WACC destroy value."
    ],
    roleplayTips: [
      "\"Our WACC of 9.5% is the minimum return we can accept on any investment—below that, we're destroying value by deploying capital at returns below what it costs us.\"",
      "\"When we evaluate an acquisition, we use the target company's WACC, not ours—the appropriate discount rate reflects the risk of the investment, not the acquirer's capital structure.\"",
      "\"The leverage ratio in our capital structure is a WACC optimization decision—we model the tax shield benefit against the financial distress cost to find the structure that minimizes our cost of capital.\""
    ]
  },

  "FI568": {
    id: "FI568",
    code: "FI:568",
    name: "Determine break-even point",
    definition: "Calculate the level of sales at which total revenue equals total costs, meaning the business neither profits nor loses money, to inform pricing and volume decisions.",
    keyPoints: [
      "Fixed vs. Variable Costs: Break-even analysis separates costs that are constant from those that vary with volume.",
      "Contribution Margin: Revenue minus variable cost per unit; the amount each unit contributes toward fixed cost coverage.",
      "Break-Even Formula: Break-Even Units = Fixed Costs ÷ Contribution Margin per Unit.",
      "Break-Even Revenue: Break-Even Revenue = Fixed Costs ÷ Contribution Margin Ratio.",
      "Strategic Use: Break-even analysis guides pricing decisions, capacity planning, and evaluation of cost structure changes."
    ],
    roleplayTips: [
      "\"At our current cost structure, we break even at $2.4M in monthly revenue—below that, we're burning cash; above it, every additional dollar contributes almost entirely to profit.\"",
      "\"The new product launch requires understanding the break-even volume—if the market can't support that volume at our target price, we need to rethink the cost structure or the price.\"",
      "\"Break-even analysis is most valuable for evaluating the financial risk of a new venture—it tells you how much you have to sell before the business stops losing money.\""
    ]
  },

  "FI569": {
    id: "FI569",
    code: "FI:569",
    name: "Explain the concept of cost-benefit analysis",
    definition: "Describe the framework for comparing the total costs of an action to its total benefits to determine whether the benefits justify the costs and which alternative delivers the greatest net value.",
    keyPoints: [
      "Identification: Comprehensively identify all relevant costs (direct, indirect, opportunity) and benefits (tangible, intangible).",
      "Quantification: Convert costs and benefits to a common monetary value, applying time value adjustments for future flows.",
      "Net Benefit: Compare total benefits to total costs—positive net benefit indicates the action creates value.",
      "Alternatives: Compare the cost-benefit ratio of multiple alternatives to identify the highest-value option.",
      "Limitations: Some costs and benefits resist monetization; judgment is required to incorporate qualitative factors."
    ],
    roleplayTips: [
      "\"The cost-benefit analysis on the proposed system upgrade showed a 3-year NPV of $1.8M—the benefits from productivity improvement and error reduction substantially outweigh the implementation cost.\"",
      "\"I always include opportunity cost in the analysis—the cost of this investment includes what else we could do with the same capital and talent.\"",
      "\"Quantifying intangible benefits is challenging but necessary—I apply conservative estimates and present them separately from hard financial benefits so decision-makers can apply their own judgment to the soft items.\""
    ]
  },

  "FI572": {
    id: "FI572",
    code: "FI:572",
    name: "Calculate financial ratios",
    definition: "Compute key liquidity, leverage, profitability, and efficiency ratios from financial statements and apply them to assess business performance and health.",
    keyPoints: [
      "Liquidity: Current Ratio = Current Assets / Current Liabilities; Quick Ratio = (Cash + Receivables) / Current Liabilities.",
      "Leverage: Debt-to-Equity = Total Debt / Shareholders Equity; Interest Coverage = EBIT / Interest Expense.",
      "Profitability: Gross Margin = Gross Profit / Revenue; ROE = Net Income / Shareholders Equity.",
      "Efficiency: Asset Turnover = Revenue / Total Assets; Inventory Turnover = COGS / Average Inventory.",
      "Context Required: A ratio is only meaningful in comparison to benchmarks—historical trend, budget, or peer group."
    ],
    roleplayTips: [
      "\"Our current ratio of 1.4 provides adequate short-term liquidity coverage, but the quick ratio of 0.9 suggests we'd struggle to meet obligations without liquidating inventory—that's a flag worth investigating.\"",
      "\"The debt-to-equity ratio of 1.8 is above industry average, which means we carry more financial risk than peers—that context is essential when I present these ratios to the board.\"",
      "\"I calculate the full ratio suite quarterly and plot them on a trend chart—the direction of each ratio is often more informative than its current level.\""
    ]
  },

  "FI783": {
    id: "FI783",
    code: "FI:783",
    name: "Describe types of financial investment vehicles",
    definition: "Identify and compare stocks, bonds, mutual funds, ETFs, real estate, and other investment instruments by their risk, return potential, liquidity, and suitability for different investor objectives.",
    keyPoints: [
      "Equities: Stocks offer ownership in companies with unlimited upside and higher risk than fixed-income instruments.",
      "Fixed Income: Bonds provide regular interest payments with return of principal at maturity—lower risk, lower expected return.",
      "Mutual Funds and ETFs: Pooled vehicles provide diversification with professional management (mutual funds) or passive index tracking (ETFs).",
      "Alternative Investments: Real estate, private equity, hedge funds, and commodities offer diversification and different return drivers.",
      "Risk-Return Profile: Each investment vehicle offers a different combination of risk, expected return, liquidity, and tax treatment."
    ],
    roleplayTips: [
      "\"ETFs have become the default recommendation for most individual investors—broad market diversification, low cost, and tax efficiency are hard to beat in most asset classes.\"",
      "\"The appropriate investment vehicle depends on the investor's time horizon, risk tolerance, and tax situation—there is no single right answer independent of those factors.\"",
      "\"Alternative investments offer genuine diversification benefits but come with illiquidity and complexity that require careful evaluation—they're appropriate tools for sophisticated investors with specific portfolio objectives.\""
    ]
  },


  // ── NF: Information Management ────────────────────────────────────────────

  "NF077": {
    id: "NF077",
    code: "NF:077",
    name: "Explain the nature and scope of information management",
    definition: "Describe how organizations collect, store, organize, analyze, and disseminate information to support decision-making and competitive advantage.",
    keyPoints: [
      "Data vs. Information: Data is raw facts; information is data organized and presented to provide meaning and support decisions.",
      "Information Lifecycle: Collection, storage, organization, retrieval, analysis, distribution, and disposal are the stages of information management.",
      "Competitive Asset: High-quality, well-managed information creates decisions advantages that competitors without it cannot match.",
      "Data Governance: Policies and standards that ensure information accuracy, security, and appropriate use.",
      "Technology Role: Information management systems and databases are the infrastructure that makes organizational information accessible."
    ],
    roleplayTips: [
      "\"Information management is the difference between a data-rich organization that makes poor decisions and an analytically driven organization that acts on insight—the data is only as valuable as the management that converts it.\"",
      "\"Our data governance framework ensures that every critical business metric has a single authoritative source—without that, managers are making decisions with inconsistent information.\"",
      "\"Managing information well means knowing what data we need, how to keep it accurate, who should have access, and how to convert it into actionable insight.\""
    ]
  },

  "NF078": {
    id: "NF078",
    code: "NF:078",
    name: "Identify sources of business information",
    definition: "Recognize and evaluate the internal and external sources from which businesses obtain data and information to support planning, operations, and decision-making.",
    keyPoints: [
      "Internal Sources: Transaction systems, CRM databases, financial records, employee feedback, and operational metrics.",
      "External Sources: Market research reports, government statistics, trade associations, news, and competitor intelligence.",
      "Primary vs. Secondary: Primary sources are created for a specific purpose; secondary sources are previously collected for other purposes.",
      "Source Evaluation: Assess each source for credibility, timeliness, relevance, and potential bias before relying on it.",
      "Information Integration: Combining multiple sources produces more robust insights than any single source alone."
    ],
    roleplayTips: [
      "\"Before accepting any data point, I ask three questions: who collected it, why, and how current is it—source quality determines whether information helps or misleads decision-making.\"",
      "\"Our competitive intelligence comes from a combination of public filings, market research subscriptions, industry conference intelligence, and direct customer feedback—no single source is complete.\"",
      "\"The most underutilized information source in most businesses is their own transaction data—it contains customer behavior signals that external research can never replicate.\""
    ]
  },

  "NF079": {
    id: "NF079",
    code: "NF:079",
    name: "Describe the nature of business records",
    definition: "Explain the types of business records, their purposes, legal retention requirements, and best practices for maintaining accurate and accessible documentation.",
    keyPoints: [
      "Record Types: Financial, legal, operational, personnel, and customer records each have specific content and retention requirements.",
      "Legal Requirements: Federal and state laws mandate retention periods for various categories of business records.",
      "Accuracy: Records must accurately capture what occurred—inaccurate records create legal, operational, and reputational risk.",
      "Accessibility: Records should be organized so authorized users can retrieve them promptly when needed.",
      "Disposition: Records beyond their required retention period should be disposed of according to the organization's record management policy."
    ],
    roleplayTips: [
      "\"We follow a records management policy that specifies retention periods by category—knowing the legal minimums protects us both from disposing of records we need and retaining records that create discovery liability.\"",
      "\"Our digital records system tags every document with its category, creation date, and scheduled disposition date—that systematic approach eliminates the manual burden of tracking retention across thousands of documents.\"",
      "\"Inaccurate business records aren't just an operational problem—in litigation or regulatory examination, they can be treated as evidence of wrongdoing even when the underlying business practice was sound.\""
    ]
  },

  "NF278": {
    id: "NF278",
    code: "NF:278",
    name: "Discuss the importance of information security",
    definition: "Explain why protecting organizational information assets from unauthorized access, disclosure, modification, or destruction is critical to business operations and stakeholder trust.",
    keyPoints: [
      "Confidentiality: Ensuring information is accessible only to those authorized to access it.",
      "Integrity: Protecting the accuracy and completeness of information from unauthorized modification.",
      "Availability: Ensuring information systems and data are accessible to authorized users when needed.",
      "Business Risk: Information security failures can result in financial loss, regulatory penalties, and reputational damage.",
      "Shared Responsibility: Information security requires consistent behavior from every employee, not just IT specialists."
    ],
    roleplayTips: [
      "\"A data breach doesn't just expose customer information—it exposes our business to regulatory fines, litigation, and the kind of reputational damage that takes years to repair.\"",
      "\"Information security is everyone's responsibility—the most sophisticated technical controls can be bypassed by a single employee who clicks a phishing link.\"",
      "\"We apply a risk-based approach to information security: our most sensitive data gets our strongest controls, and we continuously test whether those controls actually work.\""
    ]
  },

  "NF080": {
    id: "NF080",
    code: "NF:080",
    name: "Explain the legal issues associated with information management",
    definition: "Describe the regulatory requirements and legal considerations governing data collection, storage, use, and privacy in business information management.",
    keyPoints: [
      "Privacy Laws: GDPR, CCPA, HIPAA, and sector-specific regulations create obligations for handling personal data.",
      "Data Minimization: Collect only the information necessary for defined purposes to reduce privacy risk and compliance burden.",
      "Consent Requirements: Many regulations require explicit consent before collecting, using, or sharing personal information.",
      "Cross-Border Transfer: Moving personal data across national borders triggers specific legal requirements in many jurisdictions.",
      "Breach Notification: Regulations typically require timely notification of affected individuals and regulators when data breaches occur."
    ],
    roleplayTips: [
      "\"Our GDPR compliance program covers consent management, data subject rights, retention limits, and breach notification—each element has a process owner and defined procedures.\"",
      "\"Before we deploy this marketing campaign, our legal team reviews the data collection and use for compliance with applicable privacy regulations—we've built that review into the campaign development process.\"",
      "\"Data minimization isn't just good legal practice—it's good risk management; data you don't collect can't be breached and doesn't create compliance obligations.\""
    ]
  },

  "NF081": {
    id: "NF081",
    code: "NF:081",
    name: "Describe the role of information technology in business",
    definition: "Explain how technology systems enable business operations, improve efficiency, support decision-making, and create competitive advantage across all functional areas.",
    keyPoints: [
      "Operational Enablement: IT systems automate transactions, coordinate operations, and provide the infrastructure for business processes.",
      "Decision Support: Analytics, business intelligence, and reporting systems convert data into actionable management information.",
      "Communication: Networks, email, collaboration tools, and CRM systems enable internal and external business communication.",
      "Competitive Differentiation: Technology innovation can create products, services, and capabilities competitors cannot easily replicate.",
      "Integration: Modern businesses depend on integrated IT systems that share data across functions to eliminate silos."
    ],
    roleplayTips: [
      "\"IT is no longer a back-office support function—in our business, technology is the product, the delivery mechanism, and the competitive differentiator simultaneously.\"",
      "\"Our ERP system integration eliminated the manual reconciliation between departments that was consuming 20% of each finance team member's time—that's the operational value of integrated IT.\"",
      "\"The businesses that will win the next decade are those that use technology not just to do existing things faster but to do fundamentally different things that weren't possible before.\""
    ]
  },

  "NF110": {
    id: "NF110",
    code: "NF:110",
    name: "Explain the nature of data mining",
    definition: "Describe how analytical techniques applied to large datasets reveal patterns, correlations, and insights that inform business decisions and strategy.",
    keyPoints: [
      "Pattern Recognition: Data mining identifies non-obvious relationships and patterns in large datasets.",
      "Predictive Modeling: Using historical patterns to predict future behavior—customer churn, fraud, demand forecasting.",
      "Segmentation: Clustering algorithms identify natural groupings in customer or market data.",
      "Machine Learning: Algorithmic approaches that improve predictive accuracy through exposure to training data.",
      "Business Value: Data mining converts raw transaction data into strategic intelligence that improves decisions and competitive position."
    ],
    roleplayTips: [
      "\"Our churn prediction model analyzes 40 behavioral signals to flag customers at risk 90 days before cancellation—that lead time gives our retention team enough runway to intervene.\"",
      "\"Data mining revealed a purchase pattern we'd never have identified manually: customers who buy product A within 30 days of onboarding have 3x the 2-year retention rate—that insight shaped our entire onboarding strategy.\"",
      "\"The ROI on data mining investments comes from the decisions they improve—we tie every analytical project to a specific decision and measure whether the insight changed the decision and by how much.\""
    ]
  },

  "NF111": {
    id: "NF111",
    code: "NF:111",
    name: "Explain the nature of artificial intelligence",
    definition: "Describe AI as the simulation of human intelligence processes by computer systems, and explain its business applications in automation, prediction, personalization, and decision support.",
    keyPoints: [
      "Machine Learning: AI systems learn from data rather than being explicitly programmed with rules.",
      "Natural Language Processing: AI that understands and generates human language, enabling chatbots, translation, and document analysis.",
      "Computer Vision: AI that interprets visual information, enabling quality inspection, security, and medical imaging applications.",
      "Automation: AI automates cognitive tasks that previously required human judgment, improving speed and consistency.",
      "Business Applications: AI powers recommendation engines, fraud detection, demand forecasting, customer service, and pricing optimization."
    ],
    roleplayTips: [
      "\"AI isn't replacing human judgment—it's augmenting it by processing more data faster than humans can and presenting the most decision-relevant information at the moment it's needed.\"",
      "\"Our AI-powered pricing engine adjusts prices dynamically based on demand signals, competitor pricing, and inventory levels—that capability would require a team of analysts to replicate manually.\"",
      "\"The business value of AI comes from identifying the right problems to apply it to—not every business problem benefits from AI, but the ones that do can generate transformative competitive advantage.\""
    ]
  },

  "NF076": {
    id: "NF076",
    code: "NF:076",
    name: "Assess information needs",
    definition: "Identify what information is required to make effective decisions, close knowledge gaps, and evaluate the quality and completeness of available information.",
    keyPoints: [
      "Decision-Driven: Information needs are defined by the decisions they must support—start with the decision, not the data.",
      "Gap Analysis: Compare available information to what is needed to identify collection priorities.",
      "Critical Information: Distinguish between information that is nice to have and information that materially affects the decision.",
      "Quality Assessment: Evaluate accuracy, completeness, timeliness, and relevance of available information.",
      "Cost-Benefit: The cost of obtaining additional information should be weighed against the improvement in decision quality."
    ],
    roleplayTips: [
      "\"Before I start any analysis, I ask: what decision will this information support, and what's the minimum I need to make that decision confidently? That discipline prevents analysis paralysis.\"",
      "\"The information gap I have is material to this decision—we need to do a quick customer survey before we commit because the assumption we're operating on hasn't been validated.\"",
      "\"Not all information gaps are worth closing—some data is expensive to obtain and only marginally improves decision quality. I prioritize the gaps that most reduce decision risk.\""
    ]
  },

  "NF003": {
    id: "NF003",
    code: "NF:003",
    name: "Describe the need for information management",
    definition: "Explain why organizations must systematically manage information assets to support decisions, maintain compliance, improve efficiency, and protect competitive advantage.",
    keyPoints: [
      "Decision Quality: Better information produces better decisions—information management is fundamentally about improving organizational decision-making.",
      "Compliance: Regulatory requirements mandate specific information management practices and retention policies.",
      "Operational Efficiency: Well-managed information eliminates the time waste of searching for or recreating information that should be accessible.",
      "Knowledge Preservation: Systematic information management prevents institutional knowledge from disappearing when employees leave.",
      "Competitive Protection: Proprietary information is a valuable asset that requires active protection from unauthorized access."
    ],
    roleplayTips: [
      "\"We discovered that critical customer information lived in 12 different systems with no integration—our information management project consolidated that data and instantly improved our ability to serve customers.\"",
      "\"Information management isn't just an IT issue—it's a strategic capability that determines whether the organization can learn, adapt, and make good decisions at scale.\"",
      "\"The cost of poor information management shows up in bad decisions, regulatory penalties, and the time employees spend hunting for information that should be at their fingertips.\""
    ]
  },

  "NF083": {
    id: "NF083",
    code: "NF:083",
    name: "Describe the nature of records management",
    definition: "Explain the systematic control of business records throughout their lifecycle—creation, use, maintenance, and disposition—to meet operational, legal, and historical requirements.",
    keyPoints: [
      "Record Lifecycle: Creation, active use, semi-active retention, and final disposition form the complete record lifecycle.",
      "Retention Schedules: Documented schedules specify how long each record type must be retained.",
      "Legal Holds: When litigation is anticipated, all potentially relevant records must be preserved beyond standard schedules.",
      "Format Management: Records in physical and electronic formats require different management approaches.",
      "Audit Trail: Records management systems create accountability by documenting who created, accessed, and modified records."
    ],
    roleplayTips: [
      "\"Our records management program paid for itself when we could produce five-year-old contracts in 24 hours during a regulatory audit—without systematic management, that would have taken weeks.\"",
      "\"Legal holds are serious business—when our legal team issues a hold, all standard disposal activities for covered records stop immediately, and we document that we received and complied with the hold.\"",
      "\"The worst records management failure isn't destroying records too early—it's being unable to find records you have because your storage and labeling system is inadequate.\""
    ]
  },

  "NF084": {
    id: "NF084",
    code: "NF:084",
    name: "Describe the nature of databases",
    definition: "Explain database systems as organized collections of structured data that enable efficient storage, retrieval, and management of information for business applications.",
    keyPoints: [
      "Relational Databases: Store data in related tables and use SQL for querying—the dominant model for structured business data.",
      "Data Normalization: Organizing data to reduce redundancy and improve data integrity.",
      "Query Capability: Databases enable complex data retrieval through queries that filter, sort, and join information from multiple tables.",
      "ACID Properties: Atomicity, Consistency, Isolation, and Durability ensure database reliability in transaction processing.",
      "Database Management Systems: Oracle, SQL Server, PostgreSQL, and MySQL are enterprise database management platforms."
    ],
    roleplayTips: [
      "\"The customer database is the foundation of all our CRM analytics—the quality of the data in it directly determines the quality of every customer insight and decision we make.\"",
      "\"We normalized our product database to eliminate the duplicate and conflicting records that were causing pricing errors—that data quality improvement reduced customer complaints significantly.\"",
      "\"A query that used to take an analyst two hours to run manually now returns in 30 seconds because we indexed the right fields and structured the data correctly—database design has direct productivity implications.\""
    ]
  },

  "NF085": {
    id: "NF085",
    code: "NF:085",
    name: "Describe the nature of knowledge management",
    definition: "Explain how organizations systematically capture, organize, share, and apply collective knowledge to improve performance, accelerate learning, and preserve institutional memory.",
    keyPoints: [
      "Explicit Knowledge: Codified information in documents, databases, and processes that can be stored and transferred.",
      "Tacit Knowledge: Skills, experience, and intuition that are difficult to codify but are often the most valuable organizational knowledge.",
      "Knowledge Capture: Converting tacit expertise into explicit resources through documentation, training, and communities of practice.",
      "Knowledge Sharing: Systems and cultures that facilitate the movement of knowledge to where it creates most value.",
      "Continuous Learning: Organizational learning occurs when individual insights become organizational capabilities."
    ],
    roleplayTips: [
      "\"When our top engineer left, we lost three years of product architecture knowledge—our knowledge management program now captures critical expertise continuously rather than in departure interviews.\"",
      "\"Our internal wiki and post-project review process converts individual lessons learned into organizational knowledge that everyone can access—it's how we avoid repeating expensive mistakes.\"",
      "\"Knowledge management culture is as important as the tools—if sharing knowledge is recognized and rewarded, people do it; if it's seen as threatening or irrelevant, the best tools in the world won't help.\""
    ]
  },

  "NF086": {
    id: "NF086",
    code: "NF:086",
    name: "Explain the role of business intelligence in business",
    definition: "Describe how business intelligence systems transform raw data into actionable insights through reporting, dashboards, and analytics that support evidence-based management decisions.",
    keyPoints: [
      "BI Components: Data warehousing, ETL processes, OLAP analysis, and reporting tools are the core BI infrastructure.",
      "Descriptive Analytics: What happened—historical reporting and dashboards that describe past performance.",
      "Diagnostic Analytics: Why it happened—drill-down analysis that explains the causes of observed performance.",
      "Predictive Analytics: What will happen—forecasting and modeling using historical patterns.",
      "Data Democracy: BI systems should make relevant information accessible to the managers and employees who need it."
    ],
    roleplayTips: [
      "\"Our BI dashboard gives every regional manager the same view of their performance metrics that I have—that transparency drives accountability and eliminates the time previously spent on manual reporting.\"",
      "\"The diagnostic analytics capability is what sets a strong BI system apart—knowing sales declined is a starting point; knowing it was driven by a specific product in a specific region gives you something to act on.\"",
      "\"We moved from monthly report packs to real-time dashboards and the decision-making cadence accelerated—managers now act on signals within days rather than after the monthly close.\""
    ]
  },

  "NF004": {
    id: "NF004",
    code: "NF:004",
    name: "Discuss the importance of copyright protection",
    definition: "Explain how copyright law protects original creative works, the rights it grants to creators, and the obligations of businesses to respect intellectual property ownership.",
    keyPoints: [
      "Copyright Coverage: Protects original works of authorship including writing, software, music, art, and other creative expression.",
      "Automatic Protection: Copyright arises automatically upon creation; registration provides additional legal remedies.",
      "Duration: Copyright protection generally lasts for the creator's life plus 70 years.",
      "Business Obligations: Organizations must ensure they have proper licenses for all software, content, and media they use.",
      "Work for Hire: Copyrights in works created by employees in the scope of their employment generally belong to the employer."
    ],
    roleplayTips: [
      "\"Before using any third-party content in our marketing materials, we verify the license terms—copyright infringement creates legal liability that far outweighs the cost of obtaining proper permissions.\"",
      "\"Our software asset management program ensures every application we use is properly licensed—unlicensed software exposes the company to audit risk and significant financial penalties.\"",
      "\"The employment agreements for our creative and development staff include work-for-hire provisions that establish company ownership of IP created in the scope of employment—that's essential to protect our product assets.\""
    ]
  },

  "NF005": {
    id: "NF005",
    code: "NF:005",
    name: "Discuss the nature of information management in organizations",
    definition: "Describe how information assets are governed, secured, and optimized across organizational functions to support operational efficiency and strategic decision-making.",
    keyPoints: [
      "Information Architecture: The structured organization of data across systems, processes, and repositories.",
      "Data Ownership: Assigning clear ownership of data assets ensures accountability for accuracy and appropriate use.",
      "Cross-Functional Flow: Information must flow appropriately across organizational boundaries to enable integrated decision-making.",
      "Governance Framework: Policies and procedures that regulate who can create, access, modify, and dispose of information assets.",
      "Continuous Improvement: Information management capabilities must evolve as business needs, technology, and data volumes change."
    ],
    roleplayTips: [
      "\"Information management in our organization starts with data governance—we have defined owners for every critical data domain who are accountable for its accuracy and appropriate use.\"",
      "\"Breaking down information silos between sales, finance, and operations was the highest-value initiative we undertook—integrated information produced insights that weren't visible when each function managed its data independently.\"",
      "\"Our information architecture review happens annually—we assess whether our data flows, governance structures, and system integrations still match the needs of the business as it's evolved.\""
    ]
  },

  "NF006": {
    id: "NF006",
    code: "NF:006",
    name: "Explain how information is used in business decision making",
    definition: "Describe the role of data, analysis, and insight in improving the quality of business decisions across strategic, operational, and tactical contexts.",
    keyPoints: [
      "Decision Support: Information reduces uncertainty in decisions by replacing assumption with evidence.",
      "Analytical Process: Data → Analysis → Insight → Recommendation → Decision → Action.",
      "Information Quality: Decision quality is bounded by information quality—good analysis of bad data produces bad decisions.",
      "Timeliness: Information that arrives after a decision is made has no decision value.",
      "Human-Data Integration: The best decisions combine data-driven analysis with human judgment and contextual knowledge."
    ],
    roleplayTips: [
      "\"The quality of our pricing decisions improved dramatically when we started analyzing transaction-level data—we replaced intuition about price elasticity with actual evidence.\"",
      "\"Information supports decisions, but it doesn't make them—the judgment about how to weigh different data points and what the numbers mean in context is irreplaceable.\"",
      "\"I always ask whether we have the right information before starting an analysis—a well-designed study of the wrong question wastes time and produces misleading conclusions.\""
    ]
  },

  "NF007": {
    id: "NF007",
    code: "NF:007",
    name: "Describe techniques for obtaining customer feedback",
    definition: "Explain the methods businesses use to collect customer opinions, preferences, and experiences to improve products, services, and customer relationships.",
    keyPoints: [
      "Surveys: Structured questionnaires measure satisfaction, preferences, and experiences at scale.",
      "NPS: Net Promoter Score measures loyalty and likelihood to recommend on a single standardized scale.",
      "Focus Groups: Small-group discussions generate qualitative insight into customer motivations and perceptions.",
      "Social Listening: Monitoring social media and review platforms captures unsolicited customer feedback.",
      "Customer Interviews: In-depth conversations surface the 'why' behind behaviors and preferences."
    ],
    roleplayTips: [
      "\"We run monthly NPS surveys with a single follow-up open-text question—the quantitative score tells us our trend; the qualitative response tells us what to do about it.\"",
      "\"Post-purchase surveys are most valuable when the sample is random and the questions are specific—generic satisfaction scores are less actionable than feedback on specific touchpoints.\"",
      "\"We monitor our category on social media daily—unsolicited feedback is often more honest than survey responses because customers aren't trying to be helpful, they're just expressing genuine reactions.\""
    ]
  },

  "NF008": {
    id: "NF008",
    code: "NF:008",
    name: "Explain the uses of data collected in research",
    definition: "Describe how businesses apply research data to improve products, refine marketing strategies, optimize operations, and support strategic decision-making.",
    keyPoints: [
      "Product Development: Research data identifies unmet needs and validates concepts before significant development investment.",
      "Market Segmentation: Customer research reveals distinct segments with different needs that require targeted strategies.",
      "Competitive Intelligence: Research data supports assessment of competitive positioning and identification of market opportunities.",
      "Operational Improvement: Operational data highlights process inefficiencies and quality problems for targeted improvement.",
      "Performance Measurement: Research data provides external benchmarks and customer-reported metrics for evaluating performance."
    ],
    roleplayTips: [
      "\"The customer research data we collected before the product redesign saved us from investing in features customers valued less than we assumed—that validation prevented a significant misallocation.\"",
      "\"We use segmentation research to ensure our marketing investments are concentrated on the highest-value segments rather than spread thinly across the entire market.\"",
      "\"Research data is only valuable when it actually changes decisions—I always ask before commissioning a study: what will we do differently if the data says X versus Y? If the answer is nothing, don't run the study.\""
    ]
  },

  "NF009": {
    id: "NF009",
    code: "NF:009",
    name: "Discuss the use of technology in marketing information management",
    definition: "Explain how marketing technology platforms collect, integrate, and analyze customer and market data to personalize communication and improve marketing effectiveness.",
    keyPoints: [
      "MarTech Stack: The collection of marketing technology tools—CRM, marketing automation, analytics, content management—that support marketing operations.",
      "Customer Data Platform: A CDP unifies customer data from multiple sources into a single persistent customer profile.",
      "Marketing Automation: Systems that execute personalized, triggered marketing communications at scale.",
      "Attribution: Technology tools that measure which marketing touchpoints contribute to customer conversions.",
      "Privacy Compliance: Marketing technology must be configured to comply with consent requirements and data minimization principles."
    ],
    roleplayTips: [
      "\"Our marketing automation platform lets us deliver personalized messages triggered by specific customer behaviors—we reach customers with the right message at the right moment without manual intervention.\"",
      "\"Marketing attribution is one of the hardest problems in data-driven marketing—we use multi-touch attribution to distribute credit across the customer journey rather than giving it all to the last click.\"",
      "\"The CDP investment was justified by the elimination of data silos—having a single customer view across email, web, and purchase history lets us personalize in ways that fragmented data never could.\""
    ]
  },

  "NF010": {
    id: "NF010",
    code: "NF:010",
    name: "Explain the nature and scope of the marketing-information management function",
    definition: "Describe the full range of activities involved in gathering, analyzing, storing, and applying marketing information to create competitive advantage and improve marketing decisions.",
    keyPoints: [
      "MIS Components: A marketing information system integrates internal data, market intelligence, and marketing research.",
      "Continuous Process: Marketing information management is ongoing, not episodic—it supports decisions across the planning and execution cycle.",
      "Decision Support: MIS provides the information needed for product development, pricing, distribution, and promotion decisions.",
      "Customer Intelligence: Systematic collection and analysis of customer information is the core of marketing information management.",
      "Technology Integration: Modern marketing information management relies on integrated technology platforms to collect and analyze data."
    ],
    roleplayTips: [
      "\"Our marketing information system connects CRM data, website analytics, campaign performance, and market research into an integrated view that supports every major marketing decision.\"",
      "\"The marketing information function is most valuable when it's proactive—not just answering questions but surfacing insights the business didn't know to ask for.\"",
      "\"Marketing information management is the feedback loop that closes the gap between what we think customers want and what they actually do—without it, we're making strategy based on assumption.\""
    ]
  },

  "NF088": {
    id: "NF088",
    code: "NF:088",
    name: "Describe the use of technology in information management",
    definition: "Explain how technology tools—databases, cloud platforms, analytics software, and automation—enable organizations to manage information more efficiently and extract greater value from data.",
    keyPoints: [
      "Cloud Storage: Cloud platforms provide scalable, secure storage for organizational data with accessibility from any location.",
      "Database Technology: Relational and non-relational databases organize and provide efficient access to structured and unstructured data.",
      "Analytics Software: BI tools, statistical packages, and AI platforms convert raw data into analytical insights.",
      "Workflow Automation: Robotic process automation and workflow tools eliminate manual data handling tasks.",
      "Integration Middleware: API platforms and integration tools connect disparate systems to enable data flow across the organization."
    ],
    roleplayTips: [
      "\"Moving our data infrastructure to the cloud eliminated the capital expense and maintenance burden of on-premise servers while giving us more storage capacity and better data accessibility than we had before.\"",
      "\"Our RPA implementation automated the manual data reconciliation between systems that consumed 15 hours of analyst time weekly—that reallocation freed the team for higher-value analytical work.\"",
      "\"The API integration between our CRM and ERP systems eliminated the manual data entry that was our biggest source of data quality errors—technology solved a data governance problem.\""
    ]
  },

  "NF011": {
    id: "NF011",
    code: "NF:011",
    name: "Create a data-collection tool",
    definition: "Design surveys, forms, or other instruments to systematically collect specific information needed to support business decisions.",
    keyPoints: [
      "Purpose Clarity: The collection tool must be designed around the specific decisions it will support.",
      "Question Design: Questions should be clear, unambiguous, and free of bias or leading language.",
      "Response Options: Scaled responses (Likert), categorical choices, and open text each serve different analytical purposes.",
      "Length: Shorter instruments get higher response rates—include only questions whose answers will be used.",
      "Pilot Testing: Test the instrument with a small group before full deployment to identify confusion or ambiguity."
    ],
    roleplayTips: [
      "\"Before finalizing the survey, I pilot-tested it with five customers and found two questions that were being interpreted differently than intended—that kind of finding is exactly why pilots matter.\"",
      "\"I design surveys backward from the analysis I plan to run—if I can't specify how I'll use a question's responses in the analysis, I cut the question.\"",
      "\"The biggest data collection design mistake is asking too many questions—every additional question reduces response quality; discipline in instrument design produces better data.\""
    ]
  },

  "NF042": {
    id: "NF042",
    code: "NF:042",
    name: "Describe the nature of marketing research",
    definition: "Explain the systematic process of gathering, recording, and analyzing data about marketing problems and opportunities to support better business decisions.",
    keyPoints: [
      "Research Process: Define the problem, design the study, collect data, analyze results, and report findings.",
      "Problem Definition: The research problem must be stated precisely—vague research questions produce vague answers.",
      "Methodology Selection: The research question determines whether qualitative or quantitative methods are most appropriate.",
      "Sampling: The sample must represent the target population to produce generalizable conclusions.",
      "Insight Translation: Research findings must be translated into specific, actionable business recommendations."
    ],
    roleplayTips: [
      "\"The research brief is the most important document in any marketing research project—if the client brief isn't clear about the decision the research will support, no methodology will save it.\"",
      "\"We use qual to explore and quant to validate—qualitative research generates hypotheses about why customers behave as they do; quantitative research tests those hypotheses at scale.\"",
      "\"A research finding that doesn't change a decision or deepen understanding in a way that improves future decisions has zero value—I evaluate every research investment against that standard.\""
    ]
  },

  "NF215": {
    id: "NF215",
    code: "NF:215",
    name: "Explain the nature of digital marketing",
    definition: "Describe the use of digital channels—search, social media, email, content, and paid advertising—to reach and engage target audiences and drive business objectives.",
    keyPoints: [
      "Channel Diversity: Digital marketing spans owned, earned, and paid channels each with different economics and engagement characteristics.",
      "Targeting Precision: Digital channels enable audience targeting by behavior, demographic, interest, and intent at a granularity impossible in traditional media.",
      "Measurability: Digital marketing provides real-time performance data that enables rapid optimization.",
      "Content Marketing: Creating valuable content that attracts and engages audiences rather than interrupting them.",
      "Integrated Strategy: Effective digital marketing integrates channels into a coherent customer journey strategy."
    ],
    roleplayTips: [
      "\"Digital marketing's fundamental advantage is the ability to measure everything—every dollar of spend can be attributed to outcomes in ways traditional media never allowed.\"",
      "\"Content marketing is a long-term investment—it builds authority and organic search visibility that generates leads at a fraction of the cost of paid acquisition, but it takes months to see the compounding effect.\"",
      "\"Our digital marketing strategy is channel-agnostic but customer-journey-centric—we select channels based on where our target customers are and what stage of the decision process they're in.\""
    ]
  },

  "NF001": {
    id: "NF001",
    code: "NF:001",
    name: "Explain the relationship between customer service and information management",
    definition: "Describe how access to accurate, complete customer information enables service representatives to deliver personalized, efficient, and effective customer experiences.",
    keyPoints: [
      "Complete Customer View: Service representatives with complete customer history can resolve issues faster and more accurately.",
      "Personalization: Customer data enables service that is tailored to individual history, preferences, and context.",
      "First-Contact Resolution: Better information leads to higher rates of resolving issues on the first contact.",
      "Proactive Service: Customer information enables identifying and addressing potential issues before customers complain.",
      "Continuous Improvement: Customer service data feeds back into product and process improvement efforts."
    ],
    roleplayTips: [
      "\"Our service agents have every interaction, purchase, and prior issue for each customer on one screen—that context reduces average handle time by 40% and dramatically improves the customer experience.\"",
      "\"Information management is the invisible infrastructure of great customer service—the agent's empathy and skill is what customers see, but the data quality determines what they can actually do.\"",
      "\"We use service interaction data to identify the most common customer problems and fix them upstream—the best customer service is the service call that never needs to happen.\""
    ]
  },

  "NF002": {
    id: "NF002",
    code: "NF:002",
    name: "Obtain needed information efficiently",
    definition: "Apply systematic techniques to locate, access, and extract the specific information needed to support a decision or task without unnecessary time expenditure.",
    keyPoints: [
      "Search Strategy: A clear search strategy—starting with the most reliable sources—reduces time spent finding information.",
      "Source Selection: Match the information source to the question—not all questions require the same level of rigor or depth.",
      "Evaluate Quality: Quickly assess whether a source is credible, current, and relevant before investing time in it.",
      "Extract and Organize: Capture relevant information in a usable format rather than trying to remember everything.",
      "Stop Criteria: Know when you have enough information to make the decision—seeking perfect information is often not worth the time cost."
    ],
    roleplayTips: [
      "\"My information gathering strategy for competitive analysis starts with the company's own materials—investor presentations, product pages, and job postings—before moving to market research.\"",
      "\"The most common information management inefficiency I see is searching broadly when a targeted query would find the answer in a fraction of the time—precision in search design is a learnable skill.\"",
      "\"Knowing when to stop gathering information is as important as knowing where to look—the goal is a good decision, not a perfect information set.\""
    ]
  },

  "NF013": {
    id: "NF013",
    code: "NF:013",
    name: "Interpret charts, graphs, and tables",
    definition: "Read and extract accurate insights from visual data representations, understanding scale, trends, relationships, and limitations of different visualization formats.",
    keyPoints: [
      "Axis Literacy: Understand scale, units, and whether axes start at zero—truncated axes can visually exaggerate differences.",
      "Trend Reading: Identify direction, rate of change, and inflection points in line charts.",
      "Proportions: Pie charts and stacked bars communicate parts-to-whole relationships.",
      "Correlation vs. Causation: Two variables moving together in a chart doesn't establish that one causes the other.",
      "Source Evaluation: Consider who created the visualization and whether they had an interest in the interpretation."
    ],
    roleplayTips: [
      "\"Before concluding from this chart, I note the y-axis starts at 85%—the apparent dramatic decline looks much more modest when the axis is adjusted to start at zero.\"",
      "\"The table shows a correlation between marketing spend and revenue, but correlation isn't causation—we need to control for other variables before attributing the revenue lift to the spend.\"",
      "\"I always verify my interpretation of a chart by reading the actual numbers rather than relying entirely on visual impression—scale distortions can make small differences look large and vice versa.\""
    ]
  },

  "NF014": {
    id: "NF014",
    code: "NF:014",
    name: "Explain the types of business reports",
    definition: "Describe the major categories of business reports—analytical, informational, compliance, and operational—and their purpose, audience, and structure.",
    keyPoints: [
      "Analytical Reports: Investigate a problem or opportunity with analysis and recommendations for a specific audience.",
      "Informational Reports: Provide regular updates on key metrics or activities without specific recommendations.",
      "Compliance Reports: Document adherence to regulatory, legal, or contractual requirements.",
      "Operational Reports: Track day-to-day performance against operational targets.",
      "Audience Calibration: Report format, length, and technical depth should match the audience's knowledge and need."
    ],
    roleplayTips: [
      "\"The executive summary version of this report is one page with three key findings and one recommendation—the full analytical report is available for those who want the supporting detail.\"",
      "\"I structure analytical reports so the recommendation comes first, not last—busy executives shouldn't have to read 20 pages to find out what I think we should do.\"",
      "\"Our monthly operational report follows a consistent format—key metrics, variance from plan, explanation of significant variances, and forward-looking outlook—so readers always know where to find what they need.\""
    ]
  },

  "NF015": {
    id: "NF015",
    code: "NF:015",
    name: "Explain the purposes of business reports",
    definition: "Describe the functions that business reports serve in communicating information, supporting decisions, meeting compliance obligations, and documenting performance.",
    keyPoints: [
      "Decision Support: Reports provide the information leadership needs to make informed strategic and operational decisions.",
      "Performance Accountability: Reports document performance against plan and create accountability for results.",
      "Communication: Reports are the primary mechanism for communicating complex information across organizational levels.",
      "Compliance: Regulatory filings, audit reports, and compliance summaries fulfill legal and contractual obligations.",
      "Organizational Learning: After-action reports and project post-mortems convert experience into organizational knowledge."
    ],
    roleplayTips: [
      "\"The board report serves two functions: informing directors of current performance and giving them the data they need to fulfill their oversight responsibility—both audiences are served by the same document.\"",
      "\"Post-project reports are the most undervalued reporting investment—the lessons captured represent institutional knowledge that prevents repeating expensive mistakes.\"",
      "\"I calibrate every report to its purpose—a compliance report must be comprehensive and precise; an executive decision brief must be concise and directional; using the same format for both serves neither purpose well.\""
    ]
  },

  "NF093": {
    id: "NF093",
    code: "NF:093",
    name: "Evaluate data for accuracy and appropriateness",
    definition: "Apply critical analysis to assess whether information is accurate, complete, current, and appropriate for the purpose before using it to support decisions.",
    keyPoints: [
      "Accuracy Assessment: Verify data against original sources or through independent cross-checks.",
      "Completeness Check: Determine whether the dataset covers the relevant universe or has significant gaps.",
      "Currency: Confirm the data is recent enough to reflect current conditions.",
      "Relevance: Assess whether the data actually measures what the decision requires it to measure.",
      "Bias Detection: Identify whether data collection methods or sources could have introduced systematic bias."
    ],
    roleplayTips: [
      "\"Before building any analysis on this dataset, I reviewed the collection methodology and found a sampling bias that would have led to systematically wrong conclusions—data evaluation before analysis is not optional.\"",
      "\"The customer satisfaction data looked good until I noticed the survey sample excluded customers who churned—of course the satisfaction scores were high if the dissatisfied customers had already left.\"",
      "\"I apply three tests to every data source before using it: Is it accurate? Is it complete? Is it measuring the right thing? Passing all three is the minimum standard for decision-relevant data.\""
    ]
  },

  "NF216": {
    id: "NF216",
    code: "NF:216",
    name: "Explain the nature of analytics",
    definition: "Describe the systematic use of data and quantitative methods to discover patterns, test hypotheses, and generate insights that support better business decisions.",
    keyPoints: [
      "Descriptive: Summarizes what happened using historical data.",
      "Diagnostic: Explains why something happened through segmentation and drill-down analysis.",
      "Predictive: Forecasts what is likely to happen using statistical models and machine learning.",
      "Prescriptive: Recommends what action to take by optimizing decisions against defined objectives.",
      "Analytics Maturity: Organizations progress from descriptive to prescriptive analytics as data capabilities and culture develop."
    ],
    roleplayTips: [
      "\"Most organizations are strong at descriptive analytics and weak at predictive—the competitive advantage comes from predicting what's going to happen and acting on it before the moment arrives.\"",
      "\"Our prescriptive analytics model optimizes our pricing in real time—it's not just telling us what happened or what will happen, it's recommending the specific price change that maximizes revenue.\"",
      "\"Analytics is a competitive weapon, but only if the insights it generates actually change decisions—building a culture where data-driven recommendations are respected and acted upon is harder than the technical work.\""
    ]
  },

  "NF139": {
    id: "NF139",
    code: "NF:139",
    name: "Describe the nature of tools that can be used to access information in the database",
    definition: "Explain the software tools—SQL, BI platforms, data visualization tools, and query interfaces—used to retrieve and analyze information stored in database systems.",
    keyPoints: [
      "SQL: Structured Query Language is the standard tool for retrieving, filtering, and aggregating data from relational databases.",
      "BI Tools: Platforms like Tableau, Power BI, and Looker provide visual analytics interfaces that don't require SQL expertise.",
      "Data APIs: Application programming interfaces provide programmatic access to databases for integration with other systems.",
      "Spreadsheet Tools: Excel and Google Sheets remain widely used for ad-hoc analysis of database exports.",
      "Tool Selection: Match the tool to the user's technical skill and the analytical task—different contexts require different capabilities."
    ],
    roleplayTips: [
      "\"A well-written SQL query returns exactly the data I need in the format I need it—investing in SQL proficiency is one of the highest-ROI technical skills for anyone who works with business data.\"",
      "\"We deployed a BI platform so that business managers can explore data independently without waiting for the analytics team—democratizing data access accelerated decision-making significantly.\"",
      "\"The right tool depends on the question—SQL for precise data extraction, Tableau for visual exploration, Python for statistical modeling—forcing every question through one tool reduces analytical quality.\""
    ]
  },

  "NF140": {
    id: "NF140",
    code: "NF:140",
    name: "Discuss the use of metrics in business",
    definition: "Explain how quantitative performance measures guide business decisions, create accountability, track progress toward goals, and support continuous improvement.",
    keyPoints: [
      "Leading vs. Lagging: Leading indicators predict future performance; lagging indicators measure past results.",
      "SMART Metrics: Specific, Measurable, Achievable, Relevant, and Time-bound metrics provide unambiguous performance standards.",
      "Metric Selection: Choose the few metrics that most reliably indicate whether the business is on track, not the most that can be measured.",
      "Unintended Consequences: Poorly designed metrics can incentivize gaming or optimization of the measure at the expense of true performance.",
      "Benchmarking: Comparing metrics to industry norms or competitors provides context for evaluating absolute performance."
    ],
    roleplayTips: [
      "\"We reduced our KPI set from 35 metrics to 7—when everything is important, nothing is important; the smaller set focuses management attention on what actually drives the business.\"",
      "\"Net Promoter Score is a useful proxy for customer loyalty, but we pair it with retention rate and expansion revenue as sanity checks—a single metric can be managed up without improving the underlying reality.\"",
      "\"Leading indicators are where the management value lies—I want to know six weeks before the quarter ends whether we're on track, not after the quarter closes when it's too late to act.\""
    ]
  },

  "NF141": {
    id: "NF141",
    code: "NF:141",
    name: "Interpret descriptive statistics",
    definition: "Read and draw accurate conclusions from summary statistics—mean, median, mode, standard deviation, and distributions—that describe patterns in data.",
    keyPoints: [
      "Central Tendency: Mean, median, and mode each describe the center of a distribution differently, and the appropriate measure depends on the data's shape.",
      "Dispersion: Standard deviation and range describe how spread out the data is—two datasets with the same mean can have very different distributions.",
      "Skewness: Skewed distributions have a longer tail on one side, which pulls the mean away from the median.",
      "Percentiles: Describe the value below which a certain percentage of observations fall.",
      "Statistical Significance: A difference between groups may be practically irrelevant even if it's statistically significant at the required confidence level."
    ],
    roleplayTips: [
      "\"The average customer transaction value is $450, but the median is $280—that gap tells me the distribution is right-skewed, likely driven by a small number of large orders that inflate the mean.\"",
      "\"A high standard deviation in our delivery times is a service quality problem even if the mean is acceptable—high variance means unpredictability, which customers experience as unreliability.\"",
      "\"Statistical significance doesn't mean practical significance—a 0.5% improvement in conversion rate might be statistically robust but not worth the cost of the change that produced it.\""
    ]
  },

  "NF148": {
    id: "NF148",
    code: "NF:148",
    name: "Explain the nature of predictive analytics",
    definition: "Describe how statistical models and machine learning algorithms use historical data to forecast future outcomes and support proactive business decision-making.",
    keyPoints: [
      "Model Types: Regression, classification, time series, and clustering models each address different prediction problems.",
      "Training Data: Predictive models learn patterns from historical data and apply them to new data.",
      "Validation: Models must be tested against holdout data not used in training to assess generalizability.",
      "Model Drift: Predictive models degrade over time as real-world patterns change—regular retraining is required.",
      "Actionability: Predictive analytics creates value only when predictions are connected to timely business actions."
    ],
    roleplayTips: [
      "\"Our demand forecasting model reduced inventory error by 30%—the improved accuracy lets us reduce safety stock while actually improving service levels.\"",
      "\"Predictive analytics is not fortune-telling—it's a probability distribution over possible futures based on historical patterns; the value comes from making better bets, not certain predictions.\"",
      "\"We validate our predictive models quarterly because the underlying business patterns change—a model trained two years ago may no longer reflect current customer behavior.\""
    ]
  },

  "NF149": {
    id: "NF149",
    code: "NF:149",
    name: "Explain the nature of prescriptive analytics",
    definition: "Describe how optimization models and simulation tools use data and defined objectives to recommend specific actions that achieve the best possible outcome.",
    keyPoints: [
      "Beyond Prediction: Prescriptive analytics goes beyond 'what will happen' to 'what should we do about it.'",
      "Optimization: Mathematical optimization identifies the action that maximizes a defined objective within specified constraints.",
      "Simulation: Monte Carlo and agent-based simulations model complex systems to evaluate decision alternatives.",
      "Real-time Decisioning: Prescriptive systems can make automated recommendations or decisions at machine speed.",
      "Human-Machine Collaboration: Most prescriptive applications combine algorithmic recommendations with human judgment for final decisions."
    ],
    roleplayTips: [
      "\"Our logistics optimization system prescribes the lowest-cost delivery routing that meets service-level commitments—it recalculates continuously as conditions change and produces better outcomes than any human dispatcher could manage manually.\"",
      "\"Prescriptive analytics on our pricing problem takes demand elasticity predictions and margin targets as inputs and prescribes the specific price for each SKU and market segment.\"",
      "\"The difference between predictive and prescriptive analytics is the action layer—predictive says 'this customer will churn,' prescriptive says 'offer this specific incentive to prevent it.'\""
    ]
  },

  "NF150": {
    id: "NF150",
    code: "NF:150",
    name: "Collect primary data",
    definition: "Design and execute original data collection—through surveys, interviews, observations, or experiments—to obtain information specifically needed to address a defined business question.",
    keyPoints: [
      "Research Design: The method must be appropriate for the question—structured surveys for quantification, interviews for depth.",
      "Sampling: The sample must be representative of the target population and large enough for reliable conclusions.",
      "Instrument Design: Data collection tools should be validated before full deployment to ensure they capture the intended information.",
      "Execution: Consistent data collection procedures minimize measurement error and bias.",
      "Ethical Considerations: Informed consent and data privacy are legal and ethical obligations in primary research."
    ],
    roleplayTips: [
      "\"Before scaling the survey, I piloted it with 20 respondents to check question clarity and completion time—the pilot caught three ambiguous questions that would have produced unusable data.\"",
      "\"Primary research is worth the investment when existing secondary data doesn't answer the specific question or is too outdated to be reliable for the decision at hand.\"",
      "\"Our research participants consent to data collection under our privacy policy—protecting participant data and using it only for stated purposes is both a legal requirement and a trust obligation.\""
    ]
  },

  "NF151": {
    id: "NF151",
    code: "NF:151",
    name: "Collect secondary data",
    definition: "Locate and apply existing information from published sources to address business questions more efficiently than primary research when adequate data already exists.",
    keyPoints: [
      "Source Types: Government statistics, trade publications, academic research, industry reports, and competitor filings are major secondary sources.",
      "Evaluation Criteria: Assess each secondary source for credibility, methodology, sample size, and recency.",
      "Cost Efficiency: Secondary data costs less than primary research—it should be exhausted before commissioning primary studies.",
      "Limitations: Secondary data was collected for other purposes and may not precisely match current research needs.",
      "Synthesis: Combining multiple secondary sources produces more robust conclusions than relying on any single source."
    ],
    roleplayTips: [
      "\"Before commissioning a custom market research study, I always conduct a thorough secondary research review—in this case, a Mintel report and two academic studies answered our question without any primary collection.\"",
      "\"I evaluate every secondary source by asking: who collected this, why, and how? The answers tell me whether to weight the data heavily or treat it as directional at best.\"",
      "\"Secondary data limitations are feature, not bugs, if you're transparent about them—presenting a secondary-based analysis with explicit caveats about the data's original purpose is more useful than not presenting it at all.\""
    ]
  },

  "NF152": {
    id: "NF152",
    code: "NF:152",
    name: "Draw conclusions based on information analysis",
    definition: "Synthesize analytical findings into clear, evidence-supported conclusions that directly address the original business question and can guide actionable decisions.",
    keyPoints: [
      "Evidence-Based: Conclusions must be grounded in the data—avoid leaping beyond what the evidence actually supports.",
      "Clarity: State conclusions plainly and directly; avoid hedging that obscures the actual finding.",
      "Alternative Explanations: Consider and address alternative interpretations of the evidence before finalizing conclusions.",
      "Confidence Level: Communicate the strength of evidence behind conclusions so decision-makers can calibrate their confidence.",
      "Actionable Link: Every conclusion should connect to a business implication or recommended action."
    ],
    roleplayTips: [
      "\"The data supports one clear conclusion with high confidence: our east region has a structural customer retention problem that isn't explained by product quality or pricing.\"",
      "\"I always include a 'limitations' section in any analysis—transparency about what the data can't tell us is as important as communicating what it can, to prevent overconfident decisions.\"",
      "\"The conclusion that drives value isn't 'sales are declining'—it's 'sales are declining in this segment for this reason, and here's the action we recommend.' Analysis without a directed conclusion is incomplete.\""
    ]
  },


  // ── OP: Operations ────────────────────────────────────────────────────────

  "OP189": {
    id: "OP189",
    code: "OP:189",
    name: "Explain the nature and scope of the operations function",
    definition: "Describe operations management as the function responsible for designing, managing, and improving the processes that create and deliver an organization's goods and services.",
    keyPoints: [
      "Core Purpose: Operations converts inputs—materials, labor, capital—into outputs that customers value.",
      "Scope: Operations spans product design, process engineering, supply chain, quality, facilities, and service delivery.",
      "Efficiency vs. Effectiveness: Operations must be both efficient (low cost) and effective (meeting customer requirements).",
      "Strategic Role: Operations capabilities can be a primary source of competitive advantage.",
      "Continuous Improvement: World-class operations never stop improving—the standard is always the current best, not the historical norm."
    ],
    roleplayTips: [
      "\"Operations isn't just the factory floor—it's every process that delivers value to the customer, from order receipt to delivery and service, and everything in between.\"",
      "\"Our operations strategy is built around our competitive priorities: cost, quality, and delivery reliability—every process design decision is evaluated against those three criteria.\"",
      "\"The operations function either enables or constrains the company's ability to execute its strategy—strong operational capabilities are the foundation that makes everything else possible.\""
    ]
  },

  "OP190": {
    id: "OP190",
    code: "OP:190",
    name: "Discuss the role of ethics in operations",
    definition: "Describe how ethical standards apply to operational decisions including supplier selection, labor practices, environmental impact, quality, and safety.",
    keyPoints: [
      "Supply Chain Ethics: Responsible sourcing requires ensuring suppliers meet ethical standards for labor, safety, and environment.",
      "Product Safety: Operations has an ethical obligation to produce products that are safe for intended and reasonably foreseeable uses.",
      "Environmental Responsibility: Operations decisions that affect communities through pollution, resource use, or emissions carry ethical obligations.",
      "Worker Safety: Providing safe working conditions is both a legal requirement and an ethical obligation.",
      "Quality Honesty: Representing product quality and specifications accurately to customers is an ethical operational requirement."
    ],
    roleplayTips: [
      "\"We audit our Tier 1 and Tier 2 suppliers for labor practices—a supplier violation doesn't just violate our code of conduct, it creates reputational and supply continuity risk.\"",
      "\"When our quality testing found a borderline result, we didn't ship—the ethical standard is that our products must be safe, not that they must merely meet the minimum specification.\"",
      "\"Environmental compliance is the floor, not the ceiling—we set our environmental targets above regulatory minimums because the communities where we operate deserve better than the minimum required.\""
    ]
  },

  "OP191": {
    id: "OP191",
    code: "OP:191",
    name: "Describe the nature of operations management",
    definition: "Explain the planning, organizing, directing, and controlling activities that coordinate resources to efficiently produce and deliver goods and services.",
    keyPoints: [
      "System Design: Designing the processes, capacity, layout, and technology that define how operations function.",
      "System Operation: Planning, scheduling, and controlling day-to-day operations to meet production and service goals.",
      "Inventory Management: Balancing inventory investment against service level requirements.",
      "Quality Management: Building quality into processes rather than inspecting it in after the fact.",
      "Performance Measurement: Tracking operational KPIs to identify improvement opportunities and maintain accountability."
    ],
    roleplayTips: [
      "\"Operations management is about designing systems that consistently deliver results—it's the discipline of removing variability and waste from every process that touches the customer.\"",
      "\"The best operations managers I know spend as much time at the gemba—where the work is done—as in meetings; you can't manage what you don't understand intimately.\"",
      "\"Our daily operations review covers five metrics: safety, quality, delivery, cost, and morale—those five together tell you everything you need to know about whether a plant is running well.\""
    ]
  },

  "OP004": {
    id: "OP004",
    code: "OP:004",
    name: "Identify hazardous situations in the workplace",
    definition: "Recognize physical, chemical, biological, and ergonomic hazards that could cause injury, illness, or property damage in the work environment.",
    keyPoints: [
      "Hazard Categories: Physical, chemical, biological, ergonomic, and psychosocial hazards each require specific identification and control methods.",
      "Regular Inspection: Systematic workplace inspections identify hazards before they cause incidents.",
      "Near-Miss Reporting: Near misses are leading indicators of future accidents—they should be reported and investigated.",
      "Employee Reporting: Workers closest to hazards are often the first to notice them—reporting culture is essential.",
      "Risk Assessment: Evaluate hazard severity and likelihood to prioritize mitigation resources."
    ],
    roleplayTips: [
      "\"We run monthly hazard walks with a cross-functional team—fresh eyes from different departments catch hazards that the people who work in that area have normalized.\"",
      "\"Near-miss reporting is the most valuable safety data we collect—each near miss is a free lesson about a potential accident that we can prevent with corrective action.\"",
      "\"Hazard identification is everyone's responsibility—we've built a culture where anyone can stop work and report a hazard without fear of negative consequences.\""
    ]
  },

  "OP005": {
    id: "OP005",
    code: "OP:005",
    name: "Handle and dispose of hazardous materials properly",
    definition: "Follow established procedures for the safe storage, handling, use, and disposal of substances that could harm human health or the environment.",
    keyPoints: [
      "OSHA HazCom: OSHA's Hazard Communication Standard requires labeling, Safety Data Sheets, and employee training for hazardous chemicals.",
      "SDS Requirement: Safety Data Sheets must be accessible to all employees who work with or near hazardous materials.",
      "PPE Requirements: Personal protective equipment must be worn when exposure to hazardous materials is possible.",
      "Disposal Regulations: Hazardous waste disposal is regulated—improper disposal carries significant legal and environmental consequences.",
      "Emergency Response: Employees must know how to respond safely to spills and exposures."
    ],
    roleplayTips: [
      "\"Every employee who handles hazardous materials completes annual HazCom training and has immediate access to the SDS for every chemical in their work area.\"",
      "\"Our hazardous waste disposal is managed by a licensed contractor under a documented manifest system—we know exactly where every pound of hazardous waste goes.\"",
      "\"The cost of a hazardous materials incident—cleanup, liability, regulatory penalties, and reputational damage—vastly exceeds the cost of proper handling procedures.\""
    ]
  },

  "OP006": {
    id: "OP006",
    code: "OP:006",
    name: "Participate in safety drills",
    definition: "Practice emergency response procedures through regular drills to ensure all employees know how to respond safely and effectively when actual emergencies occur.",
    keyPoints: [
      "Muscle Memory: Drills create automatic responses that operate even when adrenaline impairs judgment.",
      "Procedure Validation: Drills test whether emergency procedures actually work in practice.",
      "Communication Testing: Drills verify that alarm systems, communication protocols, and evacuation routes function as designed.",
      "Accountability: Regular drills demonstrate organizational commitment to safety preparedness.",
      "After-Action Review: Post-drill reviews identify improvements to procedures and training."
    ],
    roleplayTips: [
      "\"We conduct quarterly fire drills and annual emergency response exercises—the drill last month revealed that our assembly point was blocked by a construction project we hadn't accounted for.\"",
      "\"An emergency drill is only valuable if we debrief afterward and close the gaps it reveals—we track every observation from drills through corrective action to completion.\"",
      "\"When a real emergency occurred, our team responded calmly and effectively because they'd practiced the exact procedure multiple times—that preparation saved lives.\""
    ]
  },

  "OP007": {
    id: "OP007",
    code: "OP:007",
    name: "Maintain a safe work environment",
    definition: "Create and sustain physical and procedural conditions that prevent workplace injuries and illnesses through hazard control, training, and safety culture.",
    keyPoints: [
      "Hierarchy of Controls: Eliminate, substitute, engineer, administer, and PPE—apply controls from most to least effective.",
      "Safety Culture: A genuine safety culture makes every employee feel personally responsible for safety, not just compliant with rules.",
      "Incident Investigation: Thorough incident investigation identifies root causes that prevent recurrence.",
      "Ergonomics: Designing workspaces and tasks to fit human capabilities prevents musculoskeletal injuries.",
      "Mental Health: A safe work environment includes psychological safety, not just physical safety."
    ],
    roleplayTips: [
      "\"Our safety performance improved when we shifted from a compliance mindset to a care mindset—people follow safety rules because they care about their colleagues, not because they fear citations.\"",
      "\"Every workplace injury gets a root cause investigation within 24 hours—we're looking for system failures, not individuals to blame.\"",
      "\"The hierarchy of controls tells me engineering solutions outperform training and PPE—I invest in eliminating hazards first rather than training people to work safely around them.\""
    ]
  },

  "OP008": {
    id: "OP008",
    code: "OP:008",
    name: "Develop safety policies and procedures",
    definition: "Create and implement written safety policies, procedures, and standards that establish clear expectations for safe behavior and define responses to safety-relevant situations.",
    keyPoints: [
      "Policy Foundation: Safety policies establish the organization's commitment and the standards that all must meet.",
      "Procedure Specificity: Effective procedures are specific enough to guide behavior but flexible enough for practical application.",
      "Employee Input: Frontline employees who do the work should contribute to the procedures that govern it.",
      "Regular Review: Safety documents must be updated when processes, equipment, regulations, or incident data indicate a need for change.",
      "Training Integration: Written procedures are only effective when accompanied by training and demonstrated competency."
    ],
    roleplayTips: [
      "\"Our safety procedures are written by the people who do the work, reviewed by safety and engineering, and tested in practice before becoming standard—that process produces procedures people actually follow.\"",
      "\"A policy on the shelf doesn't create a safe workplace—policies need training, accountability, and regular reinforcement to change behavior.\"",
      "\"We review our critical safety procedures annually, after any incident, and whenever we change the underlying process—static procedures in dynamic environments create gaps.\""
    ]
  },

  "OP009": {
    id: "OP009",
    code: "OP:009",
    name: "Explain the importance of safe and healthful work environments",
    definition: "Articulate why physical and psychological workplace safety is both a moral obligation and a business imperative that affects productivity, retention, and organizational performance.",
    keyPoints: [
      "Human Value: Every employee deserves to go home in the same condition they arrived—workplace safety is a fundamental human obligation.",
      "Productivity: Safe workplaces have higher productivity because workers focus on their tasks rather than managing hazards.",
      "Legal Compliance: OSHA and related regulations establish minimum safety requirements with significant penalties for non-compliance.",
      "Cost Avoidance: Workplace injuries create costs in medical treatment, workers' compensation, productivity loss, and investigation.",
      "Talent Retention: Employees choose employers who demonstrate genuine concern for their well-being."
    ],
    roleplayTips: [
      "\"Workplace safety isn't just the right thing to do—it's a business imperative; every serious injury costs us in direct costs, lost productivity, and the morale impact on the team that witnessed it.\"",
      "\"OSHA compliance is the floor, not the ceiling of our safety aspiration—our goal is zero preventable injuries, which requires going well beyond minimum regulatory requirements.\"",
      "\"The ROI on safety investments is consistently among the highest in the business—prevention is always cheaper than the combined cost of an incident: treatment, compensation, investigation, and reputation.\""
    ]
  },

  "OP010": {
    id: "OP010",
    code: "OP:010",
    name: "Implement safety procedures",
    definition: "Put written safety policies into consistent practice through training, supervision, accountability, and the operational integration of safe behaviors into daily work.",
    keyPoints: [
      "Training: Employees must understand procedures before they can follow them—initial and refresher training is essential.",
      "Supervision: Leaders must observe and reinforce safe behavior, not just enforce rules when violations occur.",
      "Accountability: Consistent consequences for both safe and unsafe behavior create the incentive structure that shapes culture.",
      "Leading Indicators: Track safety behaviors and near misses, not just injuries, to manage safety proactively.",
      "Integration: Safety procedures must be embedded in normal work processes, not treated as separate add-ons."
    ],
    roleplayTips: [
      "\"Safety procedure compliance is a management responsibility—if I observe an unsafe behavior and don't address it, I've communicated that the procedure is optional.\"",
      "\"We measure safety engagement, not just injury rates—the number of safety observations submitted, hazard reports filed, and near misses reported tells us whether safety is alive in the culture.\"",
      "\"The best safety implementations I've seen make the safe way the easy way—procedures designed to be convenient get followed; procedures designed to be compliant get worked around.\""
    ]
  },

  "OP013": {
    id: "OP013",
    code: "OP:013",
    name: "Explain routine security precautions",
    definition: "Describe the basic physical, digital, and behavioral security measures that protect organizational assets, information, employees, and customers from unauthorized access or harm.",
    keyPoints: [
      "Physical Security: Access controls, visitor management, and surveillance protect facilities and physical assets.",
      "Information Security: Password management, access rights, and data handling procedures protect digital assets.",
      "Social Engineering Defense: Awareness of phishing, pretexting, and other manipulation tactics prevents information theft.",
      "Incident Reporting: Clear protocols for reporting security concerns ensure threats are addressed quickly.",
      "Least Privilege: Grant employees access only to the information and systems needed for their specific role."
    ],
    roleplayTips: [
      "\"Our access control policy gives every employee access to exactly what they need for their role and nothing more—least privilege is the single most effective security control we have.\"",
      "\"Security awareness training is annual, but the phishing simulation tests are monthly—real-world conditioning against social engineering is more effective than classroom instruction alone.\"",
      "\"Physical and digital security work together—our most significant data breach risk is a lost device, not an external hack, so device management and encryption are foundational controls.\""
    ]
  },

  "OP152": {
    id: "OP152",
    code: "OP:152",
    name: "Describe the impact of technology on operations",
    definition: "Explain how technology innovations transform operational capabilities, change the economics of production and service delivery, and create new sources of competitive advantage.",
    keyPoints: [
      "Automation: Robots, AI, and software automate repetitive tasks, reducing labor cost and error rates.",
      "Process Integration: ERP and workflow systems integrate previously siloed operations, improving coordination and information flow.",
      "Data Analytics: Operational analytics identify inefficiencies, predict failures, and optimize decisions in real time.",
      "Supply Chain Technology: IoT, blockchain, and advanced planning systems improve visibility, traceability, and responsiveness.",
      "Customer Interface: Technology reshapes how operations interact with customers—from online ordering to real-time delivery tracking."
    ],
    roleplayTips: [
      "\"Our predictive maintenance program uses IoT sensors to identify equipment failures before they occur—we've reduced unplanned downtime by 60% since implementation.\"",
      "\"The automation investment changed our competitive position—it reduced our unit cost structure below what new entrants can achieve, creating a durable cost advantage.\"",
      "\"Technology transforms operations, but the competitive advantage comes from implementation, not just installation—our edge is in how we use the technology, not just that we have it.\""
    ]
  },

  "OP153": {
    id: "OP153",
    code: "OP:153",
    name: "Explain the nature of operations research",
    definition: "Describe how quantitative methods—including optimization, simulation, and statistical analysis—are used to solve complex operational problems and improve decision-making.",
    keyPoints: [
      "Optimization: Finding the best solution given objectives and constraints through mathematical programming.",
      "Simulation: Modeling complex systems to evaluate decisions in a virtual environment before implementation.",
      "Queuing Theory: Analyzing waiting lines to optimize service capacity and customer wait times.",
      "Decision Analysis: Structuring complex decisions with uncertain outcomes using probability and utility frameworks.",
      "Application Breadth: Operations research tools apply to scheduling, routing, inventory, capacity, and pricing problems."
    ],
    roleplayTips: [
      "\"We used linear programming to optimize our production schedule across four facilities and 200 products—the optimized schedule reduced total cost by 12% compared to our manual planning approach.\"",
      "\"Before building the new distribution center, we ran a simulation model to evaluate different designs under various demand scenarios—that analysis prevented a $2M investment in a configuration that would have created a bottleneck.\"",
      "\"Operations research is how we move from intuition-based decisions to evidence-based optimization—the mathematical rigor produces solutions that experience and common sense often miss.\""
    ]
  },

  "OP441": {
    id: "OP441",
    code: "OP:441",
    name: "Plan and track projects",
    definition: "Define project scope, schedule, and resources, then monitor progress against the plan to ensure timely, on-budget delivery of project objectives.",
    keyPoints: [
      "Scope Definition: A clear, bounded scope statement prevents scope creep that derails timelines and budgets.",
      "Work Breakdown: Decompose the project into tasks with defined deliverables, durations, and dependencies.",
      "Critical Path: Identify the sequence of tasks that determines the minimum project duration.",
      "Progress Tracking: Regular status reviews compare actual progress to plan and identify variances requiring action.",
      "Change Management: Changes to scope, timeline, or budget must go through a formal change control process."
    ],
    roleplayTips: [
      "\"The project plan is a communication tool as much as a management tool—it ensures everyone has the same understanding of what will be done, by whom, and by when.\"",
      "\"I track earned value on all projects above $100K—it gives me an objective, forward-looking view of schedule and cost performance early enough to take corrective action.\"",
      "\"Scope creep is the silent project killer—every informal request gets evaluated against the baseline scope, and if it's out of scope, we go through change control before any work starts.\""
    ]
  },

  "OP064": {
    id: "OP064",
    code: "OP:064",
    name: "Manage projects",
    definition: "Lead projects from initiation through closure by coordinating people, resources, and processes to achieve defined objectives within scope, schedule, and budget constraints.",
    keyPoints: [
      "Five Process Groups: Initiating, planning, executing, monitoring/controlling, and closing constitute the project management lifecycle.",
      "Stakeholder Management: Identify, engage, and manage the expectations of everyone with a stake in the project outcome.",
      "Risk Management: Identify project risks early and implement mitigation plans before they become issues.",
      "Team Leadership: Project success depends on the project manager's ability to direct and motivate a team without formal authority.",
      "Lessons Learned: Systematic capture of project learnings improves future project performance."
    ],
    roleplayTips: [
      "\"Project management is fundamentally about communication—keeping stakeholders aligned, issues visible, and decisions timely is what separates successful projects from failed ones.\"",
      "\"I maintain a risk register from project kickoff—identified risks with mitigation plans rarely become crises; unidentified risks always do.\"",
      "\"The project closure review is as important as the kickoff—capturing what we learned before the team disperses ensures the organization improves rather than repeating the same lessons on the next project.\""
    ]
  },

  "OP158": {
    id: "OP158",
    code: "OP:158",
    name: "Explain the nature of quality management",
    definition: "Describe the principles and practices that ensure goods and services consistently meet defined standards and customer requirements through prevention, process control, and continuous improvement.",
    keyPoints: [
      "Quality Definition: Fitness for purpose—meeting the needs and expectations of the customer.",
      "Cost of Quality: Prevention and appraisal costs are investments that reduce internal and external failure costs.",
      "Process Control: Building quality into processes rather than inspecting it in after production.",
      "Continuous Improvement: Quality management is never finished—there is always a better way to serve the customer.",
      "Quality Culture: Quality requires commitment from every employee, not just the quality department."
    ],
    roleplayTips: [
      "\"Quality management is a profit strategy, not just a cost—the best way to reduce warranty costs, returns, and complaint handling is to build quality into every step of the process.\"",
      "\"We measure cost of quality explicitly—prevention, appraisal, internal failure, and external failure—because it reveals the true cost of our current quality approach and the ROI on improvement investments.\"",
      "\"Our quality goal is zero defects reaching customers—not a low rate of defects, but zero; anything less means we're accepting that some customers will have a bad experience.\""
    ]
  },

  "OP675": {
    id: "OP675",
    code: "OP:675",
    name: "Explain the nature of continuous improvement",
    definition: "Describe the philosophy and practice of making ongoing, incremental improvements to processes, products, and services rather than relying solely on periodic major changes.",
    keyPoints: [
      "Kaizen Philosophy: Small, frequent improvements compound into significant performance gains over time.",
      "Employee Engagement: Frontline workers are the primary source of improvement ideas—systems that engage them accelerate improvement.",
      "PDCA Cycle: Plan-Do-Check-Act provides a structured framework for testing and implementing improvements.",
      "Waste Elimination: Lean thinking identifies and removes non-value-adding activities from processes.",
      "Measurement: Continuous improvement requires baseline measures, targets, and tracking to confirm improvement is real."
    ],
    roleplayTips: [
      "\"We run 30+ kaizen events per year—the improvements are individually small but they compound into hundreds of thousands of dollars in efficiency gains annually.\"",
      "\"Continuous improvement culture means no one has to wait for leadership approval to try a better way—employees are empowered to test improvements in their area and the best ideas get adopted broadly.\"",
      "\"The enemy of continuous improvement is the idea that 'good enough' is acceptable—world-class operations know that today's standard is tomorrow's baseline, not today's achievement.\""
    ]
  },

  "OP519": {
    id: "OP519",
    code: "OP:519",
    name: "Explain the nature of supply chain management",
    definition: "Describe how businesses coordinate the flow of materials, information, and finances from raw material suppliers through production to end customers.",
    keyPoints: [
      "Supply Chain Scope: From raw material sourcing to end customer delivery—every stage of the value chain is part of supply chain management.",
      "Coordination Challenge: Supply chains involve multiple organizations with different objectives that must be coordinated.",
      "Information Flow: Effective supply chain management requires real-time visibility of inventory, demand, and capacity throughout the chain.",
      "Trade-offs: Supply chain design involves trade-offs between cost, speed, flexibility, and resilience.",
      "Risk Management: Supply chain disruption risk requires diversification, inventory buffers, and contingency planning."
    ],
    roleplayTips: [
      "\"Supply chain management is about designing and operating a system that reliably delivers the right product, in the right quantity, to the right place, at the right time—at a cost that's sustainable.\"",
      "\"The pandemic exposed supply chain fragility that had been optimized for efficiency at the expense of resilience—we've since built redundancy into our critical supply nodes even though it costs more.\"",
      "\"Supply chain visibility is a competitive advantage—when we can see demand signals and inventory positions in real time across the entire chain, we make better decisions than competitors who are flying blind.\""
    ]
  },

  "OP520": {
    id: "OP520",
    code: "OP:520",
    name: "Describe the nature of vendor/supplier relationships",
    definition: "Explain how businesses develop and manage partnerships with suppliers to ensure reliable supply, competitive cost, and continuous improvement in the value chain.",
    keyPoints: [
      "Strategic vs. Transactional: Strategic suppliers require relationship investment; transactional suppliers are managed primarily on price.",
      "Supplier Qualification: Evaluating suppliers on quality, delivery, financial stability, and capability before onboarding.",
      "Performance Management: Measuring and communicating supplier performance creates accountability and improvement incentives.",
      "Partnership Development: Deep supplier partnerships enable joint development, cost reduction, and responsiveness.",
      "Risk Management: Supplier concentration, financial stability, and geographic risk require active management."
    ],
    roleplayTips: [
      "\"We segment our supply base into three tiers and manage each differently—strategic partners get quarterly business reviews and joint improvement programs; transactional suppliers get competitive bidding.\"",
      "\"Supplier performance scorecards are shared with suppliers quarterly—transparent feedback creates the accountability that drives improvement and gives high-performing suppliers recognition.\"",
      "\"The single-source supplier that was 30% cheaper created a dependency that nearly shut down our production when they had a fire—we've since built dual-source requirements into our sourcing policy for all critical components.\""
    ]
  },

  "OP521": {
    id: "OP521",
    code: "OP:521",
    name: "Explain the nature of procurement",
    definition: "Describe the processes and strategies for identifying needs, selecting suppliers, negotiating terms, and managing contracts to acquire goods and services that meet quality, cost, and delivery requirements.",
    keyPoints: [
      "Source-to-Pay: The procurement cycle from need identification through supplier selection, contracting, ordering, and payment.",
      "Competitive Bidding: Formal RFP/RFQ processes create competition that drives optimal terms.",
      "Total Cost of Ownership: Procurement decisions should evaluate total cost—price plus quality, delivery, support, and risk.",
      "Contract Management: Negotiated agreements define terms, performance expectations, and remedies.",
      "Category Management: Organizing procurement by spend category enables strategic sourcing and supplier consolidation."
    ],
    roleplayTips: [
      "\"Procurement is a profit center, not just a function—strategic sourcing and supplier management reduce total cost in ways that go well beyond negotiating a lower purchase price.\"",
      "\"Total cost of ownership analysis showed that the 'cheaper' supplier was actually more expensive when quality issues, higher reject rates, and delivery delays were factored in.\"",
      "\"Our category management approach consolidates suppliers where consolidation creates leverage, and maintains multiple sources where resilience or competition is more important than volume leverage.\""
    ]
  },

  "OP003": {
    id: "OP003",
    code: "OP:003",
    name: "Use time-management skills in an operations context",
    definition: "Apply prioritization, scheduling, and efficiency techniques to ensure operational activities are completed on time and resources are used productively.",
    keyPoints: [
      "Production Scheduling: Sequencing and timing work orders to meet customer commitments within available capacity.",
      "Bottleneck Management: Identifying and protecting throughput at the capacity-constraining operation.",
      "Setup Reduction: Minimizing changeover time increases productive capacity without adding equipment.",
      "Buffer Management: Appropriate time and inventory buffers protect commitments without excessive waste.",
      "Priority Discipline: Consistent adherence to defined priority rules prevents the expediting chaos that disrupts plans."
    ],
    roleplayTips: [
      "\"Our production schedule is built backward from customer commit dates with explicit buffer time at critical resources—that approach gives us high delivery reliability without creating waste elsewhere.\"",
      "\"Time management in operations means managing the sequence and timing of every machine, person, and material—the aggregate effect of thousands of small time decisions determines whether we hit our commitments.\"",
      "\"Setup reduction at our bottleneck operation added 15% to effective capacity without any capital investment—time management at the constraint is worth far more than time management anywhere else.\""
    ]
  },

  "OP001": {
    id: "OP001",
    code: "OP:001",
    name: "Implement organizational skills to facilitate workflow",
    definition: "Apply systematic organization of tasks, information, space, and people to enable smooth, efficient workflow and minimize disruptions to operational performance.",
    keyPoints: [
      "5S Methodology: Sort, Set in order, Shine, Standardize, Sustain—a systematic approach to workplace organization.",
      "Visual Management: Making the status of work, standards, and problems visible at a glance eliminates confusion.",
      "Process Documentation: Documented procedures ensure consistent execution and enable training.",
      "Task Coordination: Organizing handoffs between people and processes prevents work from falling through the cracks.",
      "Information Organization: Filing systems, labeling, and data management enable quick retrieval and decision support."
    ],
    roleplayTips: [
      "\"5S implementation in our warehouse reduced pick errors by 40% and picking time by 25%—organized workplaces aren't just aesthetically pleasing, they're operationally superior.\"",
      "\"Visual management boards in our production area let any manager understand the status of every work center in 30 seconds—that transparency accelerates problem identification and response.\"",
      "\"Organizational skills in operations mean that when something unexpected happens, the routine work doesn't fall apart—everything has a place, a process, and an owner.\""
    ]
  },

  "OP002": {
    id: "OP002",
    code: "OP:002",
    name: "Identify and report emergency situations",
    definition: "Recognize conditions that require immediate response—safety incidents, security threats, or system failures—and communicate them through proper channels to enable rapid corrective action.",
    keyPoints: [
      "Recognition: Know the indicators that distinguish normal operations from emergencies requiring escalation.",
      "Reporting Speed: Rapid reporting enables faster response that limits damage, injury, and disruption.",
      "Chain of Communication: Understand who to notify for different types of emergencies.",
      "Documentation: Record what was observed, when, and what actions were taken for investigation and learning.",
      "No Fear Culture: Employees must feel safe to report emergencies without fear of blame for having identified the problem."
    ],
    roleplayTips: [
      "\"The moment I recognized the situation was beyond normal operational parameters, I reported it up the chain immediately—waiting to be sure it was a problem cost us time we didn't have.\"",
      "\"Emergency reporting culture requires that the person who reports a problem is thanked, not blamed—otherwise people wait and hope problems resolve themselves.\"",
      "\"Speed of reporting is the most critical variable in emergency response—every minute of delay before the right people are engaged increases the cost and impact of the event.\""
    ]
  },

  "OP159": {
    id: "OP159",
    code: "OP:159",
    name: "Describe the nature of inventory management",
    definition: "Explain how businesses balance the cost of holding inventory against the service risk of stockouts to optimize inventory investment while meeting customer demand reliably.",
    keyPoints: [
      "Inventory Types: Raw materials, work-in-process, finished goods, and MRO inventory each require different management approaches.",
      "Order Quantity: Economic Order Quantity balances ordering costs against holding costs to minimize total inventory cost.",
      "Safety Stock: Buffer inventory that protects service levels against demand and supply variability.",
      "Inventory Turnover: Higher turnover reduces the capital tied up in inventory and the risk of obsolescence.",
      "ABC Classification: Classify inventory items by annual spend to focus management attention on the highest-value items."
    ],
    roleplayTips: [
      "\"Inventory is cash converted into stock—every dollar of unnecessary inventory is a dollar not available for other investments.\"",
      "\"Our ABC analysis showed 15% of SKUs accounted for 80% of inventory value—we applied rigorous management controls to that group and relaxed them for low-value items.\"",
      "\"Safety stock calculation starts with variability: the more variable the demand or supply lead time, the more buffer you need to maintain the target service level.\""
    ]
  },

  "OP015": {
    id: "OP015",
    code: "OP:015",
    name: "Explain the nature of managerial planning",
    definition: "Describe the process by which managers set objectives, assess resources and constraints, and develop action plans to guide organizational activity toward desired outcomes.",
    keyPoints: [
      "Strategic to Operational: Planning cascades from strategic goals through tactical objectives to operational tasks.",
      "Forecasting: Planning requires estimating future demand, resources, and environmental conditions.",
      "Resource Alignment: Plans ensure that resources are allocated to activities that support strategic priorities.",
      "Contingency Planning: Good plans account for alternative scenarios when key assumptions don't hold.",
      "Plan Communication: Plans create value only when they are communicated to and understood by those responsible for execution."
    ],
    roleplayTips: [
      "\"Planning without execution is dreaming; execution without planning is chaos—the plan is the bridge between aspiration and disciplined action.\"",
      "\"My planning process starts with the outcome I'm trying to achieve and works backward to identify the specific actions, resources, and timing required—working backward ensures the plan is actually connected to the goal.\"",
      "\"I always plan with contingencies—if the primary assumption doesn't hold, what do we do? Having a fallback before you need it is the difference between an organized response and a reactive scramble.\""
    ]
  },

  "OP016": {
    id: "OP016",
    code: "OP:016",
    name: "Organize work groups",
    definition: "Structure teams and assign responsibilities in ways that leverage capabilities, enable coordination, and create accountability for delivering defined outcomes.",
    keyPoints: [
      "Role Design: Clearly defined roles with appropriate scope, authority, and accountability enable effective execution.",
      "Skill-Task Matching: Assign work to the people whose skills and development needs are best served by the assignment.",
      "Coordination Mechanisms: Decide how the team will coordinate—meetings, shared systems, reporting lines—based on the work's interdependencies.",
      "Span of Control: Managers can effectively supervise 5-10 direct reports depending on work complexity and employee development needs.",
      "Work Group Culture: Intentionally build the norms and habits that determine how the group collaborates and resolves differences."
    ],
    roleplayTips: [
      "\"I organize teams around customer problems to be solved, not functions to be staffed—that orientation keeps the team focused on outcomes rather than activity.\"",
      "\"Before finalizing the team structure, I map the key interfaces—how will this team coordinate with adjacent functions?—and design those handoffs explicitly rather than leaving them to chance.\"",
      "\"The most important organizational decision I make is who the team leader is—the right leader can make an average structure work; the wrong leader will struggle with any structure.\""
    ]
  },

  "OP031": {
    id: "OP031",
    code: "OP:031",
    name: "Develop job descriptions",
    definition: "Create clear, accurate written summaries of a position's responsibilities, qualifications, reporting relationships, and performance expectations to support hiring, development, and performance management.",
    keyPoints: [
      "Role Clarity: Job descriptions eliminate ambiguity about what a role is responsible for and what success looks like.",
      "Hiring Foundation: Accurate job descriptions attract candidates with the right qualifications and set appropriate expectations.",
      "Legal Protection: Documented job descriptions support fair, legally compliant hiring and performance management.",
      "Performance Link: Connecting job description requirements to performance standards creates an integrated talent management framework.",
      "Regular Review: Job descriptions must evolve as roles change—outdated descriptions create confusion and fairness issues."
    ],
    roleplayTips: [
      "\"A well-written job description makes the hiring process faster and more accurate—candidates self-select based on a clear picture of the role, and the interview focuses on validating specific requirements.\"",
      "\"Job descriptions should describe the work, not just the qualifications—'manages a team of five engineers to deliver software products' is more useful than 'strong leadership skills.'\"",
      "\"We review every job description before opening a role—the team's needs evolve, and hiring against an outdated description produces mismatched hires.\""
    ]
  },

  "OP246": {
    id: "OP246",
    code: "OP:246",
    name: "Explain the nature of business process management",
    definition: "Describe the discipline of designing, executing, monitoring, and continuously improving business processes to achieve organizational objectives efficiently.",
    keyPoints: [
      "Process Perspective: Viewing the organization as a system of interrelated processes rather than siloed functions.",
      "Process Mapping: Documenting processes as-is to understand current state before designing improvements.",
      "Process Design: Redesigning processes for efficiency, quality, and customer value using lean and other improvement methods.",
      "Process Governance: Assigning process owners who are accountable for process performance across functional boundaries.",
      "Process Measurement: Defining and tracking metrics for each process to enable performance management and improvement."
    ],
    roleplayTips: [
      "\"Process mapping revealed that our order fulfillment process had 14 handoffs and an average of 3 days of queue time—eliminating unnecessary handoffs reduced average lead time by 60%.\"",
      "\"Business process management creates accountability for cross-functional performance—the process owner is responsible for the end-to-end outcome, which eliminates the silo problem where each function optimizes locally.\"",
      "\"We document processes not to create bureaucracy but to create a foundation for improvement—you can't systematically improve what you haven't systematically described.\""
    ]
  },

  "OP247": {
    id: "OP247",
    code: "OP:247",
    name: "Explain the nature of workforce planning",
    definition: "Describe the process of forecasting the supply and demand for labor and developing strategies to ensure the organization has the right people with the right skills at the right time.",
    keyPoints: [
      "Demand Forecasting: Project workforce requirements based on business strategy, workload, and productivity assumptions.",
      "Supply Analysis: Assess the current workforce's skills, experience, and projected availability against future requirements.",
      "Gap Analysis: Identify where projected supply falls short of or exceeds projected demand.",
      "Strategy Development: Design hiring, development, retention, and restructuring actions to close workforce gaps.",
      "Succession Planning: Identify and develop internal candidates for critical roles to reduce key-person dependency."
    ],
    roleplayTips: [
      "\"Our three-year workforce plan maps the skill requirements of our product roadmap against our current team—it tells us exactly what capabilities we need to hire, develop, or acquire before we have an execution gap.\"",
      "\"Workforce planning is the most underdeveloped strategic function in most companies—they plan their capital allocation meticulously and leave talent to reactive hiring.\"",
      "\"The critical roles in our succession plan all have identified internal candidates with development plans—key-person risk is a risk I actively manage, not accept.\""
    ]
  },

  "OP160": {
    id: "OP160",
    code: "OP:160",
    name: "Explain the nature of lean operations",
    definition: "Describe the lean philosophy of maximizing value and minimizing waste by continuously eliminating non-value-adding activities from every process.",
    keyPoints: [
      "Value Definition: Value is defined by the customer—anything the customer wouldn't pay for is waste.",
      "Eight Wastes: Overproduction, waiting, transport, over-processing, inventory, motion, defects, and unused talent are the categories of waste.",
      "Value Stream Mapping: Visualizing the entire flow of materials and information to identify waste and improvement opportunities.",
      "Pull Systems: Produce only what is needed, when it is needed, in the amount needed—eliminate overproduction.",
      "Respect for People: Lean systems engage and develop the people who do the work as the primary source of improvement ideas."
    ],
    roleplayTips: [
      "\"Value stream mapping our order process revealed that of the 14 days total lead time, only 2 hours were value-adding—12+ days of waste was hiding in queue time, waiting, and rework.\"",
      "\"Pull systems changed our relationship with inventory—instead of building to forecast, we build to customer signal, which eliminated $1.2M of slow-moving inventory.\"",
      "\"Lean isn't a set of tools; it's a management philosophy that respects the intelligence of the people doing the work and gives them the means to improve it continuously.\""
    ]
  },

  "OP161": {
    id: "OP161",
    code: "OP:161",
    name: "Explain the nature of Six Sigma",
    definition: "Describe the data-driven quality improvement methodology that uses statistical analysis and structured problem-solving to reduce process variation and defects.",
    keyPoints: [
      "DMAIC: Define, Measure, Analyze, Improve, Control—the five-step Six Sigma improvement framework.",
      "Statistical Foundation: Six Sigma uses statistical tools to measure process capability, identify root causes, and verify improvements.",
      "Sigma Level: A process at Six Sigma produces fewer than 3.4 defects per million opportunities—near perfection.",
      "Belt System: Green Belts, Black Belts, and Master Black Belts represent levels of Six Sigma expertise and project leadership.",
      "Business Results: Six Sigma projects are selected based on their connection to business objectives—financial impact is a primary selection criterion."
    ],
    roleplayTips: [
      "\"We applied DMAIC to our service defect problem and discovered the root cause was a data entry step that could be automated—the process change reduced defects by 85% and saves $300K annually.\"",
      "\"Six Sigma's value is in the rigor—without data and statistical validation, process improvements are often based on assumptions that don't hold, and the 'improvement' isn't real.\"",
      "\"The Control phase is the hardest part of DMAIC—sustaining improvements requires embedding them in standard work, control charts, and management review, otherwise regression is inevitable.\""
    ]
  },

  "OP162": {
    id: "OP162",
    code: "OP:162",
    name: "Explain the nature of total quality management",
    definition: "Describe TQM as an organization-wide approach to continuously improving quality in all processes, products, and services by engaging every employee in systematic improvement.",
    keyPoints: [
      "Customer Focus: TQM begins and ends with understanding and exceeding customer requirements.",
      "Total Involvement: Quality is everyone's responsibility—from the CEO to the frontline worker.",
      "Process Approach: TQM addresses quality through process improvement rather than individual inspection or blame.",
      "Factual Management: TQM decisions are based on data, not intuition.",
      "Long-term Thinking: TQM requires sustained organizational commitment—it's a culture, not a project."
    ],
    roleplayTips: [
      "\"TQM works when leadership lives it—if management makes exceptions to quality standards for financial reasons, they've told everyone in the organization that quality is negotiable.\"",
      "\"The most powerful TQM principle is that quality is built in, not inspected in—we invest in process controls that prevent defects rather than inspection processes that find them after the fact.\"",
      "\"TQM culture means employees feel empowered to stop a process when they identify a quality problem—that willingness to stop and fix is the behavior that prevents defects from reaching customers.\""
    ]
  },

  "OP017": {
    id: "OP017",
    code: "OP:017",
    name: "Coordinate work flows",
    definition: "Manage the sequence, timing, and handoffs of tasks across people and processes to ensure smooth, efficient progress toward operational objectives.",
    keyPoints: [
      "Dependency Mapping: Understanding which tasks must complete before others can begin prevents blocking and rework.",
      "Handoff Design: Explicitly designed handoffs between team members reduce errors, delays, and dropped work.",
      "Capacity Balancing: Distributing work across available resources prevents bottlenecks that slow the entire workflow.",
      "Real-Time Visibility: Monitoring workflow status enables rapid intervention when work falls behind.",
      "Feedback Loops: Workflows should include checkpoints that verify quality before passing work to the next stage."
    ],
    roleplayTips: [
      "\"I map the workflow before assigning tasks to make sure I've designed the handoffs—that 10 minutes of planning prevents the hours of confusion that come from unclear who does what in what order.\"",
      "\"Bottleneck management is the highest-leverage workflow coordination activity—constraining my team's output at the weakest step means everything upstream of it is overproducing and everything downstream is starved.\"",
      "\"We installed a simple visual board in the workflow—each task moves through status columns and anyone can see where the work is and whether anything is stuck.\""
    ]
  },

  "OP163": {
    id: "OP163",
    code: "OP:163",
    name: "Explain the impact of globalization on business operations",
    definition: "Describe how the integration of global markets, production, and supply chains creates both opportunities and challenges for operational strategy and management.",
    keyPoints: [
      "Cost Arbitrage: Global operations allow access to lower-cost labor, materials, and facilities.",
      "Market Access: Operational presence in target markets improves responsiveness and reduces trade barriers.",
      "Supply Chain Complexity: Global operations introduce longer lead times, currency risk, and supply chain disruption exposure.",
      "Regulatory Diversity: Operating globally requires compliance with different labor, safety, environmental, and commercial regulations.",
      "Coordination Challenge: Managing operations across time zones, languages, and cultures requires specific organizational capabilities."
    ],
    roleplayTips: [
      "\"Global operations give us a 20% cost advantage on manufactured goods, but that advantage comes with supply chain complexity and risk that require active management investment.\"",
      "\"Geopolitical risk is now a standard variable in our operational risk assessment—concentration of operations or suppliers in politically unstable regions requires hedging through diversification.\"",
      "\"The regulatory diversity of global operations means our compliance function is as strategically important as our supply chain function—a violation in any jurisdiction can affect our global operating license.\""
    ]
  },

  "OP164": {
    id: "OP164",
    code: "OP:164",
    name: "Explain the nature of production management",
    definition: "Describe the planning, organizing, and controlling of manufacturing processes to efficiently convert inputs into finished goods that meet quality and delivery requirements.",
    keyPoints: [
      "Production Planning: Determining what to produce, how much, when, and with what resources.",
      "Master Production Schedule: The authoritative plan for what finished goods will be produced and when.",
      "Capacity Management: Ensuring production capacity matches the demand profile over both short and long horizons.",
      "Material Requirements Planning: Calculating component and raw material requirements from the MPS.",
      "Scheduling: Assigning specific work orders to specific resources at specific times to meet production targets."
    ],
    roleplayTips: [
      "\"Production management is about translating customer demand into work orders, material requirements, and machine schedules that deliver the right product at the right time at the lowest possible cost.\"",
      "\"Our master production schedule is the single source of truth for what's being built and when—everything from procurement to shipping is planned from that one document.\"",
      "\"Capacity constraint management is where I spend most of my planning energy—unbalanced capacity creates bottlenecks that make everything else irrelevant.\""
    ]
  },

  "OP019": {
    id: "OP019",
    code: "OP:019",
    name: "Explain the nature of office procedures",
    definition: "Describe the standard operating procedures that govern administrative processes, ensuring consistency, efficiency, and compliance in day-to-day office functions.",
    keyPoints: [
      "Standardization: Documented procedures ensure consistent execution regardless of who performs the task.",
      "Efficiency: Well-designed procedures eliminate redundant steps and reduce the time required for administrative tasks.",
      "Training Foundation: Documented procedures are the foundation for training new employees.",
      "Audit Trail: Procedural adherence creates documented evidence of compliance with policies.",
      "Continuous Improvement: Procedures should be regularly reviewed and updated as better methods are identified."
    ],
    roleplayTips: [
      "\"Office procedures aren't bureaucracy—they're the documented best way to do recurring tasks, which eliminates the time wasted on reinventing the approach every time.\"",
      "\"When we document procedures, we involve the people who do the work—they know the practical requirements better than anyone, and their ownership of the procedure drives compliance.\"",
      "\"Standard operating procedures are essential for business continuity—when key employees are absent, documented procedures ensure operations continue without interruption.\""
    ]
  },

  "OP652": {
    id: "OP652",
    code: "OP:652",
    name: "Explain the nature of environmental sustainability in business",
    definition: "Describe how businesses can create economic value while reducing environmental impact through sustainable practices in operations, product design, and supply chain management.",
    keyPoints: [
      "Triple Bottom Line: People, planet, and profit must all be managed as business performance dimensions.",
      "Circular Economy: Designing products and processes to eliminate waste and keep resources in use.",
      "Carbon Footprint: Measuring and reducing greenhouse gas emissions from operations and value chains.",
      "Regulatory Trend: Environmental regulations are tightening globally—early sustainability investment reduces future compliance risk.",
      "Business Case: Sustainability investments often reduce operational costs through energy efficiency, waste reduction, and material optimization."
    ],
    roleplayTips: [
      "\"Our sustainability program has improved our environmental footprint and reduced energy costs by $2M annually—it's proof that sustainability and profitability are not trade-offs.\"",
      "\"Scope 3 emissions—those in our supply chain and product use—are our largest environmental impact category; we can't achieve our sustainability goals without engaging our suppliers.\"",
      "\"Customers, investors, and regulators are all increasing their scrutiny of environmental performance—companies that wait for regulation to force sustainability action will pay more and compete less effectively than those who act proactively.\""
    ]
  },

  "OP024": {
    id: "OP024",
    code: "OP:024",
    name: "Perform business research",
    definition: "Conduct systematic investigation into business problems and opportunities using appropriate methodologies to gather, analyze, and interpret information that supports informed decisions.",
    keyPoints: [
      "Research Design: Match the methodology to the question—competitive research, market analysis, and operational investigation require different approaches.",
      "Primary and Secondary Sources: Combine original research with existing published information for comprehensive analysis.",
      "Objectivity: Business research must be designed to find the truth, not confirm existing beliefs.",
      "Analysis Rigor: Move beyond data description to analysis that explains causes and implications.",
      "Actionable Recommendations: Translate research findings into specific, justified recommendations."
    ],
    roleplayTips: [
      "\"Before recommending the expansion, I conducted a thorough competitive analysis, customer validation interviews, and financial modeling—the recommendation is built on evidence, not enthusiasm.\"",
      "\"The most valuable business research I do is with customers who left—they tell me the truth about our weaknesses in ways that current customers rarely do.\"",
      "\"Research quality is determined at the design stage—a poorly designed study can't be rescued by good analysis; you only get good answers to questions that were asked correctly.\""
    ]
  },

  "OP025": {
    id: "OP025",
    code: "OP:025",
    name: "Analyze business problems",
    definition: "Apply structured analytical techniques to identify root causes, evaluate potential solutions, and recommend the most effective course of action for complex business challenges.",
    keyPoints: [
      "Problem Framing: A precisely stated problem statement guides effective analysis and prevents solving the wrong problem.",
      "Root Cause Analysis: Use tools like 5-Why, fishbone diagrams, and fault tree analysis to identify underlying causes.",
      "Data Analysis: Support hypothesis testing with quantitative evidence rather than relying on anecdote.",
      "Solution Evaluation: Assess multiple alternatives against defined criteria rather than jumping to the first plausible solution.",
      "Recommendation Structure: Present findings, analysis, alternatives, and recommendations in a logical structure that the decision-maker can follow."
    ],
    roleplayTips: [
      "\"I never accept the first description of a business problem as the real problem—'sales are declining' is a symptom; the problem is whatever is causing the decline.\"",
      "\"The 5-Why technique is my most-used root cause tool—by the time I've asked 'why' five times, I'm typically at the systemic cause rather than the proximate trigger.\"",
      "\"My problem analysis structure always includes the so-what—not just what I found, but what it means and what we should do about it.\""
    ]
  },

  "OP228": {
    id: "OP228",
    code: "OP:228",
    name: "Explain the nature of management information systems",
    definition: "Describe how MIS integrates people, processes, and technology to collect, process, store, and distribute information that supports managerial decision-making across the organization.",
    keyPoints: [
      "MIS Components: Hardware, software, data, procedures, and people working together to provide decision-relevant information.",
      "Functional Integration: MIS connects data from finance, operations, marketing, and HR to enable cross-functional analysis.",
      "Management Levels: MIS serves operational, tactical, and strategic management with appropriate detail and scope for each level.",
      "Decision Support: MIS provides the data foundation for data-driven decision-making processes.",
      "System Evolution: MIS must evolve with business needs, technology capabilities, and data volumes."
    ],
    roleplayTips: [
      "\"Our MIS gives every manager a single source of truth for their key metrics—the elimination of data inconsistency across departments alone was worth the investment.\"",
      "\"An MIS that produces reports no one reads is a cost center, not an asset—we designed ours by asking managers what decisions they need to make and what information would improve those decisions.\"",
      "\"The strategic value of MIS comes from integration—connecting operational data to financial outcomes to customer satisfaction creates the visibility needed to manage the business as a system.\""
    ]
  },

  "OP230": {
    id: "OP230",
    code: "OP:230",
    name: "Implement operating procedures",
    definition: "Put documented standard operating procedures into consistent practice through training, supervision, monitoring, and reinforcement to ensure reliable operational performance.",
    keyPoints: [
      "Training Adequacy: Employees must be trained on procedures before they can be expected to follow them correctly.",
      "Competency Verification: Training completion doesn't guarantee competency—observed practice is required.",
      "Adherence Monitoring: Regular observation of procedure compliance identifies gaps between documented and actual practice.",
      "Deviation Response: When deviations occur, diagnose the cause—inadequate procedure, inadequate training, or deliberate non-compliance—and respond appropriately.",
      "Feedback Integration: Frontline observations about procedure gaps should be captured and used to improve documentation."
    ],
    roleplayTips: [
      "\"Procedure implementation isn't complete at training—I audit compliance regularly because the gap between what people know and what they do in practice is often significant.\"",
      "\"When I find procedure deviations, I investigate before I react—sometimes the deviation is an employee shortcut, and sometimes it's evidence that the procedure is wrong and should be updated.\"",
      "\"Our best procedure improvements come from the people following them—we have a formal mechanism for operators to submit procedure change requests, and we act on the good ones quickly.\""
    ]
  },

  "OP196": {
    id: "OP196",
    code: "OP:196",
    name: "Explain the nature of workforce management",
    definition: "Describe the planning, scheduling, and optimization of human resources to meet operational demands efficiently while maintaining employee engagement and compliance.",
    keyPoints: [
      "Demand Forecasting: Predict labor requirements from volume, productivity, and mix assumptions.",
      "Schedule Development: Create staffing schedules that match forecast demand with available labor efficiently.",
      "Skills Management: Ensure the right skills are available when and where the work requires them.",
      "Labor Cost Management: Optimize labor costs through efficient scheduling, cross-training, and productivity management.",
      "Regulatory Compliance: Workforce management must comply with wage, hour, and labor practice regulations."
    ],
    roleplayTips: [
      "\"Workforce management connects labor planning to operational demand—getting it right is the difference between paying for capacity you don't need and missing service commitments because you're understaffed.\"",
      "\"Our cross-training program gives us scheduling flexibility—employees trained across multiple functions give us the ability to flex the workforce to demand rather than creating fixed crew sizes.\"",
      "\"We use automated scheduling software that optimizes across labor cost, skill requirements, and employee preferences—the software produces better schedules in minutes than our manual process produced in hours.\""
    ]
  },

  "OP354": {
    id: "OP354",
    code: "OP:354",
    name: "Explain the nature of risk management",
    definition: "Describe the systematic process of identifying, assessing, and responding to risks that could prevent the organization from achieving its objectives.",
    keyPoints: [
      "Risk Identification: Comprehensively identify threats and opportunities across strategic, operational, financial, and compliance domains.",
      "Risk Assessment: Evaluate each risk by probability and impact to prioritize management attention.",
      "Risk Response: Choose to accept, avoid, transfer, or mitigate each risk based on cost-benefit analysis.",
      "Risk Monitoring: Track identified risks and watch for emerging ones as the business environment changes.",
      "Enterprise Risk Management: ERM integrates risk management across all organizational levels and functions."
    ],
    roleplayTips: [
      "\"Risk management isn't about eliminating risk—it's about making informed decisions about which risks to take, which to mitigate, and which to transfer, so the organization's risk profile matches its risk appetite.\"",
      "\"Our risk register is a living document reviewed by the board quarterly—risks change, new ones emerge, and the register must reflect current reality to support good decisions.\"",
      "\"The risks that hurt companies most aren't the ones on the risk register—they're the ones nobody thought to put there. Our risk identification process deliberately includes red team thinking to surface blind spots.\""
    ]
  },

  "OP355": {
    id: "OP355",
    code: "OP:355",
    name: "Explain the nature of crisis management",
    definition: "Describe the processes and capabilities that enable organizations to prevent, prepare for, respond to, and recover from sudden, significant disruptions to operations.",
    keyPoints: [
      "Crisis Prevention: Most crises are foreseeable—prevention requires identifying warning signs and addressing root causes proactively.",
      "Preparedness: Crisis response plans, trained teams, and decision authorities established before a crisis reduce chaos when it strikes.",
      "Response Speed: The first hours of a crisis are the most critical—rapid, decisive action limits damage.",
      "Communication: Transparent, timely communication with internal and external stakeholders maintains trust during crises.",
      "Recovery Planning: Post-crisis recovery requires systematic rebuilding of operational capability and stakeholder trust."
    ],
    roleplayTips: [
      "\"When the crisis hit, we activated our pre-planned response team and communication protocol within the first hour—the preparation we'd done made the difference between a managed incident and a chaotic disaster.\"",
      "\"Crisis communication is about transparency and speed—the worst thing you can do is let information vacuums fill with speculation; say what you know, say what you don't know, and say what you're doing about it.\"",
      "\"Post-crisis review is where the organization learns—every crisis contains information about vulnerabilities and response effectiveness that should feed back into prevention and preparedness improvements.\""
    ]
  },

  "OP442": {
    id: "OP442",
    code: "OP:442",
    name: "Explain the nature of change management",
    definition: "Describe the structured approaches used to transition individuals, teams, and organizations from a current state to a desired future state while minimizing disruption and maximizing adoption.",
    keyPoints: [
      "Human Dimension: Change management addresses the human response to change—resistance, anxiety, and adoption behavior.",
      "Change Models: Kotter's 8-Step, ADKAR, and Lewin's model provide structured frameworks for managing transitions.",
      "Urgency and Vision: Successful change requires compelling case for change and a clear picture of the desired future state.",
      "Stakeholder Engagement: Different stakeholders require different change management approaches based on their position and influence.",
      "Sustaining Change: New behaviors must be reinforced through systems, incentives, and culture to become permanent."
    ],
    roleplayTips: [
      "\"Change management investment is not optional on strategic initiatives—a technically perfect solution that no one uses is a failed project.\"",
      "\"I start every major change initiative by identifying the WIFM—'what's in it for me?'—for each key stakeholder group; people support changes that benefit them.\"",
      "\"The change management work starts before the solution is designed—involving the people affected in shaping the change dramatically improves adoption and often improves the solution.\""
    ]
  },

  "OP443": {
    id: "OP443",
    code: "OP:443",
    name: "Explain the nature of conflict management",
    definition: "Describe how managers identify, address, and resolve workplace conflicts constructively to maintain team effectiveness and prevent escalation.",
    keyPoints: [
      "Conflict Types: Task, relationship, and process conflicts have different causes and require different management approaches.",
      "Early Intervention: Addressing conflicts when they emerge prevents escalation that damages relationships and performance.",
      "Root Cause: Effective conflict management addresses the underlying cause, not just its surface manifestation.",
      "Facilitative Approach: Managers facilitate resolution rather than imposing it—sustainable resolution requires parties to reach agreement.",
      "Positive Potential: Well-managed task conflict can improve decision quality; relationship conflict is typically destructive and should be minimized."
    ],
    roleplayTips: [
      "\"I address conflicts when they're small—a conversation about a minor disagreement is far easier than mediating an entrenched dispute.\"",
      "\"Task conflict is healthy—disagreement about the best approach often leads to better decisions than consensus that reflects groupthink.\"",
      "\"When I facilitate a conflict resolution conversation, I start by having both parties state what they each need, not what they want the other to do—focusing on interests rather than positions creates space for resolution.\""
    ]
  },

  "OP444": {
    id: "OP444",
    code: "OP:444",
    name: "Explain the nature of decision making",
    definition: "Describe the cognitive and organizational processes by which decisions are made, the factors that influence decision quality, and the approaches that improve outcomes.",
    keyPoints: [
      "Decision Process: Define the problem, establish criteria, generate alternatives, evaluate, decide, implement, and review.",
      "Cognitive Biases: Anchoring, confirmation bias, availability, and status quo bias systematically distort individual decision-making.",
      "Group Dynamics: Teams can make better decisions than individuals through diverse perspective but are susceptible to groupthink.",
      "Decision Types: Programmatic decisions can be systematized; non-programmatic decisions require judgment and process.",
      "Under Uncertainty: Most important decisions must be made with incomplete information—develop comfort with probability and scenario thinking."
    ],
    roleplayTips: [
      "\"The most important element of good decision-making is problem framing—a decision made about the wrong question is wasted regardless of the process quality.\"",
      "\"I institutionalize a devil's advocate role in major decisions—someone assigned to argue against the emerging consensus improves decision quality even when the consensus turns out to be right.\"",
      "\"Good decisions don't always produce good outcomes, and bad decisions sometimes get lucky—I evaluate decision quality by the process and evidence used, not solely by the outcome.\""
    ]
  },


  // ── PD: Professional Development ──────────────────────────────────────────

  "PD002": {
    id: "PD002",
    code: "PD:002",
    name: "Identify the effects of the economy on personal financial decisions",
    definition: "Describe how macroeconomic conditions—interest rates, inflation, unemployment, and economic cycles—affect individual financial choices about earning, spending, saving, and investing.",
    keyPoints: [
      "Interest Rate Impact: Rising rates increase borrowing costs but improve savings returns—affect mortgage, auto loan, and credit card decisions.",
      "Inflation Effect: Inflation erodes purchasing power and the real value of fixed-income savings.",
      "Employment Risk: Economic downturns increase unemployment risk, making emergency fund adequacy more critical.",
      "Investment Climate: Economic conditions affect equity returns, bond yields, and real estate values.",
      "Counter-Cyclical Strategy: Maintaining liquidity in downturns allows opportunistic investment when asset prices are depressed."
    ],
    roleplayTips: [
      "\"With inflation running at 6%, my savings account earning 1% is losing real value every year—that's a direct financial consequence of macroeconomic conditions that I need to address in my investment strategy.\"",
      "\"I increased my emergency fund to 6 months of expenses when the economic outlook became uncertain—the macro environment directly affected how conservatively I manage my personal liquidity.\"",
      "\"Rising interest rates changed my home-buying decision—the same house now requires 30% more in monthly mortgage payments at today's rate versus two years ago.\""
    ]
  },

  "PD009": {
    id: "PD009",
    code: "PD:009",
    name: "Explain the need for a professional portfolio",
    definition: "Describe how a portfolio of work samples, accomplishments, and credentials provides tangible evidence of professional capabilities that supports career advancement and job searches.",
    keyPoints: [
      "Evidence-Based: Portfolios replace claims with evidence—showing work product is more compelling than describing capabilities.",
      "Differentiator: A strong portfolio distinguishes you from equally credentialed candidates who can only describe their work.",
      "Digital Portfolio: Online portfolios through LinkedIn, personal websites, or platforms like GitHub provide 24/7 accessibility.",
      "Continuous Development: Portfolios should be updated as new accomplishments, projects, and skills develop.",
      "Audience Calibration: Curate portfolio content to the specific role or employer you're pursuing."
    ],
    roleplayTips: [
      "\"My portfolio includes three case studies of projects I led with quantified outcomes—it gives interviewers specific evidence of what I've actually delivered, not just what I say I can do.\"",
      "\"A digital portfolio ensures that my work is accessible to anyone evaluating my candidacy before, during, or after an interview—it's a 24/7 professional showcase.\"",
      "\"I update my portfolio after every significant project while the details are fresh—a portfolio built from memory years later misses the specificity that makes it compelling.\""
    ]
  },

  "PD018": {
    id: "PD018",
    code: "PD:018",
    name: "Develop a personal budget",
    definition: "Create a detailed plan for allocating personal income across spending categories, savings goals, and debt obligations to achieve financial stability and long-term objectives.",
    keyPoints: [
      "Income Tracking: Start with accurate after-tax income, including all regular and variable sources.",
      "Fixed Expenses: List non-negotiable monthly obligations—rent, loan payments, insurance—that define the baseline.",
      "Variable Expenses: Identify discretionary spending categories where choices can be adjusted.",
      "Savings Goals: Include specific savings targets—emergency fund, retirement, specific objectives—as non-negotiable line items.",
      "Review Cycle: Review the budget monthly, adjusting for actual spending and any changes in income or goals."
    ],
    roleplayTips: [
      "\"I built my personal budget the same way I build a business budget: starting with required obligations, then allocating to priority investments like retirement savings, then managing discretionary spending with what remains.\"",
      "\"The most valuable thing my budget does is make trade-offs visible—I can see exactly what I'm giving up in one area to afford something else, which makes my choices more intentional.\"",
      "\"Budgets fail when they're aspirational rather than realistic—I built mine on actual historical spending, not what I hoped I'd spend.\""
    ]
  },

  "PD179": {
    id: "PD179",
    code: "PD:179",
    name: "Explain the importance of career planning",
    definition: "Describe how intentional planning of education, skill development, experience, and networking increases the likelihood of achieving professional fulfillment and advancement.",
    keyPoints: [
      "Direction Setting: Career planning establishes the professional destination that guides individual development decisions.",
      "Skill Gap Analysis: Comparing current capabilities to target role requirements identifies development priorities.",
      "Network Development: Strategic relationship building opens doors to opportunities that skills alone can't create.",
      "Milestone Planning: Breaking the career goal into intermediate milestones creates achievable near-term steps.",
      "Flexibility: Career plans should be directional, not rigid—adjust based on what you learn about yourself and the market."
    ],
    roleplayTips: [
      "\"Career planning means I know why I'm making each development investment—every role I take, every skill I build, and every relationship I develop is serving a defined objective.\"",
      "\"I review my career plan annually and ask: am I on track, has my target evolved, and what are the most important things I should do in the next 12 months to advance toward it?\"",
      "\"Unplanned careers are subject to whatever opportunities happen to present themselves; planned careers create conditions for specific opportunities to materialize.\""
    ]
  },

  "PD250": {
    id: "PD250",
    code: "PD:250",
    name: "Identify desirable entrepreneurial qualities",
    definition: "Describe the personal attributes—including risk tolerance, creativity, persistence, and initiative—that are associated with entrepreneurial success.",
    keyPoints: [
      "Risk Tolerance: Entrepreneurs accept significant financial and personal uncertainty in pursuit of opportunity.",
      "Self-Direction: The ability to work effectively without external structure or direction.",
      "Persistence: Resilience in the face of rejection, setbacks, and failure—success typically requires many attempts.",
      "Opportunity Vision: The ability to see potential where others see only problems or empty space.",
      "Execution Capability: Ideas without execution ability don't create ventures—successful entrepreneurs turn vision into action."
    ],
    roleplayTips: [
      "\"The most essential entrepreneurial quality isn't creativity or risk tolerance—it's the ability to keep moving forward after setbacks, because every meaningful entrepreneurial journey involves significant failure.\"",
      "\"I assess entrepreneurial potential not by whether someone has had a successful venture but by how they've responded to adversity—resilience and learning orientation predict entrepreneurial success better than past outcomes.\"",
      "\"Self-direction is the quality most corporate environments actually suppress—entrepreneurs thrive without structure; the best identify what needs to be done rather than waiting to be told.\""
    ]
  },

  "PD251": {
    id: "PD251",
    code: "PD:251",
    name: "Explain career opportunities in entrepreneurship",
    definition: "Describe the range of entrepreneurial career paths, from founding a new venture to buying an existing business, franchising, or pursuing intrapreneurship within an organization.",
    keyPoints: [
      "New Venture Creation: Starting a business from scratch offers maximum creative control and potential upside.",
      "Business Acquisition: Buying an existing business provides established operations and cash flow but requires capital and integration capability.",
      "Franchising: Operating under a proven brand and system reduces entrepreneurial risk while limiting independent decision-making.",
      "Social Entrepreneurship: Applying entrepreneurial approaches to create social impact alongside or instead of financial returns.",
      "Intrapreneurship: Entrepreneurial behavior within an established organization to develop new products, services, or business models."
    ],
    roleplayTips: [
      "\"Franchising is entrepreneurship with a safety net—you're building your own business but with a proven system, established brand, and ongoing support that significantly reduces the failure rate.\"",
      "\"Intrapreneurship allows people to apply entrepreneurial thinking inside large organizations—many of the most significant innovations in large companies come from intrapreneurs who identified opportunities and championed them internally.\"",
      "\"The entrepreneurial career path isn't linear—most successful entrepreneurs fail multiple times before they find the venture that works; persistence across multiple attempts is the pattern.\""
    ]
  },

  "PD252": {
    id: "PD252",
    code: "PD:252",
    name: "Explain the role of professional development in career advancement",
    definition: "Describe how continuous skill building, knowledge expansion, and credential development maintain professional relevance and create career progression opportunities.",
    keyPoints: [
      "Market Relevance: Skills and knowledge depreciate as industries and technologies evolve—continuous development maintains competitive value.",
      "Promotion Readiness: Developing capabilities for the next role before promotion is offered positions you for advancement.",
      "Credentialing: Professional certifications and degrees signal competence and commitment in ways employers recognize.",
      "Learning Investment: The most successful professionals treat development as a capital investment in their own career.",
      "Development Ownership: Career development is ultimately the individual's responsibility—waiting for the employer to develop you limits advancement."
    ],
    roleplayTips: [
      "\"I invest in development toward the role I want next, not just improvement in the role I have now—the gap between my current capabilities and the next-level requirements tells me exactly where to focus.\"",
      "\"Professional development compounds—skills and knowledge built each year become the foundation for more advanced learning in subsequent years.\"",
      "\"I track my development investments the same way I track financial investments: what did I put in, what did I get out, and is the return justifying the allocation?\""
    ]
  },

  "PD254": {
    id: "PD254",
    code: "PD:254",
    name: "Explain the purpose of professional development activities",
    definition: "Describe how structured learning experiences—training programs, conferences, mentoring, and educational courses—build capabilities that improve current performance and prepare for future roles.",
    keyPoints: [
      "Performance Improvement: Development activities close the gap between current and required performance in the present role.",
      "Career Preparation: Development builds capabilities needed for future roles before the promotion is offered.",
      "Engagement: Professional development investments signal that the organization values the employee, improving engagement and retention.",
      "Knowledge Currency: Conferences, publications, and professional associations keep practitioners current with industry best practices.",
      "Network Building: Development activities create connections with professionals whose knowledge and relationships accelerate careers."
    ],
    roleplayTips: [
      "\"I attend two industry conferences per year not primarily for the sessions but for the relationship development—the conversations in the hallways and over dinner are often more valuable than the formal agenda.\"",
      "\"Every development activity I undertake has a specific application target—I'm not learning for the sake of learning but to apply the capability to a specific performance gap.\"",
      "\"Professional development is a retention strategy as much as a capability strategy—the best professionals expect investment in their growth and leave organizations that don't provide it.\""
    ]
  },

  "PD255": {
    id: "PD255",
    code: "PD:255",
    name: "Develop a professional development plan",
    definition: "Create a structured plan that identifies development goals, learning activities, timelines, and success measures to guide systematic professional growth.",
    keyPoints: [
      "Goal Specification: Development goals should be linked to specific career objectives and role requirements.",
      "Activity Identification: Select development activities—training, projects, coaching, reading—that most efficiently address identified gaps.",
      "Timeline and Milestones: Set specific timelines for development activities and interim checkpoints.",
      "Resource Planning: Identify the time, money, and organizational support needed to execute the plan.",
      "Progress Review: Review the plan quarterly, documenting what was completed and adjusting future priorities based on what was learned."
    ],
    roleplayTips: [
      "\"My professional development plan has three goals for the year: develop financial modeling proficiency, improve executive presentation skills, and build my network in the operations function—each has specific activities and a timeline.\"",
      "\"The development plan only works if I actually protect time for development activities—I block it on my calendar the same way I block client meetings.\"",
      "\"I share my development plan with my manager so they can suggest opportunities and hold me accountable—development is my responsibility but it benefits from organizational support.\""
    ]
  },

  "PD126": {
    id: "PD126",
    code: "PD:126",
    name: "Explain the role of financial institutions in personal financial planning",
    definition: "Describe how banks, credit unions, brokerages, insurance companies, and investment advisors provide services and products that support individual financial goal achievement.",
    keyPoints: [
      "Banking Services: Checking, savings, and lending products support day-to-day financial management and short-term borrowing needs.",
      "Investment Services: Brokerages, mutual funds, and robo-advisors provide access to wealth-building investment vehicles.",
      "Insurance: Life, disability, health, and property insurance protect against catastrophic financial risk.",
      "Retirement Planning: 401(k) plans, IRAs, and pension programs channel tax-advantaged savings toward retirement.",
      "Advisory Services: Financial planners and advisors provide personalized guidance for complex financial decisions."
    ],
    roleplayTips: [
      "\"Understanding the financial products available and how institutions make money on them is essential for making informed decisions—fee structures, interest rates, and conflicts of interest should be fully understood before signing anything.\"",
      "\"I maximize my 401(k) to the employer match limit before any other investment—that match is a 50-100% instant return that no other investment can compete with.\"",
      "\"When I needed a mortgage, I got quotes from three lenders—financial institutions compete for business, and comparing offers produced a rate that saved me $30K over the loan term.\""
    ]
  },

  "PD017": {
    id: "PD017",
    code: "PD:017",
    name: "Set financial goals",
    definition: "Establish specific, prioritized financial targets with defined timelines that guide saving, investing, and spending decisions in pursuit of desired financial outcomes.",
    keyPoints: [
      "Goal Specificity: Vague goals like 'save more' are ineffective—specific targets like '$15,000 emergency fund by December' create accountability.",
      "Goal Hierarchy: Prioritize goals when resources are limited—emergency fund before retirement savings, debt elimination before discretionary investing.",
      "Short/Medium/Long: Organize goals by time horizon to guide appropriate savings vehicles and risk levels.",
      "Quantification: Every financial goal should have a dollar amount and a target date.",
      "Review Cadence: Review goals annually and after major life events to ensure continued relevance and progress tracking."
    ],
    roleplayTips: [
      "\"My financial goals are specific enough that I can calculate exactly how much to save each month to achieve them—that clarity is what converts aspiration into a plan.\"",
      "\"I prioritize goals by impact: emergency fund first because one financial crisis without a buffer can derail everything else; retirement savings second because compounding rewards early start.\"",
      "\"Reviewing financial goals annually ensures they still reflect your current priorities—life changes frequently enough that last year's goals may not be this year's goals.\""
    ]
  },

  "PD077": {
    id: "PD077",
    code: "PD:077",
    name: "Analyze an investment portfolio",
    definition: "Evaluate a collection of investments to assess alignment with financial goals, risk tolerance, diversification, and performance relative to appropriate benchmarks.",
    keyPoints: [
      "Asset Allocation: The distribution of investments across asset classes—stocks, bonds, cash, alternatives—determines most of the portfolio's risk-return profile.",
      "Diversification: Spreading investments across uncorrelated assets reduces risk without necessarily reducing expected return.",
      "Benchmarking: Compare portfolio performance to appropriate indices to assess whether active decisions added or destroyed value.",
      "Cost Assessment: Investment fees compound over time—even small cost differences have large long-term impacts.",
      "Rebalancing: Periodic rebalancing returns the portfolio to target allocations as asset class returns diverge."
    ],
    roleplayTips: [
      "\"My portfolio analysis starts with asset allocation—whether I'm achieving my financial goals depends more on the asset mix than on any individual security selection.\"",
      "\"When comparing my portfolio's return to benchmark, I adjust for risk—a higher return that required significantly more volatility may not represent true outperformance.\"",
      "\"The biggest drag on many portfolios isn't market performance—it's high expense ratios that compound into significant wealth destruction over a 30-year investment horizon.\""
    ]
  },

  "PD012": {
    id: "PD012",
    code: "PD:012",
    name: "Explain the nature of insurance",
    definition: "Describe how insurance pools risk across many individuals or organizations to protect against catastrophic financial losses that individuals could not bear alone.",
    keyPoints: [
      "Risk Pooling: Insurance spreads catastrophic risk across many policyholders—each pays a small amount to protect against a large loss.",
      "Premium Determination: Insurance premiums reflect the probability and magnitude of covered losses.",
      "Coverage Types: Health, life, disability, property, liability, and specialty insurance each address different risk categories.",
      "Deductibles and Limits: Policy terms define the policyholder's retained risk and the insurer's maximum obligation.",
      "Coverage Gaps: Underinsurance is as problematic as over-insurance—gaps in coverage can expose individuals to catastrophic losses."
    ],
    roleplayTips: [
      "\"Insurance is the tool I use to protect against the risks I cannot afford to self-insure—I carry high-limit disability coverage because my income is my most valuable financial asset.\"",
      "\"The purpose of insurance isn't to make money—it's to prevent a single adverse event from destroying financial security built over years; I calibrate coverage to actual risk, not to perceived likelihood.\"",
      "\"When I review my insurance coverage annually, I ask: what's the worst thing that could happen financially, and am I protected against it? That question surfaces coverage gaps.\""
    ]
  },

  "PD019": {
    id: "PD019",
    code: "PD:019",
    name: "Describe types of financial statement analysis",
    definition: "Explain how individuals and businesses use financial statements and related analytical tools to assess financial health, make investment decisions, and track progress toward goals.",
    keyPoints: [
      "Personal Financial Statements: Personal balance sheet (net worth) and income/expense statement mirror business financial statements.",
      "Net Worth Tracking: Monitoring the growth of assets minus liabilities over time measures wealth accumulation progress.",
      "Cash Flow Analysis: Tracking personal income and expenses reveals patterns and opportunities for improved financial management.",
      "Investment Performance: Evaluating investment returns against benchmarks and goals guides portfolio adjustment decisions.",
      "Trend Analysis: Comparing personal financial metrics over multiple periods reveals whether financial health is improving."
    ],
    roleplayTips: [
      "\"I track my personal net worth monthly in a simple spreadsheet—watching the trend line tells me whether my financial plan is working better than any other metric.\"",
      "\"Personal cash flow analysis revealed I was spending 22% of take-home pay on subscriptions and dining—making that visible let me make intentional trade-offs toward my savings goals.\"",
      "\"Applying business financial analysis techniques to personal finances creates the same clarity and accountability—treating yourself as the CFO of your own life produces better decisions.\""
    ]
  },

  "PD013": {
    id: "PD013",
    code: "PD:013",
    name: "Explain the concept of credit",
    definition: "Describe credit as borrowed purchasing power that enables spending beyond current income, and explain the costs, risks, and responsibilities associated with borrowing.",
    keyPoints: [
      "Credit Mechanics: Borrowers receive value now and repay with interest over time, compensating lenders for risk and time value.",
      "Credit Score: A numerical assessment of creditworthiness that affects interest rates and credit availability.",
      "Types of Credit: Revolving credit (credit cards), installment loans, and lines of credit each have different characteristics.",
      "Credit Cost: Interest rates and fees represent the true cost of credit—understanding APR enables comparison.",
      "Credit Management: Responsible credit use builds creditworthiness; missed payments and high utilization damage it."
    ],
    roleplayTips: [
      "\"Credit is a tool—used responsibly for planned purchases at favorable rates, it enables important financial goals; used carelessly for impulse spending at high rates, it destroys wealth.\"",
      "\"Your credit score determines your cost of borrowing—the difference between excellent and poor credit can cost tens of thousands of dollars on a mortgage over the loan's life.\"",
      "\"I treat my credit utilization as a managed variable—keeping it below 30% of available credit maintains the score that unlocks my best borrowing rates.\""
    ]
  },

  "PD020": {
    id: "PD020",
    code: "PD:020",
    name: "Identify the components of a personal career plan",
    definition: "Describe the elements—goals, current state assessment, skill gap analysis, development activities, network targets, and milestones—that constitute a comprehensive personal career plan.",
    keyPoints: [
      "Career Vision: A clear picture of the professional role, industry, and impact you want to achieve in the long term.",
      "Current State: Honest assessment of current skills, experience, credentials, and relationships.",
      "Gap Analysis: The gap between current state and career vision identifies specific development priorities.",
      "Action Steps: Specific activities—roles to seek, skills to develop, relationships to build—that move you toward the vision.",
      "Timeline: Milestones with target dates create accountability and allow progress measurement."
    ],
    roleplayTips: [
      "\"My career plan has a three-year goal, annual milestones, and quarterly development activities—the specificity makes it actionable rather than aspirational.\"",
      "\"The most important component of a career plan is the honest current-state assessment—people who overestimate their starting point build plans with unrealistic timelines.\"",
      "\"I review my career plan with a trusted mentor annually—external perspective reveals blind spots that self-assessment misses.\""
    ]
  },

  "PD021": {
    id: "PD021",
    code: "PD:021",
    name: "Explain the importance of networking",
    definition: "Describe how building and maintaining professional relationships creates career opportunities, access to knowledge, and support systems that accelerate professional success.",
    keyPoints: [
      "Hidden Job Market: Most positions are filled through referrals and personal networks before being advertised publicly.",
      "Knowledge Access: A strong network provides access to industry intelligence, best practices, and expert perspectives.",
      "Referral Power: A personal introduction from a trusted mutual contact is significantly more effective than a cold application.",
      "Give Before Taking: Effective networking is built on providing value to others rather than extracting it.",
      "Long-term Investment: Professional relationships require consistent investment over time—cultivated before they're needed."
    ],
    roleplayTips: [
      "\"My network is the most valuable career asset I have—every significant career opportunity I've had has come through a personal relationship, not a job board.\"",
      "\"Effective networking isn't collecting contacts—it's developing genuine professional relationships where both parties benefit from the connection over time.\"",
      "\"I invest in my network continuously, not just when I need something—the people who reach out only when they need a favor are immediately recognizable and rarely get the help they seek.\""
    ]
  },

  "PD022": {
    id: "PD022",
    code: "PD:022",
    name: "Explain the role of appearance in career success",
    definition: "Describe how professional appearance—grooming, dress, and personal presentation—affects credibility, first impressions, and career advancement opportunities.",
    keyPoints: [
      "First Impression: Appearance is evaluated in seconds and influences how others receive your ideas and capabilities.",
      "Context Calibration: Appropriate professional dress varies by industry, role, and occasion—reading the environment correctly is essential.",
      "Brand Consistency: Personal appearance is part of your professional brand—consistency builds a recognizable identity.",
      "Credibility Signal: Well-maintained professional appearance signals attention to detail and respect for others.",
      "Development Trend: As you advance, expectations for professional presentation generally increase."
    ],
    roleplayTips: [
      "\"Professional appearance is a form of respect—for the people I'm meeting and for the role I'm representing; I invest in looking the part because it affects how I'm received before I speak.\"",
      "\"Appearance doesn't substitute for competence, but it creates the first impression that determines whether your competence gets a fair hearing.\"",
      "\"I dress for the audience I'm meeting, not the minimum required by policy—if the client dresses formally, I dress formally, because appearance signals respect for the relationship.\""
    ]
  },

  "PD023": {
    id: "PD023",
    code: "PD:023",
    name: "Demonstrate effective presentation skills",
    definition: "Deliver organized, engaging, and persuasive presentations that communicate complex information clearly to diverse audiences.",
    keyPoints: [
      "Audience Analysis: Understand what the audience knows, needs, and cares about to calibrate content and style.",
      "Structure: Clear beginning (purpose/agenda), middle (evidence/analysis), and end (conclusion/call to action).",
      "Visual Design: Slides should support, not replace, the presenter—clear visuals that aid comprehension, not data dumps.",
      "Delivery: Eye contact, pace, voice variation, and physical presence contribute as much to impact as content.",
      "Q&A Management: Handle questions confidently—listen fully, acknowledge, answer directly, and know what you don't know."
    ],
    roleplayTips: [
      "\"I open every presentation with the one thing I want the audience to remember—everything else supports that point.\"",
      "\"My slide rule is simple: one clear idea per slide, no bullet points, and the visual should work even if I'm not in the room to explain it.\"",
      "\"When I don't know the answer to a question, I say so directly and commit to following up—attempting to bluff damages credibility far more than admitting a knowledge gap.\""
    ]
  },

  "PD025": {
    id: "PD025",
    code: "PD:025",
    name: "Use proper etiquette in professional settings",
    definition: "Apply the behavioral standards and social conventions appropriate to professional interactions—including meetings, business meals, and correspondence—that build relationships and signal respect.",
    keyPoints: [
      "Punctuality: Arriving on time communicates respect for others' schedules and demonstrates professional reliability.",
      "Meeting Etiquette: Attentive participation, appropriate contribution, and phone management demonstrate professional respect.",
      "Communication Standards: Professional correspondence—email, phone, written—requires specific standards of clarity and courtesy.",
      "Business Meal Protocol: Dining etiquette in professional settings goes beyond table manners to ordering, seating, and conversation.",
      "Introduction Protocol: Proper introductions—who to introduce first, handshake firmness, remembering names—create favorable first impressions."
    ],
    roleplayTips: [
      "\"Professional etiquette isn't about being formal—it's about removing friction from interactions by meeting shared expectations for how business relationships are conducted.\"",
      "\"When I'm in a meeting, my phone is face down or put away—the message I send by checking my phone while someone else is speaking is more damaging than the message I might miss.\"",
      "\"Thank-you notes after significant meetings or interviews are rare enough that they stand out—the five minutes to write one creates a disproportionate positive impression.\""
    ]
  },

  "PD066": {
    id: "PD066",
    code: "PD:066",
    name: "Explain the nature of global trade",
    definition: "Describe how international commerce creates opportunities and challenges for professional development, career advancement, and understanding of diverse business environments.",
    keyPoints: [
      "Global Career Landscape: International business creates career opportunities across national borders and functional disciplines.",
      "Cultural Intelligence: Effectiveness in global environments requires cultural awareness and adaptation skills.",
      "Language Value: Proficiency in additional languages creates significant professional advantage in global business.",
      "International Experience: Assignments abroad accelerate development of cross-cultural leadership capabilities.",
      "Global Network: Building professional relationships across geographies expands career opportunity and perspective."
    ],
    roleplayTips: [
      "\"My international assignment was the most accelerating experience in my career—the complexity of operating in a different cultural, regulatory, and market context developed capabilities faster than any domestic role could.\"",
      "\"Cultural intelligence is increasingly required for any senior role—even purely domestic businesses have global supply chains, international customers, and diverse workforces that require cross-cultural effectiveness.\"",
      "\"Learning Mandarin opened three career opportunities that would not have been available without it—language investment is a high-return career development choice in a global economy.\""
    ]
  },

  "PD026": {
    id: "PD026",
    code: "PD:026",
    name: "Exhibit public-speaking skills",
    definition: "Demonstrate the ability to communicate effectively to groups of varying sizes and compositions with confidence, clarity, and persuasive impact.",
    keyPoints: [
      "Preparation: Thorough preparation is the foundation of confident public speaking—know your material deeply.",
      "Confidence Building: Confidence in public speaking is built through practice—repeated exposure reduces anxiety.",
      "Audience Engagement: Eye contact, questions, and interaction keep audiences engaged and improve message retention.",
      "Voice Control: Volume, pace, pitch variation, and pausing are tools that shape how the audience receives your message.",
      "Storytelling: Stories are more memorable and persuasive than abstract arguments or data alone."
    ],
    roleplayTips: [
      "\"I rehearse out loud at least three times before any significant presentation—silent review doesn't catch the places where the words and transitions don't work.\"",
      "\"Public speaking confidence comes from preparation and repetition—I've volunteered to present in every meeting where it was optional specifically to accumulate the practice that reduces anxiety.\"",
      "\"I open presentations with a story or question that creates immediate engagement—an audience that's hooked in the first 30 seconds stays with you for the whole presentation.\""
    ]
  },

  "PD027": {
    id: "PD027",
    code: "PD:027",
    name: "Develop a career plan",
    definition: "Create a comprehensive, written plan that maps the path from current state to career objectives through specific development activities, experience targets, and relationship-building actions.",
    keyPoints: [
      "Vision Statement: A clear articulation of the career you're working toward.",
      "Current State Assessment: Honest evaluation of current skills, experience, and relationships.",
      "Gap Analysis: The gap between current and desired state identifies specific development needs.",
      "Action Plan: Specific, time-bound activities that close identified gaps.",
      "Review and Revision: Career plans are living documents—revise regularly as you learn and as opportunities emerge."
    ],
    roleplayTips: [
      "\"My career plan is a single page: where I want to be in five years, where I am now, the three biggest gaps, and the specific actions I'm taking to close them.\"",
      "\"Writing the career plan is as valuable as the document—the discipline of thinking through what I actually want and what it will take to get there clarifies decisions I'd otherwise make reactively.\"",
      "\"I treat my career plan as a tool, not a contract—I revise it when I learn something new about myself, the market, or the opportunities available to me.\""
    ]
  },

  "PD028": {
    id: "PD028",
    code: "PD:028",
    name: "Assess personal interests and skills",
    definition: "Evaluate your own strengths, preferences, values, and capabilities to identify career paths and roles where you are most likely to succeed and find professional fulfillment.",
    keyPoints: [
      "Interest Assessment: Identifying activities that naturally engage and energize you reveals sustainable career directions.",
      "Skill Inventory: Documenting what you do well—both technical skills and transferable competencies.",
      "Values Alignment: Careers that align with core personal values produce more sustainable motivation and satisfaction.",
      "Assessment Tools: Holland Code, StrengthsFinder, Myers-Briggs, and related tools provide structured frameworks for self-assessment.",
      "Behavioral Evidence: Past performance and natural inclinations are more reliable indicators than self-perception alone."
    ],
    roleplayTips: [
      "\"The most useful career insight I've had came from noticing which tasks I'm drawn to voluntarily versus which I complete because they're required—that pattern reveals what I'm genuinely good at and interested in.\"",
      "\"I use strengths assessments not as career prescription tools but as conversation starters—the value is in the reflection and discussion they prompt, not the label they produce.\"",
      "\"Values alignment matters as much as skill match in career satisfaction—a role where you're competent but misaligned with the organization's values produces stress that erodes performance over time.\""
    ]
  },

  "PD029": {
    id: "PD029",
    code: "PD:029",
    name: "Explain the nature of job searches",
    definition: "Describe effective strategies for identifying, pursuing, and securing employment opportunities through a combination of networking, direct application, and personal marketing.",
    keyPoints: [
      "Network-Driven Search: Most jobs are filled through personal connections—network activation is the highest-yield search strategy.",
      "Target Company Research: Identifying and researching specific target employers produces more focused, effective outreach.",
      "Online Presence: LinkedIn profile optimization ensures recruiters and hiring managers find you in passive searches.",
      "Application Quality: Tailored applications that specifically address job requirements outperform generic submissions.",
      "Interview Preparation: Rigorous research and practiced responses to common questions distinguish strong candidates."
    ],
    roleplayTips: [
      "\"My job search strategy starts with the 30 companies I want to work for, then activates my network to get introductions—targeted outreach through connections converts at 10x the rate of cold applications.\"",
      "\"I treat job searching as a sales process: identify target accounts, generate leads through network and research, develop and present my value proposition, and convert to an offer.\"",
      "\"Before any interview, I research the company, the role, the interviewer, and the industry—the candidate who knows the business generates higher-quality conversations than the one who relies on general answers.\""
    ]
  },

  "PD030": {
    id: "PD030",
    code: "PD:030",
    name: "Prepare for an interview",
    definition: "Research the employer, practice responses, prepare questions, and organize logistics so you can enter an interview with the confidence and information needed to perform at your best.",
    keyPoints: [
      "Company Research: Understand the company's business, strategy, culture, recent news, and the role's context.",
      "Role Analysis: Match your experience to each requirement in the job description with specific examples.",
      "STAR Method: Structure behavioral responses as Situation, Task, Action, Result for clarity and completeness.",
      "Question Preparation: Thoughtful questions for the interviewer demonstrate preparation and genuine interest.",
      "Logistics Readiness: Confirm location, timing, format, and dress code to eliminate preventable surprises."
    ],
    roleplayTips: [
      "\"I prepare five STAR stories that demonstrate the competencies most important for the role—those stories serve as the evidence base for almost any behavioral question they can ask.\"",
      "\"My company research goes deep enough that I can discuss the company's competitive position and recent strategy—that level of preparation signals genuine interest and analytical capability.\"",
      "\"My questions for the interviewer are designed to show I've thought critically about the role—not 'what's the culture like' but 'how does this team measure success, and what's the biggest obstacle to achieving it?'\""
    ]
  },

  "PD031": {
    id: "PD031",
    code: "PD:031",
    name: "Participate in an interview",
    definition: "Engage effectively in the interview process by demonstrating your qualifications, communicating your value, and building rapport with interviewers.",
    keyPoints: [
      "First Impression: Non-verbal signals in the first seconds—eye contact, handshake, posture—set the tone for the entire interaction.",
      "Active Listening: Fully understanding the question before answering prevents misaligned responses.",
      "Specific Evidence: Concrete examples with quantified outcomes are far more persuasive than general claims.",
      "Authenticity: Genuine engagement and honest responses build rapport; scripted answers feel rehearsed.",
      "Closing: Express enthusiasm for the role and ask about next steps to demonstrate commitment and advance the process."
    ],
    roleplayTips: [
      "\"I listen to the complete question before formulating my answer—the natural impulse to start responding before fully hearing the question produces off-target answers that waste everyone's time.\"",
      "\"When I answer behavioral questions, I always include the result—not just what I did, but what changed as a consequence.\"",
      "\"I close every interview by saying directly that I'm interested in the position and asking what the next steps are—passive candidates who wait to be chased don't get offers as often as engaged ones.\""
    ]
  },

  "PD037": {
    id: "PD037",
    code: "PD:037",
    name: "Prepare a resume",
    definition: "Create a professional document that concisely summarizes qualifications, experience, and accomplishments in a format that effectively communicates your value to prospective employers.",
    keyPoints: [
      "Accomplishment Focus: Effective resumes describe what you accomplished, not just what your responsibilities were.",
      "Quantification: Numbers create immediate credibility—increased revenue by 23%, reduced costs by $140K.",
      "Tailoring: Each resume submission should be customized to the specific role's requirements.",
      "Format: Clean, consistent formatting with appropriate white space enables easy reading.",
      "ATS Optimization: Include keywords from the job description to ensure automated screening systems flag the application."
    ],
    roleplayTips: [
      "\"I changed every job description on my resume from a responsibility list to an accomplishment statement—the difference is 'managed a team' versus 'led a team of eight that delivered 22% revenue growth.'\"",
      "\"A tailored resume isn't about lying—it's about selecting and framing your genuine experience to best match what this specific employer needs.\"",
      "\"Resume length should match career stage—one page for early career, two pages for 10+ years; more than that requires unusually compelling justification.\""
    ]
  },

  "PD032": {
    id: "PD032",
    code: "PD:032",
    name: "Explain the nature of employee benefits",
    definition: "Describe the non-wage compensation components—health insurance, retirement plans, paid time off, and other perquisites—that are part of total compensation and affect employment decisions.",
    keyPoints: [
      "Total Compensation: Benefits represent a significant portion of total compensation value beyond base salary.",
      "Health Benefits: Medical, dental, and vision insurance protect employees from healthcare cost risk.",
      "Retirement Benefits: Employer-sponsored retirement plans—401(k) with match, pension—create long-term financial security.",
      "Paid Leave: Vacation, sick leave, parental leave, and holidays are significant compensation components.",
      "Benefits Comparison: When evaluating job offers, benefits should be monetized and compared alongside salary."
    ],
    roleplayTips: [
      "\"I evaluate job offers on total compensation, not salary alone—a job offering $10K less in salary but with 100% employer-paid health insurance and 6% 401(k) match may be worth more in total.\"",
      "\"The employer 401(k) match is the first investment return I capture—contributing enough to get the full match is the most straightforward financial decision in most benefit packages.\"",
      "\"When negotiating compensation, I negotiate the full package, not just salary—equity vesting, signing bonus, vacation time, and professional development budget are all legitimate negotiation variables.\""
    ]
  },

  "PD033": {
    id: "PD033",
    code: "PD:033",
    name: "Explain the rights of workers",
    definition: "Describe the legal protections and entitlements that employees have in the workplace, including rights related to discrimination, wages, safety, and collective action.",
    keyPoints: [
      "Anti-Discrimination: Title VII, ADA, ADEA, and related laws prohibit employment discrimination based on protected characteristics.",
      "Wage and Hour: FLSA establishes minimum wage, overtime requirements, and child labor protections.",
      "Safety Rights: OSHA guarantees workers the right to a safe workplace and protection from retaliation for safety complaints.",
      "Family and Medical Leave: FMLA provides eligible employees with unpaid leave for qualifying medical and family reasons.",
      "Collective Bargaining: The National Labor Relations Act protects employees' rights to organize and bargain collectively."
    ],
    roleplayTips: [
      "\"Every employee should understand their basic legal rights—knowledge of workplace law isn't just for HR professionals; it protects you and helps you identify when something is wrong.\"",
      "\"Workers have a protected right under OSHA to refuse work that poses imminent danger—that right exists regardless of employer pressure and cannot be waived.\"",
      "\"Understanding FMLA requirements helped me advise a team member on their rights when a family health situation arose—knowing the law enabled a humane response that also protected the company.\""
    ]
  },

  "PD034": {
    id: "PD034",
    code: "PD:034",
    name: "Identify the importance of work experience",
    definition: "Explain how practical experience in professional settings develops skills, builds networks, clarifies career direction, and creates the track record that opens future opportunities.",
    keyPoints: [
      "Applied Learning: Work experience converts theoretical knowledge into practical skills through real-world application.",
      "Portfolio Building: Experience creates the accomplishments and evidence that differentiate candidates in the job market.",
      "Network Development: Every work environment is a network-building opportunity.",
      "Direction Clarification: Actual work experience often reveals career interests that couldn't be predicted from classroom learning.",
      "Credential Complement: For most careers, experience matters as much as or more than formal education credentials."
    ],
    roleplayTips: [
      "\"Internships and part-time work during school aren't just resume lines—they're the laboratories where textbook concepts become applied skills.\"",
      "\"The experience gap between candidates with relevant work experience and those without it is rarely closed by classroom performance alone—experiential learning accelerates career readiness.\"",
      "\"Every job, including entry-level positions, is an opportunity to build relationships, demonstrate capabilities, and learn something that serves the long-term career—there are no throwaway roles.\""
    ]
  },

  "PD035": {
    id: "PD035",
    code: "PD:035",
    name: "Assess personal strengths and weaknesses",
    definition: "Conduct rigorous self-evaluation to build accurate self-knowledge about capabilities and limitations as the foundation for effective career and development planning.",
    keyPoints: [
      "Evidence-Based Assessment: Base self-assessment on behavioral evidence—what you've done—rather than self-perception alone.",
      "Multi-Source Input: Feedback from managers, peers, and customers is more accurate than self-assessment alone.",
      "Strength Leverage: Identify the capabilities where you have a genuine comparative advantage and that have career-relevant applications.",
      "Weakness Management: Determine which weaknesses limit your career advancement and require development versus those that can be compensated by collaboration.",
      "Development Prioritization: Not all weaknesses are equal—focus development on those that most constrain your ability to achieve career objectives."
    ],
    roleplayTips: [
      "\"I asked four people who know my work well to give me unfiltered feedback on my top three strengths and the one thing that most limits my effectiveness—the common themes across their responses were revealing.\"",
      "\"Knowing my strengths isn't vanity—it's strategic; deploying my genuine strengths in my role produces better outcomes than spending equal energy on everything.\"",
      "\"I distinguish between weaknesses that are development priorities and those that are just not my natural territory—I develop the former and partner with people who are strong in the latter.\""
    ]
  },

  "PD036": {
    id: "PD036",
    code: "PD:036",
    name: "Develop work habits that contribute to career advancement",
    definition: "Build the consistent professional behaviors and practices—reliability, continuous learning, relationship maintenance, and quality standards—that create a track record of performance that leads to advancement.",
    keyPoints: [
      "Reliability: Consistent delivery on commitments builds the trust that creates career opportunities.",
      "Continuous Learning: Actively seeking to improve skills and knowledge maintains competitive value over a career.",
      "Relationship Investment: Proactively building and maintaining professional relationships creates the network that opens doors.",
      "Initiative: Identifying and acting on opportunities beyond defined responsibilities signals leadership potential.",
      "Quality Standards: Consistently excellent work creates a professional reputation that generates opportunities and recommendations."
    ],
    roleplayTips: [
      "\"Career advancement is largely determined by habits—the professional who reliably delivers excellent work, invests in relationships, and continuously improves creates an irrefutable case for advancement.\"",
      "\"The single highest-value habit I've developed is proactive communication—keeping stakeholders informed without being asked demonstrates reliability and prevents surprises.\"",
      "\"Habits compound: the professional who reads one industry article daily and has one meaningful network conversation weekly accumulates knowledge and relationships that dwarf their peers over five years.\""
    ]
  },

  // ── SM: Strategic Management ──────────────────────────────────────────────

  "SM001": {
    id: "SM001",
    code: "SM:001",
    name: "Explain the nature of strategic management",
    definition: "Describe the process by which organizations define their mission and vision, assess their competitive environment, set strategic objectives, and make and implement decisions that create sustainable competitive advantage.",
    keyPoints: [
      "Strategy Definition: Strategy is the pattern of decisions that allocate resources to create competitive advantage in pursuit of defined objectives.",
      "Strategic Analysis: SWOT, Porter's Five Forces, and PESTEL analysis provide frameworks for understanding internal capabilities and external environment.",
      "Competitive Advantage: Sustainable competitive advantage derives from capabilities that are valuable, rare, difficult to imitate, and non-substitutable.",
      "Strategy Levels: Corporate, business unit, and functional strategies form a hierarchy that must be aligned.",
      "Execution: A brilliant strategy poorly executed is worth less than a good strategy excellently executed—implementation is the critical differentiator."
    ],
    roleplayTips: [
      "\"Strategic management is the discipline that ensures we're doing the right things, not just doing things right—it connects daily operational decisions to long-term value creation objectives.\"",
      "\"A clear strategy requires making explicit choices about what we won't do as much as what we will—a strategy that tries to be all things to all customers is not a strategy, it's a wish list.\"",
      "\"The most important strategic management discipline is regularly testing whether our strategy is still valid—the environment changes, and a strategy that was right three years ago may need fundamental revision today.\""
    ]
  },

  "SM100": {
    id: "SM100",
    code: "SM:100",
    name: "Describe the nature of the strategic management process",
    definition: "Explain the iterative cycle of environmental scanning, strategy formulation, strategy implementation, and strategic evaluation that guides organizational direction over time.",
    keyPoints: [
      "Environmental Scanning: Continuous monitoring of external trends and internal capabilities for strategic signals.",
      "Strategy Formulation: Developing a coherent plan that leverages strengths to capture opportunities while managing threats.",
      "Strategy Implementation: Translating strategic plans into operational actions through resource allocation, organizational design, and culture.",
      "Strategic Evaluation: Measuring performance against strategic objectives and adjusting strategy as needed.",
      "Iteration: Strategy is a continuous process, not a one-time event—plans must evolve as execution reveals new information."
    ],
    roleplayTips: [
      "\"The strategic management process is a loop, not a line—we formulate, execute, evaluate, and revise in a continuous cycle because the environment never holds still.\"",
      "\"Environmental scanning is our early warning system—we track a defined set of external indicators that tell us when our strategic assumptions are being challenged.\"",
      "\"Strategy without implementation infrastructure is wishful thinking—we spend as much time on organizational design and resource allocation as on strategic analysis because execution is where strategies succeed or fail.\""
    ]
  },

  "SM075": {
    id: "SM075",
    code: "SM:075",
    name: "Formulate strategies for the organization",
    definition: "Develop integrated plans that define how the organization will achieve its objectives by allocating resources, building capabilities, and positioning against competitors.",
    keyPoints: [
      "Strategic Options: Generic strategies of cost leadership, differentiation, and focus offer distinct approaches to competitive advantage.",
      "Resource-Based View: Strategies built around genuinely unique internal capabilities are more sustainable than those based on external positioning.",
      "Growth Strategies: Market penetration, market development, product development, and diversification offer different paths to growth.",
      "Portfolio Strategy: Corporate-level strategy manages a portfolio of businesses to maximize overall value creation.",
      "Blue Ocean: Creating uncontested market space rather than competing in overcrowded existing markets."
    ],
    roleplayTips: [
      "\"Our strategy is differentiation—we've chosen not to compete on price because our target customer segment values features and reliability more than cost, and we've built organizational capabilities to deliver that premium value consistently.\"",
      "\"Strategy formulation starts with an honest assessment of what we're uniquely good at, then asks: where can those capabilities create the most value in the market?\"",
      "\"The best strategies are those your competitors can see but can't quickly imitate—they're built on capabilities that take years to develop, not assets that can be purchased.\""
    ]
  },

  "SM076": {
    id: "SM076",
    code: "SM:076",
    name: "Implement strategies",
    definition: "Translate strategic plans into operational action through leadership, resource allocation, organizational design, culture alignment, and performance management.",
    keyPoints: [
      "Resource Allocation: Implementation requires directing capital, talent, and management attention toward strategic priorities.",
      "Organizational Structure: Structure must enable the strategy—misaligned structures create execution barriers.",
      "Culture Alignment: Culture determines how people behave when not directly observed—it either enables or undermines strategy.",
      "Change Management: Strategy implementation usually requires behavioral change that must be actively managed.",
      "Performance Management: Strategy maps, balanced scorecards, and OKRs provide the measurement infrastructure for strategic accountability."
    ],
    roleplayTips: [
      "\"Strategy implementation is where most strategies die—the plan was brilliant, but the execution fell apart because we didn't address the organizational and behavioral changes required to bring it to life.\"",
      "\"I assess implementation readiness by asking: do we have the capabilities, the resources, the structure, and the culture to execute this strategy? If any of those are missing, they need to be built or the strategy needs to be adjusted.\"",
      "\"The balanced scorecard translates our strategy into operational terms that every manager can understand and act on—without that translation, strategy stays in the boardroom and never reaches the front line.\""
    ]
  },

};

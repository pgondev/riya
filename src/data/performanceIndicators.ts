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
      "Consumer Protection: Laws are designed to safeguard consumers, employees, and businesses from harm and exploitation.",
      "Spirit vs. Letter: Ethical compliance means honoring the intent of a law, not just its technical minimum requirements.",
      "Trust Building: Following the spirit of regulations demonstrates integrity and builds stakeholder confidence.",
      "Legal Risk: Violating the intent of laws—even without a technical breach—can result in fines and lawsuits.",
      "Ethical Culture: Organizations that go beyond the letter of the law foster a culture of shared ethical responsibility."
    ],
    roleplayTips: [
      "\"Our compliance program is built around the intent of the regulation, not just the minimum letter—we believe that's the only approach that truly protects our customers and our business.\"",
      "\"Finding a loophole may be technically legal, but if it violates the spirit of the rule, we're creating reputational and regulatory risk that isn't worth it.\"",
      "\"We train every employee that compliance isn't a checkbox—it's a commitment to the purpose behind the rule.\""
    ]
  },

  "BL067": {
    id: "BL067",
    code: "BL:067",
    name: "Discuss the nature of law and sources of law in the United States",
    definition: "Explain what laws are and where they originate in the U.S. legal system.",
    keyPoints: [
      "Constitutional Law: The U.S. Constitution is the supreme source of law, establishing fundamental rights and government structure.",
      "Statutory Law: Federal and state legislatures pass statutes that govern specific behaviors and industries.",
      "Administrative Law: Government agencies create enforceable regulations within their designated areas of authority.",
      "Case Law: Court decisions establish legal precedents that guide interpretation and application of future cases.",
      "Hierarchy: Constitutional law supersedes statutory law, which supersedes administrative rules when conflicts arise."
    ],
    roleplayTips: [
      "\"The FTC's advertising guidelines are administrative law—they carry the force of statute and our marketing team is trained to comply with every requirement.\"",
      "\"This contract dispute will be governed by case law precedent from our state's appellate courts, not just the written statute.\"",
      "\"Understanding where a law comes from tells you who has authority to change it and what level of enforcement to expect.\""
    ]
  },

  "BL068": {
    id: "BL068",
    code: "BL:068",
    name: "Describe the United States' judicial system",
    definition: "Explain how courts are structured and how legal cases are resolved.",
    keyPoints: [
      "Federal vs. State: The U.S. has parallel federal and state court systems, each with defined jurisdiction over different types of cases.",
      "Court Levels: Trial courts hear cases first; appellate courts review decisions; the Supreme Court has final authority.",
      "Civil Cases: Civil litigation resolves disputes between parties, typically seeking monetary damages or injunctions.",
      "Criminal Cases: Criminal prosecutions involve the government charging individuals or businesses with violations of law.",
      "Due Process: The judicial system guarantees fair procedures before depriving any party of rights or property."
    ],
    roleplayTips: [
      "\"This is a federal matter because it involves interstate commerce—it will be heard in federal district court, not state court.\"",
      "\"If the trial court rules against us, we have the right to appeal to the circuit court of appeals and present our legal arguments to a higher panel.\"",
      "\"Understanding the difference between civil and criminal liability matters here—we may face both a regulatory fine and a private lawsuit from the affected party.\""
    ]
  },

  "BL051": {
    id: "BL051",
    code: "BL:051",
    name: "Describe methods used to protect intellectual property",
    definition: "Explain legal protections for ideas, creations, and inventions.",
    keyPoints: [
      "Trademarks: Protect names, logos, and slogans that identify and distinguish a brand in the marketplace.",
      "Copyrights: Protect original written, artistic, and creative works from unauthorized reproduction or distribution.",
      "Patents: Grant exclusive rights to inventors to make, use, or sell an invention for a defined period.",
      "Trade Secrets: Protect confidential business information—formulas, processes, strategies—that provides competitive advantage.",
      "Enforcement: IP owners must actively monitor and enforce their rights to prevent infringement and maintain protection."
    ],
    roleplayTips: [
      "\"Our brand name and logo are federally registered trademarks—using them without license exposes competitors to infringement liability.\"",
      "\"We filed a patent on the manufacturing process before going to market, which gives us 20 years of exclusive rights to that method.\"",
      "\"Our recipe is protected as a trade secret through NDAs and restricted access—we chose that over a patent because trade secret protection has no expiration date.\""
    ]
  },

  "BL001": {
    id: "BL001",
    code: "BL:001",
    name: "Describe legal issues affecting businesses",
    definition: "Identify common legal challenges businesses face.",
    keyPoints: [
      "Contract Disputes: Disagreements over the terms or performance of agreements are among the most frequent legal issues businesses encounter.",
      "Employment Law: Businesses must comply with laws governing hiring, wages, discrimination, and workplace safety.",
      "Consumer Protection: Laws protect consumers from false advertising, defective products, and unfair business practices.",
      "Liability and Negligence: Businesses can be held responsible for harm caused by their products, services, or operations.",
      "Regulatory Compliance: Failing to comply with industry-specific regulations can result in fines, penalties, or loss of operating licenses."
    ],
    roleplayTips: [
      "\"Before we launch this product, legal needs to review for potential liability exposure—product defect claims are one of the most costly legal issues businesses face.\"",
      "\"Our employment handbook is reviewed by counsel annually to ensure we're compliant with the latest labor law requirements.\"",
      "\"We have a contract dispute with a supplier over delivery terms—I've documented every communication so we have a clear record if this goes to litigation.\""
    ]
  },

  "BL069": {
    id: "BL069",
    code: "BL:069",
    name: "Identify the basic torts relating to business enterprises",
    definition: "Explain civil wrongs that can result in lawsuits against businesses.",
    keyPoints: [
      "Negligence: Failing to exercise reasonable care that results in harm to another party—one of the most common business torts.",
      "Fraud: Intentional deception that causes another party to suffer harm or financial loss.",
      "Defamation: Making false statements that damage the reputation of a person or business.",
      "Product Liability: Legal responsibility for harm caused by defective or dangerous products.",
      "Civil Remedy: Tort victims typically seek compensatory damages—money to make them whole for the harm suffered."
    ],
    roleplayTips: [
      "\"Our product liability insurance protects against claims that our product caused injury—but the best protection is rigorous quality control before anything reaches consumers.\"",
      "\"That marketing claim could expose us to defamation liability if it implies false facts about a competitor's product—we need legal review before publishing it.\"",
      "\"Negligence doesn't require intent—if we knew of a hazard and failed to address it, we could be liable for any resulting harm even without deliberate wrongdoing.\""
    ]
  },

  "BL002": {
    id: "BL002",
    code: "BL:002",
    name: "Describe the nature of legally binding contracts",
    definition: "Explain what makes a contract valid and enforceable.",
    keyPoints: [
      "Offer and Acceptance: A valid contract requires one party to make a clear offer and the other to accept its exact terms.",
      "Consideration: Both parties must exchange something of value—goods, services, or money—for the contract to be binding.",
      "Legal Purpose: A contract cannot be enforceable if it requires either party to perform an illegal act.",
      "Legal Capacity: Parties must have the mental and legal ability to enter contracts—minors and incompetent parties typically cannot.",
      "Mutual Assent: Both parties must genuinely agree to the terms without duress, misrepresentation, or undue influence."
    ],
    roleplayTips: [
      "\"This agreement has all the elements of a binding contract—clear offer, acceptance, and mutual consideration—so both parties are legally obligated to perform.\"",
      "\"If the other party was misled about a material term, there may be grounds to void the contract due to misrepresentation.\"",
      "\"We need to make sure this agreement has a valid consideration clause—a promise to do something you're already legally obligated to do doesn't count as consideration.\""
    ]
  },

  "BL070": {
    id: "BL070",
    code: "BL:070",
    name: "Describe the nature of legal procedure",
    definition: "Explain the steps used to resolve legal disputes.",
    keyPoints: [
      "Filing a Complaint: The plaintiff initiates a lawsuit by filing a formal complaint outlining the claims and relief sought.",
      "Discovery: Both parties exchange relevant evidence and information before trial to avoid surprises in court.",
      "Trial: A judge or jury hears arguments and evidence and renders a verdict based on the applicable law.",
      "Verdict and Judgment: The court issues a final ruling that determines the rights and obligations of each party.",
      "Appeals: A party who believes legal errors occurred can appeal the decision to a higher court for review."
    ],
    roleplayTips: [
      "\"The discovery phase is where most cases are won or lost—thorough documentation of our business practices will be essential if this goes to litigation.\"",
      "\"We should evaluate whether arbitration is a faster and cheaper alternative to trial before we commit to filing a lawsuit.\"",
      "\"Even if we win at trial, the other party has the right to appeal—we should budget for potential appellate costs in our legal risk assessment.\""
    ]
  },

  "BL071": {
    id: "BL071",
    code: "BL:071",
    name: "Discuss the nature of debtor-creditor relationships",
    definition: "Explain the legal relationship between borrowers and lenders.",
    keyPoints: [
      "Loans and Credit: Creditors provide funds or goods now in exchange for the debtor's promise to repay under agreed terms.",
      "Interest and Repayment: Loan agreements specify interest rates, repayment schedules, and any collateral securing the debt.",
      "Default Consequences: Failure to meet repayment obligations can trigger collection actions, damage credit, or result in asset seizure.",
      "Bankruptcy: Federal bankruptcy law provides debtors a legal mechanism to restructure or discharge debts they cannot pay.",
      "Creditor Rights: Secured creditors have priority claims on collateral; unsecured creditors have lower recovery priority."
    ],
    roleplayTips: [
      "\"Our credit agreement includes a default clause—if we miss two consecutive payments, the full balance becomes immediately due.\"",
      "\"Before extending credit to this customer, I want to review their payment history—the debtor-creditor relationship only works when you assess creditworthiness upfront.\"",
      "\"If the supplier files for bankruptcy, our accounts receivable from them will be treated as an unsecured claim—recovery is uncertain and we should provision accordingly.\""
    ]
  },

  "BL072": {
    id: "BL072",
    code: "BL:072",
    name: "Explain the nature of agency relationships",
    definition: "Describe situations where one party acts on behalf of another.",
    keyPoints: [
      "Principal and Agent: The principal authorizes the agent to act on their behalf in dealings with third parties.",
      "Authority: Agents may have actual authority (expressly granted) or apparent authority (reasonably implied by circumstances).",
      "Fiduciary Duty: Agents owe the principal loyalty, honesty, and the obligation to act in their best interest.",
      "Liability: Principals can be held legally responsible for actions their agents take within the scope of their authority.",
      "Termination: Agency relationships can be ended by mutual agreement, completion of the task, or revocation by the principal."
    ],
    roleplayTips: [
      "\"Our sales rep has authority to quote prices within our approved range—anything above that requires my sign-off because her apparent authority doesn't extend that far.\"",
      "\"The vendor signed the agreement believing she was acting as our authorized agent—the company may be bound by that contract even if she exceeded her actual authority.\"",
      "\"As the agent in this transaction, I'm obligated to disclose any conflict of interest to the principal—that fiduciary duty is non-negotiable.\""
    ]
  },

  "BL073": {
    id: "BL073",
    code: "BL:073",
    name: "Discuss the nature of environmental law",
    definition: "Explain laws designed to protect the environment from business harm.",
    keyPoints: [
      "Pollution Control: Environmental laws set limits on emissions, effluents, and other pollutants businesses can release.",
      "Waste Disposal: Regulations govern how businesses must handle, store, transport, and dispose of hazardous materials.",
      "Sustainability Compliance: Environmental laws increasingly require businesses to reduce their ecological footprint.",
      "Enforcement Agencies: The EPA and state environmental agencies monitor compliance and impose penalties for violations.",
      "Business Liability: Companies can face significant fines, cleanup costs, and civil liability for environmental damage."
    ],
    roleplayTips: [
      "\"Our facility audit identified two areas where our discharge levels approach the EPA permit limits—we're investing in filtration upgrades before those limits become violations.\"",
      "\"Environmental liability from improper waste disposal can follow a company for decades—we use licensed disposal contractors and maintain every manifest as legal protection.\"",
      "\"Proactive environmental compliance isn't just about avoiding fines—it reduces operational risk and increasingly matters to investors, customers, and employees.\""
    ]
  },

  "BL074": {
    id: "BL074",
    code: "BL:074",
    name: "Discuss the role of administrative law",
    definition: "Explain laws created and enforced by government agencies.",
    keyPoints: [
      "Agency Regulations: Administrative agencies create specific rules within the authority granted to them by Congress.",
      "Rulemaking Process: Agencies typically publish proposed rules, accept public comment, and then issue final regulations.",
      "Enforcement Powers: Agencies can investigate, issue citations, impose fines, and hold administrative hearings.",
      "Business Compliance: Companies must monitor and comply with the regulations of every agency that has jurisdiction over their operations.",
      "Judicial Review: Courts can overturn agency actions that exceed the agency's legal authority or are arbitrary and capricious."
    ],
    roleplayTips: [
      "\"The FDA's labeling regulations are administrative law—they're just as binding as any statute, and violations carry the same legal consequences.\"",
      "\"When the agency issued the proposed rule, we submitted detailed comments during the public comment period—that's a legitimate way to influence the final regulation.\"",
      "\"Our compliance calendar tracks every agency deadline for reports, permits, and filings—missing an administrative deadline can trigger enforcement action.\""
    ]
  },

  "BL003": {
    id: "BL003",
    code: "BL:003",
    name: "Explain types of business ownership",
    definition: "Describe common legal forms of business ownership.",
    keyPoints: [
      "Sole Proprietorship: A single owner operates the business with full control, unlimited personal liability, and simple tax treatment.",
      "Partnership: Two or more owners share management, profits, losses, and liability under a partnership agreement.",
      "Corporation: A separate legal entity owned by shareholders with limited liability, double taxation, and ability to raise capital through stock.",
      "LLC: A limited liability company combines liability protection for members with pass-through taxation flexibility.",
      "Selection Factors: The best ownership structure depends on liability exposure, capital needs, tax strategy, and long-term goals."
    ],
    roleplayTips: [
      "\"We structured the new venture as an LLC to get liability protection while avoiding the double-taxation that comes with a C-corp at this stage.\"",
      "\"Incorporating signals to investors that we're serious about scaling and separates personal assets from business risk.\"",
      "\"A partnership works well when owners bring complementary skills, but you need a solid partnership agreement covering exit scenarios before you start.\""
    ]
  },

  "BL145": {
    id: "BL145",
    code: "BL:145",
    name: "Explain the nature of import/export law",
    definition: "Explain laws governing international trade.",
    keyPoints: [
      "Trade Agreements: Bilateral and multilateral agreements between countries set the rules and terms for cross-border trade.",
      "Tariffs and Quotas: Governments impose duties on imports and quantity limits to protect domestic industries.",
      "Export Controls: Some goods—particularly technology and defense-related items—require government licenses to export.",
      "Foreign Law Compliance: Exporters must comply not only with U.S. law but with the laws of destination countries.",
      "Sanctions: Trade with certain countries, entities, or individuals may be prohibited or restricted under U.S. sanctions law."
    ],
    roleplayTips: [
      "\"Before shipping this technology overseas, we need to classify it under export control regulations—some components may require an export license.\"",
      "\"The new tariff on our imported components increases our landed cost by 12%—we need to model whether to absorb that, pass it through, or find a domestic alternative.\"",
      "\"Our compliance team screens every international transaction against the OFAC sanctions list—exporting to a prohibited party can result in criminal penalties.\""
    ]
  },

  "BL126": {
    id: "BL126",
    code: "BL:126",
    name: "Describe the nature of customs regulations",
    definition: "Explain rules for moving goods across national borders.",
    keyPoints: [
      "Customs Inspections: Government customs agencies inspect shipments to verify they comply with import laws and don't contain prohibited items.",
      "Duties and Taxes: Importers must pay customs duties based on the classification, value, and country of origin of goods.",
      "Documentation: Accurate shipping documents—commercial invoices, packing lists, and certificates of origin—are legally required for customs clearance.",
      "Harmonized System: Goods are classified under an internationally standardized code that determines applicable duty rates.",
      "Compliance Consequences: Misclassification, undervaluation, or false documentation can result in seizure, fines, or import privileges being revoked."
    ],
    roleplayTips: [
      "\"Our customs broker ensures every shipment has accurate documentation and correct HS classifications—errors cause delays and potential penalties.\"",
      "\"Customs duties on this product category are 6.5%—that's a cost we need to build into our landed cost calculation before setting the domestic price.\"",
      "\"Country of origin rules matter here—if more than 50% of the product's value is added in a third country, it may not qualify for the preferential duty rate under the trade agreement.\""
    ]
  },

  // ── CO: Communication Skills ──────────────────────────────────────────────

  "CO054": {
    id: "CO054",
    code: "CO:054",
    name: "Identify sources that provide relevant, valid written material",
    definition: "Locate credible and accurate written sources that can be used to complete tasks or make informed decisions.",
    keyPoints: [
      "Source Credibility: Credible sources include official publications, peer-reviewed research, industry reports, and reputable news outlets.",
      "Authorship and Date: Always verify who wrote the material and when—outdated or anonymous sources reduce reliability.",
      "Bias Awareness: Evaluate whether a source has a financial, political, or ideological stake that may skew its content.",
      "Primary vs. Secondary: Primary sources offer original data or firsthand accounts; secondary sources interpret or summarize them.",
      "Relevance Check: Confirm the source directly addresses your specific task or question before investing time in it."
    ],
    roleplayTips: [
      "\"Before using this market data in our presentation, I verified it came from a published industry report—we can't cite unverified online statistics to a judge or client.\"",
      "\"I cross-referenced the claim across three credible sources before including it—if only one source supports a fact, it shouldn't be presented as established.\"",
      "\"When evaluating sources, I ask: who funded this research and do they benefit from a particular conclusion? That question catches a lot of bias.\""
    ]
  },

  "CO055": {
    id: "CO055",
    code: "CO:055",
    name: "Extract relevant information from written materials",
    definition: "Identify and select key information from written documents that is directly useful for tasks or decisions.",
    keyPoints: [
      "Key Information Focus: Identify the facts, instructions, and data points that directly support your objective.",
      "Filter Irrelevant Content: Skip repetitive, off-topic, or decorative content that doesn't contribute to the task.",
      "Active Reading: Engage with the text by annotating, highlighting, or summarizing as you read to capture what matters.",
      "Accuracy: Record extracted information precisely—paraphrasing incorrectly can change the meaning of a critical fact.",
      "Organized Summary: Structure extracted information clearly so it's ready to use without re-reading the original."
    ],
    roleplayTips: [
      "\"I pulled the three key figures from the report that directly support our recommendation—the rest of the 40-page document wasn't relevant to this decision.\"",
      "\"When I read a lengthy contract, I flag every clause that creates an obligation for our company—that extraction process ensures nothing critical gets missed.\"",
      "\"Extracting information efficiently means knowing what you're looking for before you start reading—a clear objective prevents getting lost in irrelevant content.\""
    ]
  },

  "CO056": {
    id: "CO056",
    code: "CO:056",
    name: "Apply written directions to achieve tasks",
    definition: "Follow instructions from written documents accurately to complete assignments or processes.",
    keyPoints: [
      "Read Completely First: Read all instructions before starting to understand the full scope and sequence of the task.",
      "Sequential Steps: Follow steps in order—skipping ahead or rearranging steps often produces errors.",
      "Verify Requirements: Confirm you have all necessary materials, tools, or information before beginning.",
      "Check Against Instructions: Compare your work against the directions at each stage to catch deviations early.",
      "Clarify Ambiguities: If instructions are unclear, seek clarification before proceeding rather than guessing."
    ],
    roleplayTips: [
      "\"Before I started the setup process, I read the entire installation guide—I found a critical prerequisite on page three that would have caused errors if I'd skipped ahead.\"",
      "\"I always check my completed work against the original instructions rather than assuming I followed them correctly—that habit catches most errors before submission.\"",
      "\"When the procedure was ambiguous, I contacted the process owner for clarification rather than guessing—applying incorrect directions wastes more time than asking upfront.\""
    ]
  },

  "CO057": {
    id: "CO057",
    code: "CO:057",
    name: "Analyze company resources to ascertain policies and procedures",
    definition: "Review internal documents and materials to understand and apply company rules and procedures.",
    keyPoints: [
      "Document Review: Employee handbooks, policy manuals, and standard operating procedures are primary sources of company rules.",
      "Gap Identification: Compare documented procedures against actual practice to find inconsistencies or missing guidelines.",
      "Policy Application: Understanding the rationale behind a policy helps apply it correctly to situations it doesn't explicitly cover.",
      "Staying Current: Policies are updated periodically—always verify you're working from the most current version.",
      "Escalation: When policies don't address a situation, escalate to management rather than making independent exceptions."
    ],
    roleplayTips: [
      "\"Before I handled the customer exception, I reviewed our returns policy in the company handbook to make sure my response was consistent with our guidelines.\"",
      "\"I found a gap between our documented approval procedure and what the team has been doing in practice—I flagged it to management so the policy can be updated.\"",
      "\"Understanding why a policy exists helps me apply it correctly in edge cases—I always try to learn the reasoning behind the rule, not just the rule itself.\""
    ]
  },

  "CO082": {
    id: "CO082",
    code: "CO:082",
    name: "Explain communication techniques that support and encourage a speaker",
    definition: "Recognize and use strategies that make speakers feel heard and understood.",
    keyPoints: [
      "Verbal Acknowledgments: Phrases like 'I see,' 'go on,' or 'that makes sense' signal active engagement without interrupting.",
      "Eye Contact: Maintaining appropriate eye contact communicates attentiveness and respect for the speaker.",
      "Nonverbal Encouragement: Nodding, open posture, and facial expressions that reflect understanding encourage the speaker to continue.",
      "Clarifying Questions: Asking specific follow-up questions demonstrates genuine engagement and helps deepen understanding.",
      "No Interrupting: Allowing speakers to finish their thoughts without interruption shows respect and ensures complete communication."
    ],
    roleplayTips: [
      "\"I make it a point to maintain eye contact and nod throughout a presentation—even simple nonverbal signals communicate that I'm engaged and the speaker's message is landing.\"",
      "\"After the client finished explaining the concern, I paraphrased back what I heard to confirm understanding before responding—that technique prevented a misunderstanding.\"",
      "\"Asking 'can you tell me more about that?' is one of the most effective encouragement techniques—it invites elaboration without directing where the speaker should go.\""
    ]
  },

  "CO119": {
    id: "CO119",
    code: "CO:119",
    name: "Follow oral directions",
    definition: "Listen carefully and carry out spoken instructions accurately.",
    keyPoints: [
      "Full Attention: Give the speaker undivided attention—distractions cause missed details that lead to errors.",
      "Mental Repetition: Repeat instructions in your head as they're given to reinforce retention.",
      "Note-Taking: Write down multi-step or complex instructions to avoid relying on memory alone.",
      "Clarification: Ask for clarification immediately if any step is unclear rather than guessing.",
      "Verification: After completing the task, check your output against what was requested to confirm accuracy."
    ],
    roleplayTips: [
      "\"When the manager gave me the four-step process verbally, I took quick notes to capture the sequence—multi-step oral instructions are too easy to misremember without a reference.\"",
      "\"I always repeat back key instructions to confirm I understood correctly—that simple habit has prevented several costly misunderstandings.\"",
      "\"If I'm unclear on a direction, I ask immediately rather than starting the task wrong—correcting an error after the fact takes far more time than clarifying upfront.\""
    ]
  },

  "CO017": {
    id: "CO017",
    code: "CO:017",
    name: "Demonstrate active listening skills",
    definition: "Show understanding through verbal and nonverbal feedback.",
    keyPoints: [
      "Paraphrasing: Summarizing what the speaker said in your own words confirms understanding and shows you were listening.",
      "Follow-Up Questions: Relevant questions that build on what was said demonstrate genuine engagement with the content.",
      "Nonverbal Signals: Eye contact, nodding, and open body language communicate attentiveness without words.",
      "No Interrupting: Waiting for the speaker to finish before responding ensures you hear the complete message.",
      "Focused Attention: Eliminating distractions—phone, side conversations—signals that the speaker has your full engagement."
    ],
    roleplayTips: [
      "\"After the customer described the issue, I summarized it back to confirm I understood correctly before proposing a solution—that paraphrase prevented me from solving the wrong problem.\"",
      "\"Active listening means I'm focused on understanding, not on formulating my response—when I catch myself planning what to say next, I refocus on what's being said.\"",
      "\"The follow-up question I asked showed I had processed what was said and wanted to understand it more deeply—that's the difference between hearing and listening.\""
    ]
  },

  "CO147": {
    id: "CO147",
    code: "CO:147",
    name: "Explain the nature of effective verbal communications",
    definition: "Communicate clearly, respectfully, and appropriately for the situation.",
    keyPoints: [
      "Clarity and Conciseness: Effective verbal communication delivers the message directly without unnecessary filler or ambiguity.",
      "Appropriate Tone: Matching tone to the situation—formal in professional settings, conversational in informal ones—improves reception.",
      "Vocabulary Calibration: Use language the audience will understand—avoid unnecessary jargon with non-experts.",
      "Logical Organization: Presenting ideas in a clear sequence makes them easier to follow and remember.",
      "Engagement: Varying pace, volume, and expression keeps the audience attentive and signals genuine investment in the message."
    ],
    roleplayTips: [
      "\"Effective verbal communication starts with knowing your audience—I adjust my vocabulary and level of technical detail based on who I'm speaking to.\"",
      "\"I've learned to pause and organize my thoughts before speaking rather than thinking out loud—clear thinking produces clear verbal communication.\"",
      "\"Tone carries as much meaning as words—I can say the exact same sentence in a way that feels collaborative or combative depending on how I deliver it.\""
    ]
  },

  "CO058": {
    id: "CO058",
    code: "CO:058",
    name: "Ask relevant questions",
    definition: "Seek additional information or clarification to improve understanding.",
    keyPoints: [
      "Purpose-Driven Questions: Ask questions that directly fill gaps in your understanding or gather information needed for a decision.",
      "Open vs. Closed: Open-ended questions invite detailed responses; closed questions confirm specific facts.",
      "Timing: Ask questions at natural pauses rather than interrupting—wait until the speaker has completed their thought.",
      "Avoid Redundancy: Don't ask what has already been answered—it signals inattentiveness.",
      "Professional Relevance: Keep questions focused on what matters for the task or decision at hand."
    ],
    roleplayTips: [
      "\"Before proposing a solution, I asked three clarifying questions to understand the root cause—answering the wrong question confidently doesn't help anyone.\"",
      "\"I asked an open-ended question to understand the client's priorities rather than assuming—'what matters most to you in this decision?' surfaced information I wouldn't have discovered otherwise.\"",
      "\"Relevant questions signal preparation and engagement—a well-timed question often contributes as much to a conversation as a well-prepared answer.\""
    ]
  },

  "CO059": {
    id: "CO059",
    code: "CO:059",
    name: "Interpret others' nonverbal cues",
    definition: "Understand meaning from body language, facial expressions, and tone.",
    keyPoints: [
      "Body Language: Posture, arm position, and physical orientation convey openness, defensiveness, or disengagement.",
      "Facial Expressions: Expressions like furrowed brows or raised eyebrows often reveal confusion, concern, or disagreement.",
      "Tone of Voice: Pitch, pace, and volume communicate emotional state independently of the words spoken.",
      "Inconsistency Signal: When nonverbal cues contradict verbal messages, the nonverbal signals are typically more accurate.",
      "Response Adjustment: Reading nonverbal cues allows you to adjust your approach in real time to improve communication outcomes."
    ],
    roleplayTips: [
      "\"When the client's arms crossed and their expression became flat during my price presentation, I recognized the nonverbal signal and paused to address value before continuing.\"",
      "\"I could tell the team member was uncomfortable even though they said 'I'm fine'—the tension in their posture and their avoidance of eye contact told a different story.\"",
      "\"In a negotiation, watching the other party's nonverbal reactions as I present each option gives me real-time feedback on what's resonating and what's creating resistance.\""
    ]
  },

  "CO060": {
    id: "CO060",
    code: "CO:060",
    name: "Provide legitimate responses to inquiries",
    definition: "Answer questions accurately and professionally.",
    keyPoints: [
      "Accuracy First: Base responses on verified facts, established policies, or direct knowledge—never speculate as though it's fact.",
      "Completeness: Address all parts of the inquiry, not just the easiest portion.",
      "Professional Tone: Maintain a respectful and helpful tone regardless of the nature or difficulty of the question.",
      "Acknowledge Limits: If you don't know the answer, say so and commit to finding out rather than guessing.",
      "Follow-Through: When you commit to finding additional information, do so promptly and completely."
    ],
    roleplayTips: [
      "\"I don't have the exact specification in front of me, but I want to give you accurate information—let me verify that and get back to you within the hour.\"",
      "\"That question is outside my area, but I know exactly who can answer it—let me connect you with the right person rather than giving you an unreliable response.\"",
      "\"A professional response to an inquiry means being accurate even when the accurate answer isn't what the person wants to hear.\""
    ]
  },

  "CO083": {
    id: "CO083",
    code: "CO:083",
    name: "Give verbal directions",
    definition: "Convey instructions clearly to ensure tasks are completed correctly.",
    keyPoints: [
      "Logical Sequence: Present steps in the order they must be performed to avoid confusion and errors.",
      "Clarity: Use precise language—vague directions produce inconsistent results.",
      "Appropriate Pace: Speak at a pace that allows the listener to follow each step before the next is given.",
      "Check for Understanding: Confirm comprehension by asking the listener to summarize the directions back.",
      "Availability for Questions: Signal that questions are welcome so listeners don't proceed with misunderstandings."
    ],
    roleplayTips: [
      "\"Let me walk you through the process step by step—stop me at any point if something isn't clear, because each step builds on the previous one.\"",
      "\"Before I let you start, can you tell me back in your own words what the first three steps are? That helps me confirm we're aligned.\"",
      "\"When I give verbal directions, I always ask 'does that make sense?' at each major checkpoint—it catches confusion before it becomes a mistake.\""
    ]
  },

  "CO084": {
    id: "CO084",
    code: "CO:084",
    name: "Employ communication styles appropriate to target audience",
    definition: "Adjust verbal communication based on the audience's role or knowledge.",
    keyPoints: [
      "Expertise Calibration: Use technical language with expert audiences and plain language with non-specialists.",
      "Role Awareness: Communication with a supervisor differs from communication with a peer or a customer.",
      "Cultural Sensitivity: Be aware that communication norms, directness preferences, and formality vary across cultures.",
      "Age and Experience: Adjust complexity and references to match the audience's likely background and experience level.",
      "Formality Match: Mirror the formality level of the context—executive presentations require different style than team check-ins."
    ],
    roleplayTips: [
      "\"When I present technical findings to the executive team, I lead with business implications and put the technical detail in the appendix—they need the 'so what,' not the methodology.\"",
      "\"I adapt my communication style depending on the audience—the same message sounds very different when delivered to an engineer versus a customer.\"",
      "\"Matching your communication style to the audience isn't dishonesty—it's effective communication; the goal is understanding, not uniformity.\""
    ]
  },

  "CO061": {
    id: "CO061",
    code: "CO:061",
    name: "Defend ideas objectively",
    definition: "Present and support ideas using facts and reasoning rather than emotion.",
    keyPoints: [
      "Evidence-Based Arguments: Support positions with data, examples, and logical reasoning rather than personal conviction alone.",
      "Acknowledge Counterarguments: Demonstrate intellectual honesty by recognizing the strongest objections to your position.",
      "Separate Person from Idea: Disagree with the argument, not the person—keep the discussion on substance.",
      "Professional Composure: Maintain calm and confidence even when challenged—emotional reactions undermine credibility.",
      "Openness to Persuasion: Being willing to update your position when presented with strong evidence strengthens your credibility."
    ],
    roleplayTips: [
      "\"I support this recommendation with three data points from our pilot results—the evidence makes the business case far more effectively than my personal opinion would.\"",
      "\"I understand the concern about timing, and it's a fair point—here's how our plan addresses that risk specifically.\"",
      "\"When my idea is challenged, my first response is to ask for the evidence behind the objection rather than defending my position reflexively.\""
    ]
  },

  "CO114": {
    id: "CO114",
    code: "CO:114",
    name: "Handle telephone calls in a businesslike manner",
    definition: "Communicate effectively and professionally over the phone.",
    keyPoints: [
      "Professional Greeting: Identify yourself and your company clearly at the start of every business call.",
      "Clear and Concise Speech: Speak at a moderate pace with clear articulation—the caller can't rely on visual cues.",
      "Active Listening: Give the caller full attention and confirm understanding before responding.",
      "Accurate Note-Taking: Document key information—caller name, purpose, commitments made—during the call.",
      "Professional Closing: Summarize any next steps or commitments made before ending the call."
    ],
    roleplayTips: [
      "\"Thank you for calling [Company], this is [Name] in customer service—how can I help you today?\"",
      "\"Let me make sure I have that right—you need the delivery changed to Thursday the 15th and you'd like a confirmation email. Is that correct?\"",
      "\"Before we hang up, I want to confirm the three things we agreed on so we're both on the same page going forward.\""
    ]
  },

  "CO053": {
    id: "CO053",
    code: "CO:053",
    name: "Participate in group discussions",
    definition: "Contribute ideas, listen, and collaborate in team settings.",
    keyPoints: [
      "Relevant Contributions: Share insights and information that directly advance the discussion's purpose.",
      "Active Listening: Engage fully with what others say before adding your own perspective.",
      "Respect for All Voices: Allow others to complete their thoughts and acknowledge their contributions before responding.",
      "Group Goal Focus: Keep contributions aligned with the discussion's objective rather than tangential interests.",
      "Constructive Disagreement: When you disagree, do so respectfully and with reasoning rather than dismissal."
    ],
    roleplayTips: [
      "\"Building on what was just said—I think there's a way to apply that approach to the challenge we identified in the eastern region.\"",
      "\"I want to make sure I understood the concern correctly before I respond—are you saying the timeline is the issue, or the resource allocation?\"",
      "\"I see this differently, and I want to explain why with specific data rather than just asserting it.\""
    ]
  },

  "CO201": {
    id: "CO201",
    code: "CO:201",
    name: "Facilitate (lead) group discussions",
    definition: "Guide discussion toward objectives while encouraging participation.",
    keyPoints: [
      "Agenda Adherence: Keep the discussion focused on the defined purpose and redirect tangents professionally.",
      "Inclusive Participation: Actively invite quieter members to contribute rather than letting dominant voices monopolize.",
      "Summarization: Periodically summarize what has been covered to confirm shared understanding and mark progress.",
      "Time Management: Monitor the clock and adjust the pace of discussion to cover all agenda items.",
      "Consensus Building: Identify areas of agreement and disagreement clearly to move toward decisions or action items."
    ],
    roleplayTips: [
      "\"We have three items to cover in the next 45 minutes—let's make sure we allocate time for each and I'll signal when we need to move on.\"",
      "\"I want to make sure we hear from everyone before we close this topic—[Name], you haven't weighed in yet. What's your perspective?\"",
      "\"Let me summarize where we've landed before we move to the next item—the consensus seems to be X, with the outstanding question being Y.\""
    ]
  },

  "CO025": {
    id: "CO025",
    code: "CO:025",
    name: "Make oral presentations",
    definition: "Present information clearly and confidently to an audience.",
    keyPoints: [
      "Logical Structure: Organize content with a clear introduction, body, and conclusion that guide the audience through the message.",
      "Audience Engagement: Maintain eye contact, vary vocal delivery, and use questions or interaction to keep the audience engaged.",
      "Visual Support: Use graphics, slides, or props that reinforce—not replace—your verbal message.",
      "Confident Delivery: Project voice, maintain composure, and speak at a pace that allows the audience to follow.",
      "Strong Close: End with a clear summary or call to action that leaves the audience knowing what to think or do next."
    ],
    roleplayTips: [
      "\"I open every presentation by telling the audience exactly what they'll know or be able to do by the end—that sets expectations and keeps everyone oriented.\"",
      "\"My slides are visual anchors, not scripts—I use them to reinforce the key points, but the story comes from me, not the slides.\"",
      "\"Before I close, I always summarize the three most important points and the one action I'm asking the audience to take—a strong ending is what they'll remember.\""
    ]
  },

  "CO085": {
    id: "CO085",
    code: "CO:085",
    name: "Utilize note-taking strategies",
    definition: "Apply methods to efficiently capture and organize information for later use.",
    keyPoints: [
      "Selective Capture: Record key facts, decisions, and action items—not a verbatim transcript of everything said.",
      "Organizational Structure: Use headings, bullet points, and numbering to organize notes so they're usable without re-reading.",
      "Symbols and Abbreviations: Develop personal shorthand to capture information quickly during fast-paced situations.",
      "Action Item Flagging: Immediately mark tasks, deadlines, and owner assignments to prevent follow-up from being missed.",
      "Post-Meeting Review: Review and clarify notes while the context is fresh—gaps are much harder to fill hours later."
    ],
    roleplayTips: [
      "\"I use a consistent note structure: main points on the left, my questions and reactions on the right—that separation makes review much faster.\"",
      "\"Every action item I record includes who owns it and the deadline—vague notes like 'follow up on pricing' are useless; notes like 'Sarah to confirm pricing by Friday' are actionable.\"",
      "\"I review my notes within an hour of any important meeting while the context is still fresh—gaps that seem minor in the moment become significant gaps in the record later.\""
    ]
  },

  "CO086": {
    id: "CO086",
    code: "CO:086",
    name: "Organize information",
    definition: "Structure information logically to make it easy to understand and use.",
    keyPoints: [
      "Logical Grouping: Cluster related items together so the structure reflects natural relationships in the content.",
      "Clear Hierarchy: Use headings, subheadings, and numbering to communicate relative importance and sequence.",
      "Priority Order: Arrange information so the most critical items are encountered first.",
      "Consistent Format: Apply uniform formatting conventions throughout so readers know what to expect.",
      "Purpose Alignment: The organizational structure should serve the reader's purpose—how they'll need to access and use the information."
    ],
    roleplayTips: [
      "\"I organized the report with the executive summary first, followed by supporting detail—readers who only need the conclusion can stop at page one.\"",
      "\"Before I start organizing any body of information, I ask: how will the reader use this? That question determines the right structure.\"",
      "\"Consistent organization isn't just aesthetic—it reduces the cognitive load on the reader and makes the content far more useful.\""
    ]
  },

  "CO087": {
    id: "CO087",
    code: "CO:087",
    name: "Select and use appropriate graphic aids",
    definition: "Choose visuals that enhance understanding of information.",
    keyPoints: [
      "Match Visual to Data Type: Bar charts compare categories; line charts show trends; pie charts show proportions.",
      "Audience Appropriateness: Match the complexity and style of visuals to the audience's knowledge and context.",
      "Clarity Over Complexity: Effective graphics communicate a single clear idea—overloaded visuals create confusion.",
      "Accuracy: Graphics must accurately represent the underlying data without distorting scale or relationships.",
      "Integration with Text: Reference every graphic in the body of the document and explain what the reader should take from it."
    ],
    roleplayTips: [
      "\"I used a line chart to show the sales trend over 12 months rather than a table—the visual immediately communicates the pattern in a way raw numbers don't.\"",
      "\"This infographic simplifies a complex process into a visual flow that the audience can follow in 30 seconds—that's the value of choosing the right graphic.\"",
      "\"I always ask: what is the one thing I want this visual to communicate? If the answer requires three sentences, the graphic is too complex.\""
    ]
  },

  "CO016": {
    id: "CO016",
    code: "CO:016",
    name: "Explain the nature of effective written communications",
    definition: "Communicate ideas clearly, concisely, and professionally in writing.",
    keyPoints: [
      "Clarity: Each sentence should convey one clear idea without ambiguity or multiple interpretations.",
      "Conciseness: Remove unnecessary words—effective business writing delivers the message in the fewest words needed.",
      "Correctness: Grammar, spelling, and punctuation errors undermine credibility and create misunderstandings.",
      "Tone Appropriateness: Written tone must match the formality of the context and the relationship with the reader.",
      "Purposeful Organization: Lead with the most important information—readers should know the purpose before the details."
    ],
    roleplayTips: [
      "\"I always ask myself before sending any written communication: is this clear, complete, and correct? Those three questions catch most problems.\"",
      "\"Effective business writing leads with the conclusion—the reader should know what you're recommending before they read why.\"",
      "\"Tone in writing is as important as tone in speech—a technically correct email can still damage a relationship if the tone comes across as dismissive.\""
    ]
  },

  "CO088": {
    id: "CO088",
    code: "CO:088",
    name: "Select and utilize appropriate formats for professional writing",
    definition: "Choose the correct structure and style for emails, letters, or reports.",
    keyPoints: [
      "Format Selection: Different purposes require different formats—emails for quick communication, formal letters for official correspondence, reports for detailed analysis.",
      "Structure Adherence: Follow the expected structural conventions for each format—salutations, headings, closings.",
      "Professional Appearance: Consistent fonts, margins, and spacing contribute to readability and professional impression.",
      "Audience Context: Format choices should reflect what the audience expects given the communication's purpose and relationship.",
      "Content-Format Alignment: Choose the format that serves the content—a complex technical analysis needs a report format, not an email."
    ],
    roleplayTips: [
      "\"This needs to be a formal business letter, not an email—the stakes of the communication warrant the more deliberate format.\"",
      "\"I formatted the analysis as a formal report with section headings so leadership can navigate to the sections relevant to their decisions.\"",
      "\"Format signals intent—a memo to all staff has different implicit expectations than a personal email, even if the content is similar.\""
    ]
  },

  "CO089": {
    id: "CO089",
    code: "CO:089",
    name: "Edit and revise written work consistent with professional standards",
    definition: "Review writing for accuracy, clarity, and professionalism.",
    keyPoints: [
      "Grammar and Mechanics: Correct errors in grammar, punctuation, spelling, and sentence structure.",
      "Clarity Review: Ensure each sentence communicates one clear idea without ambiguity.",
      "Conciseness: Eliminate redundant words, unnecessary qualifiers, and repetitive content.",
      "Logical Flow: Verify that ideas progress logically and transitions connect paragraphs smoothly.",
      "Fresh Eyes: Review from the reader's perspective—not as the author who knows what was intended, but as someone encountering the content for the first time."
    ],
    roleplayTips: [
      "\"I read every important document aloud before sending—awkward phrasing and errors that look fine on screen become obvious when spoken.\"",
      "\"My editing process has two passes: first I fix grammar and mechanics, then I step back and evaluate whether the overall message is clear and compelling.\"",
      "\"I always read from the reader's perspective when revising—I ask myself: if I had no background on this topic, would I understand what's being asked of me?\""
    ]
  },

  "CO090": {
    id: "CO090",
    code: "CO:090",
    name: "Write professional emails",
    definition: "Compose clear, polite, and concise email messages.",
    keyPoints: [
      "Descriptive Subject Line: A specific subject line tells the reader exactly what the email is about before they open it.",
      "Professional Greeting: Begin with an appropriate salutation that matches the formality of your relationship with the recipient.",
      "Focused Body: State the purpose immediately and include only the information the recipient needs to act or respond.",
      "Clear Next Steps: End with a specific request, deadline, or call to action so the recipient knows what's expected.",
      "Tone Check: Re-read before sending—email tone is easily misread, especially for sensitive or complex topics."
    ],
    roleplayTips: [
      "\"My subject line for this email is 'Action Required: Approval Needed for Q3 Budget by Friday'—that tells the recipient exactly what I need and when.\"",
      "\"I keep business emails to three paragraphs maximum: what I'm writing about, what I need, and the deadline. Anything longer should be a document with a short cover email.\"",
      "\"Before I send any email with critical information or sensitive content, I reread it from the recipient's perspective to make sure the tone matches the intent.\""
    ]
  },

  "CO133": {
    id: "CO133",
    code: "CO:133",
    name: "Write business letters",
    definition: "Compose formal letters using standard business conventions.",
    keyPoints: [
      "Standard Format: Business letters follow a defined structure: heading, date, inside address, salutation, body, closing, and signature.",
      "Professional Tone: Formal language, complete sentences, and respectful tone throughout distinguish business letters from casual correspondence.",
      "Clear Purpose: State the reason for the letter in the opening paragraph so the reader immediately understands the communication's intent.",
      "Action Orientation: Specify what response or action you are requesting and by when.",
      "Accuracy: Verify all names, titles, addresses, and factual claims before sending—errors undermine credibility."
    ],
    roleplayTips: [
      "\"A formal business letter signals that this communication is official and will be documented—it sets a different expectation than an email.\"",
      "\"I always state the purpose of the letter in the first sentence—the reader should know why they're reading this before they're three sentences in.\"",
      "\"The closing paragraph should always include a specific next step—'I look forward to hearing from you' is vague; 'Please confirm by March 15' is actionable.\""
    ]
  },

  "CO039": {
    id: "CO039",
    code: "CO:039",
    name: "Write informational messages",
    definition: "Convey facts or instructions clearly in written form.",
    keyPoints: [
      "Accuracy: All facts, figures, dates, and instructions must be verified before communicating.",
      "Completeness: Include every piece of information the reader needs—omissions force follow-up and create delays.",
      "Logical Order: Present information in the sequence the reader will need to use it.",
      "Plain Language: Use clear, direct language—the goal is to inform, not to impress.",
      "Relevant Detail: Include deadlines, contact information, and any critical conditions that affect how the information should be applied."
    ],
    roleplayTips: [
      "\"The memo covers the three things every employee needs to know: what is changing, when it takes effect, and who to contact with questions.\"",
      "\"When writing informational messages, I ask: after reading this, does the reader have everything they need to act correctly? If not, I haven't finished.\"",
      "\"Informational writing is not a place for editorializing—I present the facts accurately and let the reader draw appropriate conclusions.\""
    ]
  },

  "CO040": {
    id: "CO040",
    code: "CO:040",
    name: "Write inquiries",
    definition: "Request information or clarification politely and professionally.",
    keyPoints: [
      "Clear Request: State precisely what information you need so the recipient can respond specifically.",
      "Context: Provide enough background that the recipient understands why you need the information and how it will be used.",
      "Professional Courtesy: Use polite, respectful language regardless of whether the recipient is a peer or external contact.",
      "Specific Response Ask: Indicate the preferred format and deadline for the response.",
      "Follow-Up Plan: Signal what you'll do if you don't receive a response within the expected timeframe."
    ],
    roleplayTips: [
      "\"I'm following up on the pricing inquiry I submitted last week—I need the updated figures by Wednesday to include them in the proposal due Friday.\"",
      "\"My email was specific about what I needed and why—vague inquiries get vague responses; specific inquiries get specific answers.\"",
      "\"I always include a deadline in my inquiry—'at your earliest convenience' guarantees the response will come when it's convenient for them, not when I need it.\""
    ]
  },

  "CO031": {
    id: "CO031",
    code: "CO:031",
    name: "Write persuasive messages",
    definition: "Influence the reader to take action using reasoning and evidence.",
    keyPoints: [
      "Audience Motivation: Understand what the reader values and frame your argument around their interests, not yours.",
      "Logical Evidence: Support your position with data, examples, and credible sources rather than assertion alone.",
      "Emotional Appeal: Connect with the reader's values or concerns where appropriate to complement logical arguments.",
      "Anticipate Objections: Address likely counterarguments proactively to remove resistance before it forms.",
      "Clear Call to Action: Every persuasive message must end with a specific, unambiguous request for action."
    ],
    roleplayTips: [
      "\"I framed the proposal around what matters most to this particular audience—their concern is risk reduction, so I led with how our solution addresses that before discussing features or price.\"",
      "\"A persuasive message isn't about pressure—it's about making the strongest possible case that the proposed action serves the reader's own interests.\"",
      "\"I always end a persuasive message with a specific ask: not 'let me know your thoughts' but 'please approve this by Thursday so we can meet the project deadline.'\""
    ]
  },

  "CO091": {
    id: "CO091",
    code: "CO:091",
    name: "Write executive summaries",
    definition: "Summarize key points from longer reports or analyses for management.",
    keyPoints: [
      "Lead with Conclusions: Start with the most important findings and recommendations—executives read for decisions, not context.",
      "Brevity: An executive summary should be one to two pages maximum regardless of the length of the underlying document.",
      "Decision-Relevant Content: Include only what a decision-maker needs to evaluate the situation and choose a course of action.",
      "Structured Format: Use headings to allow readers to navigate directly to the sections most relevant to their priorities.",
      "Self-Contained: The summary should make sense independently—a reader who doesn't read the full document should fully understand the key points."
    ],
    roleplayTips: [
      "\"The executive summary leads with the recommendation, then provides the three key findings that support it—I don't bury the conclusion at the end.\"",
      "\"I write the executive summary last but design it to stand alone—it should give a busy executive everything they need to make a decision without reading the full report.\"",
      "\"An executive summary that requires reading the full report to understand has failed its purpose—it needs to communicate the essential information independently.\""
    ]
  },

  "CO094": {
    id: "CO094",
    code: "CO:094",
    name: "Prepare simple written reports",
    definition: "Present information in structured written form for clarity and understanding.",
    keyPoints: [
      "Standard Structure: Include introduction (purpose), body (findings), and conclusion (recommendations or next steps).",
      "Logical Flow: Each section should build on the previous one to guide the reader to a well-supported conclusion.",
      "Supporting Evidence: Use data, examples, and sourced information to support each major point.",
      "Visual Aids: Include tables, charts, or graphs where they make data clearer than prose.",
      "Professional Presentation: Consistent formatting, accurate citations, and clean layout contribute to credibility."
    ],
    roleplayTips: [
      "\"My report follows a simple structure: what we found, what it means, and what we recommend doing about it—that sequence makes it easy for any reader to follow.\"",
      "\"I include a table summarizing the key data because readers process structured information faster than they process prose.\"",
      "\"Every major claim in my report is supported by evidence—opinions without backing are presented as such, not as findings.\""
    ]
  },

  "CO202": {
    id: "CO202",
    code: "CO:202",
    name: "Explain how digital communications expose business to risk",
    definition: "Identify potential legal, security, and reputational risks of digital communication.",
    keyPoints: [
      "Confidentiality Risk: Digital messages can be forwarded, screenshotted, or breached—sensitive information should never be shared carelessly.",
      "Legal Discovery: Business emails and messages are discoverable in litigation—treat every written communication as a potential legal document.",
      "Misinformation Risk: Inaccurate information shared digitally can spread quickly and damage brand reputation.",
      "Privacy Compliance: Collecting or sharing personal data through digital channels must comply with privacy regulations.",
      "Policy Violations: Sharing confidential company information or using company systems for prohibited purposes creates legal liability."
    ],
    roleplayTips: [
      "\"Everything written in a business email could be subpoenaed—I write every message as if a judge will read it.\"",
      "\"Digital communications create a permanent record—a careless message can become a liability years after it was sent.\"",
      "\"Before I share any customer data digitally, I verify that the recipient is authorized and that the transmission method is secure.\""
    ]
  },

  "CO203": {
    id: "CO203",
    code: "CO:203",
    name: "Adapt written correspondence to targeted audiences",
    definition: "Adjust style, tone, and content to meet the needs of the intended audience.",
    keyPoints: [
      "Audience Knowledge: Tailor vocabulary and detail level to what the audience already knows about the topic.",
      "Purpose Alignment: Different audiences need different information—a technical team needs specifications; executives need implications.",
      "Tone Calibration: Formal tone for external or senior audiences; conversational tone for internal peer communication.",
      "Emphasis Selection: Highlight the points most relevant to the specific audience's concerns or responsibilities.",
      "Cultural Awareness: Adjust communication style for international audiences who may have different expectations of directness or formality."
    ],
    roleplayTips: [
      "\"The same project update sounds very different when written for the technical team versus the board—I adjust the content and language for each audience.\"",
      "\"I don't use jargon in correspondence with clients unless I'm certain they use it too—unclear language creates confusion and erodes trust.\"",
      "\"Adapting to the audience isn't about dumbing things down—it's about communicating in the way that gets the message understood and acted on.\""
    ]
  },

  "CO204": {
    id: "CO204",
    code: "CO:204",
    name: "Use data visualization techniques",
    definition: "Present information visually to enhance understanding and analysis.",
    keyPoints: [
      "Visual Type Selection: Choose the chart type that matches the data relationship—trends, comparisons, proportions, and distributions each have optimal visual forms.",
      "Simplicity: Each visual should communicate one clear idea—complexity reduces clarity.",
      "Accurate Representation: Scales, labels, and proportions must accurately represent the underlying data.",
      "Context and Labels: Include titles, axis labels, units, and data sources so the visual is self-explanatory.",
      "Accessibility: Design visuals to be readable by a diverse audience, including those with color vision differences."
    ],
    roleplayTips: [
      "\"I replaced the data table with a line chart showing the 12-month trend—the visual immediately communicates what the numbers obscure.\"",
      "\"My rule for data visualization: if the visual requires a paragraph of explanation, it's too complex—one clear takeaway per visual.\"",
      "\"I always label my axes and include the data source—a chart without that context can't be evaluated for accuracy.\""
    ]
  },

  "CO205": {
    id: "CO205",
    code: "CO:205",
    name: "Describe the impact of a person's social media brand on the achievement of organizational objectives",
    definition: "Understand how an individual's professional social media presence can affect a company's reputation and goals.",
    keyPoints: [
      "Brand Reflection: Employee social media activity—even on personal accounts—can be associated with the employer and reflect on the organization.",
      "Positive Impact: Professional, thoughtful posts that share industry knowledge or company achievements build brand credibility.",
      "Negative Consequences: Careless, controversial, or confidential posts can damage customer trust and company reputation.",
      "Consistency with Values: Personal social media behavior should align with the organization's stated values and professional standards.",
      "Policy Awareness: Employees must understand company social media policies and the boundaries between personal and professional expression."
    ],
    roleplayTips: [
      "\"My LinkedIn activity represents both me and my employer—I curate what I share to ensure it reflects well on both.\"",
      "\"Before posting anything industry-related, I ask: could this embarrass my company or reveal something confidential? If there's any doubt, I don't post.\"",
      "\"A strong professional social media brand can open doors for the organization—thought leadership content positions our company as an industry expert.\""
    ]
  },

  "CO206": {
    id: "CO206",
    code: "CO:206",
    name: "Distinguish between using social media for business and personal purposes",
    definition: "Recognize the difference between professional and personal social media use to protect company interests.",
    keyPoints: [
      "Account Separation: Maintaining separate accounts for personal and business use reduces the risk of inappropriate content crossing contexts.",
      "Content Standards: Business social media requires professional standards—accuracy, relevance, brand alignment—that personal accounts don't.",
      "Confidentiality Boundary: Confidential business information must never appear on social media, personal or professional.",
      "Company Voice: Business accounts should reflect the company's voice and values, not personal opinions.",
      "Policy Compliance: Employees must follow the company's social media policy regarding what can be posted on behalf of the organization."
    ],
    roleplayTips: [
      "\"I never use the company's official channels to express personal opinions—those accounts represent the organization, not me individually.\"",
      "\"The line between personal and professional social media is clearer when you remember that your employer may be held responsible for what you post from company accounts.\"",
      "\"If I'm unsure whether something belongs on a business channel or personal channel, I default to keeping it off the business channel entirely.\""
    ]
  },

  "CO014": {
    id: "CO014",
    code: "CO:014",
    name: "Explain the nature of staff communication",
    definition: "Share and receive information among staff to ensure clarity, understanding, and teamwork.",
    keyPoints: [
      "Clarity Drives Performance: Clear communication about goals, expectations, and changes reduces errors and improves productivity.",
      "Two-Way Flow: Effective staff communication includes both top-down information sharing and bottom-up feedback and questions.",
      "Open Dialogue: Encouraging staff to ask questions and raise concerns improves information quality and team trust.",
      "Goal Alignment: Regular communication ensures all team members understand the priorities and how their work contributes.",
      "Timeliness: Information shared too late to act on has no value—timing matters as much as content in staff communication."
    ],
    roleplayTips: [
      "\"I communicate changes to the team before they're announced publicly—staff who learn about changes from outside sources feel disrespected and disengaged.\"",
      "\"My weekly team check-in ensures everyone knows the priorities, what's changed, and what they need from each other—that 20 minutes prevents a week of misalignment.\"",
      "\"Good staff communication isn't just broadcasting information—it's creating the conditions where people feel safe asking questions and raising concerns.\""
    ]
  },

  "CO092": {
    id: "CO092",
    code: "CO:092",
    name: "Choose and use appropriate channel for workplace communication",
    definition: "Select the best method to communicate messages effectively in the workplace.",
    keyPoints: [
      "Urgency Matching: Urgent messages warrant phone or in-person communication; routine updates can use email or chat.",
      "Complexity Consideration: Complex topics requiring discussion are better handled in meetings; simple updates are better in writing.",
      "Audience Size: One-to-one communication differs from team-wide or company-wide communication in channel and tone.",
      "Confidentiality: Sensitive topics require private channels—a performance concern should never be raised in a group chat.",
      "Documentation Need: When a record is important, written channels provide the paper trail that verbal communication cannot."
    ],
    roleplayTips: [
      "\"I use email for anything that needs a written record, chat for quick questions, and meetings for anything that requires discussion or decision-making.\"",
      "\"This is a sensitive performance issue—it needs to be a private, in-person conversation, not a message in the team channel.\"",
      "\"Choosing the wrong channel creates as much communication problems as having the wrong message—sending a complex strategic question in a one-line chat often produces a one-line answer that doesn't address the real question.\""
    ]
  },

  "CO063": {
    id: "CO063",
    code: "CO:063",
    name: "Participate in a staff meeting",
    definition: "Engage actively and constructively in team or staff meetings.",
    keyPoints: [
      "Preparation: Review the agenda and any pre-reads in advance so contributions are informed rather than reactive.",
      "Active Contribution: Share relevant ideas, updates, and concerns that help the group accomplish the meeting's purpose.",
      "Respectful Listening: Give full attention to what others say before formulating or voicing your own perspective.",
      "Note-Taking: Document key decisions and action items to ensure accountability after the meeting ends.",
      "Constructive Engagement: Raise concerns and disagreements professionally, focused on issues rather than personalities."
    ],
    roleplayTips: [
      "\"I reviewed the pre-read materials before this meeting so I could contribute to the discussion rather than spending time catching up during it.\"",
      "\"I want to build on what was just proposed—I think there's a way to achieve the same outcome with lower implementation risk worth considering.\"",
      "\"I took notes throughout the meeting and want to confirm: the three action items are these, with these owners and these deadlines—does that match everyone's understanding?\""
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

  "EC001": {
    id: "EC001",
    code: "EC:001",
    name: "Describe the concepts of economics and economic activities",
    definition: "Explain the fundamental study of how individuals, businesses, and governments allocate scarce resources to satisfy unlimited wants and needs.",
    keyPoints: [
      "Scarcity: The core economic problem is that resources are finite while human wants are unlimited, forcing trade-off decisions.",
      "Economic Activities: Production, distribution, and consumption form the three-part cycle of all economic activity.",
      "Microeconomics vs. Macroeconomics: Microeconomics focuses on individual decisions; macroeconomics examines economy-wide forces.",
      "Factors of Production: Land, labor, capital, and entrepreneurship are the inputs used to produce goods and services.",
      "Opportunity Cost: Every economic choice involves a trade-off; the next-best forgone alternative is the opportunity cost."
    ],
    roleplayTips: [
      "\"Economics is fundamentally about making choices under scarcity—every resource allocated to one use is unavailable for another.\"",
      "\"The three core economic activities—production, distribution, and consumption—form an interdependent cycle that drives all business.\"",
      "\"Understanding opportunity cost helps businesses evaluate trade-offs and allocate resources to their highest-value use.\""
    ]
  },
  "EC002": {
    id: "EC002",
    code: "EC:002",
    name: "Distinguish between economic goods and services",
    definition: "Differentiate between tangible products and intangible actions that satisfy wants and needs.",
    keyPoints: [
      "Goods: Economic goods are tangible, physical items that can be touched, stored, and transferred from seller to buyer.",
      "Services: Services are intangible actions or performances delivered by one party to another—they cannot be stored.",
      "Durable vs. Non-Durable: Goods are further classified by whether they last over time (durable) or are quickly consumed (non-durable).",
      "Simultaneous Production and Consumption: Unlike goods, services are typically produced and consumed at the same time.",
      "Economic Value: Both goods and services satisfy human wants and are exchanged in markets at agreed-upon prices."
    ],
    roleplayTips: [
      "\"A car is an economic good—it's tangible and can be stored in inventory; an oil change is a service that's consumed the moment it's performed.\"",
      "\"The distinction matters for business planning because goods can be inventoried while services require matching capacity to demand in real time.\"",
      "\"Service quality is harder to standardize than goods quality, which is why service businesses invest heavily in training and consistency.\""
    ]
  },
  "EC003": {
    id: "EC003",
    code: "EC:003",
    name: "Explain the concept of economic resources",
    definition: "Describe the inputs—land, labor, capital, and entrepreneurship—used in the production of goods and services.",
    keyPoints: [
      "Land: Natural resources including raw materials, water, and physical space used in production.",
      "Labor: Human physical and mental effort applied to produce goods and services.",
      "Capital: Human-made tools, machinery, technology, and infrastructure used in production (not money).",
      "Entrepreneurship: The ability to combine land, labor, and capital creatively to produce goods and services at a profit.",
      "Resource Scarcity: All four factors are limited, making efficient allocation the central challenge of economics."
    ],
    roleplayTips: [
      "\"Capital in economic terms refers to physical tools and machinery—the manufactured inputs that amplify worker productivity.\"",
      "\"Entrepreneurship is often called the fourth factor of production because it's the organizing force that combines land, labor, and capital.\"",
      "\"Efficient use of economic resources is the foundation of a profitable business—waste in any factor erodes margins.\""
    ]
  },
  "EC004": {
    id: "EC004",
    code: "EC:004",
    name: "Determine economic utilities created by business activities",
    definition: "Identify how businesses add value through form, place, time, possession, and information utilities.",
    keyPoints: [
      "Form Utility: Value added by transforming raw inputs into a finished product consumers want.",
      "Place Utility: Value created by making products available where customers want them.",
      "Time Utility: Value created by making products available when customers want them.",
      "Possession Utility: Value created by facilitating the transfer of ownership through financing, payment options, or title transfer.",
      "Information Utility: Value created by communicating product features and availability to potential buyers."
    ],
    roleplayTips: [
      "\"When we manufacture lumber into furniture, we're creating form utility—the transformed product has more value than the raw materials.\"",
      "\"Our distribution network creates place and time utility by ensuring product is at the right store at the right moment.\"",
      "\"Offering financing creates possession utility—customers who can't pay cash upfront can still acquire the product.\""
    ]
  },
  "EC005": {
    id: "EC005",
    code: "EC:005",
    name: "Explain the principles of supply and demand",
    definition: "Describe how the quantities buyers wish to purchase and sellers wish to sell interact to determine market price and output.",
    keyPoints: [
      "Law of Demand: As price rises, quantity demanded falls; as price falls, quantity demanded rises, all else equal.",
      "Law of Supply: As price rises, producers are willing to supply more; as price falls, they supply less.",
      "Market Equilibrium: The price at which quantity supplied equals quantity demanded—no surplus or shortage exists.",
      "Demand Shifters: Changes in income, preferences, prices of related goods, or buyer expectations shift the demand curve.",
      "Supply Shifters: Changes in input costs, technology, regulations, or number of sellers shift the supply curve."
    ],
    roleplayTips: [
      "\"Equilibrium price is where the market clears—supply equals demand—and that's the price that maximizes total market efficiency.\"",
      "\"If we lower price below equilibrium, we create a shortage; raise it above equilibrium, we create a surplus—both signal adjustment is needed.\"",
      "\"Supply and demand analysis lets us predict how price changes, input cost changes, or competitor entry will affect our market position.\""
    ]
  },
  "EC006": {
    id: "EC006",
    code: "EC:006",
    name: "Describe the functions of prices in markets",
    definition: "Explain how prices signal information, allocate resources, and incentivize production and consumption decisions.",
    keyPoints: [
      "Signaling: Rising prices signal that a good is scarce and valuable; falling prices signal surplus or declining value.",
      "Resource Allocation: Prices direct resources toward their highest-valued uses in a market economy.",
      "Incentive Function: Higher prices incentivize more production; lower prices incentivize more consumption.",
      "Rationing: Prices ration scarce goods among competing buyers by allocating to those willing to pay.",
      "Information Efficiency: The price system aggregates dispersed knowledge from millions of buyers and sellers."
    ],
    roleplayTips: [
      "\"Prices are the economy's communication system—a rising price broadcasts a shortage signal to producers worldwide without any central coordination.\"",
      "\"When we price a product, we're effectively rationing it—only buyers who value it at or above our price will purchase it.\"",
      "\"Price controls disrupt the signaling function; an artificially low price creates shortages because it removes the incentive to produce more.\""
    ]
  },
  "EC070": {
    id: "EC070",
    code: "EC:070",
    name: "Explain the role of business in society",
    definition: "Describe how businesses contribute to society by producing goods and services, creating jobs, generating wealth, and driving innovation.",
    keyPoints: [
      "Value Creation: Businesses transform inputs into products and services that improve quality of life.",
      "Employment: Private businesses are the primary source of jobs and income for most households.",
      "Tax Revenue: Business profits and employee wages generate tax revenue governments use to fund public services.",
      "Innovation Driver: Competitive pressure motivates businesses to innovate, improving products and efficiency.",
      "Corporate Responsibility: Businesses also bear social obligations—ethical conduct, environmental stewardship, and community investment."
    ],
    roleplayTips: [
      "\"Business creates value by solving problems—every product or service in the market exists because someone found a customer need worth satisfying.\"",
      "\"Beyond profits, businesses contribute to society through job creation, tax revenue, and the innovation that raises living standards.\"",
      "\"Corporate social responsibility isn't just altruism—it's also smart strategy, because businesses that ignore social impact face reputational and regulatory risk.\""
    ]
  },
  "EC071": {
    id: "EC071",
    code: "EC:071",
    name: "Describe types of business activities",
    definition: "Identify and explain the major categories of activities businesses perform: production, marketing, management, and finance.",
    keyPoints: [
      "Production: Creating goods or delivering services—includes manufacturing, quality control, and operations.",
      "Marketing: Identifying customer needs and promoting, pricing, and distributing products to satisfy them.",
      "Management: Planning, organizing, directing, and controlling resources to achieve organizational goals.",
      "Finance: Acquiring, allocating, and managing money and other financial resources.",
      "Interdependence: All four functional areas are interdependent; a weakness in any one area affects overall business performance."
    ],
    roleplayTips: [
      "\"Every business—regardless of industry—performs the same four core functions: production, marketing, management, and finance.\"",
      "\"Marketing isn't just advertising; it encompasses every activity from identifying customer needs to delivering post-sale service.\"",
      "\"Finance and operations must be aligned—even a great product fails if the business runs out of cash before reaching profitability.\""
    ]
  },
  "EC138": {
    id: "EC138",
    code: "EC:138",
    name: "Describe types of business models",
    definition: "Explain different frameworks businesses use to create, deliver, and capture value, including B2B, B2C, subscription, franchise, and platform models.",
    keyPoints: [
      "B2B vs. B2C: Business-to-business models sell to other companies; business-to-consumer models sell directly to end users.",
      "Subscription Model: Customers pay recurring fees for continued access to a product or service, creating predictable revenue.",
      "Franchise Model: A franchisor licenses its brand and system to franchisees who operate independently-owned units.",
      "Platform Model: A business facilitates transactions between two or more user groups (e.g., marketplace, app store).",
      "Revenue Streams: Business models differ in how value is monetized—product sales, licensing, advertising, or commissions."
    ],
    roleplayTips: [
      "\"A subscription model converts one-time purchasers into recurring revenue, which improves forecasting and reduces customer acquisition cost over time.\"",
      "\"Platform businesses don't own inventory—they capture value by connecting buyers and sellers and taking a transaction fee.\"",
      "\"Choosing the right business model is as strategic as choosing the product—the model determines how value is created and who captures it.\""
    ]
  },
  "EC103": {
    id: "EC103",
    code: "EC:103",
    name: "Explain the organizational design of businesses",
    definition: "Describe how businesses structure their people, processes, and authority relationships to achieve strategic objectives.",
    keyPoints: [
      "Organizational Chart: A visual representation of reporting relationships, departments, and authority hierarchy.",
      "Functional Structure: Grouping employees by specialized function (marketing, finance, operations) for efficiency.",
      "Divisional Structure: Organizing by product line, geography, or customer segment for market responsiveness.",
      "Span of Control: The number of direct reports a manager supervises—affects organizational height and communication speed.",
      "Centralized vs. Decentralized: Centralized authority concentrates decisions at the top; decentralization pushes them to frontline managers."
    ],
    roleplayTips: [
      "\"A flat organizational structure reduces bureaucracy and speeds decision-making, but it requires managers with broad span of control.\"",
      "\"Divisional structures work well for large companies with diverse product lines because each division can focus on its specific market.\"",
      "\"Organizational design directly impacts culture and agility—structure should support strategy, not constrain it.\""
    ]
  },
  "EC104": {
    id: "EC104",
    code: "EC:104",
    name: "Discuss the global environment in which businesses operate",
    definition: "Describe the international economic, political, cultural, and technological forces that shape business decisions and opportunities worldwide.",
    keyPoints: [
      "Global Interdependence: National economies are linked through trade, investment, and financial flows.",
      "Multinational Operations: Large companies operate in multiple countries, navigating different laws, currencies, and cultures.",
      "Global Competition: Firms compete not just locally but against foreign producers who may have cost or innovation advantages.",
      "International Institutions: Bodies like the WTO, IMF, and World Bank shape rules and stability of global commerce.",
      "Risk Landscape: Political instability, currency fluctuation, and regulatory differences create unique risks in global markets."
    ],
    roleplayTips: [
      "\"Operating globally requires managing not just currency risk but also political, regulatory, and cultural risk simultaneously.\"",
      "\"The WTO's trade rules create a more predictable environment for international business by reducing arbitrary trade barriers.\"",
      "\"Even domestic businesses are affected by the global environment—imported inputs, foreign competitors, and exchange rate shifts all touch local operations.\""
    ]
  },
  "EC105": {
    id: "EC105",
    code: "EC:105",
    name: "Describe factors that affect the business environment",
    definition: "Identify and explain the external and internal forces—economic, legal, social, technological, and competitive—that shape business conditions.",
    keyPoints: [
      "PEST Framework: Political, economic, social, and technological forces form the macro-environment for all businesses.",
      "Competitive Environment: The number, strength, and strategies of rivals directly affect market opportunities and margins.",
      "Legal and Regulatory: Laws governing labor, environment, taxes, and commerce define what businesses can and cannot do.",
      "Social and Demographic: Changes in population size, age distribution, values, and lifestyles shift consumer demand.",
      "Technological Change: New technologies create opportunities for innovation while making existing products or processes obsolete."
    ],
    roleplayTips: [
      "\"We conduct a PEST analysis before entering any new market to map the macro-environmental forces that will affect our strategy.\"",
      "\"Regulatory change is a major business environment factor—new compliance requirements can reshape industry cost structures overnight.\"",
      "\"Social trends like sustainability consciousness are reshaping consumer expectations, which is why we're investing in eco-friendly packaging.\""
    ]
  },
  "EC106": {
    id: "EC106",
    code: "EC:106",
    name: "Explain the nature of business ethics",
    definition: "Describe the principles, standards, and values that guide business decision-making toward honest, fair, and responsible conduct.",
    keyPoints: [
      "Ethical Standards: Business ethics applies moral principles—honesty, fairness, and respect—to commercial decisions.",
      "Stakeholder Obligations: Ethical businesses consider impacts on customers, employees, suppliers, communities, and shareholders.",
      "Code of Ethics: Formal written guidelines that establish expected behaviors and provide a decision-making framework.",
      "Ethical Dilemmas: Situations where competing obligations or interests make the right course of action unclear.",
      "Ethics and Profitability: Ethical behavior builds trust and long-term reputation, which translates to sustainable competitive advantage."
    ],
    roleplayTips: [
      "\"Business ethics isn't just about avoiding scandals—it's about building the trust that makes customers choose you and employees stay.\"",
      "\"When facing an ethical dilemma, I apply the stakeholder test: how does this decision affect each group we're responsible to?\"",
      "\"A strong code of ethics gives every employee a decision-making framework so they don't have to guess what's acceptable in ambiguous situations.\""
    ]
  },
  "EC107": {
    id: "EC107",
    code: "EC:107",
    name: "Explain how organizations adapt to today's markets",
    definition: "Describe strategies businesses use to remain competitive in rapidly changing market conditions, including innovation, agility, and customer focus.",
    keyPoints: [
      "Market Orientation: Successful organizations continuously gather and respond to customer feedback and market signals.",
      "Innovation Culture: Firms that encourage experimentation adapt faster than those that protect the status quo.",
      "Digital Transformation: Adopting digital tools and data analytics enables faster decision-making and new business models.",
      "Agile Structure: Flat hierarchies and cross-functional teams increase organizational speed and adaptability.",
      "Continuous Improvement: Ongoing incremental refinement of processes and products keeps organizations competitive over time."
    ],
    roleplayTips: [
      "\"Digital transformation isn't about technology for its own sake—it's about using data and digital tools to serve customers better and faster.\"",
      "\"Organizations that stay close to their customers adapt faster because they receive real-time feedback on what's working and what isn't.\"",
      "\"Agile organizations create small, empowered teams that can pivot quickly rather than waiting for top-down direction.\""
    ]
  },
  "EC007": {
    id: "EC007",
    code: "EC:007",
    name: "Explain the types of economic systems",
    definition: "Describe the primary ways societies organize production and distribution: traditional, command, market, and mixed economies.",
    keyPoints: [
      "Traditional Economy: Decisions are based on customs, habits, and traditions passed down through generations.",
      "Command Economy: A central authority (typically the government) makes all major production and distribution decisions.",
      "Market Economy: Decentralized decisions by buyers and sellers, guided by prices, drive production and consumption.",
      "Mixed Economy: Combines market mechanisms with government intervention to address market failures and social goals.",
      "Trade-offs: Each system makes different trade-offs between efficiency, equity, freedom, and economic security."
    ],
    roleplayTips: [
      "\"Pure command and pure market economies are theoretical extremes—virtually every real-world economy is a mixed system on the spectrum between them.\"",
      "\"Market economies are efficient at allocating resources but can produce inequality, which is why most mixed economies use government programs to redistribute.\"",
      "\"Understanding economic systems helps businesses anticipate the regulatory and competitive environment in different countries.\""
    ]
  },
  "EC065": {
    id: "EC065",
    code: "EC:065",
    name: "Identify the impact of small business/entrepreneurship on market economies",
    definition: "Explain the contributions of small businesses and entrepreneurs to economic growth, innovation, employment, and competition.",
    keyPoints: [
      "Job Creation: Small businesses are among the largest sources of net new jobs in market economies.",
      "Innovation: Entrepreneurs frequently introduce disruptive products and processes that incumbents miss.",
      "Competition: Many small businesses increase competitive pressure, driving down prices and improving quality.",
      "Local Economic Activity: Small businesses recirculate money locally, strengthening regional economies.",
      "Entrepreneurial Risk: Small business owners accept personal financial risk in exchange for independence and potential profit."
    ],
    roleplayTips: [
      "\"Small businesses account for a disproportionate share of net new job creation—they are the backbone of employment in most market economies.\"",
      "\"Entrepreneurs create value not just for themselves but for the economy by introducing new products, services, and efficiencies that didn't exist before.\"",
      "\"The willingness of entrepreneurs to take risks is what drives economic dynamism—without risk-takers, market economies stagnate.\""
    ]
  },
  "EC009": {
    id: "EC009",
    code: "EC:009",
    name: "Explain the concept of private enterprise",
    definition: "Describe an economic system in which individuals and businesses own resources and make production and distribution decisions with limited government interference.",
    keyPoints: [
      "Private Ownership: Individuals and firms own productive resources and decide how to use them.",
      "Profit Motive: The desire to earn profit drives entrepreneurs to produce goods and services consumers value.",
      "Freedom of Choice: Consumers choose what to buy; producers choose what to make; workers choose where to work.",
      "Competition: Multiple private producers competing for consumers promotes efficiency and innovation.",
      "Limited Government Role: Government sets rules and enforces contracts but does not direct production decisions."
    ],
    roleplayTips: [
      "\"Private enterprise works because profit motive aligns business incentives with consumer needs—profitable businesses are ones that serve customers well.\"",
      "\"The freedom of choice embedded in private enterprise empowers consumers, workers, and entrepreneurs to pursue their own best interests.\"",
      "\"Competition is the disciplining force in private enterprise—it punishes inefficiency and rewards innovation without central planning.\""
    ]
  },
  "EC010": {
    id: "EC010",
    code: "EC:010",
    name: "Identify factors affecting a business's profit",
    definition: "Describe internal and external factors—including revenue, costs, competition, demand, and regulation—that determine a firm's profitability.",
    keyPoints: [
      "Revenue Drivers: Profit begins with revenue—price times quantity sold—which depends on demand and marketing effectiveness.",
      "Cost Control: Profitability requires keeping production, operating, and overhead costs below revenue.",
      "Market Competition: More competitors typically reduce pricing power and margins.",
      "Economic Conditions: Consumer spending rises in expansion and falls in recession, affecting top-line revenue.",
      "Operational Efficiency: Productivity improvements reduce unit costs, expanding margin without raising prices."
    ],
    roleplayTips: [
      "\"Profit is the residual after all costs—to improve it we can either grow revenue, reduce costs, or both simultaneously.\"",
      "\"Competitive intensity is one of the biggest external pressures on profit—new entrants or price-cutting rivals can compress margins quickly.\"",
      "\"We track contribution margin by product line so we know exactly which offerings are most profitable and deserve investment.\""
    ]
  },
  "EC011": {
    id: "EC011",
    code: "EC:011",
    name: "Determine factors affecting business risk",
    definition: "Identify the internal and external uncertainties—market, financial, operational, legal, and strategic—that could harm business performance.",
    keyPoints: [
      "Market Risk: Demand may shift due to changing consumer preferences, economic downturns, or new competitors.",
      "Financial Risk: Cash flow shortfalls, credit risk, or interest rate changes can threaten solvency.",
      "Operational Risk: Equipment failures, supply chain disruptions, or workforce issues interrupt production.",
      "Legal and Regulatory Risk: Changes in law, lawsuits, or compliance failures create financial and reputational exposure.",
      "Strategic Risk: Poor decisions about markets, products, or acquisitions can permanently damage competitive position."
    ],
    roleplayTips: [
      "\"Risk identification is the first step in management—we can't mitigate risks we haven't named and measured.\"",
      "\"We classify risks by likelihood and impact, then focus mitigation resources on high-probability, high-consequence scenarios.\"",
      "\"Insurance, diversification, and contingency planning are the primary tools for managing business risk across its various categories.\""
    ]
  },
  "EC012": {
    id: "EC012",
    code: "EC:012",
    name: "Explain the concept of competition",
    definition: "Describe the rivalry among businesses to attract customers, generate sales, and achieve market success.",
    keyPoints: [
      "Types of Competition: Perfect competition, monopolistic competition, oligopoly, and monopoly describe different market structures.",
      "Price Competition: Firms compete on price, driving costs down and benefiting consumers through lower prices.",
      "Non-Price Competition: Differentiation through quality, service, branding, or features attracts customers without lowering price.",
      "Consumer Benefit: Competition improves products, reduces prices, and increases variety—it is the engine of market improvement.",
      "Competitive Strategy: Firms must identify their competitive advantage—cost leadership, differentiation, or focus—to sustain market position."
    ],
    roleplayTips: [
      "\"Competition forces us to keep improving—if we don't get better, a competitor will take our customers.\"",
      "\"Price competition squeezes margins, which is why differentiation strategy is preferable—we want customers choosing us for value, not just price.\"",
      "\"Understanding the competitive structure of our market—oligopoly, fragmented, or monopolistic—shapes how we set prices and allocate marketing investment.\""
    ]
  },
  "EC008": {
    id: "EC008",
    code: "EC:008",
    name: "Determine the relationship between government and business",
    definition: "Explain how government actions—through regulation, taxation, spending, and monetary policy—affect business operations and decisions.",
    keyPoints: [
      "Regulation: Government rules set minimum standards for safety, environment, labor, and commerce.",
      "Taxation: Corporate and employment taxes affect business costs, investment decisions, and location choices.",
      "Fiscal Policy: Government spending and taxation choices affect overall demand levels in the economy.",
      "Monetary Policy: Central bank actions on interest rates and money supply affect borrowing costs and consumer spending.",
      "Public Goods: Government provides infrastructure, legal systems, and national defense that businesses depend upon."
    ],
    roleplayTips: [
      "\"Government and business have a symbiotic relationship—businesses need stable legal and infrastructure foundations that only government can provide.\"",
      "\"Regulatory compliance is a cost of doing business, but it also creates barriers that protect established players from new entrants.\"",
      "\"Interest rate changes ripple through to our cost of capital—a rate hike raises borrowing costs and can delay capital investment plans.\""
    ]
  },
  "EC072": {
    id: "EC072",
    code: "EC:072",
    name: "Describe the nature of taxes",
    definition: "Explain how governments collect compulsory financial contributions from individuals and businesses to fund public expenditures.",
    keyPoints: [
      "Types of Taxes: Income, sales, property, payroll, and excise taxes are the primary forms of taxation.",
      "Progressive vs. Regressive: Progressive taxes take a higher percentage from higher earners; regressive taxes take a higher percentage from lower earners.",
      "Tax Incidence: The ultimate burden of a tax may fall on the producer or consumer depending on price elasticity.",
      "Business Tax Obligations: Businesses are subject to corporate income tax, payroll taxes, sales tax collection, and property tax.",
      "Tax Planning: Legal strategies to minimize tax liability—deductions, credits, timing—are a legitimate aspect of financial management."
    ],
    roleplayTips: [
      "\"Tax planning is about legally minimizing our tax burden through timing, deductions, and credits—distinct from tax evasion, which is illegal.\"",
      "\"Payroll taxes are significant business costs—we must account for both the employer and employee portions in our labor cost calculations.\"",
      "\"Sales tax administration is a compliance obligation—we are essentially collecting agents for the government and must remit accurately.\""
    ]
  },
  "EC013": {
    id: "EC013",
    code: "EC:013",
    name: "Explain the concept of productivity",
    definition: "Describe the efficiency with which inputs (labor, capital) are converted into outputs (goods, services), and explain its importance to economic growth.",
    keyPoints: [
      "Productivity Definition: Output per unit of input—most commonly measured as output per labor hour.",
      "Productivity Growth: Improvements in technology, skills, processes, or management increase productivity over time.",
      "Competitive Advantage: Higher productivity enables lower prices or higher profits than competitors.",
      "National Prosperity: Aggregate productivity growth is the primary driver of rising living standards.",
      "Measurement: Businesses track productivity through metrics like units per hour, revenue per employee, and cost per unit."
    ],
    roleplayTips: [
      "\"Productivity improvement is the sustainable path to higher wages and profits—you can pay more and charge less when you produce more output per input.\"",
      "\"Technology investment is fundamentally a productivity bet—we invest in automation expecting it to produce more output per labor dollar.\"",
      "\"We track revenue per employee as a key productivity KPI—it tells us whether our workforce is becoming more or less efficient over time.\""
    ]
  },
  "EC014": {
    id: "EC014",
    code: "EC:014",
    name: "Analyze impact of specialization/division of labor on productivity",
    definition: "Explain how assigning workers to specific tasks based on skills and comparative advantage increases output and efficiency.",
    keyPoints: [
      "Division of Labor: Breaking a production process into specialized tasks—each performed by a dedicated worker—increases speed and skill.",
      "Comparative Advantage: Workers and regions should specialize in tasks where their relative productivity is highest.",
      "Efficiency Gains: Specialization reduces task-switching time, develops expertise, and enables tooling optimized for one function.",
      "Interdependence: Specialized workers become dependent on one another, requiring coordination and supply chain management.",
      "Limits of Specialization: Extreme division of labor can create monotony, reduce flexibility, and introduce bottleneck risks."
    ],
    roleplayTips: [
      "\"Adam Smith's pin factory example still applies—division of labor multiplies output because each worker masters a narrow task rather than learning all tasks.\"",
      "\"Specialization creates comparative advantage—even if one worker is better at everything, total output rises when each focuses on their strongest skill.\"",
      "\"The trade-off with deep specialization is flexibility—highly specialized workers are more productive in normal operations but harder to redeploy during disruptions.\""
    ]
  },
  "EC015": {
    id: "EC015",
    code: "EC:015",
    name: "Explain the concept of organized labor and business",
    definition: "Describe how labor unions represent workers in collective bargaining with employers over wages, benefits, and working conditions.",
    keyPoints: [
      "Labor Unions: Worker organizations that negotiate collectively with employers to improve compensation and working conditions.",
      "Collective Bargaining: The negotiation process between union representatives and management to reach a labor contract.",
      "Strikes and Lockouts: Work stoppages are the primary leverage tools—used by unions (strike) and management (lockout).",
      "Legal Framework: Labor law, including the NLRA, defines worker rights to organize and the rules of collective bargaining.",
      "Business Impact: Union contracts affect labor costs, scheduling flexibility, and management authority over workforce decisions."
    ],
    roleplayTips: [
      "\"Collective bargaining is a negotiation—both sides have leverage and shared interests; finding the zone of agreement requires understanding each side's priorities.\"",
      "\"Labor relations strategy significantly affects labor costs and operational flexibility—it deserves the same analytical attention as any other cost driver.\"",
      "\"Understanding the legal framework of labor relations helps management operate within the law and avoid unfair labor practice charges.\""
    ]
  },
  "EC023": {
    id: "EC023",
    code: "EC:023",
    name: "Explain the impact of the law of diminishing returns",
    definition: "Describe how adding successive units of one input, while others remain fixed, eventually produces smaller incremental output increases.",
    keyPoints: [
      "Diminishing Returns: Each additional unit of a variable input yields progressively smaller additions to total output.",
      "Short-Run Constraint: Diminishing returns apply in the short run when at least one input (typically capital) is fixed.",
      "Optimal Input Level: Firms should add variable inputs until the marginal product equals marginal cost.",
      "Management Application: Overstaffing, over-marketing, or excess production inputs all demonstrate diminishing returns.",
      "Production Planning: Understanding diminishing returns helps set optimal staffing levels, batch sizes, and marketing budgets."
    ],
    roleplayTips: [
      "\"Adding more workers to a fixed facility eventually yields diminishing returns—the tenth worker adds less output than the fifth because equipment and space are shared.\"",
      "\"Diminishing returns help us find the optimal input level—we keep adding resources until the last unit added barely pays for itself.\"",
      "\"Marketing faces diminishing returns too—the first ad impressions drive high conversion; the thousandth impression to the same audience produces much less incremental lift.\""
    ]
  },
  "EC081": {
    id: "EC081",
    code: "EC:081",
    name: "Discuss consumer spending as an economic indicator",
    definition: "Explain how household consumption expenditures signal economic health and influence business expectations and planning.",
    keyPoints: [
      "Economic Weight: Consumer spending constitutes approximately 70% of GDP in the United States, making it the dominant driver of economic activity.",
      "Retail Sales Data: Monthly retail sales reports are closely watched as a leading indicator of consumer demand.",
      "Consumer Confidence: Surveys of consumer sentiment predict future spending behavior—confident consumers spend more.",
      "Cyclical Sensitivity: Discretionary spending rises sharply in expansions and falls in recessions; necessities are more stable.",
      "Business Implications: Tracking consumer spending trends enables businesses to anticipate demand shifts and adjust inventory and staffing."
    ],
    roleplayTips: [
      "\"Consumer spending is the single largest component of GDP—when households pull back, the entire economy feels the contraction.\"",
      "\"Consumer confidence surveys are leading indicators—they measure spending intent before actual transactions occur, giving us advance warning of demand shifts.\"",
      "\"We model our sales forecasts on consumer spending trends in our demographic—when spending in our segment softens, we adjust inventory targets accordingly.\""
    ]
  },
  "EC083": {
    id: "EC083",
    code: "EC:083",
    name: "Describe the economic impact of inflation on business",
    definition: "Explain how a sustained rise in the general price level affects business costs, revenues, purchasing power, and strategic planning.",
    keyPoints: [
      "Cost Inflation: Rising input prices—materials, wages, energy—squeeze margins when businesses can't fully pass costs to customers.",
      "Revenue Effect: Inflation can inflate nominal revenues, masking flat or declining real performance.",
      "Consumer Purchasing Power: Higher prices reduce real consumer purchasing power, potentially depressing unit demand.",
      "Interest Rate Response: Central banks raise rates to combat inflation, increasing borrowing costs for capital-dependent businesses.",
      "Pricing Strategy: Businesses must decide how much inflation to absorb versus pass through to customers, balancing volume and margin."
    ],
    roleplayTips: [
      "\"Inflation erodes real margins when input costs rise faster than we can raise prices—managing that spread is a core financial strategy challenge.\"",
      "\"In high-inflation environments, nominal revenue growth can be deceiving—we always analyze volume growth separately from price growth.\"",
      "\"The Fed's inflation-fighting rate hikes raise our borrowing costs—so inflation has a double impact: higher inputs and more expensive capital.\""
    ]
  },
  "EC017": {
    id: "EC017",
    code: "EC:017",
    name: "Explain the concept of Gross Domestic Product (GDP)",
    definition: "Describe GDP as the total monetary value of all final goods and services produced within a country's borders in a given period.",
    keyPoints: [
      "GDP Components: The sum of consumer spending, business investment, government spending, and net exports.",
      "Real vs. Nominal: Nominal GDP uses current prices; real GDP adjusts for inflation to measure actual output growth.",
      "Per Capita GDP: GDP divided by population measures average standard of living across countries.",
      "GDP as Business Indicator: Growing GDP signals expanding market opportunity; contracting GDP signals recession risk.",
      "Limitations: GDP doesn't measure income distribution, environmental sustainability, or non-market economic activity."
    ],
    roleplayTips: [
      "\"Real GDP growth is the most watched economic indicator because it tells us whether the economy is actually producing more or just charging more.\"",
      "\"Two consecutive quarters of negative GDP growth define a recession—it's the threshold that signals fundamental economic contraction.\"",
      "\"We use GDP growth forecasts as one input in our demand planning—faster growth means more consumer spending power and B2B investment.\""
    ]
  },
  "EC082": {
    id: "EC082",
    code: "EC:082",
    name: "Discuss the impact of unemployment rates",
    definition: "Explain how the percentage of the labor force actively seeking but unable to find work affects consumer spending, business conditions, and economic policy.",
    keyPoints: [
      "Unemployment Rate: The percentage of the labor force that is jobless and actively seeking work.",
      "Types of Unemployment: Frictional, structural, cyclical, and seasonal unemployment have different causes and policy implications.",
      "Consumer Spending Impact: High unemployment reduces household income and consumer confidence, dampening spending.",
      "Business Hiring Signal: Low unemployment tightens labor markets, raising wages and increasing competition for skilled workers.",
      "Policy Response: Governments use fiscal stimulus and job training programs to reduce unemployment during recessions."
    ],
    roleplayTips: [
      "\"Unemployment is both a human issue and a business indicator—high unemployment signals weak consumer demand and often precedes or accompanies revenue softness.\"",
      "\"Labor market tightness matters for our HR strategy—when unemployment is low, we must pay more and invest more in retention to keep talent.\"",
      "\"Structural unemployment—people whose skills are obsolete—requires long-term investment in retraining, not just short-term stimulus.\""
    ]
  },
  "EC084": {
    id: "EC084",
    code: "EC:084",
    name: "Explain the economic impact of interest-rate fluctuations",
    definition: "Describe how changes in interest rates affect borrowing costs, consumer spending, business investment, and overall economic activity.",
    keyPoints: [
      "Cost of Capital: Rising rates increase the cost of financing for businesses, raising the hurdle rate for investment projects.",
      "Consumer Borrowing: Higher rates increase mortgage and auto loan payments, reducing consumer purchasing power.",
      "Currency Effect: Higher domestic rates attract foreign capital, appreciating the currency and affecting export competitiveness.",
      "Housing Market: Mortgage rate changes are the most direct channel through which rate changes affect consumer spending.",
      "Business Planning: Interest rate expectations must be incorporated into multi-year capital budgeting and financing decisions."
    ],
    roleplayTips: [
      "\"Interest rate changes affect our business on two fronts: our cost of debt capital and consumer demand for credit-financed purchases.\"",
      "\"We use sensitivity analysis on interest rate assumptions in our financial models because a 100 basis point move can significantly change project viability.\"",
      "\"When rates rise, we accelerate our fixed-rate debt issuance to lock in lower costs before the rate environment worsens.\""
    ]
  },
  "EC018": {
    id: "EC018",
    code: "EC:018",
    name: "Determine the impact of business cycles on business activities",
    definition: "Explain how the recurring phases of economic expansion and contraction affect business revenues, costs, hiring, and investment decisions.",
    keyPoints: [
      "Business Cycle Phases: Expansion, peak, contraction (recession), and trough are the four recurring phases.",
      "Expansion Effects: Rising consumer demand, low unemployment, and easy credit create favorable conditions for growth.",
      "Recession Effects: Falling demand, rising unemployment, and tighter credit force cost-cutting and defer investment.",
      "Cyclical vs. Non-Cyclical: Some industries are highly sensitive to cycles (luxury goods); others are relatively stable (food, utilities).",
      "Counter-Cyclical Strategy: Businesses can buffer cycles through flexible cost structures, strong cash reserves, and counter-cyclical pricing."
    ],
    roleplayTips: [
      "\"Understanding where we are in the business cycle shapes our investment and hiring decisions—we build capacity in early expansion, not late-cycle peaks.\"",
      "\"Counter-cyclical businesses—those that grow in recessions—provide portfolio stability; every diversified company should understand its own cyclicality.\"",
      "\"During the contraction phase, cash preservation and cost flexibility are paramount—variable costs are preferable to fixed costs when volume is uncertain.\""
    ]
  },
  "EC016": {
    id: "EC016",
    code: "EC:016",
    name: "Explain the nature of global trade",
    definition: "Describe the exchange of goods, services, and capital across national borders and the economic principles that drive international commerce.",
    keyPoints: [
      "Comparative Advantage: Countries specialize in and export goods they produce most efficiently relative to other goods.",
      "Imports and Exports: Exports generate foreign currency; imports use it—the balance determines a country's trade position.",
      "Trade Barriers: Tariffs, quotas, and subsidies restrict free trade but are often used to protect domestic industries.",
      "Balance of Trade: The difference between a nation's exports and imports; a deficit means more imports than exports.",
      "Global Value Chains: Modern production often spans multiple countries, with each contributing specialized components."
    ],
    roleplayTips: [
      "\"Comparative advantage explains why trade benefits all parties—even if one country is better at producing everything, specialization and exchange create mutual gains.\"",
      "\"Tariffs protect domestic producers but impose costs on domestic consumers and can trigger retaliatory trade barriers from trading partners.\"",
      "\"Our supply chain spans six countries because each contributes a comparative advantage—we source from wherever quality and cost are most favorable.\""
    ]
  },
  "EC109": {
    id: "EC109",
    code: "EC:109",
    name: "Discuss the impact of globalization on business",
    definition: "Explain how increasing integration of global markets, capital flows, and communication technologies is reshaping business strategy and competition.",
    keyPoints: [
      "Market Access: Globalization opens foreign consumer markets to domestic businesses, expanding revenue opportunities.",
      "Competitive Pressure: Foreign competitors now challenge domestic firms in their home markets.",
      "Global Labor Markets: Companies can access talent and labor from around the world, affecting employment and wages.",
      "Supply Chain Integration: Global sourcing reduces costs but creates complexity and vulnerability to disruptions.",
      "Cultural Exchange: Globalization spreads ideas, tastes, and business practices across borders."
    ],
    roleplayTips: [
      "\"Globalization is both an opportunity and a threat—it opens new markets but also brings in competitors who may have significant cost advantages.\"",
      "\"Our global supply chain is more efficient but less resilient—the pandemic showed us that geographic concentration creates single-point-of-failure risk.\"",
      "\"Companies that succeed globally develop the cultural intelligence to adapt their products and approaches to local market preferences.\""
    ]
  },
  "EC100": {
    id: "EC100",
    code: "EC:100",
    name: "Describe determinants of exchange rates",
    definition: "Explain the factors—including inflation, interest rates, trade balances, and economic growth—that determine the relative value of national currencies.",
    keyPoints: [
      "Interest Rate Differentials: Higher domestic rates attract foreign investment, increasing demand for the currency and raising its value.",
      "Inflation Differentials: Countries with lower inflation tend to see currency appreciation relative to higher-inflation countries.",
      "Trade Balance: Persistent trade deficits increase demand for foreign currency, putting downward pressure on the domestic currency.",
      "Economic Growth: Strong economic growth attracts foreign investment, supporting currency demand.",
      "Speculation and Sentiment: Short-term exchange rates are heavily influenced by trader expectations about future fundamentals."
    ],
    roleplayTips: [
      "\"Exchange rate forecasting requires understanding multiple factors simultaneously—interest differentials, inflation, trade flows, and market sentiment all interact.\"",
      "\"A stronger dollar makes our exports more expensive for foreign buyers but reduces our import costs—so currency moves create both winners and losers internally.\"",
      "\"We hedge our foreign currency exposures using forwards and options to protect margins from unexpected exchange rate swings.\""
    ]
  },
  "EC110": {
    id: "EC110",
    code: "EC:110",
    name: "Explain cultural considerations in global business",
    definition: "Describe how differences in values, communication styles, business norms, and social practices across cultures affect international business relationships and strategy.",
    keyPoints: [
      "High-Context vs. Low-Context: High-context cultures rely on implicit meaning; low-context cultures expect explicit, direct communication.",
      "Power Distance: Cultures differ in how they view hierarchy—some expect deference to authority; others value flat, egalitarian interaction.",
      "Individualism vs. Collectivism: Individualistic cultures prioritize personal goals; collectivist cultures emphasize group loyalty and consensus.",
      "Relationship Building: Many cultures require extended relationship development before business deals are possible.",
      "Cultural Adaptation: Successful global businesses adapt products, marketing, management styles, and negotiation to local cultures."
    ],
    roleplayTips: [
      "\"In high-context cultures, relationships and trust must be established before negotiations can begin—rushing to the deal risks offending partners and losing the business.\"",
      "\"We adapt our communication style by country—direct feedback that works in Germany would be perceived as rude in Japan, where indirect communication preserves face.\"",
      "\"Cultural intelligence is a core competency for global business—it prevents costly miscommunications and enables authentic connection with international partners.\""
    ]
  },
  "EC045": {
    id: "EC045",
    code: "EC:045",
    name: "Discuss impact of cultural and social environments on global trade",
    definition: "Explain how cultural values, social structures, language, and religion shape consumer preferences and business practices in international trade.",
    keyPoints: [
      "Consumer Preferences: Cultural values directly shape what products are desired, how they are used, and what attributes are valued.",
      "Language Barriers: Translation errors and linguistic nuances can cause costly misunderstandings in contracts, marketing, and negotiation.",
      "Religious Influences: Religious practices—dietary restrictions, holidays, financial norms—directly affect market demand and business operations.",
      "Social Structures: Family structures, class systems, and gender roles affect buying decisions and appropriate marketing approaches.",
      "Adaptation Requirement: Successful international trade requires adapting products, packaging, messaging, and practices to local cultural context."
    ],
    roleplayTips: [
      "\"Our product needed significant modification for the Middle Eastern market—packaging, labeling, and product formulation all required cultural adaptation.\"",
      "\"Ignoring religious considerations in product development can be a fatal mistake—Halal certification, for example, is a market entry requirement in many countries.\"",
      "\"Successful international trade requires cultural humility—assuming your home-market approach will work globally is one of the most common and costly errors.\""
    ]
  },
  "EC111": {
    id: "EC111",
    code: "EC:111",
    name: "Describe impact of electronic communication tools on global business",
    definition: "Explain how digital communication technologies—email, video conferencing, social media, and collaboration platforms—enable and reshape international commerce.",
    keyPoints: [
      "Communication Speed: Electronic tools enable real-time communication across time zones, collapsing the friction of geographic distance.",
      "Cost Reduction: Digital communication dramatically reduces the cost of international business development and coordination.",
      "Virtual Teams: Global companies can build and manage distributed teams without relocating employees.",
      "E-Commerce: Digital platforms enable businesses of all sizes to sell directly to international consumers.",
      "Data Security: Electronic communication creates cybersecurity risks—protecting business information across borders requires robust protocols."
    ],
    roleplayTips: [
      "\"Video conferencing has democratized international business—small companies can now conduct global business development at a fraction of the cost of travel.\"",
      "\"Our global team operates across eight time zones using asynchronous collaboration tools—electronic communication makes that possible without everyone working the same hours.\"",
      "\"E-commerce platforms have removed the geographic barriers to international sales for small businesses that previously couldn't afford physical international distribution.\""
    ]
  },
  "EC112": {
    id: "EC112",
    code: "EC:112",
    name: "Explain impact of major trade alliances",
    definition: "Describe how international trade agreements and regional economic blocs shape market access, tariffs, and business opportunities.",
    keyPoints: [
      "Free Trade Agreements: Bilateral or multilateral agreements that reduce or eliminate tariffs and trade barriers between member countries.",
      "Customs Unions: Members share a common external tariff in addition to free trade among themselves.",
      "Common Markets: Allow free movement of goods, services, capital, and labor among member countries.",
      "WTO: The World Trade Organization establishes global rules for trade and resolves trade disputes among member nations.",
      "Business Impact: Trade alliances create preferential market access opportunities while potentially displacing industries that lose tariff protection."
    ],
    roleplayTips: [
      "\"USMCA has deeply integrated North American supply chains—production decisions are made with the entire region as the effective domestic market.\"",
      "\"Understanding rules of origin under trade agreements is critical—products must contain a sufficient percentage of regional content to qualify for preferential tariffs.\"",
      "\"Trade alliances create both opportunities and threats—member country competitors gain the same preferential access we receive.\""
    ]
  },
  "EC113": {
    id: "EC113",
    code: "EC:113",
    name: "Describe impact of political environment on world trade",
    definition: "Explain how government stability, trade policy, sanctions, and geopolitical relationships shape international business conditions.",
    keyPoints: [
      "Political Stability: Stable governments provide predictable policy environments; political instability creates investment and operational risk.",
      "Trade Policy: Government decisions on tariffs, quotas, and trade agreements directly shape market access.",
      "Sanctions: Economic sanctions restrict trade with specific countries for foreign policy or national security reasons.",
      "Nationalization Risk: Some governments may seize foreign-owned assets, creating expropriation risk for international investors.",
      "Geopolitical Alliances: Military and diplomatic alliances influence trade relationships and can either facilitate or restrict commerce."
    ],
    roleplayTips: [
      "\"Political risk assessment is a prerequisite for market entry decisions—investing in politically unstable markets requires higher expected returns to justify the risk.\"",
      "\"Trade sanctions require strict compliance monitoring—violations carry severe legal and financial penalties regardless of whether the violation was intentional.\"",
      "\"Geopolitical tensions between major powers create supply chain risks for companies operating in both—we must develop contingency sourcing strategies.\""
    ]
  },
  "EC114": {
    id: "EC114",
    code: "EC:114",
    name: "Explain impact of geography on world trade",
    definition: "Describe how physical location, natural resources, transportation infrastructure, and climate affect what countries produce and trade.",
    keyPoints: [
      "Natural Resource Endowment: Countries rich in particular resources (oil, minerals, arable land) build industries around those endowments.",
      "Location Advantages: Proximity to major markets, ports, or transportation hubs reduces logistics costs and enables faster trade.",
      "Climate and Agriculture: Climate determines what agricultural products can be grown, shaping comparative advantage in food trade.",
      "Infrastructure Quality: Transportation, port, and logistics infrastructure quality affects the cost and speed of international trade.",
      "Landlocked Disadvantage: Countries without ocean access face higher trade costs and greater dependence on neighbor relations for transit."
    ],
    roleplayTips: [
      "\"Geography is a durable source of comparative advantage—a country's resource endowment and location are not easily replicated by competitors.\"",
      "\"Infrastructure investment is economic development policy—improving port and road capacity directly reduces trade costs and enables export growth.\"",
      "\"We chose our distribution hub location based on geographic proximity to our major markets, reducing last-mile delivery costs by 20%.\""
    ]
  },
  "EC115": {
    id: "EC115",
    code: "EC:115",
    name: "Describe impact of a country's history on world trade",
    definition: "Explain how historical events—colonialism, wars, economic development trajectories, and institutional legacies—shape a country's current trade relationships and capabilities.",
    keyPoints: [
      "Colonial Legacy: Former colonial relationships often persist as preferential trade ties or inherited institutional structures.",
      "Post-War Development: Countries that industrialized in the post-WWII era built export-oriented manufacturing capabilities that shape current trade patterns.",
      "Institutional Quality: Strong property rights, rule of law, and contract enforcement—products of historical development—enable more robust trade.",
      "Historical Trade Routes: Ancient and medieval trade routes left lasting cultural and commercial connections that still influence trade today.",
      "Economic Development Path: Whether a country industrialized early or late shapes its current competitive strengths in global markets."
    ],
    roleplayTips: [
      "\"Understanding a country's economic history helps explain its current trade specializations—you can't fully understand South Korea's electronics dominance without understanding its post-war development strategy.\"",
      "\"Historical colonial relationships created preferential trade links that persist today—the Commonwealth trading network and Francophone commercial ties are examples.\"",
      "\"Institutional quality—property rights, rule of law—is itself a historical achievement that makes a country more attractive for international trade and investment.\""
    ]
  },
  "EC116": {
    id: "EC116",
    code: "EC:116",
    name: "Explain impact of economic development on world trade",
    definition: "Describe how a country's level of economic development shapes its trade patterns, competitive advantages, and participation in global value chains.",
    keyPoints: [
      "Development Stages: Countries progress from commodity-based to manufacturing to service-based trade as they develop.",
      "Factor Endowments: Developing countries export labor-intensive goods; developed countries export capital-intensive and technology-intensive goods.",
      "Trade Composition: As incomes rise, demand shifts from necessities to manufactured goods to services, reshaping import patterns.",
      "Foreign Direct Investment: Developed-country firms often invest in developing countries to access lower costs or growing consumer markets.",
      "Export-Led Growth: Export-oriented industrialization strategies have driven rapid economic development in East Asia."
    ],
    roleplayTips: [
      "\"Trade patterns reflect development levels—low-income countries export raw materials and basic manufactures; high-income countries export technology, capital goods, and services.\"",
      "\"Rising incomes in emerging markets create growing consumer markets—our international growth strategy prioritizes countries with a rapidly expanding middle class.\"",
      "\"Export-led growth strategies—investing in export industries to drive development—have created the world's most dramatic economic transformations in East Asia.\""
    ]
  },
  "EC140": {
    id: "EC140",
    code: "EC:140",
    name: "Discuss impact of bribery and foreign monetary payments",
    definition: "Explain the legal, ethical, and business implications of bribery and improper payments in international business contexts.",
    keyPoints: [
      "FCPA: The U.S. Foreign Corrupt Practices Act prohibits bribing foreign government officials to obtain or retain business.",
      "Legal Risk: Violations carry severe criminal and civil penalties including fines, disgorgement of profits, and imprisonment.",
      "Competitive Disadvantage: Companies that refuse to pay bribes may lose contracts in corrupt markets to less scrupulous competitors.",
      "Third-Party Liability: Companies are liable for bribes paid through agents, distributors, or joint venture partners.",
      "Compliance Programs: Effective anti-bribery programs include policies, training, due diligence on third parties, and whistleblower channels."
    ],
    roleplayTips: [
      "\"The FCPA applies to U.S. companies and their foreign subsidiaries and agents worldwide—there is no geographic safe harbor for bribery.\"",
      "\"We conduct enhanced due diligence on all foreign agents and distributors because third-party bribery creates the same legal liability as direct bribery.\"",
      "\"Refusing to pay bribes may mean losing some business, but the legal, financial, and reputational cost of an FCPA violation vastly exceeds any short-term contract value.\""
    ]
  },
  "EC141": {
    id: "EC141",
    code: "EC:141",
    name: "Identify requirements for international business travel",
    definition: "Describe the documentation, preparation, and protocols—including passports, visas, customs, and cultural norms—required for international business travel.",
    keyPoints: [
      "Travel Documents: Valid passports and visas appropriate to the destination country and travel purpose are mandatory.",
      "Entry Requirements: Countries have specific visa requirements based on nationality, purpose, and duration of visit.",
      "Customs Regulations: Travelers must declare currency, goods, and business materials above specified thresholds at border crossings.",
      "Health Requirements: Some countries require vaccinations, health certificates, or other health documentation for entry.",
      "Cultural Protocol: Appropriate dress, behavior, and business card etiquette vary by country and must be researched in advance."
    ],
    roleplayTips: [
      "\"Before any international trip, I verify passport validity—many countries require six months beyond the travel dates—and confirm visa requirements well in advance.\"",
      "\"Business travelers should research customs regulations for both departure and arrival countries—improperly declared materials can cause significant delays.\"",
      "\"International travel preparation includes health requirements, currency exchange, local business etiquette research, and emergency contact protocols.\""
    ]
  },

};

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

  "CR003": {
    id: "CR003",
    code: "CR:003",
    name: "Explain the nature of positive customer relations",
    definition: "Describe how respectful, helpful interactions create customer satisfaction and loyalty.",
    keyPoints: [
      "Meets Expectations: Meeting or exceeding customer expectations is the foundation of positive customer relations.",
      "Builds Trust: Consistent positive interactions build trust, loyalty, and repeat business over time.",
      "Enhances Reputation: A reputation for excellent customer relations strengthens the company's image in the marketplace.",
      "Positive Focus: Focusing on positive relationships rather than just transactions creates lasting customer connections.",
      "Image Depends on Interactions: Every employee interaction shapes the company's image with customers."
    ],
    roleplayTips: [
      "\"I believe every customer interaction is an opportunity to build trust and reinforce our company's commitment to service excellence.\"",
      "\"When I focus on genuinely helping customers rather than just completing transactions, I consistently see higher satisfaction and repeat business.\"",
      "\"Our company's reputation is built one customer interaction at a time, so I treat every conversation as a chance to strengthen that image.\""
    ]
  },

  "CR004": {
    id: "CR004",
    code: "CR:004",
    name: "Demonstrate a customer service mindset",
    definition: "Show an attitude focused on helping customers and solving their problems.",
    keyPoints: [
      "Courteous Attitude: Being courteous, patient, and attentive in every customer interaction demonstrates a service mindset.",
      "Prioritize Needs: Putting customer needs first, even when it requires extra effort, reflects true service orientation.",
      "Take Ownership: Taking ownership of customer concerns rather than passing them off shows genuine commitment to resolution.",
      "Reduces Conflict: A positive mindset reduces the likelihood of conflict and helps de-escalate tense situations.",
      "Reflects Excellence: A service mindset reflects the employee's commitment to service excellence and the company's values."
    ],
    roleplayTips: [
      "\"I approach every customer interaction with patience and genuine willingness to help, because I know that attitude is what sets great service apart.\"",
      "\"When a customer has a problem, I take personal ownership of finding a solution rather than redirecting them to someone else.\"",
      "\"My customer service mindset means I look for ways to exceed expectations, not just meet the minimum requirement.\""
    ]
  },

  "CR029": {
    id: "CR029",
    code: "CR:029",
    name: "Develop rapport with customers",
    definition: "Establish a friendly, comfortable relationship with customers.",
    keyPoints: [
      "Positive Greetings: Using polite greetings and positive body language sets a welcoming tone for the interaction.",
      "Genuine Interest: Showing genuine interest in the customer's needs makes them feel valued and heard.",
      "Personalize: Personalizing interactions when appropriate demonstrates attentiveness and care.",
      "Encourages Loyalty: Building rapport with customers encourages them to return and recommend the business.",
      "Long-Term Relationships: Consistent rapport-building creates the foundation for long-term customer relationships."
    ],
    roleplayTips: [
      "\"I start every customer interaction with a warm greeting and genuine curiosity about their needs, which immediately sets a positive tone.\"",
      "\"Remembering details from previous interactions and referencing them shows customers I truly value the relationship, not just the sale.\"",
      "\"Building rapport isn't just good manners—it's a strategic investment in customer loyalty that pays dividends over time.\""
    ]
  },

  "CR005": {
    id: "CR005",
    code: "CR:005",
    name: "Reinforce service orientation through communication",
    definition: "Use verbal and nonverbal communication to show commitment to service quality.",
    keyPoints: [
      "Speak Clearly: Speaking clearly and respectfully in all customer communications reinforces a service-oriented culture.",
      "Positive Tone: Using a positive tone and language signals genuine willingness to help and creates a welcoming atmosphere.",
      "Show Appreciation: Thanking customers and expressing appreciation reinforces the value the business places on their patronage.",
      "Consistency: Consistent communication across all interactions reinforces and strengthens the company's brand image.",
      "Nonverbal Cues: Nonverbal cues such as body language and facial expressions communicate as much as words."
    ],
    roleplayTips: [
      "\"I consciously choose positive language in every customer interaction because words shape perceptions and set the emotional tone.\"",
      "\"I make sure my nonverbal communication—eye contact, posture, and facial expressions—reinforces the welcoming message I'm delivering verbally.\"",
      "\"Thanking customers genuinely at the close of every interaction is a simple but powerful way to reinforce our commitment to service.\""
    ]
  },

  "CR006": {
    id: "CR006",
    code: "CR:006",
    name: "Respond to customer inquiries",
    definition: "Provide accurate and helpful answers to customer questions.",
    keyPoints: [
      "Listen Carefully: Listening carefully ensures a full understanding of the customer's question before responding.",
      "Clear Responses: Giving clear, honest, and complete responses helps customers make informed decisions.",
      "Refer When Needed: Referring customers to appropriate resources when necessary demonstrates professionalism and thoroughness.",
      "Timely Responses: Providing timely responses to inquiries builds customer trust and satisfaction.",
      "Accuracy Prevents Issues: Accurate information prevents misinformation and the problems that follow from it."
    ],
    roleplayTips: [
      "\"I always make sure I fully understand a customer's question before I answer—asking a clarifying question is better than giving the wrong information.\"",
      "\"When I don't know the answer, I tell the customer I'll find out rather than guessing, because accuracy matters more than speed.\"",
      "\"Responding promptly to customer inquiries shows respect for their time and demonstrates that we take their questions seriously.\""
    ]
  },

  "CR019": {
    id: "CR019",
    code: "CR:019",
    name: "Adapt communication to the cultural and social differences among clients",
    definition: "Adjust communication style to respect diverse backgrounds.",
    keyPoints: [
      "Cultural Awareness: Being aware of cultural norms and preferences helps avoid miscommunication and offense.",
      "Avoid Assumptions: Avoiding assumptions or stereotypes about customers ensures every person is treated as an individual.",
      "Inclusive Language: Using inclusive and respectful language demonstrates cultural sensitivity and professionalism.",
      "Prevents Misunderstandings: Cultural sensitivity prevents misunderstandings that can damage customer relationships.",
      "Builds Trust: Adapting communication style to diverse groups builds trust and strengthens the customer relationship."
    ],
    roleplayTips: [
      "\"I adjust my communication style based on cultural cues because what's respectful in one culture may not translate to another.\"",
      "\"I'm careful not to make assumptions about customers based on their background—I treat everyone as an individual and follow their lead.\"",
      "\"Using inclusive language isn't just good manners—it's a business strategy that helps us build trust with every customer we serve.\""
    ]
  },

  "CR007": {
    id: "CR007",
    code: "CR:007",
    name: "Interpret business policies to customers/clients",
    definition: "Explain company rules and procedures clearly to customers.",
    keyPoints: [
      "Simple Language: Using simple, understandable language makes policies accessible to all customers.",
      "Remain Polite: Remaining polite and empathetic even when delivering restrictive policies preserves the relationship.",
      "Align With Guidelines: Ensuring explanations align with company guidelines maintains consistency and accuracy.",
      "Helps Acceptance: Clear explanations help customers understand and accept policy limitations.",
      "Reduces Frustration: Transparent policy communication reduces customer frustration and conflict."
    ],
    roleplayTips: [
      "\"When explaining a policy a customer may not like, I focus on the reason behind the policy so they understand it's not arbitrary.\"",
      "\"I translate policy language into plain terms so customers aren't confused or intimidated by technical or legal wording.\"",
      "\"Staying empathetic while explaining policies helps customers feel heard even when the answer isn't what they hoped for.\""
    ]
  },

  "CR030": {
    id: "CR030",
    code: "CR:030",
    name: "Build and maintain relationships with customers",
    definition: "Develop long-term connections that encourage customer loyalty.",
    keyPoints: [
      "Follow Up: Following up after sales or service interactions shows customers they are valued beyond the transaction.",
      "Consistent Service: Providing consistent, reliable service builds customer confidence and encourages return business.",
      "Address Concerns: Addressing concerns promptly and professionally preserves and strengthens the customer relationship.",
      "Reduces Acquisition Cost: Long-term customer loyalty significantly reduces the cost of acquiring new customers.",
      "Drives Repeat Business: Strong relationships drive repeat business and customer referrals."
    ],
    roleplayTips: [
      "\"I follow up after every major interaction to make sure the customer is satisfied—it's a small gesture that makes a big impression.\"",
      "\"Consistent, reliable service is how I build the kind of trust that turns one-time buyers into long-term loyal customers.\"",
      "\"Addressing concerns quickly and professionally is one of the most powerful ways to deepen a customer relationship.\""
    ]
  },

  "CR009": {
    id: "CR009",
    code: "CR:009",
    name: "Handle difficult customers",
    definition: "Manage challenging customer interactions calmly and professionally.",
    keyPoints: [
      "Stay Patient: Staying patient and respectful even with difficult customers protects the relationship and the brand.",
      "Listen Fully: Listening without interrupting allows the customer to feel heard and reduces emotional escalation.",
      "Focus on Resolution: Focusing on resolving the issue rather than arguing keeps the interaction productive.",
      "De-escalation: Effective de-escalation skills protect the customer relationship even in tense situations.",
      "Professionalism: Professional behavior in difficult situations reflects positively on the brand and the employee."
    ],
    roleplayTips: [
      "\"When dealing with a frustrated customer, I focus all my energy on the solution rather than defending what went wrong.\"",
      "\"I let difficult customers fully express their concerns before I respond—interrupting or rushing them only makes things worse.\"",
      "\"Staying calm and professional in difficult customer situations is both a service skill and a personal brand asset.\""
    ]
  },

  "CR010": {
    id: "CR010",
    code: "CR:010",
    name: "Handle customer/client complaints",
    definition: "Address customer dissatisfaction to restore trust and satisfaction.",
    keyPoints: [
      "Acknowledge Complaint: Acknowledging the complaint immediately signals that the customer's concern is taken seriously.",
      "Apologize Appropriately: Apologizing when appropriate demonstrates empathy and accountability.",
      "Offer Solutions: Offering solutions that align with company policy resolves the issue while protecting the business.",
      "Swift Resolution: Resolving complaints quickly improves customer loyalty and reduces long-term damage.",
      "Complaints as Feedback: Customer complaints reveal improvement opportunities for products and processes."
    ],
    roleplayTips: [
      "\"When a customer complains, my first priority is acknowledgment and empathy—they need to know I hear them before I start solving.\"",
      "\"I view every complaint as an opportunity to demonstrate our commitment to customer satisfaction and to improve our processes.\"",
      "\"A complaint resolved well often creates a more loyal customer than one who never had a problem in the first place.\""
    ]
  },

  "CR001": {
    id: "CR001",
    code: "CR:001",
    name: "Identify company's brand promise",
    definition: "Recognize the company's commitment to customers about the experience they will receive.",
    keyPoints: [
      "Reflects Values: The brand promise reflects the company's values and service standards.",
      "Guides Behavior: It guides employee behavior by defining the experience every customer should receive.",
      "Sets Expectations: The brand promise sets customer expectations that must be met consistently.",
      "Delivered Consistently: Consistent delivery of the brand promise differentiates the company from competitors.",
      "Differentiates: A strong brand promise differentiates the company from competitors in the marketplace."
    ],
    roleplayTips: [
      "\"Our brand promise is the commitment we make to every customer—every decision I make should reinforce that promise, not contradict it.\"",
      "\"Understanding our brand promise helps me align my behavior with what customers have been led to expect from us.\"",
      "\"When our brand promise is delivered consistently, it becomes a competitive advantage that's very difficult for others to replicate.\""
    ]
  },

  "CR002": {
    id: "CR002",
    code: "CR:002",
    name: "Determine ways of reinforcing the company's image through employee performance",
    definition: "Identify actions employees take to support the brand image.",
    keyPoints: [
      "Professional Appearance: Maintaining professional appearance and behavior reinforces the company's image.",
      "Service Quality: Delivering consistent service quality sends a powerful message about the company's standards.",
      "Positive Communication: Communicating positively with customers in every interaction shapes the brand experience.",
      "Brand Ambassadors: Employees are brand ambassadors whose behavior directly influences how customers perceive the company.",
      "Every Interaction Counts: Every customer interaction shapes overall perception of the company's brand."
    ],
    roleplayTips: [
      "\"I think of myself as a brand ambassador—my attitude and behavior in every interaction either strengthens or weakens our company image.\"",
      "\"Consistent, professional behavior is the most powerful way employees can reinforce the company's brand promise every day.\"",
      "\"How I dress, communicate, and solve problems all send signals about the kind of company we are—I take that responsibility seriously.\""
    ]
  },

  "CR016": {
    id: "CR016",
    code: "CR:016",
    name: "Discuss the nature of customer relationship management (CRM)",
    definition: "Explain how businesses manage interactions with customers to improve relationships.",
    keyPoints: [
      "Customer Focus: CRM focuses on customer satisfaction and retention as the core driver of business value.",
      "Data Utilization: CRM uses data to track customer preferences and personalize service and marketing.",
      "Personalized Service: Tracking customer data helps businesses personalize service and marketing efforts.",
      "Reduces Churn: Effective CRM strategies reduce customer churn by proactively addressing dissatisfaction.",
      "Technology Enables Scale: Technology enables CRM at scale, allowing businesses to manage thousands of relationships simultaneously."
    ],
    roleplayTips: [
      "\"CRM is about systematically building and maintaining relationships with customers—technology is the tool, but genuine care is the foundation.\"",
      "\"Using CRM data to personalize customer interactions shows customers we remember and value their specific needs and history with us.\"",
      "\"A strong CRM strategy focuses on retention because keeping loyal customers is far more cost-effective than constantly acquiring new ones.\""
    ]
  },

  "CR017": {
    id: "CR017",
    code: "CR:017",
    name: "Explain the role of ethics in customer relationship management",
    definition: "Describe the importance of ethical behavior in managing customer relationships.",
    keyPoints: [
      "Protect Privacy: Protecting customer privacy and data is a fundamental ethical obligation in CRM.",
      "Be Honest: Being honest and transparent with customers builds the trust that sustains long-term relationships.",
      "Build Trust: Ethical practices build the deep trust that differentiates great customer relationships from transactional ones.",
      "Avoid Legal Risk: Unethical CRM practices create significant legal and reputational risk for the business.",
      "Long-Term Loyalty: Consistently ethical behavior drives the long-term customer loyalty that sustains business growth."
    ],
    roleplayTips: [
      "\"I treat customer data with the same care I'd want my own data treated—privacy and trust are non-negotiable in customer relationships.\"",
      "\"Ethical CRM means being honest even when honesty is inconvenient—customers reward that integrity with long-term loyalty.\"",
      "\"Building customer relationships on an ethical foundation protects the company legally and creates sustainable competitive advantage.\""
    ]
  },

  "CR018": {
    id: "CR018",
    code: "CR:018",
    name: "Describe the use of technology in customer relationship management",
    definition: "Explain how digital tools support customer relationship efforts.",
    keyPoints: [
      "CRM Software: CRM software stores and organizes customer data to support relationship management at scale.",
      "Improves Communication: Technology improves communication quality and follow-up consistency with customers.",
      "Enhances Efficiency: CRM technology enhances operational efficiency and improves the overall customer experience.",
      "Automates Interactions: Automation handles routine customer interactions, freeing staff for complex relationship needs.",
      "Enables Personalization: Technology enables personalization at scale by applying customer data to every interaction."
    ],
    roleplayTips: [
      "\"CRM technology gives our team a complete picture of each customer's history, so every interaction feels personalized and informed.\"",
      "\"Automating routine follow-ups through CRM ensures no customer falls through the cracks—consistency is built into the system.\"",
      "\"Technology enables us to scale personal service—we can deliver a personalized experience to thousands of customers simultaneously.\""
    ]
  },

  "EI001": {
    id: "EI001",
    code: "EI:001",
    name: "Describe the nature of emotional intelligence",
    definition: "Understand and manage one's emotions while recognizing emotions in others.",
    keyPoints: [
      "Self-Awareness: Involves self-awareness, self-regulation, and empathy as core components of emotional intelligence.",
      "Decision-Making: Emotional intelligence affects decision-making and interpersonal relationships in meaningful ways.",
      "Workplace Success: Strong emotional intelligence is essential for success in professional environments.",
      "Communication: Emotional intelligence drives effective communication and conflict resolution at work.",
      "Leadership: High emotional intelligence leads to better leadership outcomes and team performance."
    ],
    roleplayTips: [
      "\"I recognize that managing my emotions under pressure is just as important as technical skill in a business setting.\"",
      "\"When I practice self-awareness, I make better decisions because I understand how my feelings influence my thinking.\"",
      "\"Empathy helps me understand what my teammates and customers need, which makes every interaction more productive.\""
    ]
  },

  "EI016": {
    id: "EI016",
    code: "EI:016",
    name: "Explain the concept of self-esteem",
    definition: "Describe how individuals value and perceive themselves.",
    keyPoints: [
      "Confidence Impact: Self-esteem impacts confidence and overall performance in professional settings.",
      "Communication Influence: Self-esteem influences how individuals communicate and behave with others.",
      "Resilience: Healthy self-esteem supports resilience when facing setbacks or criticism.",
      "Challenge Approach: Self-esteem affects how individuals approach and respond to challenging situations.",
      "Growth Limitation: Low self-esteem can limit personal and professional growth over time."
    ],
    roleplayTips: [
      "\"My confidence in my abilities allows me to take on challenging projects and present my ideas clearly to others.\"",
      "\"I work on building healthy self-esteem by focusing on my growth and learning, not just on whether I succeed or fail.\"",
      "\"When I believe in my own value, I communicate more assertively and contribute more effectively to my team.\""
    ]
  },

  "EI017": {
    id: "EI017",
    code: "EI:017",
    name: "Recognize and overcome personal biases and stereotypes",
    definition: "Identify and reduce preconceived beliefs about others.",
    keyPoints: [
      "Judgment Impact: Bias can affect judgment and fairness in decision-making situations.",
      "Objectivity: Awareness of bias improves objectivity and leads to more equitable outcomes.",
      "Inclusivity: Overcoming bias promotes inclusivity and respect in the workplace.",
      "Relationship Damage: Unchecked bias damages professional relationships and team trust.",
      "First Step: Recognizing bias is the essential first step toward reducing its influence."
    ],
    roleplayTips: [
      "\"I actively question my assumptions about people before making judgments, because I know my biases can cloud my thinking.\"",
      "\"When I catch myself making a stereotype-based assumption, I pause and seek more information before acting on it.\"",
      "\"Overcoming bias makes me a more fair and effective professional who treats every person as an individual.\""
    ]
  },

  "EI002": {
    id: "EI002",
    code: "EI:002",
    name: "Assess personal strengths and weaknesses",
    definition: "Evaluate abilities and areas for improvement.",
    keyPoints: [
      "Personal Growth: Assessing strengths and weaknesses supports targeted personal growth efforts.",
      "Task Alignment: Understanding strengths helps align abilities with appropriate tasks and roles.",
      "Continuous Improvement: Honest self-assessment encourages continuous improvement over time.",
      "Development Guidance: Honest assessment guides meaningful professional development planning.",
      "Self-Awareness Building: Regular self-assessment builds the self-awareness needed for career success."
    ],
    roleplayTips: [
      "\"I regularly assess my strengths and weaknesses so I can focus my development on the areas that will have the most impact.\"",
      "\"Being honest about what I do well and where I struggle helps me find the right roles and seek the right support.\"",
      "\"Self-assessment is how I stay intentional about my growth rather than just hoping I improve over time.\""
    ]
  },

  "EI126": {
    id: "EI126",
    code: "EI:126",
    name: "Assess personal behavior and values",
    definition: "Examine actions and beliefs to ensure alignment with goals and ethics.",
    keyPoints: [
      "Values Guide Decisions: Personal values serve as the foundation for ethical decision-making.",
      "Behavior Reflection: Behavior reflects personal standards and communicates character to others.",
      "Accountability: Self-awareness of behavior improves personal accountability and responsibility.",
      "Conflict Creation: Misalignment between values and actions creates internal conflict and ethical problems.",
      "Integrity Building: Regular reflection on behavior and values builds integrity over time."
    ],
    roleplayTips: [
      "\"I periodically reflect on whether my actions are aligned with my values, because integrity requires more than good intentions.\"",
      "\"When I notice a gap between what I believe and how I behave, I treat it as a signal to reflect and make a change.\"",
      "\"Assessing my values helps me make decisions confidently, because I know what I stand for and why.\""
    ]
  },

  "EI018": {
    id: "EI018",
    code: "EI:018",
    name: "Identify desirable personality traits important to business",
    definition: "Recognize characteristics that support professional success.",
    keyPoints: [
      "Core Traits: Reliability, adaptability, and teamwork are among the most valued traits in business.",
      "Professionalism: A positive attitude and consistent professionalism build strong workplace reputations.",
      "Work Ethic: A strong work ethic signals commitment and drives results in professional settings.",
      "Initiative: Taking initiative drives results and demonstrates leadership potential.",
      "Reputation: Character traits like integrity and dependability build a lasting professional reputation."
    ],
    roleplayTips: [
      "\"I focus on developing traits like reliability and adaptability because I know employers value those qualities as much as technical skills.\"",
      "\"Demonstrating a positive attitude and strong work ethic every day is how I build the reputation I want to be known for.\"",
      "\"Taking initiative shows that I'm invested in the team's success, not just in completing my own assigned tasks.\""
    ]
  },

  "EI023": {
    id: "EI023",
    code: "EI:023",
    name: "Exhibit self-confidence",
    definition: "Demonstrate belief in one's abilities.",
    keyPoints: [
      "Communication Enhancement: Self-confidence enhances the clarity and persuasiveness of communication.",
      "Credibility Building: Confident behavior builds credibility with colleagues, customers, and supervisors.",
      "Leadership Encouragement: Self-confidence encourages others to see you as a leader worth following.",
      "Preparation-Based: Confidence is developed and strengthened through preparation and practice.",
      "Challenge Navigation: Self-confidence helps navigate professional challenges and setbacks effectively."
    ],
    roleplayTips: [
      "\"I prepare thoroughly before presentations and meetings because I know preparation is the foundation of genuine confidence.\"",
      "\"Projecting confidence through my posture and tone helps others trust my ideas and recommendations.\"",
      "\"When I face challenging situations, my confidence comes from knowing I've done the work to be ready.\""
    ]
  },

  "EI020": {
    id: "EI020",
    code: "EI:020",
    name: "Demonstrate interest and enthusiasm",
    definition: "Show genuine engagement in tasks and roles.",
    keyPoints: [
      "Motivation Improvement: Genuine interest and enthusiasm improve personal motivation and productivity.",
      "Team Morale: Enthusiasm positively affects team morale and creates a more energized work environment.",
      "Commitment Signal: Demonstrating enthusiasm signals commitment and dedication to the role.",
      "Contagious Effect: Enthusiasm is contagious and can uplift the entire team's energy and output.",
      "Positive Impressions: Genuine interest and enthusiasm create positive impressions with colleagues and supervisors."
    ],
    roleplayTips: [
      "\"I bring genuine enthusiasm to every project because I believe my energy and attitude directly influence my team's performance.\"",
      "\"When I show authentic interest in my work, I notice that my colleagues become more engaged and collaborative as well.\"",
      "\"Demonstrating enthusiasm isn't about being loud or performative—it's about genuinely caring about the work and showing it.\""
    ]
  },

  "EI024": {
    id: "EI024",
    code: "EI:024",
    name: "Demonstrate initiative",
    definition: "Take proactive steps without being directed.",
    keyPoints: [
      "Opportunity Identification: Demonstrating initiative involves identifying opportunities to add value proactively.",
      "Independent Problem-Solving: Initiative means solving problems independently without waiting for direction.",
      "Leadership Potential: Taking initiative shows leadership potential and earns trust from supervisors.",
      "Trust Earning: Consistent initiative earns the trust and confidence of colleagues and leaders.",
      "Beyond Minimum: Initiative means going beyond the minimum requirements of one's role."
    ],
    roleplayTips: [
      "\"I look for opportunities to contribute beyond my assigned responsibilities because I want to add value wherever I can.\"",
      "\"When I see a problem, I don't wait to be told to fix it—I take the initiative to address it and report back.\"",
      "\"Taking initiative has helped me build strong relationships with supervisors who know they can count on me to get things done.\""
    ]
  },

  "EI022": {
    id: "EI022",
    code: "EI:022",
    name: "Demonstrate honesty and integrity",
    definition: "Act truthfully and consistently with moral principles.",
    keyPoints: [
      "Credibility Building: Honesty and integrity build the credibility that forms the foundation of professional trust.",
      "Trust Encouragement: Consistent integrity encourages others to trust and rely on you.",
      "Violation Prevention: Demonstrating integrity prevents ethical violations and their consequences.",
      "Testing Situations: Integrity is truly tested in difficult situations where honesty carries a cost.",
      "Character Definition: Consistent honest behavior defines and communicates character over time."
    ],
    roleplayTips: [
      "\"I believe honesty is always the right policy in business, even when the truth is difficult to deliver.\"",
      "\"My commitment to integrity means I follow through on what I say I'll do, every time, whether or not anyone is watching.\"",
      "\"Demonstrating integrity in small everyday decisions builds the trust that makes big decisions go more smoothly.\""
    ]
  },

  "EI021": {
    id: "EI021",
    code: "EI:021",
    name: "Demonstrate responsible behavior",
    definition: "Act dependably and ethically in all situations.",
    keyPoints: [
      "Rule Following: Following rules and expectations demonstrates respect for the organization and its standards.",
      "Accountability Acceptance: Accepting accountability for outcomes builds a reputation for reliability.",
      "Interest Protection: Responsible behavior protects organizational interests and reduces risk.",
      "Trust Building: Consistent responsibility builds the trust that enables greater autonomy and advancement.",
      "Liability Reduction: Responsible employee behavior reduces liability and legal risk for the business."
    ],
    roleplayTips: [
      "\"I take responsibility for my actions and their consequences, whether the outcome is positive or negative.\"",
      "\"Behaving responsibly means meeting my commitments consistently, not just when it's convenient or when someone is watching.\"",
      "\"When I act with responsibility and accountability, I earn the trust that leads to more opportunities and greater autonomy.\""
    ]
  },

  "EI127": {
    id: "EI127",
    code: "EI:127",
    name: "Demonstrate fairness",
    definition: "Treat others impartially and justly.",
    keyPoints: [
      "Favoritism Avoidance: Demonstrating fairness means avoiding favoritism in decisions and treatment of others.",
      "Equal Treatment: Supporting equal treatment for all builds a culture of inclusion and respect.",
      "Trust Building: Consistent fairness builds trust between team members and with leadership.",
      "Team Cohesion: Fairness strengthens team cohesion and reduces interpersonal conflict.",
      "Ethical Leadership: Fairness is a required component of ethical leadership at every level."
    ],
    roleplayTips: [
      "\"I apply the same standards to everyone on my team, because fairness is the foundation of a high-trust work environment.\"",
      "\"When making decisions that affect others, I ask myself whether I would be comfortable if they could see exactly how I made the choice.\"",
      "\"Treating people fairly isn't just ethical—it's also strategic, because people work harder for leaders they trust to treat them justly.\""
    ]
  },

  "EI091": {
    id: "EI091",
    code: "EI:091",
    name: "Assess risks of personal decisions",
    definition: "Evaluate potential consequences before acting.",
    keyPoints: [
      "Outcome Minimization: Assessing risks before acting minimizes the chance of negative outcomes.",
      "Thoughtful Decision-Making: Risk assessment encourages more thoughtful and deliberate decision-making.",
      "Ethical Support: Considering risks supports more ethical choices in complex situations.",
      "Mistake Prevention: Risk awareness prevents costly mistakes that could harm the individual or organization.",
      "Protection: Careful risk assessment protects both the individual and the organization from harm."
    ],
    roleplayTips: [
      "\"Before making an important decision, I take time to think through the potential consequences and how I would respond to each.\"",
      "\"Assessing risk isn't about being cautious to the point of inaction—it's about making informed choices with awareness of trade-offs.\"",
      "\"I've learned that thinking through risks in advance leads to better decisions and fewer unpleasant surprises.\""
    ]
  },

  "EI004": {
    id: "EI004",
    code: "EI:004",
    name: "Demonstrate ethical work habits",
    definition: "Follow ethical standards in daily work behavior.",
    keyPoints: [
      "Policy Respect: Respecting company policies in daily work demonstrates ethical professionalism.",
      "Professionalism Maintenance: Maintaining professionalism in all work activities reflects strong character.",
      "Integrity Upholding: Upholding integrity even in routine decisions builds a consistent ethical reputation.",
      "Routine Application: Ethics applies to everyday decisions, not just major ethical dilemmas.",
      "Reputation Building: Consistent ethical habits build a professional reputation that opens doors."
    ],
    roleplayTips: [
      "\"I treat ethical behavior as a daily habit, not something I only think about in high-stakes situations.\"",
      "\"Even small decisions—like how I use company time or resources—reflect my ethical standards.\"",
      "\"Consistent ethical work habits are how I build the reputation for integrity that I want to be known for throughout my career.\""
    ]
  },

  "EI075": {
    id: "EI075",
    code: "EI:075",
    name: "Take responsibility for decisions and actions",
    definition: "Accept accountability for outcomes.",
    keyPoints: [
      "Ownership: Taking responsibility means owning both mistakes and successes rather than deflecting.",
      "Learning: Accepting accountability creates opportunities to learn from experiences.",
      "Trust Building: Taking responsibility builds the trust that sustains professional relationships.",
      "Growth Driver: Accountability drives personal and professional growth over time.",
      "Blame Avoidance: Consistently accepting responsibility prevents a culture of blame-shifting."
    ],
    roleplayTips: [
      "\"When something goes wrong on my watch, I take responsibility and focus on what I can learn and how I can fix it.\"",
      "\"I don't make excuses when I fall short—I acknowledge what happened, make it right, and commit to doing better.\"",
      "\"Taking responsibility, even when it's uncomfortable, builds the kind of credibility that earns trust and advancement.\""
    ]
  },

  "EI128": {
    id: "EI128",
    code: "EI:128",
    name: "Build trust in relationships",
    definition: "Establish reliability and credibility with others.",
    keyPoints: [
      "Commitment Keeping: Building trust requires consistently keeping commitments, large and small.",
      "Honest Communication: Communicating honestly, even when it's difficult, strengthens trust over time.",
      "Respect: Showing genuine respect for others is a fundamental component of trust-building.",
      "Time Investment: Trust is built incrementally over time through consistent reliable behavior.",
      "Repair Difficulty: Broken trust is very hard to repair, making prevention essential."
    ],
    roleplayTips: [
      "\"I prioritize doing what I say I will do, because I know trust is built through consistent follow-through on commitments.\"",
      "\"I communicate honestly with my colleagues, even when the message is difficult, because honesty is the foundation of lasting trust.\"",
      "\"Building trust takes time and consistent effort, but it's the investment that makes every professional relationship more productive.\""
    ]
  },

  "EI123": {
    id: "EI123",
    code: "EI:123",
    name: "Describe the nature of ethics",
    definition: "Explain moral principles that guide behavior.",
    keyPoints: [
      "Right vs. Wrong: Ethics involves distinguishing right from wrong in situations where choices must be made.",
      "Decision Guidance: Ethical principles guide decision-making in complex and ambiguous situations.",
      "Reputation Influence: Ethics influence personal and organizational reputation in lasting ways.",
      "Culture Shaping: Ethics shape the culture of teams and organizations through daily behavior.",
      "Principles Application: Both universal and situational ethical principles apply in professional settings."
    ],
    roleplayTips: [
      "\"Understanding ethics helps me navigate ambiguous situations where the right answer isn't immediately obvious.\"",
      "\"I think about ethics not just in major decisions but in every interaction, because character is built through daily choices.\"",
      "\"Ethics isn't just about following rules—it's about developing the judgment to make good decisions when the rules don't cover the situation.\""
    ]
  },

  "EI124": {
    id: "EI124",
    code: "EI:124",
    name: "Explain reasons for ethical dilemmas",
    definition: "Identify situations where ethical values conflict.",
    keyPoints: [
      "Conflicting Interests: Ethical dilemmas often arise when different stakeholders have conflicting legitimate interests.",
      "Performance Pressure: Pressure to perform or meet targets can create ethical tension.",
      "Unclear Rules: Ambiguous or absent guidelines leave room for ethical uncertainty.",
      "Competing Loyalties: Conflicting loyalties to different people or groups can create ethical dilemmas.",
      "Time Trade-offs: Short-term vs. long-term trade-offs often create ethical tension in business decisions."
    ],
    roleplayTips: [
      "\"I recognize that ethical dilemmas often arise when different legitimate values are in conflict, not just when someone is trying to do wrong.\"",
      "\"Understanding why ethical dilemmas occur helps me anticipate them before they arrive and think through my response in advance.\"",
      "\"When I feel pressure to compromise my ethics, I try to identify the underlying conflict of interest and address it directly.\""
    ]
  },

  "EI125": {
    id: "EI125",
    code: "EI:125",
    name: "Recognize and respond to ethical dilemmas",
    definition: "Identify ethical issues and take appropriate action.",
    keyPoints: [
      "Option Evaluation: Recognizing an ethical dilemma requires evaluating the options available and their consequences.",
      "Guideline Following: Responding appropriately means following established ethical guidelines and standards.",
      "Guidance Seeking: Seeking guidance from trusted advisors when needed is an ethical strength, not a weakness.",
      "Integrity Action: Acting with integrity even when it is costly reflects genuine ethical commitment.",
      "Documentation: Documenting reasoning in ethical decisions creates accountability and a record for review."
    ],
    roleplayTips: [
      "\"When I recognize an ethical dilemma, I take time to evaluate my options carefully rather than acting on impulse.\"",
      "\"I'm not afraid to seek guidance from a mentor or supervisor when facing a difficult ethical situation—good judgment sometimes requires input.\"",
      "\"Acting with integrity in an ethical dilemma means choosing what's right even when it comes at a personal cost.\""
    ]
  },

  "EI077": {
    id: "EI077",
    code: "EI:077",
    name: "Manage commitments in a timely manner",
    definition: "Meet deadlines and obligations responsibly.",
    keyPoints: [
      "Task Prioritization: Managing commitments requires prioritizing tasks based on importance and urgency.",
      "Time Management: Effective time management is essential for meeting all commitments on schedule.",
      "Reliability Building: Meeting commitments on time builds a reputation for reliability.",
      "Bottleneck Prevention: Timely delivery prevents workflow bottlenecks that affect the whole team.",
      "Others Depend: Colleagues and clients depend on your follow-through to complete their own work."
    ],
    roleplayTips: [
      "\"I use a prioritized task list to make sure I meet all my commitments on time, even during busy periods.\"",
      "\"When I realize I might miss a deadline, I communicate proactively rather than waiting until it's too late to course-correct.\"",
      "\"Managing commitments well is how I demonstrate reliability and build the kind of professional reputation that leads to advancement.\""
    ]
  },

  "EI092": {
    id: "EI092",
    code: "EI:092",
    name: "Develop tolerance for ambiguity",
    definition: "Remain effective despite uncertainty.",
    keyPoints: [
      "Incomplete Information: Developing tolerance for ambiguity means adapting to situations with incomplete information.",
      "Flexibility: Staying flexible in uncertain situations prevents paralysis and enables continued action.",
      "Stress Reduction: Developing tolerance for ambiguity reduces the stress that uncertainty creates.",
      "Business Reality: Ambiguity is a common and unavoidable feature of business environments.",
      "Control Focus: Focusing on what can be controlled reduces the impact of what cannot."
    ],
    roleplayTips: [
      "\"I've learned to make good decisions with incomplete information by focusing on what I know and remaining flexible about what I don't.\"",
      "\"Tolerating ambiguity means staying productive and moving forward even when I don't have all the answers yet.\"",
      "\"In business, uncertainty is constant—my ability to stay calm and effective in ambiguous situations is a real competitive advantage.\""
    ]
  },

  "EI019": {
    id: "EI019",
    code: "EI:019",
    name: "Exhibit a positive attitude",
    definition: "Maintain optimism in challenging situations.",
    keyPoints: [
      "Morale Improvement: A positive attitude improves morale for both the individual and the team.",
      "Problem-Solving: Positivity encourages creative problem-solving and reduces focus on obstacles.",
      "Conflict Reduction: A positive attitude reduces interpersonal conflict and friction in the workplace.",
      "Team Dynamics: Attitude affects team dynamics and overall group performance significantly.",
      "Collaboration Attraction: Positivity attracts collaboration and makes others want to work with you."
    ],
    roleplayTips: [
      "\"I focus on what's possible and what I can do rather than dwelling on obstacles or setbacks.\"",
      "\"A positive attitude is a choice I make every day—it affects my performance and the energy I bring to my team.\"",
      "\"When challenges arise, I approach them as problems to be solved rather than reasons to be discouraged.\""
    ]
  },

  "EI025": {
    id: "EI025",
    code: "EI:025",
    name: "Demonstrate self-control",
    definition: "Regulate emotions and reactions.",
    keyPoints: [
      "Impulse Avoidance: Self-control means avoiding impulsive behavior that can damage relationships or outcomes.",
      "Professionalism Maintenance: Maintaining composure under pressure preserves professional credibility.",
      "Decision Improvement: Self-control improves decision quality by preventing emotionally driven choices.",
      "Credibility Building: Consistent self-control builds credibility as a reliable and measured professional.",
      "Escalation Prevention: Demonstrating self-control prevents situations from escalating unnecessarily."
    ],
    roleplayTips: [
      "\"When I feel a strong emotional reaction in a professional setting, I take a moment to pause before responding.\"",
      "\"Self-control under pressure is how I demonstrate that I can handle responsibility and lead others effectively.\"",
      "\"I've learned that the ability to regulate my emotions in difficult situations is one of the most valuable professional skills I can develop.\""
    ]
  },

  "EI003": {
    id: "EI003",
    code: "EI:003",
    name: "Explain the use of feedback for personal growth",
    definition: "Use input from others to improve performance.",
    keyPoints: [
      "Criticism Acceptance: Accepting constructive criticism with openness is essential for using feedback effectively.",
      "Improvement Identification: Feedback helps identify specific areas for improvement that self-assessment might miss.",
      "Development Encouragement: Acting on feedback encourages a culture of continuous development.",
      "Feedback as Gift: Receiving feedback, even critical feedback, is a gift that supports growth.",
      "Maturity Signal: Acting on feedback demonstrates maturity and a genuine commitment to improvement."
    ],
    roleplayTips: [
      "\"I actively seek feedback from my supervisors and peers because I know it helps me improve in ways I can't see on my own.\"",
      "\"When I receive critical feedback, my first instinct is to listen and understand rather than defend myself.\"",
      "\"Acting on feedback quickly shows the person who gave it that I value their input and take my development seriously.\""
    ]
  },

  "EI026": {
    id: "EI026",
    code: "EI:026",
    name: "Adjust to change",
    definition: "Adapt behavior and mindset to new situations.",
    keyPoints: [
      "Flexibility: Adjusting to change requires remaining flexible when plans or environments shift.",
      "New Ideas: Embracing new ideas rather than resisting them enables growth and innovation.",
      "Productivity Maintenance: Maintaining productivity during transitions demonstrates professional adaptability.",
      "Business Constant: Change is a constant feature of the business environment that must be navigated.",
      "Competitive Skill: Adaptability is a competitive skill that sets high performers apart."
    ],
    roleplayTips: [
      "\"When my organization changes direction, I focus on understanding the reasons and adapting quickly rather than resisting.\"",
      "\"I see change as an opportunity to develop new skills and demonstrate my ability to contribute in new ways.\"",
      "\"Adaptability is one of the qualities I actively develop because I know it will be essential throughout my career.\""
    ]
  },

  "EI029": {
    id: "EI029",
    code: "EI:029",
    name: "Respect the privacy of others",
    definition: "Honor personal boundaries and information.",
    keyPoints: [
      "Information Protection: Respecting privacy means avoiding sharing personal details about others without permission.",
      "Professionalism Maintenance: Maintaining professional boundaries around personal information demonstrates respect.",
      "Trust Building: Respecting privacy builds trust with colleagues and clients.",
      "Legal Obligation: Privacy is both a legal and ethical obligation in professional settings.",
      "Relationship Protection: Privacy violations damage professional relationships and organizational culture."
    ],
    roleplayTips: [
      "\"I treat personal information shared by colleagues with the same discretion I would want them to apply to mine.\"",
      "\"Respecting privacy means not sharing what I know about someone's personal situation unless they've chosen to make it known.\"",
      "\"I understand that privacy is a professional obligation, not just a personal preference—violations carry real consequences.\""
    ]
  },

  "EI030": {
    id: "EI030",
    code: "EI:030",
    name: "Show empathy for others",
    definition: "Understand and share others' feelings.",
    keyPoints: [
      "Relationship Strengthening: Showing empathy strengthens professional relationships and builds trust.",
      "Communication Improvement: Empathy improves communication by ensuring messages are tailored to the recipient's perspective.",
      "Conflict Reduction: Understanding others' feelings reduces misunderstandings and interpersonal conflict.",
      "Inclusion Fostering: Empathy fosters a culture of inclusion and belonging in the workplace.",
      "Leadership Criticality: Empathy is critical for effective leadership and customer service roles."
    ],
    roleplayTips: [
      "\"I make a genuine effort to understand my colleagues' and customers' perspectives before offering solutions or making decisions.\"",
      "\"When someone comes to me with a concern, I focus on understanding their experience before jumping to problem-solving mode.\"",
      "\"Empathy helps me build stronger professional relationships and makes me more effective in every role that involves working with people.\""
    ]
  },

  "EI103": {
    id: "EI103",
    code: "EI:103",
    name: "Maintain the confidentiality of others",
    definition: "Protect sensitive information.",
    keyPoints: [
      "Policy Following: Maintaining confidentiality requires following organizational privacy policies consistently.",
      "Access Limitation: Limiting who has access to sensitive information protects it from misuse.",
      "Credibility Building: Consistently protecting confidential information builds professional credibility.",
      "Legal Harm: Confidentiality breaches can cause serious legal and reputational harm to individuals and organizations.",
      "Professional Obligation: Maintaining confidentiality is a core professional obligation in most business roles."
    ],
    roleplayTips: [
      "\"I treat confidential information with the highest level of discretion because I understand the consequences of a breach.\"",
      "\"Maintaining confidentiality means I only share sensitive information with those who genuinely need to know it.\"",
      "\"My commitment to confidentiality is one of the ways I demonstrate trustworthiness to my organization and its stakeholders.\""
    ]
  },

  "EI033": {
    id: "EI033",
    code: "EI:033",
    name: "Exhibit cultural sensitivity",
    definition: "Respect diverse backgrounds and perspectives.",
    keyPoints: [
      "Assumption Avoidance: Cultural sensitivity requires avoiding assumptions about people based on their backgrounds.",
      "Communication Adaptation: Adapting communication style to cultural differences improves effectiveness.",
      "Inclusion Promotion: Exhibiting cultural sensitivity promotes inclusion and equal treatment.",
      "Offense Prevention: Cultural sensitivity prevents unintentional offense that can damage relationships.",
      "Team Collaboration: Cultural awareness improves collaboration in diverse teams and global environments."
    ],
    roleplayTips: [
      "\"I approach cultural differences with curiosity and respect rather than judgment, because diversity strengthens teams.\"",
      "\"Before working with someone from a different cultural background, I take time to learn about relevant cultural norms.\"",
      "\"Cultural sensitivity is a professional skill I actively develop because the workplace is increasingly diverse and global.\""
    ]
  },

  "EI104": {
    id: "EI104",
    code: "EI:104",
    name: "Leverage personality types in business situations",
    definition: "Use personality differences to improve collaboration.",
    keyPoints: [
      "Task Matching: Understanding personality types helps match individuals to tasks where they will excel.",
      "Teamwork Improvement: Leveraging personality differences improves team dynamics and collaboration.",
      "Misunderstanding Reduction: Personality awareness reduces misunderstandings caused by different working styles.",
      "Value Recognition: Different personality types bring unique and complementary value to teams.",
      "Management Improvement: Awareness of personality differences improves leadership and management effectiveness."
    ],
    roleplayTips: [
      "\"I use knowledge of personality types to communicate more effectively with each member of my team in the way that works best for them.\"",
      "\"Understanding how different personalities contribute to a team helps me assign tasks and structure collaboration more effectively.\"",
      "\"Personality differences aren't obstacles to work around—they're assets to leverage for better team outcomes.\""
    ]
  },

  "EI007": {
    id: "EI007",
    code: "EI:007",
    name: "Explain the nature of effective communications",
    definition: "Describe clear, respectful, and purposeful communication.",
    keyPoints: [
      "Clear Messaging: Effective communication requires clear, concise messaging that minimizes misinterpretation.",
      "Active Listening: Active listening is as important as speaking in effective communication.",
      "Appropriate Tone: The tone of communication must be appropriate to the audience and situation.",
      "Feedback Confirmation: Requesting feedback confirms that the message was understood as intended.",
      "Barrier Management: Barriers to communication must be identified and managed to ensure effectiveness."
    ],
    roleplayTips: [
      "\"Effective communication starts with being clear about what I want the other person to understand and do.\"",
      "\"I practice active listening by focusing fully on the speaker and confirming my understanding before responding.\"",
      "\"I adjust my communication style based on the audience—what works with my team may not work with a customer or executive.\""
    ]
  },

  "EI038": {
    id: "EI038",
    code: "EI:038",
    name: "Explain ethical considerations in providing information",
    definition: "Ensure honesty and accuracy when sharing information.",
    keyPoints: [
      "Misinformation Avoidance: Ethical information sharing requires avoiding misinformation and inaccurate data.",
      "Confidentiality Respect: Respecting confidentiality while providing information is an ethical obligation.",
      "Transparency Maintenance: Maintaining transparency about sources and limitations of information builds trust.",
      "Credibility Building: Ethical communication builds personal and organizational credibility.",
      "Liability Creation: Inaccurate or misleading information creates legal and reputational liability."
    ],
    roleplayTips: [
      "\"I verify information before sharing it because I know that inaccurate data can lead to poor decisions and damaged trust.\"",
      "\"When I share information, I'm transparent about its source and any limitations in its accuracy or completeness.\"",
      "\"Ethical communication means I only share what I'm authorized to share and what I know to be accurate.\""
    ]
  },

  "EI129": {
    id: "EI129",
    code: "EI:129",
    name: "Foster open, honest communication",
    definition: "Encourage transparency and trust.",
    keyPoints: [
      "Feedback Invitation: Fostering open communication means actively inviting feedback from others.",
      "Non-Judgmental Listening: Listening without judgment encourages others to share openly and honestly.",
      "Dialogue Promotion: Promoting dialogue rather than one-way communication builds a collaborative environment.",
      "Rumor Reduction: Open, honest communication reduces rumors and misinformation in the organization.",
      "Organizational Health: Honesty in communication builds organizational health and team resilience."
    ],
    roleplayTips: [
      "\"I create an environment where people feel safe sharing concerns and ideas by responding to feedback with openness rather than defensiveness.\"",
      "\"Open communication means I proactively share information my team needs rather than waiting to be asked.\"",
      "\"When I model honest communication, even about difficult topics, I encourage others to do the same.\""
    ]
  },

  "EI130": {
    id: "EI130",
    code: "EI:130",
    name: "Collaborate with others",
    definition: "Work cooperatively toward shared goals.",
    keyPoints: [
      "Idea Sharing: Effective collaboration requires openly sharing ideas and building on others' contributions.",
      "Difference Respect: Respecting differences in perspective and approach strengthens collaborative outcomes.",
      "Teamwork Support: Supporting teammates' efforts contributes to overall team success.",
      "Better Outcomes: Collaboration consistently produces better outcomes than individual effort alone.",
      "Communication Requirement: Successful collaboration requires ongoing compromise and clear communication."
    ],
    roleplayTips: [
      "\"I approach every team project by first listening to understand my colleagues' ideas and perspectives before pushing my own.\"",
      "\"Good collaboration means I'm flexible and willing to incorporate others' ideas, even when they differ from my initial thinking.\"",
      "\"The best outcomes I've achieved have come through genuine collaboration, where everyone's strengths contribute to the final result.\""
    ]
  },

  "EI106": {
    id: "EI106",
    code: "EI:106",
    name: "Solicit feedback",
    definition: "Request input to improve performance.",
    keyPoints: [
      "Specific Questions: Soliciting effective feedback requires asking specific, focused questions.",
      "Suggestion Acceptance: Accepting suggestions with openness and without defensiveness encourages continued input.",
      "Feedback Application: Applying received feedback demonstrates that soliciting it was genuine.",
      "Self-Awareness Demonstration: Seeking feedback shows self-awareness and a genuine commitment to growth.",
      "Relationship Improvement: Proactively soliciting feedback improves relationships with colleagues and supervisors."
    ],
    roleplayTips: [
      "\"I regularly ask my supervisor and teammates for specific feedback on areas where I want to improve.\"",
      "\"When I receive feedback, I thank the person and ask clarifying questions to make sure I fully understand the input.\"",
      "\"Soliciting feedback shows that I care about doing excellent work and am not complacent about my current performance.\""
    ]
  },

  "EI107": {
    id: "EI107",
    code: "EI:107",
    name: "Use social media to solicit new ideas and solutions",
    definition: "Use online platforms to gather input.",
    keyPoints: [
      "Engagement Encouragement: Using social media for ideas requires encouraging genuine engagement from followers.",
      "Collaboration Promotion: Social platforms can promote broad collaboration beyond organizational boundaries.",
      "Professional Guidelines: Following professional and ethical guidelines governs appropriate social media use.",
      "Idea Source Expansion: Social media expands the sources of ideas available to solve business problems.",
      "Ethical Use: Using social media for business purposes requires careful attention to ethics and privacy."
    ],
    roleplayTips: [
      "\"I use professional social media platforms to engage with communities outside my organization for fresh perspectives on challenges.\"",
      "\"Crowdsourcing ideas through social media can surface solutions that wouldn't emerge from within the organization alone.\"",
      "\"When using social media for business purposes, I follow company guidelines and maintain professional standards in every interaction.\""
    ]
  },

  "EI108": {
    id: "EI108",
    code: "EI:108",
    name: "\"Sell\" ideas to others",
    definition: "Present ideas persuasively.",
    keyPoints: [
      "Benefit Highlighting: Selling ideas effectively requires clearly highlighting the benefits to the audience.",
      "Evidence Use: Using evidence and data to support ideas strengthens their persuasive impact.",
      "Concern Addressing: Proactively addressing concerns and objections improves idea acceptance.",
      "Framing Impact: Persuasive framing increases the likelihood that others will adopt new ideas.",
      "Audience Knowledge: Understanding your audience allows you to tailor the pitch to their priorities."
    ],
    roleplayTips: [
      "\"When I want to persuade others to support my idea, I start by framing it in terms of benefits that matter to them.\"",
      "\"I back up my ideas with data and examples because evidence makes proposals much more compelling than enthusiasm alone.\"",
      "\"Selling an idea means addressing the objections before they come up, so the audience knows I've thought through the risks.\""
    ]
  },

  "EI012": {
    id: "EI012",
    code: "EI:012",
    name: "Persuade others",
    definition: "Influence opinions or actions.",
    keyPoints: [
      "Logic and Credibility: Effective persuasion uses logic, evidence, and personal credibility.",
      "Audience Understanding: Understanding the audience's needs and values improves persuasive effectiveness.",
      "Confident Communication: Communicating confidently reinforces the persuasive message.",
      "Persuasion vs. Manipulation: Persuasion differs ethically from manipulation in its honesty and respect for choice.",
      "Argument Strengthening: Evidence-based arguments are more persuasive than appeals to emotion alone."
    ],
    roleplayTips: [
      "\"I build my persuasive case by understanding what matters most to my audience and connecting my ideas to those priorities.\"",
      "\"Credibility is my most important persuasive asset—I work hard to be known as someone whose word and analysis can be trusted.\"",
      "\"Ethical persuasion means presenting the strongest honest case for my position, not manipulating others into agreement.\""
    ]
  },

  "EI062": {
    id: "EI062",
    code: "EI:062",
    name: "Demonstrate negotiation skills",
    definition: "Reach mutually beneficial agreements.",
    keyPoints: [
      "Active Listening: Effective negotiation requires active listening to understand the other party's interests.",
      "Appropriate Compromise: Being willing to compromise when appropriate produces better outcomes than rigid positions.",
      "Professionalism Maintenance: Maintaining professionalism throughout negotiations preserves the relationship.",
      "BATNA Awareness: Knowing your Best Alternative To a Negotiated Agreement improves negotiating position.",
      "Win-Win Focus: Focusing on win-win outcomes builds relationships that enable future negotiations."
    ],
    roleplayTips: [
      "\"In negotiations, I focus on understanding the other party's underlying interests, not just their stated positions.\"",
      "\"I always know my BATNA before entering a negotiation so I can make informed decisions about when to compromise and when to walk away.\"",
      "\"My goal in every negotiation is a solution both parties feel good about, because that's what enables a productive ongoing relationship.\""
    ]
  },

  "EI008": {
    id: "EI008",
    code: "EI:008",
    name: "Use appropriate assertiveness",
    definition: "Express needs respectfully and confidently.",
    keyPoints: [
      "Aggression Avoidance: Assertiveness means expressing needs clearly without aggression or hostility.",
      "Clear Communication: Communicating needs and boundaries clearly and directly demonstrates healthy assertiveness.",
      "Respect for Others: Assertiveness involves respecting others' rights while also advocating for one's own.",
      "Boundary Protection: Assertiveness protects professional boundaries and personal well-being.",
      "Style Distinction: Assertiveness is distinct from both passive and aggressive communication styles."
    ],
    roleplayTips: [
      "\"I express my needs and opinions directly and respectfully, because I've learned that assertiveness gets better results than hinting or hoping.\"",
      "\"Assertiveness means I advocate for what I need without undermining others—it's confident but not aggressive.\"",
      "\"Using appropriate assertiveness has helped me build respect in the workplace because people know they can count on me to communicate clearly.\""
    ]
  },

  "EI015": {
    id: "EI015",
    code: "EI:015",
    name: "Use conflict-resolution skills",
    definition: "Resolve disagreements constructively.",
    keyPoints: [
      "Issue Identification: Effective conflict resolution begins with clearly identifying the underlying issues.",
      "Solution Seeking: Focusing on collaborative solutions rather than winning the argument produces better outcomes.",
      "Relationship Maintenance: Successful conflict resolution preserves and can even strengthen relationships.",
      "Early Resolution: Addressing conflict early prevents it from escalating and becoming harder to resolve.",
      "Interest Focus: Focusing on underlying interests rather than stated positions leads to more creative solutions."
    ],
    roleplayTips: [
      "\"When conflict arises, I focus on understanding what each party actually needs rather than just arguing about positions.\"",
      "\"I address conflict early and directly because unresolved tension grows and becomes much harder to work through later.\"",
      "\"My goal in conflict resolution is always a solution that both parties can accept, because sustainable resolution requires mutual satisfaction.\""
    ]
  },

  "EI109": {
    id: "EI109",
    code: "EI:109",
    name: "Explain the nature of office politics",
    definition: "Describe informal power dynamics.",
    keyPoints: [
      "Decision Influence: Office politics influences decision-making in ways that formal structures don't always reflect.",
      "Culture Shaping: Political dynamics shape organizational culture and norms over time.",
      "Awareness Requirement: Understanding office politics requires awareness of informal power structures.",
      "Universal Presence: Political dynamics exist in every organization regardless of size or culture.",
      "Professional Navigation: Navigating office politics effectively requires consistent professionalism."
    ],
    roleplayTips: [
      "\"Understanding office politics doesn't mean participating in negativity—it means being aware of how decisions actually get made.\"",
      "\"I navigate political dynamics by focusing on building genuine relationships and delivering strong results rather than playing games.\"",
      "\"Awareness of informal power structures helps me communicate more effectively and avoid unintentional missteps.\""
    ]
  },

  "EI095": {
    id: "EI095",
    code: "EI:095",
    name: "Overcome problems associated with office politics",
    definition: "Navigate workplace dynamics effectively.",
    keyPoints: [
      "Professionalism Maintenance: Overcoming political problems requires consistently maintaining professionalism.",
      "Open Communication: Communicating openly and directly reduces the impact of political manipulation.",
      "Goal Focus: Keeping focus on organizational goals rather than personal agendas helps navigate politics.",
      "Broad Relationship Building: Building relationships across the organization provides multiple sources of support.",
      "Side Avoidance: Avoiding unnecessary partisan positioning preserves flexibility and broad relationships."
    ],
    roleplayTips: [
      "\"When I face political challenges at work, I focus on delivering results and maintaining my integrity rather than getting drawn into conflict.\"",
      "\"Building strong relationships across the organization gives me allies and support regardless of political dynamics.\"",
      "\"The best defense against negative office politics is consistently excellent performance and a reputation for fairness and professionalism.\""
    ]
  },

  "EI028": {
    id: "EI028",
    code: "EI:028",
    name: "Explain the nature of stress management",
    definition: "Describe techniques to manage stress.",
    keyPoints: [
      "Time Management: Effective time management is one of the most powerful stress reduction tools.",
      "Healthy Coping: Using healthy coping strategies prevents the physical and mental harm of chronic stress.",
      "Work-Life Balance: Maintaining appropriate work-life balance is essential for sustainable performance.",
      "Performance Impact: Unmanaged stress negatively affects performance and health over time.",
      "Prevention Priority: Preventing stress through proactive management is better than managing a crisis."
    ],
    roleplayTips: [
      "\"I manage stress proactively by staying organized, prioritizing tasks, and making sure I maintain balance between work and personal time.\"",
      "\"When stress increases, I recognize it early and use healthy strategies like exercise and planning to address it before it becomes overwhelming.\"",
      "\"Effective stress management is a professional skill—it keeps me performing at a high level even during demanding periods.\""
    ]
  },

  "EI045": {
    id: "EI045",
    code: "EI:045",
    name: "Participate as a team member",
    definition: "Contribute positively to team efforts.",
    keyPoints: [
      "Responsibility Sharing: Participating effectively means accepting and fulfilling shared team responsibilities.",
      "Mutual Support: Supporting other team members contributes to collective success.",
      "Effective Communication: Communicating clearly and consistently is essential for effective team participation.",
      "Individual Contribution: Team success requires meaningful individual contribution from every member.",
      "Decision Respect: Respecting team decisions, even when they differ from personal preferences, demonstrates maturity."
    ],
    roleplayTips: [
      "\"I focus on what I can contribute to the team rather than waiting for others to take the lead.\"",
      "\"Being a strong team member means supporting my colleagues' efforts, not just completing my own assignments.\"",
      "\"I respect team decisions even when I disagree with them, because I understand that unity and follow-through are more important than winning arguments.\""
    ]
  },

  "EI011": {
    id: "EI011",
    code: "EI:011",
    name: "Use consensus-building skills",
    definition: "Reach group agreement collaboratively.",
    keyPoints: [
      "Participation Encouragement: Building consensus requires actively encouraging all voices to contribute.",
      "Opinion Respect: Respecting different opinions, even when they differ from one's own, builds consensus.",
      "Goal Alignment: Aligning diverse perspectives around shared goals is the foundation of consensus.",
      "Buy-In Increase: Consensus decisions increase buy-in and commitment from all participants.",
      "Patience Requirement: Building genuine consensus requires patience and flexibility from all involved."
    ],
    roleplayTips: [
      "\"I use consensus-building by ensuring everyone has a chance to voice their perspective before we move toward a decision.\"",
      "\"When group members disagree, I help find common ground by focusing the discussion on shared goals rather than differences.\"",
      "\"Consensus takes longer than a unilateral decision, but the buy-in it creates leads to much stronger implementation.\""
    ]
  },

  "EI059": {
    id: "EI059",
    code: "EI:059",
    name: "Motivate team members",
    definition: "Encourage others to perform at their best.",
    keyPoints: [
      "Encouragement Provision: Motivating team members requires providing consistent encouragement and positive reinforcement.",
      "Effort Recognition: Recognizing individual efforts and contributions fuels continued high performance.",
      "Morale Building: Strong motivation builds morale and creates a more engaged, productive team.",
      "Productivity Increase: Motivated team members are consistently more productive and innovative.",
      "Individual Tailoring: Effective motivation requires tailoring the approach to each individual's needs and preferences."
    ],
    roleplayTips: [
      "\"I motivate my team by genuinely recognizing their efforts and helping them see how their work connects to bigger goals.\"",
      "\"I try to understand what drives each person on my team so I can provide the kind of support and recognition that matters most to them.\"",
      "\"The most effective motivation comes from creating an environment where people feel valued, capable, and connected to meaningful work.\""
    ]
  },

  "EI009": {
    id: "EI009",
    code: "EI:009",
    name: "Explain the concept of leadership",
    definition: "Influence others to achieve goals.",
    keyPoints: [
      "Vision and Direction: Leadership involves providing clear vision and direction that others can follow.",
      "Communication: Effective leaders communicate clearly and inspire action through their words and behavior.",
      "Accountability: Leaders hold themselves and others accountable for results and ethical behavior.",
      "Management Distinction: Leadership differs from management—leaders inspire while managers coordinate.",
      "Inspiration Function: Leaders inspire people to achieve more than they thought possible."
    ],
    roleplayTips: [
      "\"Leadership to me means having a clear vision and communicating it in a way that inspires others to commit to it.\"",
      "\"Effective leadership requires accountability—holding myself to the same standards I hold my team to.\"",
      "\"I distinguish between managing tasks and leading people—both matter, but leadership is about inspiring commitment, not just directing work.\""
    ]
  },

  "EI131": {
    id: "EI131",
    code: "EI:131",
    name: "Explain the nature of ethical leadership",
    definition: "Lead using integrity and fairness.",
    keyPoints: [
      "Ethical Modeling: Ethical leadership requires consistently modeling ethical behavior for the team.",
      "Trust Building: Leading ethically builds the trust that enables authentic leadership.",
      "Accountability Promotion: Ethical leaders promote a culture of accountability throughout the organization.",
      "Culture Setting: Ethical leaders set the tone for the entire organizational culture through their behavior.",
      "Consistency Essentiality: Consistent ethical behavior is essential—leaders who are ethical only sometimes undermine trust."
    ],
    roleplayTips: [
      "\"I understand that ethical leadership means my team is always watching how I handle difficult situations—I have to model the behavior I want to see.\"",
      "\"Ethical leadership isn't just about making the right call in a crisis—it's about consistently doing the right thing in ordinary decisions.\"",
      "\"The trust I build through ethical leadership enables me to have difficult conversations and lead through change more effectively.\""
    ]
  },

  "EI132": {
    id: "EI132",
    code: "EI:132",
    name: "Model ethical behavior",
    definition: "Demonstrate ethics through actions.",
    keyPoints: [
      "Example Setting: Modeling ethical behavior means deliberately setting an example for others to follow.",
      "Value Reinforcement: Consistent ethical behavior reinforces the values of the team and organization.",
      "Compliance Encouragement: Leaders who model ethics encourage others to comply with ethical standards.",
      "Action Priority: In ethical leadership, actions speak louder than words or stated values.",
      "Observation Awareness: Leaders are always observed, making consistent modeling critically important."
    ],
    roleplayTips: [
      "\"I know that my team pays more attention to what I do than what I say, so I make sure my actions consistently reflect our values.\"",
      "\"Modeling ethical behavior means I apply the same standards to myself that I expect from everyone else.\"",
      "\"The most powerful way to build an ethical culture is to consistently demonstrate ethical behavior in my own decisions and actions.\""
    ]
  },

  "EI063": {
    id: "EI063",
    code: "EI:063",
    name: "Determine personal vision",
    definition: "Define personal leadership goals.",
    keyPoints: [
      "Decision Guidance: A personal vision guides daily decisions and priorities toward long-term goals.",
      "Action Motivation: A clear personal vision motivates intentional action and sustained effort.",
      "Value Alignment: Personal vision aligns professional goals with personal values for authentic leadership.",
      "Direction Provision: Vision provides direction that prevents reactive rather than purposeful career development.",
      "Iterative Refinement: Personal vision should be revisited and refined as experiences and goals evolve."
    ],
    roleplayTips: [
      "\"I've developed a clear personal vision for the kind of leader and professional I want to become, and I use it to guide my decisions.\"",
      "\"My personal vision keeps me focused on long-term goals when short-term pressures could push me off course.\"",
      "\"Having a clear vision of where I'm headed helps me evaluate opportunities and make choices that move me in the right direction.\""
    ]
  },

  "EI133": {
    id: "EI133",
    code: "EI:133",
    name: "Inspire others",
    definition: "Motivate others toward success.",
    keyPoints: [
      "Vision Sharing: Inspiring others requires sharing a compelling vision they can connect to and believe in.",
      "Confidence Encouragement: Inspiring leaders encourage others' confidence in their own abilities.",
      "Commitment Building: Inspiration builds genuine commitment rather than mere compliance.",
      "Authenticity Source: Inspiration comes from authenticity—people can tell when enthusiasm is genuine.",
      "Story Resonance: Stories and concrete examples are among the most powerful tools for inspiring others."
    ],
    roleplayTips: [
      "\"I inspire my team by connecting our work to a bigger purpose that gives it meaning beyond just completing tasks.\"",
      "\"The most inspiring thing I can do is genuinely believe in my team's potential and communicate that belief clearly and consistently.\"",
      "\"Stories of people overcoming challenges and achieving goals are my most powerful tool for inspiring others to believe in what's possible.\""
    ]
  },

  "EI006": {
    id: "EI006",
    code: "EI:006",
    name: "Demonstrate adaptability",
    definition: "Adjust leadership style to situations.",
    keyPoints: [
      "Change Response: Demonstrating adaptability means responding flexibly when circumstances change.",
      "Flexibility Maintenance: Remaining flexible about methods while staying committed to goals enables adaptation.",
      "Innovation Support: Adaptable leaders support innovation by remaining open to new approaches.",
      "Competitive Advantage: Adaptability is a significant competitive advantage in rapidly changing environments.",
      "Relevance Maintenance: Rigid leaders lose relevance—adaptability keeps leadership effective over time."
    ],
    roleplayTips: [
      "\"I adapt my leadership approach based on the situation and the needs of the team rather than applying a one-size-fits-all style.\"",
      "\"When unexpected changes occur, I see them as opportunities to demonstrate adaptability and help my team navigate the transition.\"",
      "\"Adaptability is a skill I consciously develop because I know the business environment will continue to change faster than ever.\""
    ]
  },

  "EI027": {
    id: "EI027",
    code: "EI:027",
    name: "Develop an achievement orientation",
    definition: "Focus on accomplishing goals.",
    keyPoints: [
      "High Standards: Developing an achievement orientation means setting high performance standards for oneself.",
      "Progress Tracking: Tracking progress toward goals maintains motivation and identifies needed adjustments.",
      "Improvement Pursuit: An achievement orientation drives continuous pursuit of excellence and improvement.",
      "Excellence Drive: Achievement orientation pushes individuals and teams to excel beyond average performance.",
      "Self and Team Application: Achievement orientation applies to both personal performance and team leadership."
    ],
    roleplayTips: [
      "\"I set high standards for my work and track my progress toward specific goals rather than just hoping things turn out well.\"",
      "\"An achievement orientation means I'm always looking for ways to improve my performance, not just maintain it.\"",
      "\"I try to bring an achievement orientation to everything I do because I believe continuous improvement is what separates good from great.\""
    ]
  },

  "EI134": {
    id: "EI134",
    code: "EI:134",
    name: "Challenge the status quo",
    definition: "Question existing practices.",
    keyPoints: [
      "Innovation Encouragement: Challenging the status quo encourages the innovation needed to stay competitive.",
      "Efficiency Improvement: Questioning existing practices can reveal opportunities to improve efficiency.",
      "Change Driving: Leaders who challenge the status quo drive meaningful organizational change.",
      "Evaluation Requirement: Not all change is good—effective challenge requires careful evaluation of alternatives.",
      "Stability Balance: Leaders must balance the need for change with organizational stability and continuity."
    ],
    roleplayTips: [
      "\"I ask 'why do we do it this way?' not to be difficult, but because understanding the reason helps me improve the process.\"",
      "\"Challenging the status quo is how I contribute to innovation—I look for processes and assumptions that could be improved.\"",
      "\"I balance pushing for change with recognizing what's working well—not everything should be challenged, but nothing should be sacred.\""
    ]
  },

  "EI005": {
    id: "EI005",
    code: "EI:005",
    name: "Lead change",
    definition: "Guide others through transitions.",
    keyPoints: [
      "Purpose Communication: Leading change requires clearly communicating the purpose and vision behind the change.",
      "Support Provision: Effective change leaders provide support to help others navigate the transition.",
      "Resistance Management: Managing resistance to change is a critical leadership skill during transitions.",
      "Empathy Requirement: Change leadership requires empathy for those experiencing disruption and uncertainty.",
      "Anxiety Reduction: Clear vision and communication reduce the anxiety that change typically creates."
    ],
    roleplayTips: [
      "\"When leading change, I focus on explaining the 'why' clearly so my team understands the purpose, not just the direction.\"",
      "\"I acknowledge that change is difficult and provide support to help my team adapt rather than just expecting immediate compliance.\"",
      "\"Effective change leadership means being both visionary about the destination and empathetic about the journey.\""
    ]
  },

  "EI060": {
    id: "EI060",
    code: "EI:060",
    name: "Enlist others in working toward a shared vision",
    definition: "Unite people around common goals.",
    keyPoints: [
      "Effort Alignment: Enlisting others requires aligning their individual efforts with the shared vision.",
      "Commitment Building: Building genuine commitment to a shared vision rather than mere compliance is the goal.",
      "Collaboration Fostering: A shared vision fosters deeper collaboration by giving everyone a common purpose.",
      "Unity Creation: Shared vision creates organizational unity that makes the whole greater than the sum of parts.",
      "Co-Creation Value: People support what they help create—involving others in vision development increases buy-in."
    ],
    roleplayTips: [
      "\"I enlist others by making sure they see how the shared vision connects to their own goals and values.\"",
      "\"When I involve people in shaping the vision rather than just announcing it, I get much stronger commitment and creative contribution.\"",
      "\"A shared vision is the most powerful alignment tool I have—when everyone knows where we're going and why, coordination becomes much easier.\""
    ]
  },

  "EI041": {
    id: "EI041",
    code: "EI:041",
    name: "Coach others",
    definition: "Support others' development.",
    keyPoints: [
      "Guidance Provision: Coaching means providing guidance that helps others develop their own capabilities.",
      "Feedback Offering: Offering constructive feedback is a central tool of effective coaching.",
      "Growth Encouragement: Coaching encourages sustained growth and development in others.",
      "Coaching Distinction: Coaching differs from directing—coaches develop capability, directors assign tasks.",
      "Long-Term Investment: Investing in coaching produces long-term returns in team capability and performance."
    ],
    roleplayTips: [
      "\"When I coach team members, I ask questions that help them discover solutions rather than just giving them the answers.\"",
      "\"I treat coaching as an investment in the team's long-term capability, not just a quick fix for immediate performance issues.\"",
      "\"Effective coaching means being honest about areas for improvement while remaining genuinely supportive of the person's growth.\""
    ]
  },

  "EI135": {
    id: "EI135",
    code: "EI:135",
    name: "Use power appropriately",
    definition: "Apply authority responsibly.",
    keyPoints: [
      "Misuse Avoidance: Using power appropriately means strictly avoiding misuse for personal gain or advantage.",
      "Empowerment of Others: Leaders who use power well empower others rather than concentrating authority.",
      "Fairness Maintenance: Maintaining fairness in the exercise of power is essential for leadership credibility.",
      "Tool Function: Power is a tool for achieving goals, not a reward or entitlement.",
      "Trust Destruction: Misused power rapidly destroys trust and undermines leadership effectiveness."
    ],
    roleplayTips: [
      "\"I use my authority to create conditions where my team can do their best work, not to assert control or personal advantage.\"",
      "\"Appropriate use of power means empowering the people I lead to make decisions and take ownership of their work.\"",
      "\"I'm aware that even well-intentioned misuse of power erodes trust—so I'm deliberate about how and when I exercise authority.\""
    ]
  },

  "EI014": {
    id: "EI014",
    code: "EI:014",
    name: "Recognize/reward others for contributions",
    definition: "Acknowledge performance and effort.",
    keyPoints: [
      "Motivation Boosting: Recognizing contributions boosts motivation and reinforces high performance.",
      "Behavior Reinforcement: Timely recognition reinforces the specific behaviors that led to the contribution.",
      "Morale Building: Regular recognition builds team morale and creates a more positive work environment.",
      "Low Cost High Impact: Recognition costs little in resources but means a great deal to recipients.",
      "Timeliness Importance: Recognition is most effective when delivered promptly after the contribution."
    ],
    roleplayTips: [
      "\"I make it a priority to recognize my team members' contributions specifically and publicly because I know how motivating that is.\"",
      "\"Recognizing people for their efforts, not just their results, reinforces the behaviors and habits that lead to consistent performance.\"",
      "\"Timely, specific recognition is one of the most powerful tools I have as a leader—and it costs nothing but attention.\""
    ]
  },

  "EI036": {
    id: "EI036",
    code: "EI:036",
    name: "Treat others with dignity and respect",
    definition: "Show courtesy and professionalism.",
    keyPoints: [
      "Difference Valuing: Treating others with dignity means valuing differences rather than judging them.",
      "Respect Maintenance: Maintaining respect in all interactions, even difficult ones, defines character.",
      "Trust Building: Consistent respect builds the trust that makes all professional relationships more effective.",
      "Non-Negotiable Standard: Dignity in treatment of others is a non-negotiable ethical standard.",
      "Communication Enablement: Mutual respect enables the open communication that makes teams and organizations work."
    ],
    roleplayTips: [
      "\"I believe everyone deserves to be treated with dignity, regardless of their role or position—it's a basic standard I hold for myself.\"",
      "\"Treating others with respect isn't just good manners—it's the foundation of the trust that makes professional relationships productive.\"",
      "\"Even in difficult conversations or disagreements, I maintain respect for the person because the relationship matters beyond any single issue.\""
    ]
  },

  "EI037": {
    id: "EI037",
    code: "EI:037",
    name: "Foster positive working relationships",
    definition: "Build cooperative interactions.",
    keyPoints: [
      "Open Communication: Fostering positive relationships requires communicating openly and honestly.",
      "Teamwork Support: Supporting others' work actively builds the cooperative relationships that improve outcomes.",
      "Issue Resolution: Addressing relationship issues promptly prevents them from eroding collaboration.",
      "Productivity Improvement: Positive working relationships directly improve team productivity and performance.",
      "Long-Term Investment: Investment in professional relationships pays long-term dividends in trust and cooperation."
    ],
    roleplayTips: [
      "\"I invest in building genuine relationships with my colleagues because I know they're the foundation of effective teamwork.\"",
      "\"When I notice tension in a working relationship, I address it directly and early rather than letting it fester.\"",
      "\"Positive working relationships make work more enjoyable and more effective—it's an investment that pays off in every project.\""
    ]
  },

  "EI136": {
    id: "EI136",
    code: "EI:136",
    name: "Consider conflicting viewpoints",
    definition: "Acknowledge differing opinions.",
    keyPoints: [
      "Decision Improvement: Considering conflicting viewpoints improves decision quality by revealing blind spots.",
      "Conflict Reduction: Acknowledging different perspectives reduces interpersonal conflict.",
      "Collaboration Encouragement: Openly considering diverse views encourages more collaborative problem-solving.",
      "Outcome Strengthening: Decisions informed by diverse perspectives are more robust and widely supported.",
      "Resentment Prevention: Dismissing perspectives creates resentment that undermines team cohesion."
    ],
    roleplayTips: [
      "\"I actively seek out perspectives that differ from mine because I know my view is never the complete picture.\"",
      "\"When someone challenges my idea, I see it as an opportunity to stress-test my thinking rather than a personal attack.\"",
      "\"Considering conflicting viewpoints before making decisions consistently leads to better outcomes and broader support.\""
    ]
  },

  "EI137": {
    id: "EI137",
    code: "EI:137",
    name: "Assess long-term impact of actions on others",
    definition: "Evaluate consequences of decisions.",
    keyPoints: [
      "Relationship Consideration: Assessing long-term impact means considering effects on professional relationships.",
      "Sustainability Promotion: Long-term thinking promotes more sustainable decisions and practices.",
      "Trust Building: Demonstrating concern for the long-term impact of decisions builds stakeholder trust.",
      "Compounding Effects: Short-term decisions have long-term effects that must be considered in advance.",
      "Stakeholder Thinking: Thinking about stakeholder impact improves the quality of outcomes for all parties."
    ],
    roleplayTips: [
      "\"Before I act on a decision, I think through how it will affect my colleagues and stakeholders over the long term, not just immediately.\"",
      "\"I've learned that decisions that seem beneficial in the short term often have negative long-term consequences that are worth anticipating.\"",
      "\"Assessing long-term impact is how I make decisions I can be proud of, not just decisions that solve the immediate problem.\""
    ]
  },

  "EI061": {
    id: "EI061",
    code: "EI:061",
    name: "Maintain collaborative partnerships",
    definition: "Sustain cooperative relationships.",
    keyPoints: [
      "Regular Communication: Maintaining partnerships requires regular, proactive communication with partners.",
      "Goal Sharing: Sharing goals and aligning efforts keeps partnerships productive over time.",
      "Success Support: Actively supporting partners' success strengthens the relationship.",
      "Reciprocal Investment: Partnerships require reciprocal investment from both parties to remain healthy.",
      "Trust Enablement: Deep trust enables deeper collaboration and more ambitious joint efforts."
    ],
    roleplayTips: [
      "\"I maintain collaborative partnerships by checking in regularly and looking for ways to add value to the relationship.\"",
      "\"Strong partnerships are built on mutual trust and a genuine interest in each other's success—not just transactional exchange.\"",
      "\"I invest in my partnerships during calm periods so the relationship is strong when we need to rely on each other most.\""
    ]
  },

  "EI034": {
    id: "EI034",
    code: "EI:034",
    name: "Explain impact of political relationships in an organization",
    definition: "Describe influence of internal alliances.",
    keyPoints: [
      "Decision Influence: Political relationships influence how decisions are made and who has input.",
      "Culture Shaping: Internal alliances shape organizational culture and informal norms.",
      "Awareness Requirement: Navigating political relationships requires awareness of informal power structures.",
      "Capital Dynamics: Political capital can be built or lost quickly through behavior and decisions.",
      "Professional Navigation: Navigating political relationships effectively requires consistent professionalism."
    ],
    roleplayTips: [
      "\"I pay attention to political relationships in my organization because they affect how decisions actually get made.\"",
      "\"Understanding the informal influence structure helps me communicate more effectively and anticipate how proposals will be received.\"",
      "\"I build political capital by delivering results and treating everyone with respect—that's a foundation that holds even when politics gets complicated.\""
    ]
  },

  "EI064": {
    id: "EI064",
    code: "EI:064",
    name: "Explain the nature of organizational culture",
    definition: "Describe shared values and norms.",
    keyPoints: [
      "Behavior Guidance: Organizational culture guides how employees behave and make decisions.",
      "Morale Influence: Culture significantly influences employee morale and engagement.",
      "Performance Effect: Strong, positive culture improves organizational performance.",
      "Top-Down Setting: Culture is primarily set and modeled from the top of the organization.",
      "Intentional Change: Changing organizational culture requires deliberate and sustained intentional effort."
    ],
    roleplayTips: [
      "\"I understand that organizational culture shapes behavior more powerfully than any policy document—it's the 'how we do things here.'\"",
      "\"I contribute to building a positive culture by consistently modeling the values and behaviors I want to see in others.\"",
      "\"Understanding the culture I'm entering helps me adapt quickly and contribute effectively from my first days in a new role.\""
    ]
  },

  "EI112": {
    id: "EI112",
    code: "EI:112",
    name: "Interpret and adapt to a business's culture",
    definition: "Adjust behavior to fit organizational norms.",
    keyPoints: [
      "Expectation Observation: Interpreting culture requires observing how expectations are communicated and enforced.",
      "Action Alignment: Aligning behavior with cultural norms improves integration and effectiveness.",
      "Integration Improvement: Cultural adaptation accelerates integration into a new team or organization.",
      "Career Impact: Cultural fit significantly affects career success and advancement.",
      "Value Preservation: Adapting to culture does not mean abandoning one's core values."
    ],
    roleplayTips: [
      "\"When I join a new organization, I pay close attention to the unwritten rules and norms that define how things really work.\"",
      "\"I adapt my communication and work style to fit the culture while staying true to my core values and ethical standards.\"",
      "\"Understanding the culture allows me to contribute more effectively from the start by working within the norms, not against them.\""
    ]
  },

  "HR410": {
    id: "HR410",
    code: "HR:410",
    name: "Discuss the nature of human resources management",
    definition: "Describe the function responsible for recruiting, developing, managing, and retaining an organization's workforce to achieve strategic goals.",
    keyPoints: [
      "HRM Functions: Core HR functions include recruitment, selection, training, compensation, performance management, and employee relations.",
      "Strategic Role: Modern HRM is a strategic partner—aligning workforce capabilities with organizational strategy, not just administering policies.",
      "Legal Framework: HR professionals must navigate employment law including anti-discrimination, wage, safety, and labor relations statutes.",
      "Talent Lifecycle: HRM manages the full employee lifecycle from job analysis and hiring through development, retention, and separation.",
      "Organizational Culture: HR shapes culture through the policies, practices, and norms it designs and enforces."
    ],
    roleplayTips: [
      "\"Human resources management is fundamentally about optimizing the organization's most valuable asset—its people—for strategic outcomes.\"",
      "\"Effective HRM aligns people strategy with business strategy—we hire, develop, and deploy talent based on where the organization needs to go.\"",
      "\"HR's legal compliance function is critical—employment law violations expose the organization to significant financial and reputational liability.\""
    ]
  },
  "HR411": {
    id: "HR411",
    code: "HR:411",
    name: "Explain the role of ethics in human resources management",
    definition: "Describe how ethical principles—fairness, confidentiality, non-discrimination, and transparency—must guide all HR decisions and practices.",
    keyPoints: [
      "Fairness Obligation: HR professionals must apply consistent, equitable standards in hiring, compensation, promotion, and discipline.",
      "Confidentiality: Sensitive employee information—health data, performance records, compensation—must be protected with strict discretion.",
      "Non-Discrimination: Ethical HR practice prohibits discrimination based on protected characteristics in all employment decisions.",
      "Transparency: Communicating openly about policies, decisions, and expectations builds employee trust in the HR function.",
      "Dual Accountability: HR serves both the organization and its employees—managing that dual obligation requires ongoing ethical judgment."
    ],
    roleplayTips: [
      "\"HR ethics begins with fairness—every employment decision must be defensible on consistent, objective criteria free from bias or favoritism.\"",
      "\"I treat employee information as confidential by default—sharing it only with those who have a legitimate business need to know.\"",
      "\"The dual accountability of HR—serving both organizational and employee interests—requires constant ethical calibration to avoid serving one at the expense of the other.\""
    ]
  },
  "HR412": {
    id: "HR412",
    code: "HR:412",
    name: "Describe the use of technology in human resources management",
    definition: "Explain how HR information systems, analytics, automation, and AI tools are transforming workforce management practices.",
    keyPoints: [
      "HRIS Platforms: Human Resource Information Systems centralize employee data and automate administrative HR processes.",
      "Recruiting Technology: Applicant tracking systems, AI screening tools, and digital interviewing platforms streamline talent acquisition.",
      "Learning Management: LMS platforms deliver, track, and analyze employee training and development at scale.",
      "People Analytics: Data analysis of workforce metrics enables evidence-based decisions about hiring, retention, and development.",
      "Self-Service Tools: Employee portals that allow individuals to manage benefits, time-off, and personal information reduce administrative burden on HR staff."
    ],
    roleplayTips: [
      "\"Our HRIS gives us real-time visibility into workforce metrics—turnover, time-to-fill, training completion—that inform strategic HR decisions.\"",
      "\"People analytics transforms HR from intuition-driven to evidence-based—we can now predict attrition risk and intervene before valued employees leave.\"",
      "\"Technology automates HR administration so our team can focus on the high-value work that requires human judgment—coaching, culture-building, and strategic partnership.\""
    ]
  },
  "HR360": {
    id: "HR360",
    code: "HR:360",
    name: "Orient new employees",
    definition: "Design and deliver an onboarding experience that helps new hires understand the organization, their role, and expectations so they can contribute effectively.",
    keyPoints: [
      "Onboarding vs. Orientation: Orientation covers immediate logistics; onboarding is the broader process of integrating a new hire into the organization.",
      "Role Clarity: New employees need clear understanding of their responsibilities, performance expectations, and success metrics.",
      "Culture Immersion: Effective onboarding conveys organizational values, norms, and culture through direct exposure and storytelling.",
      "Social Integration: Connecting new employees with key colleagues accelerates both productivity and engagement.",
      "Extended Onboarding: Research shows that effective onboarding extends for 90 days or longer—not just the first day or week."
    ],
    roleplayTips: [
      "\"Effective onboarding accelerates time-to-productivity and dramatically improves first-year retention—it's one of the highest-ROI HR investments.\"",
      "\"I structure onboarding with clear milestones at 30, 60, and 90 days—checking progress and addressing gaps before they become performance issues.\"",
      "\"The goal of onboarding isn't just transmitting information—it's helping the new employee feel welcomed, capable, and committed to the organization.\""
    ]
  },

  "MK001": {
    id: "MK001",
    code: "MK:001",
    name: "Explain marketing and its importance in a global economy",
    definition: "Describe marketing as the process of creating, communicating, and delivering value to customers.",
    keyPoints: [
      "Customer Connection: Marketing connects businesses with customers by identifying and communicating value.",
      "Economic Growth: Marketing supports economic growth and competition in both domestic and global markets.",
      "Global Trade: Marketing enables global trade and brand expansion across international markets.",
      "Revenue Driver: Effective marketing drives revenue and sustains business growth.",
      "Competitive Advantage: Effective marketing creates competitive advantage in crowded markets."
    ],
    roleplayTips: [
      "\"Marketing is how we communicate the value of our products to customers—without it, even the best products go unnoticed in the marketplace.\"",
      "\"In a global economy, marketing enables businesses of all sizes to reach customers across borders and compete for international market share.\"",
      "\"I see marketing as the engine of economic growth—it creates the demand that drives production, employment, and business expansion.\""
    ]
  },

  "MK002": {
    id: "MK002",
    code: "MK:002",
    name: "Describe marketing functions and related activities",
    definition: "Explain key activities involved in marketing products and services.",
    keyPoints: [
      "Product Development: Product development is one of the seven core marketing functions.",
      "Pricing Strategies: Setting effective pricing strategies is essential to marketing success.",
      "Promotion and Distribution: Promotion and distribution work together to connect products with customers.",
      "Interdependence: All marketing functions are interdependent and must be coordinated effectively.",
      "Value Delivery: All seven marketing functions work together to support value delivery to customers."
    ],
    roleplayTips: [
      "\"Understanding all seven marketing functions helps me see how decisions in one area—like pricing—ripple across promotion, distribution, and sales.\"",
      "\"The marketing functions are like gears in a system—each one must work properly and in coordination with the others for the whole machine to run.\"",
      "\"Every marketing activity I perform connects to one of the seven core functions, which helps me understand how my work contributes to the bigger picture.\""
    ]
  },

  "MK014": {
    id: "MK014",
    code: "MK:014",
    name: "Explain factors that influence customer/client/business buying behavior",
    definition: "Describe internal and external factors that affect purchasing decisions.",
    keyPoints: [
      "Cultural Influences: Cultural, social, and personal influences shape buying behavior in significant ways.",
      "Psychological Factors: Psychological factors including motivation and perception affect purchasing decisions.",
      "Economic Conditions: Economic conditions influence what, when, and how much customers buy.",
      "Behavior Understanding: Understanding buying behavior improves targeting and marketing effectiveness.",
      "Rational Limits: Buying decisions are rarely purely rational—emotions and social factors play major roles."
    ],
    roleplayTips: [
      "\"Understanding what motivates a customer to buy helps me tailor our messaging to speak directly to their needs and decision-making process.\"",
      "\"I consider cultural and social influences when developing marketing campaigns because they shape how customers perceive and respond to our brand.\"",
      "\"Buying behavior analysis tells me why customers choose us over competitors, which is essential knowledge for refining our marketing strategy.\""
    ]
  },

  "MK015": {
    id: "MK015",
    code: "MK:015",
    name: "Discuss actions employees can take to achieve the company's desired results",
    definition: "Identify behaviors employees use to support marketing objectives.",
    keyPoints: [
      "Customer Service: Delivering strong customer service directly supports marketing goals and brand reputation.",
      "Accurate Promotion: Promoting products accurately reflects the company's values and builds customer trust.",
      "Brand Standards: Following brand standards ensures consistent customer experience across all touchpoints.",
      "Employee Behavior: Employee behavior shapes customer perception and reinforces marketing messages.",
      "Message Consistency: Consistency in employee behavior reinforces marketing messages and brand identity."
    ],
    roleplayTips: [
      "\"Every interaction I have with a customer is a marketing moment—my behavior either reinforces or undermines our brand's promises.\"",
      "\"I make sure I represent our products accurately because misleading customers damages trust and contradicts our marketing goals.\"",
      "\"Following brand standards isn't just policy compliance—it's how I personally contribute to the company's marketing effectiveness.\""
    ]
  },

  "MK019": {
    id: "MK019",
    code: "MK:019",
    name: "Demonstrate connections between company actions and results",
    definition: "Show how business decisions impact outcomes such as sales and market share.",
    keyPoints: [
      "Advertising Impact: Advertising decisions influence customer buying behavior and purchase frequency.",
      "Quality and Loyalty: Product quality decisions directly affect customer loyalty and retention rates.",
      "Branding Trust: Consistent branding across all touchpoints builds long-term customer trust.",
      "Measurable Consequences: Business actions have measurable consequences on sales and market position.",
      "Cause-and-Effect Thinking: Cause-and-effect thinking improves decision-making and accountability."
    ],
    roleplayTips: [
      "\"When I understand how my actions connect to business results, I make better decisions because I can see the downstream impact.\"",
      "\"Consistent branding in everything from our packaging to our customer service creates the trust that translates into long-term sales.\"",
      "\"I think in cause-and-effect terms—every decision I make either moves us toward or away from our business goals.\""
    ]
  },

  "EN039": {
    id: "EN039",
    code: "EN:039",
    name: "Describe the nature of entrepreneurship",
    definition: "Explain entrepreneurship as the process of identifying opportunities, accepting risk, and creating new ventures to generate value.",
    keyPoints: [
      "Opportunity Recognition: Entrepreneurs identify unmet needs or inefficiencies in the market and envision solutions.",
      "Risk Acceptance: Entrepreneurship involves accepting financial, professional, and personal risk in pursuit of potential rewards.",
      "Value Creation: Successful entrepreneurs create value for customers, employees, investors, and communities.",
      "Innovation Role: Entrepreneurs are primary drivers of innovation—introducing new products, services, and business models.",
      "Economic Contribution: Entrepreneurship generates new businesses, jobs, and economic dynamism in market economies."
    ],
    roleplayTips: [
      "\"Entrepreneurship is fundamentally about solving problems—the most successful entrepreneurs find real pain points and build sustainable solutions around them.\"",
      "\"The risk that entrepreneurs accept isn't recklessness—it's calculated risk taken in exchange for the opportunity to create something valuable.\"",
      "\"Entrepreneurial value creation extends beyond the entrepreneur—every successful venture creates jobs, serves customers, and contributes to the broader economy.\""
    ]
  },
  "EN040": {
    id: "EN040",
    code: "EN:040",
    name: "Explain the role requirements of entrepreneurs and owners",
    definition: "Describe the diverse responsibilities, competencies, and personal attributes required to successfully launch and operate a business.",
    keyPoints: [
      "Multifunctional Role: Entrepreneurs must manage marketing, operations, finance, HR, and strategy—especially in early stages.",
      "Leadership Requirement: Owners must attract, motivate, and retain employees while building a positive organizational culture.",
      "Financial Literacy: Managing cash flow, understanding financial statements, and securing capital are essential owner competencies.",
      "Decision-Making: Owners make consequential decisions with incomplete information under time pressure on a daily basis.",
      "Resilience: The entrepreneurial journey includes repeated setbacks—resilience and persistence are non-negotiable attributes."
    ],
    roleplayTips: [
      "\"Entrepreneurship requires wearing every hat in the early stages—understanding all business functions makes me a more effective founder and ultimately a better delegator.\"",
      "\"Cash flow management is the owner's most critical financial responsibility—running out of cash is the leading cause of small business failure regardless of revenue.\"",
      "\"The entrepreneurial mindset that builds a successful startup is different from the managerial mindset needed to scale it—knowing when to transition is a key owner responsibility.\""
    ]
  },
  "EN044": {
    id: "EN044",
    code: "EN:044",
    name: "Describe the use of business ethics in entrepreneurship",
    definition: "Explain how ethical principles guide entrepreneurial decision-making and contribute to sustainable business success.",
    keyPoints: [
      "Ethical Foundation: Building ethical practices into the business from the start is far easier than retrofitting them later.",
      "Stakeholder Commitment: Ethical entrepreneurs consider the impact of their decisions on customers, employees, suppliers, and communities.",
      "Trust as Asset: A reputation for ethical conduct is a competitive asset—it attracts customers, investors, and talent.",
      "Ethical Challenges: Entrepreneurs face unique ethical pressures—resource scarcity, competitive intensity, and investor expectations can create temptation.",
      "Long-Term Perspective: Short-term ethical compromises typically create long-term costs that far exceed any temporary benefit."
    ],
    roleplayTips: [
      "\"I build ethical standards into the founding documents and culture from day one—it's much harder to establish them after bad habits have formed.\"",
      "\"Ethical entrepreneurship isn't just morally right—it's strategically smart, because trust is the foundation of every customer, employee, and investor relationship.\"",
      "\"When entrepreneurial pressure tempts shortcuts, I ask whether this decision builds or erodes the long-term reputation I'm trying to create.\""
    ]
  },
  "EN041": {
    id: "EN041",
    code: "EN:041",
    name: "Describe small-business opportunities in international trade",
    definition: "Explain how small businesses can participate in global markets through exporting, importing, e-commerce, and international partnerships.",
    keyPoints: [
      "Export Opportunities: Small businesses can reach international customers directly through e-commerce and export programs.",
      "Importing: Sourcing products or materials internationally can reduce costs or provide access to goods unavailable domestically.",
      "Digital Access: E-commerce platforms have dramatically reduced the barriers to international sales for small businesses.",
      "Government Support: Export assistance programs, trade finance, and international trade centers help small businesses navigate global markets.",
      "Risk Considerations: Currency risk, cultural differences, payment terms, and regulatory compliance require careful management."
    ],
    roleplayTips: [
      "\"E-commerce has fundamentally changed international trade for small businesses—we can now sell globally without a physical international presence.\"",
      "\"Government export assistance programs provide market research, financing support, and trade contacts that small businesses couldn't access independently.\"",
      "\"International trade creates diversification benefits—exposure to multiple markets reduces dependence on any single economy's business cycle.\""
    ]
  },

  "SM001": {
    id: "SM001",
    code: "SM:001",
    name: "Explain the concept of management",
    definition: "Describe management as the process of planning, organizing, directing, and controlling resources to achieve organizational goals efficiently and effectively.",
    keyPoints: [
      "Four Functions: Planning, organizing, directing (leading), and controlling are the four classic management functions.",
      "Resource Coordination: Managers coordinate human, financial, physical, and informational resources toward common objectives.",
      "Efficiency vs. Effectiveness: Efficient management minimizes resource waste; effective management achieves the right outcomes.",
      "Levels of Management: Top, middle, and frontline management have different responsibilities and time horizons.",
      "Management vs. Leadership: Management focuses on systems and processes; leadership focuses on inspiring and aligning people."
    ],
    roleplayTips: [
      "\"Management is the discipline of achieving results through others—the manager's productivity is measured by the output of their team, not their individual effort.\"",
      "\"Effective management balances the four functions—planning without controlling produces intentions without results; controlling without planning produces reactive firefighting.\"",
      "\"The distinction between efficiency and effectiveness matters: an efficient manager does things right; an effective manager does the right things.\""
    ]
  },
  "SM100": {
    id: "SM100",
    code: "SM:100",
    name: "Explain factors that affect management",
    definition: "Describe internal and external forces—including organizational culture, technology, competition, and regulation—that shape how managers make decisions and lead teams.",
    keyPoints: [
      "Organizational Culture: The shared values and norms of an organization shape what management behaviors are effective and accepted.",
      "Technology: Digital tools, automation, and data analytics are transforming how managers plan, communicate, and evaluate performance.",
      "Competitive Environment: Market intensity and competitor behavior affect the urgency, risk tolerance, and innovation demands on managers.",
      "Regulatory Environment: Legal requirements constrain management decisions in areas including employment, safety, and environmental practice.",
      "Workforce Characteristics: Generational diversity, skill levels, and employee expectations shape appropriate management style and communication."
    ],
    roleplayTips: [
      "\"Effective managers adapt their approach to the environment—management style that works in a stable industry may fail in a rapidly disrupting one.\"",
      "\"Organizational culture is the most powerful invisible force on management effectiveness—it determines what behaviors are rewarded and what norms constrain decisions.\"",
      "\"Understanding the regulatory environment isn't just legal compliance—it shapes the boundaries within which all management decisions must operate.\""
    ]
  },
  "SM075": {
    id: "SM075",
    code: "SM:075",
    name: "Explain the nature of risk management",
    definition: "Describe the systematic process of identifying, assessing, and mitigating risks that could harm an organization's ability to achieve its objectives.",
    keyPoints: [
      "Risk Identification: Systematically cataloging all potential threats—operational, financial, legal, reputational—that could affect organizational performance.",
      "Risk Assessment: Evaluating each identified risk by probability of occurrence and magnitude of potential impact.",
      "Risk Response: For each significant risk, developing a strategy: avoid, transfer (insurance), mitigate, or accept.",
      "Risk Monitoring: Continuously tracking identified risks and scanning for new ones in a changing environment.",
      "Enterprise Risk Management: A holistic approach that integrates risk management across all organizational functions rather than siloing it."
    ],
    roleplayTips: [
      "\"Risk management isn't about eliminating risk—it's about making informed decisions about which risks to take and how to manage the ones you accept.\"",
      "\"We categorize risks by likelihood and impact, then focus mitigation resources on the quadrant with high probability and high consequences.\"",
      "\"The risks we don't identify are the ones that hurt us most—systematic, regular risk identification processes are more protective than reactive crisis response.\""
    ]
  },
  "SM076": {
    id: "SM076",
    code: "SM:076",
    name: "Conduct a risk assessment of an event",
    definition: "Apply a structured process to identify, evaluate, and plan responses to potential risks associated with a specific business event or project.",
    keyPoints: [
      "Event-Specific Risk Identification: Systematically identifying all risks specific to the event—venue, weather, safety, logistics, financial.",
      "Probability and Impact Matrix: Rating each risk by likelihood and consequence to determine relative priority.",
      "Mitigation Planning: Developing specific preventive and contingency actions for each significant identified risk.",
      "Responsibility Assignment: Assigning clear ownership for monitoring and responding to each identified risk.",
      "Documentation: Recording the risk assessment creates accountability and provides a reference for future event planning."
    ],
    roleplayTips: [
      "\"For our event, I've conducted a systematic risk assessment—I'll walk you through our top five identified risks, their probability and impact ratings, and our mitigation plans for each.\"",
      "\"A risk assessment isn't just about identifying what could go wrong—it's about building confidence that we've thought through contingencies and have plans ready.\"",
      "\"Our contingency plan for the highest-impact risk scenarios includes both preventive measures and response protocols—we're prepared for what we hope doesn't happen.\""
    ]
  },

  "FI058": {
    id: "FI058",
    code: "FI:058",
    name: "Explain forms of financial exchange",
    definition: "Describe methods used to complete financial transactions.",
    keyPoints: [
      "Payment Methods: Cash, credit, debit, and EFT are the primary forms of financial exchange in modern commerce.",
      "Convenience vs. Security: Convenience and security vary across different methods of financial exchange.",
      "Modern Commerce: Multiple forms of financial exchange are widely used in modern commerce.",
      "Digital Growth: Digital payments are growing rapidly as technology enables new transaction methods.",
      "Costs and Benefits: Each method of financial exchange has its own costs and benefits to consider."
    ],
    roleplayTips: [
      "I understand that different payment methods involve different trade-offs between convenience, security, and cost.",
      "When managing transactions, I consider which form of financial exchange best meets the customer's needs and the business's requirements.",
      "I stay current on digital payment trends because the forms of financial exchange are evolving rapidly in the modern economy."
    ]
  },

  "FI059": {
    id: "FI059",
    code: "FI:059",
    name: "Identify types of currency",
    definition: "Recognize different forms of money used in economies.",
    keyPoints: [
      "Coins and Notes: Coins and paper money are the most traditional forms of currency in use.",
      "Banknotes: Banknotes and government-backed instruments represent official legal tender.",
      "Legal Tender: Currency is accepted as legal tender for all debts and transactions.",
      "Trade Enablement: Currency enables trade by providing a commonly accepted medium of exchange.",
      "Digital Currency: Digital currency is an emerging form that is changing how transactions occur."
    ],
    roleplayTips: [
      "Understanding the different types of currency helps me manage financial transactions accurately and professionally.",
      "As digital currencies emerge, I stay informed because they represent a significant change in how money functions in the economy.",
      "Recognizing different forms of currency is foundational financial knowledge that applies in both personal and business contexts."
    ]
  },

  "FI060": {
    id: "FI060",
    code: "FI:060",
    name: "Describe functions of money",
    definition: "Explain how money is used in economic systems.",
    keyPoints: [
      "Medium of Exchange: Money serves as a medium of exchange, eliminating the inefficiency of barter.",
      "Unit of Measure: Money functions as a unit of measure, providing a common standard for pricing.",
      "Store of Value: Money serves as a store of value, allowing wealth to be saved and transferred over time.",
      "Specialization: Money facilitates economic specialization by enabling trade of diverse goods and services.",
      "Barter Alternative: Without money, barter would be required for every economic transaction."
    ],
    roleplayTips: [
      "Understanding the three functions of money helps me explain why financial systems are structured the way they are.",
      "Money as a store of value is particularly important in personal finance—it's what makes saving and investing possible.",
      "When I think about money's functions, I better understand the economic consequences of inflation and monetary policy."
    ]
  },

  "FI061": {
    id: "FI061",
    code: "FI:061",
    name: "Describe sources of income",
    definition: "Identify ways individuals earn money.",
    keyPoints: [
      "Wages and Salaries: Wages and salaries are the primary income source for most working individuals.",
      "Investment Income: Interest, rent, and dividends provide income from financial and physical assets.",
      "Transfer Payments: Transfer payments such as Social Security provide income outside of employment.",
      "Income Stability: Diversified income sources increase financial stability and security.",
      "Passive Income: Passive income from investments grows over time and reduces dependence on employment."
    ],
    roleplayTips: [
      "I understand that diversifying income sources reduces financial vulnerability and builds long-term security.",
      "Knowing the different sources of income helps me develop a complete financial plan that accounts for all earnings.",
      "Understanding investment income motivates me to save and invest because passive income grows wealth over time."
    ]
  },

  "FI062": {
    id: "FI062",
    code: "FI:062",
    name: "Explain the time value of money",
    definition: "Explain why money today is worth more than money in the future.",
    keyPoints: [
      "Inflation Effect: Inflation reduces purchasing power over time, making present money more valuable.",
      "Opportunity Cost: There is an opportunity cost to waiting—money today can be invested and grow.",
      "Saving Incentive: The time value of money encourages saving and investing for the future.",
      "Financial Calculations: The time value of money is the basis of all financial calculations and planning.",
      "Present vs. Future: Present value and future value differ in ways that must be understood for financial decisions."
    ],
    roleplayTips: [
      "The time value of money is the most important concept in personal finance—it explains why starting to save early makes such a dramatic difference.",
      "When evaluating financial decisions, I always consider the time value of money because a dollar today is not equal to a dollar tomorrow.",
      "Understanding present and future value calculations helps me make informed decisions about loans, investments, and savings."
    ]
  },

  "FI002": {
    id: "FI002",
    code: "FI:002",
    name: "Explain the purposes and importance of credit",
    definition: "Describe how credit allows future payment for current purchases.",
    keyPoints: [
      "Large Purchases: Credit enables large purchases that would otherwise require years of saving.",
      "Credit History: Using credit responsibly builds a credit history that supports future borrowing.",
      "Responsible Use: Credit must be used responsibly to avoid debt problems and financial damage.",
      "Economic Access: Access to credit enables economic participation and opportunity.",
      "Debt Risk: Misuse of credit leads to debt problems that can take years to resolve."
    ],
    roleplayTips: [
      "Credit is a powerful financial tool—when used wisely, it opens opportunities; when misused, it creates serious financial problems.",
      "I treat credit as a financial tool, not as extra income, because every borrowed dollar must be repaid with interest.",
      "Building a strong credit history through responsible use gives me access to better rates and opportunities when I need them."
    ]
  },

  "FI063": {
    id: "FI063",
    code: "FI:063",
    name: "Explain legal responsibilities associated with financial exchanges",
    definition: "Describe legal obligations in financial transactions.",
    keyPoints: [
      "Contract Honoring: Contracts and financial agreements must be honored as a legal obligation.",
      "Fraud Prevention: Financial fraud is illegal and carries serious criminal and civil penalties.",
      "Accurate Records: Accurate recordkeeping is required by law in most financial transactions.",
      "Consumer Protection: Consumer protection laws apply to financial exchanges and transactions.",
      "Violation Penalties: Violations of financial exchange laws carry financial and legal penalties."
    ],
    roleplayTips: [
      "Understanding the legal responsibilities associated with financial exchanges protects me and my organization from costly violations.",
      "I maintain accurate financial records because they are both a legal requirement and essential for sound decision-making.",
      "Consumer protection laws in financial exchanges exist to prevent fraud and ensure fair dealing—I take them seriously in everything I do."
    ]
  },

  "FI270": {
    id: "FI270",
    code: "FI:270",
    name: "Explain the need to save and invest",
    definition: "Describe why setting aside money is important for future needs.",
    keyPoints: [
      "Financial Security: Saving and investing build financial security and independence over time.",
      "Emergency Preparation: Savings prepare individuals for unexpected emergencies and expenses.",
      "Long-Term Goals: Saving supports long-term financial goals like home ownership and retirement.",
      "Options Creation: Saving creates financial options and reduces the need to rely on debt.",
      "Wealth Growth: Investment grows wealth over time through the power of compounding returns."
    ],
    roleplayTips: [
      "I prioritize saving because financial security gives me options and reduces the stress of unexpected expenses.",
      "Investing early is one of the most powerful financial decisions I can make because compound growth works best over long time horizons.",
      "The need to save and invest isn't just about retirement—it's about maintaining financial control throughout every stage of life."
    ]
  },

  "FI065": {
    id: "FI065",
    code: "FI:065",
    name: "Set financial goals",
    definition: "Establish short- and long-term money objectives.",
    keyPoints: [
      "Specific Goals: Specific and realistic financial goals are more achievable than vague aspirations.",
      "Time-Bound Planning: Time-bound financial planning creates urgency and accountability.",
      "Spending Guidance: Clear financial goals guide spending decisions and reduce impulsive purchases.",
      "Motivational Power: Goals provide motivation to save and make disciplined financial choices.",
      "Short and Long Term: Both short-term and long-term financial goals are needed for a complete financial plan."
    ],
    roleplayTips: [
      "I set SMART financial goals because specific, measurable targets keep me accountable and motivated to follow through.",
      "Having both short-term and long-term financial goals helps me balance immediate needs with future security.",
      "Financial goals give my money a purpose—without them, spending decisions become reactive rather than intentional."
    ]
  },

  "FI066": {
    id: "FI066",
    code: "FI:066",
    name: "Develop personal budget",
    definition: "Plan income and expenses to manage money effectively.",
    keyPoints: [
      "Spending Tracking: A budget tracks spending and identifies areas where money can be better allocated.",
      "Overspending Prevention: Budgeting prevents overspending by creating clear limits for each category.",
      "Savings Support: A budget supports savings goals by allocating money to savings before discretionary spending.",
      "Priority Alignment: A budget aligns spending with personal priorities and values.",
      "Regular Review: Regular review keeps the budget relevant as income and expenses change."
    ],
    roleplayTips: [
      "I develop and follow a personal budget because it is the most effective tool I have for aligning my spending with my goals.",
      "Budgeting isn't about restriction—it's about making intentional choices about how to use limited resources.",
      "I review my budget regularly because circumstances change, and an outdated budget is no more useful than no budget at all."
    ]
  },

  "FI562": {
    id: "FI562",
    code: "FI:562",
    name: "Determine personal net worth",
    definition: "Calculate financial position by comparing assets and liabilities.",
    keyPoints: [
      "Assets Minus Liabilities: Net worth is calculated by subtracting total liabilities from total assets.",
      "Financial Health Measure: Net worth measures overall financial health at a given point in time.",
      "Progress Tracking: Tracking net worth over time reveals whether financial decisions are improving the situation.",
      "Snapshot: Net worth is a snapshot in time that should be recalculated regularly.",
      "Improvement Signal: Growing net worth signals that financial decisions are moving in the right direction."
    ],
    roleplayTips: [
      "I calculate my net worth regularly because it gives me an objective picture of my financial health and progress.",
      "Tracking net worth over time is more meaningful than any single financial metric—it reflects the cumulative impact of all my financial decisions.",
      "Understanding net worth helps me set realistic financial goals and measure whether I am actually making progress toward them."
    ]
  },

  "FI067": {
    id: "FI067",
    code: "FI:067",
    name: "Explain the nature of tax liabilities",
    definition: "Describe required payments to the government based on income.",
    keyPoints: [
      "Public Funding: Taxes fund public services and infrastructure that benefit individuals and businesses.",
      "Legal Requirement: Paying taxes is required by law and non-compliance carries serious penalties.",
      "Income-Based: Tax liability varies based on income level, filing status, and applicable deductions.",
      "Deadlines and Penalties: Tax deadlines are strict and penalties for late payment can be significant.",
      "Deduction Reduction: Legitimate deductions can reduce tax liability and should be understood and utilized."
    ],
    roleplayTips: [
      "Understanding tax liabilities helps me plan my finances proactively rather than being surprised at tax time.",
      "I take advantage of legitimate deductions to reduce my tax liability, which is responsible financial management.",
      "Taxes are a legal obligation I take seriously—accurate reporting and timely payment protect me from penalties and legal issues."
    ]
  },

  "FI068": {
    id: "FI068",
    code: "FI:068",
    name: "Interpret a pay stub",
    definition: "Explain information shown on an earnings statement.",
    keyPoints: [
      "Gross vs. Net Pay: A pay stub shows both gross pay before deductions and net take-home pay.",
      "Deductions Itemized: Deductions for taxes, insurance, and benefits are itemized on the pay stub.",
      "Pay Period Details: Pay period dates and hours worked are recorded on the pay stub.",
      "Error Prevention: Understanding pay stubs enables employees to identify and correct payroll errors.",
      "Withholding Impact: Tax withholding amounts directly affect take-home pay and annual tax returns."
    ],
    roleplayTips: [
      "I review my pay stub every pay period to make sure deductions are correct and my take-home pay is what I expected.",
      "Understanding the difference between gross and net pay helps me budget accurately based on what I actually take home.",
      "Knowing how to interpret a pay stub allows me to verify my benefits contributions and tax withholdings are applied correctly."
    ]
  },

  "FI560": {
    id: "FI560",
    code: "FI:560",
    name: "Prepare bank account documents",
    definition: "Complete forms used in banking transactions.",
    keyPoints: [
      "Transaction Forms: Checks and deposit slips are the primary bank account documents used in transactions.",
      "Proper Endorsement: Endorsing checks correctly is required for secure and valid banking transactions.",
      "Accuracy Requirement: Accuracy in completing bank documents is critical to prevent errors and delays.",
      "Error Consequences: Errors in bank documents cause delays and can result in fees or rejected transactions.",
      "Fraud Prevention: Properly completed documentation protects against fraud and unauthorized transactions."
    ],
    roleplayTips: [
      "I complete bank documents carefully and accurately because errors can cause delays, fees, or rejected transactions.",
      "Understanding how to properly endorse checks and complete deposit slips is a fundamental banking skill that protects my money.",
      "Accurate bank documentation is a professional responsibility—mistakes reflect poorly and can create financial problems."
    ]
  },

  "FI069": {
    id: "FI069",
    code: "FI:069",
    name: "Maintain financial records",
    definition: "Keep organized documentation of financial activity.",
    keyPoints: [
      "Budget Support: Maintaining financial records supports budgeting and spending analysis.",
      "Tax Preparation: Organized records simplify tax preparation and ensure deductions are captured.",
      "Error Prevention: Complete records help identify and prevent financial errors.",
      "Decision Support: Accurate records support informed financial decisions.",
      "Compliance Requirement: Record maintenance is required for tax compliance and potential audits."
    ],
    roleplayTips: [
      "I maintain organized financial records throughout the year so that tax season is a review process, not a scramble.",
      "Good financial records give me the information I need to evaluate my financial decisions and make improvements.",
      "Organized documentation of financial activity protects me in case of errors, disputes, or audits."
    ]
  },

  "FI070": {
    id: "FI070",
    code: "FI:070",
    name: "Read and reconcile bank statements",
    definition: "Compare bank records with personal records for accuracy.",
    keyPoints: [
      "Error Identification: Reconciling bank statements helps identify discrepancies and errors promptly.",
      "Spending Tracking: Bank statement review tracks actual spending against budget categories.",
      "Fraud Prevention: Regular reconciliation helps detect unauthorized transactions and potential fraud.",
      "Catch Unauthorized: Reconciliation catches unauthorized transactions before they become larger problems.",
      "Accuracy Maintenance: Regular reconciliation maintains the accuracy of personal financial records."
    ],
    roleplayTips: [
      "I reconcile my bank statements monthly to make sure my records match the bank's and to catch any unauthorized transactions.",
      "Regular bank statement review is one of the simplest and most effective ways to protect against financial fraud.",
      "Reconciling accounts teaches me where my money is actually going, which is often different from what I thought."
    ]
  },

  "FI782": {
    id: "FI782",
    code: "FI:782",
    name: "Calculate the cost of credit",
    definition: "Determine total interest and fees on borrowed money.",
    keyPoints: [
      "Interest Rate Impact: Interest rates dramatically affect the total cost of borrowed money over time.",
      "Term Length Cost: Longer loan terms result in more total interest paid even at the same rate.",
      "Affordability Impact: The cost of credit directly impacts the affordability of large purchases.",
      "APR Transparency: The Annual Percentage Rate reveals the true cost of credit including fees.",
      "Comparison Value: Comparing credit costs across lenders can save significant money over the loan term."
    ],
    roleplayTips: [
      "I always calculate the total cost of credit—not just the monthly payment—before committing to any loan or credit agreement.",
      "Understanding APR gives me a true comparison across different credit offers so I can make the most informed choice.",
      "Calculating the cost of credit has saved me money by motivating me to pay down high-interest debt faster."
    ]
  },

  "FI071": {
    id: "FI071",
    code: "FI:071",
    name: "Demonstrate the wise use of credit",
    definition: "Use credit responsibly to avoid financial problems.",
    keyPoints: [
      "On-Time Payment: Paying on time is the most important habit for maintaining good credit standing.",
      "Avoid Overuse: Avoiding overuse of credit prevents debt accumulation that is difficult to repay.",
      "Credit Score Maintenance: Responsible credit use maintains and improves credit score over time.",
      "Not Extra Income: Credit is a financial tool, not extra income, and must be repaid with interest.",
      "Financial Opportunities: Responsible credit use opens financial opportunities with better rates and terms."
    ],
    roleplayTips: [
      "I treat credit as a financial tool—I use it strategically for planned purchases, not impulsively for wants I can't afford.",
      "Paying my balance on time every month is the foundation of wise credit use and the most important factor in my credit score.",
      "Wise use of credit means I never borrow more than I can comfortably repay, even when lenders offer more than I need."
    ]
  },

  "FI072": {
    id: "FI072",
    code: "FI:072",
    name: "Validate credit history",
    definition: "Review credit reports for accuracy.",
    keyPoints: [
      "Error Detection: Reviewing credit reports helps detect errors that can lower credit scores unfairly.",
      "Identity Theft Prevention: Regular review helps catch identity theft and unauthorized credit activity.",
      "Financial Reputation: A clean credit history supports financial reputation and access to credit.",
      "Free Annual Reports: Free annual credit reports are available from all three major bureaus.",
      "Dispute Process: Errors on credit reports can be disputed and corrected through established processes."
    ],
    roleplayTips: [
      "I review my credit report annually to make sure all information is accurate and there are no signs of identity theft.",
      "Knowing how to dispute credit report errors is important because inaccuracies can affect my ability to borrow or get a job.",
      "Validating my credit history ensures that my credit score accurately reflects my financial behavior, not someone else's mistakes."
    ]
  },

  "FI783": {
    id: "FI783",
    code: "FI:783",
    name: "Make responsible financial decisions",
    definition: "Choose financial actions that support long-term stability.",
    keyPoints: [
      "Consequence Consideration: Responsible financial decisions require considering short- and long-term consequences.",
      "Needs vs. Wants: Balancing wants and needs is essential to responsible financial decision-making.",
      "Forward Planning: Planning ahead rather than reacting to financial situations improves outcomes.",
      "Compounding Impact: Small financial decisions compound over time and have significant long-term effects.",
      "Wealth Building: Consistently responsible financial choices build wealth and financial security."
    ],
    roleplayTips: [
      "I evaluate financial decisions based on their long-term impact, not just immediate gratification or convenience.",
      "Balancing wants and needs is central to financial responsibility—I ask whether a purchase aligns with my goals before acting.",
      "Responsible financial decisions don't require perfection—they require consistent thoughtfulness about how money choices affect my future."
    ]
  },

  "FI073": {
    id: "FI073",
    code: "FI:073",
    name: "Protect against identity theft",
    definition: "Safeguard personal financial information.",
    keyPoints: [
      "Document Security: Securing physical documents prevents unauthorized access to personal financial information.",
      "Account Monitoring: Monitoring accounts regularly helps detect unauthorized activity quickly.",
      "Strong Passwords: Using strong, unique passwords protects online financial accounts from unauthorized access.",
      "Credit Freeze: Freezing credit prevents new accounts from being opened in one's name without permission.",
      "Immediate Reporting: Reporting suspected identity theft immediately minimizes financial damage."
    ],
    roleplayTips: [
      "I protect my financial information proactively because recovering from identity theft is far more difficult than preventing it.",
      "I monitor my accounts regularly and investigate any unfamiliar transactions immediately to catch fraud early.",
      "Using strong passwords and enabling two-factor authentication on financial accounts is basic protection I maintain consistently."
    ]
  },

  "FI565": {
    id: "FI565",
    code: "FI:565",
    name: "Pay bills",
    definition: "Manage payments to meet financial obligations.",
    keyPoints: [
      "Late Fee Avoidance: Paying bills on time avoids late fees and penalties that add unnecessary cost.",
      "Credit Maintenance: Timely bill payment maintains a positive credit history and credit score.",
      "Budget Effectiveness: Effective budgeting ensures funds are available to pay bills when due.",
      "Automatic Payments: Automatic payments prevent missed deadlines for recurring bills.",
      "Essential Prioritization: Prioritizing essential bills like housing and utilities protects basic needs."
    ],
    roleplayTips: [
      "I use automatic payments for recurring bills to ensure I never miss a deadline and damage my credit.",
      "Paying bills on time is one of the simplest ways to protect my credit score and avoid unnecessary fees.",
      "I prioritize essential bills in my budget first because housing, utilities, and basic needs must be protected."
    ]
  },

  "FI625": {
    id: "FI625",
    code: "FI:625",
    name: "Apply for a consumer loan",
    definition: "Complete the process of requesting borrowed funds.",
    keyPoints: [
      "Accurate Information: Providing accurate information on loan applications is a legal and ethical requirement.",
      "Term Understanding: Understanding loan terms including interest rate and repayment schedule is essential.",
      "Repayment Assessment: Assessing ability to repay before applying prevents unmanageable debt.",
      "Credit Score Effect: Credit score significantly affects loan approval and the interest rate offered.",
      "Lender Comparison: Comparing multiple lenders helps secure the best available rate and terms."
    ],
    roleplayTips: [
      "Before applying for a loan, I assess whether I can comfortably afford the payments within my budget.",
      "I compare multiple lenders because even small differences in interest rates have significant impact over the loan term.",
      "Providing accurate information on a loan application is both legally required and ethically essential."
    ]
  },

  "FI568": {
    id: "FI568",
    code: "FI:568",
    name: "Control debt",
    definition: "Manage borrowed money to prevent financial strain.",
    keyPoints: [
      "High-Interest Priority: Prioritizing repayment of high-interest debt saves the most money over time.",
      "Unnecessary Borrowing: Avoiding unnecessary borrowing keeps debt at manageable levels.",
      "Repayment Planning: Creating a structured repayment plan is essential for controlling existing debt.",
      "Debt-to-Income: Maintaining a healthy debt-to-income ratio is important for financial stability.",
      "Living Within Means: Living within one's means prevents debt from accumulating in the first place."
    ],
    roleplayTips: [
      "I tackle high-interest debt first because eliminating it saves the most money and frees up cash flow fastest.",
      "Controlling debt means making intentional decisions about when and how much to borrow based on a repayment plan.",
      "I monitor my debt-to-income ratio because it affects both my financial health and my ability to borrow in the future."
    ]
  },

  "FI074": {
    id: "FI074",
    code: "FI:074",
    name: "Prepare personal income tax forms",
    definition: "Complete documents reporting income and taxes owed.",
    keyPoints: [
      "Accuracy Requirement: Accurate completion of tax forms is both legally required and financially important.",
      "Deadline Importance: Tax filing deadlines are strict and missing them results in penalties and interest.",
      "Legal Compliance: Filing taxes accurately is a legal obligation for all income earners.",
      "Deduction Utilization: Understanding available deductions reduces tax liability legally.",
      "Professional Help: Professional assistance is available for complex tax situations and is often worth the cost."
    ],
    roleplayTips: [
      "I approach tax preparation carefully because accuracy is both legally required and financially beneficial.",
      "I stay organized throughout the year so that gathering documents for tax filing is straightforward and complete.",
      "When my tax situation becomes complex, I seek professional help because the cost is usually less than the mistakes it prevents."
    ]
  },

  "FI569": {
    id: "FI569",
    code: "FI:569",
    name: "Discuss the nature of retirement planning",
    definition: "Explain planning for financial security after employment.",
    keyPoints: [
      "Long-Term Saving: Retirement planning requires sustained long-term saving over a working career.",
      "Employer Plans: Employer-sponsored retirement plans often include matching contributions that enhance savings.",
      "Investment Growth: Retirement accounts grow through investment returns over the saving period.",
      "Early Start Advantage: Starting retirement saving early maximizes the benefit of compound growth.",
      "Social Security Limitation: Social Security alone is insufficient to maintain most people's standard of living."
    ],
    roleplayTips: [
      "I contribute to my retirement plan as early and consistently as possible because compound growth is most powerful over long periods.",
      "I maximize my employer's retirement match because it is essentially free money that significantly boosts my long-term savings.",
      "Retirement planning is not something I can put off—the longer I wait, the harder it becomes to accumulate sufficient savings."
    ]
  },

  "FI572": {
    id: "FI572",
    code: "FI:572",
    name: "Explain the nature of estate planning",
    definition: "Describe planning for asset distribution after death.",
    keyPoints: [
      "Wills and Beneficiaries: Wills and beneficiary designations ensure assets are distributed according to one's wishes.",
      "Legal Issue Reduction: Estate planning reduces the legal complications and costs for surviving family members.",
      "Heir Protection: Proper estate planning protects heirs by clearly defining asset distribution.",
      "Dispute Prevention: Planning in advance prevents family disputes over assets and inheritance.",
      "Universal Need: Everyone needs basic estate planning documents regardless of the size of their estate."
    ],
    roleplayTips: [
      "I understand that estate planning is important at every age and asset level—not just for the wealthy.",
      "Having a will and updated beneficiary designations ensures my wishes are honored and reduces burden on my family.",
      "Estate planning is one of the most caring financial acts I can take—it protects my loved ones from unnecessary stress."
    ]
  },

  "FI075": {
    id: "FI075",
    code: "FI:075",
    name: "Describe types of financial-services providers",
    definition: "Identify institutions that manage money.",
    keyPoints: [
      "Banks and Credit Unions: Banks and credit unions are the primary institutions for everyday financial services.",
      "Investment Firms: Investment firms manage portfolios and provide access to securities markets.",
      "Insurance Companies: Insurance companies manage financial risk through various policy products.",
      "Diverse Needs: Each type of financial-services provider serves different financial needs.",
      "Comparison Importance: Comparing providers before choosing ensures the best fit for individual needs."
    ],
    roleplayTips: [
      "I choose financial-services providers based on their services, fees, and how well they meet my specific financial needs.",
      "Understanding the different types of financial institutions helps me build a complete financial support network.",
      "I compare providers regularly because the best option when I first enrolled may not remain the best option over time."
    ]
  },

  "FI076": {
    id: "FI076",
    code: "FI:076",
    name: "Discuss considerations in selecting a financial-services provider",
    definition: "Explain factors used to choose financial institutions.",
    keyPoints: [
      "Fees and Services: Fees and the range of services offered are primary considerations in provider selection.",
      "Reputation: Reputation for customer service and financial stability matters in choosing a provider.",
      "Accessibility: Accessibility through branches, ATMs, and digital services affects everyday convenience.",
      "Deposit Insurance: FDIC or NCUA insurance protects deposits up to established limits.",
      "Goal Alignment: The provider should align with the individual's financial goals and needs."
    ],
    roleplayTips: [
      "I evaluate financial-services providers carefully because the fees and services available directly affect my financial outcomes.",
      "Choosing a provider with FDIC or NCUA insurance is a basic protection I never compromise on.",
      "I look for providers that offer the services I need at reasonable cost and with convenient access."
    ]
  },

  "FI077": {
    id: "FI077",
    code: "FI:077",
    name: "Explain types of investments",
    definition: "Describe ways money can be invested for growth.",
    keyPoints: [
      "Investment Types: Stocks, bonds, and mutual funds are the primary investment vehicles available.",
      "Risk vs. Return: Higher potential returns generally come with higher investment risk.",
      "Diversification: Diversifying across asset types reduces risk without proportionally reducing returns.",
      "Time Horizon: Investment time horizon affects appropriate strategy and asset allocation.",
      "Risk Tolerance: Higher returns require the willingness to accept higher levels of risk and volatility."
    ],
    roleplayTips: [
      "I diversify my investments because spreading risk across different asset types protects against the poor performance of any single investment.",
      "Understanding the risk-return trade-off helps me select investments appropriate for my timeline and comfort with volatility.",
      "I align my investment strategy with my time horizon—longer timelines allow for more growth-oriented investments."
    ]
  },

  "FI081": {
    id: "FI081",
    code: "FI:081",
    name: "Describe the concept of insurance",
    definition: "Explain how insurance reduces financial risk.",
    keyPoints: [
      "Risk Sharing: Insurance works by spreading risk across a large pool of policyholders.",
      "Premium Payments: Policyholders pay premiums in exchange for financial protection against covered losses.",
      "Financial Protection: Insurance provides financial protection against catastrophic losses.",
      "Catastrophic Loss Prevention: Insurance prevents a single event from causing unmanageable financial damage.",
      "Coverage Variety: Different types of insurance cover different categories of financial risk."
    ],
    roleplayTips: [
      "I maintain appropriate insurance coverage because the financial risk of being uninsured far exceeds the cost of premiums.",
      "Understanding how insurance works helps me choose appropriate coverage levels rather than over- or under-insuring.",
      "Insurance is a fundamental risk management tool—it converts potentially catastrophic losses into manageable, predictable costs."
    ]
  },

  "FI579": {
    id: "FI579",
    code: "FI:579",
    name: "Describe the need for financial information",
    definition: "Explain why accurate financial data is necessary.",
    keyPoints: [
      "Decision Support: Accurate financial information supports better decisions in business and personal finance.",
      "Performance Tracking: Financial data tracks business and personal financial performance over time.",
      "Accountability: Financial information ensures accountability for how money is used and managed.",
      "Poor Choice Risk: Inaccurate financial data leads to poor decisions that can have serious consequences.",
      "Trust Building: Transparent financial information builds trust with stakeholders and partners."
    ],
    roleplayTips: [
      "I rely on accurate financial information because decision-making without reliable data is essentially guesswork.",
      "Financial information is the foundation of accountability—it shows where money came from and where it went.",
      "I maintain transparency in financial reporting because it builds trust with everyone who relies on that information."
    ]
  },

  "FI085": {
    id: "FI085",
    code: "FI:085",
    name: "Explain the concept of accounting",
    definition: "Describe how financial transactions are recorded and reported.",
    keyPoints: [
      "Performance Measurement: Accounting measures business performance by tracking revenues and expenses.",
      "Transaction Tracking: Accounting systematically records all financial transactions for review and analysis.",
      "Compliance Support: Accurate accounting supports compliance with tax and regulatory requirements.",
      "GAAP Standards: Generally Accepted Accounting Principles ensure consistency and comparability in reporting.",
      "Decision Basis: Accounting information informs all major business decisions and strategy."
    ],
    roleplayTips: [
      "Understanding accounting helps me read and interpret financial statements that are essential to business decision-making.",
      "Accounting is the language of business—I need to understand it to communicate effectively about financial performance.",
      "Accurate accounting is the foundation of every sound business decision because it ensures we are working from reliable data."
    ]
  },

  "FI351": {
    id: "FI351",
    code: "FI:351",
    name: "Discuss the role of ethics in accounting",
    definition: "Explain ethical standards guiding accounting practices.",
    keyPoints: [
      "Accuracy and Honesty: Accuracy and honesty in financial reporting are fundamental ethical requirements.",
      "Transparency: Transparent financial reporting allows stakeholders to make informed decisions.",
      "Legal Compliance: Ethical accounting practices ensure compliance with laws and regulations.",
      "Fraud Harm: Financial fraud harms all stakeholders including employees, investors, and the public.",
      "Professional Standards: Ethical standards in accounting are professionally required and legally enforced."
    ],
    roleplayTips: [
      "I understand that ethical accounting practices protect everyone who relies on financial information to make decisions.",
      "Financial fraud doesn't just break the law—it betrays the trust of every stakeholder who depends on accurate reporting.",
      "Maintaining ethical standards in accounting is both a professional obligation and a personal commitment to integrity."
    ]
  },

  "FI352": {
    id: "FI352",
    code: "FI:352",
    name: "Explain the use of technology in accounting",
    definition: "Describe how software supports accounting tasks.",
    keyPoints: [
      "Automated Calculations: Accounting software automates calculations, reducing time and error rates.",
      "Improved Accuracy: Technology improves the accuracy of financial records and reports.",
      "Time Savings: Software significantly reduces the time required for routine accounting tasks.",
      "Cloud Access: Cloud-based accounting systems enable access from anywhere with internet connectivity.",
      "Error Reduction: Technology reduces the human errors that occur in manual accounting processes."
    ],
    roleplayTips: [
      "I use accounting technology to handle routine calculations efficiently so I can focus on analysis and decision-making.",
      "Cloud-based accounting systems give me access to financial data in real time, which improves the timeliness of my decisions.",
      "Technology in accounting doesn't eliminate the need for ethical judgment—it amplifies both good practices and bad ones."
    ]
  },

  "FI353": {
    id: "FI353",
    code: "FI:353",
    name: "Explain legal considerations for accounting",
    definition: "Describe laws governing financial reporting.",
    keyPoints: [
      "Reporting Standards: Legal accounting standards specify how financial information must be recorded and reported.",
      "Audit Requirements: Independent audits verify the accuracy and completeness of financial records.",
      "Fraud Prevention: Legal accounting requirements help prevent and detect financial fraud.",
      "Sarbanes-Oxley: The Sarbanes-Oxley Act imposes strict requirements on public company financial reporting.",
      "Non-Compliance Penalties: Non-compliance with accounting laws carries severe financial and criminal penalties."
    ],
    roleplayTips: [
      "I stay current on accounting legal requirements because compliance protects my organization from serious financial and legal consequences.",
      "Understanding Sarbanes-Oxley requirements helps me appreciate why financial controls and documentation are so important.",
      "Legal compliance in accounting is not optional—violations can result in criminal charges and destroy organizational credibility."
    ]
  },

  "FI091": {
    id: "FI091",
    code: "FI:091",
    name: "Describe the nature of cash flow statements",
    definition: "Explain reports showing money entering and leaving a business.",
    keyPoints: [
      "Three Activities: Cash flow statements report on operating, investing, and financing activities separately.",
      "Liquidity Measure: Cash flow statements measure liquidity and the business's ability to meet obligations.",
      "Planning Support: Cash flow data supports financial planning and ensures obligations can be met.",
      "Profit Distinction: Cash flow differs from profit—a business can be profitable but still cash-poor.",
      "Cash Poverty Risk: Businesses can be profitable on paper but fail due to insufficient cash flow."
    ],
    roleplayTips: [
      "I understand that profitability and cash flow are different—a business can show accounting profit while running out of cash.",
      "Analyzing cash flow statements helps me assess whether a business can actually pay its bills, not just whether it looks profitable.",
      "The cash flow statement is often the most important financial statement for assessing short-term business health."
    ]
  },

  "FI093": {
    id: "FI093",
    code: "FI:093",
    name: "Explain the nature of balance sheets",
    definition: "Describe reports showing assets, liabilities, and equity.",
    keyPoints: [
      "Financial Position: The balance sheet provides a snapshot of financial position at a specific point in time.",
      "Solvency Measurement: Balance sheets measure solvency by comparing assets to liabilities.",
      "Investor Use: Investors use balance sheets to assess financial health and risk before committing capital.",
      "Accounting Equation: Assets equal liabilities plus equity—the fundamental accounting equation.",
      "Ownership and Debt: The balance sheet reveals what is owned outright and what is owed to creditors."
    ],
    roleplayTips: [
      "I analyze balance sheets to assess whether a business has sufficient assets to cover its liabilities.",
      "Understanding the balance sheet equation—assets equal liabilities plus equity—helps me see the financial structure clearly.",
      "The balance sheet tells me the financial foundation a business is built on, which is essential context for any other financial analysis."
    ]
  },

  "FI094": {
    id: "FI094",
    code: "FI:094",
    name: "Describe the nature of income statements",
    definition: "Explain reports showing revenues and expenses.",
    keyPoints: [
      "Profit or Loss: The income statement determines whether the business made a profit or incurred a loss.",
      "Performance Measurement: Income statements measure business performance over a defined period.",
      "Decision Support: Income statement data supports strategic business decisions and planning.",
      "Net Income: Revenue minus expenses equals net income, the bottom-line measure of profitability.",
      "Trend Analysis: Trend analysis of income statements over time reveals the trajectory of business performance."
    ],
    roleplayTips: [
      "I use income statements to understand whether a business is generating profit and how efficiently it operates.",
      "Analyzing trends in income statements over multiple periods reveals whether the business is improving or declining.",
      "The income statement is the primary tool for evaluating management's effectiveness in generating profit."
    ]
  },

  "FI354": {
    id: "FI354",
    code: "FI:354",
    name: "Explain the role of finance in business",
    definition: "Describe how finance manages business funds.",
    keyPoints: [
      "Budgeting Function: Finance manages the budgeting process that allocates resources across the organization.",
      "Investment Decisions: Finance oversees investment decisions that determine how capital is deployed.",
      "Financial Planning: Finance enables long-term business planning through financial modeling and forecasting.",
      "Business Enablement: Finance enables all other business functions by ensuring resources are available.",
      "Failure Prevention: Poor financial management is one of the most common causes of business failure."
    ],
    roleplayTips: [
      "I understand that finance is the backbone of every business function—without proper financial management, even great strategies fail.",
      "The finance function's role in budgeting and forecasting directly affects every department's ability to execute its plans.",
      "Strong financial management creates the stability and resources that allow businesses to invest in growth and weather downturns."
    ]
  },

  "FI355": {
    id: "FI355",
    code: "FI:355",
    name: "Discuss the role of ethics in finance",
    definition: "Explain ethical responsibilities in financial decision-making.",
    keyPoints: [
      "Honest Reporting: Honest financial reporting is a fundamental ethical obligation in finance.",
      "Fair Dealing: Fair dealing with all stakeholders is required in ethical financial practice.",
      "Risk Transparency: Transparent communication of financial risks protects all parties involved.",
      "Stakeholder Protection: Ethical finance practices protect all stakeholders including employees and investors.",
      "Criminal Penalties: Financial ethics violations carry criminal penalties including fines and imprisonment."
    ],
    roleplayTips: [
      "I take ethical obligations in finance seriously because the consequences of financial misconduct affect everyone connected to the organization.",
      "Transparent financial reporting is non-negotiable—stakeholders make decisions based on the information I provide.",
      "Ethical finance means I consider the interests of all stakeholders, not just those with the most immediate power."
    ]
  },

  "FI356": {
    id: "FI356",
    code: "FI:356",
    name: "Explain legal considerations for finance",
    definition: "Describe laws affecting financial activities.",
    keyPoints: [
      "Regulatory Compliance: Finance must comply with regulations governing financial reporting and transactions.",
      "Investor Protection: Financial laws protect investors from fraud and misrepresentation.",
      "Financial Disclosures: Public companies are required to make regular financial disclosures to the public.",
      "SEC Regulation: The Securities and Exchange Commission regulates public company financial activity.",
      "Violation Consequences: Violations of financial laws carry severe financial and criminal consequences."
    ],
    roleplayTips: [
      "I stay informed about financial regulations because compliance protects both the organization and all of its stakeholders.",
      "Understanding securities law helps me recognize when financial activities cross legal boundaries that must not be crossed.",
      "Legal compliance in finance is not just about avoiding penalties—it's about maintaining the trust on which financial systems depend."
    ]
  },

  "FI106": {
    id: "FI106",
    code: "FI:106",
    name: "Describe the nature of budgets",
    definition: "Explain plans for managing income and expenses.",
    keyPoints: [
      "Resource Allocation: Budgets allocate financial resources across different needs and priorities.",
      "Spending Control: Budgets control spending by establishing limits for each category.",
      "Goal Support: Budgets support financial goals by directing money toward priority areas.",
      "Planning Tool: Budgets are planning tools that guide decisions, not just restrictions.",
      "Variance Analysis: Variance analysis comparing actual to budgeted amounts improves future budgets."
    ],
    roleplayTips: [
      "I view budgets as planning tools that help me make intentional decisions about resource allocation.",
      "A well-constructed budget reflects organizational priorities—where money goes is a statement about what matters most.",
      "I use variance analysis to learn from budget differences and improve the accuracy and usefulness of future budgets."
    ]
  },

  "NF077": {
    id: "NF077",
    code: "NF:077",
    name: "Assess information needs",
    definition: "Identify what information is required to complete a task or make a decision.",
    keyPoints: [
      "Goal Clarification: Assessing information needs clarifies goals and objectives before research begins.",
      "Overload Prevention: Defining needs prevents information overload by focusing on what is truly required.",
      "Decision Accuracy: Clearly identified information needs improve the accuracy of subsequent decisions.",
      "Question First: Defining the question before searching ensures the search is targeted and efficient.",
      "Time Savings: A proper needs assessment saves time by directing research effectively from the start."
    ],
    roleplayTips: [
      "Before I start any research, I identify exactly what information I need so I don't waste time gathering irrelevant data.",
      "Assessing my information needs upfront helps me frame the right questions and find answers more efficiently.",
      "When I'm clear about what I need to know, my research is faster and the decisions I make from it are better."
    ]
  },

  "NF078": {
    id: "NF078",
    code: "NF:078",
    name: "Obtain needed information efficiently",
    definition: "Locate relevant information quickly using appropriate sources.",
    keyPoints: [
      "Reliable Sources: Efficient information gathering uses reliable databases and authoritative tools.",
      "Time and Resources: Targeted searches save significant time and organizational resources.",
      "Productivity Improvement: Obtaining information efficiently improves overall work productivity.",
      "Targeted Searches: Targeted searches yield better results than broad, unfocused queries.",
      "Source Matching: Matching the source type to the information needed improves search effectiveness."
    ],
    roleplayTips: [
      "I know which sources to use for different types of information so I can find what I need quickly and reliably.",
      "Efficient information gathering means I spend time on analysis and application rather than searching.",
      "Using the right tools for each type of information search dramatically reduces the time I spend finding answers."
    ]
  },

  "NF079": {
    id: "NF079",
    code: "NF:079",
    name: "Evaluate quality and source of information",
    definition: "Judge information for accuracy, reliability, and relevance.",
    keyPoints: [
      "Source Credibility: Evaluating information requires verifying the credibility of the source.",
      "Bias and Currency: Identifying bias or outdated data is essential to avoiding misinformation.",
      "Informed Decisions: Evaluating information quality ensures decisions are based on reliable data.",
      "Primary Source Preference: Primary sources are generally more reliable than secondary interpretations.",
      "Author Credentials: Evaluating author credentials helps assess the trustworthiness of the information."
    ],
    roleplayTips: [
      "I evaluate every source critically before relying on it because the quality of my decisions depends on the quality of my information.",
      "When I assess information quality, I look at who created it, when, and for what purpose to identify potential bias.",
      "Not all information is equal—evaluating sources carefully is one of the most important skills in the information age."
    ]
  },

  "NF278": {
    id: "NF278",
    code: "NF:278",
    name: "Draw conclusions based on information analysis",
    definition: "Interpret data to form logical outcomes or decisions.",
    keyPoints: [
      "Pattern Identification: Drawing conclusions requires identifying patterns and trends in the data.",
      "Evidence-Based Decisions: Conclusions support evidence-based decisions rather than assumptions.",
      "Assumption Reduction: Analysis-based conclusions reduce reliance on assumptions and guesswork.",
      "Data Support: All conclusions should be directly supported by the underlying data.",
      "Clear Communication: Findings must be communicated clearly so others can understand and act on them."
    ],
    roleplayTips: [
      "I draw conclusions only when the data supports them—speculation without evidence is not analysis.",
      "When presenting conclusions, I make sure to show the data and reasoning that led to each finding.",
      "Strong analytical conclusions connect clearly to the underlying data and explain the reasoning transparently."
    ]
  },

  "NF080": {
    id: "NF080",
    code: "NF:080",
    name: "Apply information to accomplish a task",
    definition: "Use gathered information to complete work objectives.",
    keyPoints: [
      "Action Translation: Applying information means translating data into specific, actionable steps.",
      "Task Effectiveness: Using information appropriately improves the effectiveness of task completion.",
      "Problem-Solving: Applied information supports problem-solving by connecting evidence to solutions.",
      "Value Creation: Information only creates value when it is applied to achieve real outcomes.",
      "Outcome Linkage: Linking research findings to specific outcomes ensures information serves its purpose."
    ],
    roleplayTips: [
      "I don't just gather information—I apply it directly to the task at hand to ensure it creates value.",
      "The measure of good research isn't the quality of the data gathered but how effectively it's applied.",
      "When I apply information to tasks, I make explicit connections between what I found and what I'm doing."
    ]
  },

  "NF081": {
    id: "NF081",
    code: "NF:081",
    name: "Store information for future use",
    definition: "Organize and save information for later access.",
    keyPoints: [
      "Storage Systems: Information should be stored in well-organized digital or physical systems.",
      "Efficiency Improvement: Properly stored information can be retrieved quickly, improving efficiency.",
      "Knowledge Protection: Storing information protects organizational knowledge from being lost.",
      "Naming Conventions: Consistent naming conventions aid in finding stored information quickly.",
      "Backup Systems: Backup systems prevent data loss from technical failures or accidents."
    ],
    roleplayTips: [
      "I organize and store information systematically so I can retrieve it quickly when it's needed again.",
      "Good information storage practices save time and protect organizational knowledge from being lost.",
      "I use consistent naming conventions and folder structures so stored information can be found by anyone, not just me."
    ]
  },

  "NF110": {
    id: "NF110",
    code: "NF:110",
    name: "Discuss the nature of information management",
    definition: "Explain how businesses collect, organize, and use information.",
    keyPoints: [
      "Decision Support: Effective information management supports better business decision-making.",
      "Efficiency Improvement: Well-managed information improves operational efficiency across the organization.",
      "Data Accuracy: Information management ensures data accuracy and reduces the cost of errors.",
      "Business Asset: Information is a valuable business asset that must be managed strategically.",
      "Error Prevention: Poor information management leads to costly errors and missed opportunities."
    ],
    roleplayTips: [
      "I understand that information management is strategic—how we collect, organize, and use data is a competitive differentiator.",
      "Treating information as a business asset means investing in the systems and practices that protect and leverage it effectively.",
      "Poor information management creates errors that cost time and money—investing in good practices pays dividends."
    ]
  },

  "NF111": {
    id: "NF111",
    code: "NF:111",
    name: "Explain the role of ethics in information management",
    definition: "Describe ethical responsibilities in handling information.",
    keyPoints: [
      "Privacy Protection: Ethical information management requires protecting the privacy of individuals.",
      "Honesty and Transparency: Handling information honestly and transparently builds organizational trust.",
      "Misuse Prevention: Ethical standards prevent the misuse of data for unauthorized purposes.",
      "Trust Building: Ethical information practices build trust with customers, employees, and partners.",
      "Legal Consequences: Violations of information ethics carry significant legal consequences."
    ],
    roleplayTips: [
      "I handle information ethically because I understand the trust that comes with access to sensitive data.",
      "Ethical information management means I only use data for its intended purpose and protect it from unauthorized access.",
      "The legal and reputational consequences of mishandling information are severe—I take my ethical obligations seriously."
    ]
  },

  "NF076": {
    id: "NF076",
    code: "NF:076",
    name: "Explain legal issues associated with information management",
    definition: "Describe laws governing data collection and use.",
    keyPoints: [
      "Data Protection: Data protection regulations govern how personal information must be collected and stored.",
      "Intellectual Property: Intellectual property laws protect creative works and proprietary business information.",
      "Compliance Requirements: Organizations must comply with applicable information management laws.",
      "GDPR and CCPA: Regulations like GDPR and CCPA impose strict requirements on data practices.",
      "Non-Compliance Penalties: Non-compliance with information laws carries heavy financial penalties."
    ],
    roleplayTips: [
      "I stay informed about data protection laws because non-compliance can result in massive fines and reputational damage.",
      "Understanding regulations like GDPR helps me ensure that our information management practices are legally sound.",
      "Information law compliance isn't just about avoiding penalties—it's about respecting the rights of those whose data we hold."
    ]
  },

  "NF003": {
    id: "NF003",
    code: "NF:003",
    name: "Identify ways that technology impacts business",
    definition: "Describe how technology affects business operations.",
    keyPoints: [
      "Efficiency Improvement: Technology improves efficiency by automating repetitive tasks and processes.",
      "Communication Enhancement: Technology enhances communication speed and effectiveness across the organization.",
      "Innovation Enablement: Technology enables business innovation and the development of new products and services.",
      "Competitive Dynamics: Technology changes competitive dynamics and can disrupt entire industries.",
      "Adoption Requirements: Technology adoption requires training, planning, and change management."
    ],
    roleplayTips: [
      "Technology impacts every aspect of business—from operations to customer service to financial management.",
      "I monitor technology trends because they affect our competitive position and create both opportunities and threats.",
      "Adopting new technology effectively requires planning and training, not just implementation."
    ]
  },

  "NF083": {
    id: "NF083",
    code: "NF:083",
    name: "Explain the role of information systems",
    definition: "Describe systems used to collect and process data.",
    keyPoints: [
      "Operations Support: Information systems support business operations by providing timely, accurate data.",
      "Decision Assistance: IS aids decision-making by converting raw data into useful information.",
      "Coordination Improvement: Information systems improve coordination across business functions.",
      "Function Integration: IS integrates data across business functions to provide a unified view.",
      "System Quality: The quality of decisions depends on the quality of the information system supporting them."
    ],
    roleplayTips: [
      "I understand that information systems are the infrastructure of business intelligence—without them, decision-making is based on incomplete data.",
      "The quality of our information systems directly affects the quality of our decisions and operational performance.",
      "When I rely on information systems, I also evaluate data quality because garbage in means garbage out."
    ]
  },

  "NF084": {
    id: "NF084",
    code: "NF:084",
    name: "Discuss principles of computer systems",
    definition: "Explain basic components and functions of computers.",
    keyPoints: [
      "Hardware and Software: Computer systems consist of hardware components and the software that runs on them.",
      "Input-Process-Output: Computers follow an input, processing, and output cycle for all operations.",
      "Storage Systems: Storage systems preserve data for later use and retrieval.",
      "System Understanding: Understanding basic computer principles improves effective use of technology.",
      "Component Integration: All computer components work together as an integrated system."
    ],
    roleplayTips: [
      "Understanding basic computer system principles helps me use technology more effectively and troubleshoot problems.",
      "The input-process-output model applies to all computing—understanding it helps me understand how any system works.",
      "Knowing how hardware and software interact helps me make informed technology choices."
    ]
  },

  "NF085": {
    id: "NF085",
    code: "NF:085",
    name: "Use basic operating systems",
    definition: "Perform basic tasks using an operating system.",
    keyPoints: [
      "File Management: Operating systems enable file creation, organization, and management.",
      "System Navigation: Navigating the OS interface is essential for accessing all other software.",
      "Application Use: Operating systems provide the platform for running business applications.",
      "OS Role: The OS is the interface between the user and the hardware of the computer.",
      "Productivity Improvement: Proficiency with operating system features improves overall work productivity."
    ],
    roleplayTips: [
      "Proficiency with my operating system improves everything I do because it's the foundation for all other software.",
      "I learn OS shortcuts and features because efficiency gains in basic navigation compound across everything I do.",
      "Understanding operating system basics helps me organize my work effectively and troubleshoot common issues."
    ]
  },

  "NF086": {
    id: "NF086",
    code: "NF:086",
    name: "Describe the scope of the Internet",
    definition: "Explain the Internet's role in information access and communication.",
    keyPoints: [
      "Global Connectivity: The Internet provides global connectivity to individuals and organizations worldwide.",
      "Information Sharing: The Internet enables instantaneous information sharing across geographic distances.",
      "Business Applications: Business relies on the Internet for commerce, communication, and operations.",
      "E-Commerce Enablement: The Internet enables e-commerce and has transformed how businesses reach customers.",
      "Global Transformation: The Internet has fundamentally transformed how business operates worldwide."
    ],
    roleplayTips: [
      "The Internet has transformed business by eliminating the geographic barriers to communication, commerce, and collaboration.",
      "I leverage Internet capabilities to access information, connect with customers, and operate more efficiently.",
      "Understanding the scope of the Internet helps me see both its opportunities and its risks for business."
    ]
  },

  "NF004": {
    id: "NF004",
    code: "NF:004",
    name: "Demonstrate basic e-mail functions",
    definition: "Use email to send, receive, and organize messages.",
    keyPoints: [
      "Professional Communication: Email is the primary professional communication tool in most business settings.",
      "File Attachments: Email enables sending and receiving files and documents as attachments.",
      "Inbox Management: Effective inbox management keeps communication organized and responsive.",
      "Primary Business Tool: Email is a primary business communication tool that requires professional use.",
      "Etiquette Requirements: Proper email etiquette is required for professional communication."
    ],
    roleplayTips: [
      "I treat every business email professionally—clear subject lines, concise content, and appropriate tone.",
      "Effective inbox management ensures I respond to important messages promptly and nothing falls through the cracks.",
      "Email etiquette reflects on my professionalism—I write emails I would be comfortable having anyone read."
    ]
  },

  "NF005": {
    id: "NF005",
    code: "NF:005",
    name: "Demonstrate personal information management applications",
    definition: "Use tools to organize tasks and schedules.",
    keyPoints: [
      "Calendar Use: Digital calendars are essential for organizing appointments and deadlines.",
      "Task Management: Task management applications help prioritize and track work to completion.",
      "Productivity Apps: Productivity applications increase efficiency and reduce the chance of missed tasks.",
      "Time Management: PIM tools improve time management by organizing commitments in one place.",
      "Device Integration: Integration across devices increases accessibility and ensures synchronization."
    ],
    roleplayTips: [
      "I use personal information management tools to keep my schedule, tasks, and commitments organized in one place.",
      "Digital calendars and task managers help me stay on top of deadlines and ensure nothing important gets overlooked.",
      "Effective use of PIM tools is a professional skill that directly affects my productivity and reliability."
    ]
  },

  "NF006": {
    id: "NF006",
    code: "NF:006",
    name: "Demonstrate basic web-search skills",
    definition: "Locate information online effectively.",
    keyPoints: [
      "Keyword Use: Using effective keywords is the foundation of productive web searching.",
      "Source Evaluation: Evaluating the credibility of online sources is essential to effective searching.",
      "Result Filtering: Filtering search results by date, source, and type improves research efficiency.",
      "Search Precision: Boolean operators and advanced search features improve search precision.",
      "Information Reliability: Not all online information is reliable—critical evaluation is always required."
    ],
    roleplayTips: [
      "I use advanced search techniques like Boolean operators to find precisely what I need rather than wading through irrelevant results.",
      "Every time I search online, I evaluate the sources critically because the Internet contains misinformation alongside reliable data.",
      "Strong web search skills are a competitive advantage—I can find information faster and more accurately than those without them."
    ]
  },

  "NF007": {
    id: "NF007",
    code: "NF:007",
    name: "Demonstrate basic word processing skills",
    definition: "Create and edit written documents.",
    keyPoints: [
      "Text Formatting: Formatting text for clarity and professional appearance is essential in business documents.",
      "Content Editing: Editing content for accuracy and clarity is a core word processing skill.",
      "Professional Presentation: Professional document presentation reflects on the writer and the organization.",
      "Business Essential: Word processing is essential for creating the documents that drive business communication.",
      "Template Consistency: Templates improve consistency and save time in document creation."
    ],
    roleplayTips: [
      "I apply professional formatting to business documents because presentation affects how the content is perceived.",
      "Word processing proficiency is essential for creating the proposals, reports, and communications that business requires.",
      "I use document templates to maintain consistency and ensure I don't miss required elements."
    ]
  },

  "NF008": {
    id: "NF008",
    code: "NF:008",
    name: "Demonstrate basic presentation applications",
    definition: "Create visual presentations to share information.",
    keyPoints: [
      "Slides and Visuals: Effective presentations use slides and visuals to support the spoken message.",
      "Clear Organization: Logical organization of content helps audiences follow and retain information.",
      "Audience Focus: Presentations must be designed with the specific audience's needs in mind.",
      "Design Impact: Design choices including fonts, colors, and layouts affect audience comprehension.",
      "Communication Support: Presentations support verbal communication rather than replacing it."
    ],
    roleplayTips: [
      "I design presentations with the audience in mind—what do they need to understand and remember?",
      "Effective presentation slides support my message without competing with or replacing my spoken content.",
      "Good design in a presentation improves comprehension—I use visuals intentionally to clarify, not decorate."
    ]
  },

  "NF009": {
    id: "NF009",
    code: "NF:009",
    name: "Demonstrate basic database applications",
    definition: "Use databases to store and retrieve information.",
    keyPoints: [
      "Data Entry: Accurate data entry is the foundation of a useful database.",
      "Query Use: Queries enable efficient retrieval of specific information from large datasets.",
      "Data Organization: Databases organize information in structured ways that enable efficient access.",
      "Efficient Management: Databases enable more efficient data management than unstructured storage.",
      "Entry Accuracy: Accuracy in data entry is critical to the usefulness of database information."
    ],
    roleplayTips: [
      "I understand that a database is only as useful as the accuracy of the data entered into it.",
      "Learning to query databases effectively allows me to extract exactly the information I need quickly.",
      "Database skills are increasingly essential because so much business information is stored in structured database systems."
    ]
  },

  "NF010": {
    id: "NF010",
    code: "NF:010",
    name: "Demonstrate basic spreadsheet applications",
    definition: "Use spreadsheets to organize and analyze data.",
    keyPoints: [
      "Formula Use: Spreadsheet formulas automate calculations and reduce manual computation errors.",
      "Chart Creation: Charts and graphs created in spreadsheets aid data visualization and interpretation.",
      "Data Analysis: Spreadsheets enable systematic analysis of numerical data.",
      "Calculation Automation: Spreadsheets automate repetitive calculations, saving time and reducing errors.",
      "Visualization Aid: Visual representations of data aid interpretation and communication of findings."
    ],
    roleplayTips: [
      "I use spreadsheets for any analysis involving numbers because they automate calculations and make it easy to test different scenarios.",
      "Creating charts from spreadsheet data helps me communicate quantitative information clearly and persuasively.",
      "Spreadsheet proficiency is one of the most universally valuable technical skills in business."
    ]
  },

  "NF088": {
    id: "NF088",
    code: "NF:088",
    name: "Use an integrated business software application package",
    definition: "Use software that combines multiple business functions.",
    keyPoints: [
      "Efficiency Improvement: Integrated software improves efficiency by combining multiple functions in one system.",
      "Duplication Reduction: Integrated systems reduce data duplication and manual transfer errors.",
      "Coordination Enhancement: Integrated software enhances coordination across business functions.",
      "Silo Elimination: Integrated systems eliminate data silos that prevent information sharing.",
      "Training Requirements: Full utilization of integrated software requires comprehensive training."
    ],
    roleplayTips: [
      "I use integrated software packages because having all business functions in one system eliminates the inefficiency of switching between tools.",
      "Integrated systems reduce errors caused by manually transferring data between separate applications.",
      "Getting the most out of integrated software requires understanding how all the modules connect and interact."
    ]
  },

  "NF011": {
    id: "NF011",
    code: "NF:011",
    name: "Demonstrate collaborative/groupware applications",
    definition: "Use tools that allow teamwork and shared access.",
    keyPoints: [
      "Shared Documents: Collaborative tools enable multiple users to access and edit shared documents simultaneously.",
      "Communication Tools: Groupware includes communication tools that keep teams connected and informed.",
      "Real-Time Collaboration: Real-time collaboration features enable immediate teamwork regardless of location.",
      "Remote Teamwork: Groupware enables effective remote teamwork across geographic distances.",
      "Version Control: Version control features in collaborative tools prevent conflicts and preserve document history."
    ],
    roleplayTips: [
      "I use collaborative tools to keep my team aligned and ensure everyone is working from the same, most current information.",
      "Real-time collaboration through groupware has made our team more productive whether we're in the same office or working remotely.",
      "Version control in collaborative tools protects against the confusion and errors that come from multiple versions of documents."
    ]
  },

  "NF042": {
    id: "NF042",
    code: "NF:042",
    name: "Create and post basic web page",
    definition: "Develop and publish simple web content.",
    keyPoints: [
      "Basic Design: Creating a basic web page requires understanding fundamental web design principles.",
      "Content Accuracy: Web content must be accurate and professionally written before publishing.",
      "Accessibility: Web pages should be accessible to all users including those with disabilities.",
      "Business Visibility: Web presence supports business visibility and customer access.",
      "Content Maintenance: Published web content must be maintained and updated regularly to remain useful."
    ],
    roleplayTips: [
      "I create web content with the audience in mind—design and content choices should serve the visitor's needs.",
      "Accurate, well-organized web content builds credibility and supports the business's online presence.",
      "Maintaining web content is as important as creating it—outdated information damages credibility."
    ]
  },

  "NF215": {
    id: "NF215",
    code: "NF:215",
    name: "Collaborate on and aggregate complex internal documents",
    definition: "Combine multiple inputs into a unified document.",
    keyPoints: [
      "Consistent Messaging: Aggregating contributions into one document requires ensuring consistent tone and messaging.",
      "Team Coordination: Effective aggregation requires coordinating multiple contributors around shared standards.",
      "Clear Communication: The final document must communicate clearly despite having multiple authors.",
      "Careful Editing: Aggregation requires careful editing to integrate diverse contributions seamlessly.",
      "Transparency Maintenance: Track changes and version history maintain transparency in collaborative documents."
    ],
    roleplayTips: [
      "When aggregating contributions from multiple team members, I ensure the final document speaks with a unified voice.",
      "I use track changes and version control to maintain transparency and a clear record of how the document evolved.",
      "Effective document aggregation is more than assembly—it requires editing to ensure consistency and coherence."
    ]
  },

  "NF001": {
    id: "NF001",
    code: "NF:001",
    name: "Describe the nature of business records",
    definition: "Explain documents that track business activities.",
    keyPoints: [
      "Record Types: Business records include financial, operational, and legal documents.",
      "Legal Compliance: Maintaining proper business records is required for legal and regulatory compliance.",
      "Decision Support: Business records provide the information needed for management decisions.",
      "Accuracy Requirement: Records must be accurate and timely to be useful for compliance and decisions.",
      "Retention Policies: Record retention policies protect the business and ensure required documents are available."
    ],
    roleplayTips: [
      "I maintain accurate business records because they are the foundation for decision-making and legal compliance.",
      "Understanding what records need to be kept and for how long protects the organization from legal and regulatory risk.",
      "Business records tell the story of the organization's activities—they must be accurate to tell that story truthfully."
    ]
  },

  "NF002": {
    id: "NF002",
    code: "NF:002",
    name: "Maintain customer records",
    definition: "Keep accurate and secure customer information.",
    keyPoints: [
      "Service Support: Accurate customer records support personalized and effective customer service.",
      "Privacy Protection: Customer records must be protected to respect privacy and comply with laws.",
      "Relationship Improvement: Well-maintained customer records improve the quality of customer relationships.",
      "Personalization Enablement: Accurate records enable personalized service that builds customer loyalty.",
      "Security Requirement: Data security is required to protect customer records from unauthorized access."
    ],
    roleplayTips: [
      "I maintain customer records with care because they are both a business asset and a trust commitment to the customer.",
      "Accurate customer records enable me to deliver personalized service that strengthens loyalty.",
      "Protecting the security of customer information is a legal obligation and an ethical responsibility."
    ]
  },

  "NF013": {
    id: "NF013",
    code: "NF:013",
    name: "Describe current business trends",
    definition: "Identify patterns shaping business environments.",
    keyPoints: [
      "Market Changes: Business trends include shifts in market conditions and consumer preferences.",
      "Technology Advances: Technological advancements are among the most significant current business trends.",
      "Consumer Behavior: Changes in consumer behavior shape business strategy and product development.",
      "Trend Awareness: Trend awareness enables proactive strategy rather than reactive adaptation.",
      "Opportunity Recognition: Monitoring trends reveals opportunities before competitors identify them."
    ],
    roleplayTips: [
      "I follow business trends closely because early awareness of change creates strategic advantage.",
      "Understanding current trends helps me anticipate what customers will need before they explicitly demand it.",
      "Trend awareness isn't about chasing every new development—it's about identifying which patterns will have lasting impact."
    ]
  },

  "NF014": {
    id: "NF014",
    code: "NF:014",
    name: "Monitor internal records for business information",
    definition: "Review company data to assess performance.",
    keyPoints: [
      "Sales Data Review: Monitoring internal records includes reviewing sales data for performance trends.",
      "Productivity Metrics: Tracking productivity metrics reveals operational strengths and weaknesses.",
      "Financial Reporting: Financial reports are primary internal records for assessing business health.",
      "Performance Insight: Internal data reveals organizational strengths and areas needing improvement.",
      "Improvement Support: Regular internal record review supports continuous performance improvement."
    ],
    roleplayTips: [
      "I review internal data regularly because it tells me how the business is actually performing against our goals.",
      "Internal records are the most reliable source of truth about business performance—I use them to guide decisions.",
      "Monitoring internal records proactively allows me to identify issues early before they become serious problems."
    ]
  },

  "NF015": {
    id: "NF015",
    code: "NF:015",
    name: "Conduct an environmental scan",
    definition: "Analyze external factors affecting business.",
    keyPoints: [
      "Economic Trends: Environmental scanning includes monitoring economic trends and conditions.",
      "Competitive Landscape: Understanding the competitive landscape is a key component of environmental scanning.",
      "Regulatory Environment: Regulatory changes can significantly affect business operations and strategy.",
      "Strategy Informing: Environmental scanning informs strategic planning and competitive positioning.",
      "Disruption Awareness: External factors can disrupt even successful businesses that ignore them."
    ],
    roleplayTips: [
      "I conduct regular environmental scans because external factors can change faster than internal capabilities and require early awareness.",
      "Understanding the competitive landscape helps me identify both threats and opportunities for strategic advantage.",
      "An environmental scan provides context that makes internal performance data much more meaningful."
    ]
  },

  "NF093": {
    id: "NF093",
    code: "NF:093",
    name: "Interpret statistical findings",
    definition: "Understand data results to draw meaning.",
    keyPoints: [
      "Visual Interpretation: Charts and graphs are primary tools for visualizing and interpreting statistical findings.",
      "Trend Recognition: Identifying trends and correlations in data reveals meaningful patterns.",
      "Informed Decisions: Statistical interpretation supports data-driven decisions rather than intuition alone.",
      "Context Importance: Statistics must be interpreted in context to avoid misleading conclusions.",
      "Misinterpretation Risk: Misinterpreting statistical findings leads to poor decisions and wasted resources."
    ],
    roleplayTips: [
      "I interpret statistics carefully, always considering the context and the limitations of the data before drawing conclusions.",
      "Visual representations of statistical data help me communicate findings to audiences who may not be comfortable with numbers.",
      "Strong statistical interpretation skills help me separate meaningful signals from noise in business data."
    ]
  },

  "NF216": {
    id: "NF216",
    code: "NF:216",
    name: "Translate research findings into actionable recommendations",
    definition: "Convert data analysis into business actions.",
    keyPoints: [
      "Clear Recommendations: Translating findings into recommendations requires clear, specific proposed actions.",
      "Strategic Alignment: Recommendations must align with organizational strategy and resources.",
      "Practical Application: Recommendations must be practical and feasible to implement.",
      "Action Requirement: Research without actionable recommendations has limited business value.",
      "Feasibility Requirement: Recommendations must be realistic given organizational constraints and capabilities."
    ],
    roleplayTips: [
      "I translate research findings into specific, actionable recommendations because data without action doesn't create value.",
      "When presenting recommendations, I make sure they are realistic, specific, and clearly tied to the research findings.",
      "The gap between analysis and action is where many organizations fail—I focus on making that bridge as clear as possible."
    ]
  },

  "NF139": {
    id: "NF139",
    code: "NF:139",
    name: "Explain the principles of data analysis",
    definition: "Describe how data is examined to find meaning.",
    keyPoints: [
      "Pattern Identification: Data analysis identifies patterns and relationships in large datasets.",
      "Decision Support: Analysis principles guide decisions by providing evidence-based insights.",
      "Accuracy Improvement: Following sound analysis principles improves the accuracy of conclusions.",
      "Question Foundation: Good analysis begins with a clear, well-defined question.",
      "Data Quality Dependence: The quality of analysis is directly dependent on the quality of the underlying data."
    ],
    roleplayTips: [
      "I start every data analysis project with a clear question because unfocused analysis rarely produces useful insights.",
      "Understanding data analysis principles helps me avoid common errors that lead to misleading conclusions.",
      "Data quality is the foundation of analysis quality—I evaluate data before analyzing it."
    ]
  },

  "NF140": {
    id: "NF140",
    code: "NF:140",
    name: "Explain tools used to access database information",
    definition: "Describe methods for retrieving stored data.",
    keyPoints: [
      "Query Tools: Queries are the primary tool for retrieving specific information from databases.",
      "Report Generation: Report tools format database information for presentation and review.",
      "Filter Functions: Filters enable focused retrieval of relevant subsets of data.",
      "Tool Variety: The tools available vary by database type and organizational needs.",
      "Access Control: Proper access controls protect data integrity and prevent unauthorized retrieval."
    ],
    roleplayTips: [
      "I use database query tools to retrieve exactly the information I need rather than exporting everything and filtering manually.",
      "Understanding the tools available for accessing database information makes me more efficient and effective.",
      "Access controls on database tools are important—data security depends on limiting access to authorized users."
    ]
  },

  "NF141": {
    id: "NF141",
    code: "NF:141",
    name: "Access information in the database system",
    definition: "Retrieve data from databases for business use.",
    keyPoints: [
      "Data Accuracy: Accessing information accurately ensures the data retrieved is complete and correct.",
      "Access Efficiency: Efficient database access reduces time spent finding information.",
      "Data Integrity: Maintaining data integrity during access prevents corruption or unintended changes.",
      "Permission Assignment: Access rights must be properly assigned to protect sensitive information.",
      "Verification Requirement: Retrieved data should be verified before use in important decisions."
    ],
    roleplayTips: [
      "I verify that the data I retrieve from databases is accurate and complete before using it in analysis or decisions.",
      "Understanding database access procedures ensures I retrieve the right information efficiently and securely.",
      "Proper database access means I use only the permissions I need and protect the data I access."
    ]
  },

  "NF148": {
    id: "NF148",
    code: "NF:148",
    name: "Discuss the nature of data mining",
    definition: "Explain extracting useful patterns from large data sets.",
    keyPoints: [
      "Trend Identification: Data mining identifies trends and patterns that are not visible in individual records.",
      "Prediction Improvement: Data mining improves predictions by finding relationships in historical data.",
      "Strategy Support: Mining insights support more informed business strategy and decisions.",
      "Clean Data Requirement: Data mining requires clean, well-organized data to produce reliable results.",
      "Pattern Interpretation: Patterns found through mining must be carefully interpreted in business context."
    ],
    roleplayTips: [
      "Data mining allows me to find insights hidden in large datasets that would be impossible to see manually.",
      "I understand that data mining is only as good as the quality of the underlying data—garbage in, garbage out.",
      "Patterns found through data mining require careful interpretation before being used as the basis for business decisions."
    ]
  },

  "NF149": {
    id: "NF149",
    code: "NF:149",
    name: "Describe data mining tools and techniques",
    definition: "Explain methods used to analyze large data sets.",
    keyPoints: [
      "Software Tools: Various software tools support different types of data mining analysis.",
      "Statistical Models: Statistical models are used to identify patterns and relationships in data.",
      "Pattern Recognition: Pattern recognition techniques identify recurring structures and trends.",
      "Tool Variety: Data mining tools vary in complexity and capability depending on the application.",
      "Goal-Based Selection: Tool selection depends on the data type, volume, and analytical goals."
    ],
    roleplayTips: [
      "I select data mining tools based on the specific analytical goal because different techniques are suited to different problems.",
      "Understanding the range of data mining tools available helps me choose the most appropriate approach for each situation.",
      "Even basic data mining techniques can reveal valuable insights when applied to the right data."
    ]
  },

  "NF150": {
    id: "NF150",
    code: "NF:150",
    name: "Discuss the importance of ethics in data mining",
    definition: "Explain ethical responsibilities in data use.",
    keyPoints: [
      "Privacy Protection: Ethical data mining requires protecting the privacy of individuals in the dataset.",
      "Misuse Prevention: Ethics prevent data from being used for purposes beyond its intended scope.",
      "Trust Building: Ethical data practices build trust with customers and other stakeholders.",
      "Legal Requirement: Ethical data use is legally required under various data protection regulations.",
      "Transparency Requirement: Transparency about data collection and mining practices is ethically essential."
    ],
    roleplayTips: [
      "I apply ethical standards to data mining because the insights we extract carry responsibility for how they are used.",
      "Protecting privacy in data mining isn't just about compliance—it's about respecting the people behind the data.",
      "I am transparent about our data mining practices because stakeholders have a right to know how their information is used."
    ]
  },

  "NF151": {
    id: "NF151",
    code: "NF:151",
    name: "Demonstrate basic data mining techniques",
    definition: "Apply simple methods to extract insights from data.",
    keyPoints: [
      "Sorting and Filtering: Basic sorting and filtering reveal patterns in organized data.",
      "Trend Analysis: Simple trend analysis identifies directional changes in data over time.",
      "Categorization: Categorizing data groups similar observations to reveal meaningful patterns.",
      "Pattern Revelation: Basic techniques often reveal surprisingly useful patterns in business data.",
      "Validation Requirement: Mining results must be validated before being relied upon for decisions."
    ],
    roleplayTips: [
      "I start with basic data mining techniques because they often reveal the most actionable patterns with the least complexity.",
      "Sorting and filtering data systematically is a simple but powerful first step in finding insights.",
      "I validate mining results by testing them against different data subsets before using them to inform decisions."
    ]
  },

  "NF152": {
    id: "NF152",
    code: "NF:152",
    name: "Interpret data mining findings",
    definition: "Explain results produced through data mining.",
    keyPoints: [
      "Decision Support: Interpreting mining findings supports more informed business decisions.",
      "Opportunity Identification: Data mining findings reveal opportunities that would otherwise go unnoticed.",
      "Uncertainty Reduction: Well-interpreted findings reduce the uncertainty that surrounds business decisions.",
      "Clear Communication: Findings must be communicated clearly in language that non-technical audiences understand.",
      "Contextual Interpretation: Business context affects how mining findings should be interpreted and applied."
    ],
    roleplayTips: [
      "I interpret data mining findings in their business context because raw patterns without context can lead to wrong conclusions.",
      "When communicating mining findings, I translate technical results into clear business implications.",
      "Interpreting data mining results responsibly means acknowledging limitations and uncertainty alongside the findings."
    ]
  },

  "OP189": {
    id: "OP189",
    code: "OP:189",
    name: "Explain the nature of operations",
    definition: "Describe how operations manage the day-to-day activities required to produce goods and services.",
    keyPoints: [
      "Efficiency Focus: Operations focuses on efficiency and productivity in producing goods and services.",
      "Resource Coordination: Operations coordinates people, materials, and processes to create value.",
      "Objective Support: Effective operations supports and enables overall business objectives.",
      "Value Creation: Operations creates value from inputs through organized production processes.",
      "Cost and Quality: Effective operations reduce costs and improve the quality of outputs."
    ],
    roleplayTips: [
      "I understand that operations is where strategy becomes reality—it's the function that actually delivers value to customers.",
      "Operational efficiency is a competitive advantage I contribute to by eliminating waste and improving processes.",
      "Every improvement in operations either reduces cost or improves quality—both of which strengthen our market position."
    ]
  },

  "OP190": {
    id: "OP190",
    code: "OP:190",
    name: "Discuss the role of ethics in operations",
    definition: "Explain how ethical standards guide operational decisions and practices.",
    keyPoints: [
      "Fair Labor: Ethical operations ensure fair labor practices and treatment of workers.",
      "Safe Conditions: Promoting safe working conditions is a core ethical obligation in operations.",
      "Risk Reduction: Ethical operations reduce legal and reputational risk for the organization.",
      "Stakeholder Trust: Ethics in operations builds trust with employees, customers, and the community.",
      "Environmental Responsibility: Environmental responsibility is part of ethical operations management."
    ],
    roleplayTips: [
      "I apply ethical standards to operational decisions because the way we operate reflects our organizational values.",
      "Ethical operations means treating workers fairly and ensuring safe conditions—not just meeting minimum legal requirements.",
      "Environmental responsibility in operations isn't just ethics—it's also increasingly a competitive and legal requirement."
    ]
  },

  "OP191": {
    id: "OP191",
    code: "OP:191",
    name: "Describe the use of technology in operations",
    definition: "Explain how technology improves operational efficiency and control.",
    keyPoints: [
      "Process Automation: Technology automates repetitive operational processes to reduce cost and error.",
      "Tracking and Scheduling: Improved tracking and scheduling through technology enhance operational control.",
      "Accuracy and Speed: Technology increases accuracy and speed in operational tasks.",
      "Error Reduction: Digital tools reduce human errors that cause defects and inefficiencies.",
      "Real-Time Visibility: Digital tools provide real-time operational visibility to support quick decisions."
    ],
    roleplayTips: [
      "I leverage operational technology to automate routine tasks so I can focus on higher-value problem-solving.",
      "Real-time operational data from technology tools allows us to identify and fix problems before they escalate.",
      "Technology in operations improves both efficiency and quality—I stay current on tools that can benefit our processes."
    ]
  },

  "OP004": {
    id: "OP004",
    code: "OP:004",
    name: "Describe health and safety regulations in business",
    definition: "Explain rules designed to protect employees and customers from harm.",
    keyPoints: [
      "Injury Prevention: Health and safety regulations are designed to prevent workplace injuries.",
      "Safe Environments: Regulations ensure that workplaces are safe for employees and customers.",
      "Legal Requirement: Compliance with health and safety regulations is legally mandated.",
      "OSHA Standards: OSHA sets minimum workplace safety standards that all employers must meet.",
      "Non-Compliance Penalties: Non-compliance with safety regulations carries serious legal penalties."
    ],
    roleplayTips: [
      "I take health and safety regulations seriously because they exist to protect real people from real harm.",
      "Understanding safety regulations helps me identify hazards and ensure we meet our legal obligations.",
      "Compliance with safety regulations isn't optional—violations expose both individuals and organizations to serious consequences."
    ]
  },

  "OP005": {
    id: "OP005",
    code: "OP:005",
    name: "Report noncompliance with health and safety regulations",
    definition: "Identify and report unsafe conditions or violations.",
    keyPoints: [
      "Employee Protection: Reporting noncompliance protects employees from potential harm.",
      "Liability Reduction: Reporting violations reduces organizational liability for injuries.",
      "Accountability Encouragement: Reporting encourages accountability for safety standards.",
      "Legal and Ethical Obligation: Reporting safety violations is both a legal and ethical obligation.",
      "Corrective Action Support: Documentation of violations supports corrective action processes."
    ],
    roleplayTips: [
      "I report safety violations because protecting my colleagues from harm is more important than avoiding a difficult conversation.",
      "Timely reporting of noncompliance prevents injuries that could have been avoided with corrective action.",
      "Documenting and reporting safety issues is a professional responsibility that protects everyone in the workplace."
    ]
  },

  "OP006": {
    id: "OP006",
    code: "OP:006",
    name: "Follow instructions for use of equipment, tools, and machinery",
    definition: "Use equipment according to guidelines to ensure safety.",
    keyPoints: [
      "Accident Prevention: Following operating instructions prevents accidents and equipment-related injuries.",
      "Equipment Life Extension: Proper use extends the useful life of expensive equipment.",
      "Efficiency Improvement: Using equipment correctly improves operational efficiency and output quality.",
      "Training Requirement: Training is required before operating unfamiliar equipment.",
      "Warranty Protection: Improper equipment use can void manufacturer warranties."
    ],
    roleplayTips: [
      "I always follow equipment operating instructions because safety and efficiency both depend on correct use.",
      "Taking time to read and understand instructions before using new equipment prevents costly and dangerous mistakes.",
      "Proper equipment use is a professional responsibility that protects both me and the organization's assets."
    ]
  },

  "OP007": {
    id: "OP007",
    code: "OP:007",
    name: "Follow safety precautions",
    definition: "Apply safety rules to reduce workplace risks.",
    keyPoints: [
      "Protective Equipment: Wearing protective equipment as required by safety guidelines prevents injuries.",
      "Posted Guidelines: Following posted safety guidelines ensures compliance with facility safety rules.",
      "Injury Prevention: Safety precautions directly prevent workplace injuries and illnesses.",
      "Risk Analysis Basis: Safety rules are based on analysis of actual workplace risks.",
      "Safety Culture: Consistent adherence to safety precautions creates and sustains a safe workplace culture."
    ],
    roleplayTips: [
      "I follow safety precautions consistently because rules based on risk analysis exist to prevent real injuries.",
      "Wearing protective equipment isn't just compliance—it's the difference between going home safely and an injury.",
      "Building safety habits means following precautions even when I'm in a hurry or when no one is watching."
    ]
  },

  "OP008": {
    id: "OP008",
    code: "OP:008",
    name: "Maintain a safe work environment",
    definition: "Ensure the workplace remains clean, organized, and hazard-free.",
    keyPoints: [
      "Accident Reduction: A clean, organized workplace reduces the risk of accidents and injuries.",
      "Morale Improvement: A safe, well-maintained work environment improves employee morale.",
      "Productivity Increase: Safe, organized workplaces support higher productivity.",
      "5S Organization: 5S workplace organization practices keep the workplace safe and efficient.",
      "Regular Inspection: Regular safety inspections identify and eliminate hazards before they cause harm."
    ],
    roleplayTips: [
      "I maintain a safe work environment because safety is everyone's responsibility, not just management's.",
      "An organized, hazard-free workplace makes everyone more efficient and reduces the risk of preventable accidents.",
      "I conduct regular checks of my work area to identify and address potential hazards proactively."
    ]
  },

  "OP009": {
    id: "OP009",
    code: "OP:009",
    name: "Explain procedures for handling accidents",
    definition: "Describe steps to take when workplace accidents occur.",
    keyPoints: [
      "Immediate Assistance: Providing immediate assistance to injured persons is the first priority.",
      "Prompt Reporting: Reporting incidents promptly enables faster response and documentation.",
      "Company Procedures: Following established company accident procedures ensures consistent response.",
      "Documentation Support: Accident documentation supports future prevention and insurance claims.",
      "First Aid Training: First aid training prepares employees to respond effectively to emergencies."
    ],
    roleplayTips: [
      "When accidents occur, I know to prioritize the injured person first and then follow our documented response procedures.",
      "Proper accident documentation isn't just paperwork—it enables the analysis needed to prevent similar incidents.",
      "First aid training has prepared me to respond effectively in the critical first moments after an accident."
    ]
  },

  "OP010": {
    id: "OP010",
    code: "OP:010",
    name: "Handle and report emergency situations",
    definition: "Respond appropriately to emergencies to minimize harm.",
    keyPoints: [
      "Emergency Plans: Following established emergency plans ensures coordinated and effective response.",
      "Clear Communication: Communicating clearly during emergencies prevents confusion and additional harm.",
      "People First Priority: Protecting people is always the first priority in any emergency situation.",
      "Drill Preparedness: Regular emergency drills build the preparedness needed for effective real response.",
      "Role Clarity: Clear role assignments in emergencies reduce confusion and improve outcomes."
    ],
    roleplayTips: [
      "Emergency preparedness means I know exactly what to do before an emergency happens—drills are essential practice.",
      "In an emergency, clear communication is as important as physical response—I stay calm and communicate clearly.",
      "My role in emergency response is defined and practiced so I can act quickly and correctly under pressure."
    ]
  },

  "OP013": {
    id: "OP013",
    code: "OP:013",
    name: "Explain routine security precautions",
    definition: "Describe everyday actions taken to prevent theft or loss.",
    keyPoints: [
      "Access Control: Securing entrances and exits controls who can enter the facility.",
      "Monitoring: Monitoring access and activity helps detect and deter security threats.",
      "Asset Protection: Routine security precautions protect valuable organizational assets.",
      "Incident Prevention: Consistent routine precautions prevent the majority of security incidents.",
      "Employee Role: Employees are the first line of defense in everyday security."
    ],
    roleplayTips: [
      "I take routine security precautions seriously because most security incidents are preventable with consistent basic practices.",
      "Security is everyone's responsibility—I follow procedures and report suspicious activity to protect the organization.",
      "Building security habits around access control and monitoring creates a workplace environment that deters theft and loss."
    ]
  },

  "OP152": {
    id: "OP152",
    code: "OP:152",
    name: "Follow established security procedures/policies",
    definition: "Comply with company rules related to security.",
    keyPoints: [
      "Loss Prevention: Following security procedures prevents theft and unauthorized access to assets.",
      "Employee Protection: Security procedures protect employees as well as physical and information assets.",
      "Trust Maintenance: Consistent security compliance maintains organizational trust and integrity.",
      "Consistency Requirement: Consistent adherence to security procedures is essential for their effectiveness.",
      "Violation Reporting: Security violations must be reported promptly to prevent escalation."
    ],
    roleplayTips: [
      "I follow security procedures consistently because selective compliance creates gaps that bad actors can exploit.",
      "Security policies exist to protect everyone in the organization—following them is a contribution to collective safety.",
      "When I observe a security violation, I report it because addressing it early prevents larger problems."
    ]
  },

  "OP153": {
    id: "OP153",
    code: "OP:153",
    name: "Protect company information and intangibles",
    definition: "Safeguard sensitive data and intellectual property.",
    keyPoints: [
      "Breach Prevention: Protecting company information prevents costly data breaches and leaks.",
      "Competitive Advantage: Protecting intellectual property preserves the competitive advantage it represents.",
      "Reputation Maintenance: Protecting sensitive information maintains organizational reputation.",
      "Intangible Value: Intangible assets like data and IP often have greater business value than physical assets.",
      "Dual Protection: Both digital and physical protections are needed to secure company information."
    ],
    roleplayTips: [
      "I treat company information with the same care I'd give to any valuable physical asset—because it often is more valuable.",
      "Protecting intellectual property isn't just legal compliance—it's preserving the competitive advantage we've built.",
      "Both digital security practices and physical document handling are part of my responsibility to protect company information."
    ]
  },

  "OP441": {
    id: "OP441",
    code: "OP:441",
    name: "Explain information privacy, security, and confidentiality considerations",
    definition: "Describe responsibilities related to protecting information.",
    keyPoints: [
      "Customer Privacy: Protecting customer privacy is a primary obligation in information handling.",
      "Secure Data Handling: Secure data handling prevents unauthorized access to sensitive information.",
      "Legal Compliance: Privacy and security obligations are mandated by various laws and regulations.",
      "Policy Communication: Privacy policies must be clearly communicated to all stakeholders.",
      "Breach Consequences: Information breaches carry significant financial and reputational harm."
    ],
    roleplayTips: [
      "I take information privacy, security, and confidentiality seriously because the people whose data we hold trust us with it.",
      "Understanding our legal privacy obligations helps me ensure that every information-handling decision I make is compliant.",
      "Preventing data breaches is far better than responding to them—I build privacy and security into every process."
    ]
  },

  "OP064": {
    id: "OP064",
    code: "OP:064",
    name: "Maintain data security",
    definition: "Protect electronic and physical data from unauthorized access.",
    keyPoints: [
      "Access Controls: Passwords and access controls are the first line of defense for data security.",
      "Secure Storage: Secure storage systems protect data from unauthorized access and theft.",
      "Loss Prevention: Data security measures prevent loss from theft, accident, or system failure.",
      "Backup Protection: Regular backups protect against data loss from technical failures.",
      "Human Error Reduction: Employee training reduces the human errors that cause most data security incidents."
    ],
    roleplayTips: [
      "I maintain strong passwords and access controls because they are the foundation of data security.",
      "Regular data backups are a safety net I rely on—losing data without a backup can be catastrophic for the organization.",
      "I treat data security as an ongoing responsibility, not a one-time setup, because threats evolve continuously."
    ]
  },

  "OP158": {
    id: "OP158",
    code: "OP:158",
    name: "Explain the nature of project management",
    definition: "Describe how projects are planned, executed, and completed.",
    keyPoints: [
      "Temporary and Goal-Oriented: Projects are temporary, goal-oriented efforts with defined start and end points.",
      "Timeline and Resources: Project management uses timelines and resource allocation to guide execution.",
      "Objective Achievement: Project management ensures defined objectives are met on time and within budget.",
      "Project Triangle: Scope, time, and cost form the project management triangle of constraints.",
      "Methodology Value: Project management methodology improves the success rates of complex initiatives."
    ],
    roleplayTips: [
      "I approach projects with clear scope, timeline, and resource planning because that structure is what makes successful delivery possible.",
      "Understanding the project management triangle helps me make informed trade-offs when constraints conflict.",
      "Good project management is about preventing surprises through planning, not just responding to problems as they arise."
    ]
  },

  "OP675": {
    id: "OP675",
    code: "OP:675",
    name: "Describe the role of ethics in project management",
    definition: "Explain ethical responsibilities during project execution.",
    keyPoints: [
      "Honest Reporting: Honest reporting of project status and risks is a fundamental ethical obligation.",
      "Fair Treatment: Treating all team members fairly and with respect is an ethical requirement.",
      "Responsible Resource Use: Using project resources responsibly and only for project purposes is required.",
      "Stakeholder Protection: Ethical project management protects the interests of all project stakeholders.",
      "Conflict Prevention: Transparency in project management prevents conflicts and builds stakeholder trust."
    ],
    roleplayTips: [
      "I report project status honestly, including problems, because stakeholders need accurate information to make good decisions.",
      "Ethical project management means treating every team member fairly and making decisions that serve the project goals.",
      "Responsible resource use is an ethical commitment—project resources belong to the organization, not to me."
    ]
  },

  "OP519": {
    id: "OP519",
    code: "OP:519",
    name: "Plan project",
    definition: "Outline steps needed to complete a project.",
    keyPoints: [
      "Goal Setting: Planning begins with clearly defining the project goals and success criteria.",
      "Timeline Establishment: Establishing realistic timelines guides execution and sets expectations.",
      "Resource Allocation: Allocating resources appropriately ensures the project has what it needs.",
      "Uncertainty Reduction: Planning reduces uncertainty by anticipating requirements and challenges.",
      "Risk Anticipation: A good plan anticipates risks and dependencies before they become problems."
    ],
    roleplayTips: [
      "I invest time in thorough project planning because it prevents the much larger time lost to fixing avoidable problems.",
      "A good project plan sets clear expectations for all stakeholders and provides a roadmap for the team to follow.",
      "I include risk planning in every project because surprises during execution are usually the result of not thinking ahead."
    ]
  },

  "OP520": {
    id: "OP520",
    code: "OP:520",
    name: "Monitor projects and take corrective actions",
    definition: "Track progress and fix issues as they arise.",
    keyPoints: [
      "Delay Identification: Monitoring identifies delays and deviations from the project plan early.",
      "Plan Adjustment: Adjusting plans in response to real conditions keeps the project on track.",
      "Quality Maintenance: Monitoring ensures that quality standards are maintained throughout execution.",
      "Early Catching: Regular status checks catch issues early before they compound into larger problems.",
      "Compounding Prevention: Corrective action prevents small issues from growing into project failures."
    ],
    roleplayTips: [
      "I monitor project progress proactively because catching issues early is always less costly than addressing them late.",
      "When I identify a project issue, I take corrective action immediately rather than hoping it resolves itself.",
      "Regular status tracking gives me and my stakeholders confidence that we know where the project stands at all times."
    ]
  },

  "OP521": {
    id: "OP521",
    code: "OP:521",
    name: "Evaluate project success",
    definition: "Determine whether project objectives were achieved.",
    keyPoints: [
      "Outcome Measurement: Evaluating success requires measuring actual outcomes against defined objectives.",
      "Goal Comparison: Comparing actual results to planned goals reveals gaps and achievements.",
      "Improvement Identification: Post-project evaluation identifies specific areas for future improvement.",
      "Learning Improvement: Post-project review improves performance on future similar projects.",
      "Pre-Definition: Success criteria must be defined before the project begins to enable meaningful evaluation."
    ],
    roleplayTips: [
      "I evaluate every project against its original objectives because that comparison reveals what we actually achieved.",
      "Post-project reviews are investments in future performance—lessons learned now prevent repeated mistakes.",
      "Defining success criteria before the project starts is essential—you can't objectively evaluate what you didn't measure."
    ]
  },

  "OP003": {
    id: "OP003",
    code: "OP:003",
    name: "Identify resources needed for project",
    definition: "Determine people, materials, and funds required.",
    keyPoints: [
      "Labor Requirements: Identifying the right people with the right skills is essential for project success.",
      "Budget Planning: Accurate budget planning ensures financial resources are available throughout the project.",
      "Equipment Needs: Identifying equipment needs prevents project delays from resource shortfalls.",
      "Shortfall Prevention: Accurate resource identification prevents the shortfalls that derail projects.",
      "Timeline Alignment: Resource planning must be aligned with the project timeline and milestones."
    ],
    roleplayTips: [
      "I identify resource needs thoroughly at project start because discovering gaps mid-project is much more disruptive.",
      "Resource planning includes people, materials, and budget—all three must be confirmed before committing to a timeline.",
      "Aligning resource availability with project milestones ensures we have what we need when we need it."
    ]
  },

  "OP001": {
    id: "OP001",
    code: "OP:001",
    name: "Develop project plan",
    definition: "Create a detailed roadmap for completing a project.",
    keyPoints: [
      "Tasks and Timelines: A project plan defines specific tasks and the timelines for their completion.",
      "Responsibilities: Clear responsibility assignments in the plan ensure accountability.",
      "Milestones: Milestones mark key progress points and provide checkpoints for evaluation.",
      "Execution Guidance: A detailed plan guides execution and reduces the need for improvised decisions.",
      "Communication Tool: Plans must be communicated to all stakeholders to align expectations."
    ],
    roleplayTips: [
      "A detailed project plan is my primary tool for keeping the team aligned and the project on track.",
      "I communicate the project plan to all stakeholders early so everyone understands expectations and responsibilities.",
      "The project plan isn't just for me—it's the shared document that enables team coordination throughout execution."
    ]
  },

  "OP002": {
    id: "OP002",
    code: "OP:002",
    name: "Apply project-management tools",
    definition: "Use tools to track and communicate progress.",
    keyPoints: [
      "Gantt Charts: Gantt charts visualize project timelines and task dependencies effectively.",
      "Status Reports: Regular status reports communicate progress to stakeholders and surface issues.",
      "Project Software: Project management software improves coordination and tracking efficiency.",
      "Visibility and Accountability: Tools improve visibility and accountability throughout the project.",
      "Real-Time Collaboration: Technology enables real-time collaboration and status updates across the team."
    ],
    roleplayTips: [
      "I use project management tools because they create the visibility and accountability that keep projects on track.",
      "Gantt charts help me communicate project timelines visually—most stakeholders understand them immediately.",
      "Project management software keeps everyone updated in real time, which reduces the miscommunication that derails projects."
    ]
  },

  "OP159": {
    id: "OP159",
    code: "OP:159",
    name: "Evaluate project results",
    definition: "Assess project outcomes and lessons learned.",
    keyPoints: [
      "Effectiveness Assessment: Evaluation measures whether the project achieved its intended outcomes.",
      "Efficiency Review: Assessing efficiency reveals whether resources were used effectively.",
      "Future Improvement: Identifying improvement opportunities guides future project management.",
      "Mistake Prevention: Lessons learned from evaluation prevent repeated mistakes on future projects.",
      "Capability Building: Systematic evaluation builds organizational project management capability over time."
    ],
    roleplayTips: [
      "I conduct post-project evaluations because the lessons learned are valuable assets for future work.",
      "Evaluating both what worked and what didn't gives me a complete picture of where to invest in improvement.",
      "Documenting project results and lessons learned creates an organizational memory that benefits everyone."
    ]
  },

  "OP015": {
    id: "OP015",
    code: "OP:015",
    name: "Explain the nature and scope of purchasing",
    definition: "Describe how businesses acquire goods and services.",
    keyPoints: [
      "Supplier Selection: Purchasing involves identifying and selecting suppliers who meet quality and cost requirements.",
      "Cost Control: Effective purchasing manages costs across the supply chain.",
      "Quality Assurance: Purchasing ensures that acquired goods and services meet required quality standards.",
      "Operational Impact: Purchasing affects all business operations by determining input quality and cost.",
      "Strategic Advantage: Strategic purchasing creates competitive advantage through better value."
    ],
    roleplayTips: [
      "I understand that purchasing decisions affect not just cost but also quality and operational reliability.",
      "Strategic purchasing means thinking beyond the immediate transaction to the long-term impact on operations.",
      "Effective purchasing management is a competitive advantage—getting better value on inputs improves margin."
    ]
  },

  "OP016": {
    id: "OP016",
    code: "OP:016",
    name: "Place orders/reorders",
    definition: "Request supplies when needed.",
    keyPoints: [
      "Shortage Prevention: Timely ordering prevents supply shortages that disrupt operations.",
      "Operations Maintenance: Consistent reordering maintains uninterrupted operations.",
      "Productivity Support: Having needed supplies on hand supports employee productivity.",
      "Reorder Points: Establishing reorder points prevents stockouts through proactive ordering.",
      "Forecasting Role: Accurate demand forecasting reduces the need for emergency orders."
    ],
    roleplayTips: [
      "I maintain accurate reorder points to ensure we never run short of critical supplies.",
      "Proactive ordering based on demand forecasting reduces emergency purchases that cost more and disrupt operations.",
      "Timely reordering is a simple but important part of keeping operations running smoothly."
    ]
  },

  "OP031": {
    id: "OP031",
    code: "OP:031",
    name: "Maintain inventory of supplies",
    definition: "Track and manage stock levels.",
    keyPoints: [
      "Overstocking Avoidance: Maintaining appropriate inventory levels avoids overstocking and tied-up capital.",
      "Shortage Reduction: Accurate inventory tracking reduces the risk of shortages that halt operations.",
      "Efficiency Improvement: Organized inventory management improves operational efficiency.",
      "Accuracy Requirement: Inventory accuracy is essential for effective purchasing and operations planning.",
      "Technology Support: Technology tools improve the accuracy and efficiency of inventory tracking."
    ],
    roleplayTips: [
      "I maintain accurate inventory records because both overstocking and shortages are costly to operations.",
      "Inventory management is about balance—having enough to meet needs without tying up excessive capital in stock.",
      "Technology tools for inventory tracking reduce errors and give me real-time visibility into stock levels."
    ]
  },

  "OP246": {
    id: "OP246",
    code: "OP:246",
    name: "Discuss ethical purchasing methods",
    definition: "Explain responsible buying practices.",
    keyPoints: [
      "Fair Treatment: Ethical purchasing means treating suppliers fairly and with respect.",
      "Transparency: Maintaining transparency in the purchasing process ensures fairness.",
      "Legal Compliance: Ethical purchasing requires compliance with applicable laws and regulations.",
      "Reputation Protection: Ethical purchasing practices protect organizational reputation.",
      "Supplier Diversity: Considering supplier diversity is an important ethical purchasing consideration."
    ],
    roleplayTips: [
      "I apply ethical standards to purchasing because our relationships with suppliers reflect our organizational values.",
      "Transparent purchasing processes protect both the organization and suppliers from misunderstandings and disputes.",
      "Ethical purchasing means I consider supplier diversity and fair treatment, not just price and quality."
    ]
  },

  "OP247": {
    id: "OP247",
    code: "OP:247",
    name: "Explain impact of purchasing on productivity",
    definition: "Describe how purchasing affects business efficiency.",
    keyPoints: [
      "Timely Delivery: Timely delivery of purchased materials directly enables operational productivity.",
      "Quality Materials: Purchasing quality materials prevents defects and rework that reduce productivity.",
      "Cost Control: Effective cost control in purchasing improves the business's financial efficiency.",
      "Operations Disruption: Poor purchasing decisions disrupt operations and reduce overall productivity.",
      "Competitive Pricing: Strategic purchasing enables competitive pricing for end customers."
    ],
    roleplayTips: [
      "I understand that purchasing decisions have a direct impact on operational productivity and product quality.",
      "Sourcing quality materials at the right time is essential—late or defective materials can halt operations.",
      "Strategic purchasing that balances cost and quality enables the business to be competitive without sacrificing standards."
    ]
  },

  "OP160": {
    id: "OP160",
    code: "OP:160",
    name: "Manage the bid process",
    definition: "Oversee supplier proposals and selection.",
    keyPoints: [
      "Fair Evaluation: Fair and consistent evaluation of bids ensures the best supplier is selected.",
      "Cost Comparison: Comparing costs across multiple bids identifies the best value option.",
      "Transparency Maintenance: Maintaining transparency in the bid process protects organizational integrity.",
      "Best Value Assurance: Competitive bidding ensures the organization obtains the best available value.",
      "Dispute Prevention: Documentation in the bid process protects against disputes and challenges."
    ],
    roleplayTips: [
      "I manage the bid process with consistency and transparency because fair evaluation leads to the best supplier selection.",
      "Competitive bidding protects the organization by ensuring we get the best value available in the market.",
      "Thorough documentation of the bid process protects against disputes and demonstrates due diligence."
    ]
  },

  "OP161": {
    id: "OP161",
    code: "OP:161",
    name: "Select vendors",
    definition: "Choose suppliers based on performance and value.",
    keyPoints: [
      "Reliability Evaluation: Vendor reliability is a critical factor in selection decisions.",
      "Cost Assessment: Cost assessment ensures vendors offer competitive and sustainable pricing.",
      "Quality Standards: Vendor quality capabilities must meet the organization's product or service standards.",
      "Quality Impact: Vendor selection directly affects the quality of the organization's products.",
      "Risk Reduction: Using multiple vendors reduces the risk of supply disruption from a single source."
    ],
    roleplayTips: [
      "I evaluate vendors on reliability, quality, and cost because all three factors affect operational performance.",
      "Building relationships with multiple qualified vendors reduces our vulnerability to supply disruptions.",
      "Vendor selection is a strategic decision—choosing the wrong supplier can affect every product we make."
    ]
  },

  "OP162": {
    id: "OP162",
    code: "OP:162",
    name: "Evaluate vendor performance",
    definition: "Assess supplier effectiveness over time.",
    keyPoints: [
      "Quality Standards: Evaluating vendor performance includes assessing whether quality standards are consistently met.",
      "Delivery Reliability: Delivery reliability is a key metric in vendor performance evaluation.",
      "Cost Efficiency: Cost efficiency over time is an important dimension of vendor performance.",
      "Relationship Improvement: Regular performance evaluation improves supplier relationships by identifying issues early.",
      "Underperformer Response: Poor performer issues must be addressed directly to protect operational quality."
    ],
    roleplayTips: [
      "I evaluate vendor performance regularly because consistent quality and delivery are essential to our operations.",
      "Regular performance reviews give vendors the feedback they need to improve and signal that we take standards seriously.",
      "Addressing vendor performance issues early prevents them from becoming operational disruptions."
    ]
  },

  "OP017": {
    id: "OP017",
    code: "OP:017",
    name: "Explain the concept of production",
    definition: "Describe the process of creating goods and services.",
    keyPoints: [
      "Input Conversion: Production converts inputs including labor and materials into valuable outputs.",
      "Value Addition: Production adds value by transforming raw inputs into products customers want.",
      "Customer Need Support: Production systems are designed to meet defined customer needs.",
      "System Variety: Production systems vary significantly across different industries.",
      "Profitability Driver: Efficiency in production drives profitability by reducing cost per unit."
    ],
    roleplayTips: [
      "I understand production as the value-creation process—it's how inputs become the outputs customers pay for.",
      "Efficient production is essential for competitiveness because it determines cost structure and quality.",
      "Understanding production concepts helps me contribute to continuous improvement in our operational processes."
    ]
  },

  "OP163": {
    id: "OP163",
    code: "OP:163",
    name: "Identify quality-control measures",
    definition: "Recognize methods used to maintain standards.",
    keyPoints: [
      "Inspection Methods: Inspections are a primary quality control method for detecting defects.",
      "Testing Procedures: Testing products and materials verifies they meet required standards.",
      "Performance Standards: Clearly defined performance standards enable objective quality measurement.",
      "Defect Prevention: Quality control prevents defects from reaching customers.",
      "Standard Definition: Quality standards must be clearly defined before they can be effectively controlled."
    ],
    roleplayTips: [
      "I recognize that quality control is most effective when built into the process rather than added at the end.",
      "Identifying the right quality measures for each process requires understanding what defects are possible and most costly.",
      "Clear quality standards are the foundation of all quality control—you can't control what you haven't defined."
    ]
  },

  "OP164": {
    id: "OP164",
    code: "OP:164",
    name: "Utilize quality-control methods at work",
    definition: "Apply quality practices to reduce errors.",
    keyPoints: [
      "Process Consistency: Applying quality methods improves consistency in work processes and outputs.",
      "Output Accuracy: Quality practices improve the accuracy and reliability of work outputs.",
      "Customer Satisfaction: Quality control directly supports customer satisfaction and retention.",
      "Checklist and Audit Use: Quality methods include checklists, audits, and statistical controls.",
      "Shared Responsibility: Everyone in the organization is responsible for maintaining quality."
    ],
    roleplayTips: [
      "I apply quality control methods in my daily work because preventing errors is more efficient than correcting them.",
      "Using checklists and review processes helps me deliver consistent, high-quality work.",
      "Quality isn't just the quality department's responsibility—I take personal ownership of the quality of my work."
    ]
  },

  "OP019": {
    id: "OP019",
    code: "OP:019",
    name: "Describe crucial elements of a quality culture",
    definition: "Explain values that support continuous improvement.",
    keyPoints: [
      "Employee Involvement: A quality culture requires active employee involvement in identifying and solving quality issues.",
      "Accountability: Accountability for quality outcomes is essential to sustaining a quality culture.",
      "Customer Focus: Customer focus keeps quality standards aligned with what matters most to those we serve.",
      "Long-Term Error Reduction: A quality culture reduces errors over the long term through sustained commitment.",
      "Leadership Championing: Leadership must champion quality values for them to take root in the organization."
    ],
    roleplayTips: [
      "I contribute to a quality culture by taking personal responsibility for the quality of everything I produce.",
      "A quality culture starts with leadership that models the standards they expect and holds everyone accountable.",
      "Customer focus keeps quality efforts aligned with what matters—if it doesn't improve the customer experience, it's not valuable."
    ]
  },

  "OP652": {
    id: "OP652",
    code: "OP:652",
    name: "Resolve problems with suppliers' quality issues",
    definition: "Address and correct supplier-related quality problems.",
    keyPoints: [
      "Communication Requirement: Resolving supplier quality issues requires clear and direct communication.",
      "Corrective Action: Effective resolution involves implementing specific corrective actions.",
      "Supplier Accountability: Holding suppliers accountable for quality maintains supply chain standards.",
      "Escalating Costs: Unresolved supplier quality issues escalate costs through defects and rework.",
      "Documentation Support: Documentation of quality issues supports the resolution process."
    ],
    roleplayTips: [
      "I address supplier quality issues directly and professionally because unresolved problems affect our customers.",
      "Documenting quality issues with suppliers creates the evidence needed to drive corrective action.",
      "Holding suppliers accountable for quality is part of managing a supply chain that delivers consistent value."
    ]
  },

  "OP024": {
    id: "OP024",
    code: "OP:024",
    name: "Explain the nature of overhead/operating costs",
    definition: "Describe ongoing business expenses.",
    keyPoints: [
      "Fixed Expenses: Overhead includes fixed expenses like rent and utilities that continue regardless of volume.",
      "Salary Costs: Employee salaries represent a significant component of operating costs.",
      "Supply Costs: Ongoing supply and material costs are part of regular operating expenses.",
      "Profit Prerequisite: Overhead must be fully covered before any profit is possible.",
      "Margin Improvement: Controlling overhead improves profit margins without changing revenue."
    ],
    roleplayTips: [
      "I understand that overhead costs must be covered before the business can generate profit—controlling them matters.",
      "Awareness of operating costs helps me make decisions that avoid unnecessary expenses.",
      "Every dollar saved in overhead either goes to profit or allows us to offer more competitive pricing."
    ]
  },

  "OP025": {
    id: "OP025",
    code: "OP:025",
    name: "Explain employee's role in expense control",
    definition: "Describe how employees help reduce costs.",
    keyPoints: [
      "Waste Avoidance: Avoiding waste in materials and time is the most direct employee contribution to cost control.",
      "Efficient Resource Use: Using resources efficiently reduces operating costs directly.",
      "Procedure Following: Following established procedures reduces the costly errors and rework they prevent.",
      "Direct Impact: Employee behavior directly affects the operating costs of the organization.",
      "Profitability Support: Cost-aware employee behavior supports overall business profitability."
    ],
    roleplayTips: [
      "I recognize that my daily decisions about resource use have a real impact on the organization's operating costs.",
      "Avoiding waste isn't just about following rules—it's about understanding how my behavior affects the bottom line.",
      "Cost-aware employees make the organization more competitive by protecting margins from within."
    ]
  },

  "OP228": {
    id: "OP228",
    code: "OP:228",
    name: "Organize and prioritize work",
    definition: "Arrange tasks based on importance and urgency.",
    keyPoints: [
      "Time Management: Organizing and prioritizing work improves time management and reduces wasted effort.",
      "Efficiency Improvement: Prioritized work lists improve efficiency by focusing effort on what matters most.",
      "Stress Reduction: Good organization reduces the stress of managing multiple competing demands.",
      "Deadline Prevention: Prioritization prevents missed deadlines by ensuring high-priority work is completed first.",
      "Output Improvement: Systematic organization of work improves overall output quality and quantity."
    ],
    roleplayTips: [
      "I start each day by organizing and prioritizing my tasks so I focus on what will have the greatest impact.",
      "Prioritizing work based on urgency and importance ensures I meet critical deadlines without sacrificing quality.",
      "Good organization of work reduces stress because I always know what I should be working on and why."
    ]
  },

  "OP230": {
    id: "OP230",
    code: "OP:230",
    name: "Coordinate work with team members",
    definition: "Work collaboratively to complete tasks.",
    keyPoints: [
      "Communication: Coordinating with team members requires clear and proactive communication.",
      "Shared Goals: Aligning around shared goals ensures team efforts are directed effectively.",
      "Team Efficiency: Effective coordination improves overall team efficiency and output.",
      "Duplication Prevention: Good coordination prevents the duplication of effort that wastes resources.",
      "Role Clarity: Clear role assignments improve team performance by reducing confusion."
    ],
    roleplayTips: [
      "I coordinate actively with team members to ensure we're aligned and not duplicating each other's work.",
      "Clear communication about who is doing what is the foundation of effective team coordination.",
      "When I coordinate well with teammates, our combined effort is significantly more effective than independent work."
    ]
  },

  "OP196": {
    id: "OP196",
    code: "OP:196",
    name: "Coordinate activities with other departments",
    definition: "Align work across departments.",
    keyPoints: [
      "Duplication Prevention: Cross-departmental coordination prevents costly duplication of efforts.",
      "Workflow Improvement: Aligning activities across departments improves overall workflow efficiency.",
      "Organizational Goal Support: Cross-functional coordination supports achievement of organizational goals.",
      "Silo Reduction: Cross-departmental communication reduces the information silos that impede performance.",
      "Timeline Alignment: Shared timelines across departments improve coordination and reduce delays."
    ],
    roleplayTips: [
      "I proactively coordinate with other departments because our work affects each other and alignment improves outcomes.",
      "Cross-departmental coordination helps everyone work more efficiently by eliminating duplication and confusion.",
      "I see relationships with other departments as partnerships—when they succeed, we succeed."
    ]
  },

  "OP354": {
    id: "OP354",
    code: "OP:354",
    name: "Monitor completion of delegated tasks",
    definition: "Track assigned work to ensure completion.",
    keyPoints: [
      "Accountability Maintenance: Monitoring delegated tasks maintains accountability for assigned work.",
      "Timely Delivery: Tracking ensures tasks are completed by the required deadlines.",
      "Quality Control: Monitoring delegated work maintains quality standards throughout.",
      "Support Provision: Regular monitoring provides opportunities to support team members who need help.",
      "Expectation Clarity: Clear expectations at delegation guide monitoring and reduce misunderstandings."
    ],
    roleplayTips: [
      "I monitor delegated tasks because follow-through on delegation is essential—assigning work doesn't guarantee completion.",
      "Regular check-ins on delegated tasks give me early warning of issues before they become problems.",
      "Monitoring completion isn't about distrust—it's about providing support and ensuring expectations are clear."
    ]
  },

  "OP355": {
    id: "OP355",
    code: "OP:355",
    name: "Streamline work processes",
    definition: "Simplify tasks to improve efficiency.",
    keyPoints: [
      "Waste Reduction: Streamlining processes reduces the waste of time, effort, and materials.",
      "Time Savings: Simplified processes save time by eliminating unnecessary steps.",
      "Productivity Improvement: Streamlined workflows improve overall productivity and throughput.",
      "Process Mapping: Process mapping reveals inefficiencies that can be eliminated through streamlining.",
      "Buy-In Requirement: Streamlining efforts require buy-in from those who perform the work."
    ],
    roleplayTips: [
      "I regularly look for ways to streamline my work processes because efficiency gains free up time for higher-value activities.",
      "Process mapping helps me see where the bottlenecks and inefficiencies are in current workflows.",
      "Streamlining works best when the people doing the work help design the improvements—they know where the waste is."
    ]
  },

  "OP442": {
    id: "OP442",
    code: "OP:442",
    name: "Comply with policies for use of property and equipment",
    definition: "Follow rules governing company assets.",
    keyPoints: [
      "Damage Prevention: Compliance with property policies prevents damage to valuable company assets.",
      "Asset Life Extension: Proper use of property and equipment extends their useful life.",
      "Safety Assurance: Policy compliance ensures that equipment is used safely.",
      "Organization Protection: Policy compliance protects the organization from liability.",
      "Value Maintenance: Proper use maintains the value of equipment assets over time."
    ],
    roleplayTips: [
      "I follow company policies for property and equipment use because they exist to protect both the assets and the users.",
      "Proper care of company property reflects professional responsibility and reduces the cost of replacements.",
      "Policy compliance for equipment use is part of being a trustworthy employee who respects organizational resources."
    ]
  },

  "OP443": {
    id: "OP443",
    code: "OP:443",
    name: "Explain the concept of supply chain",
    definition: "Describe the flow of goods from suppliers to customers.",
    keyPoints: [
      "Supply Chain Parties: The supply chain involves suppliers, manufacturers, distributors, and retailers.",
      "Flow Description: Supply chains describe the entire flow of goods from raw materials to end customers.",
      "Visibility Value: Supply chain visibility improves responsiveness to disruptions and demand changes.",
      "Interconnection: All parties in the supply chain are interdependent and affect each other's performance.",
      "Disruption Impact: Disruptions anywhere in the supply chain affect the performance of the entire chain."
    ],
    roleplayTips: [
      "Understanding the supply chain helps me see how my purchasing and operational decisions affect the entire value delivery system.",
      "Supply chain visibility is essential—knowing where materials are at each stage allows us to respond to disruptions quickly.",
      "Every link in the supply chain depends on the others—my performance affects our suppliers and customers alike."
    ]
  },

  "OP444": {
    id: "OP444",
    code: "OP:444",
    name: "Explain benefits of supply chain collaboration",
    definition: "Describe advantages of working closely with supply chain partners.",
    keyPoints: [
      "Efficiency Improvement: Supply chain collaboration improves efficiency by aligning planning and processes.",
      "Cost Reduction: Collaborative supply chains reduce costs through shared information and joint planning.",
      "Customer Service Enhancement: Better supply chain collaboration improves customer service levels.",
      "Data and Trust Requirement: Collaboration requires shared data and mutual trust between partners.",
      "Waste Reduction: Joint planning in collaborative supply chains reduces inventory and logistics waste."
    ],
    roleplayTips: [
      "I invest in supply chain relationships because collaboration with partners creates benefits that independent operation cannot.",
      "Sharing data with supply chain partners improves planning accuracy and reduces the waste caused by uncertainty.",
      "Supply chain collaboration is a strategic differentiator—companies that collaborate effectively outperform those that operate in isolation."
    ]
  },

  "PD002": {
    id: "PD002",
    code: "PD:002",
    name: "Maintain appropriate personal appearance",
    definition: "Present oneself professionally to create a positive impression.",
    keyPoints: [
      "Dress Codes: Following workplace dress codes demonstrates respect for professional standards.",
      "Hygiene Maintenance: Maintaining personal hygiene is a fundamental professional expectation.",
      "Company Image Reflection: Personal appearance reflects the company's image and brand.",
      "Professionalism Communication: Appearance communicates professionalism before words are spoken.",
      "First Impression Importance: First impressions based on appearance significantly influence professional relationships."
    ],
    roleplayTips: [
      "I maintain professional appearance because it communicates respect for my colleagues, customers, and the organization.",
      "Dressing appropriately for my workplace shows that I understand and value professional norms.",
      "First impressions in business are often formed in seconds—my appearance is the first signal I send about my professionalism."
    ]
  },

  "PD009": {
    id: "PD009",
    code: "PD:009",
    name: "Demonstrate systematic behavior",
    definition: "Work in an organized and methodical manner.",
    keyPoints: [
      "Routine Following: Following established routines improves consistency and efficiency in work.",
      "Organization Maintenance: Staying organized reduces time wasted searching for information or materials.",
      "Efficiency Improvement: Systematic work habits improve efficiency and output quality.",
      "Error Reduction: Systematic behavior reduces errors caused by rushing or disorganization.",
      "Reliability Building: Consistent, organized behavior builds a reputation for reliability."
    ],
    roleplayTips: [
      "I work systematically because organized, methodical approaches produce more consistent results than improvised ones.",
      "Building good work routines reduces the mental load of decision-making and helps me focus on higher-value problems.",
      "Systematic behavior is how I demonstrate reliability—people can count on me to produce consistent, quality work."
    ]
  },

  "PD018": {
    id: "PD018",
    code: "PD:018",
    name: "Set personal goals",
    definition: "Establish objectives for personal and professional growth.",
    keyPoints: [
      "Short and Long Term: Effective goal setting includes both short-term and long-term objectives.",
      "Motivation Function: Personal goals provide motivation to work toward desired outcomes.",
      "Performance Improvement: Setting goals improves performance by providing clear targets.",
      "SMART Goals: SMART goals—specific, measurable, achievable, relevant, time-bound—are more achievable.",
      "Direction Provision: Goals provide direction and focus for personal and professional development efforts."
    ],
    roleplayTips: [
      "I set specific, measurable goals because vague aspirations rarely translate into meaningful progress.",
      "Having both short-term and long-term goals helps me balance immediate priorities with future development.",
      "My personal goals keep me focused and motivated, especially when daily demands pull my attention in multiple directions."
    ]
  },

  "PD179": {
    id: "PD179",
    code: "PD:179",
    name: "Balance personal and professional responsibilities",
    definition: "Manage work and personal life effectively.",
    keyPoints: [
      "Time Management: Effective time management is essential for balancing personal and professional responsibilities.",
      "Stress Reduction: Maintaining work-life balance reduces the chronic stress that damages performance.",
      "Productivity Maintenance: Balance maintains the energy and focus needed for sustained high performance.",
      "Burnout Prevention: Balance prevents burnout that reduces long-term professional effectiveness.",
      "Long-Term Performance: Boundaries between work and personal life support long-term performance and well-being."
    ],
    roleplayTips: [
      "I prioritize work-life balance because sustainable performance requires protecting personal time and energy.",
      "Setting boundaries between professional and personal time is a professional skill that prevents burnout.",
      "When I balance my responsibilities effectively, I perform better at both work and in my personal life."
    ]
  },

  "PD250": {
    id: "PD250",
    code: "PD:250",
    name: "Adhere to company protocols and policies",
    definition: "Follow established workplace rules and procedures.",
    keyPoints: [
      "Consistency: Following protocols consistently ensures predictable, reliable outcomes.",
      "Legal Compliance: Policy adherence ensures the organization meets its legal obligations.",
      "Professional Behavior: Adhering to policies demonstrates professional maturity and respect.",
      "Employee Protection: Policies protect both employees and the organization from harm and liability.",
      "Violation Prevention: Understanding policies prevents violations caused by ignorance."
    ],
    roleplayTips: [
      "I follow company protocols and policies because they establish the standards that make the organization function effectively.",
      "Understanding why policies exist helps me follow them thoughtfully rather than just mechanically.",
      "Policy adherence is a professional responsibility—violations, even unintentional ones, have real consequences."
    ]
  },

  "PD251": {
    id: "PD251",
    code: "PD:251",
    name: "Follow rules of conduct",
    definition: "Behave ethically and professionally at work.",
    keyPoints: [
      "Respect for Others: Rules of conduct require treating colleagues, customers, and stakeholders with respect.",
      "Integrity Maintenance: Following conduct rules maintains personal and organizational integrity.",
      "Accountability: Adhering to rules of conduct demonstrates accountability for professional behavior.",
      "Expected Behavior: Rules of conduct define the behavior expected of all members of the organization.",
      "Violation Consequences: Violations of conduct rules have professional and sometimes legal consequences."
    ],
    roleplayTips: [
      "I follow rules of conduct because they define the ethical and professional standards that make workplaces function.",
      "Treating everyone with respect isn't just a rule—it's a value I hold regardless of whether conduct rules require it.",
      "Following rules of conduct consistently builds a reputation for professionalism and integrity."
    ]
  },

  "PD252": {
    id: "PD252",
    code: "PD:252",
    name: "Follow chain of command",
    definition: "Communicate through proper authority levels.",
    keyPoints: [
      "Clear Communication: Following the chain of command ensures clear and accountable communication.",
      "Leadership Respect: Communicating through proper channels shows respect for organizational leadership.",
      "Efficient Problem-Solving: The chain of command channels problems to the people with authority to solve them.",
      "Accountability Structure: Chain of command ensures accountability at each level of the organization.",
      "Relationship Preservation: Bypassing the chain of command can damage important professional relationships."
    ],
    roleplayTips: [
      "I follow the chain of command because it ensures accountability and directs issues to the people best equipped to resolve them.",
      "Respecting the chain of command doesn't mean I can't express disagreement—it means I do so through the right channels.",
      "When I bypass the chain of command, I risk damaging relationships and undermining the trust that makes organizations work."
    ]
  },

  "PD254": {
    id: "PD254",
    code: "PD:254",
    name: "Determine the nature of organizational goals",
    definition: "Identify what a company aims to accomplish.",
    keyPoints: [
      "Growth Objectives: Organizational goals often include growth in revenue, customers, or market share.",
      "Profitability Targets: Profitability goals guide financial decision-making throughout the organization.",
      "Customer Satisfaction: Customer satisfaction goals align employee behavior with customer needs.",
      "Effort Alignment: Understanding organizational goals helps employees align their efforts with what matters.",
      "Goal Integration: Strategic and operational goals work together to achieve the organization's mission."
    ],
    roleplayTips: [
      "Understanding the organization's goals helps me prioritize my work based on what will have the greatest impact.",
      "When I align my daily efforts with organizational goals, my work becomes more meaningful and more effective.",
      "Knowing what the company is trying to achieve helps me make decisions that move us in the right direction."
    ]
  },

  "PD255": {
    id: "PD255",
    code: "PD:255",
    name: "Ascertain employee's role in meeting goals",
    definition: "Explain how individual performance supports company goals.",
    keyPoints: [
      "Task Alignment: Individual tasks must align with organizational goals for work to contribute effectively.",
      "Accountability: Each employee is accountable for contributing to the goals of their role.",
      "Team Contribution: Individual contributions combine to drive collective team and organizational success.",
      "Success Contribution: Every role, regardless of level, contributes to organizational success.",
      "Performance Understanding: Understanding your role in goal achievement improves motivation and performance."
    ],
    roleplayTips: [
      "I understand specifically how my role contributes to our organizational goals, which makes my work feel purposeful.",
      "When I see the connection between my daily tasks and the company's goals, I make better decisions about priorities.",
      "Everyone in the organization plays a role in achieving goals—understanding mine helps me fulfill it more effectively."
    ]
  },

  "PD126": {
    id: "PD126",
    code: "PD:126",
    name: "Explain the need for innovation skills",
    definition: "Describe why creativity and new ideas are essential.",
    keyPoints: [
      "Competitive Advantage: Innovation skills create competitive advantage by enabling differentiation.",
      "Adaptability: Creative thinking supports adaptability to changing markets and conditions.",
      "Problem-Solving: Innovation skills improve the ability to solve complex problems in new ways.",
      "Growth Driver: Innovation drives business growth and opens new opportunities.",
      "Routine Limitation: Routine thinking limits opportunity—innovation skills break through established patterns."
    ],
    roleplayTips: [
      "I develop my innovation skills because the ability to generate new ideas is increasingly essential in competitive markets.",
      "Creative problem-solving helps me find solutions that weren't obvious—which is often where the real value is.",
      "Innovation doesn't require inventing from scratch—it means applying new thinking to existing challenges and opportunities."
    ]
  },

  "PD017": {
    id: "PD017",
    code: "PD:017",
    name: "Make decisions",
    definition: "Choose the best option from alternatives.",
    keyPoints: [
      "Information Analysis: Effective decision-making requires analyzing available information thoroughly.",
      "Outcome Evaluation: Evaluating potential outcomes of each option improves decision quality.",
      "Responsibility Acceptance: Taking responsibility for decisions reflects professional maturity.",
      "Core Professional Skill: Decision-making is a core professional skill required in all business roles.",
      "Consequence Awareness: Poor decisions have real consequences that affect the organization and relationships."
    ],
    roleplayTips: [
      "I approach decisions systematically by identifying my options, evaluating potential outcomes, and selecting the best available choice.",
      "Taking responsibility for my decisions—whether they succeed or fail—is how I demonstrate professional maturity.",
      "Good decision-making requires information, but also judgment—I develop both through experience and reflection."
    ]
  },

  "PD077": {
    id: "PD077",
    code: "PD:077",
    name: "Demonstrate problem-solving skills",
    definition: "Identify problems and implement solutions.",
    keyPoints: [
      "Cause Identification: Effective problem-solving begins with identifying the root cause, not just the symptom.",
      "Option Evaluation: Evaluating multiple solution options before choosing leads to better outcomes.",
      "Solution Implementation: Implementing the chosen solution completely and tracking its effectiveness.",
      "Systematic Approach: Systematic problem-solving consistently produces better outcomes than reactive responses.",
      "Root Cause Focus: Solutions must address root causes to prevent problems from recurring."
    ],
    roleplayTips: [
      "When I encounter a problem, I start by understanding the root cause because solving symptoms just postpones the real issue.",
      "I evaluate multiple solution options before choosing because the first idea is often not the best one.",
      "Systematic problem-solving—define, analyze, solve, verify—consistently produces better results than improvised responses."
    ]
  },

  "PD012": {
    id: "PD012",
    code: "PD:012",
    name: "Demonstrate appropriate creativity",
    definition: "Use creative thinking within workplace guidelines.",
    keyPoints: [
      "Innovation Support: Appropriate creativity drives innovation within the constraints of professional context.",
      "Efficiency Improvement: Creative approaches can find more efficient solutions to business problems.",
      "Practical Solutions: Creativity must produce practical, implementable solutions to have business value.",
      "Channeling Requirement: Creativity must be channeled appropriately to comply with workplace standards.",
      "Incremental Value: Even small creative improvements can have significant business impact over time."
    ],
    roleplayTips: [
      "I bring creative thinking to work within appropriate boundaries—innovation that can't be implemented isn't valuable.",
      "Appropriate creativity means finding new approaches that improve outcomes while respecting professional and organizational constraints.",
      "I look for creative solutions to routine problems because even incremental improvements compound into significant gains."
    ]
  },

  "PD019": {
    id: "PD019",
    code: "PD:019",
    name: "Use time-management skills",
    definition: "Plan and control how time is spent.",
    keyPoints: [
      "Task Prioritization: Prioritizing tasks based on importance and urgency is the foundation of time management.",
      "Deadline Meeting: Effective time management ensures important deadlines are consistently met.",
      "Productivity Improvement: Managing time well dramatically improves overall productivity.",
      "Limited Resource: Time is a finite resource—managing it well is essential for professional effectiveness.",
      "Stress Prevention: Poor time management creates stress and leads to missed goals and deadlines."
    ],
    roleplayTips: [
      "I manage my time intentionally by prioritizing tasks based on importance so I focus on what truly matters most.",
      "Time is my most limited resource—managing it well is how I maximize my professional impact.",
      "Effective time management means saying no to low-priority tasks so I can deliver high-quality work on what matters."
    ]
  },

  "PD013": {
    id: "PD013",
    code: "PD:013",
    name: "Assess personal interests and skills",
    definition: "Identify strengths and interests related to business careers.",
    keyPoints: [
      "Self-Awareness: Assessing interests and skills builds self-awareness essential for career planning.",
      "Career Fit: Matching interests and skills to career paths improves job satisfaction and performance.",
      "Skill Development: Identifying skill gaps guides targeted professional development efforts.",
      "Career Guidance: Interests guide the direction of career exploration and choices.",
      "Immediate Employability: Skills determine immediate employability and readiness for specific roles."
    ],
    roleplayTips: [
      "Understanding my interests and skills helps me identify career paths where I'm likely to excel and find satisfaction.",
      "Self-assessment of skills reveals gaps I need to address to achieve my career goals.",
      "Aligning my career path with my genuine interests produces sustained motivation that drives long-term success."
    ]
  },

  "PD020": {
    id: "PD020",
    code: "PD:020",
    name: "Analyze employer expectations",
    definition: "Understand what employers value in employees.",
    keyPoints: [
      "Reliability Value: Employers consistently value reliability as a core employee quality.",
      "Skills Requirement: Employers expect employees to have the technical skills required for their roles.",
      "Professionalism Standard: Professional behavior and appearance are universally expected by employers.",
      "Industry Variation: Expectations vary significantly across industries and organizational cultures.",
      "Advancement Connection: Meeting employer expectations builds the advancement opportunities that drive careers."
    ],
    roleplayTips: [
      "I research what employers value so I can demonstrate those qualities clearly during the hiring process.",
      "Understanding employer expectations helps me prioritize which skills and behaviors to develop.",
      "Meeting and exceeding employer expectations is the most reliable path to career advancement and opportunities."
    ]
  },

  "PD021": {
    id: "PD021",
    code: "PD:021",
    name: "Explain the rights of workers",
    definition: "Describe legal protections for employees.",
    keyPoints: [
      "Fair Pay Rights: Workers have the legal right to fair compensation for their labor.",
      "Safe Workplace: Employees have the right to a workplace free from unreasonable safety hazards.",
      "Non-Discrimination: Workers are legally protected from discrimination based on protected characteristics.",
      "Legal Protections: Employee rights are established and enforced by federal and state laws.",
      "Advocacy Enablement: Knowing their rights enables employees to advocate effectively for themselves."
    ],
    roleplayTips: [
      "Understanding my rights as a worker helps me recognize when those rights are being honored or violated.",
      "Worker rights exist to protect employees from exploitation—knowing them is essential for professional self-advocacy.",
      "I approach workplace issues with knowledge of my legal rights so I can address them appropriately and effectively."
    ]
  },

  "PD022": {
    id: "PD022",
    code: "PD:022",
    name: "Identify sources of career information",
    definition: "Locate tools to explore careers.",
    keyPoints: [
      "Online Resources: Career websites and job boards provide extensive career information and job listings.",
      "Counselor Support: Career counselors provide personalized guidance and assessment tools.",
      "Industry Resources: Industry associations and publications provide field-specific career information.",
      "Complete Picture: Using multiple information sources provides a more complete and accurate career picture.",
      "Informational Interviews: Informational interviews with professionals provide real-world career insight."
    ],
    roleplayTips: [
      "I use multiple sources of career information because each provides a different and complementary perspective.",
      "Informational interviews with working professionals have given me the most realistic picture of what different careers involve.",
      "Career research from diverse sources helps me make informed decisions rather than acting on assumptions."
    ]
  },

  "PD023": {
    id: "PD023",
    code: "PD:023",
    name: "Identify tentative occupational interest",
    definition: "Select a potential career path.",
    keyPoints: [
      "Interest Exploration: Identifying tentative occupational interests guides focused career exploration.",
      "Skill Alignment: Connecting interests to skill requirements helps evaluate career fit.",
      "Opportunity Assessment: Evaluating opportunities in areas of interest informs realistic career planning.",
      "Mistake Prevention: Early career exploration prevents costly mistakes from committing to wrong career paths.",
      "Interest Evolution: Occupational interests may evolve as experience and self-knowledge develop."
    ],
    roleplayTips: [
      "I'm intentional about exploring occupational interests early so I can make informed decisions about education and training.",
      "Identifying tentative interests allows me to test them through internships and informational interviews before committing.",
      "Career interests can change—I stay open to new possibilities while pursuing my current direction with commitment."
    ]
  },

  "PD025": {
    id: "PD025",
    code: "PD:025",
    name: "Explain employment opportunities in business",
    definition: "Describe available careers in business fields.",
    keyPoints: [
      "Marketing Careers: Marketing offers diverse careers in brand management, advertising, and market research.",
      "Finance Opportunities: Finance careers span banking, corporate finance, investment, and accounting.",
      "Management Roles: Management careers exist at every level and in every industry.",
      "Industry Breadth: Business careers span virtually every industry and sector.",
      "Education Impact: Education level and specialization open different career doors in business."
    ],
    roleplayTips: [
      "I explore the full range of business employment opportunities to find the career paths that best align with my interests and skills.",
      "Understanding business career options helps me make more informed decisions about coursework and skill development.",
      "Business careers are highly transferable across industries—the foundational skills apply broadly."
    ]
  },

  "PD066": {
    id: "PD066",
    code: "PD:066",
    name: "Explain career opportunities in entrepreneurship",
    definition: "Describe careers involving business ownership.",
    keyPoints: [
      "Innovation Opportunity: Entrepreneurship provides opportunities to bring innovative ideas to market.",
      "Risk Acceptance: Entrepreneurial careers involve accepting significant risk in pursuit of opportunity.",
      "Independence: Entrepreneurship offers the independence of building and leading one's own organization.",
      "Economic Value: Entrepreneurs create economic value through new businesses and job creation.",
      "Broad Skill Requirement: Entrepreneurship requires a broad skill set spanning operations, finance, and marketing."
    ],
    roleplayTips: [
      "I explore entrepreneurship opportunities because I'm interested in the independence and creativity it offers.",
      "Understanding the skills required for entrepreneurship helps me develop the foundation needed for future business ownership.",
      "Entrepreneurship is a career path that rewards risk-taking and broad capabilities—I assess my readiness honestly."
    ]
  },

  "PD026": {
    id: "PD026",
    code: "PD:026",
    name: "Utilize job-search strategies",
    definition: "Use methods to find employment opportunities.",
    keyPoints: [
      "Online Job Search: Online job boards and company websites are primary sources of employment opportunities.",
      "Networking Value: Professional networking is consistently one of the most effective job search strategies.",
      "Career Fair Use: Career fairs provide direct access to employers actively seeking candidates.",
      "Strategy Combination: Using multiple job search strategies increases the chances of finding opportunities.",
      "Persistence Requirement: Persistence is required because successful job searching takes consistent effort."
    ],
    roleplayTips: [
      "I use multiple job search strategies simultaneously because different opportunities surface through different channels.",
      "Networking has been my most effective job search strategy because referrals open doors that applications often don't.",
      "Persistence in job searching is essential—consistent effort over time produces results that inconsistent effort cannot."
    ]
  },

  "PD027": {
    id: "PD027",
    code: "PD:027",
    name: "Complete a job application",
    definition: "Accurately provide employment information.",
    keyPoints: [
      "Honesty Requirement: Job applications must be completed honestly because misrepresentation has serious consequences.",
      "Accuracy Importance: Accuracy in all details is essential—errors create negative impressions.",
      "Professional Presentation: Professional completion of applications reflects on the applicant's attention to detail.",
      "Disqualification Risk: Errors or omissions can disqualify an otherwise strong applicant.",
      "Legal Document: Job applications are legal documents and false statements carry legal consequences."
    ],
    roleplayTips: [
      "I complete job applications with extreme care because accuracy and honesty reflect on my professionalism.",
      "A job application is a legal document—I treat it with the same seriousness I would any contract.",
      "Taking time to complete applications thoroughly and accurately demonstrates the attention to detail employers value."
    ]
  },

  "PD028": {
    id: "PD028",
    code: "PD:028",
    name: "Interview for a job",
    definition: "Communicate qualifications during an interview.",
    keyPoints: [
      "Confidence Display: Displaying appropriate confidence during interviews strengthens the impression created.",
      "Clear Responses: Providing clear, specific answers to interview questions demonstrates communication skills.",
      "Professional Appearance: Professional appearance in interviews signals readiness for the professional environment.",
      "Preparation Advantage: Preparation distinguishes strong candidates from those who rely solely on improvisation.",
      "First Impression: First impressions in interviews significantly influence hiring decisions."
    ],
    roleplayTips: [
      "I prepare thoroughly for interviews because preparation is what separates confident, capable answers from nervous improvisation.",
      "I practice answering common interview questions so I can respond clearly and concisely under pressure.",
      "Every interview is a learning experience—I debrief afterward to identify what I can improve for next time."
    ]
  },

  "PD029": {
    id: "PD029",
    code: "PD:029",
    name: "Write a follow-up letter after interviews",
    definition: "Send a thank-you message post-interview.",
    keyPoints: [
      "Appreciation Expression: A follow-up letter expresses genuine appreciation for the interviewer's time.",
      "Interest Reinforcement: Following up reinforces the candidate's interest in the position.",
      "Professionalism Demonstration: Sending a follow-up demonstrates professional courtesy and follow-through.",
      "Differentiation Opportunity: Most candidates don't follow up—doing so differentiates strong candidates.",
      "Timing Importance: Timing matters—follow-up letters sent within 24 hours are most effective."
    ],
    roleplayTips: [
      "I send follow-up letters within 24 hours of every interview because it demonstrates professional courtesy and genuine interest.",
      "A thoughtful follow-up letter reinforces my qualifications and shows that I listened carefully during the interview.",
      "Follow-up letters differentiate me from candidates who don't send them—it's a simple step with meaningful impact."
    ]
  },

  "PD030": {
    id: "PD030",
    code: "PD:030",
    name: "Write a letter of application",
    definition: "Introduce qualifications to employers.",
    keyPoints: [
      "Clear Intent: A letter of application clearly states the position of interest and reason for applying.",
      "Relevant Skills: Highlighting relevant skills and experience makes the case for the candidate's fit.",
      "Professional Tone: A professional, confident tone throughout the letter reflects communication skills.",
      "Customization Signal: Customizing the letter to the specific employer shows genuine interest.",
      "Resume Supplement: The letter of application supplements and introduces the resume."
    ],
    roleplayTips: [
      "I customize every letter of application to the specific employer and role because generic letters are ineffective.",
      "My letter of application tells a compelling story about why I'm the right person for this specific role.",
      "A strong letter of application opens the door for the resume to be read—it must make the employer want to know more."
    ]
  },

  "PD031": {
    id: "PD031",
    code: "PD:031",
    name: "Prepare a résumé",
    definition: "Summarize skills, education, and experience.",
    keyPoints: [
      "Clear Layout: A clear, well-organized layout makes the resume easy to scan and navigate.",
      "Relevant Details: Including relevant experience and skills tailored to the target role improves impact.",
      "Accuracy Requirement: Accuracy in all resume content is essential—inaccuracies can disqualify candidates.",
      "Tailoring Value: Tailoring the resume to each specific application significantly improves effectiveness.",
      "Accomplishment Focus: Specific accomplishments are more compelling than general job duty descriptions."
    ],
    roleplayTips: [
      "I tailor my resume to each application because a generic resume rarely stands out in a competitive applicant pool.",
      "I emphasize accomplishments with specific numbers and outcomes rather than just listing job duties.",
      "A well-prepared resume communicates not just what I've done but the value I've delivered in each role."
    ]
  },

  "PD037": {
    id: "PD037",
    code: "PD:037",
    name: "Use networking techniques",
    definition: "Build relationships to find job opportunities.",
    keyPoints: [
      "Professional Contacts: Building professional contacts is the foundation of effective networking.",
      "Referral Generation: Networking generates referrals that open job opportunities unavailable through other channels.",
      "Career Growth: Strong professional networks support career growth throughout a professional's career.",
      "Hidden Market: Most positions are filled through networks before they are publicly posted.",
      "Relationship Investment: Effective networking requires genuine relationship investment, not just transactional connections."
    ],
    roleplayTips: [
      "I build my professional network consistently because most career opportunities come through relationships, not job boards.",
      "Networking requires genuine relationship investment—I focus on how I can add value, not just on what I can gain.",
      "Maintaining network relationships during times I'm not actively job searching makes the network much more valuable when I need it."
    ]
  },

  "PD032": {
    id: "PD032",
    code: "PD:032",
    name: "Describe techniques for obtaining work experience",
    definition: "Explain ways to gain practical experience.",
    keyPoints: [
      "Internships: Internships provide supervised practical experience in real professional environments.",
      "Volunteering: Volunteering offers practical experience while contributing to community needs.",
      "Part-Time Work: Part-time work in related fields builds relevant experience and professional habits.",
      "Classroom Learning Validation: Practical experience validates and applies classroom learning in real contexts.",
      "Employability Building: Practical experience builds the employability that education alone cannot provide."
    ],
    roleplayTips: [
      "I pursue internships and part-time work because practical experience makes classroom learning concrete and applicable.",
      "Work experience signals to employers that I can apply knowledge, not just recall it in a test setting.",
      "Every work experience, even volunteer work, builds skills and professional habits that strengthen future applications."
    ]
  },

  "PD033": {
    id: "PD033",
    code: "PD:033",
    name: "Explain need for ongoing education",
    definition: "Describe why continuous learning is important.",
    keyPoints: [
      "Skill Updates: Ongoing education keeps skills current as technology and practices evolve.",
      "Career Growth: Continuous learning drives career growth by expanding capabilities.",
      "Market Competitiveness: Regular learning maintains competitiveness in a rapidly changing job market.",
      "Technology Change: Accelerating technology change makes ongoing learning essential for all professionals.",
      "Lifelong Learner Advantage: Lifelong learners consistently outperform those who stop developing after formal education."
    ],
    roleplayTips: [
      "I invest in ongoing education because the skills valued today may be obsolete tomorrow—continuous learning is essential.",
      "My commitment to lifelong learning keeps me competitive and opens opportunities that stagnant professionals miss.",
      "I treat professional development as an ongoing investment in my most valuable asset—my own capabilities."
    ]
  },

  "PD034": {
    id: "PD034",
    code: "PD:034",
    name: "Explain advancement patterns for jobs",
    definition: "Describe typical career progression paths.",
    keyPoints: [
      "Promotion Pathways: Career advancement often follows defined promotion paths within organizations.",
      "Skill Development: Progressive skill development is required to qualify for higher-level positions.",
      "Experience Accumulation: Accumulated experience is a key factor in career advancement.",
      "Demonstrated Competency: Advancement requires demonstrating competency in the current role.",
      "Lateral Value: Lateral moves to different roles can build valuable skills that accelerate advancement."
    ],
    roleplayTips: [
      "Understanding typical career advancement patterns helps me plan my development to qualify for the next level.",
      "I look for both vertical and lateral advancement opportunities because each can build valuable capabilities.",
      "Career advancement is not automatic—it requires demonstrating that I'm already performing at the level I want to reach."
    ]
  },

  "PD035": {
    id: "PD035",
    code: "PD:035",
    name: "Identify skills needed for career progression",
    definition: "Recognize skills that support advancement.",
    keyPoints: [
      "Leadership Skills: Leadership skills are essential for advancement beyond individual contributor roles.",
      "Communication Skills: Strong communication skills are required at all levels of career advancement.",
      "Technical Skills: Technical skills relevant to the specific field are foundational for advancement.",
      "Gap Limitation: Skill gaps limit advancement opportunities and must be addressed intentionally.",
      "Development Acceleration: Targeted skill development accelerates career growth toward specific goals."
    ],
    roleplayTips: [
      "I identify the skills required for my next career level so I can develop them intentionally rather than accidentally.",
      "Understanding which skills matter most for advancement helps me prioritize my professional development investments.",
      "Skill gaps are the primary barrier to career advancement—identifying and addressing them is how I create opportunity."
    ]
  },

  "PD036": {
    id: "PD036",
    code: "PD:036",
    name: "Utilize professional development resources",
    definition: "Use tools that support career growth.",
    keyPoints: [
      "Mentorship: Mentors provide experienced guidance and perspective that accelerates professional development.",
      "Professional Associations: Professional associations offer learning resources, networking, and credentialing.",
      "Training Programs: Formal training programs build specific skills efficiently.",
      "Underutilization Problem: Professional development resources are often available but underutilized.",
      "Intentional Development: Intentional, targeted use of resources is more effective than passive learning."
    ],
    roleplayTips: [
      "I actively use mentors and professional associations because they provide access to knowledge and networks I couldn't build alone.",
      "Intentionally using professional development resources is how I make steady progress toward my career goals.",
      "Many development resources are available and underutilized—I make it a priority to take advantage of what's accessible to me."
    ]
  },

};
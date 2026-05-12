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
      "\"Understanding all seven marketing functions helps me see how decisions in one area—like pricing—ripple across promotion, distribution, and sales.\\"",
      "\"The marketing functions are like gears in a system—each one must work properly and in coordination with the others for the whole machine to run.\\"",
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
      "\"Consistent branding in everything from our packaging to our customer service creates the trust that translates into long-term sales.\\"",
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
      "Cash: Cash, credit, debit, EFT.",
      "Convenience and: Convenience and security vary.",
      "Widely used: Widely used in modern commerce.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"The form of financial exchange we accept affects our cash flow, fraud risk, and processing costs—each payment method involves trade-offs.\"",
      "\"Credit transactions create accounts receivable and collection risk; we assess customer creditworthiness before extending terms.\"",
      "\"Digital payment platforms are transforming financial exchange—reducing friction, expanding access, and creating new data about transaction behavior.\"",
    ]
  },
  "FI059": {
    id: "FI059",
    code: "FI:059",
    name: "Identify types of currency",
    definition: "Recognize different forms of money used in economies.",
    keyPoints: [
      "Coins and: Coins and paper money.",
      "Banknotes and: Banknotes and government-backed instruments.",
      "Accepted as: Accepted as legal tender.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Money's power comes from collective trust—its value rests on the confidence that others will accept it in exchange for goods and services.\"",
      "\"Inflation erodes money's store-of-value function—when prices rise, the same amount of money buys less, reducing real purchasing power.\"",
      "\"Understanding the three functions of money clarifies why cryptocurrency debates are about more than technology—they're about trust, stability, and the nature of value.\"",
    ]
  },
  "FI060": {
    id: "FI060",
    code: "FI:060",
    name: "Describe functions of money",
    definition: "Explain how money is used in economic systems.",
    keyPoints: [
      "Medium of: Medium of exchange.",
      "Unit of: Unit of measure.",
      "Store of: Store of value.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Diversifying income sources—combining earned income with investment income—creates financial resilience against any single income disruption.\"",
      "\"Investment income is the foundation of long-term wealth building—it's income that works even when you're not.\"",
      "\"Understanding income tax treatment differences by income type is essential for financial planning—not all income is taxed equally.\"",
    ]
  },
  "FI061": {
    id: "FI061",
    code: "FI:061",
    name: "Describe sources of income",
    definition: "Identify ways individuals earn money.",
    keyPoints: [
      "Wages and: Wages and salaries.",
      "Interest: Interest, rent, dividends.",
      "Transfer payments: Transfer payments.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"The time value of money is why we invest—a dollar that sits idle doesn't grow, but a dollar invested compounds into significantly more over time.\"",
      "\"All present and future value calculations rest on the time value of money principle—it's the foundation of finance.\"",
      "\"When comparing a lump sum to an annuity, time value of money analysis converts both to present value for an apples-to-apples comparison.\"",
    ]
  },
  "FI062": {
    id: "FI062",
    code: "FI:062",
    name: "Explain the time value of money",
    definition: "Explain why money today is worth more than money in the future.",
    keyPoints: [
      "Inflation reduces: Inflation reduces purchasing power.",
      "Opportunity cost: Opportunity cost of waiting.",
      "Encourages saving: Encourages saving and investing.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Capital in all its forms—financial, physical, and human—is what enables a business to produce value beyond what labor alone could create.\"",
      "\"Capital structure decisions—how much debt versus equity to use—directly affect financial risk, cost of capital, and return on equity.\"",
      "\"Human capital investment through training and development often produces the highest returns of any capital allocation a business makes.\"",
    ]
  },
  "FI002": {
    id: "FI002",
    code: "FI:002",
    name: "Explain the purposes and importance of credit",
    definition: "Describe how credit allows future payment for current purchases.",
    keyPoints: [
      "Enables large: Enables large purchases.",
      "Builds credit: Builds credit history.",
      "Must be: Must be used responsibly.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Credit is a tool—like any tool, its value depends entirely on how you use it. Used strategically, it accelerates wealth building; misused, it destroys it.\"",
      "\"The true cost of credit is the total interest paid over the life of the debt—comparing this to the benefit received determines whether credit made financial sense.\"",
      "\"Building a strong credit history early creates access to better credit terms when you need them most—it's an investment in future financial flexibility.\"",
    ]
  },
  "FI063": {
    id: "FI063",
    code: "FI:063",
    name: "Explain legal responsibilities associated with financial exchanges",
    definition: "Describe legal obligations in financial transactions.",
    keyPoints: [
      "Contracts must: Contracts must be honored.",
      "Fraud is: Fraud is illegal.",
      "Accurate recordkeeping: Accurate recordkeeping required.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Every financial agreement is a legal contract—understanding your rights and obligations before signing is a fundamental financial responsibility.\"",
      "\"Consumer protection laws like the Truth in Lending Act exist because information asymmetry between lenders and borrowers requires legal balancing.\"",
      "\"Financial compliance isn't optional—tax reporting obligations, disclosure requirements, and anti-fraud laws carry serious legal consequences for violations.\"",
    ]
  },
  "FI270": {
    id: "FI270",
    code: "FI:270",
    name: "Explain the need to save and invest",
    definition: "Describe why setting aside money is important for future needs.",
    keyPoints: [
      "Builds financial: Builds financial security.",
      "Prepares for: Prepares for emergencies.",
      "Supports long-term: Supports long-term goals.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Choosing the right financial institution requires understanding the trade-offs—commercial banks offer convenience and breadth; credit unions often offer better rates and community focus.\"",
      "\"Deposit insurance through the FDIC protects bank deposits up to the insured limit—understanding this protection is part of responsible financial consumer behavior.\"",
      "\"Financial institution regulation exists because systemic failures in banking ripple through the entire economy—the 2008 crisis demonstrated the stakes.\"",
    ]
  },
  "FI065": {
    id: "FI065",
    code: "FI:065",
    name: "Set financial goals",
    definition: "Establish short- and long-term money objectives.",
    keyPoints: [
      "Specific and: Specific and realistic goals.",
      "Time-bound planning: Time-bound planning.",
      "Guides spending: Guides spending decisions.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Property insurance transfers financial risk from individuals to an insurer—the premium is the cost of that risk transfer, which is worthwhile when potential losses are catastrophic.\"",
      "\"A higher deductible lowers premiums but means more out-of-pocket expense at claim time—I calibrate my deductibles to the emergency fund I maintain.\"",
      "\"Underinsurance is a common mistake—I review coverage annually to ensure my policy reflects current replacement values.\"",
    ]
  },
  "FI066": {
    id: "FI066",
    code: "FI:066",
    name: "Develop personal budget",
    definition: "Plan income and expenses to manage money effectively.",
    keyPoints: [
      "Tracks spending: Tracks spending.",
      "Prevents overspending: Prevents overspending.",
      "Supports savings: Supports savings.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Insurance is a financial tool that converts unpredictable large losses into predictable small premiums—it's rational to pay for peace of mind against catastrophic risk.\"",
      "\"The principle of indemnification means insurance restores, not enriches—you can't collect more than your actual financial loss.\"",
      "\"Risk management strategy includes identifying which risks to insure, which to self-insure through savings, and which to mitigate through behavior change.\"",
    ]
  },
  "FI562": {
    id: "FI562",
    code: "FI:562",
    name: "Determine personal net worth",
    definition: "Calculate financial position by comparing assets and liabilities.",
    keyPoints: [
      "Assets minus: Assets minus liabilities.",
      "Measures financial: Measures financial health.",
      "Helps track: Helps track progress.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Health insurance plan selection requires comparing total cost of ownership—not just premium but expected deductible, copay, and out-of-pocket exposure based on anticipated usage.\"",
      "\"An HDHP paired with an HSA is worth considering for healthy individuals—lower premiums and tax-advantaged savings can offset higher deductibles.\"",
      "\"Understanding your benefits during open enrollment is one of the highest-value financial decisions of the year—most people leave significant value on the table.\"",
    ]
  },
  "FI067": {
    id: "FI067",
    code: "FI:067",
    name: "Explain the nature of tax liabilities",
    definition: "Describe required payments to the government based on income.",
    keyPoints: [
      "Funds public: Funds public services.",
      "Required by: Required by law.",
      "Varies by: Varies by income.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Life insurance is income replacement insurance—the question is how much income your dependents would need for how many years if you weren't here to earn it.\"",
      "\"Term insurance provides the most death benefit per premium dollar for most people—the permanent insurance cash value feature is rarely the most efficient savings vehicle.\"",
      "\"Naming and updating beneficiaries is as important as choosing coverage—the death benefit goes to the named beneficiary regardless of what a will says.\"",
    ]
  },
  "FI068": {
    id: "FI068",
    code: "FI:068",
    name: "Interpret a pay stub",
    definition: "Explain information shown on an earnings statement.",
    keyPoints: [
      "Gross vs.: Gross vs. net pay.",
      "Deductions and: Deductions and taxes.",
      "Pay period: Pay period details.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Disability insurance is often overlooked, but the statistics are stark—a 30-year-old has a greater probability of disability before retirement than premature death.\"",
      "\"'Own occupation' disability coverage is more valuable—it pays if you can't perform your specific professional role, not just if you can't work at all.\"",
      "\"The elimination period is a key cost lever—I maintain an emergency fund sized to cover the gap, which allows me to accept a longer elimination period and lower premiums.\"",
    ]
  },
  "FI560": {
    id: "FI560",
    code: "FI:560",
    name: "Prepare bank account documents",
    definition: "Complete forms used in banking transactions.",
    keyPoints: [
      "Checks and: Checks and deposit slips.",
      "Endorsements: Endorsements.",
      "Accuracy is: Accuracy is critical.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Long-term care is one of the largest financial risks in retirement planning—the average nursing home stay costs tens of thousands per year, entirely out of pocket.\"",
      "\"The optimal window to purchase LTC insurance is in your 50s—old enough to think about it seriously, young enough that premiums are still manageable.\"",
      "\"Hybrid life insurance products with LTC riders offer an alternative to traditional LTC insurance—the death benefit is available if care isn't needed.\"",
    ]
  },
  "FI069": {
    id: "FI069",
    code: "FI:069",
    name: "Maintain financial records",
    definition: "Keep organized documentation of financial activity.",
    keyPoints: [
      "Supports budgeting: Supports budgeting.",
      "Helps with: Helps with taxes.",
      "Prevents errors: Prevents errors.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Credit is an economic multiplier—it allows productive investment to occur before the full savings exist, accelerating individual and collective wealth creation.\"",
      "\"Access to affordable credit is a significant financial advantage—building and protecting your credit score is one of the highest-impact financial management activities.\"",
      "\"Credit used to purchase depreciating assets or fund consumption—without a clear repayment plan—destroys wealth rather than building it.\"",
    ]
  },
  "FI070": {
    id: "FI070",
    code: "FI:070",
    name: "Read and reconcile bank statements",
    definition: "Compare bank records with personal records for accuracy.",
    keyPoints: [
      "Identify errors: Identify errors.",
      "Track spending: Track spending.",
      "Prevent fraud: Prevent fraud.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Matching the type of credit to the purpose is a key credit management skill—revolving credit for short-term needs, installment for major purchases.\"",
      "\"Secured credit costs less because the lender has collateral protection—when I can provide collateral, it's usually worth doing to reduce the interest rate.\"",
      "\"Understanding the difference between credit types helps me make better borrowing decisions and manage my overall debt portfolio strategically.\"",
    ]
  },
  "FI782": {
    id: "FI782",
    code: "FI:782",
    name: "Calculate the cost of credit",
    definition: "Determine total interest and fees on borrowed money.",
    keyPoints: [
      "Interest rates: Interest rates matter.",
      "Longer terms: Longer terms cost more.",
      "Impacts affordability: Impacts affordability.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Payment history is the single most important credit score factor—even one missed payment can cause a significant score drop that takes months to repair.\"",
      "\"I keep my credit utilization below 30% of my total available credit—utilization is the fastest-moving factor I can directly control.\"",
      "\"Understanding credit score components helps me make strategic decisions—like keeping old accounts open even if I don't use them, to protect my average account age.\"",
    ]
  },
  "FI071": {
    id: "FI071",
    code: "FI:071",
    name: "Demonstrate the wise use of credit",
    definition: "Use credit responsibly to avoid financial problems.",
    keyPoints: [
      "Pay on: Pay on time.",
      "Avoid overuse: Avoid overuse.",
      "Maintain good: Maintain good credit score.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Building credit requires having credit—starting with a secured card or becoming an authorized user creates the history needed to access better products.\"",
      "\"The fastest path to creditworthiness is simple: pay everything on time, keep balances low, and avoid unnecessary new accounts.\"",
      "\"I review my credit report annually through AnnualCreditReport.com to verify accuracy—errors are common and can significantly suppress scores.\"",
    ]
  },
  "FI072": {
    id: "FI072",
    code: "FI:072",
    name: "Validate credit history",
    definition: "Review credit reports for accuracy.",
    keyPoints: [
      "Detect errors: Detect errors.",
      "Prevent identity: Prevent identity theft.",
      "Maintain financial: Maintain financial reputation.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"A loan agreement is a legal contract—understanding your obligations before signing protects you from surprises and ensures you can fulfill your commitments.\"",
      "\"The Fair Debt Collection Practices Act protects consumers from abusive collection tactics—knowing your rights is important if you're ever in debt difficulty.\"",
      "\"When debt becomes unmanageable, proactive communication with creditors often produces better outcomes than avoidance—most creditors prefer modified payment plans to default.\"",
    ]
  },
  "FI783": {
    id: "FI783",
    code: "FI:783",
    name: "Make responsible financial decisions",
    definition: "Choose financial actions that support long-term stability.",
    keyPoints: [
      "Consider consequences: Consider consequences.",
      "Balance wants: Balance wants and needs.",
      "Plan ahead: Plan ahead.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Understanding the difference between a tax deduction and a tax credit is fundamental—a $1,000 deduction saves you your marginal rate times $1,000; a $1,000 credit saves you exactly $1,000.\"",
      "\"A large refund means you gave the government an interest-free loan—optimizing withholding to break even at filing time is the smarter approach.\"",
      "\"Tax compliance isn't just a legal obligation—it's a financial management activity where informed decisions about deductions and timing produce real savings.\"",
    ]
  },
  "FI073": {
    id: "FI073",
    code: "FI:073",
    name: "Protect against identity theft",
    definition: "Safeguard personal financial information.",
    keyPoints: [
      "Secure documents: Secure documents.",
      "Monitor accounts: Monitor accounts.",
      "Use strong: Use strong passwords.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Your pay stub tells the complete story of your compensation—I review mine every pay period to verify accuracy and confirm deductions are correct.\"",
      "\"Pre-tax deductions like 401(k) contributions and health insurance reduce your taxable income—understanding this helps you optimize your benefit elections.\"",
      "\"The difference between gross and net pay is often surprising—understanding every line on your pay stub is foundational financial literacy.\"",
    ]
  },
  "FI565": {
    id: "FI565",
    code: "FI:565",
    name: "Pay bills",
    definition: "Manage payments to meet financial obligations.",
    keyPoints: [
      "Avoid late: Avoid late fees.",
      "Maintain credit: Maintain credit.",
      "Budget effectively: Budget effectively.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"The three financial statements tell a complete story: the income statement shows performance, the balance sheet shows position, and the cash flow statement shows liquidity.\"",
      "\"A business can be profitable on paper and still fail from cash flow problems—that's why the cash flow statement is arguably the most important of the three.\"",
      "\"Financial statement analysis compares ratios across time and against industry benchmarks—single-period numbers without context have limited meaning.\"",
    ]
  },
  "FI625": {
    id: "FI625",
    code: "FI:625",
    name: "Apply for a consumer loan",
    definition: "Complete the process of requesting borrowed funds.",
    keyPoints: [
      "Provide accurate: Provide accurate information.",
      "Understand terms: Understand terms.",
      "Assess ability: Assess ability to repay.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"The most powerful retirement planning tool is time—starting at 25 instead of 35 can double the final balance for the same monthly contribution.\"",
      "\"Capturing your full employer match is the first priority in retirement savings—it's the highest-return, zero-risk investment available to you.\"",
      "\"Roth versus traditional 401(k) selection depends on your current versus expected future tax rate—it's worth modeling both scenarios.\"",
    ]
  },
  "FI568": {
    id: "FI568",
    code: "FI:568",
    name: "Control debt",
    definition: "Manage borrowed money to prevent financial strain.",
    keyPoints: [
      "Prioritize high-interest: Prioritize high-interest debt.",
      "Avoid unnecessary: Avoid unnecessary borrowing.",
      "Create repayment: Create repayment plans.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Estate planning isn't just for the wealthy—everyone needs at minimum a will, healthcare directive, and power of attorney.\"",
      "\"Beneficiary designations on retirement accounts and insurance override whatever the will says—keeping them updated is critical, especially after life changes.\"",
      "\"A trust offers control that a will cannot—specifying timing, conditions, and management of assets for beneficiaries who may not be ready to manage a lump sum.\"",
    ]
  },
  "FI074": {
    id: "FI074",
    code: "FI:074",
    name: "Prepare personal income tax forms",
    definition: "Complete documents reporting income and taxes owed.",
    keyPoints: [
      "Accuracy is: Accuracy is required.",
      "Deadlines matter: Deadlines matter.",
      "Legal compliance: Legal compliance.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Tax planning is a proactive year-round activity—most effective strategies must be implemented before year-end, not at tax filing time.\"",
      "\"Maximizing tax-advantaged accounts is the most impactful tax reduction strategy for most people—it reduces taxes while building wealth simultaneously.\"",
      "\"Tax-loss harvesting is a systematic strategy to reduce investment taxes—it requires discipline to sell losing positions but materially improves after-tax returns.\"",
    ]
  },
  "FI569": {
    id: "FI569",
    code: "FI:569",
    name: "Discuss the nature of retirement planning",
    definition: "Explain planning for financial security after employment.",
    keyPoints: [
      "Long-term saving: Long-term saving.",
      "Employer plans: Employer plans.",
      "Investment growth: Investment growth.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Different savings goals require different vehicles—emergency funds need liquidity and safety; retirement savings need growth and tax efficiency.\"",
      "\"High-yield savings accounts offer meaningfully higher interest than traditional bank savings accounts with the same FDIC insurance—there's no reason to leave money in low-yield accounts.\"",
      "\"The savings hierarchy—emergency fund first, then tax-advantaged retirement, then taxable investment—maximizes the effectiveness of every dollar saved.\"",
    ]
  },
  "FI572": {
    id: "FI572",
    code: "FI:572",
    name: "Explain the nature of estate planning",
    definition: "Describe planning for asset distribution after death.",
    keyPoints: [
      "Wills and: Wills and beneficiaries.",
      "Reduces legal: Reduces legal issues.",
      "Protects heirs: Protects heirs.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Investing is not speculation—it's the disciplined allocation of capital to productive assets with reasonable expected returns over an appropriate time horizon.\"",
      "\"Diversification is the risk management foundation of investing—I don't concentrate in any single asset regardless of how confident I am in it.\"",
      "\"Market volatility is the price of long-term investment returns—investors who panic-sell during downturns pay the volatility cost without collecting the return premium.\"",
    ]
  },
  "FI075": {
    id: "FI075",
    code: "FI:075",
    name: "Describe types of financial-services providers",
    definition: "Identify institutions that manage money.",
    keyPoints: [
      "Banks and: Banks and credit unions.",
      "Investment firms: Investment firms.",
      "Insurance companies: Insurance companies.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Financial institutions are intermediaries—they collect small deposits from millions of savers and channel that capital into productive business loans and investments.\"",
      "\"When selecting a brokerage, I compare investment options, fees, and advisory services—the right choice depends on whether I want self-directed or advised investing.\"",
      "\"Understanding what protections apply to my accounts—FDIC for banks, SIPC for brokerages—helps me make informed decisions about where to hold different assets.\"",
    ]
  },
  "FI076": {
    id: "FI076",
    code: "FI:076",
    name: "Discuss considerations in selecting a financial-services provider",
    definition: "Explain factors used to choose financial institutions.",
    keyPoints: [
      "Fees and: Fees and services.",
      "Reputation: Reputation.",
      "Accessibility: Accessibility.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Financial markets are the infrastructure of capitalism—they connect those with capital to those who need it, enabling economic activity at scale.\"",
      "\"The money market provides short-term liquidity; the capital market provides long-term financing—together they serve the full spectrum of financial needs.\"",
      "\"Understanding market structure helps investors and businesses choose the right instrument—a 30-day need calls for a money market solution, not an equity investment.\"",
    ]
  },
  "FI077": {
    id: "FI077",
    code: "FI:077",
    name: "Explain types of investments",
    definition: "Describe ways money can be invested for growth.",
    keyPoints: [
      "Stocks: Stocks, bonds, mutual funds.",
      "Risk vs.: Risk vs. return.",
      "Diversification: Diversification.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Risk tolerance assessment is not just about what you say—it's about what you'd actually do if your portfolio dropped 30% in a month.\"",
      "\"The right portfolio is the one you can stick with through a market downturn—a theoretically optimal portfolio you'll panic-sell is worse than a conservative one you'll hold.\"",
      "\"I separate risk tolerance (psychology) from risk capacity (finances)—my portfolio decisions reflect both dimensions, with capacity setting the ceiling.\"",
    ]
  },
  "FI081": {
    id: "FI081",
    code: "FI:081",
    name: "Describe the concept of insurance",
    definition: "Explain how insurance reduces financial risk.",
    keyPoints: [
      "Risk sharing: Risk sharing.",
      "Premium payments: Premium payments.",
      "Financial protection: Financial protection.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Securities markets are the primary vehicle for long-term wealth accumulation—they provide access to the productive capacity of the economy's best companies.\"",
      "\"Index funds and ETFs democratized market access—individual investors can now achieve broad diversification at minimal cost.\"",
      "\"Asset allocation across stocks and bonds is the primary determinant of long-term portfolio returns and volatility—it deserves more attention than individual security selection.\"",
    ]
  },
  "FI579": {
    id: "FI579",
    code: "FI:579",
    name: "Describe the need for financial information",
    definition: "Explain why accurate financial data is necessary.",
    keyPoints: [
      "Supports decision-making: Supports decision-making.",
      "Tracks performance: Tracks performance.",
      "Ensures accountability: Ensures accountability.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"A budget doesn't restrict freedom—it defines it. Knowing exactly what I can spend in each category removes guilt and enables guilt-free enjoyment of discretionary spending.\"",
      "\"Zero-based budgeting assigns a purpose to every dollar before the month begins—unassigned dollars reliably become unplanned spending.\"",
      "\"The most important budgeting habit is the monthly review—comparing actual to planned spending reveals where the gaps are and enables informed adjustments.\"",
    ]
  },
  "FI085": {
    id: "FI085",
    code: "FI:085",
    name: "Explain the concept of accounting",
    definition: "Describe how financial transactions are recorded and reported.",
    keyPoints: [
      "Measures business: Measures business performance.",
      "Tracks income: Tracks income and expenses.",
      "Supports compliance: Supports compliance.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Donating appreciated stock instead of cash is a superior giving strategy—I avoid capital gains tax while the charity receives the full pre-tax value.\"",
      "\"A donor-advised fund allows me to make a deductible contribution in a high-income year and distribute grants to charities over time.\"",
      "\"I research charities using tools like Charity Navigator before donating—ensuring that a high percentage of contributions reaches the intended beneficiaries.\"",
    ]
  },
  "FI351": {
    id: "FI351",
    code: "FI:351",
    name: "Discuss the role of ethics in accounting",
    definition: "Explain ethical standards guiding accounting practices.",
    keyPoints: [
      "Accuracy and: Accuracy and honesty.",
      "Transparency: Transparency.",
      "Legal compliance: Legal compliance.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Consumer spending is 70% of GDP—when household spending patterns shift, businesses must respond quickly or lose revenue.\"",
      "\"Intentional spending means evaluating every purchase against my priorities—does this genuinely improve my life or am I buying on impulse?\"",
      "\"Tracking spending by category for 90 days reveals consumption patterns that budget planning alone often misses—reality versus intention.\"",
    ]
  },
  "FI352": {
    id: "FI352",
    code: "FI:352",
    name: "Explain the use of technology in accounting",
    definition: "Describe how software supports accounting tasks.",
    keyPoints: [
      "Automates calculations: Automates calculations.",
      "Improves accuracy: Improves accuracy.",
      "Saves time: Saves time.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"A credit freeze is the most powerful identity theft prevention tool available—it costs nothing and prevents any new credit from being opened in your name.\"",
      "\"I use unique, strong passwords for every financial account and multi-factor authentication wherever available—the inconvenience is trivial compared to the protection.\"",
      "\"Annual free credit report checks at AnnualCreditReport.com catch unauthorized accounts before they become serious problems.\"",
    ]
  },
  "FI353": {
    id: "FI353",
    code: "FI:353",
    name: "Explain legal considerations for accounting",
    definition: "Describe laws governing financial reporting.",
    keyPoints: [
      "Reporting standards: Reporting standards.",
      "Audits: Audits.",
      "Fraud prevention: Fraud prevention.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Financial planning is the architecture of your financial life—without a plan, financial decisions are reactive rather than strategic.\"",
      "\"The best financial plan is one that's actually followed—it needs to be realistic, values-aligned, and specific enough to guide daily decisions.\"",
      "\"Working with a fee-only fiduciary financial planner ensures the advice I receive is in my best interest, not motivated by product commissions.\"",
    ]
  },
  "FI091": {
    id: "FI091",
    code: "FI:091",
    name: "Describe the nature of cash flow statements",
    definition: "Explain reports showing money entering and leaving a business.",
    keyPoints: [
      "Operating: Operating, investing, financing.",
      "Measures liquidity: Measures liquidity.",
      "Supports planning: Supports planning.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Consumer rights in finance are legal protections, not just suggestions—knowing them empowers you to demand compliant treatment from financial institutions.\"",
      "\"The FCRA gives you the right to dispute any inaccurate information in your credit file—creditors must investigate and remove verified errors.\"",
      "\"The CFPB accepts complaints against financial institutions—filing a complaint often produces faster resolution than direct communication alone.\"",
    ]
  },
  "FI093": {
    id: "FI093",
    code: "FI:093",
    name: "Explain the nature of balance sheets",
    definition: "Describe reports showing assets, liabilities, and equity.",
    keyPoints: [
      "Financial position: Financial position snapshot.",
      "Measures solvency: Measures solvency.",
      "Used by: Used by investors.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Financial decisions are more like votes in a long-term election than individual choices—each one contributes to a cumulative outcome over decades.\"",
      "\"The financial gap between people who save consistently and those who don't isn't primarily about income—it's about decisions and habits over time.\"",
      "\"Compound interest means starting matters more than amount—a person who starts saving at 25 with modest amounts will outperform someone who starts at 35 with large amounts.\"",
    ]
  },
  "FI094": {
    id: "FI094",
    code: "FI:094",
    name: "Describe the nature of income statements",
    definition: "Explain reports showing revenues and expenses.",
    keyPoints: [
      "Determines profit: Determines profit or loss.",
      "Measures performance: Measures performance.",
      "Supports decisions: Supports decisions.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"I evaluate investments against my specific goal: time horizon, required return, and maximum tolerable loss—not against the investment's standalone appeal.\"",
      "\"Low-cost index funds outperform most actively managed funds over long periods after fees—cost efficiency is a reliable performance predictor.\"",
      "\"Asset location—which investments go in which account types—is often more impactful than asset selection in determining after-tax returns.\"",
    ]
  },
  "FI354": {
    id: "FI354",
    code: "FI:354",
    name: "Explain the role of finance in business",
    definition: "Describe how finance manages business funds.",
    keyPoints: [
      "Budgeting: Budgeting.",
      "Investing: Investing.",
      "Planning: Planning.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Price is a signal, not just a number—a higher price signals higher quality or scarcity; a lower price signals abundance or lower value.\"",
      "\"Pricing strategy is about capturing a fair share of the value we create for customers—not maximizing short-term revenue at the expense of the relationship.\"",
      "\"Understanding price elasticity helps us predict how demand will respond to a price change—essential for revenue optimization decisions.\"",
    ]
  },
  "FI355": {
    id: "FI355",
    code: "FI:355",
    name: "Discuss the role of ethics in finance",
    definition: "Explain ethical responsibilities in financial decision-making.",
    keyPoints: [
      "Honest reporting: Honest reporting.",
      "Fair dealing: Fair dealing.",
      "Risk transparency: Risk transparency.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"Every major life transition should trigger a financial plan review—the plan that worked at 28 may be badly misaligned by 38 if it hasn't been updated.\"",
      "\"Getting married is one of the most significant financial events in life—benefits coordination, tax filing status, and insurance coverage all require immediate attention.\"",
      "\"A job change is a financial planning moment—it's when you negotiate benefits, review 401(k) options, and potentially adjust your savings rate.\"",
    ]
  },
  "FI356": {
    id: "FI356",
    code: "FI:356",
    name: "Explain legal considerations for finance",
    definition: "Describe laws affecting financial activities.",
    keyPoints: [
      "Regulatory compliance: Regulatory compliance.",
      "Investor protection: Investor protection.",
      "Financial disclosures: Financial disclosures.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"A financial goal without a specific target and deadline is just a wish—I write my goals in SMART format to make them actionable.\"",
      "\"When goals compete for limited resources, I rank them explicitly—knowing my priorities prevents the paralysis of trying to pursue everything simultaneously.\"",
      "\"I review my financial goals quarterly—confirming they still reflect my values and adjusting timelines when life changes the picture.\"",
    ]
  },
  "FI106": {
    id: "FI106",
    code: "FI:106",
    name: "Describe the nature of budgets",
    definition: "Explain plans for managing income and expenses.",
    keyPoints: [
      "Allocates resources: Allocates resources.",
      "Controls spending: Controls spending.",
      "Supports financial: Supports financial goals.",
      "Financial Literacy: Mastering this concept builds essential financial knowledge for personal and professional decisions.",
      "Real-World Application: This skill applies directly to managing money effectively in daily life and business.",
    ],
    roleplayTips: [
      "\"I apply opportunity cost thinking to every major financial decision—the true cost isn't just the price paid but the best alternative use of those funds.\"",
      "\"Present bias is the most dangerous financial decision bias—it systematically overweights immediate gratification and underweights future consequences.\"",
      "\"Values-aligned financial decisions are more satisfying and more sustainable—money well spent on what genuinely matters produces far more happiness than optimization for its own sake.\"",
    ]
  },

  "NF077": {
    id: "NF077",
    code: "NF:077",
    name: "Assess information needs",
    definition: "Identify what information is required to complete a task or make a decision.",
    keyPoints: [
      "Clarifies goals: Clarifies goals and objectives.",
      "Prevents information: Prevents information overload.",
      "Improves decision: Improves decision accuracy.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Technology impacts every business function—from how we find customers to how we serve them to how we manage operations and finances.\"",
      "\"The most significant technology impact is often not automation but the data it generates—organizations that analyze data well outcompete those that don't.\"",
      "\"Digital disruption is a strategic risk—I monitor technology trends not just for operational opportunities but for competitive threats to our business model.\"",
    ]
  },
  "NF078": {
    id: "NF078",
    code: "NF:078",
    name: "Obtain needed information efficiently",
    definition: "Locate relevant information quickly using appropriate sources.",
    keyPoints: [
      "Uses reliable: Uses reliable databases and tools.",
      "Saves time: Saves time and resources.",
      "Improves productivity: Improves productivity.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Information systems are the nervous system of a modern organization—they transmit the data that enables every function to operate effectively.\"",
      "\"An ERP system integrates finance, operations, HR, and supply chain data into a single platform—eliminating the data fragmentation that creates inefficiency and errors.\"",
      "\"Information system quality is determined by data quality—we invest heavily in data governance because inaccurate data produces confidently wrong decisions.\"",
    ]
  },
  "NF079": {
    id: "NF079",
    code: "NF:079",
    name: "Evaluate quality and source of information",
    definition: "Judge information for accuracy, reliability, and relevance.",
    keyPoints: [
      "Verify credibility: Verify credibility of sources.",
      "Identify bias: Identify bias or outdated data.",
      "Ensures informed: Ensures informed decisions.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Our customer database is the foundation of personalized marketing—every segmentation and targeting decision draws on the customer records it contains.\"",
      "\"Data integrity controls—validation rules, required fields, referential constraints—prevent the data quality problems that would compromise analytical reliability.\"",
      "\"SQL proficiency is a business skill, not just a technical one—managers who can query data directly extract insights faster and more precisely than those who wait for reports.\"",
    ]
  },
  "NF278": {
    id: "NF278",
    code: "NF:278",
    name: "Draw conclusions based on information analysis",
    definition: "Interpret data to form logical outcomes or decisions.",
    keyPoints: [
      "Identifies patterns: Identifies patterns and trends.",
      "Supports evidence-based: Supports evidence-based decisions.",
      "Reduces assumptions: Reduces assumptions.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Our network infrastructure is foundational to every digital business activity—when it fails, the business stops, which is why redundancy and security are paramount.\"",
      "\"VPN connectivity extends our secure network perimeter to remote employees—it's essential for maintaining data security in a distributed workforce.\"",
      "\"Network segmentation is a key security practice—limiting which devices can communicate with which others reduces the blast radius of any security breach.\"",
    ]
  },
  "NF080": {
    id: "NF080",
    code: "NF:080",
    name: "Apply information to accomplish a task",
    definition: "Use gathered information to complete work objectives.",
    keyPoints: [
      "Translates data: Translates data into action.",
      "Improves task: Improves task effectiveness.",
      "Supports problem-solving: Supports problem-solving.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"The Internet is the most transformative business infrastructure of the last century—it has eliminated geographic barriers to trade, communication, and competition.\"",
      "\"Understanding the difference between the Internet (the network) and the web (an application on it) clarifies how different digital services relate to each other.\"",
      "\"Every business needs an Internet strategy—from how customers find us to how we deliver value to how we process transactions and manage information.\"",
    ]
  },
  "NF081": {
    id: "NF081",
    code: "NF:081",
    name: "Store information for future use",
    definition: "Organize and save information for later access.",
    keyPoints: [
      "Uses digital: Uses digital or physical systems.",
      "Improves efficiency: Improves efficiency.",
      "Protects organizational: Protects organizational knowledge.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"The Internet's global scope means that a small business in any location can serve customers anywhere—geography is no longer a distribution barrier.\"",
      "\"The 24/7 nature of the Internet has fundamentally changed customer expectations—businesses must be always-on or risk losing customers to those who are.\"",
      "\"Internet scope also means competitive scope—businesses now face competition from global players who weren't in their market a decade ago.\"",
    ]
  },
  "NF110": {
    id: "NF110",
    code: "NF:110",
    name: "Discuss the nature of information management",
    definition: "Explain how businesses collect, organize, and use information.",
    keyPoints: [
      "Supports decision-making: Supports decision-making.",
      "Improves efficiency: Improves efficiency.",
      "Ensures data: Ensures data accuracy.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"The Internet plays a role in every major business function—marketing, sales, operations, customer service, procurement, and intelligence gathering.\"",
      "\"E-commerce isn't just an additional channel—for many businesses it's becoming the primary channel, which requires rethinking fulfillment, service, and brand strategy.\"",
      "\"Web analytics give us real-time data on customer behavior that physical retail never could—we know exactly what customers look at, for how long, and what converts.\"",
    ]
  },
  "NF111": {
    id: "NF111",
    code: "NF:111",
    name: "Explain the role of ethics in information management",
    definition: "Describe ethical responsibilities in handling information.",
    keyPoints: [
      "Protects privacy: Protects privacy.",
      "Ensures honesty: Ensures honesty and transparency.",
      "Prevents misuse: Prevents misuse of data.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Information management is infrastructure—organizations that manage their data well make better decisions, serve customers better, and operate more efficiently.\"",
      "\"Data governance establishes clear ownership, quality standards, and access controls—without it, data becomes unreliable and untrustworthy.\"",
      "\"Knowledge management is the organizational memory—capturing institutional expertise in documented processes prevents dependency on individual personnel.\"",
    ]
  },
  "NF076": {
    id: "NF076",
    code: "NF:076",
    name: "Explain legal issues associated with information management",
    definition: "Describe laws governing data collection and use.",
    keyPoints: [
      "Data protection: Data protection regulations.",
      "Intellectual property: Intellectual property laws.",
      "Compliance requirements: Compliance requirements.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Information security is a business issue, not just a technical one—every employee is part of the security posture, which is why training is as important as technology.\"",
      "\"The CIA triad is the foundational framework—every security control serves to preserve the confidentiality, integrity, or availability of data.\"",
      "\"Security breaches are not just IT problems—they carry regulatory fines, litigation exposure, and reputational damage that affects the entire organization.\"",
    ]
  },
  "NF003": {
    id: "NF003",
    code: "NF:003",
    name: "Identify ways that technology impacts business",
    definition: "Describe how technology affects business operations.",
    keyPoints: [
      "Improves efficiency: Improves efficiency.",
      "Enhances communication: Enhances communication.",
      "Enables innovation: Enables innovation.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Information literacy is a professional superpower—the ability to quickly find, evaluate, and apply reliable information distinguishes excellent from average performers.\"",
      "\"I evaluate sources by asking: Who wrote this? When? Why? What evidence supports the claims? Are there conflicts of interest?—before relying on any source.\"",
      "\"In a world of abundant information, the filtering skill—identifying what's credible and relevant—is more valuable than the searching skill.\"",
    ]
  },
  "NF083": {
    id: "NF083",
    code: "NF:083",
    name: "Explain the role of information systems",
    definition: "Describe systems used to collect and process data.",
    keyPoints: [
      "Supports operations: Supports operations.",
      "Aids decision-making: Aids decision-making.",
      "Improves coordination: Improves coordination.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Before beginning any research, I define exactly what information I need and what I'll do with it—this prevents over-researching and keeps focus.\"",
      "\"Information needs assessment includes a timeline component—how much time do I have, and how much certainty can I achieve in that window?\"",
      "\"The question 'what would change my decision?' helps me identify the most valuable information to pursue first.\"",
    ]
  },
  "NF084": {
    id: "NF084",
    code: "NF:084",
    name: "Discuss principles of computer systems",
    definition: "Explain basic components and functions of computers.",
    keyPoints: [
      "Hardware and: Hardware and software.",
      "Input: Input, processing, output.",
      "Storage systems: Storage systems.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Efficient research starts with the best available sources, not Google—for business intelligence, industry databases and expert sources are far more valuable.\"",
      "\"I use Boolean search operators and specific terminology to narrow search results—broad searches return noise; targeted searches return signal.\"",
      "\"When I need specialized information quickly, I identify the best expert to ask—a 15-minute call often delivers more than two hours of online research.\"",
    ]
  },
  "NF085": {
    id: "NF085",
    code: "NF:085",
    name: "Use basic operating systems",
    definition: "Perform basic tasks using an operating system.",
    keyPoints: [
      "File management: File management.",
      "System navigation: System navigation.",
      "Application use: Application use.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"I apply the CRAAP criteria to every source before relying on it—currency, relevance, authority, accuracy, and purpose together determine whether I can trust it.\"",
      "\"When I find a surprising or counterintuitive finding, I seek corroboration from independent sources before drawing conclusions.\"",
      "\"Bias doesn't disqualify a source, but it must be accounted for—I explicitly label sources by their perspective when synthesizing information.\"",
    ]
  },
  "NF086": {
    id: "NF086",
    code: "NF:086",
    name: "Describe the scope of the Internet",
    definition: "Explain the Internet's role in information access and communication.",
    keyPoints: [
      "Global connectivity: Global connectivity.",
      "Information sharing: Information sharing.",
      "Business applications: Business applications.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Information has value only when applied—I translate research findings into explicit decision recommendations, not just bibliographic summaries.\"",
      "\"Synthesis is the highest-value information skill—combining disparate sources into a coherent, actionable insight is what separates analysis from research.\"",
      "\"I attribute sources in business documents not just for academic convention but because it enables readers to verify and extend the analysis.\"",
    ]
  },
  "NF004": {
    id: "NF004",
    code: "NF:004",
    name: "Demonstrate basic e-mail functions",
    definition: "Use email to send, receive, and organize messages.",
    keyPoints: [
      "Professional communication: Professional communication.",
      "File attachments: File attachments.",
      "Inbox management: Inbox management.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"I name and organize files on the assumption that I—or someone else—will need to find them 18 months from now without remembering the context.\"",
      "\"Cloud storage with version history protects against both data loss and the problem of accidentally overwriting a better previous version.\"",
      "\"A consistent filing taxonomy is a productivity tool—the time saved finding information over a career vastly exceeds the time invested in good organization.\"",
    ]
  },
  "NF005": {
    id: "NF005",
    code: "NF:005",
    name: "Demonstrate personal information management applications",
    definition: "Use tools to organize tasks and schedules.",
    keyPoints: [
      "Calendars: Calendars.",
      "Task managers: Task managers.",
      "Productivity apps: Productivity apps.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"For competitive analysis, SEC filings are an underused gold mine—public competitors must disclose strategy, risk factors, and financial performance in detail.\"",
      "\"Industry reports from firms like IBISWorld or IBIS provide benchmarking data that helps contextualize our performance against sector norms.\"",
      "\"Government data sources—Census, BLS, Fed—are free, authoritative, and often more reliable than commercial sources for macro-level business intelligence.\"",
    ]
  },
  "NF006": {
    id: "NF006",
    code: "NF:006",
    name: "Demonstrate basic web-search skills",
    definition: "Locate information online effectively.",
    keyPoints: [
      "Use keywords: Use keywords.",
      "Evaluate sources: Evaluate sources.",
      "Filter results: Filter results.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Our environmental scanning process monitors competitor announcements, regulatory developments, technology trends, and consumer sentiment continuously—not just at annual planning.\"",
      "\"An environmental scan must go beyond confirming what we already believe—it should actively seek disconfirming evidence and emerging disruptions.\"",
      "\"I translate environmental scan findings directly into strategic implications—the scan only creates value when it changes or reinforces specific decisions.\"",
    ]
  },
  "NF007": {
    id: "NF007",
    code: "NF:007",
    name: "Demonstrate basic word processing skills",
    definition: "Create and edit written documents.",
    keyPoints: [
      "Formatting text: Formatting text.",
      "Editing content: Editing content.",
      "Professional presentation: Professional presentation.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Data mining goes beyond simple reporting—it finds patterns and predictions invisible to direct observation, enabling proactive rather than reactive decisions.\"",
      "\"Our churn prediction model uses data mining to identify at-risk customers 60 days before cancellation, enabling proactive retention outreach.\"",
      "\"Data mining is only as good as the underlying data—we invest heavily in data quality because dirty data produces confidently wrong predictions.\"",
    ]
  },
  "NF008": {
    id: "NF008",
    code: "NF:008",
    name: "Demonstrate basic presentation applications",
    definition: "Create visual presentations to share information.",
    keyPoints: [
      "Slides and: Slides and visuals.",
      "Clear organization: Clear organization.",
      "Audience focus: Audience focus.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"AI isn't magic—it's pattern recognition at scale. Understanding what AI does and doesn't do well is essential for making good decisions about where to apply it.\"",
      "\"The most valuable AI applications in business are those that augment human decision-making with data patterns too complex for unaided analysis.\"",
      "\"AI introduces new ethical questions about bias, accountability, and transparency—responsible AI deployment requires explicit attention to these dimensions.\"",
    ]
  },
  "NF009": {
    id: "NF009",
    code: "NF:009",
    name: "Demonstrate basic database applications",
    definition: "Use databases to store and retrieve information.",
    keyPoints: [
      "Data entry: Data entry.",
      "Queries: Queries.",
      "Organization: Organization.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"The four types of analytics form a maturity ladder—most organizations start with descriptive and advance toward prescriptive as their data capabilities develop.\"",
      "\"Data analytics transforms gut-feel decisions into evidence-based ones—which doesn't eliminate judgment but grounds it in objective pattern recognition.\"",
      "\"Building a data-driven culture requires more than technology—it requires leaders who ask for data, reward evidence-based reasoning, and act on analytical insights.\"",
    ]
  },
  "NF010": {
    id: "NF010",
    code: "NF:010",
    name: "Demonstrate basic spreadsheet applications",
    definition: "Use spreadsheets to organize and analyze data.",
    keyPoints: [
      "Formulas: Formulas.",
      "Charts: Charts.",
      "Data analysis: Data analysis.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Business analytics is how organizations learn from their own experience—systematically analyzing outcomes to improve future decisions.\"",
      "\"Our marketing analytics dashboard gives every campaign manager real-time visibility into cost per acquisition, conversion rates, and ROI—no waiting for monthly reports.\"",
      "\"The most valuable analytics skill is the ability to ask the right question of the data—technical proficiency without business judgment produces answers to the wrong questions.\"",
    ]
  },
  "NF088": {
    id: "NF088",
    code: "NF:088",
    name: "Use an integrated business software application package",
    definition: "Use software that combines multiple business functions.",
    keyPoints: [
      "Improves efficiency: Improves efficiency.",
      "Reduces duplication: Reduces duplication.",
      "Enhances coordination: Enhances coordination.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Cybersecurity is not an IT problem—it's a business risk management problem that happens to require technical solutions.\"",
      "\"The human element is the weakest link in most security architectures—phishing training and security culture matter as much as technical controls.\"",
      "\"A well-tested incident response plan is the difference between a managed security event and a catastrophic business disruption.\"",
    ]
  },
  "NF011": {
    id: "NF011",
    code: "NF:011",
    name: "Demonstrate collaborative/groupware applications",
    definition: "Use tools that allow teamwork and shared access.",
    keyPoints: [
      "Shared documents: Shared documents.",
      "Communication tools: Communication tools.",
      "Real-time collaboration: Real-time collaboration.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Data privacy is both an ethical obligation and a legal requirement—organizations that treat customer data as a resource to exploit rather than a trust to protect face growing regulatory and reputational risk.\"",
      "\"GDPR's reach extends globally—any organization handling EU residents' data must comply regardless of where the organization is located.\"",
      "\"Privacy by design—building privacy protections into products and processes from the start—is far more effective and less costly than retrofitting privacy into existing systems.\"",
    ]
  },
  "NF042": {
    id: "NF042",
    code: "NF:042",
    name: "Create and post basic web page",
    definition: "Develop and publish simple web content.",
    keyPoints: [
      "Basic design: Basic design.",
      "Content accuracy: Content accuracy.",
      "Accessibility: Accessibility.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"IoT sensors in our manufacturing equipment give us real-time performance data that enables predictive maintenance—reducing unplanned downtime by 30%.\"",
      "\"Blockchain's value isn't just cryptocurrency—its supply chain transparency applications allow us to verify supplier claims and reduce counterfeit risk.\"",
      "\"Emerging technology assessment requires separating genuine near-term business value from hype—not every technology wave warrants first-mover investment.\"",
    ]
  },
  "NF215": {
    id: "NF215",
    code: "NF:215",
    name: "Collaborate on and aggregate complex internal documents",
    definition: "Combine multiple inputs into a unified document.",
    keyPoints: [
      "Consistent messaging: Consistent messaging.",
      "Team coordination: Team coordination.",
      "Clear communication: Clear communication.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Cloud computing eliminates the capital investment and maintenance burden of on-premise infrastructure—we can focus on building products rather than running data centers.\"",
      "\"The shared responsibility model in cloud security means we're responsible for securing what we build on the cloud, while the provider secures the infrastructure.\"",
      "\"Cloud scalability is a business agility enabler—we can launch a new service globally in days rather than the months it would take to provision physical infrastructure.\"",
    ]
  },
  "NF001": {
    id: "NF001",
    code: "NF:001",
    name: "Describe the nature of business records",
    definition: "Explain documents that track business activities.",
    keyPoints: [
      "Financial and: Financial and operational records.",
      "Legal compliance: Legal compliance.",
      "Decision support: Decision support.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Social media is our most direct channel for real-time customer feedback—we treat comments and messages as valuable market research, not just public relations.\"",
      "\"Social listening tools monitor brand mentions across platforms continuously—early detection of negative trends enables response before they escalate.\"",
      "\"A social media crisis can develop in hours—having pre-approved response protocols and clear escalation paths is essential for protecting brand reputation.\"",
    ]
  },
  "NF002": {
    id: "NF002",
    code: "NF:002",
    name: "Maintain customer records",
    definition: "Keep accurate and secure customer information.",
    keyPoints: [
      "Supports customer: Supports customer service.",
      "Protects privacy: Protects privacy.",
      "Improves relationships: Improves relationships.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"E-commerce eliminates geographic constraints on sales—a well-executed online store can serve customers globally from day one.\"",
      "\"Mobile commerce now exceeds desktop for many categories—sites and apps not optimized for mobile leave significant revenue on the table.\"",
      "\"Omnichannel integration is where most retailers still struggle—customers expect seamless experience whether they're online, in-store, or switching between the two.\"",
    ]
  },
  "NF013": {
    id: "NF013",
    code: "NF:013",
    name: "Describe current business trends",
    definition: "Identify patterns shaping business environments.",
    keyPoints: [
      "Market changes: Market changes.",
      "Technology advancements: Technology advancements.",
      "Consumer behavior: Consumer behavior.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Digital marketing's fundamental advantage over traditional is measurability—every impression, click, and conversion is tracked and attributable.\"",
      "\"Search intent data is the most valuable signal in digital marketing—people searching for what you sell are actively expressing purchase intent.\"",
      "\"A/B testing is the discipline that separates improving digital marketers from plateauing ones—systematic testing of messages, offers, and formats drives continuous improvement.\"",
    ]
  },
  "NF014": {
    id: "NF014",
    code: "NF:014",
    name: "Monitor internal records for business information",
    definition: "Review company data to assess performance.",
    keyPoints: [
      "Sales data: Sales data.",
      "Productivity metrics: Productivity metrics.",
      "Financial reports: Financial reports.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Intellectual property protection is a competitive strategy—patents, trademarks, and trade secrets create defensible advantages that are difficult to replicate.\"",
      "\"Copyright protection applies automatically to original works—but registration provides additional legal remedies in case of infringement.\"",
      "\"Trade secret protection requires active maintenance—companies must implement reasonable measures to maintain confidentiality or lose protection.\"",
    ]
  },
  "NF015": {
    id: "NF015",
    code: "NF:015",
    name: "Conduct an environmental scan",
    definition: "Analyze external factors affecting business.",
    keyPoints: [
      "Economic trends: Economic trends.",
      "Competitive landscape: Competitive landscape.",
      "Regulatory environment: Regulatory environment.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"My digital footprint is visible to employers, clients, and colleagues—I manage my online presence as a professional reputation asset.\"",
      "\"I verify information before sharing—amplifying misinformation, even unintentionally, can damage my credibility and contribute to public harm.\"",
      "\"Digital citizenship means applying the same ethical standards online that I apply offline—the Internet doesn't create a separate ethical environment.\"",
    ]
  },
  "NF093": {
    id: "NF093",
    code: "NF:093",
    name: "Interpret statistical findings",
    definition: "Understand data results to draw meaning.",
    keyPoints: [
      "Charts and: Charts and graphs.",
      "Trends and: Trends and correlations.",
      "Informed decisions: Informed decisions.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Project management discipline is what separates projects that achieve their objectives on time and budget from those that drift indefinitely.\"",
      "\"The project triangle is real—when a client asks for more scope without more time or budget, something has to give, and that conversation needs to happen explicitly.\"",
      "\"I communicate project status proactively—stakeholders should never be surprised by a delay or budget issue I saw coming.\"",
    ]
  },
  "NF216": {
    id: "NF216",
    code: "NF:216",
    name: "Translate research findings into actionable recommendations",
    definition: "Convert data analysis into business actions.",
    keyPoints: [
      "Clear recommendations: Clear recommendations.",
      "Strategic alignment: Strategic alignment.",
      "Practical application: Practical application.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Spreadsheet proficiency is one of the highest-leverage business skills—the ability to build dynamic models and analyze data independently creates enormous professional value.\"",
      "\"Presentation design is a communication skill, not just a software skill—the most technically skilled PowerPoint user can still create confusing, ineffective presentations.\"",
      "\"Collaboration platform fluency has become a baseline professional expectation—teams that use these tools effectively are significantly more productive than those who don't.\"",
    ]
  },
  "NF139": {
    id: "NF139",
    code: "NF:139",
    name: "Explain the principles of data analysis",
    definition: "Describe how data is examined to find meaning.",
    keyPoints: [
      "Identifies patterns: Identifies patterns.",
      "Supports decisions: Supports decisions.",
      "Improves accuracy: Improves accuracy.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"ERP creates a single version of the truth—finance, operations, and sales all work from the same data rather than reconciling inconsistent spreadsheets.\"",
      "\"ERP implementations succeed when they're treated as business transformation projects, not technology projects—change management is as critical as software configuration.\"",
      "\"The real-time cross-functional visibility ERP provides enables decisions that would have required days of data collection with disconnected systems.\"",
    ]
  },
  "NF140": {
    id: "NF140",
    code: "NF:140",
    name: "Explain tools used to access database information",
    definition: "Describe methods for retrieving stored data.",
    keyPoints: [
      "Queries: Queries.",
      "Reports: Reports.",
      "Filters: Filters.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Supply chain visibility is a competitive advantage—knowing exactly where inventory is in the network enables faster customer service and leaner inventory management.\"",
      "\"Demand planning integration with our supply chain system has reduced our inventory by 25% while actually improving fill rates.\"",
      "\"The pandemic demonstrated that supply chain resilience requires both technology visibility and strategic diversification—systems tell you what's happening; resilient design determines whether you can respond.\"",
    ]
  },
  "NF141": {
    id: "NF141",
    code: "NF:141",
    name: "Access information in the database system",
    definition: "Retrieve data from databases for business use.",
    keyPoints: [
      "Accuracy: Accuracy.",
      "Efficiency: Efficiency.",
      "Data integrity: Data integrity.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Technology strategy starts with business strategy—I ask 'what business outcomes do we need?' before evaluating which technology could support them.\"",
      "\"The build vs. buy decision hinges on differentiation—we build what creates competitive advantage and buy commodity functionality from vendors.\"",
      "\"Legacy system modernization is one of the biggest technology strategy challenges—the cost and risk of migration must be weighed against the growing cost and constraint of maintaining aging systems.\"",
    ]
  },
  "NF148": {
    id: "NF148",
    code: "NF:148",
    name: "Discuss the nature of data mining",
    definition: "Explain extracting useful patterns from large data sets.",
    keyPoints: [
      "Identifies trends: Identifies trends.",
      "Improves predictions: Improves predictions.",
      "Supports strategy: Supports strategy.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Innovation management is about more than having good ideas—it's about building a system that consistently generates, evaluates, and implements them.\"",
      "\"Psychological safety is the cultural prerequisite for innovation—people only propose unconventional ideas when they're confident they won't be ridiculed for trying.\"",
      "\"An innovation portfolio should balance incremental improvements to existing products with exploratory bets on potentially disruptive new directions.\"",
    ]
  },
  "NF149": {
    id: "NF149",
    code: "NF:149",
    name: "Describe data mining tools and techniques",
    definition: "Explain methods used to analyze large data sets.",
    keyPoints: [
      "Software tools: Software tools.",
      "Statistical models: Statistical models.",
      "Pattern recognition: Pattern recognition.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Technology impact assessment must include social and ethical dimensions—not just whether something is technologically possible but whether it's beneficial for people and communities.\"",
      "\"The digital divide is a business issue as well as a social one—segments of the market without digital access represent both a responsibility and an opportunity.\"",
      "\"Technology companies increasingly must reckon with the societal consequences of their products—this is becoming both a regulatory and reputational imperative.\"",
    ]
  },
  "NF150": {
    id: "NF150",
    code: "NF:150",
    name: "Discuss the importance of ethics in data mining",
    definition: "Explain ethical responsibilities in data use.",
    keyPoints: [
      "Protects privacy: Protects privacy.",
      "Prevents misuse: Prevents misuse.",
      "Builds trust: Builds trust.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Every technology adoption decision should include an explicit risk assessment—what attack surface does this create, what data does it collect, and what happens if it fails?\"",
      "\"Operational dependency on any single technology creates a single point of failure—redundancy and contingency planning must accompany technology adoption.\"",
      "\"Algorithmic bias in AI systems can create legal liability and reputational harm—organizations must actively test models for discriminatory outcomes before and after deployment.\"",
    ]
  },
  "NF151": {
    id: "NF151",
    code: "NF:151",
    name: "Demonstrate basic data mining techniques",
    definition: "Apply simple methods to extract insights from data.",
    keyPoints: [
      "Sorting and: Sorting and filtering.",
      "Trend analysis: Trend analysis.",
      "Categorization: Categorization.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Telecommunications infrastructure is the circulatory system of the modern business—every digital business activity depends on its reliability and bandwidth.\"",
      "\"5G isn't just faster mobile internet—its low latency enables real-time applications like autonomous vehicles and remote surgery that 4G couldn't support.\"",
      "\"Telecommunications reliability directly affects business continuity—understanding your backup connectivity options is part of business resilience planning.\"",
    ]
  },
  "NF152": {
    id: "NF152",
    code: "NF:152",
    name: "Interpret data mining findings",
    definition: "Explain results produced through data mining.",
    keyPoints: [
      "Supports decision-making: Supports decision-making.",
      "Identifies opportunities: Identifies opportunities.",
      "Reduces uncertainty: Reduces uncertainty.",
      "Business Relevance: This skill is fundamental to effective information management in modern organizations.",
      "Efficiency Gain: Applying this skill correctly saves time and improves the quality of business decisions.",
    ],
    roleplayTips: [
      "\"Technology has made communication faster and more abundant—the new challenge is managing the volume to protect focused work time.\"",
      "\"Channel selection is a communication skill—a nuanced sensitive topic deserves a video call, not an email; a quick update belongs in a message, not a meeting.\"",
      "\"Collaboration platforms have replaced much of email for internal communication in high-performing teams—persistent, searchable conversations are more useful than threaded email chains.\"",
    ]
  },

  "OP189": {
    id: "OP189",
    code: "OP:189",
    name: "Explain the nature of operations",
    definition: "Describe how operations manage the day-to-day activities required to produce goods and services.",
    keyPoints: [
      "Focuses on: Focuses on efficiency and productivity.",
      "Coordinates people: Coordinates people, materials, and processes.",
      "Supports overall: Supports overall business objectives.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Operations is where strategy becomes reality—it's the function that actually produces the value we promise customers.\"",
      "\"Operational efficiency is competitive advantage—the organization that produces the same quality at lower cost can win on price or reinvest the margin in growth.\"",
      "\"Operations management is about continuous process improvement—every inefficiency we eliminate is margin we recapture or price reduction we can offer.\"",
    ]
  },
  "OP190": {
    id: "OP190",
    code: "OP:190",
    name: "Discuss the role of ethics in operations",
    definition: "Explain how ethical standards guide operational decisions and practices.",
    keyPoints: [
      "Ensures fair: Ensures fair labor practices.",
      "Promotes safe: Promotes safe working conditions.",
      "Reduces legal: Reduces legal and reputational risk.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Safety procedures protect both workers and the organization—workplace injuries create human suffering, legal liability, productivity loss, and insurance costs.\"",
      "\"Near-miss reporting is as important as accident reporting—near-misses are advance warning of conditions that will eventually cause injury if not corrected.\"",
      "\"A strong safety culture is built by leaders who model safety behavior and hold all levels accountable—rules without culture produce compliance, not safety.\"",
    ]
  },
  "OP191": {
    id: "OP191",
    code: "OP:191",
    name: "Describe the use of technology in operations",
    definition: "Explain how technology improves operational efficiency and control.",
    keyPoints: [
      "Automation of: Automation of processes.",
      "Improved tracking: Improved tracking and scheduling.",
      "Increased accuracy: Increased accuracy and speed.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"The hierarchy of controls guides safety investments—we prioritize eliminating hazards entirely over adding PPE that still leaves workers exposed.\"",
      "\"Root cause analysis of every incident—not just blame assignment—is what prevents recurrence and continuously improves our safety performance.\"",
      "\"Workplace safety isn't just compliance—it's a statement about how we value the people who create value for us.\"",
    ]
  },
  "OP004": {
    id: "OP004",
    code: "OP:004",
    name: "Describe health and safety regulations in business",
    definition: "Explain rules designed to protect employees and customers from harm.",
    keyPoints: [
      "Prevent workplace: Prevent workplace injuries.",
      "Ensure safe: Ensure safe environments.",
      "Required by: Required by law.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"SWOT analysis is most valuable when it's honest—acknowledging real weaknesses and credible threats rather than producing a rosy self-assessment.\"",
      "\"The best opportunities are often found at the intersection of competitor weaknesses and emerging customer needs—both conditions must exist simultaneously.\"",
      "\"I review our threat and opportunity landscape quarterly—the business environment moves fast enough that annual reviews leave us reacting to changes we should have anticipated.\"",
    ]
  },
  "OP005": {
    id: "OP005",
    code: "OP:005",
    name: "Report noncompliance with health and safety regulations",
    definition: "Identify and report unsafe conditions or violations.",
    keyPoints: [
      "Protects employees: Protects employees.",
      "Reduces liability: Reduces liability.",
      "Encourages accountability: Encourages accountability.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Purchasing is not just order placement—it's supply chain strategy that directly affects product quality, cost competitiveness, and operational continuity.\"",
      "\"Total cost of ownership analysis reveals that the lowest-price supplier is often not the lowest-cost supplier when quality, delivery, and support are included.\"",
      "\"Strategic supplier relationships are collaborative, not adversarial—suppliers who understand our goals and processes become a competitive advantage.\"",
    ]
  },
  "OP006": {
    id: "OP006",
    code: "OP:006",
    name: "Follow instructions for use of equipment, tools, and machinery",
    definition: "Use equipment according to guidelines to ensure safety.",
    keyPoints: [
      "Prevents accidents: Prevents accidents.",
      "Extends equipment: Extends equipment life.",
      "Improves efficiency: Improves efficiency.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Inventory management is about optimizing the trade-off between service level and carrying cost—the right balance depends on our margins, demand variability, and lead times.\"",
      "\"ABC analysis focuses our management attention where it matters most—the top 20% of SKUs often represent 80% of our inventory value.\"",
      "\"Inventory accuracy is fundamental—you can't make good replenishment decisions based on inaccurate records.\"",
    ]
  },
  "OP007": {
    id: "OP007",
    code: "OP:007",
    name: "Follow safety precautions",
    definition: "Apply safety rules to reduce workplace risks.",
    keyPoints: [
      "Wear protective: Wear protective equipment.",
      "Follow posted: Follow posted guidelines.",
      "Prevent injuries: Prevent injuries.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Supply chain management is the integration of everything from raw material to customer delivery—excellence here directly determines cost, quality, and speed to market.\"",
      "\"The bullwhip effect is why demand signal accuracy is so valuable upstream—we share point-of-sale data with our suppliers to reduce amplification.\"",
      "\"Supply chain resilience requires deliberate investment in redundancy—multiple sources for critical components, safety stock for key SKUs, and contingency logistics.\"",
    ]
  },
  "OP008": {
    id: "OP008",
    code: "OP:008",
    name: "Maintain a safe work environment",
    definition: "Ensure the workplace remains clean, organized, and hazard-free.",
    keyPoints: [
      "Reduces accidents: Reduces accidents.",
      "Improves morale: Improves morale.",
      "Increases productivity: Increases productivity.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Predictive maintenance using IoT sensor data has reduced our unplanned downtime by 40%—we fix equipment before it breaks, not after.\"",
      "\"Automation doesn't replace all human judgment—it takes over repetitive, rules-based tasks and frees workers to focus on complex, judgment-intensive work.\"",
      "\"Real-time operational data visibility through our ERP gives management the situational awareness to respond to disruptions hours faster than we could before.\"",
    ]
  },
  "OP009": {
    id: "OP009",
    code: "OP:009",
    name: "Explain procedures for handling accidents",
    definition: "Describe steps to take when workplace accidents occur.",
    keyPoints: [
      "Provide immediate: Provide immediate assistance.",
      "Report incidents: Report incidents promptly.",
      "Follow company: Follow company procedures.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Quality is defined by the customer, not the engineering spec—we regularly validate that our technical standards align with what customers actually value.\"",
      "\"Total quality management embeds quality responsibility throughout the organization—quality isn't the QA department's job alone; it's everyone's.\"",
      "\"The cost of quality analysis is compelling: every dollar invested in defect prevention saves multiple dollars in rework, warranty claims, and customer recovery.\"",
    ]
  },
  "OP010": {
    id: "OP010",
    code: "OP:010",
    name: "Handle and report emergency situations",
    definition: "Respond appropriately to emergencies to minimize harm.",
    keyPoints: [
      "Follow emergency: Follow emergency plans.",
      "Communicate clearly: Communicate clearly.",
      "Protect people: Protect people first.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Our QMS is the institutional memory of our quality standards—it ensures consistency regardless of which individual performs the task.\"",
      "\"The corrective action process is where quality improvement actually happens—every documented nonconformance drives systematic root cause analysis and prevention.\"",
      "\"ISO 9001 certification signals to customers that our quality processes are independently verified against an international standard—it's a commercial differentiator.\"",
    ]
  },
  "OP153": {
    id: "OP153",
    code: "OP:153",
    name: "Protect company information and intangibles",
    definition: "Safeguard sensitive data and intellectual property.",
    keyPoints: [
      "Prevents data: Prevents data breaches.",
      "Protects competitive: Protects competitive advantage.",
      "Maintains reputation: Maintains reputation.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Project initiation isn't just administrative—a clear charter prevents the scope misalignments that cause projects to fail months later.\"",
      "\"Change control is protective, not bureaucratic—it ensures that scope changes are conscious decisions with resource implications, not quiet additions that derail the schedule.\"",
      "\"Lessons learned documentation at project closure is how organizations improve project performance over time—if we don't capture it, we repeat the same mistakes.\"",
    ]
  },
  "OP152": {
    id: "OP152",
    code: "OP:152",
    name: "Follow established security procedures/policies",
    definition: "Comply with company rules related to security.",
    keyPoints: [
      "Prevents losses: Prevents losses.",
      "Protects employees: Protects employees.",
      "Maintains trust: Maintains trust.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"A well-maintained Gantt chart gives every team member visibility into dependencies—they can see how their delays affect downstream tasks and the overall timeline.\"",
      "\"Our project risk register isn't a compliance document—we actively review it in weekly standups and update mitigation actions as risks evolve.\"",
      "\"Project management software creates a single source of truth for task ownership and status—it eliminates the 'I thought you were doing that' failures.\"",
    ]
  },
  "OP013": {
    id: "OP013",
    code: "OP:013",
    name: "Apply project management processes",
    definition: "Execute the structured activities of project initiation, planning, execution, monitoring, and closing to deliver project objectives.",
    keyPoints: [
      "Charter Development: The project charter formally authorizes the project and defines its scope, objectives, stakeholders, and constraints.",
      "Planning Documents: Work breakdown structure, schedule, budget, risk plan, and communication plan form the project planning foundation.",
      "Execution Management: Daily coordination of tasks, resources, and stakeholder communication to keep the project on track.",
      "Change Management: Formal change control processes evaluate and approve scope changes to prevent scope creep.",
      "Project Closure: Formal closure includes final deliverable acceptance, lessons learned documentation, and resource release."
    ],
    roleplayTips: [
      "\"Project initiation isn't just administrative—a clear charter prevents the scope misalignments that cause projects to fail months later.\"",
      "\"Change control is protective, not bureaucratic—it ensures that scope changes are conscious decisions with resource implications, not quiet additions that derail the schedule.\"",
      "\"Lessons learned documentation at project closure is how organizations improve project performance over time—if we don't capture it, we repeat the same mistakes.\""
    ]
  },
  "OP441": {
    id: "OP441",
    code: "OP:441",
    name: "Explain information privacy, security, and confidentiality considerations",
    definition: "Describe responsibilities related to protecting information.",
    keyPoints: [
      "Customer privacy: Customer privacy.",
      "Secure data: Secure data handling.",
      "Legal compliance: Legal compliance.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Needs assessment before solution design prevents the costly mistake of solving the wrong problem or addressing symptoms rather than causes.\"",
      "\"I collect needs information from multiple stakeholder groups—different perspectives often reveal different dimensions of the same underlying problem.\"",
      "\"A documented needs assessment creates shared understanding of the problem—it's the foundation that prevents solution-scope disputes later.\"",
    ]
  },
  "OP064": {
    id: "OP064",
    code: "OP:064",
    name: "Maintain data security",
    definition: "Protect electronic and physical data from unauthorized access.",
    keyPoints: [
      "Use passwords: Use passwords and access controls.",
      "Secure storage: Secure storage systems.",
      "Prevent data: Prevent data loss.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Understanding fixed versus variable cost structure is essential for break-even analysis and pricing decisions—the two respond very differently to volume changes.\"",
      "\"Overhead allocation methodology affects apparent product profitability—incorrect allocation can lead to discontinuing profitable products or retaining unprofitable ones.\"",
      "\"Contribution margin analysis by product reveals which offerings best cover our fixed overhead—it drives portfolio and pricing decisions.\"",
    ]
  },
  "OP158": {
    id: "OP158",
    code: "OP:158",
    name: "Explain the nature of project management",
    definition: "Describe how projects are planned, executed, and completed.",
    keyPoints: [
      "Temporary and: Temporary and goal-oriented.",
      "Uses timelines: Uses timelines and resources.",
      "Ensures objectives: Ensures objectives are met.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"A budget is a management commitment—it authorizes spending and establishes performance expectations that we'll measure against throughout the year.\"",
      "\"Variance analysis is only useful when it generates action—every significant variance should be explained and accompanied by a corrective action plan.\"",
      "\"Flexible budgets provide more meaningful performance analysis than fixed budgets because they remove the confounding effect of volume variation.\"",
    ]
  },
  "OP675": {
    id: "OP675",
    code: "OP:675",
    name: "Describe the role of ethics in project management",
    definition: "Explain ethical responsibilities during project execution.",
    keyPoints: [
      "Honest reporting: Honest reporting.",
      "Fair treatment: Fair treatment of team members.",
      "Responsible resource: Responsible resource use.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"I monitor project health weekly using cost and schedule performance indices—they give me an objective early warning when we're trending off track.\"",
      "\"Status reporting transparency is non-negotiable—stakeholders who receive only good news are being set up for surprise, and surprises erode trust.\"",
      "\"When a project falls behind, I evaluate recovery options explicitly—compression, parallel tracking, scope reduction—and present the trade-offs to stakeholders.\"",
    ]
  },
  "OP519": {
    id: "OP519",
    code: "OP:519",
    name: "Plan project",
    definition: "Outline steps needed to complete a project.",
    keyPoints: [
      "Set goals: Set goals.",
      "Establish timelines: Establish timelines.",
      "Allocate resources: Allocate resources.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Process documentation is the foundation of operational consistency—undocumented processes produce inconsistent results that depend entirely on individual knowledge.\"",
      "\"Process mapping reveals non-value-adding steps that have accumulated over time—most processes have 20–40% waste that can be eliminated without affecting output quality.\"",
      "\"Handoffs between process steps are where most errors occur—designing these transitions carefully and measuring handoff quality reduces defects significantly.\"",
    ]
  },
  "OP520": {
    id: "OP520",
    code: "OP:520",
    name: "Monitor projects and take corrective actions",
    definition: "Track progress and fix issues as they arise.",
    keyPoints: [
      "Identify delays: Identify delays.",
      "Adjust plans: Adjust plans.",
      "Maintain quality: Maintain quality.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Continuous improvement is a culture, not a project—the mindset that no process is ever good enough to stop improving is what sustains competitive advantage.\"",
      "\"The PDCA cycle keeps improvement efforts disciplined—we don't just try things, we plan, execute, measure, and standardize what works.\"",
      "\"The best improvement ideas come from the people doing the work—frontline employees see inefficiencies that managers and analysts miss.\"",
    ]
  },
  "OP521": {
    id: "OP521",
    code: "OP:521",
    name: "Evaluate project success",
    definition: "Determine whether project objectives were achieved.",
    keyPoints: [
      "Measure outcomes: Measure outcomes.",
      "Compare goals: Compare goals vs. results.",
      "Identify improvements: Identify improvements.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Lean is about maximizing value and eliminating everything else—every step in our process should be answerable to the question 'does this add value for the customer?'\"",
      "\"Value stream mapping gave us our first holistic picture of where time and cost were being wasted—it revealed that 60% of our lead time was waiting, not processing.\"",
      "\"5S isn't just cleaning up—it's a foundation for operational excellence. A well-organized workspace prevents errors, reduces search time, and signals a culture of discipline.\"",
    ]
  },
  "OP003": {
    id: "OP003",
    code: "OP:003",
    name: "Identify resources needed for project",
    definition: "Determine people, materials, and funds required.",
    keyPoints: [
      "Labor: Labor.",
      "Budget: Budget.",
      "Equipment: Equipment.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"The three-way match—PO, receipt, and invoice—is the primary control against payment fraud and billing errors in the purchasing process.\"",
      "\"Competitive bidding for significant purchases isn't just about price—it also reveals market alternatives and keeps existing suppliers aware that their pricing is being benchmarked.\"",
      "\"Authorization controls in purchasing are internal controls—they ensure that spending is approved by someone with appropriate authority and accountability.\"",
    ]
  },
  "OP001": {
    id: "OP001",
    code: "OP:001",
    name: "Develop project plan",
    definition: "Create a detailed roadmap for completing a project.",
    keyPoints: [
      "Tasks and: Tasks and timelines.",
      "Responsibilities: Responsibilities.",
      "Milestones: Milestones.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Vendor selection is a strategic decision—a poor supplier creates quality problems, delivery failures, and relationship costs that far exceed any price savings.\"",
      "\"We always check supplier references—a supplier's existing customers tell us more about operational performance than any sales presentation.\"",
      "\"For critical supply items, we maintain at least two qualified vendors—single-source dependency creates unacceptable supply chain risk.\"",
    ]
  },
  "OP002": {
    id: "OP002",
    code: "OP:002",
    name: "Apply project-management tools",
    definition: "Use tools to track and communicate progress.",
    keyPoints: [
      "Gantt charts: Gantt charts.",
      "Status reports: Status reports.",
      "Project software: Project software.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Value-based pricing captures the most margin for differentiated products—the question is what the customer's problem is worth to them, not what our product costs to make.\"",
      "\"Price elasticity analysis tells us whether raising prices gains or loses revenue—demand for our product is relatively inelastic, which gives us pricing power.\"",
      "\"Pricing strategy should be revisited when competitive dynamics, cost structures, or customer value perceptions change—static pricing in a dynamic market leaves money on the table.\"",
    ]
  },
  "OP159": {
    id: "OP159",
    code: "OP:159",
    name: "Evaluate project results",
    definition: "Assess project outcomes and lessons learned.",
    keyPoints: [
      "Effectiveness: Effectiveness.",
      "Efficiency: Efficiency.",
      "Future improvements: Future improvements.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Expense control starts with visibility—you can't manage what you don't measure, and most organizations have cost categories they've never scrutinized.\"",
      "\"Zero-based budgeting forces a fresh justification for every expense rather than simply rolling forward last year's budget—it eliminates costs that have persisted out of habit.\"",
      "\"Process improvement is the most sustainable expense reduction strategy—it reduces cost structurally rather than through one-time cuts that often rebound.\"",
    ]
  },
  "OP015": {
    id: "OP015",
    code: "OP:015",
    name: "Explain the nature and scope of purchasing",
    definition: "Describe how businesses acquire goods and services.",
    keyPoints: [
      "Supplier selection: Supplier selection.",
      "Cost control: Cost control.",
      "Quality assurance: Quality assurance.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Business records are both operational tools and legal documents—accuracy and proper retention protect the organization in audits, disputes, and regulatory reviews.\"",
      "\"Retention policy compliance isn't bureaucratic—it protects the organization in litigation by ensuring relevant records are available and irrelevant ones are properly disposed of.\"",
      "\"Electronic record management systems make compliance easier—automated retention scheduling, access logging, and search capability replace manual records management.\"",
    ]
  },
  "OP016": {
    id: "OP016",
    code: "OP:016",
    name: "Place orders/reorders",
    definition: "Request supplies when needed.",
    keyPoints: [
      "Prevent shortages: Prevent shortages.",
      "Maintain operations: Maintain operations.",
      "Support productivity: Support productivity.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Operational planning converts strategy from aspiration to execution—without it, strategic objectives remain theoretical.\"",
      "\"A good operational plan specifies the who, what, when, and how—not just the what. Ambiguity about ownership and timing is where plans fail.\"",
      "\"Implementation discipline is where most organizations struggle—the plan is good, but follow-through requires consistent monitoring and accountability.\"",
    ]
  },
  "OP161": {
    id: "OP161",
    code: "OP:161",
    name: "Select vendors",
    definition: "Choose suppliers based on performance and value.",
    keyPoints: [
      "Reliability: Reliability.",
      "Cost: Cost.",
      "Quality: Quality.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"A well-written job description is the foundation of both the hiring process and the performance management process—it defines what success looks like.\"",
      "\"I use behaviors and outcomes in job descriptions rather than vague skills—'analyzes monthly financial reports and identifies variances' is more useful than 'financial skills.'\"",
      "\"Legal defensibility requires that job requirements be genuinely job-related—including credentials or experience that aren't actually necessary creates discrimination risk.\"",
    ]
  },
  "OP246": {
    id: "OP246",
    code: "OP:246",
    name: "Discuss ethical purchasing methods",
    definition: "Explain responsible buying practices.",
    keyPoints: [
      "Fair supplier: Fair supplier treatment.",
      "Transparency: Transparency.",
      "Legal compliance: Legal compliance.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Event management is project management with a hard deadline that can't move—the event happens on the day it's scheduled regardless of planning gaps.\"",
      "\"I define event success metrics before planning begins—attendance, engagement, leads generated, or satisfaction scores—so we know what we're optimizing for.\"",
      "\"Contingency planning is non-negotiable in event management—every critical element needs a backup plan that can be activated quickly.\"",
    ]
  },
  "OP247": {
    id: "OP247",
    code: "OP:247",
    name: "Explain impact of purchasing on productivity",
    definition: "Describe how purchasing affects business efficiency.",
    keyPoints: [
      "Timely delivery: Timely delivery.",
      "Quality materials: Quality materials.",
      "Cost control: Cost control.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Segregation of duties is the most fundamental internal control—no single person should be able to both authorize and record a transaction.\"",
      "\"Internal controls are not just about fraud prevention—they also catch innocent errors that would otherwise compound into larger problems.\"",
      "\"Weak internal controls in small businesses are a leading cause of loss—limited staff makes segregation challenging, but compensating controls can close most gaps.\"",
    ]
  },
  "OP160": {
    id: "OP160",
    code: "OP:160",
    name: "Manage the bid process",
    definition: "Oversee supplier proposals and selection.",
    keyPoints: [
      "Fair evaluation: Fair evaluation.",
      "Cost comparison: Cost comparison.",
      "Transparency: Transparency.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Cost-benefit analysis forces explicit thinking about all costs and benefits—including indirect and long-term ones that intuitive decisions often miss.\"",
      "\"I present sensitivity analysis alongside the base case—stakeholders should understand which assumptions drive the result and how robust the conclusion is.\"",
      "\"Net present value is my default decision metric for capital investments—it correctly accounts for the time value of money in ways that simple payback period analysis doesn't.\"",
    ]
  },
  "OP031": {
    id: "OP031",
    code: "OP:031",
    name: "Prepare job descriptions",
    definition: "Create formal documents that define the responsibilities, qualifications, reporting relationships, and performance expectations for a specific position.",
    keyPoints: [
      "Job Description Components: Title, summary, responsibilities, qualifications, reporting structure, and performance standards.",
      "Recruitment Tool: Clear job descriptions attract better-matched candidates and reduce unqualified applications.",
      "Legal Protection: Documented job requirements provide legal defense in discrimination claims when used consistently in hiring.",
      "Performance Foundation: Job descriptions establish expectations against which performance can be fairly measured.",
      "Compensation Alignment: Job descriptions support job evaluation and compensation benchmarking processes."
    ],
    roleplayTips: [
      "\"A well-written job description is the foundation of both the hiring process and the performance management process—it defines what success looks like.\"",
      "\"I use behaviors and outcomes in job descriptions rather than vague skills—'analyzes monthly financial reports and identifies variances' is more useful than 'financial skills.'\"",
      "\"Legal defensibility requires that job requirements be genuinely job-related—including credentials or experience that aren't actually necessary creates discrimination risk.\""
    ]
  },
  "OP162": {
    id: "OP162",
    code: "OP:162",
    name: "Evaluate vendor performance",
    definition: "Assess supplier effectiveness over time.",
    keyPoints: [
      "Quality standards: Quality standards.",
      "Delivery reliability: Delivery reliability.",
      "Cost efficiency: Cost efficiency.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Staffing plans translate business strategy into workforce action—if we're growing 30% next year, we need to know now which roles to hire and when.\"",
      "\"Succession planning is risk management for human capital—critical role vacancies without successors create organizational vulnerability.\"",
      "\"Workforce planning is most valuable as a continuous process, not an annual exercise—the business environment changes too fast for one-time plans.\"",
    ]
  },
  "OP017": {
    id: "OP017",
    code: "OP:017",
    name: "Explain the concept of production",
    definition: "Describe the process of creating goods and services.",
    keyPoints: [
      "Converts inputs: Converts inputs to outputs.",
      "Adds value: Adds value.",
      "Supports customer: Supports customer needs.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Workplace regulation compliance is both a legal obligation and an ethical one—laws like FLSA and EEO exist to protect workers from exploitation and discrimination.\"",
      "\"FLSA overtime misclassification is one of the most common and costly employment law violations—correctly classifying exempt versus non-exempt employees is essential.\"",
      "\"Employment law changes regularly—staying current through HR professional development and legal counsel is a continuous compliance management requirement.\"",
    ]
  },
  "OP163": {
    id: "OP163",
    code: "OP:163",
    name: "Identify quality-control measures",
    definition: "Recognize methods used to maintain standards.",
    keyPoints: [
      "Inspections: Inspections.",
      "Testing: Testing.",
      "Performance standards: Performance standards.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Regulatory compliance is both a cost and a competitive factor—companies that integrate compliance efficiently have a cost advantage over those that treat it as an afterthought.\"",
      "\"Proactive regulatory monitoring gives us time to adapt—companies that wait for final rules before acting face compressed timelines and higher implementation costs.\"",
      "\"In highly regulated industries, compliance capability becomes a competitive differentiator—we've built compliance infrastructure that smaller competitors can't match.\"",
    ]
  },
  "OP164": {
    id: "OP164",
    code: "OP:164",
    name: "Utilize quality-control methods at work",
    definition: "Apply quality practices to reduce errors.",
    keyPoints: [
      "Consistency: Consistency.",
      "Accuracy: Accuracy.",
      "Customer satisfaction: Customer satisfaction.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Business continuity planning is insurance for operations—the cost of preparation is trivial compared to the cost of unplanned disruption without a recovery plan.\"",
      "\"An untested business continuity plan is not a plan—it's a document. Regular testing reveals gaps and builds organizational confidence in recovery capability.\"",
      "\"Business impact analysis defines our recovery priorities—not every process needs to recover in four hours; knowing which ones do focuses our investment.\"",
    ]
  },
  "OP019": {
    id: "OP019",
    code: "OP:019",
    name: "Describe crucial elements of a quality culture",
    definition: "Explain values that support continuous improvement.",
    keyPoints: [
      "Employee involvement: Employee involvement.",
      "Accountability: Accountability.",
      "Customer focus: Customer focus.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Logistics is the physical fulfillment of the marketing promise—customers care about when the product arrives, not just whether they ordered it.\"",
      "\"Last-mile delivery is our highest per-unit cost and largest area of customer satisfaction impact—we invest disproportionately in optimizing it.\"",
      "\"Third-party logistics partnerships give us access to scale, network, and technology that would cost far more to build than to buy.\"",
    ]
  },
  "OP652": {
    id: "OP652",
    code: "OP:652",
    name: "Resolve problems with suppliers' quality issues",
    definition: "Address and correct supplier-related quality problems.",
    keyPoints: [
      "Communication: Communication.",
      "Corrective action: Corrective action.",
      "Supplier accountability: Supplier accountability.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Distribution strategy is as important as product strategy—a superior product that can't reach its customers at acceptable cost and convenience will fail.\"",
      "\"Channel conflict is a real risk when adding direct-to-consumer alongside existing retail partners—managing it requires transparent pricing and clear territory boundaries.\"",
      "\"Omnichannel distribution requires integrated inventory visibility—customers who order online for in-store pickup expect that inventory to actually be there.\"",
    ]
  },
  "OP024": {
    id: "OP024",
    code: "OP:024",
    name: "Explain the nature of overhead/operating costs",
    definition: "Describe ongoing business expenses.",
    keyPoints: [
      "Rent and: Rent and utilities.",
      "Salaries: Salaries.",
      "Supplies: Supplies.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Production system design is a strategic choice—assembly line efficiency is ideal for high volume, low variety; job shop flexibility suits custom, low-volume production.\"",
      "\"Make vs. buy decisions should focus on whether the activity is core to our competitive advantage—we should make what differentiates us and buy what doesn't.\"",
      "\"Quality built into the production process is always less costly than quality inspected at the end—prevention beats detection.\"",
    ]
  },
  "OP025": {
    id: "OP025",
    code: "OP:025",
    name: "Explain employee's role in expense control",
    definition: "Describe how employees help reduce costs.",
    keyPoints: [
      "Avoid waste: Avoid waste.",
      "Use resources: Use resources efficiently.",
      "Follow procedures: Follow procedures.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"My preparation for supplier negotiations includes benchmarking competitive prices and identifying alternative suppliers—that information shapes my BATNA and confidence.\"",
      "\"I look for trades in vendor negotiations—conceding something they value highly that costs me little, in exchange for something I value highly that costs them little.\"",
      "\"A vendor agreement both parties are comfortable with is more valuable than a hard-won deal a supplier resents—compliance without goodwill produces poor-quality execution.\"",
    ]
  },
  "OP228": {
    id: "OP228",
    code: "OP:228",
    name: "Organize and prioritize work",
    definition: "Arrange tasks based on importance and urgency.",
    keyPoints: [
      "Time management: Time management.",
      "Efficiency: Efficiency.",
      "Reduced stress: Reduced stress.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Fiscal responsibility means treating organizational money with the same care I'd give my own—every expenditure should be justifiable on its merits.\"",
      "\"I communicate proactively when I see budget variances developing—surprises at year-end are worse than early warning that enables corrective action.\"",
      "\"Transparency in financial management builds trust—stakeholders who have accurate, timely information can make better decisions and give more appropriate oversight.\"",
    ]
  },
  "OP230": {
    id: "OP230",
    code: "OP:230",
    name: "Coordinate work with team members",
    definition: "Work collaboratively to complete tasks.",
    keyPoints: [
      "Communication: Communication.",
      "Shared goals: Shared goals.",
      "Team efficiency: Team efficiency.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Overhead cost management requires periodic zero-based review—costs that have accumulated over years often persist long after their business justification has expired.\"",
      "\"Shared services consolidation is one of our most effective overhead reduction strategies—centralizing functions across divisions achieves 20–30% cost reduction through scale.\"",
      "\"Technology investment in overhead automation produces ongoing returns—the payback period on AP automation, for example, is typically under 18 months.\"",
    ]
  },
  "OP196": {
    id: "OP196",
    code: "OP:196",
    name: "Coordinate activities with other departments",
    definition: "Align work across departments.",
    keyPoints: [
      "Prevent duplication: Prevent duplication.",
      "Improve workflow: Improve workflow.",
      "Support organizational: Support organizational goals.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Managerial accounting is decision support—it converts financial data into the operational insights that drive better business decisions.\"",
      "\"Cost behavior analysis—understanding which costs are fixed and which vary with volume—is fundamental to pricing, break-even, and operational planning decisions.\"",
      "\"Contribution margin analysis by product, channel, or customer segment reveals where we're actually making and losing money—often differently than the P&L suggests.\"",
    ]
  },
  "OP354": {
    id: "OP354",
    code: "OP:354",
    name: "Monitor completion of delegated tasks",
    definition: "Track assigned work to ensure completion.",
    keyPoints: [
      "Accountability: Accountability.",
      "Timely delivery: Timely delivery.",
      "Quality control: Quality control.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Environmental compliance isn't optional—violations carry fines, permit revocations, and criminal liability that dwarf the cost of prevention.\"",
      "\"An environmental management system systematizes compliance—it replaces individual vigilance with institutional process, which is far more reliable.\"",
      "\"Sustainability investment beyond minimum compliance creates business value—reduced resource consumption, lower waste disposal costs, and brand equity with environmentally conscious customers.\"",
    ]
  },
  "OP355": {
    id: "OP355",
    code: "OP:355",
    name: "Streamline work processes",
    definition: "Simplify tasks to improve efficiency.",
    keyPoints: [
      "Reduce waste: Reduce waste.",
      "Save time: Save time.",
      "Improve productivity: Improve productivity.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Technology in operations isn't about replacing people—it's about deploying human judgment where it adds the most value while automating where machine consistency is superior.\"",
      "\"Real-time operational visibility through connected systems has compressed our response time to disruptions from hours to minutes.\"",
      "\"Predictive analytics in operations is the most transformative application—moving from reactive maintenance and reactive quality control to proactive intervention.\"",
    ]
  },
  "OP442": {
    id: "OP442",
    code: "OP:442",
    name: "Comply with policies for use of property and equipment",
    definition: "Follow rules governing company assets.",
    keyPoints: [
      "Prevent damage: Prevent damage.",
      "Extend lifespan: Extend lifespan.",
      "Ensure safety: Ensure safety.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Operational planning converts strategic intent into execution-ready action—without it, strategy remains at the level of aspiration.\"",
      "\"Cross-functional plan integration prevents the common failure mode where marketing commits to volume that operations can't produce.\"",
      "\"The best operational plans build in explicit review points—quarterly business reviews that assess performance and adjust the plan based on current reality.\"",
    ]
  },
  "OP443": {
    id: "OP443",
    code: "OP:443",
    name: "Explain the concept of supply chain",
    definition: "Describe the flow of goods from suppliers to customers.",
    keyPoints: [
      "Suppliers: Suppliers.",
      "Manufacturers: Manufacturers.",
      "Distributors: Distributors.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Resource efficiency is both environmental responsibility and cost management—every unit of material, water, or energy we save reduces input cost and waste expense.\"",
      "\"Circular economy principles are redesigning how we think about product end-of-life—materials that return to production rather than landfill reduce both cost and environmental impact.\"",
      "\"Natural resource stewardship is increasingly a customer and investor expectation—organizations that demonstrate it attract both business and capital.\"",
    ]
  },
  "OP444": {
    id: "OP444",
    code: "OP:444",
    name: "Explain benefits of supply chain collaboration",
    definition: "Describe advantages of working closely with supply chain partners.",
    keyPoints: [
      "Improved efficiency: Improved efficiency.",
      "Cost reduction: Cost reduction.",
      "Better customer: Better customer service.",
      "Operational Impact: This skill directly supports business efficiency and organizational effectiveness.",
      "Professional Practice: Applying this knowledge ensures smooth operations and competitive advantage.",
    ],
    roleplayTips: [
      "\"Business-cycle-aware planning lets us be greedy when others are fearful—we build cash in the late expansion to deploy advantageously in the early recovery.\"",
      "\"Variable cost structure is our downside protection—every fixed cost we can convert to variable reduces our break-even and improves recession resilience.\"",
      "\"Scenario planning for both expansion and contraction conditions ensures we have prepared responses rather than improvised reactions to economic shifts.\"",
    ]
  },

  "PD255": {
    id: "PD255",
    code: "PD:255",
    name: "Ascertain employee's role in meeting organizational goals",
    definition: "Explain how individual performance supports company goals.",
    keyPoints: [
      "Task alignment: Task alignment.",
      "Accountability: Accountability.",
      "Team contribution: Team contribution.",
      "Career Impact: Developing this skill enhances professional effectiveness and career advancement opportunities.",
      "Professional Standard: This behavior is expected of business professionals and directly affects success.",
    ],
    roleplayTips: [
      "\"My resume uses the employer's keywords from the job posting because applicant tracking systems filter for exact matches before a human ever sees the document.\"",
      "\"I quantify every accomplishment I can—numbers make claims credible and memorable in ways that descriptive language doesn't.\"",
      "\"My resume is tailored to each application—different roles emphasize different aspects of my experience, and a generic resume serves none of them well.\"",
    ]
  },
  "PD002": {
    id: "PD002",
    code: "PD:002",
    name: "Identify desirable employability skills and traits",
    definition: "Recognize the universal professional competencies—communication, reliability, teamwork, and adaptability—that employers value across all industries and roles.",
    keyPoints: [
      "Communication: Clear written and verbal communication is the most universally cited employer requirement across all roles.",
      "Reliability: Consistently meeting commitments and delivering quality work on time is the foundational employability trait.",
      "Teamwork: Ability to collaborate effectively with diverse colleagues is essential in virtually every professional environment.",
      "Adaptability: Willingness and ability to learn new skills and adjust to changing requirements increases employability across a career.",
      "Problem-Solving: Identifying and resolving problems independently—rather than escalating all challenges—demonstrates professional maturity."
    ],
    roleplayTips: [
      "\"Employers consistently report that technical skills get candidates hired but interpersonal and professional skills determine who advances—the soft skills are actually the hard part.\"",
      "\"Reliability is the first test every new employee faces—before you can demonstrate higher-order skills, people must know they can count on you for the basics.\"",
      "\"Employability skills are transferable—they travel with you across roles, industries, and career changes, making them the most valuable professional investments you can make.\""
    ]
  },
  "PD036": {
    id: "PD036",
    code: "PD:036",
    name: "Utilize professional development resources",
    definition: "Use tools that support career growth.",
    keyPoints: [
      "Mentors: Mentors.",
      "Professional associations: Professional associations.",
      "Training programs: Training programs.",
      "Career Impact: Developing this skill enhances professional effectiveness and career advancement opportunities.",
      "Professional Standard: This behavior is expected of business professionals and directly affects success.",
    ],
    roleplayTips: [
      "\"Understanding HR management from the employee perspective helps me work more effectively within organizational systems and advocate appropriately for my professional interests.\"",
      "\"Performance management is an HR process that directly affects my career—understanding how evaluations work helps me manage my performance and visibility proactively.\"",
      "\"HR's legal compliance role protects employees—knowing what HR is obligated to do and what rights I have makes me a more informed professional.\"",
    ]
  },
  "PD179": {
    id: "PD179",
    code: "PD:179",
    name: "Balance personal and professional responsibilities",
    definition: "Manage work and personal life effectively.",
    keyPoints: [
      "Time management: Time management.",
      "Reduce stress: Reduce stress.",
      "Maintain productivity: Maintain productivity.",
      "Career Impact: Developing this skill enhances professional effectiveness and career advancement opportunities.",
      "Professional Standard: This behavior is expected of business professionals and directly affects success.",
    ],
    roleplayTips: [
      "\"I approach career exploration with genuine curiosity—testing hypotheses through actual experience rather than deciding based on assumptions.\"",
      "\"Business careers vary enormously by industry context—I research how my target role functions specifically in the industries that interest me most.\"",
      "\"Internships are the most efficient career exploration tool—they provide direct experience and professional network while significantly reducing the risk of poor job choice.\"",
    ]
  },
  "PD250": {
    id: "PD250",
    code: "PD:250",
    name: "Adhere to company protocols and policies",
    definition: "Follow established workplace rules and procedures.",
    keyPoints: [
      "Consistency: Consistency.",
      "Legal compliance: Legal compliance.",
      "Professional behavior: Professional behavior.",
      "Career Impact: Developing this skill enhances professional effectiveness and career advancement opportunities.",
      "Professional Standard: This behavior is expected of business professionals and directly affects success.",
    ],
    roleplayTips: [
      "\"Knowing your employment rights is the foundation of advocating for fair treatment—workers who understand their legal protections are better positioned to exercise them.\"",
      "\"OSHA's right-to-know provisions ensure workers have access to information about hazardous materials in their workplace—that knowledge is the basis of informed safety decisions.\"",
      "\"Employment discrimination protections cover the full employment cycle—hiring, promotion, compensation, and termination—understanding the scope helps identify potential violations.\"",
    ]
  },
  "PD251": {
    id: "PD251",
    code: "PD:251",
    name: "Follow rules of conduct",
    definition: "Behave ethically and professionally at work.",
    keyPoints: [
      "Respect others: Respect others.",
      "Integrity: Integrity.",
      "Accountability: Accountability.",
      "Career Impact: Developing this skill enhances professional effectiveness and career advancement opportunities.",
      "Professional Standard: This behavior is expected of business professionals and directly affects success.",
    ],
    roleplayTips: [
      "\"Career development is a continuous investment—the professionals who advance fastest are those who are always learning something new and applying it immediately.\"",
      "\"I seek stretch assignments specifically because they're uncomfortable—growth happens at the edge of capability, not in the comfort zone.\"",
      "\"Mentors have compressed my learning curve significantly—they've helped me avoid mistakes, open doors, and see opportunities I wouldn't have recognized alone.\"",
    ]
  },
  "PD252": {
    id: "PD252",
    code: "PD:252",
    name: "Follow chain of command",
    definition: "Communicate through proper authority levels.",
    keyPoints: [
      "Clear communication: Clear communication.",
      "Respect leadership: Respect leadership.",
      "Efficient problem-solving: Efficient problem-solving.",
      "Career Impact: Developing this skill enhances professional effectiveness and career advancement opportunities.",
      "Professional Standard: This behavior is expected of business professionals and directly affects success.",
    ],
    roleplayTips: [
      "\"My educational plan starts with the requirements of my target role—I research what credentials and knowledge employers actually value, not what sounds impressive.\"",
      "\"Debt management is part of educational planning—the ROI of a credential should be evaluated against its cost, including the opportunity cost of time spent studying.\"",
      "\"I revisit my educational plan annually—industry requirements and my career direction both evolve, and my development investments should reflect current reality.\"",
    ]
  },
  "PD254": {
    id: "PD254",
    code: "PD:254",
    name: "Determine the nature of organizational goals",
    definition: "Identify what a company aims to accomplish.",
    keyPoints: [
      "Growth: Growth.",
      "Profitability: Profitability.",
      "Customer satisfaction: Customer satisfaction.",
      "Career Impact: Developing this skill enhances professional effectiveness and career advancement opportunities.",
      "Professional Standard: This behavior is expected of business professionals and directly affects success.",
    ],
    roleplayTips: [
      "\"My cover letter tells a story that the resume can't—it explains why this specific role at this specific company is where I want to direct my professional energy.\"",
      "\"I replace vague adjectives with specific evidence—instead of 'I'm a strong communicator,' I describe a situation where my communication produced a measurable result.\"",
      "\"A customized letter signals genuine interest—hiring managers can identify a mass-produced cover letter immediately, and it signals you don't care enough to try.\"",
    ]
  },
  "PD009": {
    id: "PD009",
    code: "PD:009",
    name: "Prepare a resume",
    definition: "Create a professional document that presents your education, experience, skills, and accomplishments to prospective employers.",
    keyPoints: [
      "Resume Purpose: A marketing document that earns an interview by demonstrating that you meet the requirements of a specific role.",
      "Accomplishment Focus: Describe achievements and their impact rather than listing job duties—'increased sales 25%' vs. 'responsible for sales.'",
      "ATS Optimization: Applicant tracking systems scan resumes for keywords—incorporate exact language from job postings.",
      "Concise Format: Typically one page for early-career professionals—prioritize relevance over completeness.",
      "Error-Free: Typos or formatting errors signal poor attention to detail—resumes must be flawless."
    ],
    roleplayTips: [
      "\"My resume uses the employer's keywords from the job posting because applicant tracking systems filter for exact matches before a human ever sees the document.\"",
      "\"I quantify every accomplishment I can—numbers make claims credible and memorable in ways that descriptive language doesn't.\"",
      "\"My resume is tailored to each application—different roles emphasize different aspects of my experience, and a generic resume serves none of them well.\""
    ]
  },
  "PD126": {
    id: "PD126",
    code: "PD:126",
    name: "Explain the need for innovation skills",
    definition: "Describe why creativity and new ideas are essential.",
    keyPoints: [
      "Competitive advantage: Competitive advantage.",
      "Adaptability: Adaptability.",
      "Problem-solving: Problem-solving.",
      "Career Impact: Developing this skill enhances professional effectiveness and career advancement opportunities.",
      "Professional Standard: This behavior is expected of business professionals and directly affects success.",
    ],
    roleplayTips: [
      "\"I research each employer deeply before an interview—understanding their business model, recent challenges, and strategic direction lets me have a real conversation, not just answer questions.\"",
      "\"My STAR stories are prepared and rehearsed for the competencies most likely to be assessed—I can deliver them confidently without sounding scripted.\"",
      "\"The questions I ask in an interview reveal as much about my preparation and thinking as my answers—I prepare questions that only a serious candidate would ask.\"",
    ]
  },
  "PD066": {
    id: "PD066",
    code: "PD:066",
    name: "Explain career opportunities in entrepreneurship",
    definition: "Describe careers involving business ownership.",
    keyPoints: [
      "Innovation: Innovation.",
      "Risk-taking: Risk-taking.",
      "Independence: Independence.",
      "Career Impact: Developing this skill enhances professional effectiveness and career advancement opportunities.",
      "Professional Standard: This behavior is expected of business professionals and directly affects success.",
    ],
    roleplayTips: [
      "\"I build my network proactively, not reactively—the best time to develop relationships is long before you need them.\"",
      "\"My most valuable network connections are with people who are very different from me—they provide perspectives and access I couldn't generate within my professional bubble.\"",
      "\"I maintain my network by staying genuinely interested in what my connections are doing—reaching out when I have something relevant to share, not just when I need something.\"",
    ]
  },
  "PD077": {
    id: "PD077",
    code: "PD:077",
    name: "Demonstrate problem-solving skills",
    definition: "Identify problems and implement solutions.",
    keyPoints: [
      "Identify cause: Identify cause.",
      "Evaluate options: Evaluate options.",
      "Implement solution: Implement solution.",
      "Career Impact: Developing this skill enhances professional effectiveness and career advancement opportunities.",
      "Professional Standard: This behavior is expected of business professionals and directly affects success.",
    ],
    roleplayTips: [
      "\"My follow-up letter references something specific we discussed—it signals I was fully engaged in the conversation, not just presenting a rehearsed script.\"",
      "\"I view the follow-up letter as a final opportunity to address any aspect of my candidacy I wish I'd handled differently in the interview.\"",
      "\"Sending a thoughtful follow-up within 24 hours is both professional courtesy and competitive differentiation—the majority of candidates don't do it.\"",
    ]
  },
  "PD012": {
    id: "PD012",
    code: "PD:012",
    name: "Demonstrate appropriate creativity",
    definition: "Use creative thinking within workplace guidelines.",
    keyPoints: [
      "Innovation: Innovation.",
      "Efficiency: Efficiency.",
      "Practical solutions: Practical solutions.",
      "Career Impact: Developing this skill enhances professional effectiveness and career advancement opportunities.",
      "Professional Standard: This behavior is expected of business professionals and directly affects success.",
    ],
    roleplayTips: [
      "\"Career advancement isn't always vertical—some of my most important development moves were lateral, building capabilities that later became my competitive advantage.\"",
      "\"Advancement is both performance and positioning—doing excellent work is necessary but not sufficient; visibility and relationship capital matter as much.\"",
      "\"I manage my career with a portfolio mindset—balancing current performance with skill development and network investment for future advancement.\"",
    ]
  },
  "PD034": {
    id: "PD034",
    code: "PD:034",
    name: "Explain advancement patterns for jobs",
    definition: "Describe typical career progression paths.",
    keyPoints: [
      "Promotions: Promotions.",
      "Skill development: Skill development.",
      "Experience: Experience.",
      "Career Impact: Developing this skill enhances professional effectiveness and career advancement opportunities.",
      "Professional Standard: This behavior is expected of business professionals and directly affects success.",
    ],
    roleplayTips: [
      "\"I conduct formal self-assessment quarterly—reviewing performance against goals, seeking external feedback, and adjusting my development plan accordingly.\"",
      "\"My self-assessment is calibrated against external feedback—I know my own perspective is biased, so I deliberately seek perspectives that might challenge my self-view.\"",
      "\"Self-assessment without action is just self-indulgence—I translate every meaningful insight into a specific development goal or behavioral commitment.\"",
    ]
  },
  "PD013": {
    id: "PD013",
    code: "PD:013",
    name: "Assess personal interests and skills",
    definition: "Identify strengths and interests related to business careers.",
    keyPoints: [
      "Self-awareness: Self-awareness.",
      "Career fit: Career fit.",
      "Skill development: Skill development.",
      "Career Impact: Developing this skill enhances professional effectiveness and career advancement opportunities.",
      "Professional Standard: This behavior is expected of business professionals and directly affects success.",
    ],
    roleplayTips: [
      "\"I plan my day the evening before—waking with a clear agenda means I spend productive morning hours working, not deciding what to work on.\"",
      "\"Time blocking is my most powerful productivity technique—complex work requiring deep concentration must be protected from the constant interruption of open-calendar environments.\"",
      "\"The most valuable time management skill is learning to say no—accepting every request fragments my time and guarantees I can't fully deliver on my most important commitments.\"",
    ]
  },
  "PD035": {
    id: "PD035",
    code: "PD:035",
    name: "Identify skills needed for career progression",
    definition: "Recognize skills that support advancement.",
    keyPoints: [
      "Leadership: Leadership.",
      "Communication: Communication.",
      "Technical skills: Technical skills.",
      "Career Impact: Developing this skill enhances professional effectiveness and career advancement opportunities.",
      "Professional Standard: This behavior is expected of business professionals and directly affects success.",
    ],
    roleplayTips: [
      "\"I approach every internship as if it's a 90-day interview for the permanent role I want—the work ethic, professionalism, and curiosity I demonstrate create a lasting impression.\"",
      "\"Beyond the work itself, I treat internships as network-building opportunities—every supervisor and colleague is a potential career advocate.\"",
      "\"I ask for feedback proactively during internships rather than waiting until the end—mid-course corrections produce better performance and demonstrate growth orientation.\"",
    ]
  },
  "PD017": {
    id: "PD017",
    code: "PD:017",
    name: "Develop strategies to overcome personal barriers to success",
    definition: "Identify personal obstacles—mindset, habits, skills gaps, and limiting beliefs—and create plans to address them as part of professional development.",
    keyPoints: [
      "Barrier Identification: Honest self-assessment reveals specific internal obstacles—fear of failure, procrastination, imposter syndrome—that limit success.",
      "Mindset Barriers: Fixed mindset beliefs ('I'm not good at this') prevent skill development; growth mindset ('I can improve') enables it.",
      "Habit Formation: Replacing counterproductive habits requires identifying triggers, designing replacement routines, and building environmental supports.",
      "Accountability Structures: Sharing goals with others and creating accountability mechanisms dramatically improve follow-through.",
      "Professional Support: Coaches, therapists, and mentors provide objective perspective and proven strategies for overcoming personal barriers."
    ],
    roleplayTips: [
      "\"I name my personal barriers explicitly—vague discomfort is harder to address than a specifically identified obstacle with a targeted strategy.\"",
      "\"Imposter syndrome is nearly universal among high achievers—recognizing it as a psychological pattern, not a factual assessment, reduces its power over my decisions.\"",
      "\"I build accountability into my personal development goals—sharing them with a mentor or coach dramatically improves the probability I'll actually follow through.\""
    ]
  },
  "PD018": {
    id: "PD018",
    code: "PD:018",
    name: "Describe the nature of professional development",
    definition: "Explain the ongoing process of acquiring knowledge, skills, and experiences that enhance professional competency and career advancement.",
    keyPoints: [
      "Continuous Process: Professional development is a career-long commitment, not a periodic event—the pace of change demands constant learning.",
      "Formal vs. Informal: Development includes formal education and certification as well as informal learning through experience, reading, and relationships.",
      "70-20-10 Model: 70% of professional development comes from on-the-job experience, 20% from relationships and feedback, 10% from formal training.",
      "Development Planning: Intentional development requires an explicit plan with goals, timelines, and methods.",
      "Organizational Investment: Leading organizations invest in employee development—not just because it's right but because it produces business results."
    ],
    roleplayTips: [
      "\"Professional development isn't something that happens to me—it's something I actively design and pursue with the same rigor I apply to work deliverables.\"",
      "\"The 70-20-10 model reminds me that most development happens through doing—I seek assignments that stretch my capabilities, not just ones I can handle comfortably.\"",
      "\"I maintain a personal development plan with quarterly goals—without explicit planning, development gets crowded out by the urgency of immediate work demands.\""
    ]
  },
  "PD019": {
    id: "PD019",
    code: "PD:019",
    name: "Explain the role of professional associations in career development",
    definition: "Describe how industry organizations support professional growth through networking, certification, publications, and advocacy.",
    keyPoints: [
      "Networking Access: Professional associations convene practitioners at events that create relationship opportunities unavailable in single-employer networks.",
      "Credentialing: Many associations offer certifications that validate expertise and signal commitment to the field.",
      "Knowledge Resources: Publications, research, and educational programs keep members current on industry developments.",
      "Career Development: Job boards, mentoring programs, and career resources specific to the profession.",
      "Professional Identity: Association membership signals professional commitment and connects individuals to a broader community of practice."
    ],
    roleplayTips: [
      "\"Association membership is a career investment that pays dividends in relationships, knowledge, and credentials that I couldn't access as efficiently any other way.\"",
      "\"Industry certifications signal to employers that my expertise is independently validated—they're worth pursuing for the credential value as much as the learning.\"",
      "\"I attend association events not just to collect cards but to build real relationships—every new professional contact is a potential mentor, collaborator, or future employer.\""
    ]
  },
  "PD020": {
    id: "PD020",
    code: "PD:020",
    name: "Establish a personal brand",
    definition: "Develop and communicate a distinctive professional identity that conveys your unique value, expertise, and character to employers and professional networks.",
    keyPoints: [
      "Personal Brand Definition: The distinctive impression you create in others' minds—what people say about you when you're not in the room.",
      "Brand Foundation: Authentic personal brand is grounded in genuine strengths and values—fabricated brands are exposed and damage credibility.",
      "Consistency: Personal brand must be consistent across platforms—LinkedIn, professional interactions, work output, and social media.",
      "Visibility: A brand that exists only in your head has no market value—sharing expertise through content, speaking, and networking builds visibility.",
      "Differentiation: The most effective personal brands represent a distinctive niche, not generic professional competence."
    ],
    roleplayTips: [
      "\"My personal brand is built around the specific intersection of skills and values that makes my contribution distinctive—not just being good at my job, but being good at it in my particular way.\"",
      "\"Consistent professional behavior is the brand—how I show up in every meeting, email, and interaction is either reinforcing or eroding the reputation I'm building.\"",
      "\"I share my expertise publicly through LinkedIn posts and professional conversations—a brand that isn't visible in the market isn't creating professional opportunity.\""
    ]
  },
  "PD021": {
    id: "PD021",
    code: "PD:021",
    name: "Build personal network",
    definition: "Develop and maintain professional relationships that provide access to information, opportunities, support, and collaboration throughout a career.",
    keyPoints: [
      "Network Value: Professional networks provide access to information, job opportunities, referrals, and expertise that formal channels don't offer.",
      "Authentic Building: Effective networks are built on genuine mutual interest—transactional networking produces weak ties.",
      "Proactive Maintenance: Relationships require regular investment—periodic outreach and genuine engagement keep connections active.",
      "Diverse Network: Connections across industries, functions, and experience levels provide broader access than homogeneous networks.",
      "Give Before Take: The most effective networkers lead with value—sharing information, making introductions, and offering help before asking for anything."
    ],
    roleplayTips: [
      "\"I build my network proactively, not reactively—the best time to develop relationships is long before you need them.\"",
      "\"My most valuable network connections are with people who are very different from me—they provide perspectives and access I couldn't generate within my professional bubble.\"",
      "\"I maintain my network by staying genuinely interested in what my connections are doing—reaching out when I have something relevant to share, not just when I need something.\""
    ]
  },
  "PD022": {
    id: "PD022",
    code: "PD:022",
    name: "Use social media in professional development",
    definition: "Apply LinkedIn, professional communities, and other digital platforms to build visibility, expand networks, and access learning and career opportunities.",
    keyPoints: [
      "LinkedIn Profile: A complete, accomplishment-focused LinkedIn profile increases discoverability by recruiters and expands professional reach.",
      "Content Sharing: Publishing insights, commenting thoughtfully on industry topics, and sharing relevant content builds professional visibility.",
      "Community Participation: Engaging in professional online communities provides networking access beyond local geography.",
      "Learning Resources: LinkedIn Learning, YouTube, podcasts, and MOOCs provide accessible professional development content.",
      "Brand Alignment: Social media presence must be consistent with the professional brand you're building—everything is visible to potential employers."
    ],
    roleplayTips: [
      "\"LinkedIn is my professional front door—a strong profile that tells my story clearly and completely creates opportunities I didn't have to actively pursue.\"",
      "\"Publishing original content on LinkedIn—even brief insights—builds visibility and demonstrates expertise far more effectively than just having a profile.\"",
      "\"I'm deliberate about my social media presence because potential employers look at it—everything I post publicly contributes to or detracts from the professional brand I'm building.\""
    ]
  },
  "PD023": {
    id: "PD023",
    code: "PD:023",
    name: "Seek out and complete professional development activities",
    definition: "Actively pursue learning opportunities—courses, workshops, certifications, conferences, and self-directed study—to continuously build professional capabilities.",
    keyPoints: [
      "Development Planning: Identifying specific skills to develop, selecting appropriate learning methods, and scheduling development time.",
      "Variety of Methods: Combining formal coursework, on-the-job application, peer learning, and self-study produces faster capability development.",
      "Application Priority: New learning must be applied quickly to solidify it—knowledge not applied within 30 days is largely lost.",
      "Credential Value: Certificates and credentials from recognized programs signal development investment to employers.",
      "Employer Resources: Professional development budgets, tuition assistance, and company training programs are often underutilized resources."
    ],
    roleplayTips: [
      "\"I allocate time for professional development on my calendar with the same commitment as client meetings—if it's not scheduled, it doesn't happen.\"",
      "\"The most valuable learning I do is immediately applied—I seek assignments that let me use new knowledge within days of acquiring it.\"",
      "\"I fully utilize my employer's professional development benefits—they're part of my compensation package and an investment in my future value.\""
    ]
  },
  "PD037": {
    id: "PD037",
    code: "PD:037",
    name: "Use networking techniques",
    definition: "Build relationships to find job opportunities.",
    keyPoints: [
      "Professional contacts: Professional contacts.",
      "Referrals: Referrals.",
      "Career growth: Career growth.",
      "Career Impact: Developing this skill enhances professional effectiveness and career advancement opportunities.",
      "Professional Standard: This behavior is expected of business professionals and directly affects success.",
    ],
    roleplayTips: [
      "\"Global issues are business issues—climate risk, geopolitical instability, and inequality all affect markets, supply chains, and the social environment in which we operate.\"",
      "\"ESG isn't just ethics—it's risk management. Investors and customers increasingly use ESG performance to assess organizational resilience and trustworthiness.\"",
      "\"Businesses that engage constructively with global challenges build the stakeholder trust and social license that provides competitive advantage over those that ignore or resist them.\"",
    ]
  },
  "PD025": {
    id: "PD025",
    code: "PD:025",
    name: "Maintain positive relationship with supervisor",
    definition: "Build and sustain a productive, professional, and mutually respectful relationship with your direct supervisor or manager.",
    keyPoints: [
      "Communication: Regular, proactive communication about progress, challenges, and ideas keeps the supervisor informed and builds trust.",
      "Expectation Clarity: Confirming priorities and success criteria at the outset of assignments prevents misaligned effort.",
      "Reliability: Consistently delivering quality work on time is the most fundamental positive supervisor relationship investment.",
      "Feedback Seeking: Proactively requesting feedback signals growth orientation and creates more frequent development conversations.",
      "Adaptability: Adjusting to your supervisor's communication style, working style, and preferences demonstrates professional flexibility."
    ],
    roleplayTips: [
      "\"I manage my supervisor relationship proactively—I check in regularly, flag potential issues early, and don't wait to be asked about my progress.\"",
      "\"Starting new assignments by confirming priorities and success criteria prevents the frustrating experience of delivering excellent work that missed the point.\"",
      "\"I adapt to my supervisor's communication preferences rather than expecting them to adapt to mine—that flexibility is a professional courtesy and a relationship investment.\""
    ]
  },
  "PD026": {
    id: "PD026",
    code: "PD:026",
    name: "Explain the importance of corporate governance",
    definition: "Describe the system of rules, practices, and processes by which a company is directed and controlled to protect stakeholder interests and ensure accountability.",
    keyPoints: [
      "Governance Purpose: Corporate governance creates accountability structures that protect shareholders, employees, customers, and communities.",
      "Board of Directors: The board provides oversight, strategic guidance, and accountability for executive management.",
      "Executive Accountability: Governance structures ensure executives are accountable to the board and shareholders for their decisions.",
      "Transparency: Disclosure requirements and audit processes ensure accurate financial reporting and operational transparency.",
      "Failure Consequences: Governance failures—Enron, Wirecard—produce devastating losses for shareholders and employees."
    ],
    roleplayTips: [
      "\"Corporate governance creates the accountability architecture that makes large organizations trustworthy—without it, executives have unchecked authority over others' money.\"",
      "\"The board's independence from management is the cornerstone of effective governance—board members who rely on management for their positions can't provide objective oversight.\"",
      "\"Governance failures are invariably discovered—transparent reporting and strong internal controls are far less costly than the aftermath of discovered fraud.\""
    ]
  },
  "PD027": {
    id: "PD027",
    code: "PD:027",
    name: "Discuss the nature of business law",
    definition: "Describe the legal framework—contracts, torts, intellectual property, employment, and regulatory law—that governs business operations.",
    keyPoints: [
      "Contract Law: Binding agreements between parties require offer, acceptance, consideration, and capacity to be legally enforceable.",
      "Tort Law: Civil wrongs that cause harm to others—negligence, product liability, defamation—create legal liability for businesses.",
      "Business Entities: The legal form of a business (sole proprietorship, LLC, corporation) determines owner liability and tax treatment.",
      "Intellectual Property: Patents, trademarks, copyrights, and trade secrets provide legal protection for business innovations.",
      "Regulatory Compliance: Industry-specific regulations—securities, healthcare, financial services—impose legal obligations on covered businesses."
    ],
    roleplayTips: [
      "\"Business law knowledge helps me identify when I need legal counsel—understanding the basic framework prevents the costly mistake of thinking legal issues are straightforward.\"",
      "\"Contract literacy is a fundamental business skill—I can read and understand a contract before signing rather than accepting terms I haven't evaluated.\"",
      "\"Business entity selection is one of the most important legal decisions an entrepreneur makes—liability protection and tax treatment have enormous long-term implications.\""
    ]
  },
  "PD028": {
    id: "PD028",
    code: "PD:028",
    name: "Discuss global issues in business",
    definition: "Analyze current global challenges—climate change, inequality, geopolitical instability, pandemic risk—and how they shape business strategy and responsibility.",
    keyPoints: [
      "Climate Risk: Physical climate impacts and energy transition create material risks and strategic opportunities for businesses in every sector.",
      "Global Inequality: Extreme economic inequality affects markets, political stability, and the social license to operate.",
      "Geopolitical Instability: Trade conflicts, sanctions, and political risk require scenario planning and supply chain resilience.",
      "Pandemic Preparedness: COVID-19 demonstrated the operational and financial vulnerability of poorly prepared organizations.",
      "ESG Integration: Environmental, social, and governance factors are increasingly integrated into investor and customer decision-making."
    ],
    roleplayTips: [
      "\"Global issues are business issues—climate risk, geopolitical instability, and inequality all affect markets, supply chains, and the social environment in which we operate.\"",
      "\"ESG isn't just ethics—it's risk management. Investors and customers increasingly use ESG performance to assess organizational resilience and trustworthiness.\"",
      "\"Businesses that engage constructively with global challenges build the stakeholder trust and social license that provides competitive advantage over those that ignore or resist them.\""
    ]
  },
  "PD029": {
    id: "PD029",
    code: "PD:029",
    name: "Determine opportunities for professional development",
    definition: "Identify specific learning experiences, credentials, and growth opportunities that align with career goals and current skill gaps.",
    keyPoints: [
      "Gap Analysis: Comparing current capabilities to the requirements of target roles reveals the highest-priority development opportunities.",
      "Opportunity Sources: Conferences, courses, certifications, stretch assignments, mentors, and professional associations all provide development opportunities.",
      "Return on Development: Evaluating the career impact of available opportunities helps prioritize where to invest limited time.",
      "Timing: Some development opportunities (certifications, graduate education) have optimal timing in a career—understanding windows matters.",
      "Organizational Resources: Many employers offer development budgets, tuition assistance, and internal programs that represent underutilized opportunity."
    ],
    roleplayTips: [
      "\"I approach development opportunity identification like investment portfolio construction—seeking the highest return opportunities relative to time and financial cost.\"",
      "\"Internal stretch assignments are the highest-return development opportunities available in most organizations—they build skills while also increasing visibility and relationships.\"",
      "\"I review available development opportunities annually in my development planning cycle—the landscape changes, and opportunities that didn't make sense last year may be perfect now.\""
    ]
  },
  "PD030": {
    id: "PD030",
    code: "PD:030",
    name: "Explain the importance of ongoing education and training",
    definition: "Describe why continuous learning throughout a career is essential for maintaining employability, advancing professionally, and adapting to change.",
    keyPoints: [
      "Skills Obsolescence: Technical skills depreciate rapidly in knowledge-intensive fields—ongoing learning prevents capability obsolescence.",
      "Career Longevity: Professionals who invest in continuous development remain competitive and valuable across longer career spans.",
      "Adaptability: Regular learning builds the cognitive flexibility needed to adapt to new roles, technologies, and business contexts.",
      "Competitive Differentiation: In fields where most professionals stop actively learning after initial qualification, continuous learners stand out.",
      "Personal Satisfaction: Continuous learning produces intellectual engagement and mastery that contribute to professional fulfillment."
    ],
    roleplayTips: [
      "\"The half-life of technical knowledge is shortening—what was cutting-edge five years ago may be standard or obsolete today. Ongoing education is professional survival.\"",
      "\"Continuous learning is both a career protection strategy and a personal growth strategy—the two happen to align perfectly.\"",
      "\"I view every professional development opportunity as compounding—skills acquired today make future learning faster and future contributions more valuable.\""
    ]
  },
  "PD031": {
    id: "PD031",
    code: "PD:031",
    name: "Conduct self-assessment",
    definition: "Systematically evaluate your own knowledge, skills, values, and performance to identify strengths to leverage and weaknesses to address.",
    keyPoints: [
      "Assessment Frequency: Regular self-assessment—quarterly or after major experiences—builds an accurate, evolving self-picture.",
      "Structured Methods: Performance reviews, 360 feedback, skills inventories, and personality assessments provide structured self-assessment frameworks.",
      "Blind Spot Awareness: Self-assessment alone has inherent limitations—combining self-assessment with external feedback improves accuracy.",
      "Honest Reflection: Effective self-assessment requires intellectual courage to acknowledge genuine weaknesses, not just comfortable ones.",
      "Development Input: Self-assessment results should directly inform development planning—translating insight into action is the ultimate purpose."
    ],
    roleplayTips: [
      "\"I conduct formal self-assessment quarterly—reviewing performance against goals, seeking external feedback, and adjusting my development plan accordingly.\"",
      "\"My self-assessment is calibrated against external feedback—I know my own perspective is biased, so I deliberately seek perspectives that might challenge my self-view.\"",
      "\"Self-assessment without action is just self-indulgence—I translate every meaningful insight into a specific development goal or behavioral commitment.\""
    ]
  },
  "PD032": {
    id: "PD032",
    code: "PD:032",
    name: "Utilize internship experiences",
    definition: "Extract maximum professional and career development value from supervised work experiences through deliberate learning, networking, and performance.",
    keyPoints: [
      "Skill Application: Internships provide the context to apply classroom learning in real business settings—the application solidifies understanding.",
      "Professional Network: Internship relationships with colleagues and supervisors often represent the first nodes of a professional network.",
      "Career Testing: Internships enable low-risk career path testing—confirming or disconfirming interest and fit before committing.",
      "Reference Building: Supervisors who observe strong internship performance become valuable professional references and advocates.",
      "Full-Time Opportunity: Many internships serve as extended interviews—outstanding performance frequently leads to permanent employment offers."
    ],
    roleplayTips: [
      "\"I approach every internship as if it's a 90-day interview for the permanent role I want—the work ethic, professionalism, and curiosity I demonstrate create a lasting impression.\"",
      "\"Beyond the work itself, I treat internships as network-building opportunities—every supervisor and colleague is a potential career advocate.\"",
      "\"I ask for feedback proactively during internships rather than waiting until the end—mid-course corrections produce better performance and demonstrate growth orientation.\""
    ]
  },
  "PD033": {
    id: "PD033",
    code: "PD:033",
    name: "Describe the nature of human resources management",
    definition: "Explain the organizational function responsible for attracting, developing, managing, and retaining talent to support strategic business objectives.",
    keyPoints: [
      "HRM Definition: The function that manages the employee lifecycle from talent acquisition through development, retention, and separation.",
      "Strategic Partner: Modern HR serves as a strategic business partner—aligning people strategy with organizational strategy.",
      "Core Responsibilities: Recruitment, onboarding, performance management, compensation, training, and employee relations.",
      "Legal Compliance: HR ensures organizational compliance with employment law across all people management activities.",
      "Culture Steward: HR plays a central role in defining, communicating, and reinforcing organizational culture."
    ],
    roleplayTips: [
      "\"Understanding HR management from the employee perspective helps me work more effectively within organizational systems and advocate appropriately for my professional interests.\"",
      "\"Performance management is an HR process that directly affects my career—understanding how evaluations work helps me manage my performance and visibility proactively.\"",
      "\"HR's legal compliance role protects employees—knowing what HR is obligated to do and what rights I have makes me a more informed professional.\""
    ]
  },

};

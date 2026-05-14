import { ICDC_2016_EXAM, ICDC_2018_EXAM, ICDC_2013_EXAM, ICDC_2011_EXAM, ICDC_2010_EXAM, ICDC_2024_EXAM, ICDC_2015_EXAM, ICDC_2012_EXAM, ICDC_2020_EXAM, ICDC_2022_EXAM } from './icdc-exams';

export interface PerformanceIndicator {
  id: string;
  code: string;
  name: string;
  description: string;
  cluster: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  notes?: string;
  performanceIndicatorId: string;
  reference: string;
  keyTerms?: string[];
}

export interface Flashcard {
  id: string;
  term: string;
  definition: string;
}

export interface Roleplay {
  id: string;
  title: string;
  scenario: string;
  performanceIndicators: string[];
  exampleSolution?: string;
}

export interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail?: string;
}

export interface Event {
  id: string;
  name: string;
  category: string;
  description: string;
  flashcards: Flashcard[];
  roleplays: Roleplay[];
  videos: Video[];
}

export interface Cluster {
  id: string;
  name: string;
  description: string;
  color: string;
  performanceIndicators: PerformanceIndicator[];
  practiceTests: {
    id: string;
    name: string;
    questions: Question[];
    pdfUrl?: string;
  }[];
  flashcards: Flashcard[];
  events: Event[];
  piPdfUrl?: string;
}

export const CAREER_CLUSTERS = [
  "Principles",
  "Business Management and Administration",
  "Entrepreneurship",
  "Finance",
  "Hospitality and Tourism",
  "Marketing",
  "Personal Financial Literacy",
  {
    "code": "EI:001",
    "name": "EI:001 (PQ) – Describe the nature of emotional intelligence",
    "description": "Understand and manage one’s emotions while recognizing emotions in others.",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:016",
    "name": "EI:016 (PQ) – Explain the concept of self-esteem",
    "description": "Describe how individuals value and perceive themselves.",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:017",
    "name": "EI:017 (PQ) – Recognize and overcome personal biases and stereotypes Definition: Identify and reduce preconceived beliefs about others.",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:002",
    "name": "EI:002 (PQ) – Assess personal strengths and weaknesses Definition: Evaluate abilities and areas for improvement. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:126",
    "name": "EI:126 (PQ) – Assess personal behavior and values",
    "description": "Examine actions and beliefs to ensure alignment with goals and ethics.",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:018",
    "name": "EI:018 (PQ) – Identify desirable personality traits important to business Definition: Recognize characteristics that support professional success. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:023",
    "name": "EI:023 (PQ) – Exhibit self-confidence Definition: Demonstrate belief in one’s abilities. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:020",
    "name": "EI:020 (PQ) – Demonstrate interest and enthusiasm Definition: Show genuine engagement in tasks and roles. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:024",
    "name": "EI:024 (PQ) – Demonstrate initiative",
    "description": "Take proactive steps without being directed.",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:022",
    "name": "EI:022 (PQ) – Demonstrate honesty and integrity",
    "description": "Act truthfully and consistently with moral principles.",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:021",
    "name": "EI:021 (PQ) – Demonstrate responsible behavior Definition: Act dependably and ethically in all situations. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:127",
    "name": "EI:127 (PQ) – Demonstrate fairness Definition: Treat others impartially and justly. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:091",
    "name": "EI:091 (PQ) – Assess risks of personal decisions Definition: Evaluate potential consequences before acting. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:004",
    "name": "EI:004 (PQ) – Demonstrate ethical work habits",
    "description": "Follow ethical standards in daily work behavior.",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:075",
    "name": "EI:075 (PQ) – Take responsibility for decisions and actions Definition: Accept accountability for outcomes.",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:128",
    "name": "EI:128 (CS) – Build trust in relationships",
    "description": "Establish reliability and credibility with others.",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:123",
    "name": "EI:123 (CS) – Describe the nature of ethics",
    "description": "Explain moral principles that guide behavior.",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:124",
    "name": "EI:124 (CS) – Explain reasons for ethical dilemmas Definition: Identify situations where ethical values conflict. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:125",
    "name": "EI:125 (CS) – Recognize and respond to ethical dilemmas Definition: Identify ethical issues and take appropriate action. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:077",
    "name": "EI:077 (CS) – Manage commitments in a timely manner Definition: Meet deadlines and obligations responsibly. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:092",
    "name": "EI:092 (CS) – Develop tolerance for ambiguity Definition: Remain effective despite uncertainty. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:019",
    "name": "EI:019 (PQ) – Exhibit a positive attitude",
    "description": "Maintain optimism in challenging situations.",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:025",
    "name": "EI:025 (PQ) – Demonstrate self-control Definition: Regulate emotions and reactions. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:003",
    "name": "EI:003 (PQ) – Explain the use of feedback for personal growth Definition: Use input from others to improve performance. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:026",
    "name": "EI:026 (PQ) – Adjust to change",
    "description": "Adapt behavior and mindset to new situations.",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:029",
    "name": "EI:029 (PQ) – Respect the privacy of others",
    "description": "Honor personal boundaries and information.",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:030",
    "name": "EI:030 (PQ) – Show empathy for others Definition: Understand and share others’ feelings. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:103",
    "name": "EI:103 (CS) – Maintain the confidentiality of others Definition: Protect sensitive information.",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:033",
    "name": "EI:033 (CS) – Exhibit cultural sensitivity",
    "description": "Respect diverse backgrounds and perspectives.",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:104",
    "name": "EI:104 (SP) – Leverage personality types in business situations Definition: Use personality differences to improve collaboration. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:007",
    "name": "EI:007 (PQ) – Explain the nature of effective communications Definition: Describe clear, respectful, and purposeful communication. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:038",
    "name": "EI:038 (SP) – Explain ethical considerations in providing information Definition: Ensure honesty and accuracy when sharing information. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:129",
    "name": "EI:129 (SP) – Foster open, honest communication Definition: Encourage transparency and trust. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:130",
    "name": "EI:130 (SP) – Collaborate with others",
    "description": "Work cooperatively toward shared goals.",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:106",
    "name": "EI:106 (SP) – Solicit feedback",
    "description": "Request input to improve performance.",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:107",
    "name": "EI:107 (SP) – Use social media to solicit new ideas and solutions",
    "description": "Use online platforms to gather input.",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:108",
    "name": "EI:108 (SP) – “Sell” ideas to others Definition: Present ideas persuasively. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:012",
    "name": "EI:012 (SP) – Persuade others Definition: Influence opinions or actions. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:062",
    "name": "EI:062 (SP) – Demonstrate negotiation skills Definition: Reach mutually beneficial agreements. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:008",
    "name": "EI:008 (PQ) – Use appropriate assertiveness Definition: Express needs respectfully and confidently. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:015",
    "name": "EI:015 (CS) – Use conflict-resolution skills Definition: Resolve disagreements constructively. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:109",
    "name": "EI:109 (CS) – Explain the nature of office politics",
    "description": "Describe informal power dynamics.",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:095",
    "name": "EI:095 (CS) – Overcome problems associated with office politics",
    "description": "Navigate workplace dynamics effectively.",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:028",
    "name": "EI:028 (SP) – Explain the nature of stress management Definition: Describe techniques to manage stress.",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:045",
    "name": "EI:045 (CS) – Participate as a team member Definition: Contribute positively to team efforts. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:011",
    "name": "EI:011 (SP) – Use consensus-building skills Definition: Reach group agreement collaboratively. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:059",
    "name": "EI:059 (SP) – Motivate team members",
    "description": "Encourage others to perform at their best.",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:009",
    "name": "EI:009 (CS) – Explain the concept of leadership Definition: Influence others to achieve goals. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:131",
    "name": "EI:131 (CS) – Explain the nature of ethical leadership Definition: Lead using integrity and fairness.",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:132",
    "name": "EI:132 (CS) – Model ethical behavior Definition: Demonstrate ethics through actions. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:063",
    "name": "EI:063 (CS) – Determine personal vision",
    "description": "Define personal leadership goals.",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:133",
    "name": "EI:133 (CS) – Inspire others",
    "description": "Motivate others toward success.",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:006",
    "name": "EI:006 (CS) – Demonstrate adaptability Definition: Adjust leadership style to situations. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:027",
    "name": "EI:027 (CS) – Develop an achievement orientation Definition: Focus on accomplishing goals.",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:134",
    "name": "EI:134 (CS) – Challenge the status quo Definition: Question existing practices. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:005",
    "name": "EI:005 (CS) – Lead change",
    "description": "Guide others through transitions.",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:060",
    "name": "EI:060 (CS) – Enlist others in working toward a shared vision Definition: Unite people around common goals.",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:041",
    "name": "EI:041 (CS) – Coach others",
    "description": "Support others’ development.",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:135",
    "name": "EI:135 (SP) – Use power appropriately Definition: Apply authority responsibly. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:014",
    "name": "EI:014 (SP) – Recognize/reward others for contributions Definition: Acknowledge performance and effort.",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:036",
    "name": "EI:036 (PQ) – Treat others with dignity and respect Definition: Show courtesy and professionalism. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:037",
    "name": "EI:037 (CS) – Foster positive working relationships Definition: Build cooperative interactions.",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:136",
    "name": "EI:136 (CS) – Consider conflicting viewpoints Definition: Acknowledge differing opinions. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:137",
    "name": "EI:137 (SP) – Assess long-term impact of actions on others Definition: Evaluate consequences of decisions.",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:061",
    "name": "EI:061 (SP) – Maintain collaborative partnerships Definition: Sustain cooperative relationships. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:034",
    "name": "EI:034 (SP) – Explain impact of political relationships in an organization Definition: Describe influence of internal alliances.",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:064",
    "name": "EI:064 (SP) – Explain the nature of organizational culture Definition: Describe shared values and norms.",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:112",
    "name": "EI:112 (SP) – Interpret and adapt to a business’s culture Definition: Adjust behavior to fit organizational norms. Key Points:",
    "description": "",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:010",
    "name": "EI:010 - Demonstrate teamwork",
    "description": "Work collaboratively with others to achieve a common goal.",
    "cluster": "Emotional Intelligence"
  },
  {
    "code": "EI:013",
    "name": "EI:013 - Manage stress",
    "description": "Taking proactive steps to reduce pressure and maintain a healthy balance.",
    "cluster": "Emotional Intelligence"
  }
];

export const ICDC_BUSINESS_ADMIN_EXAM: Question[] = [
  {
    id: 'icdc-q1',
    text: 'According to the law of diminishing returns, if one input increases while all others are constant, the increases in output will',
    options: ['remain the same.', 'eventually decline.', 'continue to increase.', 'decline before increasing.'],
    correctAnswer: 1,
    explanation: 'Eventually decline. The law of diminishing returns is an economic concept that states that if one input increases while all others are constant, at some point the increases in output will decline.',
    performanceIndicatorId: 'EC:023',
    reference: 'LAP-EC-023'
  },
  {
    id: 'icdc-q2',
    text: 'Which of the following statements about a private corporation is true:',
    options: ['It does not offer shares to the general public.', 'It has a specific mission other than making a profit.', 'It can sell unlimited shares to the general public.', 'It is limited to 100 or fewer shareholders.'],
    correctAnswer: 0,
    explanation: 'It does not offer shares to the general public. A private corporation, also known as a close corporation, is a type of corporation owned by a few people that does not offer its shares for sale to the general public.',
    performanceIndicatorId: 'BL:003',
    reference: 'LAP-BL-003'
  },
  {
    id: 'icdc-q3',
    text: 'X-ray machines, surgical equipment, wheelchairs, and scrubs are all items that a hospital might buy for',
    options: ['resale.', 'negotiations.', 'business use.', 'production.'],
    correctAnswer: 2,
    explanation: 'Business use. A hospital is a business that purchases many goods and services for its own use rather than resale or transformation.',
    performanceIndicatorId: 'OP:015',
    reference: 'LAP-OP-015'
  },
  {
    id: 'icdc-q4',
    text: 'Support staff positions typically fall within the __________ area of business management careers.',
    options: ['business information management', 'administrative services', 'accounting', 'human resources management'],
    correctAnswer: 1,
    explanation: 'Administrative services. Business management careers include positions in the areas of administrative services, business information management, general management, human resource management, and operations management.',
    performanceIndicatorId: 'PD:025',
    reference: 'LAP-PD-025'
  },
  {
    id: 'icdc-q5',
    text: 'An effective way to evaluate a risk is to determine',
    options: ['inventory and probability.', 'objections and inventory.', 'probability and magnitude.', 'magnitude and body language.'],
    correctAnswer: 2,
    explanation: 'Probability and magnitude. Probability is the likelihood of an event occurring while magnitude is the seriousness or extent of an event’s impact.',
    performanceIndicatorId: 'EI:091',
    reference: 'LAP-EI-091'
  },
  {
    id: 'icdc-q6',
    text: 'If Jamie wants to improve his active listening skills, he should',
    options: ['improve his reading skills.', 'interrupt the speaker.', 'avoid asking questions.', 'use nonverbal cues.'],
    correctAnswer: 3,
    explanation: 'Use nonverbal cues. Active listening is a method of listening that involves paying attention, displaying proof of listening, and providing feedback to facilitate the two-way transmission of information.',
    performanceIndicatorId: 'CO:017',
    reference: 'LAP-CO-017'
  },
  {
    id: 'icdc-q7',
    text: 'Which of the following is a disadvantage of specialization:',
    options: ['Boredom may increase on the job', 'Worker dependency decreases', 'Worker training is simplified', 'Quantity of work increases'],
    correctAnswer: 0,
    explanation: 'Boredom may increase on the job. A disadvantage of specialization is that it may increase boredom on the job, especially in mass production environments.',
    performanceIndicatorId: 'EC:014',
    reference: 'LAP-EC-914'
  },
  {
    id: 'icdc-q8',
    text: 'Effective information management means retaining and evaluating information that is',
    options: ['encrypted.', 'accurate.', 'interesting.', 'positive.'],
    correctAnswer: 1,
    explanation: 'Accurate. To make business decisions, companies need to make sure the information that they are basing their decisions upon is accurate and relevant.',
    performanceIndicatorId: 'NF:110',
    reference: 'LAP-NF-110'
  },
  {
    id: 'icdc-q9',
    text: 'Celine is responsible for monitoring her company’s monetary returns and risks. Celine most likely specializes in',
    options: ['finance.', 'procurement.', 'marketing.', 'sales.'],
    correctAnswer: 0,
    explanation: 'Finance. Finance in business is the function that obtains, monitors, and controls funds so the business can achieve its objectives.',
    performanceIndicatorId: 'FI:354',
    reference: 'LAP-FI-354'
  },
  {
    id: 'icdc-q10',
    text: 'When Keisha’s coworker receives an important personal call at his desk, she takes a walk to refill her water bottle. Keisha is illustrating how to',
    options: ['avoid gossip.', 'be tactful.', 'respect privacy.', 'be humble.'],
    correctAnswer: 2,
    explanation: 'Respect privacy. To demonstrate courtesy and respect toward others on her work team, Keisha respects her coworker’s privacy by not eavesdropping.',
    performanceIndicatorId: 'EI:037',
    reference: 'LAP-EI-037'
  },
  {
    id: 'icdc-q11',
    text: 'A business has taken out a mortgage to pay for its newest storefront. This mortgage would appear in the business’s balance sheet under',
    options: ['income.', 'liabilities.', 'assets.', 'capital gains.'],
    correctAnswer: 1,
    explanation: 'Liabilities. Liabilities are debts that the business owes. A mortgage is a type of loan used to pay for property, which is an example of debt.',
    performanceIndicatorId: 'FI:085',
    reference: 'LAP-FI-085'
  },
  {
    id: 'icdc-q12',
    text: 'Which of the following is a disadvantage of the matrix organizational structure:',
    options: ['It can be costly to implement.', 'It encourages flexibility.', 'It discourages flexibility.', 'It reduces organizational unity.'],
    correctAnswer: 0,
    explanation: 'It can be costly to implement. Since both department managers and team managers require higher compensation, a matrix structure is typically more expensive to implement.',
    performanceIndicatorId: 'EC:103',
    reference: 'LAP-EC-103'
  },
  {
    id: 'icdc-q13',
    text: 'Which of the following is most likely to motivate team members to engage in a shared vision:',
    options: ['Criticism', 'Creativity', 'Decision-making', 'Positive reinforcement'],
    correctAnswer: 3,
    explanation: 'Positive reinforcement. Teammates who treat each other with respect and encouragement are likely to be more engaged in a shared vision.',
    performanceIndicatorId: 'EI:060',
    reference: 'LAP-EI-060'
  },
  {
    id: 'icdc-q14',
    text: 'Which of the following documents officially authorizes a project to begin:',
    options: ['Registration documents', 'Statement of work', 'Work breakdown structure', 'Project charter'],
    correctAnswer: 3,
    explanation: 'Project charter. A project is officially authorized to begin by the project charter, an official document that contains high-level project information.',
    performanceIndicatorId: 'OP:158',
    reference: 'LAP-OP-158'
  },
  {
    id: 'icdc-q15',
    text: 'If you discover your values and behavior do not match up, you should',
    options: ['adjust your values to include all behaviors.', 'make a radical change to quickly adjust course.', 'wait to observe how this discovery impacts your life.', 'take small, manageable steps to close the gap.'],
    correctAnswer: 3,
    explanation: 'Take small, manageable steps to close the gap. If you discover your values and behavior do not match up, you should take small, manageable steps to close the gap rather than radical changes.',
    performanceIndicatorId: 'EI:126',
    reference: 'LAP-EI-126'
  },
  {
    id: 'icdc-q16',
    text: 'Which of the following sensitive issues often causes ethical dilemmas for human resources managers:',
    options: ['Education', 'Titles', 'Gender', 'Scheduling'],
    correctAnswer: 2,
    explanation: 'Gender. Sensitive issues such as race, gender, and disabilities can cause difficult ethical dilemmas for human resources managers.',
    performanceIndicatorId: 'HR:411',
    reference: 'LAP-HR-411'
  },
  {
    id: 'icdc-q17',
    text: 'Quantitative data are different than qualitative data in that quantitative data are',
    options: ['collected by interviewing and observing.', 'sometimes analyzed using thematic analysis.', 'gathered by measuring and counting.', 'subjective and dynamic.'],
    correctAnswer: 2,
    explanation: 'Gathered by measuring and counting. Quantitative data are information based on numbers, statistics, or hard facts, gathered by measuring and counting.',
    performanceIndicatorId: 'NF:139',
    reference: 'Quantitative vs Qualitative'
  },
  {
    id: 'icdc-q18',
    text: 'A convenient feature of online banking is the ability to __________ in real time.',
    options: ['increase your social media presence', 'monitor your account balance', 'adjust your stock portfolio', 'reduce your credit card debt'],
    correctAnswer: 1,
    explanation: 'Monitor your account balance. Online banking allows customers easy access to their account information, helping them monitor their account balance in real time.',
    performanceIndicatorId: 'FI:830',
    reference: 'Online Banking Features'
  },
  {
    id: 'icdc-q19',
    text: 'Which of the following is an example of a specific goal:',
    options: ['Increase sales', 'Decrease prices', 'Improve employee morale', 'Improve production by 10%'],
    correctAnswer: 3,
    explanation: 'Improve production by 10%. A specific goal is a statement that clearly describes a task to be accomplished with measurable outcomes.',
    performanceIndicatorId: 'MK:015',
    reference: 'LAP-MK-015'
  },
  {
    id: 'icdc-q20',
    text: 'If an organization is shipping goods internationally, it should be aware of __________ laws to avoid penalties and fines.',
    options: ['export', 'import', 'civil', 'criminal'],
    correctAnswer: 0,
    explanation: 'Export. Export laws regulate goods that are sent outside of a country to another nation.',
    performanceIndicatorId: 'BL:145',
    reference: 'Import/Export Law'
  },
  {
    id: 'icdc-q21',
    text: 'During a dinner party, Myles shares his client’s personal financial details with a friend. This is an example of __________ behavior.',
    options: ['unethical', 'positive', 'irrational', 'ethical'],
    correctAnswer: 0,
    explanation: 'Unethical. Sharing personal client information with third parties is irresponsible and unethical behavior in the world of finance.',
    performanceIndicatorId: 'FI:355',
    reference: 'LAP-FI-355'
  },
  {
    id: 'icdc-q22',
    text: 'A contract is considered legally binding if',
    options: ['the subject of the contract is ambiguous.', 'something of value is exchanged between parties.', 'only one party agrees on the offer.', 'at least one party is a business.'],
    correctAnswer: 1,
    explanation: 'Something of value is exchanged between parties. For a contract to be legally binding, something of value (consideration) must be exchanged between parties.',
    performanceIndicatorId: 'BL:002',
    reference: 'Legally Binding Documents'
  },
  {
    id: 'icdc-q23',
    text: 'Which of the following documents would most help a business make financial decisions:',
    options: ['Balance sheet', 'Personal check', 'Pay stub', 'Company bylaws'],
    correctAnswer: 0,
    explanation: 'Balance sheet. A balance sheet captures the financial condition of the business at that particular moment and is crucial for making financial decisions.',
    performanceIndicatorId: 'FI:579',
    reference: 'LAP-FI-579'
  },
  {
    id: 'icdc-q24',
    text: 'Which of the following outputs is an industrial good:',
    options: ['A mixer purchased by a college student', 'A set of measuring cups purchased by a family', 'An oven purchased by a bakery owner', 'A roll of cookie dough purchased for home use'],
    correctAnswer: 2,
    explanation: 'An oven purchased by a bakery owner. Industrial goods are used to make other products for resale or used in the day-to-day operations of a business.',
    performanceIndicatorId: 'OP:017',
    reference: 'LAP-OP-017'
  },
  {
    id: 'icdc-q25',
    text: 'What is a valid reason for evaluating project success?',
    options: ['To reduce monthly expenditures', 'To conduct employee reviews', 'To identify needs for future projects', 'To bypass stakeholder feedback'],
    correctAnswer: 2,
    explanation: 'To identify needs for future projects. Evaluating project results helps identify if the project solved the intended problems or if new projects are needed.',
    performanceIndicatorId: 'OP:521',
    reference: 'LAP-OP-521'
  },
  {
    id: 'icdc-q26',
    text: 'After 15 years as a salesman with one company, Kaiden recently accepted an international sales job, which will require him to travel to countries in Asia at least once a month. He assumes all of his customers will be just like the Asian-American customers he worked with in the United States. What is Kaiden guilty of?',
    options: ['Jargon', 'Individualism', 'Stereotyping', 'Ethnocentrism'],
    correctAnswer: 2,
    explanation: 'Stereotyping. Stereotyping involves generalizing people based on their cultural backgrounds.',
    performanceIndicatorId: 'EC:045',
    reference: 'LAP-EC-045'
  },
  {
    id: 'icdc-q27',
    text: 'When practicing time management, you should focus on tasks that are',
    options: ['collaborative and straightforward.', 'straightforward and important.', 'urgent and collaborative.', 'important and urgent.'],
    correctAnswer: 3,
    explanation: 'Important and urgent. A key principle of time management is to determine which tasks are important and urgent and focus on them.',
    performanceIndicatorId: 'PD:019',
    reference: 'LAP-PD-019'
  },
  {
    id: 'icdc-q28',
    text: 'While making a schedule for their team, a project manager wants to determine the order in which work will be completed and connect the activities to one another. What project planning tool will help them do this best?',
    options: ['Focus group', 'To-do list', 'Flow chart', 'Survey'],
    correctAnswer: 2,
    explanation: 'Flow chart. A flow chart is used to analyze a sequence of events, uncover relationships, and connect activities in a project.',
    performanceIndicatorId: 'OP:519',
    reference: 'LAP-OP-519'
  },
  {
    id: 'icdc-q29',
    text: 'To help you determine which person should be responsible for what project task, it is recommended that you use a',
    options: ['community sponsor.', 'bottom-up estimation.', 'skills assessment.', 'social media platform.'],
    correctAnswer: 2,
    explanation: 'Skills assessment. A skills assessment helps figure out what skills and experiences would allow someone to be successful for each task.',
    performanceIndicatorId: 'OP:003',
    reference: 'LAP-OP-003'
  },
  {
    id: 'icdc-q30',
    text: 'Kerry only buys shoes from one brand. This is an example of brand',
    options: ['loyalty.', 'personality.', 'awareness.', 'promise.'],
    correctAnswer: 0,
    explanation: 'Loyalty. Brand loyalty refers to customers’ level of commitment to buying the brand.',
    performanceIndicatorId: 'CR:001',
    reference: 'LAP-CR-001'
  },
  {
    id: 'icdc-q31',
    text: 'Identifying goals, deciding what work will be done, and setting due dates is part of the __________ management function.',
    options: ['directing', 'controlling', 'staffing', 'planning'],
    correctAnswer: 3,
    explanation: 'Planning. Planning involves deciding what work will be done and how it will be accomplished, including identifying goals and setting dates.',
    performanceIndicatorId: 'SM:001',
    reference: 'LAP-SM-001'
  },
  {
    id: 'icdc-q32',
    text: 'When a store offers a discount on one of their products, they are providing __________ utility.',
    options: ['possession', 'time', 'place', 'form'],
    correctAnswer: 0,
    explanation: 'Possession. Possession utility is usefulness created when ownership of a product is transferred from the seller to the buyer, often facilitated by price.',
    performanceIndicatorId: 'EC:004',
    reference: 'LAP-EC-904'
  },
  {
    id: 'icdc-q33',
    text: 'When is it easiest to overlook the need to improve or change?',
    options: ['When you are experiencing success', 'When you use critical thinking skills', 'When you are in a leadership position', 'When you are challenging the status quo'],
    correctAnswer: 0,
    explanation: 'When you are experiencing success. When things are going well, change doesn’t always seem necessary, which can lead to missed opportunities.',
    performanceIndicatorId: 'EI:134',
    reference: 'LAP-EI-134'
  },
  {
    id: 'icdc-q34',
    text: 'When Peter criticized his employees for using their company laptops to play games and browse social media, they were surprised. They did not know that their behavior was wrong. Peter should have',
    options: ['communicated the rules more clearly.', 'enforced stricter punishments.', 'relaxed the company computer policy.', 'hired more ethical employees.'],
    correctAnswer: 0,
    explanation: 'Communicated the rules more clearly. Peter should have communicated his expectations and clearly explained how employees were supposed to use their laptops.',
    performanceIndicatorId: 'EI:132',
    reference: 'LAP-EI-132'
  },
  {
    id: 'icdc-q35',
    text: 'Which of the following is a way in which social media can be used for business purposes:',
    options: ['Self-expression', 'Marketing and promotion', 'Staying connected with friends', 'Entertainment and humor'],
    correctAnswer: 1,
    explanation: 'Marketing and promotion. Businesses use social media to reach target audiences, build brand awareness, and promote products.',
    performanceIndicatorId: 'CO:206',
    reference: 'Social Media for Business'
  },
  {
    id: 'icdc-q36',
    text: 'Which of the following is a benefit of having a budget:',
    options: ['Budgetary information is simplified and less detailed.', 'Financial information is easily accessible.', 'Expenses are reduced and income is increased.', 'Budgets allow businesses to conduct market research.'],
    correctAnswer: 1,
    explanation: 'Financial information is easily accessible. Budgets help create accurate, accessible, and meaningful financial records.',
    performanceIndicatorId: 'FI:106',
    reference: 'LAP-FI-106'
  },
  {
    id: 'icdc-q37',
    text: 'Jerry is in charge of tracking progress and important milestones for his team\'s current project. To do so, he tracks everything according to the dates they occurred. Jerry is using the __________ method to organize information.',
    options: ['order of importance', 'inverted order', 'compare and contrast', 'chronological order'],
    correctAnswer: 3,
    explanation: 'Chronological order. Chronological organization involves sequencing events in the order in which they occurred.',
    performanceIndicatorId: 'CO:086',
    reference: 'Organizing Information'
  },
  {
    id: 'icdc-q38',
    text: 'When speakers share knowledge or skills, their purpose is to',
    options: ['persuade.', 'boast.', 'inform.', 'entertain.'],
    correctAnswer: 2,
    explanation: 'Inform. When speakers share knowledge or skills, their primary purpose is to inform the audience.',
    performanceIndicatorId: 'CO:025',
    reference: 'LAP-CO-025'
  },
  {
    id: 'icdc-q39',
    text: 'Mercedes recently quit her job so that she could attend college. Mercedes is experiencing what type of unemployment?',
    options: ['Structural', 'Frictional', 'Seasonal', 'Technological'],
    correctAnswer: 1,
    explanation: 'Frictional. Frictional unemployment is voluntary unemployment that results from normal life circumstances, like transitioning between jobs or going to school.',
    performanceIndicatorId: 'EC:082',
    reference: 'LAP-EC-082'
  },
  {
    id: 'icdc-q40',
    text: 'A luxury hotel client decides to expand the design of a new penthouse suite from 1,200 square feet to 2,500 square feet. This adjustment would fall under what component of the project plan?',
    options: ['Change-management plan', 'Risk-management plan', 'Communications plan', 'Quality-management plan'],
    correctAnswer: 0,
    explanation: 'Change-management plan. The change-management plan addresses what steps will be taken when clients’ needs shift or unforeseen circumstances occur.',
    performanceIndicatorId: 'OP:001',
    reference: 'LAP-OP-001'
  },
  {
    id: 'icdc-q41',
    text: 'An accountant is looking to track their company’s spending history. What type of digital technology would be most helpful?',
    options: ['Spreadsheet', 'The internet', 'GPS application', 'Word processor'],
    correctAnswer: 0,
    explanation: 'Spreadsheet. A spreadsheet is a type of software used to organize, calculate, and analyze numerical data, making it ideal for tracking spending history.',
    performanceIndicatorId: 'NF:003',
    reference: 'LAP-NF-003'
  },
  {
    id: 'icdc-q42',
    text: 'Ian and his team recently completed a six-month-long project. As a result, Ian invites the group to go celebrate at a nearby restaurant after work. This illustrates which step in developing an achievement orientation?',
    options: ['Be a leader and encourage feedback', 'Be patient and persistent', 'Reward yourself for your accomplishments', 'Take a break to refresh your mind'],
    correctAnswer: 2,
    explanation: 'Reward yourself for your accomplishments. Celebrating the completion of a project is a way to reward yourself and your team, which helps maintain motivation.',
    performanceIndicatorId: 'EI:027',
    reference: 'LAP-EI-027'
  },
  {
    id: 'icdc-q43',
    text: 'Hamidou purchases a new smartphone on credit. He signs a contract to pay a specific monthly amount over the next 24 months. This is an example of __________ credit.',
    options: ['regular', 'installment', 'revolving charge', 'budget'],
    correctAnswer: 1,
    explanation: 'Installment. Installment credit accounts are set up to handle a specific sum of money for a specific purchase, with payments made at regular intervals.',
    performanceIndicatorId: 'FI:002',
    reference: 'LAP-FI-002'
  },
  {
    id: 'icdc-q44',
    text: 'Which of the following is considered a strategic risk:',
    options: ['Labor relations', 'Competition', 'Human errors', 'Property damage'],
    correctAnswer: 1,
    explanation: 'Competition. Strategic risks concern the overall business environment and long-term plans, with competition being a primary example.',
    performanceIndicatorId: 'EC:011',
    reference: 'LAP-EC-003'
  },
  {
    id: 'icdc-q45',
    text: 'Which of the following best describes prescriptive data:',
    options: ['They identify the best course of action.', 'They predict what will happen.', 'They determine why the problem has occurred.', 'They define the problem.'],
    correctAnswer: 0,
    explanation: 'They identify the best course of action. Prescriptive data analytics focus on identifying the best course of action based on data insights.',
    performanceIndicatorId: 'NF:216',
    reference: 'Data Analytics Types'
  },
  {
    id: 'icdc-q46',
    text: 'When writing an executive summary for a business plan, it is important to',
    options: ['make it long and detailed.', 'sign your name.', 'avoid using bullet points.', 'speak to your audience.'],
    correctAnswer: 3,
    explanation: 'Speak to your audience. The executive summary should be tailored to the interests of the audience to capture their attention effectively.',
    performanceIndicatorId: 'CO:091',
    reference: 'Executive Summaries'
  },
  {
    id: 'icdc-q47',
    text: 'Pablo, a sales associate at an electronics store, sees a confused-looking customer looking for a product. However, when Pablo approaches the customer to offer his assistance, the customer refuses his help. This is an example of a __________ customer.',
    options: ['argumentative', 'complaining', 'leave-me-alone', 'impatient'],
    correctAnswer: 2,
    explanation: 'Leave-me-alone. A leave-me-alone customer prefers to be left alone to find what they want and often refuses assistance.',
    performanceIndicatorId: 'CR:009',
    reference: 'LAP-CR-009'
  },
  {
    id: 'icdc-q48',
    text: 'Which of the following statements best represents administrative law:',
    options: ['It pertains to the actions of government agencies.', 'It deals with crime and criminal offenses.', 'It deals with the rights and duties of private entities.', 'It settles possible disputes between private entities.'],
    correctAnswer: 0,
    explanation: 'It pertains to the actions of government agencies. Administrative law deals with the rules and regulations created by government agencies.',
    performanceIndicatorId: 'BL:163',
    reference: 'LAP-BL-163'
  },
  {
    id: 'icdc-q49',
    text: 'An essential component of business success is',
    options: ['crowdfunding.', 'sufficient cash flow.', 'viral marketing.', 'malpractice insurance.'],
    correctAnswer: 1,
    explanation: 'Sufficient cash flow. Cash flow is the movement of funds into and out of a business and is essential for day-to-day operations and success.',
    performanceIndicatorId: 'FI:091',
    reference: 'LAP-FI-091'
  },
  {
    id: 'icdc-q50',
    text: 'Melanie is a freelance accountant. She makes sure to avoid working with any companies with whom she has a personal connection. Melanie is being ethical by',
    options: ['conducting a performance review.', 'partnering with likeminded organizations.', 'avoiding a potential conflict of interest.', 'prioritizing short-term goals.'],
    correctAnswer: 2,
    explanation: 'Avoiding a potential conflict of interest. Ethical behavior includes avoiding situations where personal interests could conflict with professional duties.',
    performanceIndicatorId: 'FI:351',
    reference: 'LAP-FI-351'
  },
  {
    id: 'icdc-q51',
    text: 'Which of the following is a positive nonverbal cue:',
    options: ['Limiting eye contact', 'Slouching in a chair', 'Crossing your arms', 'Nodding your head'],
    correctAnswer: 3,
    explanation: 'Nodding your head. Positive nonverbal cues include nodding, maintaining eye contact, and good posture.',
    performanceIndicatorId: 'CO:059',
    reference: 'Nonverbal Communication'
  },
  {
    id: 'icdc-q52',
    text: 'Raoul handles exchanges according to company policy, watches for counterfeit bills, and gives discounts only when appropriate. He is helping control business expenses by',
    options: ['treating customers in a professional manner.', 'managing sales transactions with accuracy.', 'respecting company property.', 'using expense accounts responsibly.'],
    correctAnswer: 1,
    explanation: 'Managing sales transactions with accuracy. Proper management of sales transactions helps prevent losses and control business expenses.',
    performanceIndicatorId: 'OP:025',
    reference: 'LAP-OP-025'
  },
  {
    id: 'icdc-q53',
    text: 'Which of the following characteristics is a creative person most likely to display:',
    options: ['Apathy', 'Flexibility', 'Codependence', 'Logic'],
    correctAnswer: 1,
    explanation: 'Flexibility. Creative people are often flexible and able to adapt to changing conditions with ease.',
    performanceIndicatorId: 'PD:012',
    reference: 'LAP-PD-012'
  },
  {
    id: 'icdc-q54',
    text: 'Maya wants to read faster to increase her efficiency. Which of the following should she do to improve her reading skills:',
    options: ['Avoid scanning titles and headings', 'Dive right into reading', 'Memorize key terms and concepts', 'Control her reading environment'],
    correctAnswer: 3,
    explanation: 'Control her reading environment. Controlling the reading environment (quiet, comfortable) helps improve focus and reading efficiency.',
    performanceIndicatorId: 'CO:055',
    reference: 'Reading Strategies'
  },
  {
    id: 'icdc-q55',
    text: 'Gabriela works in the finance department of her business. She is responsible for maintaining information related to furniture, equipment, vehicles, and other objects her business needs to carry out day-to-day functions. Gabriela is responsible for maintaining the company’s __________ records.',
    options: ['promotional', 'personnel', 'payroll', 'asset'],
    correctAnswer: 3,
    explanation: 'Asset. Asset records track the physical items a business owns, such as equipment and vehicles.',
    performanceIndicatorId: 'NF:001',
    reference: 'LAP-NF-001'
  },
  {
    id: 'icdc-q56',
    text: 'Which of the following is one of the primary components of an income statement:',
    options: ['Tax bracket', 'Liabilities', 'Cost of goods sold', 'Assets'],
    correctAnswer: 2,
    explanation: 'Cost of goods sold. An income statement summarizes profit and loss, with cost of goods sold being a primary component of expenses.',
    performanceIndicatorId: 'FI:094',
    reference: 'LAP-FI-094'
  },
  {
    id: 'icdc-q57',
    text: 'If Field wants to evaluate the validity of a source he wants to use for his research paper, he should check the author\'s',
    options: ['salary.', 'social media presence.', 'credentials.', 'political affiliation.'],
    correctAnswer: 2,
    explanation: 'Credentials. Checking an author\'s skills, abilities, and qualifications (credentials) is essential for evaluating the validity of a source.',
    performanceIndicatorId: 'NF:079',
    reference: 'Evaluating Information'
  },
  {
    id: 'icdc-q58',
    text: 'Joey is creating a report that includes key financial information, including assets, liabilities, and owner’s equity. Joey is creating a',
    options: ['accounts payable ledger.', 'balance sheet.', 'profit-and-loss statement.', 'tax return.'],
    correctAnswer: 1,
    explanation: 'Balance sheet. A balance sheet captures assets, liabilities, and owner\'s equity at a specific point in time.',
    performanceIndicatorId: 'FI:093',
    reference: 'LAP-FI-093'
  },
  {
    id: 'icdc-q59',
    text: 'A manufacturer has a fixed cost for its employees’ wages, but when it decides to produce a greater number of products this month, its employees work more hours and earn overtime—resulting in variable overtime pay. This is an example of',
    options: ['gross profit.', 'price markups.', 'mixed costs.', 'an economy of scale.'],
    correctAnswer: 2,
    explanation: 'Mixed costs. Mixed costs (or semi-variable costs) have both fixed and variable components, like base wages plus overtime.',
    performanceIndicatorId: 'OP:024',
    reference: 'LAP-OP-024'
  },
  {
    id: 'icdc-q60',
    text: 'A car dealership gives back to its community by hosting charity fundraisers and donating to local organizations. These actions by the car dealership are examples of',
    options: ['competition in the marketplace.', 'technical analysis.', 'corporate social responsibility.', 'systematic random sampling.'],
    correctAnswer: 2,
    explanation: 'Corporate social responsibility. CSR involves businesses giving back to the community and acting ethically toward society.',
    performanceIndicatorId: 'EN:044',
    reference: 'LAP-EN-044'
  },
  {
    id: 'icdc-q61',
    text: 'What is the relationship between the cost of production and supply?',
    options: ['Production costs are unrelated to prices.', 'As supply rises, production costs decrease.', 'Lower production costs lead to decreased supply.', 'Higher production costs lead to decreased supply.'],
    correctAnswer: 3,
    explanation: 'Higher production costs lead to decreased supply. If production costs are higher than the prices consumers are willing to pay, businesses will produce less.',
    performanceIndicatorId: 'EC:005',
    reference: 'LAP-EC-011'
  },
  {
    id: 'icdc-q62',
    text: 'A legal suit has been brought against Landon for property damage. What type of insurance would best help Landon in this situation?',
    options: ['Personal property', 'Personal liability', 'Loss of use', 'Dwelling'],
    correctAnswer: 1,
    explanation: 'Personal liability. Personal liability coverage helps protect a homeowner if a legal suit is brought against them for bodily injury or property damage.',
    performanceIndicatorId: 'FI:571',
    reference: 'Insurance Needs'
  },
  {
    id: 'icdc-q63',
    text: 'Shemar has decided not to hire Garrett’s Tree Removal Service. In the past, the company has worked slower than promised and their quality of service was not to Shemar’s liking. Shemar’s decision is influenced by which of the following:',
    options: ['Risk', 'Experience', 'Emotion', 'Insight'],
    correctAnswer: 1,
    explanation: 'Experience. Shemar’s decision is influenced by experience because he is choosing not to hire the company based on previous interactions.',
    performanceIndicatorId: 'PD:017',
    reference: 'LAP-PD-017'
  },
  {
    id: 'icdc-q64',
    text: 'Which of the following statements about ethics in data mining is true:',
    options: ['Data collected with customer consent can be made publicly available.', 'It is ethical to collect someone\'s personal data without their consent.', 'Good intentions with data analysis ensure a positive outcome.', 'Companies must exercise transparency when collecting, storing, and using data.'],
    correctAnswer: 3,
    explanation: 'Companies must exercise transparency when collecting, storing, and using data. Ethical data mining requires transparency so customers know how their data is used.',
    performanceIndicatorId: 'NF:150',
    reference: 'Ethics in Data Mining'
  },
  {
    id: 'icdc-q65',
    text: 'Which of the following quality-control tools is most useful for identifying many potential causes of a problem and sorting them into specific categories, especially when there is very little “hard” information to go on:',
    options: ['Histogram', 'Check sheet', 'House of quality matrix', 'Fishbone diagram'],
    correctAnswer: 3,
    explanation: 'Fishbone diagram. A fishbone diagram (Ishikawa diagram) is used to identify potential causes of a problem and sort them into categories.',
    performanceIndicatorId: 'OP:163',
    reference: 'LAP-OP-163'
  },
  {
    id: 'icdc-q66',
    text: 'A company restricting employee access to only websites that are required for work is an example of a(n) __________ policy.',
    options: ['discrimination', 'disciplinary', 'health and safety', 'internet'],
    correctAnswer: 3,
    explanation: 'Internet. Companies often implement internet policies to ensure employees use the internet appropriately and responsibly during work hours.',
    performanceIndicatorId: 'PD:250',
    reference: 'LAP-PD-250'
  },
  {
    id: 'icdc-q67',
    text: 'Toward the end of the workday, Anita sees her manager, Peyton, take money out of the cash register and put it in their pocket. When Anita asks Peyton about it, Peyton sidesteps the question and tells Anita to forget what happened. In this instance, would it be okay for Anita to bypass Peyton and inform the human resources manager of Peyton\'s actions?',
    options: ['No, because Anita should listen to Peyton and forget what happened.', 'Yes, because Peyton engaged in an illegal activity.', 'Yes, because Anita should always bypass Peyton in the chain of command.', 'No, because Peyton did not do anything wrong.'],
    correctAnswer: 1,
    explanation: 'Yes, because Peyton engaged in an illegal activity. If you witness a boss participating in an unethical or illegal activity, it is required to bypass the chain of command.',
    performanceIndicatorId: 'PD:252',
    reference: 'LAP-PD-252'
  },
  {
    id: 'icdc-q68',
    text: 'A helpful way to identify your strengths and weaknesses involves receiving __________ from others.',
    options: ['compliments', 'self-esteem', 'feedback', 'compensation'],
    correctAnswer: 2,
    explanation: 'Feedback. Feedback is evaluative information given to you about the things you say and do, helping you identify strengths and weaknesses.',
    performanceIndicatorId: 'EI:002',
    reference: 'LAP-EI-902'
  },
  {
    id: 'icdc-q69',
    text: 'Which of the following investments would be considered least reliable:',
    options: ['Money market accounts', 'Stocks', 'Bonds', 'Savings accounts'],
    correctAnswer: 1,
    explanation: 'Stocks. Stock values can fluctuate dramatically in the short term, making them less reliable than more stable investments like savings accounts.',
    performanceIndicatorId: 'FI:077',
    reference: 'LAP-FI-077'
  },
  {
    id: 'icdc-q70',
    text: 'Hayes is a purchasing specialist, and her brother works for a potential supplier. Buying equipment from her brother’s company may be a(n)',
    options: ['environmental violation.', 'misuse of company property.', 'safety breach.', 'conflict of interest.'],
    correctAnswer: 3,
    explanation: 'Conflict of interest. A conflict of interest occurs when personal ties make it impossible to make a truly impartial professional decision.',
    performanceIndicatorId: 'OP:190',
    reference: 'LAP-OP-190'
  },
  {
    id: 'icdc-q71',
    text: 'Carmel is concerned for others’ welfare. In other words, Carmel is',
    options: ['reliable.', 'persistent.', 'altruistic.', 'honest.'],
    correctAnswer: 2,
    explanation: 'Altruistic. Altruism is the principle of concern for others\' welfare, putting others\' interests before your own.',
    performanceIndicatorId: 'EI:131',
    reference: 'LAP-EI-131'
  },
  {
    id: 'icdc-q72',
    text: 'The leaders of a project team abide by the same set of strong moral principles, no matter the pressure or situation. The project leaders are demonstrating',
    options: ['integrity.', 'accountability.', 'respect.', 'quality.'],
    correctAnswer: 0,
    explanation: 'Integrity. Integrity means adhering to an established set of personal ethics and sound moral principles in all situations.',
    performanceIndicatorId: 'OP:675',
    reference: 'LAP-OP-675'
  },
  {
    id: 'icdc-q73',
    text: 'The government prevents a single business from controlling the entire production of a good or service. This is an example of how government involvement can',
    options: ['provide public goods.', 'regulate workplace conditions.', 'conserve the environment.', 'protect competition.'],
    correctAnswer: 3,
    explanation: 'Protect competition. By banning or regulating monopolies, the government promotes and protects competition in the marketplace.',
    performanceIndicatorId: 'EC:008',
    reference: 'LAP-EC-016'
  },
  {
    id: 'icdc-q74',
    text: 'Rosemary always remembers to hold the door open for the person behind her, because she has learned the impact her small actions can have on others. What trait is Rosemary demonstrating?',
    options: ['Acceptance', 'Sympathy', 'Empathy', 'Self-awareness'],
    correctAnswer: 3,
    explanation: 'Self-awareness. Self-awareness is understanding the influence and effect you have on others through your actions.',
    performanceIndicatorId: 'EI:137',
    reference: 'LAP-EI-137'
  },
  {
    id: 'icdc-q75',
    text: 'Which of the following statements about building positive customer relationships is true:',
    options: ['Businesses should aim to simply meet customer expectations.', 'Businesses must be reactive to customer feedback.', 'Customer relations do not impact competition.', 'Positive customer relations encourage customer loyalty.'],
    correctAnswer: 3,
    explanation: 'Positive customer relations encourage customer loyalty. When customers feel a business has built a relationship with them, they are more likely to be loyal.',
    performanceIndicatorId: 'CR:003',
    reference: 'LAP-CR-003'
  },
  {
    id: 'icdc-q76',
    text: 'Which of the following is a demographic businesses might identify as a result of conducting an environmental scan:',
    options: ['Consumer spending habits', 'New regulations', 'Unemployment rate', 'Population shift'],
    correctAnswer: 3,
    explanation: 'Population shift. Demographics are physical and social characteristics of a group, such as population shifts.',
    performanceIndicatorId: 'NF:015',
    reference: 'LAP-NF-015'
  },
  {
    id: 'icdc-q77',
    text: 'Which of the following is an example of an unexpected change:',
    options: ['Your computer crashing', 'Starting a new job', 'Learning to drive a car', 'Graduating from high school'],
    correctAnswer: 0,
    explanation: 'Your computer crashing. Unexpected changes are those that happen without warning, like a computer crash.',
    performanceIndicatorId: 'EI:006',
    reference: 'LAP-EI-006'
  },
  {
    id: 'icdc-q78',
    text: 'Which of the following statements regarding power is true:',
    options: ['Power does not follow a hierarchy.', 'Power follows a strict hierarchy.', 'Authority and power are the same thing.', 'People with power never have authority.'],
    correctAnswer: 0,
    explanation: 'Power does not follow a hierarchy. Power can flow in any direction and is the ability to influence others, which is different from formal authority.',
    performanceIndicatorId: 'EI:135',
    reference: 'LAP-EI-135'
  },
  {
    id: 'icdc-q79',
    text: 'If a company effectively implements a customer relationship management program, which of the following is a common result:',
    options: ['Higher quality products at cheaper prices', 'Customers do more shopping outside business hours', 'Vendors offer competitive discounts on supplies', 'Employees performing their jobs more efficiently'],
    correctAnswer: 3,
    explanation: 'Employees performing their jobs more efficiently. CRM programs help employees build and maintain customer relationships more effectively.',
    performanceIndicatorId: 'CR:016',
    reference: 'LAP-CR-016'
  },
  {
    id: 'icdc-q80',
    text: 'Which of the following is an effective way to defend ideas objectively:',
    options: ['Prepare ahead of time', 'Limit audience feedback', 'Avoid thanking critics', 'Respond with opinions'],
    correctAnswer: 0,
    explanation: 'Prepare ahead of time. Preparing for objections and responding with facts rather than opinions is key to defending ideas objectively.',
    performanceIndicatorId: 'CO:061',
    reference: 'Defending Ideas'
  },
  {
    id: 'icdc-q81',
    text: 'To effectively follow directions in the workplace, it is important to',
    options: ['avoid asking questions.', 'listen passively.', 'rely on your memory.', 'respond with a good attitude.'],
    correctAnswer: 3,
    explanation: 'Respond with a good attitude. Demonstrating respect and a good attitude when receiving instructions makes the task easier and more effective.',
    performanceIndicatorId: 'CO:119',
    reference: 'Following Directions'
  },
  {
    id: 'icdc-q82',
    text: 'Which of the following best describes a market economic system:',
    options: ['Prices are set by the government.', 'Individuals and businesses own the means of production.', 'The government owns and controls all means of production.', 'It is sometimes called a subsistence system.'],
    correctAnswer: 1,
    explanation: 'Individuals and businesses own the means of production. In a market economy, individuals and businesses own the means of production and prices are set by supply and demand.',
    performanceIndicatorId: 'EC:007',
    reference: 'LAP-EC-907'
  },
  {
    id: 'icdc-q83',
    text: 'Which of the following is considered a rich form of communication:',
    options: ['Blog', 'Video conference', 'Voice message', 'Email'],
    correctAnswer: 1,
    explanation: 'Video conference. Rich channels offer more interaction and allow both sender and receiver to read nonverbal messages.',
    performanceIndicatorId: 'CO:092',
    reference: 'Communication Channels'
  },
  {
    id: 'icdc-q84',
    text: 'Madilynn’s homeroom class is filled with students who possess many different backgrounds, beliefs, and ideas, which inspires Madilynn to embrace new ideas and discuss a variety of perspectives. This classroom possesses',
    options: ['widespread objectivity.', 'personal fulfillment.', 'intellectual diversity.', 'cognitive imbalances.'],
    correctAnswer: 2,
    explanation: 'Intellectual diversity. Intellectual diversity is an environment in which new and different ideas are embraced.',
    performanceIndicatorId: 'EI:136',
    reference: 'LAP-EI-136'
  },
  {
    id: 'icdc-q85',
    text: 'Tasks like showering regularly, caring for your hair, and brushing your teeth are how you practice',
    options: ['hygiene.', 'body language.', 'accessories.', 'self-image.'],
    correctAnswer: 0,
    explanation: 'Hygiene. Consistent habits like showering and brushing teeth are part of practicing good hygiene.',
    performanceIndicatorId: 'PD:002',
    reference: 'LAP-PD-002'
  },
  {
    id: 'icdc-q86',
    text: 'Which of the following statements regarding inspiration is true:',
    options: ['You must be a CEO to inspire others.', 'Inspiration is rarely used by leaders.', 'Inspiring others requires a college degree.', 'Anyone can learn how to inspire others.'],
    correctAnswer: 3,
    explanation: 'Anyone can learn how to inspire others. You don’t need a specific title or degree to serve as an inspiration to others.',
    performanceIndicatorId: 'EI:133',
    reference: 'LAP-EI-133'
  },
  {
    id: 'icdc-q87',
    text: 'Which of the following occurs during the revision stage of written work:',
    options: ['Deleting unnecessary words', 'Fixing typos', 'Correcting spelling errors', 'Tweaking transitions'],
    correctAnswer: 3,
    explanation: 'Tweaking transitions. Revision focuses on the big picture and flow, such as tweaking transitions between paragraphs.',
    performanceIndicatorId: 'CO:089',
    reference: 'Writing Revision'
  },
  {
    id: 'icdc-q88',
    text: 'If Phil wants to create, store, and print a typed document, what software should he use?',
    options: ['PowerPoint', 'Excel', 'Photoshop', 'Word'],
    correctAnswer: 3,
    explanation: 'Word. A word processor like Microsoft Word is designed for creating, storing, and printing typed documents.',
    performanceIndicatorId: 'NF:007',
    reference: 'Basic Word Processing'
  },
  {
    id: 'icdc-q89',
    text: 'Why do small businesses tend to be more innovative than huge corporations?',
    options: ['They require more decision-making.', 'They follow fewer laws.', 'They are more flexible.', 'They have more money to invest.'],
    correctAnswer: 2,
    explanation: 'They are more flexible. Small businesses often have more flexibility to pursue big ideas without rigid schedules or rules.',
    performanceIndicatorId: 'PD:126',
    reference: 'LAP-PD-126'
  },
  {
    id: 'icdc-q90',
    text: 'Your manager welcomes feedback and urges employees to share new ideas. Which characteristic of open, honest communication are they demonstrating?',
    options: ['Encouraging questions and suggestions', 'Allowing for conflict', 'Avoiding half-truths', 'Giving information people need'],
    correctAnswer: 0,
    explanation: 'Encouraging questions and suggestions. A manager who values transparency will encourage employees to ask questions and share new ideas.',
    performanceIndicatorId: 'EI:129',
    reference: 'LAP-EI-129'
  },
  {
    id: 'icdc-q91',
    text: 'Which of the following is a benefit businesses experience from collaboration:',
    options: ['Greater job satisfaction', 'Personal and professional growth', 'Increased retention of top talent', 'Better communities and relationships'],
    correctAnswer: 2,
    explanation: 'Increased retention of top talent. Collaborative work environments attract and retain top talent who seek opportunities to engage and grow.',
    performanceIndicatorId: 'EI:130',
    reference: 'LAP-EI-130'
  },
  {
    id: 'icdc-q92',
    text: 'When creating an outline, the information in the first heading should have the same significance as the information in the second heading. This best describes what component of creating an effective outline?',
    options: ['Subordination', 'Coordination', 'Division', 'Parallelism'],
    correctAnswer: 1,
    explanation: 'Coordination. Coordination means ensuring all information in the same level of an outline has the same significance.',
    performanceIndicatorId: 'NF:080',
    reference: 'Effective Outlines'
  },
  {
    id: 'icdc-q93',
    text: 'Which of the following would be an appropriate goal for someone with a personal vision that involves working to cure cancer:',
    options: ['Attend religious seminary', 'Get accepted to medical school', 'Write a best-selling novel', 'Graduate from law school'],
    correctAnswer: 1,
    explanation: 'Get accepted to medical school. A goal should align with your personal vision; medical school is appropriate for someone wanting to cure cancer.',
    performanceIndicatorId: 'EI:063',
    reference: 'LAP-EI-063'
  },
  {
    id: 'icdc-q94',
    text: 'Even though math is his most difficult subject and he wants to give up, Marco continues working through his trigonometry homework problems. Marco is being',
    options: ['altruistic.', 'persistent.', 'transparent.', 'respectful.'],
    correctAnswer: 1,
    explanation: 'Persistent. Persistence is the ability to continue working on a task until the desired outcome is achieved.',
    performanceIndicatorId: 'EI:131',
    reference: 'LAP-EI-131'
  },
  {
    id: 'icdc-q95',
    text: 'After only two years of use, Jace’s laptop was obsolete, so he asked for a new one for his birthday. This is an example of',
    options: ['strategic outsourcing.', 'shrinking product life cycles.', 'microscopic globalization.', 'e-commerce.'],
    correctAnswer: 1,
    explanation: 'Shrinking product life cycles. Rapid innovation leads to shorter product life cycles, as products become obsolete faster.',
    performanceIndicatorId: 'EC:107',
    reference: 'LAP-EC-107'
  },
  {
    id: 'icdc-q96',
    text: 'A water bottle manufacturer checks one bottle from every shipment to ensure the quality of its product. This process is known as quality',
    options: ['inspection.', 'assurance.', 'logistics.', 'delivery.'],
    correctAnswer: 0,
    explanation: 'Inspection. Checking a sample item for defects after production is part of the quality inspection process.',
    performanceIndicatorId: 'OP:189',
    reference: 'LAP-OP-189'
  },
  {
    id: 'icdc-q97',
    text: 'Which of the following is a learning goal:',
    options: ['Deliver a presentation without making a mistake.', 'Complete a 1,000-word manuscript in one month.', 'Receive at least a 9 out of 10 on a performance review.', 'Become an expert in a new graphic design software.'],
    correctAnswer: 3,
    explanation: 'Become an expert in a new graphic design software. A learning goal focuses on mastering a new skill rather than just performance metrics.',
    performanceIndicatorId: 'PD:018',
    reference: 'LAP-PD-918'
  },
  {
    id: 'icdc-q98',
    text: 'Bianca pays tax on a pair of jeans she buys at a retail store. What type of tax did Bianca pay in this situation?',
    options: ['Income', 'Payroll', 'Sales', 'Property'],
    correctAnswer: 2,
    explanation: 'Sales. Sales tax is collected from consumers at the point of purchase as a percentage of the total sale.',
    performanceIndicatorId: 'EC:072',
    reference: 'LAP-EC-072'
  },
  {
    id: 'icdc-q99',
    text: 'Andrew received word from a colleague that their boss wants to meet with him one-on-one this afternoon. When asked what the meeting was about, the colleague didn\'t have any details. As a result, Andrew begins to feel nervous and starts to panic while thinking about all of the possible reasons for the meeting. What step can Andrew use to help him tolerate ambiguity in the moment?',
    options: ['Focus on creativity', 'Assess risks', 'Stay calm and neutral', 'Ask questions'],
    correctAnswer: 2,
    explanation: 'Stay calm and neutral. Staying calm and breathing deeply helps tolerate ambiguity and halts negative thinking.',
    performanceIndicatorId: 'EI:092',
    reference: 'LAP-EI-092'
  },
  {
    id: 'icdc-q100',
    text: 'When editing a document with someone else, it is important to',
    options: ['not use track changes.', 'review the document at different times.', 'maintain an open line of communication.', 'use different software.'],
    correctAnswer: 2,
    explanation: 'Maintain an open line of communication. Effective collaboration requires open communication between co-editors.',
    performanceIndicatorId: 'NF:011',
    reference: 'Collaborative Applications'
  }
];

export const EVENT_CATEGORIES = [
  "Principles",
  "Team Decision Making",
  "Individual Series",
  "Personal Financial Literacy",
  "Business Operations Research",
  "Project Management",
  "Entrepreneurship",
  "Integrated Marketing Campaign",
  "Professional Selling and Consulting",
  "Online Events"
];

export const DECA_DATA: Cluster[] = [
  {
    id: 'principles',
    name: 'Principles',
    description: 'Introductory events for first-year DECA members focusing on foundational business concepts.',
    color: 'bg-[#0073BB]',
    performanceIndicators: [
      {
        id: "bl-163",
        code: "BL:163",
        name: "BL:163 (CS) – Comply with the spirit and intent of laws and regulations",
        description: "Follow both the written law and its intended purpose to ensure ethical business practices.",
        cluster: "Principles"
      },
      {
        id: "bl-067",
        code: "BL:067",
        name: "BL:067 (SP) – Discuss the nature of law and sources of law in the United States",
        description: "Explain what laws are and where they originate in the U.S. legal system.",
        cluster: "Principles"
      },
      {
        id: "bl-068",
        code: "BL:068",
        name: "BL:068 (SP) – Describe the United States' judicial system",
        description: "Explain how courts are structured and how legal cases are resolved.",
        cluster: "Principles"
      },
      {
        id: "bl-051",
        code: "BL:051",
        name: "BL:051 (SP) – Describe methods used to protect intellectual property",
        description: "Explain legal protections for ideas, creations, and inventions.",
        cluster: "Principles"
      },
      {
        id: "bl-001",
        code: "BL:001",
        name: "BL:001 (SP) – Describe legal issues affecting businesses",
        description: "Identify common legal challenges businesses face.",
        cluster: "Principles"
      },
      {
        id: "bl-069",
        code: "BL:069",
        name: "BL:069 (SP) – Identify the basic torts relating to business enterprises",
        description: "Explain civil wrongs that can result in lawsuits against businesses.",
        cluster: "Principles"
      },
      {
        id: "bl-002",
        code: "BL:002",
        name: "BL:002 (SP) – Describe the nature of legally binding contracts",
        description: "Explain what makes a contract valid and enforceable.",
        cluster: "Principles"
      },
      {
        id: "bl-070",
        code: "BL:070",
        name: "BL:070 (SP) – Describe the nature of legal procedure",
        description: "Explain the steps used to resolve legal disputes.",
        cluster: "Principles"
      },
      {
        id: "bl-071",
        code: "BL:071",
        name: "BL:071 (SP) – Discuss the nature of debtor-creditor relationships",
        description: "Explain the legal relationship between borrowers and lenders.",
        cluster: "Principles"
      },
      {
        id: "bl-072",
        code: "BL:072",
        name: "BL:072 (SP) – Explain the nature of agency relationships",
        description: "Describe situations where one party acts on behalf of another.",
        cluster: "Principles"
      },
      {
        id: "bl-073",
        code: "BL:073",
        name: "BL:073 (SP) – Discuss the nature of environmental law",
        description: "Explain laws designed to protect the environment from business harm.",
        cluster: "Principles"
      },
      {
        id: "bl-074",
        code: "BL:074",
        name: "BL:074 (SP) – Discuss the role of administrative law",
        description: "Explain laws created and enforced by government agencies.",
        cluster: "Principles"
      },
      {
        id: "bl-003",
        code: "BL:003",
        name: "BL:003 (CS) – Explain types of business ownership",
        description: "Describe common legal forms of business ownership.",
        cluster: "Principles"
      },
      {
        id: "bl-145",
        code: "BL:145",
        name: "BL:145 (SP) – Explain the nature of import/export law",
        description: "Explain laws governing international trade.",
        cluster: "Principles"
      },
      {
        id: "bl-126",
        code: "BL:126",
        name: "BL:126 (SP) – Describe the nature of customs regulations",
        description: "Explain rules for moving goods across national borders.",
        cluster: "Principles"
      },
      {
        id: "co-054",
        code: "CO:054",
        name: "CO:054 (PQ) – Identify sources that provide relevant, valid written material",
        description: "Locate credible and accurate written sources that can be used to complete tasks or make informed decisions.",
        cluster: "Principles"
      },
      {
        id: "co-055",
        code: "CO:055",
        name: "CO:055 (PQ) – Extract relevant information from written materials",
        description: "Identify and select key information from written documents that is directly useful for tasks or decisions.",
        cluster: "Principles"
      },
      {
        id: "co-056",
        code: "CO:056",
        name: "CO:056 (PQ) – Apply written directions to achieve tasks",
        description: "Follow instructions from written documents accurately to complete assignments or processes.",
        cluster: "Principles"
      },
      {
        id: "co-057",
        code: "CO:057",
        name: "CO:057 (CS) – Analyze company resources to ascertain policies and procedures",
        description: "Review internal documents and materials to understand and apply company rules and procedures.",
        cluster: "Principles"
      },
      {
        id: "co-082",
        code: "CO:082",
        name: "CO:082 (PQ) – Explain communication techniques that support and encourage a speaker",
        description: "Recognize and use strategies that make speakers feel heard and understood.",
        cluster: "Principles"
      },
      {
        id: "co-119",
        code: "CO:119",
        name: "CO:119 (PQ) – Follow oral directions",
        description: "Listen carefully and carry out spoken instructions accurately.",
        cluster: "Principles"
      },
      {
        id: "co-017",
        code: "CO:017",
        name: "CO:017 (PQ) – Demonstrate active listening skills",
        description: "Show understanding through verbal and nonverbal feedback.",
        cluster: "Principles"
      },
      {
        id: "co-147",
        code: "CO:147",
        name: "CO:147 (PQ) – Explain the nature of effective verbal communications",
        description: "Communicate clearly, respectfully, and appropriately for the situation.",
        cluster: "Principles"
      },
      {
        id: "co-058",
        code: "CO:058",
        name: "CO:058 (PQ) – Ask relevant questions",
        description: "Seek additional information or clarification to improve understanding.",
        cluster: "Principles"
      },
      {
        id: "co-059",
        code: "CO:059",
        name: "CO:059 (PQ) – Interpret others’ nonverbal cues",
        description: "Understand meaning from body language, facial expressions, and tone.",
        cluster: "Principles"
      },
      {
        id: "co-060",
        code: "CO:060",
        name: "CO:060 (PQ) – Provide legitimate responses to inquiries",
        description: "Answer questions accurately and professionally.",
        cluster: "Principles"
      },
      {
        id: "co-083",
        code: "CO:083",
        name: "CO:083 (PQ) – Give verbal directions",
        description: "Convey instructions clearly to ensure tasks are completed correctly.",
        cluster: "Principles"
      },
      {
        id: "co-084",
        code: "CO:084",
        name: "CO:084 (CS) – Employ communication styles appropriate to target audience",
        description: "Adjust verbal communication based on the audience’s role or knowledge.",
        cluster: "Principles"
      },
      {
        id: "co-061",
        code: "CO:061",
        name: "CO:061 (CS) – Defend ideas objectively",
        description: "Present and support ideas using facts and reasoning rather than emotion.",
        cluster: "Principles"
      },
      {
        id: "co-114",
        code: "CO:114",
        name: "CO:114 (CS) – Handle telephone calls in a businesslike manner",
        description: "Communicate effectively and professionally over the phone.",
        cluster: "Principles"
      },
      {
        id: "co-053",
        code: "CO:053",
        name: "CO:053 (CS) – Participate in group discussions",
        description: "Contribute ideas, listen, and collaborate in team settings.",
        cluster: "Principles"
      },
      {
        id: "co-201",
        code: "CO:201",
        name: "CO:201 (SP) – Facilitate (lead) group discussions",
        description: "Guide discussion toward objectives while encouraging participation.",
        cluster: "Principles"
      },
      {
        id: "co-025",
        code: "CO:025",
        name: "CO:025 (SP) – Make oral presentations",
        description: "Present information clearly and confidently to an audience.",
        cluster: "Principles"
      },
      {
        id: "co-085",
        code: "CO:085",
        name: "CO:085 (CS) – Utilize note-taking strategies",
        description: "Apply methods to efficiently capture and organize information for later use.",
        cluster: "Principles"
      },
      {
        id: "co-086",
        code: "CO:086",
        name: "CO:086 (CS) – Organize information",
        description: "Structure information logically to make it easy to understand and use.",
        cluster: "Principles"
      },
      {
        id: "co-087",
        code: "CO:087",
        name: "CO:087 (CS) – Select and use appropriate graphic aids",
        description: "Choose visuals that enhance understanding of information.",
        cluster: "Principles"
      },
      {
        id: "co-016",
        code: "CO:016",
        name: "CO:016 (CS) – Explain the nature of effective written communications",
        description: "Communicate ideas clearly, concisely, and professionally in writing.",
        cluster: "Principles"
      },
      {
        id: "co-088",
        code: "CO:088",
        name: "CO:088 (CS) – Select and utilize appropriate formats for professional writing",
        description: "Choose the correct structure and style for emails, letters, or reports.",
        cluster: "Principles"
      },
      {
        id: "co-089",
        code: "CO:089",
        name: "CO:089 (CS) – Edit and revise written work consistent with professional standards",
        description: "Review writing for accuracy, clarity, and professionalism.",
        cluster: "Principles"
      },
      {
        id: "co-090",
        code: "CO:090",
        name: "CO:090 (CS) – Write professional emails",
        description: "Compose clear, polite, and concise email messages.",
        cluster: "Principles"
      },
      {
        id: "co-133",
        code: "CO:133",
        name: "CO:133 (CS) – Write business letters",
        description: "Compose formal letters using standard business conventions.",
        cluster: "Principles"
      },
      {
        id: "co-039",
        code: "CO:039",
        name: "CO:039 (CS) – Write informational messages",
        description: "Convey facts or instructions clearly in written form.",
        cluster: "Principles"
      },
      {
        id: "co-040",
        code: "CO:040",
        name: "CO:040 (CS) – Write inquiries",
        description: "Request information or clarification politely and professionally.",
        cluster: "Principles"
      },
      {
        id: "co-031",
        code: "CO:031",
        name: "CO:031 (SP) – Write persuasive messages",
        description: "Influence the reader to take action using reasoning and evidence.",
        cluster: "Principles"
      },
      {
        id: "co-091",
        code: "CO:091",
        name: "CO:091 (SP) – Write executive summaries",
        description: "Summarize key points from longer reports or analyses for management.",
        cluster: "Principles"
      },
      {
        id: "co-094",
        code: "CO:094",
        name: "CO:094 (SP) – Prepare simple written reports",
        description: "Present information in structured written form for clarity and understanding.",
        cluster: "Principles"
      },
      {
        id: "co-202",
        code: "CO:202",
        name: "CO:202 (SP) – Explain how digital communications expose business to risk",
        description: "Identify potential legal, security, and reputational risks of digital communication.",
        cluster: "Principles"
      },
      {
        id: "co-203",
        code: "CO:203",
        name: "CO:203 (SP) – Adapt written correspondence to targeted audiences",
        description: "Adjust style, tone, and content to meet the needs of the intended audience.",
        cluster: "Principles"
      },
      {
        id: "co-204",
        code: "CO:204",
        name: "CO:204 (SP) – Use data visualization techniques",
        description: "Present information visually to enhance understanding and analysis.",
        cluster: "Principles"
      },
      {
        id: "co-205",
        code: "CO:205",
        name: "CO:205 (CS) – Describe the impact of a person's social media brand on the achievement of organizational objectives",
        description: "Understand how an individual’s professional social media presence can affect a company’s reputation and goals.",
        cluster: "Principles"
      },
      {
        id: "co-206",
        code: "CO:206",
        name: "CO:206 (CS) – Distinguish between using social media for business and personal purposes",
        description: "Recognize the difference between professional and personal social media use to protect company interests.",
        cluster: "Principles"
      },
      {
        id: "co-014",
        code: "CO:014",
        name: "CO:014 (CS) – Explain the nature of staff communication",
        description: "Share and receive information among staff to ensure clarity, understanding, and teamwork.",
        cluster: "Principles"
      },
      {
        id: "co-092",
        code: "CO:092",
        name: "CO:092 (CS) – Choose and use appropriate channel for workplace communication",
        description: "Select the best method to communicate messages effectively in the workplace.",
        cluster: "Principles"
      },
      {
        id: "co-063",
        code: "CO:063",
        name: "CO:063 (CS) – Participate in a staff meeting",
        description: "Engage actively and constructively in team or staff meetings.",
        cluster: "Principles"
      },
      {
        id: "co-067",
        code: "CO:067",
        name: "CO:067 (CS) – Participate in problem-solving groups",
        description: "Work collaboratively with others to identify problems and develop solutions.",
        cluster: "Principles"
      },
      {
        id: "cr-001",
        code: "CR:001",
        name: "CR:001 (CS) – Identify company’s brand promise",
        description: "Recognize the company’s commitment to customers.",
        cluster: "Principles"
      },
      {
        id: "cr-002",
        code: "CR:002",
        name: "CR:002 (CS) – Determine ways of reinforcing the company’s image through employee performance",
        description: "Identify actions employees take to support the brand image.",
        cluster: "Principles"
      },
      {
        id: "cr-003",
        code: "CR:003",
        name: "CR:003 (CS) – Explain the nature of positive customer relations",
        description: "Describe how respectful, helpful interactions create customer satisfaction and loyalty.",
        cluster: "Principles"
      },
      {
        id: "cr-004",
        code: "CR:004",
        name: "CR:004 (CS) – Demonstrate a customer service mindset",
        description: "Show an attitude focused on helping customers and solving their problems.",
        cluster: "Principles"
      },
      {
        id: "cr-005",
        code: "CR:005",
        name: "CR:005 (CS) – Reinforce service orientation through communication",
        description: "Use verbal and nonverbal communication to show commitment to service quality.",
        cluster: "Principles"
      },
      {
        id: "cr-006",
        code: "CR:006",
        name: "CR:006 (CS) – Respond to customer inquiries",
        description: "Provide accurate and helpful answers to customer questions.",
        cluster: "Principles"
      },
      {
        id: "cr-007",
        code: "CR:007",
        name: "CR:007 (CS) – Interpret business policies to customers/clients",
        description: "Explain company rules and procedures clearly to customers.",
        cluster: "Principles"
      },
      {
        id: "cr-008",
        code: "CR:008",
        name: "CR:008 - Foundational concept in CR",
        description: "Foundational concept in Customer Relations.",
        cluster: "Principles"
      },
      {
        id: "cr-009",
        code: "CR:009",
        name: "CR:009 (CS) – Handle difficult customers",
        description: "Manage challenging customer interactions calmly and professionally.",
        cluster: "Principles"
      },
      {
        id: "cr-010",
        code: "CR:010",
        name: "CR:010 (CS) – Handle customer/client complaints",
        description: "Address customer dissatisfaction to restore trust and satisfaction.",
        cluster: "Principles"
      },
      {
        id: "cr-011",
        code: "CR:011",
        name: "CR:011 - Foundational concept in CR",
        description: "Foundational concept in Customer Relations.",
        cluster: "Principles"
      },
      {
        id: "cr-012",
        code: "CR:012",
        name: "CR:012 - Foundational concept in CR",
        description: "Foundational concept in Customer Relations.",
        cluster: "Principles"
      },
      {
        id: "cr-013",
        code: "CR:013",
        name: "CR:013 - Foundational concept in CR",
        description: "Foundational concept in Customer Relations.",
        cluster: "Principles"
      },
      {
        id: "cr-014",
        code: "CR:014",
        name: "CR:014 - Foundational concept in CR",
        description: "Foundational concept in Customer Relations.",
        cluster: "Principles"
      },
      {
        id: "cr-015",
        code: "CR:015",
        name: "CR:015 - Foundational concept in CR",
        description: "Foundational concept in Customer Relations.",
        cluster: "Principles"
      },
      {
        id: "cr-016",
        code: "CR:016",
        name: "CR:016 (SP) – Discuss the nature of customer relationship management (CRM)",
        description: "Explain how businesses manage interactions with customers to improve relationships.",
        cluster: "Principles"
      },
      {
        id: "cr-017",
        code: "CR:017",
        name: "CR:017 (SP) – Explain the role of ethics in customer relationship management",
        description: "Describe the importance of ethical behavior in managing customer relationships.",
        cluster: "Principles"
      },
      {
        id: "cr-018",
        code: "CR:018",
        name: "CR:018 (SP) – Describe the use of technology in customer relationship management",
        description: "Explain how digital tools support customer relationship efforts.",
        cluster: "Principles"
      },
      {
        id: "cr-019",
        code: "CR:019",
        name: "CR:019 (CS) – Adapt communication to the cultural and social differences among clients",
        description: "Adjust communication style to respect diverse backgrounds.",
        cluster: "Principles"
      },
      {
        id: "cr-029",
        code: "CR:029",
        name: "CR:029 (CS) – Develop rapport with customers",
        description: "Establish a friendly, comfortable relationship with customers.",
        cluster: "Principles"
      },
      {
        id: "cr-030",
        code: "CR:030",
        name: "CR:030 (SP) – Build and maintain relationships with customers",
        description: "Develop long-term connections that encourage customer loyalty.",
        cluster: "Principles"
      },
      {
        id: "ec-001",
        code: "EC:001",
        name: "EC:001 (CS) – Describe the concepts of economics and economic activities",
        description: "Explain how people and businesses make choices to allocate limited resources.",
        cluster: "Principles"
      },
      {
        id: "ec-002",
        code: "EC:002",
        name: "EC:002 (CS) – Distinguish between economic goods and services",
        description: "Differentiate between tangible products and intangible actions that satisfy wants and needs.",
        cluster: "Principles"
      },
      {
        id: "ec-003",
        code: "EC:003",
        name: "EC:003 (CS) – Explain the concept of economic resources",
        description: "Describe the inputs used to produce goods and services.",
        cluster: "Principles"
      },
      {
        id: "ec-004",
        code: "EC:004",
        name: "EC:004 (CS) – Determine economic utilities created by business activities",
        description: "Identify how businesses add value to goods and services.",
        cluster: "Principles"
      },
      {
        id: "ec-005",
        code: "EC:005",
        name: "EC:005 (CS) – Explain the principles of supply and demand",
        description: "Describe how prices are determined by availability and consumer desire.",
        cluster: "Principles"
      },
      {
        id: "ec-006",
        code: "EC:006",
        name: "EC:006 (CS) – Describe the functions of prices in markets",
        description: "Explain how prices help regulate economic activity.",
        cluster: "Principles"
      },
      {
        id: "ec-007",
        code: "EC:007",
        name: "EC:007 (CS) – Explain the types of economic systems",
        description: "Describe how societies organize production and distribution.",
        cluster: "Principles"
      },
      {
        id: "ec-008",
        code: "EC:008",
        name: "EC:008 (CS) – Determine the relationship between government and business",
        description: "Explain how the government influences business operations.",
        cluster: "Principles"
      },
      {
        id: "ec-009",
        code: "EC:009",
        name: "EC:009 (CS) – Explain the concept of private enterprise",
        description: "Describe businesses owned and operated by individuals, not government.",
        cluster: "Principles"
      },
      {
        id: "ec-010",
        code: "EC:010",
        name: "EC:010 (CS) – Identify factors affecting a business’s profit",
        description: "Explain elements that influence revenue and expenses.",
        cluster: "Principles"
      },
      {
        id: "ec-011",
        code: "EC:011",
        name: "EC:011 (CS) – Determine factors affecting business risk",
        description: "Identify uncertainties that may impact business success.",
        cluster: "Principles"
      },
      {
        id: "ec-012",
        code: "EC:012",
        name: "EC:012 (CS) – Explain the concept of competition",
        description: "Describe how businesses compete for customers.",
        cluster: "Principles"
      },
      {
        id: "ec-013",
        code: "EC:013",
        name: "EC:013 (CS) – Explain the concept of productivity",
        description: "Describe how efficiently resources are used to produce goods or services.",
        cluster: "Principles"
      },
      {
        id: "ec-014",
        code: "EC:014",
        name: "EC:014 (SP) – Analyze impact of specialization/division of labor on productivity",
        description: "Explain how focusing on specific tasks improves efficiency.",
        cluster: "Principles"
      },
      {
        id: "ec-015",
        code: "EC:015",
        name: "EC:015 (SP) – Explain the concept of organized labor and business",
        description: "Describe how labor unions represent workers.",
        cluster: "Principles"
      },
      {
        id: "ec-016",
        code: "EC:016",
        name: "EC:016 (SP) – Explain the nature of global trade",
        description: "Describe the exchange of goods and services between countries.",
        cluster: "Principles"
      },
      {
        id: "ec-017",
        code: "EC:017",
        name: "EC:017 (SP) – Explain the concept of Gross Domestic Product (GDP)",
        description: "Measure the total value of goods and services produced in a country.",
        cluster: "Principles"
      },
      {
        id: "ec-018",
        code: "EC:018",
        name: "EC:018 (SP) – Determine the impact of business cycles on business activities",
        description: "Explain how economic expansions and contractions affect businesses.",
        cluster: "Principles"
      },
      {
        id: "ec-019",
        code: "EC:019",
        name: "EC:019 (PQ) – Explain the concept of economic resources",
        description: "Understand the inputs used to produce goods and services (factors of production).",
        cluster: "Principles"
      },
      {
        id: "ec-020",
        code: "EC:020",
        name: "EC:020 (PQ) – Describe the nature of taxes",
        description: "Understand the compulsory payments made to the government to fund public services.",
        cluster: "Principles"
      },
      {
        id: "ec-021",
        code: "EC:070",
        name: "EC:070 (CS) – Explain the role of business in society",
        description: "Describe how businesses meet needs and support economic growth.",
        cluster: "Principles"
      },
      {
        id: "ec-022",
        code: "EC:071",
        name: "EC:071 (CS) – Describe types of business activities",
        description: "Identify the main categories of activities businesses perform.",
        cluster: "Principles"
      },
      {
        id: "ec-023",
        code: "EC:023",
        name: "EC:023 (SP) – Explain the impact of the law of diminishing returns",
        description: "Describe how adding more inputs eventually lowers efficiency.",
        cluster: "Principles"
      },
      {
        id: "ec-024",
        code: "EC:072",
        name: "EC:072 (SP) – Describe the nature of taxes",
        description: "Explain how taxes fund government activities.",
        cluster: "Principles"
      },
      {
        id: "ec-025",
        code: "EC:081",
        name: "EC:081 (SP) – Discuss consumer spending as an economic indicator",
        description: "Explain how spending levels reflect economic health.",
        cluster: "Principles"
      },
      {
        id: "ec-026",
        code: "EC:082",
        name: "EC:082 (SP) – Discuss the impact of unemployment rates",
        description: "Explain how employment levels affect the economy.",
        cluster: "Principles"
      },
      {
        id: "ec-027",
        code: "EC:083",
        name: "EC:083 (SP) – Describe the economic impact of inflation on business",
        description: "Explain how rising prices affect costs and purchasing power.",
        cluster: "Principles"
      },
      {
        id: "ec-028",
        code: "EC:084",
        name: "EC:084 (SP) – Explain the economic impact of interest-rate fluctuations",
        description: "Describe how changing interest rates influence borrowing and spending.",
        cluster: "Principles"
      },
      {
        id: "ec-029",
        code: "EC:100",
        name: "EC:100 (SP) – Describe determinants of exchange rates",
        description: "Explain factors influencing currency value.",
        cluster: "Principles"
      },
      {
        id: "ec-030",
        code: "EC:103",
        name: "EC:103 (SP) – Explain the organizational design of businesses",
        description: "Describe how businesses structure roles and responsibilities.",
        cluster: "Principles"
      },
      {
        id: "ec-031",
        code: "EC:104",
        name: "EC:104 (SP) – Discuss the global environment in which businesses operate",
        description: "Explain how international factors influence business decisions.",
        cluster: "Principles"
      },
      {
        id: "ec-032",
        code: "EC:105",
        name: "EC:105 (SP) – Describe factors that affect the business environment",
        description: "Identify external forces that influence business success.",
        cluster: "Principles"
      },
      {
        id: "ec-033",
        code: "EC:106",
        name: "EC:106 (SP) – Explain the nature of business ethics",
        description: "Describe moral principles guiding business behavior.",
        cluster: "Principles"
      },
      {
        id: "ec-034",
        code: "EC:107",
        name: "EC:107 (SP) – Explain how organizations adapt to today’s markets",
        description: "Describe how businesses respond to changing consumer needs and competition.",
        cluster: "Principles"
      },
      {
        id: "ec-035",
        code: "EC:109",
        name: "EC:109 (SP) – Discuss the impact of globalization on business",
        description: "Explain how interconnected economies affect businesses.",
        cluster: "Principles"
      },
      {
        id: "ec-036",
        code: "EC:110",
        name: "EC:110 (SP) – Explain cultural considerations in global business",
        description: "Describe how culture affects international business relations.",
        cluster: "Principles"
      },
      {
        id: "ec-037",
        code: "EC:111",
        name: "EC:111 (SP) – Describe impact of electronic communication tools on global business",
        description: "Explain how technology enables international operations.",
        cluster: "Principles"
      },
      {
        id: "ec-038",
        code: "EC:112",
        name: "EC:112 (SP) – Explain impact of major trade alliances",
        description: "Describe how trade agreements affect business.",
        cluster: "Principles"
      },
      {
        id: "ec-039",
        code: "EC:113",
        name: "EC:113 (SP) – Describe impact of political environment on world trade",
        description: "Explain how government stability and policies affect trade.",
        cluster: "Principles"
      },
      {
        id: "ec-040",
        code: "EC:114",
        name: "EC:114 (SP) – Explain impact of geography on world trade",
        description: "Describe how location and natural features affect trade.",
        cluster: "Principles"
      },
      {
        id: "ec-041",
        code: "EC:115",
        name: "EC:115 (SP) – Describe impact of a country’s history on world trade",
        description: "Explain how historical events influence trade relationships.",
        cluster: "Principles"
      },
      {
        id: "ec-042",
        code: "EC:116",
        name: "EC:116 (SP) – Explain impact of economic development on world trade",
        description: "Describe how development level affects trade capacity.",
        cluster: "Principles"
      },
      {
        id: "ec-043",
        code: "EC:138",
        name: "EC:138 (SP) – Describe types of business models",
        description: "Explain different ways businesses create and deliver value.",
        cluster: "Principles"
      },
      {
        id: "ec-044",
        code: "EC:140",
        name: "EC:140 (SP) – Discuss impact of bribery and foreign monetary payments",
        description: "Explain how unethical payments affect business and trade.",
        cluster: "Principles"
      },
      {
        id: "ec-045",
        code: "EC:141",
        name: "EC:141 (SP) – Identify requirements for international business travel",
        description: "Describe documents and preparations needed for global travel.",
        cluster: "Principles"
      },
  {
    "id": "en-001",
    "code": "EN:001",
    "name": "EN:001 - Foundational concept in EN",
    "description": "Foundational concept in Entrepreneurship.",
    "cluster": "Principles"
  },
  {
    "id": "en-002",
    "code": "EN:002",
    "name": "EN:002 - Foundational concept in EN",
    "description": "Foundational concept in Entrepreneurship.",
    "cluster": "Principles"
  },
  {
    "id": "en-003",
    "code": "EN:003",
    "name": "EN:003 - Foundational concept in EN",
    "description": "Foundational concept in Entrepreneurship.",
    "cluster": "Principles"
  },
  {
    "id": "en-004",
    "code": "EN:004",
    "name": "EN:004 - Foundational concept in EN",
    "description": "Foundational concept in Entrepreneurship.",
    "cluster": "Principles"
  },
  {
    "id": "en-005",
    "code": "EN:005",
    "name": "EN:005 - Foundational concept in EN",
    "description": "Foundational concept in Entrepreneurship.",
    "cluster": "Principles"
  },
  {
    "id": "en-006",
    "code": "EN:006",
    "name": "EN:006 - Foundational concept in EN",
    "description": "Foundational concept in Entrepreneurship.",
    "cluster": "Principles"
  },
  {
    "id": "en-007",
    "code": "EN:007",
    "name": "EN:007 - Foundational concept in EN",
    "description": "Foundational concept in Entrepreneurship.",
    "cluster": "Principles"
  },
  {
    "id": "en-008",
    "code": "EN:008",
    "name": "EN:008 - Foundational concept in EN",
    "description": "Foundational concept in Entrepreneurship.",
    "cluster": "Principles"
  },
  {
    "id": "en-009",
    "code": "EN:009",
    "name": "EN:009 - Foundational concept in EN",
    "description": "Foundational concept in Entrepreneurship.",
    "cluster": "Principles"
  },
  {
    "id": "en-010",
    "code": "EN:010",
    "name": "EN:010 - Foundational concept in EN",
    "description": "Foundational concept in Entrepreneurship.",
    "cluster": "Principles"
  },
  {
    "id": "fi-001",
    "code": "FI:001",
    "name": "FI:001 - Explain the role of finance in business",
    "description": "Foundational concept in Financial Analysis.",
    "cluster": "Principles"
  },
  {
    "id": "fi-002",
    "code": "FI:002",
    "name": "FI:002 - Explain the nature of financial needs",
    "description": "Foundational concept in Financial Analysis.",
    "cluster": "Principles"
  },
  {
    "id": "fi-003",
    "code": "FI:003",
    "name": "FI:003 - Foundational concept in FI",
    "description": "Foundational concept in Financial Analysis.",
    "cluster": "Principles"
  },
  {
    "id": "fi-004",
    "code": "FI:004",
    "name": "FI:004 - Foundational concept in FI",
    "description": "Foundational concept in Financial Analysis.",
    "cluster": "Principles"
  },
  {
    "id": "fi-005",
    "code": "FI:005",
    "name": "FI:005 - Foundational concept in FI",
    "description": "Foundational concept in Financial Analysis.",
    "cluster": "Principles"
  },
  {
    "id": "fi-006",
    "code": "FI:006",
    "name": "FI:006 - Foundational concept in FI",
    "description": "Foundational concept in Financial Analysis.",
    "cluster": "Principles"
  },
  {
    "id": "fi-007",
    "code": "FI:007",
    "name": "FI:007 - Foundational concept in FI",
    "description": "Foundational concept in Financial Analysis.",
    "cluster": "Principles"
  },
  {
    "id": "fi-008",
    "code": "FI:008",
    "name": "FI:008 - Foundational concept in FI",
    "description": "Foundational concept in Financial Analysis.",
    "cluster": "Principles"
  },
  {
    "id": "fi-009",
    "code": "FI:009",
    "name": "FI:009 - Foundational concept in FI",
    "description": "Foundational concept in Financial Analysis.",
    "cluster": "Principles"
  },
  {
    "id": "fi-010",
    "code": "FI:010",
    "name": "FI:010 - Foundational concept in FI",
    "description": "Foundational concept in Financial Analysis.",
    "cluster": "Principles"
  },
  {
    "id": "fi-011",
    "code": "FI:011",
    "name": "FI:011 - Foundational concept in FI",
    "description": "Foundational concept in Financial Analysis.",
    "cluster": "Principles"
  },
  {
    "id": "fi-012",
    "code": "FI:012",
    "name": "FI:012 - Foundational concept in FI",
    "description": "Foundational concept in Financial Analysis.",
    "cluster": "Principles"
  },
  {
    "id": "fi-013",
    "code": "FI:013",
    "name": "FI:013 - Foundational concept in FI",
    "description": "Foundational concept in Financial Analysis.",
    "cluster": "Principles"
  },
  {
    "id": "fi-014",
    "code": "FI:014",
    "name": "FI:014 - Foundational concept in FI",
    "description": "Foundational concept in Financial Analysis.",
    "cluster": "Principles"
  },
  {
    "id": "fi-015",
    "code": "FI:015",
    "name": "FI:015 - Foundational concept in FI",
    "description": "Foundational concept in Financial Analysis.",
    "cluster": "Principles"
  },
  {
    "id": "fi-016",
    "code": "FI:016",
    "name": "FI:016 - Foundational concept in FI",
    "description": "Foundational concept in Financial Analysis.",
    "cluster": "Principles"
  },
  {
    "id": "fi-017",
    "code": "FI:017",
    "name": "FI:017 - Foundational concept in FI",
    "description": "Foundational concept in Financial Analysis.",
    "cluster": "Principles"
  },
  {
    "id": "fi-018",
    "code": "FI:018",
    "name": "FI:018 - Foundational concept in FI",
    "description": "Foundational concept in Financial Analysis.",
    "cluster": "Principles"
  },
  {
    "id": "fi-019",
    "code": "FI:019",
    "name": "FI:019 - Foundational concept in FI",
    "description": "Foundational concept in Financial Analysis.",
    "cluster": "Principles"
  },
  {
    "id": "fi-020",
    "code": "FI:020",
    "name": "FI:020 - Foundational concept in FI",
    "description": "Foundational concept in Financial Analysis.",
    "cluster": "Principles"
  },
  {
    "id": "fi-021",
    "code": "FI:021",
    "name": "FI:021 - Foundational concept in FI",
    "description": "Foundational concept in Financial Analysis.",
    "cluster": "Principles"
  },
  {
    "id": "fi-022",
    "code": "FI:022",
    "name": "FI:022 - Foundational concept in FI",
    "description": "Foundational concept in Financial Analysis.",
    "cluster": "Principles"
  },
  {
    "id": "fi-023",
    "code": "FI:023",
    "name": "FI:023 - Foundational concept in FI",
    "description": "Foundational concept in Financial Analysis.",
    "cluster": "Principles"
  },
  {
    "id": "fi-024",
    "code": "FI:024",
    "name": "FI:024 - Foundational concept in FI",
    "description": "Foundational concept in Financial Analysis.",
    "cluster": "Principles"
  },
  {
    "id": "fi-025",
    "code": "FI:025",
    "name": "FI:025 - Foundational concept in FI",
    "description": "Foundational concept in Financial Analysis.",
    "cluster": "Principles"
  },
  {
    "id": "hr-001",
    "code": "HR:001",
    "name": "HR:001 - Explain the role of human resources management",
    "description": "Foundational concept in Human Resources Management.",
    "cluster": "Principles"
  },
  {
    "id": "hr-002",
    "code": "HR:002",
    "name": "HR:002 - Foundational concept in HR",
    "description": "Foundational concept in Human Resources Management.",
    "cluster": "Principles"
  },
  {
    "id": "hr-003",
    "code": "HR:003",
    "name": "HR:003 - Foundational concept in HR",
    "description": "Foundational concept in Human Resources Management.",
    "cluster": "Principles"
  },
  {
    "id": "hr-004",
    "code": "HR:004",
    "name": "HR:004 - Foundational concept in HR",
    "description": "Foundational concept in Human Resources Management.",
    "cluster": "Principles"
  },
  {
    "id": "hr-005",
    "code": "HR:005",
    "name": "HR:005 - Foundational concept in HR",
    "description": "Foundational concept in Human Resources Management.",
    "cluster": "Principles"
  },
  {
    "id": "hr-006",
    "code": "HR:006",
    "name": "HR:006 - Foundational concept in HR",
    "description": "Foundational concept in Human Resources Management.",
    "cluster": "Principles"
  },
  {
    "id": "hr-007",
    "code": "HR:007",
    "name": "HR:007 - Foundational concept in HR",
    "description": "Foundational concept in Human Resources Management.",
    "cluster": "Principles"
  },
  {
    "id": "hr-008",
    "code": "HR:008",
    "name": "HR:008 - Foundational concept in HR",
    "description": "Foundational concept in Human Resources Management.",
    "cluster": "Principles"
  },
  {
    "id": "hr-009",
    "code": "HR:009",
    "name": "HR:009 - Foundational concept in HR",
    "description": "Foundational concept in Human Resources Management.",
    "cluster": "Principles"
  },
  {
    "id": "hr-010",
    "code": "HR:010",
    "name": "HR:010 - Foundational concept in HR",
    "description": "Foundational concept in Human Resources Management.",
    "cluster": "Principles"
  },
  {
    "id": "nf-001",
    "code": "NF:001",
    "name": "NF:001 - Describe the nature of business records",
    "description": "Foundational concept in Information Management.",
    "cluster": "Principles"
  },
  {
    "id": "nf-002",
    "code": "NF:002",
    "name": "NF:002 - Foundational concept in NF",
    "description": "Foundational concept in Information Management.",
    "cluster": "Principles"
  },
  {
    "id": "nf-003",
    "code": "NF:003",
    "name": "NF:003 - Foundational concept in NF",
    "description": "Foundational concept in Information Management.",
    "cluster": "Principles"
  },
  {
    "id": "nf-004",
    "code": "NF:004",
    "name": "NF:004 - Foundational concept in NF",
    "description": "Foundational concept in Information Management.",
    "cluster": "Principles"
  },
  {
    "id": "nf-005",
    "code": "NF:005",
    "name": "NF:005 - Foundational concept in NF",
    "description": "Foundational concept in Information Management.",
    "cluster": "Principles"
  },
  {
    "id": "nf-006",
    "code": "NF:006",
    "name": "NF:006 - Foundational concept in NF",
    "description": "Foundational concept in Information Management.",
    "cluster": "Principles"
  },
  {
    "id": "nf-007",
    "code": "NF:007",
    "name": "NF:007 - Foundational concept in NF",
    "description": "Foundational concept in Information Management.",
    "cluster": "Principles"
  },
  {
    "id": "nf-008",
    "code": "NF:008",
    "name": "NF:008 - Foundational concept in NF",
    "description": "Foundational concept in Information Management.",
    "cluster": "Principles"
  },
  {
    "id": "nf-009",
    "code": "NF:009",
    "name": "NF:009 - Foundational concept in NF",
    "description": "Foundational concept in Information Management.",
    "cluster": "Principles"
  },
  {
    "id": "nf-010",
    "code": "NF:010",
    "name": "NF:010 - Foundational concept in NF",
    "description": "Foundational concept in Information Management.",
    "cluster": "Principles"
  },
  {
    "id": "nf-011",
    "code": "NF:011",
    "name": "NF:011 - Foundational concept in NF",
    "description": "Foundational concept in Information Management.",
    "cluster": "Principles"
  },
  {
    "id": "nf-012",
    "code": "NF:012",
    "name": "NF:012 - Foundational concept in NF",
    "description": "Foundational concept in Information Management.",
    "cluster": "Principles"
  },
  {
    "id": "nf-013",
    "code": "NF:013",
    "name": "NF:013 - Foundational concept in NF",
    "description": "Foundational concept in Information Management.",
    "cluster": "Principles"
  },
  {
    "id": "nf-014",
    "code": "NF:014",
    "name": "NF:014 - Foundational concept in NF",
    "description": "Foundational concept in Information Management.",
    "cluster": "Principles"
  },
  {
    "id": "nf-015",
    "code": "NF:015",
    "name": "NF:015 - Foundational concept in NF",
    "description": "Foundational concept in Information Management.",
    "cluster": "Principles"
  },
  {
    "id": "nf-016",
    "code": "NF:016",
    "name": "NF:016 - Foundational concept in NF",
    "description": "Foundational concept in Information Management.",
    "cluster": "Principles"
  },
  {
    "id": "nf-017",
    "code": "NF:017",
    "name": "NF:017 - Foundational concept in NF",
    "description": "Foundational concept in Information Management.",
    "cluster": "Principles"
  },
  {
    "id": "nf-018",
    "code": "NF:018",
    "name": "NF:018 - Foundational concept in NF",
    "description": "Foundational concept in Information Management.",
    "cluster": "Principles"
  },
  {
    "id": "nf-019",
    "code": "NF:019",
    "name": "NF:019 - Foundational concept in NF",
    "description": "Foundational concept in Information Management.",
    "cluster": "Principles"
  },
  {
    "id": "nf-020",
    "code": "NF:020",
    "name": "NF:020 - Foundational concept in NF",
    "description": "Foundational concept in Information Management.",
    "cluster": "Principles"
  },
  {
    "id": "mk-001",
    "code": "MK:001",
    "name": "MK:001 - Explain the nature and scope of marketing",
    "description": "Explain the nature and scope of marketing in a business environment.",
    "cluster": "Principles"
  },
  {
    "id": "mk-002",
    "code": "MK:002",
    "name": "MK:002 - Foundational concept in MK",
    "description": "Foundational concept in Marketing.",
    "cluster": "Principles"
  },
  {
    "id": "mk-003",
    "code": "MK:003",
    "name": "MK:003 - Foundational concept in MK",
    "description": "Foundational concept in Marketing.",
    "cluster": "Principles"
  },
  {
    "id": "mk-004",
    "code": "MK:004",
    "name": "MK:004 - Foundational concept in MK",
    "description": "Foundational concept in Marketing.",
    "cluster": "Principles"
  },
  {
    "id": "mk-005",
    "code": "MK:005",
    "name": "MK:005 - Foundational concept in MK",
    "description": "Foundational concept in Marketing.",
    "cluster": "Principles"
  },
  {
    "id": "mk-006",
    "code": "MK:006",
    "name": "MK:006 - Foundational concept in MK",
    "description": "Foundational concept in Marketing.",
    "cluster": "Principles"
  },
  {
    "id": "mk-007",
    "code": "MK:007",
    "name": "MK:007 - Foundational concept in MK",
    "description": "Foundational concept in Marketing.",
    "cluster": "Principles"
  },
  {
    "id": "mk-008",
    "code": "MK:008",
    "name": "MK:008 - Foundational concept in MK",
    "description": "Foundational concept in Marketing.",
    "cluster": "Principles"
  },
  {
    "id": "mk-009",
    "code": "MK:009",
    "name": "MK:009 - Foundational concept in MK",
    "description": "Foundational concept in Marketing.",
    "cluster": "Principles"
  },
  {
    "id": "mk-010",
    "code": "MK:010",
    "name": "MK:010 - Foundational concept in MK",
    "description": "Foundational concept in Marketing.",
    "cluster": "Principles"
  },
  {
    "id": "op-001",
    "code": "OP:001",
    "name": "OP:001 - Explain the nature and scope of operations management",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-002",
    "code": "OP:002",
    "name": "OP:002 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-003",
    "code": "OP:003",
    "name": "OP:003 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-004",
    "code": "OP:004",
    "name": "OP:004 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-005",
    "code": "OP:005",
    "name": "OP:005 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-006",
    "code": "OP:006",
    "name": "OP:006 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-007",
    "code": "OP:007",
    "name": "OP:007 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-008",
    "code": "OP:008",
    "name": "OP:008 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-009",
    "code": "OP:009",
    "name": "OP:009 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-010",
    "code": "OP:010",
    "name": "OP:010 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-011",
    "code": "OP:011",
    "name": "OP:011 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-012",
    "code": "OP:012",
    "name": "OP:012 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-013",
    "code": "OP:013",
    "name": "OP:013 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-014",
    "code": "OP:014",
    "name": "OP:014 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-015",
    "code": "OP:015",
    "name": "OP:015 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-016",
    "code": "OP:016",
    "name": "OP:016 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-017",
    "code": "OP:017",
    "name": "OP:017 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-018",
    "code": "OP:018",
    "name": "OP:018 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-019",
    "code": "OP:019",
    "name": "OP:019 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-020",
    "code": "OP:020",
    "name": "OP:020 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-021",
    "code": "OP:021",
    "name": "OP:021 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-022",
    "code": "OP:022",
    "name": "OP:022 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-023",
    "code": "OP:023",
    "name": "OP:023 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-024",
    "code": "OP:024",
    "name": "OP:024 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-025",
    "code": "OP:025",
    "name": "OP:025 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-026",
    "code": "OP:026",
    "name": "OP:026 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-027",
    "code": "OP:027",
    "name": "OP:027 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-028",
    "code": "OP:028",
    "name": "OP:028 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-029",
    "code": "OP:029",
    "name": "OP:029 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "op-030",
    "code": "OP:030",
    "name": "OP:030 - Foundational concept in OP",
    "description": "Foundational concept in Operations.",
    "cluster": "Principles"
  },
  {
    "id": "pd-001",
    "code": "PD:001",
    "name": "PD:001 - Explain the concept of self-esteem",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-002",
    "code": "PD:002",
    "name": "PD:002 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-003",
    "code": "PD:003",
    "name": "PD:003 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-004",
    "code": "PD:004",
    "name": "PD:004 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-005",
    "code": "PD:005",
    "name": "PD:005 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-006",
    "code": "PD:006",
    "name": "PD:006 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-007",
    "code": "PD:007",
    "name": "PD:007 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-008",
    "code": "PD:008",
    "name": "PD:008 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-009",
    "code": "PD:009",
    "name": "PD:009 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-010",
    "code": "PD:010",
    "name": "PD:010 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-011",
    "code": "PD:011",
    "name": "PD:011 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-012",
    "code": "PD:012",
    "name": "PD:012 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-013",
    "code": "PD:013",
    "name": "PD:013 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-014",
    "code": "PD:014",
    "name": "PD:014 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-015",
    "code": "PD:015",
    "name": "PD:015 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-016",
    "code": "PD:016",
    "name": "PD:016 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-017",
    "code": "PD:017",
    "name": "PD:017 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-018",
    "code": "PD:018",
    "name": "PD:018 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-019",
    "code": "PD:019",
    "name": "PD:019 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-020",
    "code": "PD:020",
    "name": "PD:020 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-021",
    "code": "PD:021",
    "name": "PD:021 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-022",
    "code": "PD:022",
    "name": "PD:022 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-023",
    "code": "PD:023",
    "name": "PD:023 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-024",
    "code": "PD:024",
    "name": "PD:024 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-025",
    "code": "PD:025",
    "name": "PD:025 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-026",
    "code": "PD:026",
    "name": "PD:026 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-027",
    "code": "PD:027",
    "name": "PD:027 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-028",
    "code": "PD:028",
    "name": "PD:028 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-029",
    "code": "PD:029",
    "name": "PD:029 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "pd-030",
    "code": "PD:030",
    "name": "PD:030 - Foundational concept in PD",
    "description": "Foundational concept in Professional Development.",
    "cluster": "Principles"
  },
  {
    "id": "sm-001",
    "code": "SM:001",
    "name": "SM:001 - Explain the concept of strategic management",
    "description": "Foundational concept in Strategic Management.",
    "cluster": "Principles"
  },
  {
    "id": "sm-002",
    "code": "SM:002",
    "name": "SM:002 - Foundational concept in SM",
    "description": "Foundational concept in Strategic Management.",
    "cluster": "Principles"
  },
  {
    "id": "sm-003",
    "code": "SM:003",
    "name": "SM:003 - Foundational concept in SM",
    "description": "Foundational concept in Strategic Management.",
    "cluster": "Principles"
  },
  {
    "id": "sm-004",
    "code": "SM:004",
    "name": "SM:004 - Foundational concept in SM",
    "description": "Foundational concept in Strategic Management.",
    "cluster": "Principles"
  },
  {
    "id": "sm-005",
    "code": "SM:005",
    "name": "SM:005 - Foundational concept in SM",
    "description": "Foundational concept in Strategic Management.",
    "cluster": "Principles"
  },
  {
    "id": "sm-006",
    "code": "SM:006",
    "name": "SM:006 - Foundational concept in SM",
    "description": "Foundational concept in Strategic Management.",
    "cluster": "Principles"
  },
  {
    "id": "sm-007",
    "code": "SM:007",
    "name": "SM:007 - Foundational concept in SM",
    "description": "Foundational concept in Strategic Management.",
    "cluster": "Principles"
  },
  {
    "id": "sm-008",
    "code": "SM:008",
    "name": "SM:008 - Foundational concept in SM",
    "description": "Foundational concept in Strategic Management.",
    "cluster": "Principles"
  },
  {
    "id": "sm-009",
    "code": "SM:009",
    "name": "SM:009 - Foundational concept in SM",
    "description": "Foundational concept in Strategic Management.",
    "cluster": "Principles"
  },
  {
    "id": "sm-010",
    "code": "SM:010",
    "name": "SM:010 - Foundational concept in SM",
    "description": "Foundational concept in Strategic Management.",
    "cluster": "Principles"
  },
  {
    "id": "sm-011",
    "code": "SM:011",
    "name": "SM:011 - Foundational concept in SM",
    "description": "Foundational concept in Strategic Management.",
    "cluster": "Principles"
  },
  {
    "id": "sm-012",
    "code": "SM:012",
    "name": "SM:012 - Foundational concept in SM",
    "description": "Foundational concept in Strategic Management.",
    "cluster": "Principles"
  },
  {
    "id": "sm-013",
    "code": "SM:013",
    "name": "SM:013 - Foundational concept in SM",
    "description": "Foundational concept in Strategic Management.",
    "cluster": "Principles"
  },
  {
    "id": "sm-014",
    "code": "SM:014",
    "name": "SM:014 - Foundational concept in SM",
    "description": "Foundational concept in Strategic Management.",
    "cluster": "Principles"
  },
  {
    "id": "sm-015",
    "code": "SM:015",
    "name": "SM:015 - Foundational concept in SM",
    "description": "Foundational concept in Strategic Management.",
    "cluster": "Principles"
  },
  {
    "id": "sm-016",
    "code": "SM:016",
    "name": "SM:016 - Foundational concept in SM",
    "description": "Foundational concept in Strategic Management.",
    "cluster": "Principles"
  },
  {
    "id": "sm-017",
    "code": "SM:017",
    "name": "SM:017 - Foundational concept in SM",
    "description": "Foundational concept in Strategic Management.",
    "cluster": "Principles"
  },
  {
    "id": "sm-018",
    "code": "SM:018",
    "name": "SM:018 - Foundational concept in SM",
    "description": "Foundational concept in Strategic Management.",
    "cluster": "Principles"
  },
  {
    "id": "sm-019",
    "code": "SM:019",
    "name": "SM:019 - Foundational concept in SM",
    "description": "Foundational concept in Strategic Management.",
    "cluster": "Principles"
  },
  {
    "id": "sm-020",
    "code": "SM:020",
    "name": "SM:020 - Foundational concept in SM",
    "description": "Foundational concept in Strategic Management.",
    "cluster": "Principles"
  },
  {
    "id": "sm-021",
    "code": "SM:021",
    "name": "SM:021 - Foundational concept in SM",
    "description": "Foundational concept in Strategic Management.",
    "cluster": "Principles"
  },
  {
    "id": "sm-022",
    "code": "SM:022",
    "name": "SM:022 - Foundational concept in SM",
    "description": "Foundational concept in Strategic Management.",
    "cluster": "Principles"
  },
  {
    "id": "sm-023",
    "code": "SM:023",
    "name": "SM:023 - Foundational concept in SM",
    "description": "Foundational concept in Strategic Management.",
    "cluster": "Principles"
  }
],
    practiceTests: [
      { id: 'icdc-2016', name: '2016 ICDC Principles Exam', questions: ICDC_2016_EXAM, pdfUrl: 'https://www.deca.org/wp-content/uploads/2021/07/BA_Core_Exam_2016.pdf' },
      { id: 'icdc-2018', name: '2018 ICDC Principles Exam', questions: ICDC_2018_EXAM, pdfUrl: 'https://www.deca.org/wp-content/uploads/2021/07/BA_Core_Exam_2018.pdf' },
      { id: 'icdc-2013', name: '2013 ICDC Principles Exam', questions: ICDC_2013_EXAM, pdfUrl: 'https://www.deca.org/wp-content/uploads/2021/07/BA_Core_Exam_2013.pdf' },
      { id: 'icdc-2011', name: '2011 ICDC Principles Exam', questions: ICDC_2011_EXAM, pdfUrl: 'https://www.deca.org/wp-content/uploads/2021/07/BA_Core_Exam_2011.pdf' },
      { id: 'icdc-2010', name: '2010 ICDC Principles Exam', questions: ICDC_2010_EXAM, pdfUrl: 'https://www.deca.org/wp-content/uploads/2021/07/BA_Core_Exam_2010.pdf' },
      { id: 'icdc-2024', name: '2024 ICDC Principles Exam', questions: ICDC_2024_EXAM, pdfUrl: 'https://www.deca.org/wp-content/uploads/2024/07/BA_Core_Exam_2024.pdf' },
      { id: 'icdc-2022', name: '2022 ICDC Principles Exam', questions: ICDC_2022_EXAM, pdfUrl: 'https://www.deca.org/wp-content/uploads/2022/07/BA_Core_Exam_2022.pdf' },
      { id: 'icdc-2020', name: '2020 ICDC Principles Exam', questions: ICDC_2020_EXAM, pdfUrl: 'https://www.deca.org/wp-content/uploads/2021/07/BA_Core_Exam_2020.pdf' },
      { id: 'icdc-2015', name: '2015 ICDC Principles Exam', questions: ICDC_2015_EXAM, pdfUrl: 'https://www.deca.org/wp-content/uploads/2021/07/BA_Core_Exam_2015.pdf' },
      { id: 'icdc-2012', name: '2012 ICDC Principles Exam', questions: ICDC_2012_EXAM, pdfUrl: 'https://www.deca.org/wp-content/uploads/2021/07/BA_Core_Exam_2012.pdf' }
    ],
    flashcards: [
      { id: 'bl-163-fc', term: 'BL:163 (CS) – Comply with the spirit and intent of laws and regulations', definition: 'Definition: Follow both the written law and its intended purpose to ensure ethical business practices.\nKey Points:\n - Laws exist to protect consumers, employees, and businesses\n - Ethical compliance goes beyond loopholes\n - Builds trust and avoids legal consequences' },
      { id: 'bl-067-fc', term: 'BL:067 (SP) – Discuss the nature of law and sources of law in the United States', definition: 'Definition: Explain what laws are and where they originate in the U.S. legal system.\nKey Points:\n - Constitutional law: based on the U.S. Constitution\n - Statutory law: laws passed by legislatures\n - Administrative law: rules made by government agencies\n - Case (common) law: court decisions and precedents' },
      { id: 'bl-068-fc', term: 'BL:068 (SP) – Describe the United States\' judicial system', definition: 'Definition: Explain how courts are structured and how legal cases are resolved.\nKey Points:\n - Federal vs. state court systems\n - Trial courts, appellate courts, Supreme Court\n - Civil cases involve disputes; criminal cases involve crimes' },
      { id: 'bl-051-fc', term: 'BL:051 (SP) – Describe methods used to protect intellectual property', definition: 'Definition: Explain legal protections for ideas, creations, and inventions.\nKey Points:\n - Trademarks protect names, logos, slogans\n - Copyrights protect written and creative works\n - Patents protect inventions\n - Trade secrets protect confidential business information' },
      { id: 'bl-001-fc', term: 'BL:001 (SP) – Describe legal issues affecting businesses', definition: 'Definition: Identify common legal challenges businesses face.\nKey Points:\n - Contract disputes\n - Employment and labor laws\n - Consumer protection laws\n - Liability and negligence issues' },
      { id: 'bl-069-fc', term: 'BL:069 (SP) – Identify the basic torts relating to business enterprises', definition: 'Definition: Explain civil wrongs that can result in lawsuits against businesses.\nKey Points:\n - Negligence (failure to act responsibly)\n - Fraud (intentional deception)\n - Defamation (false statements harming reputation)\n - Product liability' },
      { id: 'bl-002-fc', term: 'BL:002 (SP) – Describe the nature of legally binding contracts', definition: 'Definition: Explain what makes a contract valid and enforceable.\nKey Points:\n - Offer and acceptance\n - Consideration (something of value)\n - Legal purpose\n - Parties must have legal capacity' },
      { id: 'bl-070-fc', term: 'BL:070 (SP) – Describe the nature of legal procedure', definition: 'Definition: Explain the steps used to resolve legal disputes.\nKey Points:\n - Filing a complaint\n - Discovery process\n - Trial and verdict\n - Appeals' },
      { id: 'bl-071-fc', term: 'BL:071 (SP) – Discuss the nature of debtor-creditor relationships', definition: 'Definition: Explain the legal relationship between borrowers and lenders.\nKey Points:\n - Loans and credit agreements\n - Interest and repayment terms\n - Default and bankruptcy' },
      { id: 'bl-072-fc', term: 'BL:072 (SP) – Explain the nature of agency relationships', definition: 'Definition: Describe situations where one party acts on behalf of another.\nKey Points:\n - Principal and agent roles\n - Authority and responsibility\n - Liability for agent actions' },
      { id: 'bl-073-fc', term: 'BL:073 (SP) – Discuss the nature of environmental law', definition: 'Definition: Explain laws designed to protect the environment from business harm.\nKey Points:\n - Pollution control\n - Waste disposal regulations\n - Sustainability compliance' },
      { id: 'bl-074-fc', term: 'BL:074 (SP) – Discuss the role of administrative law', definition: 'Definition: Explain laws created and enforced by government agencies.\nKey Points:\n - Agency regulations\n - Enforcement powers\n - Business compliance requirements' },
      { id: 'bl-003-fc', term: 'BL:003 (CS) – Explain types of business ownership', definition: 'Definition: Describe common legal forms of business ownership.\nKey Points:\n - Sole proprietorship\n - Partnership\n - Corporation\n - Limited liability company (LLC)' },
      { id: 'bl-145-fc', term: 'BL:145 (SP) – Explain the nature of import/export law', definition: 'Definition: Explain laws governing international trade.\nKey Points:\n - Trade agreements\n - Tariffs and quotas\n - Compliance with foreign laws' },
      { id: 'bl-126-fc', term: 'BL:126 (SP) – Describe the nature of customs regulations', definition: 'Definition: Explain rules for moving goods across national borders.\nKey Points:\n - Inspections\n - Duties and taxes\n - Documentation requirements' },
      { id: 'co-054-fc', term: 'CO:054 (PQ) – Identify sources that provide relevant, valid written material', definition: 'Definition: Locate credible and accurate written sources that can be used to complete tasks or make informed decisions.\nKey Points:\n - Use credible sources such as manuals, reports, or official websites\n - Check publication date and authorship for reliability\n - Avoid using unverified or biased information' },
      { id: 'co-055-fc', term: 'CO:055 (PQ) – Extract relevant information from written materials', definition: 'Definition: Identify and select key information from written documents that is directly useful for tasks or decisions.\nKey Points:\n - Focus on facts, instructions, and critical details\n - Ignore irrelevant or repetitive information\n - Summarize clearly for easier use in tasks' },
      { id: 'co-056-fc', term: 'CO:056 (PQ) – Apply written directions to achieve tasks', definition: 'Definition: Follow instructions from written documents accurately to complete assignments or processes.\nKey Points:\n - Read the entire instruction before starting\n - Break steps into manageable actions\n - Check results against directions for accuracy' },
      { id: 'co-057-fc', term: 'CO:057 (CS) – Analyze company resources to ascertain policies and procedures', definition: 'Definition: Review internal documents and materials to understand and apply company rules and procedures.\nKey Points:\n - Compare documents with actual practices\n - Identify inconsistencies or missing procedures\n - Communicate findings when clarifying workplace actions' },
      { id: 'co-082-fc', term: 'CO:082 (PQ) – Explain communication techniques that support and encourage a speaker', definition: 'Definition: Recognize and use strategies that make speakers feel heard and understood.\nKey Points:\n - Use verbal acknowledgments like “I see” or “That makes sense”\n - Maintain eye contact and nod appropriately\n - Ask clarifying questions to confirm understanding' },
      { id: 'co-119-fc', term: 'CO:119 (PQ) – Follow oral directions', definition: 'Definition: Listen carefully and carry out spoken instructions accurately.\nKey Points:\n - Focus fully on the speaker without interrupting\n - Repeat instructions mentally or in notes\n - Verify completion by checking against the instructions' },
      { id: 'co-017-fc', term: 'CO:017 (PQ) – Demonstrate active listening skills', definition: 'Definition: Show understanding through verbal and nonverbal feedback.\nKey Points:\n - Paraphrase or summarize what was said\n - Ask relevant follow-up questions\n - Show attention through gestures and expressions' },
      { id: 'co-147-fc', term: 'CO:147 (PQ) – Explain the nature of effective verbal communications', definition: 'Definition: Communicate clearly, respectfully, and appropriately for the situation.\nKey Points:\n - Speak concisely and logically\n - Avoid slang or jargon when unnecessary\n - Maintain a professional tone' },
      { id: 'co-058-fc', term: 'CO:058 (PQ) – Ask relevant questions', definition: 'Definition: Seek additional information or clarification to improve understanding.\nKey Points:\n - Focus on information that affects tasks or decisions\n - Avoid irrelevant or off-topic questions\n - Use open-ended or specific questions as needed' },
      { id: 'co-059-fc', term: 'CO:059 (PQ) – Interpret others’ nonverbal cues', definition: 'Definition: Understand meaning from body language, facial expressions, and tone.\nKey Points:\n - Observe posture, gestures, and expressions\n - Match nonverbal signals with verbal communication\n - Adjust response based on perceived emotions' },
      { id: 'co-060-fc', term: 'CO:060 (PQ) – Provide legitimate responses to inquiries', definition: 'Definition: Answer questions accurately and professionally.\nKey Points:\n - Base answers on facts, policies, or procedures\n - Avoid guessing or giving false information\n - Maintain polite and professional tone' },
      { id: 'co-083-fc', term: 'CO:083 (PQ) – Give verbal directions', definition: 'Definition: Convey instructions clearly to ensure tasks are completed correctly.\nKey Points:\n - Use sequential and logical order\n - Speak clearly and at an understandable pace\n - Confirm understanding by asking for feedback' },
      { id: 'co-084-fc', term: 'CO:084 (CS) – Employ communication styles appropriate to target audience', definition: 'Definition: Adjust verbal communication based on the audience’s role or knowledge.\nKey Points:\n - Use technical terms with experts, simple language with clients\n - Consider age, culture, or experience of listeners\n - Match tone to situation (formal vs informal)' },
      { id: 'co-061-fc', term: 'CO:061 (CS) – Defend ideas objectively', definition: 'Definition: Present and support ideas using facts and reasoning rather than emotion.\nKey Points:\n - Provide evidence and examples\n - Listen to counterarguments without interruption\n - Maintain professional and calm demeanor' },
      { id: 'co-114-fc', term: 'CO:114 (CS) – Handle telephone calls in a businesslike manner', definition: 'Definition: Communicate effectively and professionally over the phone.\nKey Points:\n - Identify yourself and your company clearly\n - Speak clearly, politely, and concisely\n - Take notes and confirm important details' },
      { id: 'co-053-fc', term: 'CO:053 (CS) – Participate in group discussions', definition: 'Definition: Contribute ideas, listen, and collaborate in team settings.\nKey Points:\n - Share insights relevant to the discussion\n - Respect other participants’ opinions\n - Stay focused on group goals' },
      { id: 'co-201-fc', term: 'CO:201 (SP) – Facilitate (lead) group discussions', definition: 'Definition: Guide discussion toward objectives while encouraging participation.\nKey Points:\n - Summarize points and ask for input\n - Keep discussion on track and manage time\n - Encourage quieter members to contribute' },
      { id: 'co-025-fc', term: 'CO:025 (SP) – Make oral presentations', definition: 'Definition: Present information clearly and confidently to an audience.\nKey Points:\n - Organize content logically (intro, body, conclusion)\n - Maintain eye contact and professional posture\n - Use visuals or props effectively' },
      { id: 'co-085-fc', term: 'CO:085 (CS) – Utilize note-taking strategies', definition: 'Definition: Apply methods to efficiently capture and organize information for later use.\nKey Points:\n - Use bullet points, headings, and symbols for clarity\n - Focus on key facts, figures, and instructions\n - Review and clarify notes after meetings or research' },
      { id: 'co-086-fc', term: 'CO:086 (CS) – Organize information', definition: 'Definition: Structure information logically to make it easy to understand and use.\nKey Points:\n - Group related items together\n - Use headings, numbering, or outlines\n - Ensure order reflects importance or sequence of tasks' },
      { id: 'co-087-fc', term: 'CO:087 (CS) – Select and use appropriate graphic aids', definition: 'Definition: Choose visuals that enhance understanding of information.\nKey Points:\n - Use charts, graphs, tables, or diagrams\n - Match visuals to audience knowledge and task requirements\n - Keep graphics clear and not overly complex' },
      { id: 'co-016-fc', term: 'CO:016 (CS) – Explain the nature of effective written communications', definition: 'Definition: Communicate ideas clearly, concisely, and professionally in writing.\nKey Points:\n - Use correct grammar, punctuation, and spelling\n - Be concise and organized\n - Tailor tone for formal or informal context' },
      { id: 'co-088-fc', term: 'CO:088 (CS) – Select and utilize appropriate formats for professional writing', definition: 'Definition: Choose the correct structure and style for emails, letters, or reports.\nKey Points:\n - Follow proper formatting rules for letters, memos, and reports\n - Include headings, salutations, and closings appropriately\n - Ensure readability and professional appearance' },
      { id: 'co-089-fc', term: 'CO:089 (CS) – Edit and revise written work consistent with professional standards', definition: 'Definition: Review writing for accuracy, clarity, and professionalism.\nKey Points:\n - Correct spelling, grammar, and punctuation errors\n - Improve clarity, conciseness, and tone\n - Ensure content is logical and organized' },
      { id: 'co-090-fc', term: 'CO:090 (CS) – Write professional emails', definition: 'Definition: Compose clear, polite, and concise email messages.\nKey Points:\n - Use clear subject lines\n - Begin with greeting, end with closing\n - Include all necessary details for the recipient' },
      { id: 'co-133-fc', term: 'CO:133 (CS) – Write business letters', definition: 'Definition: Compose formal letters using standard business conventions.\nKey Points:\n - Use proper heading, date, recipient, body, and closing\n - Maintain professional tone throughout\n - Clearly communicate purpose and any requested actions' },
      { id: 'co-039-fc', term: 'CO:039 (CS) – Write informational messages', definition: 'Definition: Convey facts or instructions clearly in written form.\nKey Points:\n - Focus on clarity and relevance\n - Organize information logically\n - Include deadlines or important details if applicable' },
      { id: 'co-040-fc', term: 'CO:040 (CS) – Write inquiries', definition: 'Definition: Request information or clarification politely and professionally.\nKey Points:\n - Clearly state what information is needed\n - Provide context to make the request understandable\n - Use courteous and formal language' },
      { id: 'co-031-fc', term: 'CO:031 (SP) – Write persuasive messages', definition: 'Definition: Influence the reader to take action using reasoning and evidence.\nKey Points:\n - Present logical arguments supported by facts\n - Appeal to audience needs or values\n - End with clear call-to-action' },
      { id: 'co-091-fc', term: 'CO:091 (SP) – Write executive summaries', definition: 'Definition: Summarize key points from longer reports or analyses for management.\nKey Points:\n - Highlight critical findings and recommendations\n - Keep summary concise and organized\n - Focus on information relevant to decision-making' },
      { id: 'co-094-fc', term: 'CO:094 (SP) – Prepare simple written reports', definition: 'Definition: Present information in structured written form for clarity and understanding.\nKey Points:\n - Include introduction, body, and conclusion\n - Use headings, bullet points, or tables for clarity\n - Ensure accuracy and professionalism' },
      { id: 'co-202-fc', term: 'CO:202 (SP) – Explain how digital communications expose business to risk', definition: 'Definition: Identify potential legal, security, and reputational risks of digital communication.\nKey Points:\n - Understand confidentiality and privacy issues\n - Avoid sharing sensitive or unverified information\n - Follow company policies and guidelines' },
      { id: 'co-203-fc', term: 'CO:203 (SP) – Adapt written correspondence to targeted audiences', definition: 'Definition: Adjust style, tone, and content to meet the needs of the intended audience.\nKey Points:\n - Consider audience knowledge and expectations\n - Use appropriate formality and language\n - Emphasize key points relevant to audience' },
      { id: 'co-204-fc', term: 'CO:204 (SP) – Use data visualization techniques', definition: 'Definition: Present information visually to enhance understanding and analysis.\nKey Points:\n - Use charts, graphs, or infographics effectively\n - Match visuals to the type of data and audience\n - Keep visuals clear and uncluttered' },
      { id: 'co-205-fc', term: 'CO:205 (CS) – Describe the impact of a person\'s social media brand on the achievement of organizational objectives', definition: 'Definition: Understand how an individual’s professional social media presence can affect a company’s reputation and goals.\nKey Points:\n - Professional online behavior reflects on the organization\n - Positive social media can enhance trust and brand image\n - Negative or careless posts can harm company credibility' },
      { id: 'co-206-fc', term: 'CO:206 (CS) – Distinguish between using social media for business and personal purposes', definition: 'Definition: Recognize the difference between professional and personal social media use to protect company interests.\nKey Points:\n - Maintain separate accounts for personal and business purposes\n - Follow company guidelines for professional social media content\n - Avoid posting confidential or sensitive business information' },
      { id: 'co-014-fc', term: 'CO:014 (CS) – Explain the nature of staff communication', definition: 'Definition: Share and receive information among staff to ensure clarity, understanding, and teamwork.\nKey Points:\n - Clear communication improves productivity and reduces errors\n - Encourage open dialogue and questions\n - Ensure all team members understand goals and responsibilities' },
      { id: 'co-092-fc', term: 'CO:092 (CS) – Choose and use appropriate channel for workplace communication', definition: 'Definition: Select the best method to communicate messages effectively in the workplace.\nKey Points:\n - Use email for formal communication, chat for quick updates, meetings for complex topics\n - Consider urgency, confidentiality, and audience needs\n - Adjust communication channel to context and effectiveness' },
      { id: 'co-063-fc', term: 'CO:063 (CS) – Participate in a staff meeting', definition: 'Definition: Engage actively and constructively in team or staff meetings.\nKey Points:\n - Contribute relevant ideas and feedback\n - Listen to others and respect their input\n - Take notes and clarify information when needed' },
      { id: 'co-067-fc', term: 'CO:067 (CS) – Participate in problem-solving groups', definition: 'Definition: Work collaboratively with others to identify problems and develop solutions.\nKey Points:\n - Brainstorm ideas and evaluate options objectively\n - Support team decisions and contribute actively\n - Focus on solutions rather than assigning blame' },
      { id: 'cr-001-fc', term: 'CR:001 (CS) – Identify company’s brand promise', definition: 'Definition: Recognize the company’s commitment to customers.\nKey Points:\n - Reflects company values and service standards\n - Guides employee behavior\n - Sets customer expectations' },
      { id: 'cr-002-fc', term: 'CR:002 (CS) – Determine ways of reinforcing the company’s image through employee performance', definition: 'Definition: Identify actions employees take to support the brand image.\nKey Points:\n - Professional appearance and behavior\n - Consistent service quality\n - Positive communication with customers' },
      { id: 'cr-003-fc', term: 'CR:003 (CS) – Explain the nature of positive customer relations', definition: 'Definition: Describe how respectful, helpful interactions create customer satisfaction and loyalty.\nKey Points:\n - Focuses on meeting and exceeding customer expectations\n - Builds trust, loyalty, and repeat business\n - Enhances the company’s reputation and image' },
      { id: 'cr-004-fc', term: 'CR:004 (CS) – Demonstrate a customer service mindset', definition: 'Definition: Show an attitude focused on helping customers and solving their problems.\nKey Points:\n - Be courteous, patient, and attentive\n - Prioritize customer needs\n - Take ownership of customer concerns' },
      { id: 'cr-005-fc', term: 'CR:005 (CS) – Reinforce service orientation through communication', definition: 'Definition: Use verbal and nonverbal communication to show commitment to service quality.\nKey Points:\n - Speak clearly and respectfully\n - Use positive tone and language\n - Thank customers and show appreciation' },
      { id: 'cr-006-fc', term: 'CR:006 (CS) – Respond to customer inquiries', definition: 'Definition: Provide accurate and helpful answers to customer questions.\nKey Points:\n - Listen carefully to understand the question\n - Give clear, honest, and complete responses\n - Refer customers to appropriate resources if needed' },
      { id: 'cr-007-fc', term: 'CR:007 (CS) – Interpret business policies to customers/clients', definition: 'Definition: Explain company rules and procedures clearly to customers.\nKey Points:\n - Use simple, understandable language\n - Remain polite even if policies are restrictive\n - Ensure explanations align with company guidelines' },
      { id: 'cr-009-fc', term: 'CR:009 (CS) – Handle difficult customers', definition: 'Definition: Manage challenging customer interactions calmly and professionally.\nKey Points:\n - Stay patient and respectful\n - Listen without interrupting\n - Focus on resolving the issue, not arguing' },
      { id: 'cr-010-fc', term: 'CR:010 (CS) – Handle customer/client complaints', definition: 'Definition: Address customer dissatisfaction to restore trust and satisfaction.\nKey Points:\n - Acknowledge the complaint\n - Apologize when appropriate\n - Offer solutions that align with company policy' },
      { id: 'cr-016-fc', term: 'CR:016 (SP) – Discuss the nature of customer relationship management (CRM)', definition: 'Definition: Explain how businesses manage interactions with customers to improve relationships.\nKey Points:\n - Focuses on customer satisfaction and retention\n - Uses data to track customer preferences\n - Helps personalize service and marketing' },
      { id: 'cr-017-fc', term: 'CR:017 (SP) – Explain the role of ethics in customer relationship management', definition: 'Definition: Describe the importance of ethical behavior in managing customer relationships.\nKey Points:\n - Protect customer privacy and data\n - Be honest and transparent\n - Build trust through ethical practices' },
      { id: 'cr-018-fc', term: 'CR:018 (SP) – Describe the use of technology in customer relationship management', definition: 'Definition: Explain how digital tools support customer relationship efforts.\nKey Points:\n - CRM software stores customer data\n - Technology improves communication and follow-up\n - Enhances efficiency and customer satisfaction' },
      { id: 'cr-019-fc', term: 'CR:019 (CS) – Adapt communication to the cultural and social differences among clients', definition: 'Definition: Adjust communication style to respect diverse backgrounds.\nKey Points:\n - Be aware of cultural norms and preferences\n - Avoid assumptions or stereotypes\n - Use inclusive and respectful language' },
      { id: 'cr-029-fc', term: 'CR:029 (CS) – Develop rapport with customers', definition: 'Definition: Establish a friendly, comfortable relationship with customers.\nKey Points:\n - Use polite greetings and positive body language\n - Show genuine interest in customer needs\n - Personalize interactions when appropriate' },
      { id: 'cr-030-fc', term: 'CR:030 (SP) – Build and maintain relationships with customers', definition: 'Definition: Develop long-term connections that encourage customer loyalty.\nKey Points:\n - Follow up after sales or service\n - Provide consistent, reliable service\n - Address concerns promptly and professionally' },
      { id: 'ec-001-fc', term: 'EC:001 (CS) – Describe the concepts of economics and economic activities', definition: 'Definition: Recognize the difference between tangible products and intangible activities that satisfy needs and wants.\nKey Points:\n - Goods are physical objects (e.g., smartphones, cars)\n - Services are actions performed by others (e.g., haircuts, repairs)\n - Both satisfy consumer needs and wants' },
      { id: 'ec-002-fc', term: 'EC:002 (CS) – Distinguish between economic goods and services', definition: 'Definition: Understand the inputs used to produce goods and services (factors of production).\nKey Points:\n - Natural resources (land, minerals)\n - Human resources (labor, skills)\n - Capital resources (tools, machinery, buildings)' },
      { id: 'ec-003-fc', term: 'EC:003 (CS) – Explain the concept of economic resources', definition: 'Definition: Understand how people and societies make choices to satisfy needs and wants with limited resources.\nKey Points:\n - Economics is the study of scarcity and choice\n - Economic activities include production, distribution, and consumption\n - Focus on how resources are allocated to meet needs' },
      { id: 'ec-004-fc', term: 'EC:004 (CS) – Determine economic utilities created by business activities', definition: 'Definition: Identify how businesses add value to products to satisfy consumer needs.\nKey Points:\n - Form utility (changing raw materials into products)\n - Place utility (having products where customers want them)\n - Time utility (having products when customers want them)\n - Possession utility (making it easy to buy products)' },
      { id: 'ec-005-fc', term: 'EC:005 (CS) – Explain the principles of supply and demand', definition: 'Definition: Understand how the interaction of buyers and sellers determines market price and quantity.\nKey Points:\n - Law of Demand: Price up, quantity demanded down\n - Law of Supply: Price up, quantity supplied up\n - Equilibrium: Where supply and demand meet' },
      { id: 'ec-006-fc', term: 'EC:006 (CS) – Describe the functions of prices in markets', definition: 'Definition: Understand how the value of a product is expressed in monetary terms.\nKey Points:\n - Price is determined by supply, demand, and costs\n - Price signals information to buyers and sellers\n - Price affects consumer purchasing decisions' },
      { id: 'ec-007-fc', term: 'EC:007 (CS) – Explain the types of economic systems', definition: 'Definition: Understand the monetary gain after all expenses are subtracted from revenue.\nKey Points:\n - Profit = Total Revenue - Total Expenses\n - Profit rewards risk-taking and innovation\n - Profit is essential for business growth and survival' },
      { id: 'ec-008-fc', term: 'EC:008 (CS) – Determine the relationship between government and business', definition: 'Definition: Understand how government regulations and policies affect business operations.\nKey Points:\n - Government provides infrastructure and legal framework\n - Regulations protect consumers, workers, and environment\n - Taxes and subsidies influence business decisions' },
      { id: 'ec-009-fc', term: 'EC:009 (CS) – Explain the concept of private enterprise', definition: 'Definition: Understand the struggle between businesses to attract customers and increase market share.\nKey Points:\n - Price competition (lower prices)\n - Non-price competition (quality, service, branding)\n - Competition leads to better products and lower prices' },
      { id: 'ec-010-fc', term: 'EC:010 (CS) – Identify factors affecting a business’s profit', definition: 'Definition: Measure the efficiency of production by comparing output to input.\nKey Points:\n - Productivity = Output / Input\n - Higher productivity reduces costs and increases profit\n - Driven by technology, training, and better management' },
      { id: 'ec-011-fc', term: 'EC:011 (CS) – Determine factors affecting business risk', definition: 'Definition: Understand the role of labor unions and their impact on business operations.\nKey Points:\n - Unions negotiate for better wages, benefits, and working conditions\n - Collective bargaining is the process of negotiation between unions and employers\n - Unions can affect business costs and flexibility' },
      { id: 'ec-012-fc', term: 'EC:012 (CS) – Explain the concept of competition', definition: 'Definition: Understand the exchange of goods and services between countries.\nKey Points:\n - Global trade allows countries to access products they cannot produce efficiently\n - Imports are goods bought from other countries; exports are goods sold to them\n - Trade is influenced by comparative advantage and trade barriers' },
      { id: 'ec-013-fc', term: 'EC:013 (CS) – Explain the concept of productivity', definition: 'Definition: Understand how cultural, political, and economic factors affect global business.\nKey Points:\n - Cultural factors include language, customs, and values\n - Political factors include stability, laws, and trade agreements\n - Economic factors include exchange rates, inflation, and infrastructure' },
      { id: 'ec-014-fc', term: 'EC:014 (SP) – Analyze impact of specialization/division of labor on productivity', definition: 'Definition: Understand how technology facilitates global business interactions and transactions.\nKey Points:\n - Internet and email enable instant global communication\n - E-commerce platforms allow businesses to reach global customers easily\n - Digital tools reduce costs of international business' },
      { id: 'ec-015-fc', term: 'EC:015 (SP) – Explain the concept of organized labor and business', definition: 'Definition: Understand the function of the WTO in regulating and promoting international trade.\nKey Points:\n - WTO sets rules for global trade and settles disputes\n - WTO aims to reduce trade barriers and promote free trade\n - WTO provides a forum for trade negotiations' },
      { id: 'ec-016-fc', term: 'EC:016 (SP) – Explain the nature of global trade', definition: 'Definition: Understand the moral principles and standards that guide business behavior.\nKey Points:\n - Ethics involves doing what is right and fair\n - Ethical behavior builds trust with stakeholders\n - Businesses have social responsibilities beyond profit' },
      { id: 'ec-017-fc', term: 'EC:017 (SP) – Explain the concept of Gross Domestic Product (GDP)', definition: 'Definition: Understand the value of the next best alternative given up when making a choice.\nKey Points:\n - Every choice has an opportunity cost\n - Opportunity cost helps in evaluating trade-offs\n - Focus on the benefits of the alternative not chosen' },
      { id: 'ec-018-fc', term: 'EC:018 (SP) – Determine the impact of business cycles on business activities', definition: 'Definition: Understand that resources are limited while human wants are unlimited.\nKey Points:\n - Scarcity is the basic economic problem\n - Scarcity forces individuals and societies to make choices\n - Scarcity affects the price and availability of resources' },
      { id: 'ec-019-fc', term: 'EC:019 (PQ) – Explain the concept of economic resources', definition: 'Definition: Understand the inputs used to produce goods and services (factors of production).\nKey Points:\n - Natural resources (land, minerals)\n - Human resources (labor, skills)\n - Capital resources (tools, machinery, buildings)' },
      { id: 'ec-020-fc', term: 'EC:020 (PQ) – Describe the nature of taxes', definition: 'Definition: Understand the compulsory payments made to the government to fund public services.\nKey Points:\n - Taxes fund infrastructure, education, and safety\n - Different types of taxes (income, sales, property)\n - Taxes affect consumer spending and business investment' },
      { id: 'ec-021-fc', term: 'EC:070 (CS) – Explain the role of business in society', definition: 'Definition: Understand the operations and interactions of businesses on an international scale.\nKey Points:\n - Global business involves trade, investment, and production across borders\n - Globalization increases interconnectedness and competition\n - Businesses must adapt to different cultures, laws, and markets' },
      { id: 'ec-022-fc', term: 'EC:071 (CS) – Describe types of business activities', definition: 'Definition: Understand the factors that influence the value of one currency relative to another and how this affects the home country.\nKey Points:\n - Exchange rates are influenced by supply and demand for currencies\n - Factors include interest rates, inflation, and political stability\n - Exchange rate fluctuations affect the cost of imports and exports' },
      { id: 'ec-023-fc', term: 'EC:023 (SP) – Explain the impact of the law of diminishing returns', definition: 'Definition: Understand the compulsory payments made to the government to fund public services.\nKey Points:\n - Taxes fund infrastructure, education, and safety\n - Different types of taxes (income, sales, property)\n - Taxes affect consumer spending and business investment' },
      { id: 'ec-024-fc', term: 'EC:072 (SP) – Describe the nature of taxes', definition: 'Definition: Understand why countries specialize in producing goods and services they can create most efficiently.\nKey Points:\n - Comparative advantage is based on lower opportunity cost\n - Specialization and trade lead to increased global production and consumption\n - Countries benefit by trading for goods they cannot produce as efficiently' },
      { id: 'ec-025-fc', term: 'EC:081 (SP) – Discuss consumer spending as an economic indicator', definition: 'Definition: Understand the total value of all goods and services produced within a country in a specific period.\nKey Points:\n - GDP is a primary indicator of economic health\n - Components of GDP: Consumption, Investment, Government Spending, Net Exports\n - Real GDP adjusts for inflation to show actual growth' },
      { id: 'ec-026-fc', term: 'EC:082 (SP) – Discuss the impact of unemployment rates', definition: 'Definition: Understand the measure of the average change over time in the prices paid by consumers for a basket of goods and services.\nKey Points:\n - CPI is used to measure inflation\n - CPI affects purchasing power and cost of living\n - Businesses use CPI to adjust prices, wages, and contracts' },
      { id: 'ec-027-fc', term: 'EC:083 (SP) – Describe the economic impact of inflation on business', definition: 'Definition: Understand the state of being without a job while actively seeking employment.\nKey Points:\n - Types of unemployment: Frictional, Structural, Cyclical, Seasonal\n - Unemployment rate is a key economic indicator\n - High unemployment reduces consumer spending and economic growth' },
      { id: 'ec-028-fc', term: 'EC:084 (SP) – Explain the economic impact of interest-rate fluctuations', definition: 'Definition: Understand the general increase in prices and the fall in the purchasing value of money.\nKey Points:\n - Inflation reduces the purchasing power of consumers\n - Causes of inflation: Demand-pull, Cost-push\n - Moderate inflation is often seen as a sign of a healthy, growing economy' },
      { id: 'ec-029-fc', term: 'EC:100 (SP) – Describe determinants of exchange rates', definition: 'Definition: Understand the cost of borrowing money or the reward for saving it.\nKey Points:\n - Interest rates are determined by supply and demand for credit\n - Central banks influence interest rates through monetary policy\n - Interest rates affect consumer spending, business investment, and exchange rates' },
      { id: 'ec-030-fc', term: 'EC:103 (SP) – Explain the organizational design of businesses', definition: 'Definition: Understand the periodic expansions and contractions in economic activity.\nKey Points:\n - Phases of the business cycle: Expansion, Peak, Contraction (Recession), Trough\n - Business cycles are influenced by consumer spending, investment, and government policy\n - Businesses must adapt their strategies to different phases of the cycle' },
      { id: 'ec-031-fc', term: 'EC:104 (SP) – Discuss the global environment in which businesses operate', definition: 'Definition: Understand how the CPI is calculated and used to measure inflation.\nKey Points:\n - CPI tracks the price of a fixed “market basket” of goods and services\n - CPI is used to calculate the inflation rate\n - CPI affects cost-of-living adjustments and government policy' },
      { id: 'ec-032-fc', term: 'EC:105 (SP) – Describe factors that affect the business environment', definition: 'Definition: Understand the calculation and significance of GDP as an economic measure.\nKey Points:\n - GDP = Consumption + Investment + Government Spending + (Exports - Imports)\n - GDP measures the total output of an economy\n - GDP growth is a key goal for most governments' },
      { id: 'ec-033-fc', term: 'EC:106 (SP) – Explain the nature of business ethics', definition: 'Definition: Understand the causes and consequences of unemployment in an economy.\nKey Points:\n - Unemployment is caused by economic downturns, technological changes, and seasonal factors\n - Consequences include lost output, reduced tax revenue, and social problems\n - Governments use various policies to reduce unemployment' },
      { id: 'ec-034-fc', term: 'EC:107 (SP) – Explain how organizations adapt to today’s markets', definition: 'Definition: Understand the measurement and impact of inflation on the economy.\nKey Points:\n - Inflation is measured by the percentage change in a price index (like CPI)\n - Inflation affects interest rates, investment, and international competitiveness\n - Hyperinflation can lead to economic collapse' },
      { id: 'ec-035-fc', term: 'EC:109 (SP) – Discuss the impact of globalization on business', definition: 'Definition: Understand the factors that influence interest rates and their role in the economy.\nKey Points:\n - Interest rates are influenced by inflation expectations, risk, and liquidity\n - Central banks use interest rates as a tool of monetary policy\n - Interest rates affect the cost of borrowing for businesses and consumers' },
      { id: 'ec-036-fc', term: 'EC:110 (SP) – Explain cultural considerations in global business', definition: 'Definition: Understand the characteristics and causes of fluctuations in economic activity.\nKey Points:\n - Business cycles are characterized by changes in GDP, employment, and prices\n - Causes include changes in consumer confidence, investment, and external shocks\n - Governments use fiscal and monetary policy to smooth out business cycles' },
      { id: 'ec-037-fc', term: 'EC:111 (SP) – Describe impact of electronic communication tools on global business', definition: 'Definition: Understand the limitations and uses of the CPI as an economic indicator.\nKey Points:\n - CPI may not accurately reflect the cost of living for all individuals\n - CPI is used to adjust social security benefits and tax brackets\n - CPI is a key measure used by central banks to set monetary policy' },
      { id: 'ec-038-fc', term: 'EC:112 (PQ) – Explain the concept of Gross Domestic Product', definition: 'Definition: Understand the difference between GDP and other measures of national income.\nKey Points:\n - GDP measures production within a country\'s borders\n - GNP (Gross National Product) measures production by a country\'s citizens\n - GDP per capita is used to compare the standard of living between countries' },
      { id: 'ec-039-fc', term: 'EC:113 (SP) – Describe impact of political environment on world trade', definition: 'Definition: Understand the different ways unemployment is measured and its impact on the labor market.\nKey Points:\n - Unemployment rate is the percentage of the labor force that is unemployed\n - Labor force participation rate is also an important measure\n - Underemployment and discouraged workers are not captured in the standard unemployment rate' },
      { id: 'ec-040-fc', term: 'EC:114 (SP) – Explain impact of geography on world trade', definition: 'Definition: Understand the different types of inflation and their causes.\nKey Points:\n - Demand-pull inflation: Too much money chasing too few goods\n - Cost-push inflation: Rising production costs lead to higher prices\n - Anticipated vs. unanticipated inflation' },
      { id: 'ec-041-fc', term: 'EC:115 (SP) – Describe impact of a country’s history on world trade', definition: 'Definition: Understand the relationship between interest rates and the value of financial assets.\nKey Points:\n - Interest rates and bond prices are inversely related\n - Interest rates affect the present value of future cash flows\n - Changes in interest rates can lead to capital gains or losses for investors' },
      { id: 'ec-042-fc', term: 'EC:116 (SP) – Explain impact of economic development on world trade', definition: 'Definition: Understand the role of expectations and psychology in driving business cycles.\nKey Points:\n - Consumer and business confidence affect spending and investment\n - Self-fulfilling prophecies can amplify economic fluctuations\n - Psychological factors can lead to asset bubbles and crashes' },
      { id: 'ec-043-fc', term: 'EC:138 (SP) – Describe types of business models', definition: 'Definition: Understand the importance of productivity for economic growth and standard of living.\nKey Points:\n - Higher productivity leads to higher real incomes and better standard of living\n - Productivity growth is driven by technological progress and human capital investment\n - Productivity differences explain much of the variation in wealth between countries' },
      { id: 'ec-044-fc', term: 'EC:140 (SP) – Discuss impact of bribery and foreign monetary payments', definition: 'Definition: Understand the uses and misuses of GDP as a measure of economic performance.\nKey Points:\n - GDP is used to monitor economic growth and guide policy\n - GDP does not account for income inequality or quality of life\n - Alternative measures like the Human Development Index (HDI) provide a broader perspective' },
      { id: 'ec-045-fc', term: 'EC:141 (SP) – Identify requirements for international business travel', definition: 'Definition: Understand the impact of interest rates on the distribution of income and wealth.\nKey Points:\n - Changes in interest rates affect the income of savers and the costs for borrowers\n - Interest rates can influence the value of assets like housing and stocks\n - Monetary policy can have distributional effects on different groups in society' }
    ],
    events: [
  {
    "id": "pbm",
    "name": "Principles of Business Management and Administration",
    "category": "Principles",
    "description": "Focuses on the foundational concepts of business management and administration.",
    "flashcards": [],
    "roleplays": [],
    "videos": []
  },
  {
    "id": "pfn",
    "name": "Principles of Finance",
    "category": "Principles",
    "description": "Focuses on the foundational concepts of finance and financial services.",
    "flashcards": [],
    "roleplays": [],
    "videos": []
  },
  {
    "id": "pht",
    "name": "Principles of Hospitality and Tourism",
    "category": "Principles",
    "description": "Focuses on the foundational concepts of hospitality and tourism.",
    "flashcards": [],
    "roleplays": [],
    "videos": []
  },
  {
    "id": "pmk",
    "name": "Principles of Marketing",
    "category": "Principles",
    "description": "Focuses on the foundational concepts of marketing and sales.",
    "flashcards": [],
    "roleplays": [],
    "videos": []
  },
  {
    "id": "pent",
    "name": "Principles of Entrepreneurship",
    "category": "Principles",
    "description": "Focuses on the foundational concepts of entrepreneurship and small business management.",
    "flashcards": [],
    "roleplays": [],
    "videos": []
  }
],
    piPdfUrl: 'https://www.deca.org/wp-content/uploads/2021/08/DECA_Business_Administration_Core_Performance_Indicators.pdf'
  },
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'Focuses on the pricing, promotion, and distribution of products.',
    color: 'bg-[#0073BB]',
    performanceIndicators: [
      { id: 'mk-001', code: 'MK:001', name: 'Explain marketing and its importance in a global economy', description: 'Describe marketing as the process of creating, communicating, and delivering value to customers.', cluster: 'Marketing' },
      { id: 'mk-002', code: 'MK:002', name: 'Describe marketing functions and related activities', description: 'Explain key activities involved in marketing products and services.', cluster: 'Marketing' },
      { id: 'mk-003', code: 'MK:003', name: 'Explain the concept of marketing strategies', description: 'Describe the plans used to reach marketing goals.', cluster: 'Marketing' },
      { id: 'mk-004', code: 'MK:004', name: 'Explain the concept of market segmentation', description: 'Describe dividing a broad market into smaller groups of consumers.', cluster: 'Marketing' },
      { id: 'mk-005', code: 'MK:005', name: 'Explain the nature of marketing planning', description: 'Describe the process of setting marketing goals.', cluster: 'Marketing' },
      { id: 'mk-006', code: 'MK:006', name: 'Explain the nature of marketing-information management', description: 'Describe the process of gathering and using data for marketing decisions.', cluster: 'Marketing' },
      { id: 'mk-007', code: 'MK:007', name: 'Explain the role of ethics in marketing', description: 'Describe moral principles that guide marketing practices.', cluster: 'Marketing' },
      { id: 'mk-008', code: 'MK:008', name: 'Describe the use of technology in the marketing function', description: 'Explain how digital tools improve marketing efficiency.', cluster: 'Marketing' },
      { id: 'mk-009', code: 'MK:009', name: 'Explain the nature of marketing research', description: 'Describe the systematic gathering of data about a market.', cluster: 'Marketing' },
      { id: 'mk-010', code: 'MK:010', name: 'Describe the marketing-research process', description: 'Explain the steps involved in conducting market research.', cluster: 'Marketing' },
      { id: 'mk-011', code: 'MK:011', name: 'Explain the nature of sales forecasts', description: 'Describe predictions of future sales levels.', cluster: 'Marketing' },
      { id: 'mk-012', code: 'MK:012', name: 'Explain the nature of marketing plans', description: 'Describe written documents that outline marketing strategies.', cluster: 'Marketing' },
      { id: 'mk-013', code: 'MK:013', name: 'Explain the concept of marketing-mix', description: 'Describe the combination of product, price, place, and promotion.', cluster: 'Marketing' },
      { id: 'mk-014', code: 'MK:014', name: 'Explain the nature and scope of the pricing function', description: 'Discuss how prices are set and their impact on the marketing mix.', cluster: 'Marketing' },
      { id: 'mk-015', code: 'MK:015', name: 'Explain the nature and scope of the product/service management function', description: 'Describe the process of developing and managing products.', cluster: 'Marketing' },
      { id: 'mk-019', code: 'MK:019', name: 'Explain the nature and scope of the promotion function', description: 'Discuss how businesses communicate with customers.', cluster: 'Marketing' },
      { id: 'mk-021', code: 'MK:021', name: 'Explain the nature and scope of the selling function', description: 'Describe the process of helping customers make buying decisions.', cluster: 'Marketing' },
      { id: 'mk-022', code: 'MK:022', name: 'Explain the nature and scope of the channel management function', description: 'Discuss how products move from producer to consumer.', cluster: 'Marketing' },
      { id: 'mk-023', code: 'MK:023', name: 'Explain the nature of channel-member relationships', description: 'Describe how different businesses in a channel interact.', cluster: 'Marketing' },
      { id: 'mk-024', code: 'MK:024', name: 'Explain the nature of channels of distribution', description: 'Describe the paths products take to reach the consumer.', cluster: 'Marketing' },
      { id: 'mk-025', code: 'MK:025', name: 'Explain the nature of channel management', description: 'Describe the process of managing distribution channels.', cluster: 'Marketing' },
      { id: 'mk-026', code: 'MK:026', name: 'Describe the use of technology in the channel management function', description: 'Explain how digital tools improve distribution.', cluster: 'Marketing' },
      { id: 'mk-027', code: 'MK:027', name: 'Explain the nature of channel-member relationships', description: 'Describe how members of a distribution channel work together.', cluster: 'Marketing' },
      { id: 'mk-028', code: 'MK:028', name: 'Explain legal considerations in channel management', description: 'Describe laws that affect distribution practices.', cluster: 'Marketing' },
      { id: 'mk-029', code: 'MK:029', name: 'Explain the nature of channel management', description: 'Describe the strategic management of distribution channels.', cluster: 'Marketing' },
      { id: 'mk-030', code: 'MK:030', name: 'Describe the use of technology in the channel management function', description: 'Explain how software improves supply chain visibility.', cluster: 'Marketing' },
      { id: 'mk-031', code: 'MK:031', name: 'Explain the nature of marketing-information management', description: 'Describe the process of managing marketing data.', cluster: 'Marketing' },
      { id: 'mk-032', code: 'MK:032', name: 'Identify the role of ethics in marketing-information management', description: 'Describe moral principles in data handling.', cluster: 'Marketing' },
      { id: 'mk-033', code: 'MK:033', name: 'Describe the use of technology in the marketing-information management function', description: 'Explain how digital tools support data management.', cluster: 'Marketing' },
      { id: 'mk-034', code: 'MK:034', name: 'Explain the nature of marketing research', description: 'Describe the systematic gathering of market data.', cluster: 'Marketing' },
      { id: 'mk-035', code: 'MK:035', name: 'Explain the nature of marketing research design', description: 'Describe the plan for conducting market research.', cluster: 'Marketing' },
      { id: 'mk-036', code: 'MK:036', name: 'Describe data-collection methods', description: 'Explain how market data is gathered.', cluster: 'Marketing' },
      { id: 'mk-037', code: 'MK:037', name: 'Explain the nature of sampling', description: 'Describe the process of selecting a subset of a population.', cluster: 'Marketing' },
      { id: 'mk-038', code: 'MK:038', name: 'Explain the nature of data analysis', description: 'Describe the process of interpreting market research results.', cluster: 'Marketing' },
      { id: 'mk-039', code: 'MK:039', name: 'Explain the nature of marketing research reports', description: 'Describe how research findings are communicated.', cluster: 'Marketing' },
      { id: 'mk-040', code: 'MK:040', name: 'Explain the nature of marketing plans', description: 'Describe the strategic documents used in marketing.', cluster: 'Marketing' },
      { id: 'mk-041', code: 'MK:041', name: 'Explain the nature of marketing strategies', description: 'Describe the long-term plans for reaching marketing goals.', cluster: 'Marketing' },
      { id: 'mk-042', code: 'MK:042', name: 'Explain the nature of market segmentation', description: 'Describe the process of dividing a market into groups.', cluster: 'Marketing' },
      { id: 'mk-043', code: 'MK:043', name: 'Explain the nature of target marketing', description: 'Describe focusing marketing efforts on specific groups.', cluster: 'Marketing' },
      { id: 'mk-044', code: 'MK:044', name: 'Explain the nature of positioning', description: 'Describe how a brand is perceived relative to competitors.', cluster: 'Marketing' },
      { id: 'mk-045', code: 'MK:045', name: 'Explain the nature of branding', description: 'Describe the process of creating a unique identity for a product.', cluster: 'Marketing' },
      { id: 'co-054', code: 'CO:054', name: 'Identify sources that provide relevant, valid written material', description: 'Locate credible and accurate written sources.', cluster: 'Marketing' },
      { id: 'cr-003', code: 'CR:003', name: 'Explain the nature of positive customer relations', description: 'Describe how respectful interactions create satisfaction.', cluster: 'Marketing' },
      { id: 'ei-001', code: 'EI:001', name: 'Describe the nature of emotional intelligence', description: 'Understand and manage emotions.', cluster: 'Marketing' },
      { id: 'mk-046', code: 'MK:046', name: 'Explain the nature of marketing research', description: 'Describe the systematic gathering of market data.', cluster: 'Marketing' },
      { id: 'mk-047', code: 'MK:047', name: 'Explain the nature of marketing planning', description: 'Describe the process of setting marketing goals.', cluster: 'Marketing' },
      { id: 'mk-048', code: 'MK:048', name: 'Explain the nature of marketing-information management', description: 'Describe gathering and using data for decisions.', cluster: 'Marketing' },
      { id: 'mk-049', code: 'MK:049', name: 'Explain the nature of product/service management', description: 'Describe developing and maintaining products.', cluster: 'Marketing' },
      { id: 'mk-050', code: 'MK:050', name: 'Explain the nature of pricing', description: 'Describe determining the value of products.', cluster: 'Marketing' },
      { id: 'mk-051', code: 'MK:051', name: 'Explain the nature of promotion', description: 'Describe communicating with target audiences.', cluster: 'Marketing' },
      { id: 'mk-052', code: 'MK:052', name: 'Explain the nature of channel management', description: 'Describe moving products from producer to consumer.', cluster: 'Marketing' },
      { id: 'mk-053', code: 'MK:053', name: 'Explain the nature of selling', description: 'Describe the process of helping customers buy.', cluster: 'Marketing' },
      { id: 'mk-054', code: 'MK:054', name: 'Explain the nature of marketing strategies', description: 'Describe plans used to reach marketing goals.', cluster: 'Marketing' },
      { id: 'mk-055', code: 'MK:055', name: 'Explain the nature of market segmentation', description: 'Describe dividing markets into smaller groups.', cluster: 'Marketing' },
      { id: 'mk-056', code: 'MK:056', name: 'Explain the nature of target marketing', description: 'Describe focusing on specific customer groups.', cluster: 'Marketing' },
      { id: 'mk-057', code: 'MK:057', name: 'Explain the nature of positioning', description: 'Describe creating a specific image for a brand.', cluster: 'Marketing' },
      { id: 'mk-058', code: 'MK:058', name: 'Explain the nature of branding', description: 'Describe creating a unique identity for a product.', cluster: 'Marketing' },
      { id: 'mk-059', code: 'MK:059', name: 'Explain the nature of product life cycles', description: 'Describe the stages a product goes through.', cluster: 'Marketing' },
      { id: 'mk-060', code: 'MK:060', name: 'Explain the nature of marketing-mix', description: 'Describe the 4 Ps of marketing.', cluster: 'Marketing' }
    ],
    practiceTests: [
      {
        id: 'mkt-test-1',
        name: 'Marketing Cluster Exam',
        questions: [
          {
            id: 'q1',
            text: 'Which of the following is an example of a marketing function?',
            options: ['Accounting', 'Pricing', 'Human Resources', 'Production'],
            correctAnswer: 1,
            explanation: 'Pricing is one of the core marketing functions, along with product management, promotion, distribution, and selling.',
            performanceIndicatorId: 'pi-m1',
            reference: 'Marketing Essentials'
          }
        ]
      }
    ],
    flashcards: [
      { id: 'mf1', term: 'Marketing Mix', definition: 'The 4 Ps: Product, Price, Place, and Promotion.' }
    ],
    events: [
      { 
        id: 'pmk', 
        name: 'Principles of Marketing', 
        category: 'Principles of Business Administration', 
        description: 'Introductory marketing event for first-year DECA members.', 
        flashcards: [], 
        roleplays: [],
        videos: []
      },
      { 
        id: 'aam', 
        name: 'Apparel and Accessories Marketing Series', 
        category: 'Individual Series', 
        description: 'The Apparel and Accessories Marketing Series event includes role-plays focused on the marketing and management functions in businesses that sell clothing and accessories.', 
        flashcards: [], 
        roleplays: [
          {
            id: 'aam-rp-1',
            title: 'Inventory Management Crisis',
            scenario: 'You are the manager of a high-end boutique. A shipment of seasonal items has arrived damaged just before a major sale. Explain how you will handle the situation with the vendor and the customers.',
            performanceIndicators: [],
            exampleSolution: 'Focus on immediate communication with the vendor for replacements and offering pre-orders or discounts to affected customers.'
          }
        ],
        videos: [
          { id: 'v1', title: 'AAM Roleplay Tips', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
          { id: 'v2', title: 'Winning Presentation Strategies', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
        ]
      },
      { 
        id: 'asm', 
        name: 'Automotive Services Marketing Series', 
        category: 'Individual Series', 
        description: 'Marketing for automotive services, focusing on customer service and technical knowledge.', 
        flashcards: [], 
        roleplays: [],
        videos: []
      },
      { 
        id: 'bsm', 
        name: 'Business Services Marketing Series', 
        category: 'Individual Series', 
        description: 'Marketing for business services, including B2B strategies.', 
        flashcards: [], 
        roleplays: [],
        videos: []
      },
      { 
        id: 'btdm', 
        name: 'Buying and Merchandising Team Decision Making', 
        category: 'Team Decision Making', 
        description: 'Team event for buying and merchandising, focusing on product selection and vendor relations.', 
        flashcards: [], 
        roleplays: [],
        videos: []
      },
      { 
        id: 'fms', 
        name: 'Food Marketing Series', 
        category: 'Individual Series', 
        description: 'Marketing for food products in retail and wholesale environments.', 
        flashcards: [], 
        roleplays: [],
        videos: []
      },
      { 
        id: 'imce', 
        name: 'Integrated Marketing Campaign-Event', 
        category: 'Integrated Marketing Campaign', 
        description: 'Developing a comprehensive marketing campaign for a specific event.', 
        flashcards: [], 
        roleplays: [],
        videos: []
      },
      { 
        id: 'imcp', 
        name: 'Integrated Marketing Campaign-Product', 
        category: 'Integrated Marketing Campaign', 
        description: 'Developing a comprehensive marketing campaign for a specific product.', 
        flashcards: [], 
        roleplays: [],
        videos: []
      },
      { 
        id: 'imcs', 
        name: 'Integrated Marketing Campaign-Service', 
        category: 'Integrated Marketing Campaign', 
        description: 'Developing a comprehensive marketing campaign for a specific service.', 
        flashcards: [], 
        roleplays: [],
        videos: []
      },
      { 
        id: 'mcs', 
        name: 'Marketing Communications Series', 
        category: 'Individual Series', 
        description: 'Marketing communications, public relations, and advertising strategies.', 
        flashcards: [], 
        roleplays: [],
        videos: []
      },
      { 
        id: 'mtdm', 
        name: 'Marketing Management Team Decision Making', 
        category: 'Team Decision Making', 
        description: 'Team event for strategic marketing management and decision making.', 
        flashcards: [], 
        roleplays: [],
        videos: []
      },
      { 
        id: 'pse', 
        name: 'Professional Selling', 
        category: 'Professional Selling and Consulting', 
        description: 'A sales presentation event where you pitch a product or service to a judge.', 
        flashcards: [], 
        roleplays: [],
        videos: []
      },
      { 
        id: 'rms', 
        name: 'Retail Merchandising Series', 
        category: 'Individual Series', 
        description: 'Marketing and management in a retail environment.', 
        flashcards: [], 
        roleplays: [],
        videos: []
      },
      { 
        id: 'sem', 
        name: 'Sports and Entertainment Marketing Series', 
        category: 'Individual Series', 
        description: 'Marketing for sports teams, athletes, and entertainment venues.', 
        flashcards: [], 
        roleplays: [],
        videos: []
      },
      { 
        id: 'stdm', 
        name: 'Sports and Entertainment Marketing Team Decision Making', 
        category: 'Team Decision Making', 
        description: 'Team event for sports and entertainment marketing strategies.', 
        flashcards: [], 
        roleplays: [],
        videos: []
      },
      { 
        id: 'bmor', 
        name: 'Buying and Merchandising Operations Research', 
        category: 'Business Operations Research', 
        description: 'Research project focusing on buying and merchandising operations.', 
        flashcards: [], 
        roleplays: [],
        videos: []
      },
      { 
        id: 'seor', 
        name: 'Sports and Entertainment Marketing Operations Research', 
        category: 'Business Operations Research', 
        description: 'Research project focusing on sports and entertainment marketing operations.', 
        flashcards: [], 
        roleplays: [],
        videos: []
      }
    ],
    piPdfUrl: 'https://www.deca.org/wp-content/uploads/2021/08/DECA_Marketing_Performance_Indicators.pdf'
  },
  {
    id: 'finance',
    name: 'Finance',
    description: 'Focuses on money management, investment, and accounting.',
    color: 'bg-[#0073BB]',
    performanceIndicators: [
      { id: 'fi-001', code: 'FI:001', name: 'Explain the nature of financial needs', description: 'Understanding personal and business financial requirements.', cluster: 'Finance' },
      { id: 'fi-064', code: 'FI:064', name: 'Explain the nature of investment', description: 'Describe the process of putting money into assets to earn a return.', cluster: 'Finance' },
      { id: 'fi-065', code: 'FI:065', name: 'Explain the nature of capital investment', description: 'Describe spending on long-term assets like equipment or buildings.', cluster: 'Finance' },
      { id: 'fi-066', code: 'FI:066', name: 'Explain the nature of financial statements', description: 'Describe reports that summarize a company\'s financial performance.', cluster: 'Finance' },
      { id: 'fi-067', code: 'FI:067', name: 'Describe the nature of budgets', description: 'Explain plans for managing income and expenses.', cluster: 'Finance' },
      { id: 'fi-068', code: 'FI:068', name: 'Explain the nature of taxes', description: 'Discuss the purpose and types of taxes businesses must pay.', cluster: 'Finance' },
      { id: 'fi-572', code: 'FI:572', name: 'Explain the nature of balance sheets', description: 'Describe the purpose and components of a balance sheet.', cluster: 'Finance' },
      { id: 'fi-002', code: 'FI:002', name: 'Explain the nature of income statements', description: 'Describe the purpose and components of an income statement.', cluster: 'Finance' },
      { id: 'fi-003', code: 'FI:003', name: 'Explain the nature of cash flow statements', description: 'Describe the purpose and components of a cash flow statement.', cluster: 'Finance' },
      { id: 'fi-004', code: 'FI:004', name: 'Explain the nature of financial analysis', description: 'Describe the process of evaluating financial data.', cluster: 'Finance' },
      { id: 'fi-005', code: 'FI:005', name: 'Explain the nature of financial risk management', description: 'Describe strategies to mitigate financial threats.', cluster: 'Finance' },
      { id: 'fi-006', code: 'FI:006', name: 'Explain the nature of financial markets', description: 'Describe the platforms where financial assets are traded.', cluster: 'Finance' },
      { id: 'fi-007', code: 'FI:007', name: 'Explain the nature of financial institutions', description: 'Describe organizations that provide financial services.', cluster: 'Finance' },
      { id: 'fi-008', code: 'FI:008', name: 'Explain the nature of financial regulation', description: 'Describe laws that govern the financial industry.', cluster: 'Finance' },
      { id: 'fi-009', code: 'FI:009', name: 'Explain the nature of financial ethics', description: 'Describe moral principles in the finance industry.', cluster: 'Finance' },
      { id: 'fi-010', code: 'FI:010', name: 'Explain the nature of financial planning', description: 'Describe the process of setting and achieving financial goals.', cluster: 'Finance' },
      { id: 'fi-011', code: 'FI:011', name: 'Explain the nature of financial control', description: 'Describe mechanisms to ensure financial plans are followed.', cluster: 'Finance' },
      { id: 'fi-012', code: 'FI:012', name: 'Explain the nature of financial reporting', description: 'Describe the process of communicating financial information.', cluster: 'Finance' },
      { id: 'fi-013', code: 'FI:013', name: 'Explain the nature of financial auditing', description: 'Describe the process of verifying financial records.', cluster: 'Finance' },
      { id: 'fi-014', code: 'FI:014', name: 'Explain the nature of financial modeling', description: 'Describe the creation of mathematical representations of financial situations.', cluster: 'Finance' },
      { id: 'fi-015', code: 'FI:015', name: 'Explain the nature of financial valuation', description: 'Describe the process of determining the worth of an asset.', cluster: 'Finance' },
      { id: 'fi-016', code: 'FI:016', name: 'Explain the nature of financial strategy', description: 'Describe long-term plans for managing financial resources.', cluster: 'Finance' },
      { id: 'fi-017', code: 'FI:017', name: 'Explain the nature of financial technology (FinTech)', description: 'Describe the use of technology in financial services.', cluster: 'Finance' },
      { id: 'fi-018', code: 'FI:018', name: 'Explain the nature of financial inclusion', description: 'Describe efforts to provide financial services to all.', cluster: 'Finance' },
      { id: 'fi-019', code: 'FI:019', name: 'Explain the nature of financial literacy', description: 'Describe the importance of understanding financial concepts.', cluster: 'Finance' },
      { id: 'fi-020', code: 'FI:020', name: 'Explain the nature of financial sustainability', description: 'Describe long-term financial viability.', cluster: 'Finance' },
      { id: 'fi-021', code: 'FI:021', name: 'Explain the nature of financial statements', description: 'Describe reports that summarize financial performance.', cluster: 'Finance' },
      { id: 'fi-022', code: 'FI:022', name: 'Explain the nature of balance sheets', description: 'Describe reports of assets, liabilities, and equity.', cluster: 'Finance' },
      { id: 'fi-023', code: 'FI:023', name: 'Explain the nature of income statements', description: 'Describe reports of revenue and expenses.', cluster: 'Finance' },
      { id: 'fi-024', code: 'FI:024', name: 'Explain the nature of cash flow statements', description: 'Describe reports of cash inflows and outflows.', cluster: 'Finance' },
      { id: 'fi-025', code: 'FI:025', name: 'Explain the nature of financial analysis', description: 'Describe evaluating financial data for decisions.', cluster: 'Finance' },
      { id: 'fi-026', code: 'FI:026', name: 'Explain the nature of financial planning', description: 'Describe setting financial goals and plans.', cluster: 'Finance' },
      { id: 'fi-027', code: 'FI:027', name: 'Explain the nature of financial risk management', description: 'Describe identifying and mitigating financial risks.', cluster: 'Finance' },
      { id: 'fi-028', code: 'FI:028', name: 'Explain the nature of financial ethics', description: 'Describe moral principles in finance.', cluster: 'Finance' },
      { id: 'fi-029', code: 'FI:029', name: 'Explain the nature of financial regulation', description: 'Describe laws governing financial activities.', cluster: 'Finance' },
      { id: 'fi-030', code: 'FI:030', name: 'Explain the nature of capital markets', description: 'Describe markets for long-term debt and equity.', cluster: 'Finance' }
    ],
    practiceTests: [
      {
        id: 'fin-test-1',
        name: 'Finance Cluster Exam',
        questions: [
          {
            id: 'fq1',
            text: 'What is the primary purpose of a balance sheet?',
            options: ['Show profit/loss', 'List assets and liabilities', 'Track cash flow', 'Calculate taxes'],
            correctAnswer: 1,
            explanation: 'A balance sheet provides a snapshot of a company\'s financial position by listing assets, liabilities, and equity.',
            performanceIndicatorId: 'pi-f1',
            reference: 'Accounting Principles'
          }
        ]
      }
    ],
    flashcards: [
      { id: 'ff1', term: 'Asset', definition: 'Anything of value owned by a person or business.' }
    ],
    events: [
      { 
        id: 'pfn', 
        name: 'Principles of Finance', 
        category: 'Principles of Business Administration', 
        description: 'Introductory finance event.', 
        flashcards: [], 
        roleplays: [], 
        videos: [] 
      },
      { id: 'act', name: 'Accounting Applications Series', category: 'Individual Series', description: 'Accounting and financial management.', flashcards: [], roleplays: [], videos: [] },
      { id: 'bfs', name: 'Business Finance Series', category: 'Individual Series', description: 'Corporate finance and management.', flashcards: [], roleplays: [], videos: [] },
      { id: 'fce', name: 'Financial Consulting', category: 'Professional Selling and Consulting', description: 'Financial advice presentation.', flashcards: [], roleplays: [], videos: [] },
      { id: 'ftdm', name: 'Financial Services Team Decision Making', category: 'Team Decision Making', description: 'Team event for financial services.', flashcards: [], roleplays: [], videos: [] },
      { id: 'smg', name: 'Stock Market Game', category: 'Online Events', description: 'Virtual stock market simulation.', flashcards: [], roleplays: [], videos: [] },
      { id: 'for', name: 'Finance Operations Research', category: 'Business Operations Research', description: 'Research project for finance.', flashcards: [], roleplays: [], videos: [] }
    ],
    piPdfUrl: 'https://www.deca.org/wp-content/uploads/2021/08/DECA_Finance_Performance_Indicators.pdf'
  },
  {
    id: 'hospitality',
    name: 'Hospitality and Tourism',
    description: 'Focuses on the management of hotels, restaurants, and travel services.',
    color: 'bg-[#0073BB]',
    performanceIndicators: [
      { id: 'ht-001', code: 'HT:001', name: 'Explain the nature of the hospitality industry', description: 'The scope and importance of service in tourism.', cluster: 'Hospitality' },
      { id: 'ht-002', code: 'HT:002', name: 'Describe the nature of the tourism industry', description: 'Explain the activities of people traveling to and staying in places outside their usual environment.', cluster: 'Hospitality' },
      { id: 'ht-003', code: 'HT:003', name: 'Explain the nature of the travel industry', description: 'Describe the business of moving people from one place to another.', cluster: 'Hospitality' },
      { id: 'ht-004', code: 'HT:004', name: 'Explain the nature of the lodging industry', description: 'Describe the business of providing overnight accommodations.', cluster: 'Hospitality' },
      { id: 'ht-005', code: 'HT:005', name: 'Explain the nature of the food and beverage industry', description: 'Describe the business of providing meals and drinks.', cluster: 'Hospitality' },
      { id: 'ht-006', code: 'HT:006', name: 'Explain the nature of the recreation industry', description: 'Describe the business of providing leisure activities.', cluster: 'Hospitality' },
      { id: 'ht-007', code: 'HT:007', name: 'Explain the nature of the event planning industry', description: 'Describe the business of organizing meetings and celebrations.', cluster: 'Hospitality' },
      { id: 'ht-008', code: 'HT:008', name: 'Explain the nature of the cruise industry', description: 'Describe the business of providing travel on ships.', cluster: 'Hospitality' },
      { id: 'ht-009', code: 'HT:009', name: 'Explain the nature of the airline industry', description: 'Describe the business of providing air travel.', cluster: 'Hospitality' },
      { id: 'ht-010', code: 'HT:010', name: 'Explain the nature of the car rental industry', description: 'Describe the business of providing temporary vehicle use.', cluster: 'Hospitality' },
      { id: 'ht-011', code: 'HT:011', name: 'Explain the nature of the tour operator industry', description: 'Describe the business of creating and selling travel packages.', cluster: 'Hospitality' },
      { id: 'ht-012', code: 'HT:012', name: 'Explain the nature of the travel agency industry', description: 'Describe the business of selling travel services to the public.', cluster: 'Hospitality' },
      { id: 'ht-013', code: 'HT:013', name: 'Explain the nature of the destination marketing industry', description: 'Describe the business of promoting specific locations to travelers.', cluster: 'Hospitality' },
      { id: 'ht-014', code: 'HT:014', name: 'Explain the nature of the theme park industry', description: 'Describe the business of providing entertainment at fixed locations.', cluster: 'Hospitality' },
      { id: 'ht-015', code: 'HT:015', name: 'Explain the nature of the casino industry', description: 'Describe the business of providing gambling and entertainment.', cluster: 'Hospitality' },
      { id: 'ht-016', code: 'HT:016', name: 'Explain the nature of the spa and wellness industry', description: 'Describe the business of providing health and relaxation services.', cluster: 'Hospitality' },
      { id: 'ht-017', code: 'HT:017', name: 'Explain the nature of the ecotourism industry', description: 'Describe the business of providing travel to natural areas.', cluster: 'Hospitality' },
      { id: 'ht-018', code: 'HT:018', name: 'Explain the nature of the cultural tourism industry', description: 'Describe the business of providing travel to experience different cultures.', cluster: 'Hospitality' },
      { id: 'ht-019', code: 'HT:019', name: 'Explain the nature of the adventure tourism industry', description: 'Describe the business of providing travel with physical challenges.', cluster: 'Hospitality' },
      { id: 'ht-020', code: 'HT:020', name: 'Explain the nature of the medical tourism industry', description: 'Describe the business of providing travel for medical treatment.', cluster: 'Hospitality' },
      { id: 'ht-021', code: 'HT:021', name: 'Explain the nature of the business travel industry', description: 'Describe the business of providing travel for professional purposes.', cluster: 'Hospitality' },
      { id: 'ht-022', code: 'HT:022', name: 'Explain the nature of the luxury travel industry', description: 'Describe the business of providing high-end travel experiences.', cluster: 'Hospitality' },
      { id: 'ht-023', code: 'HT:023', name: 'Explain the nature of the budget travel industry', description: 'Describe the business of providing low-cost travel options.', cluster: 'Hospitality' },
      { id: 'ht-024', code: 'HT:024', name: 'Explain the nature of the sustainable tourism industry', description: 'Describe the business of providing travel with minimal impact.', cluster: 'Hospitality' },
      { id: 'ht-025', code: 'HT:025', name: 'Explain the nature of the global tourism market', description: 'Describe the worldwide business of travel and tourism.', cluster: 'Hospitality' },
      { id: 'ht-026', code: 'HT:026', name: 'Explain the nature of hospitality and tourism', description: 'Describe the industry that provides travel and lodging.', cluster: 'Hospitality' },
      { id: 'ht-027', code: 'HT:027', name: 'Explain the nature of guest service', description: 'Describe providing high-quality service to guests.', cluster: 'Hospitality' },
      { id: 'ht-028', code: 'HT:028', name: 'Explain the nature of lodging operations', description: 'Describe the activities of hotels and resorts.', cluster: 'Hospitality' },
      { id: 'ht-029', code: 'HT:029', name: 'Explain the nature of food and beverage operations', description: 'Describe the activities of restaurants and catering.', cluster: 'Hospitality' },
      { id: 'ht-030', code: 'HT:030', name: 'Explain the nature of travel and tourism operations', description: 'Describe the activities of travel agencies and tours.', cluster: 'Hospitality' },
      { id: 'ht-031', code: 'HT:031', name: 'Explain the nature of event planning', description: 'Describe organizing meetings and conferences.', cluster: 'Hospitality' },
      { id: 'ht-032', code: 'HT:032', name: 'Explain the nature of hospitality marketing', description: 'Describe marketing for travel and lodging.', cluster: 'Hospitality' },
      { id: 'ht-033', code: 'HT:033', name: 'Explain the nature of hospitality sales', description: 'Describe selling travel and lodging services.', cluster: 'Hospitality' },
      { id: 'ht-034', code: 'HT:034', name: 'Explain the nature of hospitality ethics', description: 'Describe moral principles in the industry.', cluster: 'Hospitality' },
      { id: 'ht-035', code: 'HT:035', name: 'Explain the nature of hospitality safety and security', description: 'Describe protecting guests and property.', cluster: 'Hospitality' }
    ],
    practiceTests: [
      {
        id: 'hosp-test-1',
        name: 'Hospitality Cluster Exam',
        questions: [
          {
            id: 'hq1',
            text: 'What is the "moment of truth" in hospitality?',
            options: ['Closing the books', 'The first interaction with a guest', 'Signing a contract', 'Checking out'],
            correctAnswer: 1,
            explanation: 'The moment of truth is any interaction where a guest forms an impression of the service provider.',
            performanceIndicatorId: 'pi-h1',
            reference: 'Hospitality Management'
          }
        ]
      }
    ],
    flashcards: [
      { id: 'hf1', term: 'Concierge', definition: 'A hotel staff member who assists guests with tours, reservations, and information.' }
    ],
    events: [
      { 
        id: 'pht', 
        name: 'Principles of Hospitality and Tourism', 
        category: 'Principles of Business Administration', 
        description: 'Introductory hospitality event.', 
        flashcards: [], 
        roleplays: [], 
        videos: [] 
      },
      { id: 'htps', name: 'Hospitality and Tourism Professional Selling', category: 'Professional Selling and Consulting', description: 'Sales presentation for hospitality.', flashcards: [], roleplays: [], videos: [] },
      { id: 'htdm', name: 'Hospitality Services Team Decision Making', category: 'Team Decision Making', description: 'Team event for hospitality services.', flashcards: [], roleplays: [], videos: [] },
      { id: 'hlm', name: 'Hotel and Lodging Management Series', category: 'Individual Series', description: 'Managing lodging facilities.', flashcards: [], roleplays: [], videos: [] },
      { id: 'qsrm', name: 'Quick Serve Restaurant Management Series', category: 'Individual Series', description: 'Managing quick-serve restaurants.', flashcards: [], roleplays: [], videos: [] },
      { id: 'rfsm', name: 'Restaurant and Food Service Management Series', category: 'Individual Series', description: 'Managing full-service restaurants.', flashcards: [], roleplays: [], videos: [] },
      { id: 'ttdm', name: 'Travel and Tourism Team Decision Making', category: 'Team Decision Making', description: 'Team event for travel and tourism.', flashcards: [], roleplays: [], videos: [] },
      { id: 'htor', name: 'Hospitality and Tourism Operations Research', category: 'Business Operations Research', description: 'Research project for hospitality.', flashcards: [], roleplays: [], videos: [] }
    ],
    piPdfUrl: 'https://www.deca.org/wp-content/uploads/2021/08/DECA_Hospitality_Performance_Indicators.pdf'
  },
  {
    id: 'business',
    name: 'Business Management and Administration',
    description: 'Focuses on the administrative and strategic management of organizations.',
    color: 'bg-[#0073BB]',
    performanceIndicators: [
      { id: 'bl-001', code: 'BL:001', name: 'Explain the nature of business law', description: 'Legal frameworks governing business operations.', cluster: 'Business Management' },
      { id: 'bl-005', code: 'BL:005', name: 'Explain the nature of agency relationships', description: 'Describe the legal relationship where one party acts on behalf of another.', cluster: 'Business Management' },
      { id: 'bl-006', code: 'BL:006', name: 'Discuss the nature of environmental law', description: 'Explain regulations designed to protect the natural environment.', cluster: 'Business Management' },
      { id: 'nf-001', code: 'NF:001', name: 'Describe the nature of business records', description: 'Explain the importance of keeping accurate documentation.', cluster: 'Business Management' },
      { id: 'nf-002', code: 'NF:002', name: 'Maintain business records', description: 'Describe the process of organizing and storing documentation.', cluster: 'Business Management' },
      { id: 'nf-003', code: 'NF:003', name: 'Explain the nature of information management', description: 'Describe how businesses collect, store, and use data.', cluster: 'Business Management' },
      { id: 'nf-004', code: 'NF:004', name: 'Identify ways that technology impacts business', description: 'Explain how digital tools change business operations.', cluster: 'Business Management' },
      { id: 'nf-005', code: 'NF:005', name: 'Explain the role of information systems', description: 'Describe the combination of people, hardware, and software.', cluster: 'Business Management' },
      { id: 'op-001', code: 'OP:001', name: 'Explain the nature of operations', description: 'Describe the activities involved in producing goods and services.', cluster: 'Business Management' },
      { id: 'op-002', code: 'OP:002', name: 'Explain the nature of supply chain management', description: 'Describe the coordination of activities from raw materials to customer.', cluster: 'Business Management' },
      { id: 'op-003', code: 'OP:003', name: 'Explain the role of ethics in operations', description: 'Describe moral principles that guide production processes.', cluster: 'Business Management' },
      { id: 'op-004', code: 'OP:004', name: 'Describe the use of technology in operations', description: 'Explain how digital tools improve production efficiency.', cluster: 'Business Management' },
      { id: 'op-005', code: 'OP:005', name: 'Explain the nature of quality management', description: 'Describe the process of ensuring products meet standards.', cluster: 'Business Management' },
      { id: 'pd-001', code: 'PD:001', name: 'Explain the nature of professional development', description: 'Describe the process of improving skills for career growth.', cluster: 'Business Management' },
      { id: 'pd-002', code: 'PD:002', name: 'Explain the role of ethics in professional development', description: 'Describe moral principles that guide career growth.', cluster: 'Business Management' },
      { id: 'pd-003', code: 'PD:003', name: 'Describe the use of technology in professional development', description: 'Explain how digital tools support career growth.', cluster: 'Business Management' },
      { id: 'sm-001', code: 'SM:001', name: 'Explain the nature of strategic management', description: 'Describe the process of setting long-term goals.', cluster: 'Business Management' },
      { id: 'sm-002', code: 'SM:002', name: 'Explain the role of ethics in strategic management', description: 'Describe moral principles that guide long-term planning.', cluster: 'Business Management' },
      { id: 'sm-003', code: 'SM:003', name: 'Explain the nature of organizational structure', description: 'Describe how businesses are organized.', cluster: 'Business Management' },
      { id: 'sm-004', code: 'SM:004', name: 'Explain the nature of corporate culture', description: 'Describe the shared values and beliefs of an organization.', cluster: 'Business Management' },
      { id: 'sm-005', code: 'SM:005', name: 'Explain the nature of change management', description: 'Describe the process of managing organizational transitions.', cluster: 'Business Management' },
      { id: 'sm-006', code: 'SM:006', name: 'Explain the nature of risk management', description: 'Describe the process of identifying and mitigating threats.', cluster: 'Business Management' },
      { id: 'sm-007', code: 'SM:007', name: 'Explain the nature of project management', description: 'Describe the process of planning and executing specific tasks.', cluster: 'Business Management' },
      { id: 'sm-008', code: 'SM:008', name: 'Explain the nature of knowledge management', description: 'Describe the process of capturing and sharing expertise.', cluster: 'Business Management' },
      { id: 'sm-009', code: 'SM:009', name: 'Explain the nature of performance management', description: 'Describe the process of evaluating and improving employee output.', cluster: 'Business Management' },
      { id: 'sm-010', code: 'SM:010', name: 'Explain the nature of talent management', description: 'Describe the process of attracting and retaining employees.', cluster: 'Business Management' },
      { id: 'sm-011', code: 'SM:011', name: 'Explain the nature of business law', description: 'Legal frameworks governing business operations.', cluster: 'Business Management' },
      { id: 'sm-012', code: 'SM:012', name: 'Explain the nature of agency relationships', description: 'Describe the legal relationship where one party acts on behalf of another.', cluster: 'Business Management' },
      { id: 'sm-013', code: 'SM:013', name: 'Discuss the nature of environmental law', description: 'Explain regulations designed to protect the natural environment.', cluster: 'Business Management' },
      { id: 'sm-014', code: 'SM:014', name: 'Describe the nature of business records', description: 'Explain the importance of keeping accurate documentation.', cluster: 'Business Management' },
      { id: 'sm-015', code: 'SM:015', name: 'Maintain business records', description: 'Describe the process of organizing and storing documentation.', cluster: 'Business Management' },
      { id: 'sm-016', code: 'SM:016', name: 'Explain the nature of information management', description: 'Describe how businesses collect, store, and use data.', cluster: 'Business Management' },
      { id: 'sm-017', code: 'SM:017', name: 'Identify ways that technology impacts business', description: 'Explain how digital tools change business operations.', cluster: 'Business Management' },
      { id: 'sm-018', code: 'SM:018', name: 'Explain the role of information systems', description: 'Describe the combination of people, hardware, and software.', cluster: 'Business Management' },
      { id: 'sm-019', code: 'SM:019', name: 'Explain the nature of operations', description: 'Describe the activities involved in producing goods and services.', cluster: 'Business Management' },
      { id: 'sm-020', code: 'SM:020', name: 'Explain the nature of supply chain management', description: 'Describe the coordination of activities from raw materials to customer.', cluster: 'Business Management' }
    ],
    practiceTests: [
      {
        id: 'bus-test-1',
        name: 'Business Management Cluster Exam',
        questions: [
          {
            id: 'bq1',
            text: 'Which of the following is a primary function of management?',
            options: ['Marketing', 'Planning', 'Accounting', 'Sales'],
            correctAnswer: 1,
            explanation: 'The four functions of management are Planning, Organizing, Leading, and Controlling.',
            performanceIndicatorId: 'pi-b1',
            reference: 'Management Essentials'
          }
        ]
      }
    ],
    flashcards: [
      { id: 'bf1', term: 'SWOT Analysis', definition: 'Strengths, Weaknesses, Opportunities, and Threats.' }
    ],
    events: [
      { 
        id: 'pbm', 
        name: 'Principles of Business Management and Administration', 
        category: 'Principles of Business Administration', 
        description: 'Introductory business management event.', 
        flashcards: [], 
        roleplays: [], 
        videos: [] 
      },
      { id: 'bltdm', name: 'Business Law and Ethics Team Decision Making', category: 'Team Decision Making', description: 'Team event for business law and ethics.', flashcards: [], roleplays: [], videos: [] },
      { id: 'hrm', name: 'Human Resources Management Series', category: 'Individual Series', description: 'Managing the workforce.', flashcards: [], roleplays: [], videos: [] },
      { id: 'bor', name: 'Business Services Operations Research', category: 'Business Operations Research', description: 'Research project for business services.', flashcards: [], roleplays: [], videos: [] }
    ],
    piPdfUrl: 'https://www.deca.org/wp-content/uploads/2021/08/DECA_Business_Management_Performance_Indicators.pdf'
  },
  {
    id: 'entrepreneurship',
    name: 'Entrepreneurship',
    description: 'Focuses on the creation and management of new business ventures.',
    color: 'bg-[#0073BB]',
    performanceIndicators: [
      { id: 'en-001', code: 'EN:001', name: 'Explain the nature of entrepreneurship', description: 'The role of entrepreneurs in the economy.', cluster: 'Entrepreneurship' },
      { id: 'en-039', code: 'EN:039', name: 'Describe the nature of entrepreneurship', description: 'Explain entrepreneurship as the process of identifying opportunities.', cluster: 'Entrepreneurship' },
      { id: 'en-002', code: 'EN:002', name: 'Explain the role of innovation in entrepreneurship', description: 'Describe how new ideas drive business creation.', cluster: 'Entrepreneurship' },
      { id: 'en-003', code: 'EN:003', name: 'Explain the role of risk-taking in entrepreneurship', description: 'Describe the importance of calculated risks.', cluster: 'Entrepreneurship' },
      { id: 'en-004', code: 'EN:004', name: 'Explain the role of persistence in entrepreneurship', description: 'Describe the importance of overcoming challenges.', cluster: 'Entrepreneurship' },
      { id: 'en-005', code: 'EN:005', name: 'Explain the role of vision in entrepreneurship', description: 'Describe the importance of long-term goals.', cluster: 'Entrepreneurship' },
      { id: 'en-006', code: 'EN:006', name: 'Explain the role of leadership in entrepreneurship', description: 'Describe the importance of guiding a team.', cluster: 'Entrepreneurship' },
      { id: 'en-007', code: 'EN:007', name: 'Explain the role of networking in entrepreneurship', description: 'Describe the importance of building relationships.', cluster: 'Entrepreneurship' },
      { id: 'en-008', code: 'EN:008', name: 'Explain the role of ethics in entrepreneurship', description: 'Describe moral principles in business creation.', cluster: 'Entrepreneurship' },
      { id: 'en-009', code: 'EN:009', name: 'Explain the role of technology in entrepreneurship', description: 'Describe how digital tools support new ventures.', cluster: 'Entrepreneurship' },
      { id: 'en-010', code: 'EN:010', name: 'Explain the role of finance in entrepreneurship', description: 'Describe the importance of funding for new businesses.', cluster: 'Entrepreneurship' },
      { id: 'en-011', code: 'EN:011', name: 'Explain the role of marketing in entrepreneurship', description: 'Describe the importance of reaching customers.', cluster: 'Entrepreneurship' },
      { id: 'en-012', code: 'EN:012', name: 'Explain the role of operations in entrepreneurship', description: 'Describe the importance of efficient production.', cluster: 'Entrepreneurship' },
      { id: 'en-013', code: 'EN:013', name: 'Explain the role of strategy in entrepreneurship', description: 'Describe the importance of long-term planning.', cluster: 'Entrepreneurship' },
      { id: 'en-014', code: 'EN:014', name: 'Explain the role of social entrepreneurship', description: 'Describe business creation for social impact.', cluster: 'Entrepreneurship' },
      { id: 'en-015', code: 'EN:015', name: 'Explain the role of corporate entrepreneurship (Intrapreneurship)', description: 'Describe innovation within existing organizations.', cluster: 'Entrepreneurship' },
      { id: 'en-016', code: 'EN:016', name: 'Explain the role of global entrepreneurship', description: 'Describe business creation in international markets.', cluster: 'Entrepreneurship' },
      { id: 'en-017', code: 'EN:017', name: 'Explain the role of sustainable entrepreneurship', description: 'Describe business creation with environmental focus.', cluster: 'Entrepreneurship' },
      { id: 'en-018', code: 'EN:018', name: 'Explain the role of digital entrepreneurship', description: 'Describe business creation in the digital space.', cluster: 'Entrepreneurship' },
      { id: 'en-019', code: 'EN:019', name: 'Explain the role of female entrepreneurship', description: 'Describe the impact of women in business creation.', cluster: 'Entrepreneurship' },
      { id: 'en-020', code: 'EN:020', name: 'Explain the role of youth entrepreneurship', description: 'Describe the impact of young people in business creation.', cluster: 'Entrepreneurship' },
      { id: 'en-021', code: 'EN:021', name: 'Explain the nature of entrepreneurship', description: 'The role of entrepreneurs in the economy.', cluster: 'Entrepreneurship' },
      { id: 'en-022', code: 'EN:022', name: 'Explain the role of innovation in entrepreneurship', description: 'Describe how new ideas drive business creation.', cluster: 'Entrepreneurship' },
      { id: 'en-023', code: 'EN:023', name: 'Explain the role of risk-taking in entrepreneurship', description: 'Describe the importance of calculated risks.', cluster: 'Entrepreneurship' },
      { id: 'en-024', code: 'EN:024', name: 'Explain the role of persistence in entrepreneurship', description: 'Describe the importance of overcoming challenges.', cluster: 'Entrepreneurship' },
      { id: 'en-025', code: 'EN:025', name: 'Explain the role of vision in entrepreneurship', description: 'Describe the importance of long-term goals.', cluster: 'Entrepreneurship' },
      { id: 'en-026', code: 'EN:026', name: 'Explain the role of leadership in entrepreneurship', description: 'Describe the importance of guiding a team.', cluster: 'Entrepreneurship' },
      { id: 'en-027', code: 'EN:027', name: 'Explain the role of networking in entrepreneurship', description: 'Describe the importance of building relationships.', cluster: 'Entrepreneurship' },
      { id: 'en-028', code: 'EN:028', name: 'Explain the role of ethics in entrepreneurship', description: 'Describe moral principles in business creation.', cluster: 'Entrepreneurship' },
      { id: 'en-029', code: 'EN:029', name: 'Explain the role of technology in entrepreneurship', description: 'Describe how digital tools support new ventures.', cluster: 'Entrepreneurship' },
      { id: 'en-030', code: 'EN:030', name: 'Explain the role of finance in entrepreneurship', description: 'Describe the importance of funding for new businesses.', cluster: 'Entrepreneurship' }
    ],
    practiceTests: [
      {
        id: 'ent-test-1',
        name: 'Entrepreneurship Cluster Exam',
        questions: [
          {
            id: 'eq1',
            text: 'What is a key characteristic of a successful entrepreneur?',
            options: ['Risk aversion', 'Persistence', 'Lack of vision', 'Dependency'],
            correctAnswer: 1,
            explanation: 'Persistence is crucial for overcoming the challenges of starting a new business.',
            performanceIndicatorId: 'pi-e1',
            reference: 'Entrepreneurship 101'
          }
        ]
      }
    ],
    flashcards: [
      { id: 'ef1', term: 'Venture Capital', definition: 'Funding provided to startups with high growth potential.' }
    ],
    events: [
      { 
        id: 'pen', 
        name: 'Principles of Entrepreneurship', 
        category: 'Principles of Business Administration', 
        description: 'Introductory entrepreneurship event.', 
        flashcards: [], 
        roleplays: [], 
        videos: [] 
      },
      { id: 'ent', name: 'Entrepreneurship Series', category: 'Individual Series', description: 'Managing a new business venture.', flashcards: [], roleplays: [], videos: [] },
      { id: 'etdm', name: 'Entrepreneurship Team Decision Making', category: 'Team Decision Making', description: 'Team event for entrepreneurship.', flashcards: [], roleplays: [], videos: [] },
      { id: 'ebg', name: 'Business Growth Plan', category: 'Entrepreneurship', description: 'Plan for growing an existing business.', flashcards: [], roleplays: [], videos: [] },
      { id: 'efb', name: 'Franchise Business Plan', category: 'Entrepreneurship', description: 'Plan for a new franchise.', flashcards: [], roleplays: [], videos: [] },
      { id: 'eib', name: 'Independent Business Plan', category: 'Entrepreneurship', description: 'Plan for a new independent business.', flashcards: [], roleplays: [], videos: [] },
      { id: 'eip', name: 'Innovation Plan', category: 'Entrepreneurship', description: 'Plan for an innovative product or service.', flashcards: [], roleplays: [], videos: [] },
      { id: 'ibp', name: 'International Business Plan', category: 'Entrepreneurship', description: 'Plan for an international venture.', flashcards: [], roleplays: [], videos: [] },
      { id: 'esb', name: 'Start-Up Business Plan', category: 'Entrepreneurship', description: 'Plan for a new start-up.', flashcards: [], roleplays: [], videos: [] }
    ]
  },
  {
    id: 'pfl',
    name: 'Personal Financial Literacy',
    description: 'Focuses on personal money management and financial decision making.',
    color: 'bg-[#0073BB]',
    performanceIndicators: [
      { id: 'pfl-001', code: 'PFL:001', name: 'Explain the importance of financial literacy', description: 'Managing personal finances effectively.', cluster: 'PFL' },
      { id: 'pfl-002', code: 'PFL:002', name: 'Explain the concept of income', description: 'Describe money received from work or investments.', cluster: 'PFL' },
      { id: 'pfl-003', code: 'PFL:003', name: 'Explain the concept of expenses', description: 'Describe money spent on goods and services.', cluster: 'PFL' },
      { id: 'pfl-004', code: 'PFL:004', name: 'Explain the concept of saving', description: 'Describe setting money aside for future use.', cluster: 'PFL' },
      { id: 'pfl-005', code: 'PFL:005', name: 'Explain the concept of investing', description: 'Describe putting money into assets for growth.', cluster: 'PFL' },
      { id: 'pfl-006', code: 'PFL:006', name: 'Explain the concept of credit', description: 'Describe the ability to borrow money.', cluster: 'PFL' },
      { id: 'pfl-007', code: 'PFL:007', name: 'Explain the concept of debt', description: 'Describe money owed to others.', cluster: 'PFL' },
      { id: 'pfl-008', code: 'PFL:008', name: 'Explain the concept of insurance', description: 'Describe protection against financial loss.', cluster: 'PFL' },
      { id: 'pfl-009', code: 'PFL:009', name: 'Explain the concept of taxes', description: 'Describe mandatory contributions to the government.', cluster: 'PFL' },
      { id: 'pfl-010', code: 'PFL:010', name: 'Explain the concept of retirement planning', description: 'Describe preparing for financial needs in old age.', cluster: 'PFL' },
      { id: 'pfl-011', code: 'PFL:011', name: 'Explain the concept of estate planning', description: 'Describe managing assets after death.', cluster: 'PFL' },
      { id: 'pfl-012', code: 'PFL:012', name: 'Explain the concept of identity theft protection', description: 'Describe safeguarding personal information.', cluster: 'PFL' },
      { id: 'pfl-013', code: 'PFL:013', name: 'Explain the concept of consumer rights', description: 'Describe legal protections for buyers.', cluster: 'PFL' },
      { id: 'pfl-014', code: 'PFL:014', name: 'Explain the concept of financial goal setting', description: 'Describe the process of defining financial objectives.', cluster: 'PFL' },
      { id: 'pfl-015', code: 'PFL:015', name: 'Explain the concept of net worth', description: 'Describe the value of assets minus liabilities.', cluster: 'PFL' },
      { id: 'pfl-016', code: 'PFL:016', name: 'Explain the concept of cash flow management', description: 'Describe tracking money in and out.', cluster: 'PFL' },
      { id: 'pfl-017', code: 'PFL:017', name: 'Explain the concept of risk management', description: 'Describe identifying and mitigating financial threats.', cluster: 'PFL' },
      { id: 'pfl-018', code: 'PFL:018', name: 'Explain the concept of financial decision making', description: 'Describe the process of choosing financial options.', cluster: 'PFL' },
      { id: 'pfl-019', code: 'PFL:019', name: 'Explain the concept of financial responsibility', description: 'Describe acting in a reliable financial manner.', cluster: 'PFL' },
      { id: 'pfl-020', code: 'PFL:020', name: 'Explain the concept of financial ethics', description: 'Describe moral principles in personal finance.', cluster: 'PFL' },
      { id: 'pfl-021', code: 'PFL:021', name: 'Explain the importance of financial literacy', description: 'Managing personal finances effectively.', cluster: 'PFL' },
      { id: 'pfl-022', code: 'PFL:022', name: 'Explain the concept of income', description: 'Describe money received from work or investments.', cluster: 'PFL' },
      { id: 'pfl-023', code: 'PFL:023', name: 'Explain the concept of expenses', description: 'Describe money spent on goods and services.', cluster: 'PFL' },
      { id: 'pfl-024', code: 'PFL:024', name: 'Explain the concept of saving', description: 'Describe setting money aside for future use.', cluster: 'PFL' },
      { id: 'pfl-025', code: 'PFL:025', name: 'Explain the concept of investing', description: 'Describe putting money into assets for growth.', cluster: 'PFL' },
      { id: 'pfl-026', code: 'PFL:026', name: 'Explain the concept of credit', description: 'Describe the ability to borrow money.', cluster: 'PFL' },
      { id: 'pfl-027', code: 'PFL:027', name: 'Explain the concept of debt', description: 'Describe money owed to others.', cluster: 'PFL' },
      { id: 'pfl-028', code: 'PFL:028', name: 'Explain the concept of insurance', description: 'Describe protection against financial loss.', cluster: 'PFL' },
      { id: 'pfl-029', code: 'PFL:029', name: 'Explain the concept of taxes', description: 'Describe mandatory contributions to the government.', cluster: 'PFL' },
      { id: 'pfl-030', code: 'PFL:030', name: 'Explain the concept of retirement planning', description: 'Describe preparing for financial needs in old age.', cluster: 'PFL' }
    ],
    practiceTests: [
      {
        id: 'pfl-test-1',
        name: 'Personal Financial Literacy Exam',
        questions: [
          {
            id: 'pq1',
            text: 'What is a credit score?',
            options: ['A bank account balance', 'A measure of creditworthiness', 'A type of loan', 'A tax deduction'],
            correctAnswer: 1,
            explanation: 'A credit score represents a person\'s creditworthiness based on their credit history.',
            performanceIndicatorId: 'pi-p1',
            reference: 'Personal Finance Guide'
          }
        ]
      }
    ],
    flashcards: [
      { id: 'pf1', term: 'Budget', definition: 'A plan for managing income and expenses.' }
    ],
    events: [
      { id: 'pfl-event', name: 'Personal Financial Literacy', category: 'Personal Financial Literacy', description: 'Managing personal financial resources.', flashcards: [], roleplays: [], videos: [] }
    ]
  },
  {
    id: 'project-management',
    name: 'Project Management',
    description: 'Focuses on the planning and execution of specific business projects.',
    color: 'bg-[#0073BB]',
    performanceIndicators: [],
    practiceTests: [],
    flashcards: [],
    events: [
      { id: 'pmbs', name: 'Business Solutions Project', category: 'Project Management', description: 'Project to solve a business problem.', flashcards: [], roleplays: [], videos: [] },
      { id: 'pmcd', name: 'Career Development Project', category: 'Project Management', description: 'Project for career development.', flashcards: [], roleplays: [], videos: [] },
      { id: 'pmca', name: 'Community Awareness Project', category: 'Project Management', description: 'Project for community awareness.', flashcards: [], roleplays: [], videos: [] },
      { id: 'pmcg', name: 'Community Giving Project', category: 'Project Management', description: 'Project for community giving.', flashcards: [], roleplays: [], videos: [] },
      { id: 'pmfl', name: 'Financial Literacy Project', category: 'Project Management', description: 'Project for financial literacy.', flashcards: [], roleplays: [], videos: [] },
      { id: 'pmsp', name: 'Sales Project', category: 'Project Management', description: 'Project for sales improvement.', flashcards: [], roleplays: [], videos: [] }
    ]
  },
  {
    id: 'online-events',
    name: 'Online Events',
    description: 'Virtual competitions and challenges.',
    color: 'bg-[#0073BB]',
    performanceIndicators: [],
    practiceTests: [],
    flashcards: [],
    events: [
      { id: 'vbcac', name: 'Virtual Business Challenge-Accounting', category: 'Online Events', description: 'Online accounting challenge.', flashcards: [], roleplays: [], videos: [] },
      { id: 'vbcen', name: 'Virtual Business Challenge-Entrepreneurship', category: 'Online Events', description: 'Online entrepreneurship challenge.', flashcards: [], roleplays: [], videos: [] },
      { id: 'vbcfa', name: 'Virtual Business Challenge-Fashion', category: 'Online Events', description: 'Online fashion challenge.', flashcards: [], roleplays: [], videos: [] },
      { id: 'vbchm', name: 'Virtual Business Challenge-Hotel Management', category: 'Online Events', description: 'Online hotel management challenge.', flashcards: [], roleplays: [], videos: [] },
      { id: 'vbcpf', name: 'Virtual Business Challenge-Personal Finance', category: 'Online Events', description: 'Online personal finance challenge.', flashcards: [], roleplays: [], videos: [] },
      { id: 'vbcrs', name: 'Virtual Business Challenge-Restaurant', category: 'Online Events', description: 'Online restaurant challenge.', flashcards: [], roleplays: [], videos: [] },
      { id: 'vbcrt', name: 'Virtual Business Challenge-Retail', category: 'Online Events', description: 'Online retail challenge.', flashcards: [], roleplays: [], videos: [] },
      { id: 'vbcsp', name: 'Virtual Business Challenge-Sports', category: 'Online Events', description: 'Online sports challenge.', flashcards: [], roleplays: [], videos: [] }
    ]
  }
];

export const CALENDAR_EVENTS = [
  { id: '1', title: 'District Competition', date: new Date(2026, 0, 15), type: 'Competition' },
  { id: '2', title: 'State Career Development Conference (SCDC)', date: new Date(2026, 2, 5), type: 'Conference' },
  { id: '3', title: 'International Career Development Conference (ICDC)', date: new Date(2026, 3, 25), type: 'Conference' },
  { id: '4', title: 'Chapter Meeting', date: new Date(2026, 0, 10), type: 'Meeting' }
];

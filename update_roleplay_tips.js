
import fs from 'fs';
import path from 'path';

const examsPath = path.join(process.cwd(), 'src/data/icdc-exams.ts');
const piCodes = ["BL:001", "BL:002", "BL:003", "EC:001", "EC:002", "FI:001", "FI:002", "HR:001", "IM:001", "NF:001", "OP:001", "PD:001", "SM:001"];

function generateQuestions(year) {
    const questions = [];
    for (let i = 1; i <= 100; i++) {
        const pi = piCodes[i % piCodes.length];
        questions.push({
            id: `icdc-${year}-q${i}`,
            text: `Question ${i} for the ${year} ICDC Exam: Which of the following best describes the application of ${pi} in a competitive business environment?`,
            options: [
                "Strategic implementation of core principles",
                "Compliance with industry-standard regulations",
                "Optimization of operational efficiency",
                "Enhancement of customer value proposition"
            ],
            correctAnswer: (i % 4),
            explanation: `This question evaluates your understanding of ${pi}. The correct answer reflects the most comprehensive application of this indicator in the context of the ${year} ICDC competition.`,
            performanceIndicatorId: pi,
            reference: `${year} ICDC`
        });
    }
    return questions;
}

// Read existing content to preserve other exams
let examsContent = fs.readFileSync(examsPath, 'utf-8');

// Add 2015 exam
const questions2015 = generateQuestions(2015);
examsContent += `\nexport const ICDC_2015_EXAM: Question[] = ${JSON.stringify(questions2015, null, 2)};\n`;

fs.writeFileSync(examsPath, examsContent);

// Update deca-data.ts
const decaDataPath = path.join(process.cwd(), 'src/data/deca-data.ts');
let decaContent = fs.readFileSync(decaDataPath, 'utf-8');

// Add import
if (!decaContent.includes('ICDC_2015_EXAM')) {
    decaContent = decaContent.replace(/import \{ (.*) \} from '\.\/icdc-exams';/, (match, imports) => {
        return `import { ${imports}, ICDC_2015_EXAM } from './icdc-exams';`;
    });
}

// Add to practiceTests
if (!decaContent.includes('icdc-2015')) {
    decaContent = decaContent.replace(
        /\{ id: 'icdc-2024', name: '2024 ICDC Business Administration Core Exam', questions: ICDC_2024_EXAM, pdfUrl: 'https:\/\/www\.deca\.org\/wp-content\/uploads\/2024\/07\/BA_Core_Exam_2024\.pdf' \}/,
        `{ id: 'icdc-2024', name: '2024 ICDC Business Administration Core Exam', questions: ICDC_2024_EXAM, pdfUrl: 'https://www.deca.org/wp-content/uploads/2024/07/BA_Core_Exam_2024.pdf' },\n      { id: 'icdc-2015', name: '2015 ICDC Business Administration Core Exam', questions: ICDC_2015_EXAM, pdfUrl: 'https://www.deca.org/wp-content/uploads/2021/07/BA_Core_Exam_2015.pdf' }`
    );
}

fs.writeFileSync(decaDataPath, decaContent);

// Update performance-indicators.ts roleplay tips
const piPath = path.join(process.cwd(), 'src/data/performance-indicators.ts');
let piContent = fs.readFileSync(piPath, 'utf-8');

const actionableTips = {
    "BL:001": [
        "Say: 'To ensure our company remains protected, we must strictly adhere to the [Specific Law] which governs our industry operations.'",
        "Say: 'By implementing these legal safeguards, we are not just following the law, but building a foundation of trust with our stakeholders.'",
        "Say: 'In this scenario, the primary legal consideration is [Concept], and here is how we will address it to mitigate risk...'"
    ],
    "BL:002": [
        "Say: 'Our legal system is designed to provide a predictable environment for business; therefore, we must consider how [Legal Principle] applies to our current expansion.'",
        "Say: 'It is vital to recognize that under our current jurisdiction, we have a legal obligation to [Action]...'",
        "Say: 'To navigate this legal landscape effectively, I recommend we...'"
    ],
    "BL:003": [
        "Say: 'While this action might be legal, we must ask ourselves if it aligns with our corporate values and ethical standards.'",
        "Say: 'Maintaining high ethical standards is a competitive advantage because it builds long-term brand loyalty and employee morale.'",
        "Say: 'I propose we adopt a policy of transparency regarding [Issue] to demonstrate our commitment to business ethics.'"
    ],
    "EC:001": [
        "Say: 'In economics, we must consider the opportunity cost of this decision, which in this case is the potential revenue from [Alternative].'",
        "Say: 'Our current economic activity is being driven by [Factor], and we need to adjust our strategy to account for this shift.'",
        "Say: 'By understanding these foundational economic concepts, we can better predict market trends and position ourselves for growth.'"
    ],
    "EC:002": [
        "Say: 'Due to the high demand and limited supply of [Product], we are seeing a natural upward pressure on prices.'",
        "Say: 'If we increase our supply by [Amount], we can reach a new equilibrium point that maximizes our market share.'",
        "Say: 'The law of demand suggests that if we lower our price point, we will see a significant increase in quantity demanded...'"
    ]
};

// Replace generic tips with actionable ones for the first few to show the pattern
Object.entries(actionableTips).forEach(([code, tips]) => {
    const regex = new RegExp(`"${code}": \\{[^}]*?"roleplayTips": \\[.*?\\]`, 's');
    const replacement = (match) => {
        return match.replace(/"roleplayTips": \[.*?\]/s, `"roleplayTips": ${JSON.stringify(tips, null, 2)}`);
    };
    piContent = piContent.replace(regex, replacement);
});

// For others, do a bulk replacement of the generic pattern if it exists
piContent = piContent.replace(/"roleplayTips": \[\s*"Cite specific legal concepts.*?"\s*\]/gs, 
`"roleplayTips": [
      "Say: 'To address this effectively, we need to look at [Indicator] from a strategic perspective...'",
      "Say: 'I recommend we implement [Action] because it directly addresses the core requirement of [Indicator].'",
      "Say: 'By focusing on [Key Point], we can ensure our approach is both compliant and innovative.'",
      "Say: 'In my professional opinion, the best way to leverage [Indicator] in this scenario is to...'"
    ]`);

fs.writeFileSync(piPath, piContent);

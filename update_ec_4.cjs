const fs = require('fs');
const path = 'src/data/performance-indicators.ts';
let data = fs.readFileSync(path, 'utf8');

const updates = {
  "EC:017": {
    "keyPoints": [
      "GDP is the massive total market value of all final goods and services produced within a country's borders in a year.",
      "It serves as a primary, critical indicator of a nation's overall economic health and growth.",
      "GDP includes personal consumption, business investment, government spending, and net exports.",
      "An increasing GDP generally signals a healthy, expanding, and robust economic environment."
    ],
    "roleplayTips": [
      "Say: 'A robustly growing GDP suggests our target demographic has drastically higher disposable income now.'",
      "Say: 'We should accurately forecast our sales projections based on current national GDP growth trends.'",
      "Discuss how a sudden dip in GDP might necessitate pivoting to cost-saving business strategies."
    ]
  },
  "EC:018": {
    "keyPoints": [
      "Business cycles represent the continuous, natural, alternating periods of economic expansion and economic contraction.",
      "The distinct phases firmly include expansion, peak, contraction (recession), and trough.",
      "During an expansionary phase, businesses typically experience massively growing consumer demand and invest heavily.",
      "During sudden contractions, companies must aggressively focus on controlling operational costs and retaining customers."
    ],
    "roleplayTips": [
      "Say: 'Since the economy is entering an expansionary phase, we must aggressively increase production capacity.'",
      "Say: 'Contractionary periods require us to launch defensively focused customer loyalty programs.'",
      "Explain how accurately recognizing the business cycle's peak can decisively prevent crippling over-expansion."
    ]
  },
  "EC:019": {
    "keyPoints": [
      "Economic systems fundamentally determine how a society answers what, how, and for whom to produce.",
      "Every system must strategically manage the universal problem of seemingly unlimited wants versus scarce resources.",
      "Market systems rely heavily on independent, decentralized consumer choices and competitive market forces.",
      "Command systems rely almost entirely on rigid, centralized government planning to direct resource allocation."
    ],
    "roleplayTips": [
      "Say: 'Our economic system strongly relies on consumer demand dictating what our factories produce.'",
      "Say: 'Understanding how this regional economic system allocates its scarce resources is completely vital.'",
      "Propose adapting the company's core pricing structure to fit firmly into a mixed market environment."
    ]
  },
  "EC:020": {
    "keyPoints": [
      "Private enterprise is uniquely defined by individual ownership and the voluntary direction of production means.",
      "It is primarily fueled by the deeply ingrained profit motive, driving non-stop innovation and tight efficiency.",
      "Robust competition exists naturally, forcing companies to continually improve products to survive.",
      "Consumers hold ultimate, undisputed power, decisively 'voting' with their wallets on prevailing market trends."
    ],
    "roleplayTips": [
      "Say: 'In a true private enterprise system, our continued survival fiercely depends on out-innovating rivals.'",
      "Say: 'We must deeply respect consumer sovereignty because buyers dictate our product dev roadmap.'",
      "Highlight how our freedom to aggressively pursue profits allows for taking calculated entrepreneurial risks."
    ]
  },
  "EC:021": {
    "keyPoints": [
      "Profit intrinsically depends on both tightly managing internal operating costs and wildly fluctuating market demand.",
      "An unexpected change in critical raw material costs can suddenly and drastically reduce gross profit margins.",
      "High employee turnover inherently leads to plunging productivity and significantly lowered bottom-line profits.",
      "Strategic, dynamic pricing can quickly elevate overall revenue without directly impacting internal processing costs."
    ],
    "roleplayTips": [
      "Say: 'If we can effectively streamline our supply lines, our net profit will securely increase with no price hikes.'",
      "Say: 'Let\\'s thoroughly analyze how this new local competitor is tangibly affecting our current profit margins.'",
      "Suggest entirely automating a specific repetitive task to tangibly and permanently improve profit margins."
    ]
  },
  "EC:022": {
    "keyPoints": [
      "Business risk is defined as the distinct, ever-present possibility of experiencing a painful financial loss or absolute failure.",
      "Economic risks are essentially macroeconomic shifts, such as inflation spikes, sudden recessions, or soaring exchange rates.",
      "Natural risks heavily involve totally unpredictable disruptions, like unexpected severe weather or sudden natural disasters.",
      "Human risks inherently stem entirely from people, including employee theft, sheer incompetence, or devastating customer lawsuits."
    ],
    "roleplayTips": [
      "Say: 'We must proactively hedge against massive economic risk by aggressively diversifying our vendor supply base.'",
      "Say: 'To substantially mitigate terrible human risk, we should enforce incredibly strict quality control checklists.'",
      "Discuss actively purchasing specific corporate insurance to powerfully transfer catastrophic natural disaster risks."
    ]
  }
};

for (const [key, details] of Object.entries(updates)) {
    const blockRegex = new RegExp('("' + key + '": \\{[\\s\\S]*?"keyPoints": )(\\[[\\s\\S]*?\\])(,[\\s\\S]*?"roleplayTips": )(\\[[\\s\\S]*?\\])(\\s*\\})', 'g');
    
    data = data.replace(blockRegex, (match, prefix1, oldKeyPoints, mid, oldRoleplayTips, suffix) => {
        const formattedKeys = JSON.stringify(details.keyPoints, null, 4).split('\\n').map((l, i) => i === 0 ? l : '      ' + l).join('\\n');
        const formattedTips = JSON.stringify(details.roleplayTips, null, 4).split('\\n').map((l, i) => i === 0 ? l : '      ' + l).join('\\n');
        return prefix1 + formattedKeys + mid + formattedTips + suffix;
    });
}
fs.writeFileSync(path, data);
console.log('Chunk 4 updated.');

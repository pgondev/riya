const fs = require('fs');
const path = 'src/data/performance-indicators.ts';
let data = fs.readFileSync(path, 'utf8');

const updates = {
  "EC:011": {
    "keyPoints": [
      "Business risks include economic, natural, and human risks that can cause financial loss.",
      "Economic risks involve changes in overall market conditions or customer demand.",
      "Natural risks encompass unpredictable phenomena like weather events or natural disasters.",
      "Human risks involve unpredictable factors like employee negligence, theft, or errors."
    ],
    "roleplayTips": [
      "Say: 'We need to continually assess economic risks to maintain our profit margin buffer.'",
      "Say: 'Our risk management plan currently lacks proper contingencies for natural disasters.'",
      "Propose comprehensive employee training programs to effectively mitigate human risk."
    ]
  },
  "EC:012": {
    "keyPoints": [
      "Competition is the active rivalry among businesses to secure consumer dollars.",
      "Direct competition offers identical or similar products solving the same need.",
      "Indirect competition offers completely different products that serve the same need.",
      "It typically leads to lower prices, higher-quality products, and faster innovation."
    ],
    "roleplayTips": [
      "Say: 'We must deeply differentiate our product to stand out against direct competition.'",
      "Say: 'Never underestimate the threat posed by our agile indirect competitors.'",
      "Draft a focused strategy emphasizing quality specifically to counter price-based competition."
    ]
  },
  "EC:013": {
    "keyPoints": [
      "Productivity is essentially the ratio of outputs produced relative to inputs used.",
      "High productivity inherently leads to an improved overall standard of living.",
      "It can be significantly boosted through training, advanced equipment, or new technology.",
      "Workers typically benefit through higher wages and better working environments."
    ],
    "roleplayTips": [
      "Say: 'By adopting this new automated software, we will see immediate productivity gains.'",
      "Say: 'Our focus must be on increasing output quantity without sacrificing any input quality.'",
      "Pitch a targeted performance-based bonus structure designed to boost team productivity."
    ]
  },
  "EC:014": {
    "keyPoints": [
      "Specialization occurs when workers focus entirely on a specific, narrow task.",
      "Division of labor physically breaks down a massive job into several smaller tasks.",
      "These methods drastically increase efficiency and output while lowering unit costs.",
      "Potential drawbacks include extreme worker boredom, fatigue, and lower morale."
    ],
    "roleplayTips": [
      "Say: 'Implementing division of labor on the assembly line will massively slash assembly times.'",
      "Say: 'We need to aggressively combat the worker burnout often caused by extreme specialization.'",
      "Suggest rotating highly specialized tasks specifically to keep employee engagement high."
    ]
  },
  "EC:015": {
    "keyPoints": [
      "Organized labor represents workers uniting to negotiate fiercely for better conditions.",
      "Unions leverage collective bargaining to agree on wages, benefits, and hours.",
      "Disputes can occasionally lead to tactics like strikes, picketing, or eventual lockouts.",
      "Businesses must aim for collaborative, mutually beneficial union-management relations."
    ],
    "roleplayTips": [
      "Say: 'We must approach upcoming union negotiations aiming for a genuinely win-win outcome.'",
      "Say: 'Addressing these safety grievances proactively will smoothly prevent organized labor actions.'",
      "Propose establishing a joint labor-management committee to continuously address concerns."
    ]
  },
  "EC:016": {
    "keyPoints": [
      "Global trade encompasses the complex exchange of goods and services across national borders.",
      "It provides consumers access to an incredibly wider variety of competitively priced products.",
      "Businesses benefit tremendously from larger potential markets and scaled production.",
      "It heavily depends on concepts of absolute and comparative market advantage."
    ],
    "roleplayTips": [
      "Say: 'Entering the global trade market will exponentially multiply our potential customer base.'",
      "Say: 'We must carefully evaluate if we possess a true comparative advantage in this region.'",
      "Recommend sourcing specific raw materials internationally to aggressively reduce supply chain costs."
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
console.log('Chunk 3 updated.');

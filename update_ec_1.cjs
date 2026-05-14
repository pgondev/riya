const fs = require('fs');
const path = 'src/data/performance-indicators.ts';
let data = fs.readFileSync(path, 'utf8');

const updates = {
  "EC:001": {
    "keyPoints": [
      "Economics studies how societies manage scarcity and allocate resources.",
      "Activities include production, distribution, and consumption.",
      "Decisions require trade-offs known as opportunity costs.",
      "Indicators guide businesses through different shifting market conditions."
    ],
    "roleplayTips": [
      "Say: 'Every investment has an opportunity cost we must evaluate.'",
      "Say: 'Our economic choices must align with consumer demand.'",
      "Explain the opportunity cost of launching a marketing campaign versus hiring."
    ]
  },
  "EC:002": {
    "keyPoints": [
      "Economic goods are tangible products that can be stored and touched.",
      "Economic services are intangible, perishable actions performed for customers.",
      "Many businesses use a hybrid model combining both goods and services.",
      "Distinction dictates different types of marketing, pricing, and distribution strategies."
    ],
    "roleplayTips": [
      "Say: 'Adding a premium service to our physical goods boosts margins.'",
      "Say: 'We must market the exceptional service experience, not just the good.'",
      "Propose an extended warranty service to pair with physical products."
    ]
  },
  "EC:003": {
    "keyPoints": [
      "Natural resources (Land) include materials extracted from nature.",
      "Human resources (Labor) encompass the physical and mental effort of people.",
      "Capital resources represent man-made items used to produce other goods.",
      "Entrepreneurship coordinates other resources to bear risk and innovate."
    ],
    "roleplayTips": [
      "Say: 'Investing in human resources makes our capital resources run better.'",
      "Say: 'Our entrepreneurial vision turns raw inputs into profitable outputs.'",
      "Analyze how a shortage of natural resources affects capital deployments."
    ]
  },
  "EC:004": {
    "keyPoints": [
      "Form utility converts raw components into a highly valuable finished product.",
      "Place utility makes items available exactly where consumers wish to buy them.",
      "Time utility ensures products reach the market when demand is at its absolute peak.",
      "Possession utility makes it as incredibly easy as possible for a customer to purchase."
    ],
    "roleplayTips": [
      "Say: 'We can improve time utility by offering 24/7 online customer support.'",
      "Say: 'Let\\'s vastly increase our place utility by partnering with local retailers.'",
      "Suggest adding installment plans to massively increase possession utility."
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
console.log('Chunk 1 updated.');

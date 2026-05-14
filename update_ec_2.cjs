const fs = require('fs');
const path = 'src/data/performance-indicators.ts';
let data = fs.readFileSync(path, 'utf8');

const updates = {
  "EC:005": {
    "keyPoints": [
      "Supply represents the quantity of goods producers are willing to provide at a certain price.",
      "Demand dictates the quantity of goods consumers are willing to purchase at a given price.",
      "The point where supply meets demand creates an equilibrium price point.",
      "Shifts in supply/demand can occur due to trends, scarce resources, or cost of production."
    ],
    "roleplayTips": [
      "Say: 'With demand suddenly increasing, we should capitalize by adjusting prices upward.'",
      "Say: 'A surplus means supply exceeds demand; let\\'s scale back production temporarily.'",
      "Explain how a competitor\\'s marketing strategy is shifting overall market demand."
    ]
  },
  "EC:006": {
    "keyPoints": [
      "Prices serve as signals to both producers and consumers about market conditions.",
      "They ration scarce resources to those who assign them the highest value.",
      "Prices provide incentives for businesses to produce more or enter new markets.",
      "Flexible pricing ensures markets clear, preventing long-term surpluses or shortages."
    ],
    "roleplayTips": [
      "Say: 'We can use pricing as an incentive signal to manage our inventory turnover.'",
      "Say: 'Our premium pricing conveys a strong signal of top-tier quality.'",
      "Propose dynamic pricing during peak hours to effectively ration our limited capacity."
    ]
  },
  "EC:007": {
    "keyPoints": [
      "Traditional economies rely on customs, history, and time-honored beliefs.",
      "Command economies feature centralized control where the government makes key decisions.",
      "Market economies base decisions on supply, demand, and free-market interactions.",
      "Mixed economies combine private enterprise with various government regulations."
    ],
    "roleplayTips": [
      "Say: 'In our mixed economy, we must balance free-market innovation with regulatory compliance.'",
      "Say: 'Our strategic plan relies on exploiting the opportunities present in a growing market economy.'",
      "Analyze how expanding into a command-leaning mixed economy alters operational risks."
    ]
  },
  "EC:008": {
    "keyPoints": [
      "Government acts as an employer, purchaser, and provider of public goods/services.",
      "Regulations protect consumers, workers, and the environment from harmful practices.",
      "Taxation and subsidies are critical mechanisms used to correct market failures.",
      "Anti-trust laws promote competition and prevent monopolistic behavior."
    ],
    "roleplayTips": [
      "Say: 'Government subsidies for sustainable tech will drastically lower our overhead.'",
      "Say: 'We must proactively align our operations to exceed the new regulatory standards.'",
      "Outline how recent changes in tax policy should drive our expansion timeline."
    ]
  },
  "EC:009": {
    "keyPoints": [
      "Private enterprise gives individuals the freedom to own the means of production.",
      "The distinct profit motive drives continuous entrepreneurial innovation and efficiency.",
      "Consumer sovereignty means that buyers ultimately dictate what gets produced.",
      "Voluntary exchange allows buyers and sellers to willingly engage in mutual-benefit trades."
    ],
    "roleplayTips": [
      "Say: 'The profit motive directly incentivizes our team to optimize the supply chain.'",
      "Say: 'Under consumer sovereignty, our product development must be entirely user-led.'",
      "Propose a new private initiative that leverages our freedom to disrupt the market."
    ]
  },
  "EC:010": {
    "keyPoints": [
      "Profit is calculated as total revenue minus the total costs incurred.",
      "External factors include economic cycles, intense competition, and demographic shifts.",
      "Internal factors include pricing strategies, employee productivity, and waste reduction.",
      "Gross profit differs from net profit; effective cost control enhances the latter."
    ],
    "roleplayTips": [
      "Say: 'Maximizing our net profit requires optimizing our variable and fixed costs.'",
      "Say: 'The sudden competitor entry is an external factor threatening our profit margins.'",
      "Explain how a minor tweak in raw material sourcing yields a large net profit increase."
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
console.log('Chunk 2 updated.');

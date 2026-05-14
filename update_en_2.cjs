const fs = require('fs');
const path = 'src/data/performance-indicators.ts';
let data = fs.readFileSync(path, 'utf8');

const updates = {
  "EN:006": {
    "keyPoints": [
      "Resource acquisition involves strategically gathering the essential financial, human, and physical assets required to launch.",
      "Financial resources include personal savings, bank loans, angel investors, or venture capital.",
      "Human resources involve recruiting skilled co-founders and vital early employees.",
      "Physical and intellectual resources include necessary equipment, patents, and real estate."
    ],
    "roleplayTips": [
      "Say: 'We must secure a robust seed round to acquire the necessary specialized manufacturing equipment.'",
      "Say: 'Recruiting an experienced CTO is our top human resource acquisition priority.'",
      "Explain how leasing rather than buying significantly reduces initial capital requirements."
    ]
  },
  "EN:007": {
    "keyPoints": [
      "Market analysis rigorously evaluates the size, growth rate, and profitability of a specific target market.",
      "It requires deep research into customer demographics, purchasing behavior, and competitor strengths.",
      "A strong analysis identifies both macroeconomic trends and hyper-local market nuances.",
      "Entrepreneurs use this data to accurately position their product and forecast realistic sales."
    ],
    "roleplayTips": [
      "Say: 'Our comprehensive market analysis reveals an underserved demographic in the suburban millennial segment.'",
      "Say: 'We must deeply analyze the competitor landscape before determining our ideal launch pricing.'",
      "Discuss how shifting macroeconomic trends affect the overall viability of the target market."
    ]
  },
  "EN:008": {
    "keyPoints": [
      "Startup financial management focuses heavily on fiercely protecting precarious cash flow and extending the financial runway.",
      "Founders must rigorously track every single expense and aggressively manage their monthly burn rate.",
      "Accurate financial forecasting is essential for knowing exactly when to seek additional funding rounds.",
      "Key metrics include Customer Acquisition Cost (CAC) and Customer Lifetime Value (LTV)."
    ],
    "roleplayTips": [
      "Say: 'We must aggressively reduce our monthly burn rate to strategically extend our runway by six months.'",
      "Say: 'If our Customer Acquisition Cost remains higher than our Lifetime Value, we will bleed capital rapidly.'",
      "Explain how accurately forecasting our cash flow prevents unexpected, catastrophic insolvency."
    ]
  },
  "EN:009": {
    "keyPoints": [
      "Startup operations management involves designing highly efficient, scalable daily workflows from scratch.",
      "It requires choosing the right software tools, establishing standard operating procedures, and managing the supply chain.",
      "Lean operations focus on minimizing waste and maximizing speed to market.",
      "Operations must remain highly flexible in the early stages to accommodate rapid product pivots."
    ],
    "roleplayTips": [
      "Say: 'By implementing this lean inventory system, we can drastically reduce our upfront warehousing costs.'",
      "Say: 'We need to formally document our standard operating procedures before we hire our next wave of employees.'",
      "Discuss how a highly agile supply chain allows us to rapidly pivot our product based on early user feedback."
    ]
  },
  "EN:010": {
    "keyPoints": [
      "Scaling a business means rapidly increasing revenue without a proportional, crippling increase in operational costs.",
      "It requires transitioning from a founder-led 'do everything' approach to a structured, highly delegated management team.",
      "Successful scaling heavily relies on aggressively automating entirely repetitive processes and securing reliable supply lines.",
      "Premature scaling (expanding before product-market fit is firmly established) is a leading cause of startup failure."
    ],
    "roleplayTips": [
      "Say: 'We have firmly achieved product-market fit; it is now time to aggressively scale our marketing spend.'",
      "Say: 'To successfully scale operations globally, we must fully automate our customer onboarding process.'",
      "Explain how prematurely scaling our sales team before fixing the core product will only accelerate our burn rate."
    ]
  }
};

for (const [key, details] of Object.entries(updates)) {
    const blockRegex = new RegExp('("' + key + '": \\{[\\s\\S]*?"keyPoints": )(\\[[\\s\\S]*?\\])(,[\\s\\S]*?"roleplayTips": )(\\[[\\s\\S]*?\\])(\\s*\\})', 'g');
    
    data = data.replace(blockRegex, (match, prefix1, oldKeyPoints, mid, oldRoleplayTips, suffix) => {
        const formattedKeys = JSON.stringify(details.keyPoints, null, 4).split('\n').map((l, i) => i === 0 ? l : '      ' + l).join('\n');
        // If roleplayTips is not present in updates, fallback to original or handle it
        let formattedTips = "[\n      ]"
        if (details.roleplayTips) {
            formattedTips = JSON.stringify(details.roleplayTips, null, 4).split('\n').map((l, i) => i === 0 ? l : '      ' + l).join('\n');
        }
        return prefix1 + formattedKeys + mid + (details.roleplayTips ? formattedTips : oldRoleplayTips) + suffix;
    });
}
fs.writeFileSync(path, data);
console.log('Chunk 2 updated.');

const fs = require('fs');
const path = 'src/data/performance-indicators.ts';
let data = fs.readFileSync(path, 'utf8');

const updates = {
  "EC:023": {
    "keyPoints": [
      "The law of diminishing returns forcefully states that adding more of one factor of production perfectly eventually yields lower per-unit output.",
      "Initially, aggressively adding labor to fixed capital sharply increases overall production efficiency.",
      "Eventually, simply adding more workers creates severe bottlenecks, deeply reducing the marginal product of each additional hire.",
      "Businesses must accurately identify optimal staffing levels to absolutely avoid inadvertently diminishing their returns."
    ],
    "roleplayTips": [
      "Say: 'If we blindly hire ten more people for this incredibly small kitchen, we will immediately hit deeply diminishing returns.'",
      "Say: 'We need to smartly invest in entirely new equipment rather than just endlessly adding labor to this single machine.'",
      "Explain how accurately tracking marginal output explicitly prevents extremely wasteful overstaffing."
    ]
  },
  "EC:070": {
    "keyPoints": [
      "Businesses fundamentally exist to solve complex societal problems by efficiently providing heavily demanded goods and services.",
      "They actively generate vast wealth, create millions of jobs, and pay essential taxes vital for public infrastructure.",
      "Businesses continuously foster immense societal innovation by developing wildly new technologies and deeply efficient methods.",
      "Corporate social responsibility dictates businesses must also actively strive to ethically improve their surrounding communities."
    ],
    "roleplayTips": [
      "Say: 'Our core business directly empowers precisely local economic growth by steadily employing over a hundred local residents.'",
      "Say: 'We hold a massive social responsibility to ensure all of our manufacturing processes perfectly minimize ecological damage.'",
      "Discuss how launching a highly visible community outreach program powerfully enhances the firm's overarching societal role."
    ]
  },
  "EC:071": {
    "keyPoints": [
      "Primary business activities deeply involve incredibly critical functions like cutting-edge marketing, complex finance, and seamless operations.",
      "Financial management firmly ensures the business stays highly solvent and optimally funds all future strategic growth.",
      "Marketing explicitly identifies vast consumer needs, subsequently designing brilliant strategies to completely fulfill them.",
      "Operations intricately handle the day-to-day massive production and totally efficient delivery of all core products and services."
    ],
    "roleplayTips": [
      "Say: 'We strictly need better cross-departmental communication explicitly between our complex finance and fast-paced marketing operations.'",
      "Say: 'Optimizing our incredibly complex core operations will undoubtedly allow our marketing team to fiercely promote much faster delivery.'",
      "Propose completely reorganizing specific internal business activities to massively streamline absolutely essential product development."
    ]
  },
  "EC:072": {
    "keyPoints": [
      "Taxes are purely mandatory, strictly enforced financial charges heavily levied by the government perfectly on individuals and massive corporations.",
      "They fundamentally provide arguably the core essential revenue explicitly required to heavily fund all vital public goods and deeply needed services.",
      "Direct taxes specifically include heavily enforced income and robust property taxes directly paid completely to the acting government.",
      "Indirect taxes undeniably include things like broad sales taxes securely collected by businesses but effectively passed seamlessly to consumers."
    ],
    "roleplayTips": [
      "Say: 'We must proactively account for suddenly fluctuating corporate tax rates entirely within our massive long-term financial modeling.'",
      "Say: 'By intelligently locating our sprawling new headquarters aggressively here, we naturally leverage significant municipal tax incentives.'",
      "Discuss precisely how heavily increasing massive sales taxes might quickly negatively affect targeted direct consumer retail spending."
    ]
  },
  "EC:081": {
    "keyPoints": [
      "Consumer spending undeniably constitutes overwhelmingly the largest singular, massive component of absolute gross domestic product (GDP).",
      "High levels of confident consumer spending solidly indicate an incredibly healthy, rapidly expanding, and broadly optimistic macro-economy.",
      "Conversely, heavily decreased consumer spending starkly signals deeply pervasive economic uncertainty or a brutally looming recession.",
      "Businesses rigorously track detailed spending metrics specifically to smartly adjust their overarching operational inventory and vast capital hiring."
    ],
    "roleplayTips": [
      "Say: 'With consumer spending decisively trending downward, we must completely pivot to heavily pushing our most resilient value-priced products.'",
      "Say: 'Strongly robust current consumer spending directly justifies our massive impending investment deeply into wildly expanding production.'",
      "Explain exactly how incredibly volatile consumer confidence metrics strictly dictate absolutely all immediate upcoming inventory ordering."
    ]
  },
  "EC:082": {
    "keyPoints": [
      "Unemployment rates explicitly measure the exact percentage of the able labor force that is entirely currently without a job but actively seeking one.",
      "High unemployment drastically reduces overall macroeconomic consumer spending entirely due to significantly lower total disposable income.",
      "Low unemployment inherently makes it incredibly difficult and painfully expensive for rapidly expanding businesses to efficiently hire top talent.",
      "Different types powerfully include deeply cyclical, naturally frictional, and violently disruptive structural unemployment."
    ],
    "roleplayTips": [
      "Say: 'Because local unemployment is historically low, we absolutely must dramatically increase our entry-level wage precisely to fiercely attract candidates.'",
      "Say: 'High cyclical unemployment in this devastated region strongly means our premium luxury product lines will inevitably struggle mightily.'",
      "Highlight specifically how heavily adapting our corporate training actively combats deeply pervasive regional structural technological unemployment."
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
console.log('Chunk 5 updated.');

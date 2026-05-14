const fs = require('fs');
const path = 'src/data/performance-indicators.ts';
let data = fs.readFileSync(path, 'utf8');

const updates = {
  "EN:001": {
    "keyPoints": [
      "Entrepreneurship is the process of designing, launching, and running a new business.",
      "It requires a blend of innovation, calculated risk-taking, and strong leadership skills.",
      "Entrepreneurs solve problems by creating new products, services, or more efficient processes.",
      "Successful entrepreneurship heavily drives overall economic growth and significant job creation."
    ],
    "roleplayTips": [
      "Say: 'As an entrepreneur, my primary goal is specifically to disrupt this stagnant market with a radically new solution.'",
      "Say: 'We must strictly balance our aggressive innovation with deeply calculated, realistic financial risk.'",
      "Discuss precisely how fostering a strong entrepreneurial mindset internally encourages all employees to proactively submit exactly new ideas."
    ]
  },
  "EN:002": {
    "keyPoints": [
      "Innovation involves successfully introducing fundamentally new ideas, deeply original methods, or vastly improved products.",
      "It can be incredibly disruptive (creating entirely new markets) or strictly incremental (improving existing offerings).",
      "Continuous corporate innovation is absolutely vital for maintaining a strong, defensible long-term competitive advantage.",
      "A culture of robust innovation strongly encourages heavy experimentation and absolutely tolerates calculated failure."
    ],
    "roleplayTips": [
      "Say: 'This incremental innovation will exactly allow us to efficiently extend the profitable life cycle of our core product.'",
      "Say: 'We need to actively foster an environment where specifically failing fast and learning quickly is heavily rewarded.'",
      "Explain exactly how this highly disruptive innovation will completely fundamentally alter consumer expectations permanently."
    ]
  },
  "EN:003": {
    "keyPoints": [
      "Risk-taking is exactly the fundamental willingness to firmly commit vital resources to a potentially entirely unproven venture.",
      "Entrepreneurs absolutely must properly identify, carefully assess, and strategically mitigate potentially devastating financial risks.",
      "Calculated risk fiercely involves thoroughly explicitly weighing the massive potential downside precisely against the heavily outsized potential upside.",
      "Avoiding all risk strictly guarantees absolute corporate stagnation and eventually inevitable complete market failure."
    ],
    "roleplayTips": [
      "Say: 'This is an incredibly high-risk opportunity, but the massive potential market share definitively deeply justifies the explicit investment.'",
      "Say: 'We absolutely must carefully legally mitigate this specific severe risk by proactively acquiring comprehensive corporate insurance.'",
      "Discuss precisely how strictly performing a rigorous stress-test analysis accurately effectively minimizes thoroughly your exposure exactly to downside risk."
    ]
  },
  "EN:004": {
    "keyPoints": [
      "Opportunity recognition is explicitly the critical ability to accurately spot entirely unmet consumer needs or deeply inefficient market gaps.",
      "It actively requires constantly deeply observing shifting social trends, listening actively to customer pain points, and deeply analyzing precisely market data.",
      "Strong opportunities are strictly highly attractive, fundamentally durable, extremely timely, and entirely anchored precisely in a perfectly viable product.",
      "Recognizing an opportunity involves distinguishing between a fleeting fad and a sustainable, long-term market need."
    ],
    "roleplayTips": [
      "Say: 'I noticed a significant gap in the market for affordable, eco-friendly packaging solutions for small local businesses.'",
      "Say: 'By deeply analyzing recent demographic shifts, we can confidently identify a massive emerging opportunity in senior care services.'",
      "Explain how a rapid surge in remote work creates an entirely new set of unmet needs for robust home office ergonomics."
    ]
  },
  "EN:005": {
    "keyPoints": [
      "Business planning is the highly rigorous systematic process of explicitly outlining the precise strategic goals of a totally new commercial venture.",
      "A comprehensive business plan actively details the precise target massive market, strict operational strategies, and comprehensive exact financial projections.",
      "It crucially serves as a living roadmap for the founding team and a vital document for securing external investor funding.",
      "A strong plan forces entrepreneurs to critically evaluate their assumptions and address potential critical weaknesses early."
    ],
    "roleplayTips": [
      "Say: 'Our thorough business plan clearly demonstrates exactly how we will achieve sustainable profitability within the first thirty-six months.'",
      "Say: 'We need to heavily revise the financial projections in our business plan to accurately reflect these newly discovered higher manufacturing costs.'",
      "Discuss how presenting an incredibly detailed, highly professional business plan will dramatically increase our exact chances of securing venture capital."
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
console.log('Chunk 1 updated.');

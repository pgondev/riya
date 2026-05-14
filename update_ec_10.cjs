const fs = require('fs');
const path = 'src/data/performance-indicators.ts';
let data = fs.readFileSync(path, 'utf8');

const updates = {
  "EC:025": {
    "keyPoints": [
      "Inflation is a sustained increase in the general price level of goods and services in an economy.",
      "It critically reduces the purchasing power of money over time.",
      "Cost-push inflation occurs when production costs increase, while demand-pull inflation occurs when demand exceeds supply.",
      "Moderate inflation is generally considered a sign of a healthy geometry, while hyperinflation is economically destructive."
    ],
    "roleplayTips": [
      "Say: 'With inflation rising, we need to proactively adjust our pricing strategy to maintain our profit margins.'",
      "Say: 'Our suppliers are facing cost-push inflation, meaning our raw material costs will inevitably increase.'",
      "Explain how locking in long-term contracts now can hedge against anticipated future inflation."
    ]
  },
  "EC:026": {
    "keyPoints": [
      "Unemployment represents the percentage of the labor force that is jobless and actively seeking employment.",
      "Cyclical unemployment is tied directly to the business cycle, rising during recessions and falling during expansions.",
      "Structural unemployment occurs due to technological changes or shifts in the economy that make certain skills obsolete.",
      "Frictional unemployment is temporary and natural, occurring when people are actively transitioning between jobs."
    ],
    "roleplayTips": [
      "Say: 'High structural unemployment in our region means we might need to fundamentally invest in employee training programs.'",
      "Say: 'The current low unemployment rate makes recruiting highly competitive, requiring us to significantly improve our benefits package.'",
      "Discuss how cyclical unemployment trends might affect our projected quarterly sales."
    ]
  },
  "EC:027": {
    "keyPoints": [
      "Interest rates represent the fundamental cost of borrowing money, typically expressed as an annual percentage yield.",
      "Central banks actively manipulate interest rates to heavily influence overall economic growth and strictly control inflation.",
      "Low interest rates stimulate massive business investment and intense consumer spending by making borrowing cheap.",
      "High interest rates aggressively cool down an overheated economy but can quickly make corporate debt servicing incredibly expensive."
    ],
    "roleplayTips": [
      "Say: 'Since interest rates are currently low, precisely now is the time to secure major financing for our new facility.'",
      "Say: 'We absolutely must carefully evaluate how rising interest rates will heavily impact our customers\\' ability to afford our premium products.'",
      "Highlight specifically how creatively offering heavily subsidized consumer financing fundamentally combats high prevailing interest rates."
    ]
  },
  "EC:028": {
    "keyPoints": [
      "Business cycles describe the totally natural fluctuations in macroeconomic activity that an economy fundamentally experiences.",
      "They consist precisely of four distinct phases: expansion, peak, contraction (recession), and trough.",
      "Expansions are characterized by robust economic growth, massive job creation, and strongly rising consumer confidence.",
      "Contractions lead to widespread business closures, painfully high unemployment, and massively reduced overall consumer spending."
    ],
    "roleplayTips": [
      "Say: 'Because the economy is entering a contraction phase, we must aggressively prioritize extreme cost-cutting measures.'",
      "Say: 'We should proactively prepare our aggressive marketing strategy carefully to brutally capitalize on the upcoming economic expansion.'",
      "Explain exactly how diversifying our massive product line definitively minimizes extreme risk profoundly during a deep contraction."
    ]
  },
  "EC:029": {
    "keyPoints": [
      "Fiscal policy explicitly refers to exactly how a federal government aggressively adjusts its spending levels and incredibly strict tax rates.",
      "Expansionary fiscal policy (increased spending or massive lower taxes) specifically aims to strongly stimulate a deeply sluggish economy.",
      "Contractionary fiscal policy (decreased spending or sharply higher taxes) actively works to immediately cool down massive inflation.",
      "These powerful policies drastically and directly impact massive corporate profitability, extreme total consumer spending, and broad overall economic stability."
    ],
    "roleplayTips": [
      "Say: 'The proposed massive expansionary fiscal policy definitively means heavily increased government contracts specifically for our booming sector.'",
      "Say: 'We absolutely must carefully prepare closely for the distinctly negative impact sharply higher corporate taxes will explicitly have on our net profit.'",
      "Explain carefully how specifically anticipating these massive upcoming fiscal shifts smartly allows us to preemptively precisely adjust our overarching strategy."
    ]
  },
  "EC:030": {
    "keyPoints": [
      "Monetary policy strictly entails entirely how a national central bank explicitly manages massive currency supply and prevailing interest rates.",
      "Expansionary monetary policy definitively lowers rates precisely to aggressively stimulate massive corporate borrowing and total economic investment.",
      "Contractionary monetary policy actively raises rates specifically to aggressively brutally combat runaway massive unconstrained inflation.",
      "Central banks profoundly execute this definitively through massive open market operations, heavily precise discount rates, and extremely strict reserve requirements."
    ],
    "roleplayTips": [
      "Say: 'The central bank\\'s aggressive massive contractionary monetary policy firmly dictates we carefully delay exactly our massive capital expansion.'",
      "Say: 'We should strictly capitalize totally on this extremely incredibly loose massive monetary policy precisely to cheaply refinance perfectly all our outstanding debt.'",
      "Discuss precisely exactly how deeply anticipating explicitly the central bank's upcoming aggressive rate closely impacts our massive exact borrowing strategy."
    ]
  }
};

for (const [key, details] of Object.entries(updates)) {
    const blockRegex = new RegExp('("' + key + '": \\{[\\s\\S]*?"keyPoints": )(\\[[\\s\\S]*?\\])(,[\\s\\S]*?"roleplayTips": )(\\[[\\s\\S]*?\\])(\\s*\\})', 'g');
    
    data = data.replace(blockRegex, (match, prefix1, oldKeyPoints, mid, oldRoleplayTips, suffix) => {
        const formattedKeys = JSON.stringify(details.keyPoints, null, 4).split('\n').map((l, i) => i === 0 ? l : '      ' + l).join('\n');
        const formattedTips = JSON.stringify(details.roleplayTips, null, 4).split('\n').map((l, i) => i === 0 ? l : '      ' + l).join('\n');
        return prefix1 + formattedKeys + mid + formattedTips + suffix;
    });
}
fs.writeFileSync(path, data);
console.log('Chunk 10 updated.');

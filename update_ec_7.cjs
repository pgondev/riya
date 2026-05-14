const fs = require('fs');
const path = 'src/data/performance-indicators.ts';
let data = fs.readFileSync(path, 'utf8');

const updates = {
  "EC:107": {
    "keyPoints": [
      "Modern markets are highly dynamic, requiring extremely rapid and deeply thoughtful organizational adaptation.",
      "Organizations must continuously embrace profound agile methodologies specifically to quickly pivot their vast operations.",
      "Successfully adapting strictly involves relentlessly gathering and perfectly interpreting massive amounts of complex consumer data.",
      "Failing to aggressively adapt invariably leads directly to swift absolescence and complete market share loss."
    ],
    "roleplayTips": [
      "Say: 'Because our target market is definitively shifting strongly online, we must entirely re-tool our core distribution.'",
      "Say: 'We absolutely need a highly flexible, deeply responsive supply chain specifically to survive these rapid market changes.'",
      "Propose intelligently creating an internal innovation lab dedicated exclusively to fiercely anticipating future market transformations."
    ]
  },
  "EC:109": {
    "keyPoints": [
      "Globalization represents the undeniable, escalating trend of heavily integrating diverse global economies and distinct cultures.",
      "It radically intensifies absolute corporate competition but brilliantly opens up massively lucrative, previously inaccessible international markets.",
      "Deeply interconnected global supply chains clearly mean local disruptions can immediately cause devastating overarching global shortages.",
      "It profoundly demands a highly sophisticated, truly international perspective on all complex corporate hiring and strategic marketing."
    ],
    "roleplayTips": [
      "Say: 'Globalization literally forces us to fiercely directly compete explicitly with brilliant companies based halfway around the world.'",
      "Say: 'We uniquely must perfectly harmonize our underlying global brand message gracefully with deeply specific local cultural nuances.'",
      "Suggest actively recruiting highly experienced global supply chain experts to perfectly navigate our newly expanded international operations."
    ]
  },
  "EC:110": {
    "keyPoints": [
      "Cultural considerations are absolutely paramount exactly when attempting to flawlessly conduct highly sensitive global business.",
      "Profoundly differing customs, distinctly separate languages, and unique social values drastically impact essential consumer buying behavior.",
      "What is brilliantly considered absolutely brilliant marketing locally might be definitively seen as deeply highly offensive internationally.",
      "Businesses undeniably must heavily invest in rigorous, continuous cross-cultural negotiation training purposely for all their global executives."
    ],
    "roleplayTips": [
      "Say: 'Before we massively launch in Tokyo, we absolutely must rigorously localize every single piece of our specific marketing copy.'",
      "Say: 'Our aggressive, hard-selling negotiation style will definitively backfire violently in this purely relationship-driven culture.'",
      "Discuss precisely how heavily utilizing highly perceptive local cultural liaisons will brilliantly prevent completely devastating international PR disasters."
    ]
  },
  "EC:111": {
    "keyPoints": [
      "Electronic communication uniquely empowers truly instantaneous, perfectly seamless collaboration explicitly across disparate global time zones.",
      "Advanced tools radically slash essential corporate travel costs entirely while completely maintaining strong vital interpersonal connections.",
      "It brilliantly allows for extremely complicated, heavily decentralized global project management and highly coordinated massive product launches.",
      "However, it intensely requires definitively managing highly sensitive cross-border cybersecurity exactly against devastating global hacking threats."
    ],
    "roleplayTips": [
      "Say: 'By deeply standardizing our electronic communication platforms completely, our global teams will finally collaborate perfectly seamlessly.'",
      "Say: 'We absolutely must implement profoundly strict international encryption protocols specifically to definitively secure our global data transfers.'",
      "Explain exactly how incredibly advanced digital collaboration tools perfectly allow us to seamlessly run flawless 24/7 global operations."
    ]
  },
  "EC:112": {
    "keyPoints": [
      "Major trade alliances are formally established, legally binding agreements specifically between massive nations firmly intended to strongly promote free trade.",
      "They fundamentally work by explicitly tearing down massive historical tariffs and aggressively removing complex obstructive restrictive quotas.",
      "By efficiently completely removing massive trade barriers, these alliances massively simulate deeply lucrative international aggregate economic growth.",
      "Businesses uniquely operating securely within these alliances absolutely enjoy deeply unfair massive competitive advantages explicitly over external firms."
    ],
    "roleplayTips": [
      "Say: 'The newly signed trade alliance definitively allows us to seamlessly export our products completely totally tariff-free to three new countries.'",
      "Say: 'We absolutely must quickly completely restructure our massive international shipping logistics to explicitly violently exploit these new alliance rules.'",
      "Highlight specifically how aggressively opening a new manufacturing plant explicitly inside the alliance zone firmly bypasses all former restrictive quotas."
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
console.log('Chunk 7 updated.');

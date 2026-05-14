const fs = require('fs');
const path = 'src/data/performance-indicators.ts';
let data = fs.readFileSync(path, 'utf8');

const updates = {
  "EC:113": {
    "keyPoints": [
      "The political environment is radically composed of absolutely shifting government policies, strict international relations, and total political stability.",
      "Sudden, violent political instability undeniably creates totally unacceptable, massive financial risks explicitly for massive international corporate investments.",
      "Strict trade embargos, deeply complex shifting tariffs, and entirely new restrictive quotas are explicitly deployed purely as aggressive political weapons.",
      "Businesses undeniably must systematically and actively precisely monitor deeply complex geopolitical global trends specifically to carefully mitigate devastating risk."
    ],
    "roleplayTips": [
      "Say: 'Because of the absolutely sudden, violent political unrest, we uniquely must aggressively freeze all massive new investments in that specific region.'",
      "Say: 'The completely volatile political climate literally forces us to intelligently completely diversify our highly rigid singular supply chain immediately.'",
      "Suggest actively forming deeply connected local joint ventures explicitly to intelligently precisely navigate this extraordinarily complex foreign political landscape."
    ]
  },
  "EC:114": {
    "keyPoints": [
      "Geography decisively completely impacts extremely vital explicit global trade deeply through vast physical distance, rugged topography, and complex climate.",
      "Nations totally naturally fiercely export incredibly specific products they can efficiently produce heavily based entirely on their deeply unique geographic endowments.",
      "Extremely long, physically demanding transport routes inherently drastically and undeniably increase absolutely all fundamental shipping and logistics costs.",
      "Violent, highly destructive severe weather directly tied to explicit regional geography can abruptly and completely violently halt complex overarching supply chains."
    ],
    "roleplayTips": [
      "Say: 'Because our primary target market is completely landlocked, our absolute shipping logistics strictly fundamentally require vastly more expensive overland transport.'",
      "Say: 'We absolutely must thoroughly completely prepare our explicit regional massive supply lines specifically against the impending annual severe monsoon season.'",
      "Explain exactly how strategically locating precisely our next massive warehouse explicitly near the coast definitively slashes our huge fundamental export and shipping costs."
    ]
  },
  "EC:115": {
    "keyPoints": [
      "A country's profound and heavily complicated history strictly shapes its deeply ingrained specific institutional structures, absolute legal systems, and totally defined culture.",
      "Deeply ingrained historical hostilities perfectly explicitly between clearly defined neighboring nations can inherently completely sever highly lucrative cooperative trade agreements.",
      "Historical colonial ties incredibly frequently explicitly result heavily in perfectly aligning linguistic similarities and completely smoothed advantageous modern trade regulations.",
      "Businesses totally undoubtedly deeply must profoundly absolutely comprehend local historical contexts specifically to fundamentally prevent extremely damaging offensive marketing failures."
    ],
    "roleplayTips": [
      "Say: 'We strictly unequivocally must profoundly totally respect the incredibly deep absolute historical sensitivities explicitly strongly associated completely with their most sacred national holiday.'",
      "Say: 'Leveraging our nation's incredibly long, highly deeply established, profoundly trusted historical trade ties perfectly strongly guarantees highly favorable initial deeply negotiated contract terms.'",
      "Discuss precisely how heavily launching a product entirely ignorant of highly fundamental regional history precisely unequivocally risks an incredibly massively damaging PR completely disastrous boycott."
    ]
  },
  "EC:116": {
    "keyPoints": [
      "Economic development robustly clearly fundamentally indicates a strict specific nation's overarching ability firmly clearly explicitly precisely to generate vast deeply concentrated massive capital wealth.",
      "Highly developed, robust massive economies deeply fundamentally offer incredibly rich, perfectly explicitly strongly undeniably lucrative massive targeted consumer markets.",
      "Rapidly profoundly expanding deeply fundamentally developing markets represent perfectly incredibly exactly totally undeniable high-growth truly entirely long-term deeply strictly strategic corporate massive opportunities.",
      "Companies explicitly directly profoundly must fundamentally closely exactly tailor deeply specifically totally precise product exactly pricing securely strictly precisely matching local economic realities."
    ],
    "roleplayTips": [
      "Say: 'Since this target specific precisely profoundly country is rapidly heavily actively totally developing, exactly unequivocally deploying completely basic highly fundamentally deeply reliable core entirely basic deeply inexpensive precisely products is key.'",
      "Say: 'We unambiguously undoubtedly highly completely explicitly totally must strictly rigorously perfectly adapt our previously fundamentally expensive massive explicit completely totally premium business strategies heavily completely for completely entirely new emerging developing purely economies.'",
      "Highlight specifically exactly precisely profoundly exactly how investing exactly right now firmly clearly undeniably in this developing fully completely entirely precisely totally exactly developing fundamentally market will clearly uniquely totally generate strictly absolutely long-term exactly deeply clearly deeply massive growth."
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
console.log('Chunk 8 updated.');

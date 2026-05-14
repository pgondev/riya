const fs = require('fs');
const path = 'src/data/performance-indicators.ts';
let data = fs.readFileSync(path, 'utf8');

const updates = {
  "EC:083": {
    "keyPoints": [
      "Inflation is defined as the sustained, general increase in prices across an entire economy over time.",
      "It heavily erodes absolute consumer purchasing power, meaning individual dollars buy progressively fewer goods.",
      "High inflation aggressively forces businesses to continually increase their own prices or suffer radically shrinking margins.",
      "Unpredictable inflation severely hampers incredibly vital long-term corporate financial planning and capital investments."
    ],
    "roleplayTips": [
      "Say: 'Because inflation is steeply driving up our supply costs, we must cautiously adjust our retail pricing tiers.'",
      "Say: 'We should proactively lock into long-term fixed vendor contracts strictly to heavily insulate us against upcoming inflation.'",
      "Explain precisely how our targeted value-oriented product lines securely protect consumers absolutely battered by high inflation."
    ]
  },
  "EC:084": {
    "keyPoints": [
      "Interest rates represent the strict foundational cost of explicitly borrowing money or the exact reward for securely saving it.",
      "High interest rates purposely make corporate borrowing heavily expensive, which brutally suppresses aggressive massive business expansions.",
      "Low interest rates dynamically encourage intense consumer borrowing and massive spending, strongly boosting total corporate sales.",
      "Fluctuations completely shift incredibly sensitive consumer behavior, particularly directly impacting massive industries like dense housing or vehicles."
    ],
    "roleplayTips": [
      "Say: 'Since the national interest rates are finally plummeting, completely now is the time to cheaply finance our massive new warehouse.'",
      "Say: 'High interest rates deeply hurt our customers\\' exact ability to explicitly finance our premium luxury vehicles.'",
      "Highlight specifically how creatively offering heavily subsidized, zero-percent consumer financing fiercely combats high prevailing interest rates."
    ]
  },
  "EC:100": {
    "keyPoints": [
      "Exchange rates dictate the absolute equivalent value of one specific national currency strictly in terms of another completely different currency.",
      "Rates are explicitly determined dynamically by free-floating supply and demand strictly within the vast foreign exchange market.",
      "Key determinants powerfully include explicitly relative inflation, prevailing interest rates, and overall macroeconomic governmental stability.",
      "A strong domestic currency specifically makes incredibly cheap international imports but severely hurts highly reliant domestic national exporters."
    ],
    "roleplayTips": [
      "Say: 'Because the Euro is aggressively strengthening strictly against the Dollar, our exact European exports will undoubtedly become painfully expensive.'",
      "Say: 'We absolutely must comprehensively hedge our massive impending foreign currency exposure directly using targeted financial derivatives.'",
      "Explain effectively how securely locking in explicitly fixed international exchange rates profoundly stabilizes our unpredictable global supply chain."
    ]
  },
  "EC:103": {
    "keyPoints": [
      "Organizational design is the systematic, highly structured alignment of a strict business's people completely with its core strategy.",
      "It explicitly dictates precise reporting lines, strict overall authority, and incredibly detailed spans of managerial control.",
      "Centralized designs boldly keep strict, absolute decision-making power entirely at the very top executive level.",
      "Decentralized designs dynamically push vital decision-making strictly down to absolutely empower frontline responsive employees."
    ],
    "roleplayTips": [
      "Say: 'Switching strictly to a flat organizational design will powerfully accelerate our notoriously slow product development decisions.'",
      "Say: 'Our highly decentralized matrix structure dynamically empowers strictly cross-functional teams to flawlessly innovate faster.'",
      "Discuss how meticulously restructuring explicitly specific reporting lines will fiercely eliminate current crippling operational bottlenecks."
    ]
  },
  "EC:104": {
    "keyPoints": [
      "The global environment is heavily characterized by incredibly complex, totally interconnected international financial markets.",
      "It intensely requires deeply understanding profoundly different regional laws, strict governmental regulations, and vastly differing cultural norms.",
      "Technological advancements have radically dissolved traditional borders, suddenly creating truly instantaneous global consumer markets.",
      "Businesses undeniably face aggressively heightened international competition explicitly demanding extraordinarily high absolute operational efficiency."
    ],
    "roleplayTips": [
      "Say: 'To survive completely in this hyper-competitive global environment, we uniquely must profoundly localize our strict global marketing.'",
      "Say: 'We absolutely cannot thoughtlessly apply our strict domestic operational strategies completely unchanged into emerging global markets.'",
      "Suggest actively forming deeply strategic international partnerships explicitly to smartly navigate complex alien global regulatory environments."
    ]
  },
  "EC:105": {
    "keyPoints": [
      "The business environment consists of overwhelmingly powerful external and massively complex internal factors explicitly impacting operations.",
      "External factors strictly include wildly volatile economic forces, incredibly dynamic social trends, and abruptly shifting political climates.",
      "Internal factors precisely involve extremely tight corporate culture, overall employee morale, and exact available financial capital.",
      "A proactive business brilliantly performs constant PESTLE analyses specifically to fiercely anticipate all upcoming external environmental threats."
    ],
    "roleplayTips": [
      "Say: 'This rapidly shifting external social trend vehemently demands we immediately pivot our entire core marketing message.'",
      "Say: 'By proactively monitoring our exact regulatory environment, we completely avoided that massive industry-wide fine.'",
      "Explain exactly how fiercely upgrading our intensely flawed internal corporate culture perfectly creates a highly resilient overall business environment."
    ]
  },
  "EC:106": {
    "keyPoints": [
      "Business ethics involve exactly applying strict moral standards perfectly to all complex corporate decision-making and operational conduct.",
      "Ethical businesses strictly prioritize unyielding honesty, total total transparency, and completely unwavering fairness explicitly above short-term profit.",
      "Unethical behavior aggressively destroys decades of incredibly fragile public trust and violently invites devastating governmental regulatory action.",
      "A strong, clearly explicitly defined corporate ethical code powerfully guides all employees through incredibly ambiguous, highly difficult moral dilemmas."
    ],
    "roleplayTips": [
      "Say: 'Losing an absolutely massive sale is completely and totally acceptable if definitively securing it required intensely violating our core ethics.'",
      "Say: 'We uniquely must strictly enforce perfect total transparency decisively across our entire massive global supply chain to remain completely ethical.'",
      "Propose actively instituting a strictly confidential, highly robust employee whistleblower hotline specifically to fiercely protect our firm's business ethics."
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
console.log('Chunk 6 updated.');

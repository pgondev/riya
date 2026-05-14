const fs = require('fs');
const path = 'src/data/performance-indicators.ts';
let data = fs.readFileSync(path, 'utf8');

const updates = {
  "EC:138": {
    "keyPoints": [
      "Business models outline exactly how a company creates, delivers, and captures value.",
      "Traditional models include B2C (Business-to-Consumer) and B2B (Business-to-Business).",
      "Digital models encompass subscriptions, freemium, marketplaces, and direct-to-consumer (D2C).",
      "A strong business model clearly identifies target audiences, revenue streams, and cost structures."
    ],
    "roleplayTips": [
      "Say: 'Transitioning to a subscription business model will provide us with predictable, recurring revenue.'",
      "Say: 'Our freemium model effectively lowers the barrier to entry, allowing users to experience our core value.'",
      "Explain how a B2B marketplace model connects fragmented suppliers with large corporate buyers."
    ]
  },
  "EC:140": {
    "keyPoints": [
      "Bribery and illicit payments severely distort open markets and undermine fair competition.",
      "Laws like the Foreign Corrupt Practices Act (FCPA) strictly prohibit bribing foreign officials.",
      "Violations lead to catastrophic corporate fines, criminal charges, and complete loss of reputation.",
      "Companies must enforce rigorous anti-corruption compliance programs to mitigate these risks."
    ],
    "roleplayTips": [
      "Say: 'Under no circumstances will we engage in any payments that could be construed as bribery.'",
      "Say: 'Our corporate compliance program strictly forbids facilitating payments to local officials.'",
      "Highlight how maintaining strict ethical standards in foreign dealings protects the firm from legal ruin."
    ]
  },
  "EC:141": {
    "keyPoints": [
      "International travel requires securing valid passports, relevant visas, and meeting health/vaccine requirements.",
      "Travelers must understand local laws, cultural norms, and prevailing security advisories.",
      "Firms need robust corporate travel policies focusing on employee safety and seamless logistics.",
      "Proper preparation prevents costly delays, legal issues, and embarrassing cultural faux pas."
    ],
    "roleplayTips": [
      "Say: 'Ensure your passport is valid for at least six months before applying for the necessary work visa.'",
      "Say: 'Please review the security briefing and cultural etiquette guide before your trip overseas.'",
      "Explain how adhering exactly to our international travel protocols guarantees your safety and legal compliance."
    ]
  },
  "EC:045": {
    "keyPoints": [
      "Cultural environments dictate consumer preferences, communication styles, and negotiation tactics.",
      "Social environments involve demographic shifts, education levels, and prevailing attitudes toward work.",
      "Exporters must adapt their product features and marketing to align with strict local cultural values.",
      "Ignoring cultural and social nuances often results in severe brand backlash and failed market entries."
    ],
    "roleplayTips": [
      "Say: 'We must heavily modify our advertising campaign to respect the conservative social values of this new market.'",
      "Say: 'Understanding their distinct negotiation culture is essential before proposing any joint venture terms.'",
      "Discuss how tailoring our product packaging to local aesthetic preferences will significantly boost initial sales."
    ]
  },
  "EC:065": {
    "keyPoints": [
      "Small businesses and startups disproportionately drive job creation and local economic vitality.",
      "Entrepreneurs introduce disruptive innovations that force established firms to improve or perish.",
      "They foster healthy market competition, typically leading to lower prices and better consumer choices.",
      "A dynamic entrepreneurial sector is a key indicator of a resilient and adaptable market economy."
    ],
    "roleplayTips": [
      "Say: 'As an agile startup, we can rapidly innovate and capture market share from slower, entrenched competitors.'",
      "Say: 'Our small business directly supports the local economy by sourcing materials from regional suppliers.'",
      "Explain how fostering an internal entrepreneurial culture will keep the company constantly innovating."
    ]
  },
  "EC:024": {
    "keyPoints": [
      "Gross Domestic Product (GDP) is the total monetary value of all finished goods and services produced within a country's borders in a specific time period.",
      "It functions as a comprehensive scorecard of a given country's economic health.",
      "GDP can be calculated using the expenditure, production, or income approaches.",
      "Real GDP is adjusted for inflation, providing a more accurate reflection of economic growth than Nominal GDP."
    ],
    "roleplayTips": [
      "Say: 'The recent growth in real GDP suggests a strong overall economic environment, favorable for our expansion plans.'",
      "Say: 'We should monitor the GDP growth rate to anticipate shifts in consumer purchasing power.'",
      "Discuss how a declining GDP might require shifting resources toward more defensive, cost-saving strategies."
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
console.log('Chunk 9 updated.');

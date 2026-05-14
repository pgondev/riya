const fs = require('fs');
const path = 'src/data/performance-indicators.ts';
let data = fs.readFileSync(path, 'utf8');

const updates = {
  "EC:031": {
    "keyPoints": [
      "Economic growth is defined as an increase in the production of economic goods and services over one period compared with another.",
      "It represents a sustained increase in a country's total real GDP and overall standard of living.",
      "Key drivers include technological innovation, improved labor productivity, and increased capital investment.",
      "Sustained economic growth benefits society by increasing wealth, creating jobs, and improving public services."
    ],
    "roleplayTips": [
      "Say: 'With the economy experiencing robust growth, expanding our operations now makes strategic financial sense.'",
      "Say: 'We should leverage the current economic growth to invest heavily in research and new product development.'",
      "Discuss how anticipating long-term economic growth trends helps us plan for massive future capacity needs."
    ]
  },
  "EC:032": {
    "keyPoints": [
      "International trade involves the exchange of capital, goods, and services across international borders or territories.",
      "It allows countries to massively expand their target consumer markets and access resources they otherwise lack.",
      "Comparative advantage explains why countries trade, focusing on producing goods with lower opportunity costs.",
      "Tariffs, quotas, and trade agreements heavily influence the volume and profitability of international trade."
    ],
    "roleplayTips": [
      "Say: 'Expanding our international trade footprint will significantly diversify our revenue streams and reduce domestic risk.'",
      "Say: 'We must carefully evaluate the impact of new tariffs before fully committing to this international trade agreement.'",
      "Explain how leveraging global trade allows us to source the highest quality materials at the lowest possible cost."
    ]
  },
  "EC:033": {
    "keyPoints": [
      "The government plays a crucial role in the economy by providing public goods, enforcing contracts, and protecting property rights.",
      "It intervenes to correct market failures, such as monopolies, negative externalities, and asymmetric information.",
      "Fiscal and monetary policies are used by the government to stabilize the economy, control inflation, and promote growth.",
      "Regulations established by the government protect consumers, ensure fair competition, and safeguard the environment."
    ],
    "roleplayTips": [
      "Say: 'We must ensure full compliance with the new government regulations to avoid costly fines and reputational damage.'",
      "Say: 'Government subsidies for renewable energy make this new project financially viable and highly attractive.'",
      "Discuss how lobbying for favorable government policies can strategically benefit our long-term industry position."
    ]
  },
  "EC:034": {
    "keyPoints": [
      "Supply and demand are the fundamental forces that determine prices and allocate resources in a market economy.",
      "The law of demand states that, all else being equal, as the price of a good increases, quantity demanded decreases.",
      "The law of supply states that, as the price of a good increases, the quantity supplied also increases.",
      "The equilibrium price is established where the quantity demanded exactly equals the quantity supplied."
    ],
    "roleplayTips": [
      "Say: 'If demand for our product remains high while supply is constrained, we can confidently raise our prices.'",
      "Say: 'We need to anticipate supply chain bottlenecks that could drastically reduce our ability to meet current demand.'",
      "Explain how a deep understanding of supply and demand elasticity informs our optimal pricing strategy."
    ]
  },
  "EC:035": {
    "keyPoints": [
      "Market structures describe the organizational characteristics of a market that determine the behavior of firms within it.",
      "Perfect competition features many small firms producing identical goods with no single firm able to influence prices.",
      "Monopoly exists when a single firm dominates the entire market, giving it significant power to set high prices.",
      "Oligopoly involves a few large firms dominating the market, often characterized by non-price competition and interdependence."
    ],
    "roleplayTips": [
      "Say: 'Operating in a highly fragmented, perfectly competitive market means we must rigorously compete strictly on price and efficiency.'",
      "Say: 'As an oligopoly, our pricing decisions will inevitably trigger immediate strategic responses from our few major competitors.'",
      "Discuss how differentiating our product features can help us gradually escape pure price-based perfect competition."
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
console.log('Chunk 11 updated.');

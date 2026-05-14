const fs = require('fs');

const raw = fs.readFileSync('/ei_data.txt', 'utf8');

const regex = /EI:\d{3} \([A-Z]{2}\) – .*?(?=(EI:\d{3} \([A-Z]{2}\) –|$))/gs;
const matches = raw.match(regex);

const items = [];

for (const match of matches) {
  const lines = match.trim().split('\n');
  const titleLine = lines[0].trim();
  
  const codeMatch = titleLine.match(/^(EI:\d{3})/);
  if (!codeMatch) continue;
  const code = codeMatch[1];
  
  // Extract Name
  // The name is usually the entire first line
  const name = titleLine;
  
  // Extract Definition
  // It usually starts with "Definition:"
  const defLine = lines.find(l => l.trim().startsWith('Definition:'));
  let definition = '';
  if (defLine) {
    definition = defLine.trim().replace(/^Definition:\s*/, '');
    // sometimes key points are on same line
    if (definition.includes('Key Points:')) {
      const parts = definition.split('Key Points:');
      definition = parts[0].trim();
    }
  }

  // Extract Key Points
  const keyPoints = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('●')) {
      keyPoints.push(trimmed.replace(/^●\s*/, ''));
    }
  }

  items.push({
    id: code.toLowerCase().replace(':', '-'),
    code: code,
    name: name,
    definition: definition,
    keyPoints: keyPoints,
    roleplayTips: [
      `Say: 'It is important to remember the concepts of ${name.split('– ')[1].toLowerCase()} when making decisions.'`,
      `Demonstrate how you would apply this concept in a challenging workplace scenario.`,
      `Discuss the long-term benefits of mastering this specific emotional intelligence skill.`
    ]
  });
}

// Ensure the array of basic EI is created for deca-data
const decaItems = items.map(i => ({
  code: i.code,
  name: i.name,
  description: i.definition,
  cluster: "Emotional Intelligence" // Default
}));

fs.writeFileSync('/ei_parsed.json', JSON.stringify(items, null, 2));
fs.writeFileSync('/ei_deca.json', JSON.stringify(decaItems, null, 2));
console.log('Parsed ' + items.length + ' items');

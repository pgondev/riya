const fs = require('fs');

const path = 'src/data/performance-indicators.ts';
let data = fs.readFileSync(path, 'utf8');

const eiItems = JSON.parse(fs.readFileSync('ei_parsed.json', 'utf8'));

let eiBlock = [];

for (const item of eiItems) {
  const obj = {
    id: item.id,
    code: item.code,
    name: item.name,
    definition: item.definition,
    keyPoints: item.keyPoints,
    roleplayTips: item.roleplayTips
  };
  
  let entry = `  "${item.code}": {\n`;
  entry += `    "id": "${obj.id}",\n`;
  entry += `    "code": "${obj.code}",\n`;
  entry += `    "name": "${obj.name.replace(/"/g, '\\"')}",\n`;
  entry += `    "definition": "${obj.definition.replace(/"/g, '\\"')}",\n`;
  
  entry += `    "keyPoints": [\n`;
  entry += obj.keyPoints.map(kp => `      "${kp.replace(/"/g, '\\"')}"`).join(',\n') + '\n';
  entry += `    ],\n`;
  
  entry += `    "roleplayTips": [\n`;
  entry += obj.roleplayTips.map(rt => `      "${rt.replace(/"/g, '\\"')}"`).join(',\n') + '\n';
  entry += `    ]\n`;
  
  entry += `  }`;
  eiBlock.push(entry);
}

const replacement = eiBlock.join(',\n');

// Find where EI: starts and ends in the main object
// It should be inside export const PERFORMANCE_INDICATOR_DETAILS
// We will regex replace any EI:\d{3} entries
// Actually, it's safer to parse it simply: delete all  "EI:\d+": { ... }, properties up to the next non-EI key.

// A regex that matches all EI items:
// "EI:\d{3}": \{.*?\},?
// wait, the regex needs to handle nested brackets (keyPoints, roleplayTips).
const removeRegex = /^\s*"EI:\d{3}":\s*\{[\s\S]*?(?=\n\s*"[A-Z]{2}:\d{3}":|\n\};)/gm;

data = data.replace(removeRegex, '');

// Now we need to insert the new EI block.
// Look for the last item or just insert it before `};`
data = data.replace(/\n\};/, ',\n' + replacement + '\n};');

// Clean up any double commas if they happened
data = data.replace(/,\s*,/g, ',');

fs.writeFileSync(path, data);
console.log('Updated performance-indicators.ts');

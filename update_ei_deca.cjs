const fs = require('fs');

const path = 'src/data/deca-data.ts';
let data = fs.readFileSync(path, 'utf8');

const eiDeca = JSON.parse(fs.readFileSync('ei_deca_expanded.json', 'utf8'));

let eiBlock = [];

for (const item of eiDeca) {
  let entry = `  {\n`;
  entry += `    "code": "${item.code}",\n`;
  entry += `    "name": "${item.name.replace(/"/g, '\\"')}",\n`;
  entry += `    "description": "${item.description.replace(/"/g, '\\"')}",\n`;
  entry += `    "cluster": "Emotional Intelligence"\n`;
  entry += `  }`;
  eiBlock.push(entry);
}

const replacement = eiBlock.join(',\n');

// Find where { "code": "EI: starts and ends in the array
const removeRegex = /^\s*\{\s*"code": "EI:\d{3}"[\s\S]*?(?=\n\s*\{\s*"code": "[A-Z]{2}:\d{3}"|\n\];)/gm;

data = data.replace(removeRegex, '');

// Now insert the replacement before ];
data = data.replace(/\n\];/, ',\n' + replacement + '\n];');
data = data.replace(/,\s*,/g, ',');

fs.writeFileSync(path, data);
console.log('Updated deca-data.ts');

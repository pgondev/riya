const fs = require('fs');
let data = fs.readFileSync('src/data/deca-data.ts', 'utf8');

const lines = data.split('\n');
const newLines = [];
let skip = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('Foundational concept in EI')) {
    // we are inside an object we want to skip.
    // we should remove the line before this (which is "code": "EI:...")
    // and the line before that (which is { )
    // So we pop from newLines until we hit {
    while (newLines.length > 0) {
      const popped = newLines.pop();
      if (popped.includes('{')) {
        break;
      }
    }
    skip = true;
    continue;
  }
  
  if (skip && line.includes('}')) {
    skip = false;
    continue; // wait, what if it's '},'?
  }
  
  if (!skip) {
    newLines.push(line);
  }
}

// remove double commas if any
let newText = newLines.join('\n');
newText = newText.replace(/,\s*,/g, ',');
newText = newText.replace(/,\s*\];/g, '\n];'); // remove trailing comma before array bracket

fs.writeFileSync('src/data/deca-data.ts', newText);
console.log('Cleaned dummy items');

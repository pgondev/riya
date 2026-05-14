const fs = require('fs');
const content = fs.readFileSync('src/data/icdc-exams.ts', 'utf8');
const lines = content.split('\n');
lines.splice(11771, 220);
fs.writeFileSync('src/data/icdc-exams.ts', lines.join('\n'), 'utf8');
console.log('Fixed lines');

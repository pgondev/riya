const fs = require('fs');
const content = fs.readFileSync('src/data/icdc-exams.ts', 'utf8');
const rx = /"performanceIndicatorId":\s*"([^"]+)"/g;
let m;
const ids = new Set();
while ((m = rx.exec(content)) !== null) {
  ids.add(m[1]);
}
const sorted = Array.from(ids).sort();
const piContent = fs.readFileSync('src/data/performance-indicators.ts', 'utf8');
const missing = sorted.filter(id => !piContent.includes(`"${id}":`));
console.log('Missing in PI:');
missing.forEach(id => console.log(id));

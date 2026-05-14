const fs = require('fs');

const path = 'src/data/deca-data.ts';
let data = fs.readFileSync(path, 'utf8');

const updatedData = data.split('\n').filter(line => {
  return !line.includes('- Foundational concept in EI') && 
         !line.includes('Foundational concept in Emotional Intelligence');
}).join('\n');

// Actually wait, if I just remove lines, it leaves broken JSON objects:
// {
//    "code": "EI:001",
//    "cluster": "Principles"
// },
// This won't work!

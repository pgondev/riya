const fs = require('fs');

const path = 'src/data/deca-data.ts';
let data = fs.readFileSync(path, 'utf8');

// The objects look like:
//  {
//    "code": "EI:001",
//    "name": "EI:001 - Foundational concept in EI", ...
//  },

// regex to remove the entire object bounded by { and }, where "EI:001 - Foundational concept in EI" is present.
// We can just match any object that has "- Foundational concept in EI"
const badRegex = /\s*\{\s*"code":\s*"EI:\d{3}",\s*"name":\s*"EI:\d{3} - Foundational concept in EI"[^\}]*\},?/g;

data = data.replace(badRegex, '');

// remove trailing commas before ]
data = data.replace(/,\s*\]/, '\n]');

fs.writeFileSync(path, data);
console.log('Cleaned');

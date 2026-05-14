const fs = require('fs');

const path = 'src/data/deca-data.ts';
let data = fs.readFileSync(path, 'utf8');

// The easiest way to remove the old ones which have "Foundational concept in EI"
// is to literally match them with a regex and delete them.
const badRegex = /\s*\{\s*"code": "EI:\d{3}",\s*"name": "EI:\d{3} - Foundational concept in EI",\s*"description": "Foundational concept in Emotional Intelligence.",\s*"cluster": "Principles"\s*\},?/g;

data = data.replace(badRegex, '');
data = data.replace(/,\s*\];/, '\n];'); // fix trailing comma

fs.writeFileSync(path, data);
console.log('Cleaned old dummy EI elements.');

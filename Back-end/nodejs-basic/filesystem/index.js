const fs = require('fs');
const path = require('path')

const notes = path.resolve(__dirname, 'notes.txt')

const data = fs.readFileSync(notes, 'UTF-8');
console.log(data);

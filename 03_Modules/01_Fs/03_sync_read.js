import fs from 'fs';

const data = fs.readFileSync('01_write_file.js', 'utf-8');
console.log(data);
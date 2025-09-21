import fs from 'fs'

const data = fs.appendFileSync('./01_sync_file.txt', '  append text in sync way');

console.log(data);
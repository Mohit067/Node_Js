import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);// give current director


const dirName = path.join(__dirname, "Files");
console.log(dirName); // where we want to create file or folder
// __dirname  → current file ka absolute folder path
// "Files"    → folder ka naam jisme kaam karna hai
// path.join  → safely join karta hai multiple path parts ko


for (let i = 0; i < 5; i++) {
    fs.writeFileSync(`${dirName}/index${i}.txt`, "filessss")
}

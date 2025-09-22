import path, { dirname } from "path";
import fs from 'fs';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dirName = path.join(__dirname, "Files");

// __dirname  → current file ka absolute folder path
// "Files"    → folder ka naam jisme kaam karna hai
// path.join  → safely join karta hai multiple path parts ko


fs.readdir(dirName, (req, Files) => {
    Files.forEach((item) => {
        console.log("file name is", item);
    })
})
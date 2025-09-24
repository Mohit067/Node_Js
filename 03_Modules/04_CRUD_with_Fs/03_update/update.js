import path from "path";
import { fileURLToPath } from "url";
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const updateFilePath = path.join(__dirname, "../01_create/File/create.txt");

fs.appendFile(updateFilePath, ' This is from update file', (err) => {
    if(!err) console.log("file updated successfully");
})
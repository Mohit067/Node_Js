// Import required modules
import fs, { existsSync, mkdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file and directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Folder ka path
const existFolder = path.join(__dirname, "File");

// Agar folder exist nahi karta to create karo
if (!existsSync(existFolder)) {
    mkdirSync(existFolder);
    console.log("Folder created successfully");
}

// File create karo folder ke andar
fs.writeFileSync(`${existFolder}/create.txt`, "This is file. ");
console.log("File create successfully");

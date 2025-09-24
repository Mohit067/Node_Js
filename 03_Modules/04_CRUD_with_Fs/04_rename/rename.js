import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url); // current file path
const __dirname = path.dirname(__filename); // current directory path
 

const renameFilePath = path.join(__dirname, "../01_create/File/create.txt"); // old file path
const newPath = path.join(__dirname, "../01_create/File/rename.txt"); // new file path


// rename file from old path to new path
fs.rename(renameFilePath, newPath, (err) => {
  if (!err) console.log("file name successfully renamed");
});

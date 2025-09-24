import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readPath = path.join(__dirname, "../01_create/File/create.txt");

fs.readFile(readPath, "utf-8", (error, data) => {
  console.log(data);
  console.log("File read successfully");
});

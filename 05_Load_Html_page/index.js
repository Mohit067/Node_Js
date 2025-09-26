import path from "path";
import { fileURLToPath } from "url";
import express from "express";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const publicPath = path.join(__dirname, "public");
console.log("public path : ",publicPath);

app.use(express.static(publicPath));



app.listen(5000, () => {
    console.log("your app is listen on port http://localhost:5000");
})
// here we are removing extension from our url like my url is "http://localhost:5000.index.html" now we want to remove .html from index.html , so hamari website kisi ko pata na chale ki koi si language mai likhi hai

import path from "path";
import { fileURLToPath } from "url";
import express from "express";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const publicPath = path.join(__dirname, "public");
console.log("public path : ",publicPath);


app.get('/', (req, res) => {
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`)
})

app.get('/play', (req, res) => {
    res.sendFile(`${publicPath}/play.html`)
})


// this is for not found page if user gives incorrect path
app.use((req, res) => {
    res.status(404).sendFile(`${publicPath}/NotFound.html`);
});


app.listen(5000, () => {
    console.log("your app is listen on port http://localhost:5000");
})
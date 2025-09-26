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

app.set('view engine', 'ejs');
app.get('/profile', (req, res) => {
    const name = "mohit" // here we can send all type of data
    const obj = {
        email: "mohit@gmail.com",
        phone: 485984
    }
    res.render('profile', {name, obj}) // here accept only object data
})


// this is for not found page if user gives incorrect path
app.use((req, res) => {
    res.status(404).sendFile(`${publicPath}/NotFound.html`);
});


app.listen(5000, () => {
    console.log("your app is listen on port http://localhost:5000");
})
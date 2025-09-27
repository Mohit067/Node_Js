import express from "express";

const app = express();

app.use(express.json());

const middleFilter = (req, res, next) => {

    if (req.path === "/") return next();

    console.log("Hello");
    if(!req.query.age){
        res.send(`<h1>Please Enter age in url param, otherwise you not entered ths application</h1>`)
    } else if(req.query.age){
        if(req.query.age < 18){
            res.send(`
                <h1>Welcom, you are not eligibel, if you want to access this site please enter valid age</h1>
                <a href="/">Go to Home</a>
            `)
        } else {
            res.send(`
                <h1>Welcom</h1>
                <a href="/">Go to Home</a>
            `)
        }
        
    } else {
        next();
    }
}
app.use(middleFilter);

app.get("/", (req, res) => {
    res.send(`
        <h1>hellow</h1>
        <a href="/about">Go to about</a>
    `)
})

app.listen(5000, ()=> {
    console.log("app is running on port : http://localhost:5000");
})

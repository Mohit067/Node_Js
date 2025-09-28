import express from "express";
const app = express();

const route = express.Router(); // create a route


const filter = (req, res, next) => {
    if(!req.query.age){
        res.send(`
            <h1>You are not elegible enter age please</h1>
            <a href="/">Go to Home</a>
        `) 
    } else if(req.query.age){
        if(req.query.age <= 18){
            res.send(`
                <h1>You are not elegible enter age please</h1>
                <a href="/">Go to Home</a>
            `) 
        } else {
            res.send(`
                <h1>You are elegible enter</h1>
                <a href="/next">next</a>
            `) 
        }
    } else next();
}

route.use(filter);//yaha ham declare kr rhe h ki kon sa middleware use krna h

app.get("/", (req, res) => {
    res.send(`
        <h1>hellow</h1>
        <a href="/about">Go to about</a>
    `)
})

route.get("/about", (req, res) => { // here we use route instead of app
    res.send(`
        <h1>hellow bro</h1>
        <a href="/next">Go to Next</a>
    `)
});

route.get("/next", (req, res) => {
    res.send(`
        <h1>hellow bro, yaha mat aana yr dobara</h1>
        <a href="/">Go to Home</a>
    `)
});

app.use("/", route); // jaha jaha route use kiya h middleware wahi apply honge aur kahi nhi

app.listen(5001, () => {
    console.log("app is running on http://localhost:5001")
});
import express from "express";

const app = express();

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

app.get("/", (req, res) => {
    res.send(`
        <h1>hellow</h1>
        <a href="/about">Go to about</a>
    `)
})

// maine sirf about wale prr middleware lagaya hai jisme dalna hai /?age="any value"
app.get("/about", filter, (req, res) => {
    res.send(`
        <h1>hellow bro</h1>
        <a href="/next">Go to Next</a>
    `)
});

app.get("/next", (req, res) => {
    res.send(`
        <h1>hellow bro, yaha mat aana yr dobara</h1>
        <a href="/">Go to Home</a>
    `)
});

app.listen(5001);
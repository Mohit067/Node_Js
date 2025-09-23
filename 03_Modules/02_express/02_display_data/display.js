import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Welcome to the Home page</h1>")
})

app.get('/about', (req, res) => {
    res.send(`<h1>Welcome to the about page</h1>
        <a href="/" > Go to Home page <a/>
    `)
    
})

app.get('/input', (req, res) => {
    res.send(`
        <input type="text"  placeholder="User name" />
        <button>Click me</button>
    `)
})


//to get json data
app.get('/json', (req, res) => {
    res.send(
        [
        {
            "name": "Mohit",
            "email": "xyz@gmail.com" 
        },
        {
            "name": "Mohit",
            "email": "xyz@gmail.com" 
        },
        ]
    )
})

// link
app.get('/link', (req, res) => {
    res.send(`
        <input type="text"  placeholder="User name" />
        <button>Click me</button>
        <a href="/about" > Go to about page <a/>
    `)
})

app.listen(5000, () => {
  console.log("your app is running on http://localhost:5000");
});
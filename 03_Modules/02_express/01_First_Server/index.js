import express from "express";

const app = express();

app.get("", (req, res) => {
  res.send("This is home page");
});

app.get("/about", (req, res) => {
  res.send("this is about page");
});

app.listen(5000, () => {
  console.log("your app is running on http://localhost:5000");
});

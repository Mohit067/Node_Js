import express from "express";
import connectDB from "./connectDB.js";
import mongodb from 'mongodb'
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    let data = await connectDB();
    data = await data.find().toArray(); //direct data fetch
    console.log(data);

    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching data");
  }
});


app.post('/', async (req, res) => {
    try {
      let data = await connectDB();
      let user = await data.insertOne(req.body);
      console.log(user)
      res.status(200).send(user);
    } catch (error) {
      console.log("error", error);
    }
})


app.put("/:name", async (req, res) => {
  try {
    let data = await connectDB();
    let result = await data.updateOne(
      {name: req.params.name},
      {$set: req.body}
    );
    console.log(result);
    res.status(200).send(result)
  } catch (error) {
    console.log("error", error);
  }
})


app.delete("/:id", async (req, res) => {
  try {
    let data = await connectDB();
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    res.status(200).json({message: "delete"});
    console.log(result)
  } catch (error) {
    console.log("error", error);
  }
})


app.listen(5000, () => {
  console.log("App is running on http://localhost:5000");
});

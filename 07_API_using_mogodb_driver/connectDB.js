import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);


const connectDB = async () => {
    await client.connect();
    const db = client.db("test");         // DB ka naam do
    const collection = db.collection("users"); // collection ka naam do
    console.log("mongodb connected")
    return collection;   
}

export default connectDB;
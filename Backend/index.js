import express from "express";
import { connectDB } from "./db/connectDB.js";

const app = express ();

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(3001, () => {

    connectDB();

    console.log("server is running on port 3001");
});
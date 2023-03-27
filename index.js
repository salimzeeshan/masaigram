const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes/routes");
const database =
  "mongodb+srv://masaigram:bLhSaKuPnB3EgQjy@cluster0.bplyevs.mongodb.net/?retryWrites=true&w=majority";

app.use(cors());

const main = async () => {
  mongoose.connect(database);
};

app.listen(2080, async (req, res) => {
  try {
    await main();
    console.log("Connected to the database successfully");
  } catch (error) {
    console.log(error);
  }
  console.log("Port: 2080");
});

app.use("/", router);

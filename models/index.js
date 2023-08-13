require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB: ", process.env.MONGO_URI);
  }
);

module.exports.Movie = require("./movieModel");

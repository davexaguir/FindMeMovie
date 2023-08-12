// Dependencies
require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require ('mongoose')


// Configuration / Middleware
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Movie Database Backend Homepage");
});

// Movie Route
const moviesController = require("./controllers/movies");
app.use("/movies", moviesController);

//mongoose connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, ()=> {
   console.log('Databse connected succesfully!')
 })

// Listen
app.listen(process.env.BACKEND_PORT, () => {
  console.log(`Movie Server running on port: ${process.env.BACKEND_PORT}`);
});

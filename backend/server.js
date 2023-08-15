// Dependencies
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("Movie Database Backend Homepage");
});

// Movie Route
const moviesController = require("./controllers/movies");
app.use("/movies", moviesController);

// Listen
app.listen(process.env.BACKEND_PORT, () => {
  console.log(`Movie Server running on port: ${process.env.BACKEND_PORT}`);
});

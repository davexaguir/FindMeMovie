const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Movie Database Backend Homepage");
});

// Movie Route
const moviesController = require("./controllers/moviesController");
app.use("/movies", moviesController);

// Listen
app.listen(process.env.BACKEND_PORT, () => {
  console.log(`Movie Server running on port: ${process.env.BACKEND_PORT}`);
});

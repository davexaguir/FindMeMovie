require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Movie Database Backend Homepage");
});

// Listen
app.listen(process.env.BACKEND_PORT, () => {
  console.log(`Movie Server running on port: ${process.env.BACKEND_PORT}`);
});

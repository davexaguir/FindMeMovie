// require mongoose
const mongoose = require("mongoose");
// creating shorthand for the Schema constructor
const { Schema } = mongoose;

const movieSchema = new Schema({
  movie_name: { type: String, required: true },
  release_year: { type: Number },
  genre: { type: String },
  runtime_minutes: { type: Number },
  total_revenue: { type: String },
  main_actor: { type: String },
  image: { type: String },
  description: { type: String },
});

module.exports = mongoose.model("movies", movieSchema);

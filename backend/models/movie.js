const mongoose = require("mongoose");
const { Schema } = mongoose;

// Schema
// const movieSchema = new Schema({
//   movie_name: { type: String, required: true },
//   release_year: { type: Number },
//   genre: { type: String },
//   runtime_minutes: { type: Number },
//   total_revenue: { type: String },
//   main_actor: { type: String },
//   image: { type: String },
//   description: { type: String },
// });

const movieSchema = new Schema({
  movie_name: {
    type: String,
    required: [true, "Movie Name is rquired field!"],
    unique: true,
  },
  release_year: {
    type: Number,
    required: [true, "Release year is rquired field!"],
  },
  genre: {
    type: String,
    required: [true, "Genre is rquired field!"],
  },
  runtime_minutes: {
    type: Number,
    default: 90,
  },
  total_revenue: {
    type: String,
    default: "$50 million",
  },
  main_actor: {
    type: String,
    default: "NA",
  },
  image: {
    type: String,
    default:
      "https://images.freeimages.com/images/previews/5eb/movie-clapboard-1184339.jpg",
  },
  movie_description: {
    type: String,
    required: [true, "Movie Description is rquired field!"],
  },
});

module.exports = mongoose.model("movies", movieSchema);

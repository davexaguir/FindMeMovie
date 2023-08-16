const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
  movie_name: {
    type: String,
    required: [true, "Movie Name is a required field!"],
    unique: true,
  },
  release_year: {
    type: Number,
    required: [true, "Release year is a required field!"],
  },
  genre: {
    type: String,
    required: [true, "Genre is a required field!"],
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
    required: [true, "Movie Description is a required field!"],
  },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
});

module.exports = mongoose.model("movies", movieSchema);

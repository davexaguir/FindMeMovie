const mongoose = require("mongoose");

let reviewSchema = new mongoose.Schema({
  author: {
    type: String,
    default: "Anonymous",
    required: [true, "Author is required field!"],
  },
  rating: {
    type: Number,
    required: [true, "Rating is required field!"],
    default: 5.0,
    min: 1.0,
    max: 10.0,
  },
  content: {
    type: String,
    required: [true, "Content is required field!"],
  },
});

module.exports = mongoose.model("Review", reviewSchema);

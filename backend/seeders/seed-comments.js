const db = require("../models");

// To use await, we need an async function.
async function seed() {
  // Get the movie, "The Hangover"
  let movie = await db.Movie.findOne({ movie_name: "The Hangover" });

  // Create a fake sample comment.
  let comment = await db.Comment.create({
    author: "Famished Fran",
    rating: 9.0,
    content: "This was hilarious!",
  });

  // Add that comment to the movies' comment array.
  movie.comments.push(comment.id);

  // Save the movie now that it has comment
  await movie.save();

  // Exit the program
  process.exit();
}

seed();

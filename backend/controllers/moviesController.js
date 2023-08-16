const moviesRouter = require("express").Router();
const db = require("../models");

// Gets the list of all reviewed movies in the system
moviesRouter.get("/", async (req, res) => {
  try {
    let foundMovies = null;
    console.log(req.query);
    if (req.query.genre == null) {
      foundMovies = await db.Movie.find();
    } else {
      foundMovies = await db.Movie.find({ genre: req.query.genre });
    }
    res.status(200).json(foundMovies);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Adds a new movie
moviesRouter.post("/", async (req, res) => {
  try {
    console.log(req.body);
    let newMovie = await db.Movie.create(req.body);
    res.status(200).json(newMovie);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Gets an individual movie by id
moviesRouter.get("/:id", async (req, res) => {
  try {
    let foundMovie = await db.Movie.findById(req.params.id).populate("reviews");
    res.status(200).json(foundMovie);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Route for updating a movie
moviesRouter.put("/:id", async (req, res) => {
  // Find a movie by id and update it
  try {
    let updatedMovie = await db.Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    console.log(updatedMovie);
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Route for deleting a movie
moviesRouter.delete("/:id", async (req, res) => {
  // Finds a movie by id and deletes
  try {
    const deletedMovie = await db.Movie.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedMovie);
  } catch (error) {
    res.status(500).json(error);
    console.log(`Error deleting movie with id: ${req.params.id}`);
    console.log(error);
  }
});

// Route for posting a review for a movie
moviesRouter.post("/:id/reviews", async (req, res) => {
  try {
    // Find the movie
    let movie = await db.Movie.findById(req.params.id);
    console.log(movie);
    // Create the comment
    console.log(req.body);
    let review = await db.Review.create(req.body);

    // Add the comment to the movie
    movie.reviews.push(review);
    // Save the movie
    await movie.save();

    res.status(200).json(review);
  } catch (error) {
    console.log(`Error adding review for movie with id: ${req.params.id}`);
    console.log(error);
    res.status(500).json(error);
  }
});

// Route for deleting an individual review
moviesRouter.delete("/:id/reviews/:reviewId", async (req, res) => {
  try {
    // Deletes an existing review
    let deletedReview = await db.Review.findByIdAndDelete(req.params.reviewId);
    res.status(200).json(deletedReview);
  } catch (error) {
    res.status(500).json(error);
    console.log(`Error deleting review with id: ${req.params.reviewId}`);
    console.log(error);
  }
});

module.exports = moviesRouter;

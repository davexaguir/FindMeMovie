const moviesRouter = require("express").Router();
const db = require("../models");

// Gets the list of all reviewed movies in the system
moviesRouter.get("/", async (req, res) => {
  try {
    let foundMovies = await db.Movie.find();
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
    let foundMovie = await db.Movie.findById(req.params.id);
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
    console.log(`Error deleting restaurant with id: ${req.params.id}`);
    console.log(error);
  }
});

// Route for posting a review for a movie
moviesRouter.post("/:id/review", (req, res) => {
  // Route for posting a review
});

// Route for updating a review for a given movie
moviesRouter.put("/:id/review/:reviewId", async (req, res) => {
  // Updates an existing review
});

// Route for deleting a review
moviesRouter.delete("/:id/review/:reviewId", async (req, res) => {
  // Deletes an existing review
});

module.exports = moviesRouter;

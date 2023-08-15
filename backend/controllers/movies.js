const moviesRouter = require("express").Router();

// Gets the list of all reviewed movies in the system
moviesRouter.get("/", (req, res) => {
  try {
    const foundMovies = [
      {
        name: "Inception",
        reviews: [
          { comment: "Awesome psychological thriller", star_rating: 5 },
          {
            comment: "Not sure if I have seen anything better",
            star_rating: 5,
          },
          { comment: "Great but very difficult to follow", star_rating: 4 },
        ],
      },
      {
        name: "Mission Impossible 8",
        reviews: [{ comment: "Ok, but not great", star_rating: 3.5 }],
      },
    ];
    res.status(200).json(foundMovies);
  } catch (error) {
    res.status(500).json(error);
  }
});

moviesRouter.get("/new", (req, res) => {
  // Display the page that shows form for entering a new move
});

moviesRouter.post("/", (req, res) => {
  // Adds the new movie with the info from req.body
});

// Gets an individual movie by id, and its related comment
moviesRouter.get("/:id", (req, res) => {
  try {
    foundMovie = {
      name: "Mission Impossible 8",
      reviews: [{ comment: "Ok, but not great", star_rating: 3.5 }],
    };
    res.status(200).json(foundMovie);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Route for updating a movie
moviesRouter.put("/:id", (req, res) => {
  // Find a movie by name and update it
});

// Route for deleting a movie
moviesRouter.delete("/:id", (req, res) => {
  // Finds a movie by id and deletes
});

// Route for editing a movie
moviesRouter.get("/:id/edit", (req, res) => {
  // Gets the edit page of the movie
});

// Route for adding a review to an exiting movie
moviesRouter.post("/:id/review", (req, res) => {
  // Adds a review on a movie
});

// Route for posting a review
moviesRouter.post("/:id/review", (req, res) => {
  // Route for posting a review
});

// Route for deleting a review
moviesRouter.delete("/:id/review/:reviewId", async (req, res) => {
  // Deletes an existing review
});

module.exports = moviesRouter;

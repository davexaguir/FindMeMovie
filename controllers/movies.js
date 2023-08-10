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

module.exports = moviesRouter;

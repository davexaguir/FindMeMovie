const db = require('../models')
const Movie = require('../models/movie')

const newMovies = new Movie(
    {
        movie_name: "Resident Evil",
        release_year: 2002,
        genre: "Horror",
        runtime_minutes: 100,
        total_revenue: "$1.2 billion",
        main_actor: "Milla Jovovich",
        image: "https://m.media-amazon.com/images/M/MV5BZmI1ZGRhNDYtOGVjZC00MmUyLThlNTktMTQyZGE3MzE1ZTdlXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_.jpg",
        movie_description: "The \"Resident Evil\" film series is a science fiction horror franchise based on the popular video game series of the same name. The movies follow the adventures of Alice, portrayed by Milla Jovovich, a woman with exceptional combat skills and a mysterious past. Set in a world where a powerful corporation's experiments have unleashed a virus that turns humans into zombies and mutates creatures, Alice fights to survive in a post-apocalyptic landscape while uncovering the truth behind the outbreak."
    }
)


newMovies.save()
    .then(() => {
        console.log('Success!')
        process.exit()
    })
    .catch(err => {
        console.log('Failure!', err)
        process.exit()
    })


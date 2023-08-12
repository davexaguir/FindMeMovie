const mongoose =  require('mongoose')
const comment = require('./comment')
const {Schema} = mongoose


//Schema
const movieSchema = new Schema({
    movie_name: {
        type: String, 
        required: [true, "Movie Name is rquired field!"],
        uniquq: true
    },
    release_year: {
        type: Number, 
        required: [true, "Release year is rquired field!"],
    },
    genre: {
        type: String, 
        required: [true, "Genre is rquired field!"]
    },
    runtime_minutes: {
        type: Number, 
        default: 90
    },
    total_revenue: {
        type: String, 
        default: "$50 million"
    },
    main_actor: {
        type: String, 
        default: "NA"
    },
    image: {
        type: String, 
        default: "https://images.freeimages.com/images/previews/5eb/movie-clapboard-1184339.jpg"
    },
    movie_description: {
        type: String, 
        required: [true, "Movie Description is rquired field!"]
    },
    comments: [{type: mongoose.Schema.Types.ObjectID, ref: 'Comment'}]

})


module.exports = mongoose.model('Movie', movieSchema)
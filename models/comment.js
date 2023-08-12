const mongoose = require('mongoose')

let commentSchema = new mongoose.Schema({
    fullName: {
        type: String, 
        default: 'Anonymous',
        required: [true, "Full Name is rquired field!"]
    },
    ratings: {
        type: Number, 
        required: [true, "Rating is rquired field!"],
        default: 1.0,
        min: 1.0,
        max: 10
    },
    content: {
        type: String, 
        required: [true, "content is rquired field!"]
    },
    useful: {
        type: Boolean, 
        default: true
    }
})

module.exports = mongoose.model('Comment', commentSchema)
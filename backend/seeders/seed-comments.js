const db = require('../models')
const Comment = require('../models/comment')
const Movie = require('../models/movie')

const newComments = new Comment(
    {
        fullName: 'Dan test',
        ratings: 5,
        content: 'dan was here',
        useful: true
    }
)


newComments.save()
    .then(() => {
        console.log('Success!')
        process.exit()
    })
    .catch(err => {
        console.log('Failure!', err)
        process.exit()
    })


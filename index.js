require('dotenv').config()
const mongoose = require ('mongoose')

//mongoose connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, ()=> {
    console.log('connectd to Mongo DB:', process.env.MONGO_URI)
  })
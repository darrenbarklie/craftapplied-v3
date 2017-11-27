const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


// Setup express app
const app = express()

// Connect to MongoDB
mongoose.connect('mongodb://localhost/craftapplied', {
  useMongoClient: true
})﻿
mongoose.Promise = global.Promise


// Middleware : Body Parser
app.use(bodyParser.json())

// Middleware : Initialize routes
app.use('/api', require('./src/routes/api'))

// Middleware : Error Handling
app.use(function(err, req, res, next){
  console.log(err)
  res.status(422).send({error: err.message})
})


// Listen for requests
app.listen(process.env.PORT || 8082, function(){
  console.log('Now listening for requests...')
})


// "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"
// nodemon ./server.js

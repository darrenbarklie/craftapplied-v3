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

// Initialize routes
app.use('/api', require('./src/routes/api'))

// Middleware : Error Handling


// Listen for requests
app.listen(process.env.PORT || 8081, function(){
  console.log('Now listening for requests...')
});


// "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"
// nodemon ./server.js

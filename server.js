const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


// Setup express app
const app = express()

// Connect to MongoDB
mongoose.connect('mongodb://localhost/craftapplied')
mongoose.Promise = global.Promise

// Middleware : bodyParser JSON
app.use(bodyParser.json())

// Initialize routes
app.use('/api', require('./src/routes/api'))

// Listen for requests
app.listen(process.env.PORT || 8081, function(){
  console.log('Now listening for requests...')
});


// "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"
// node node_modules/nodemon/bin/nodemon src/server

const express = require('express')
const routes = require('./routes/api')
// Setup express app
const app = express()

// Use routes declared in api
app.use(routes)

// Listen for requests
app.listen(process.env.PORT || 8080, function(){
  console.log('Now listening for requests...')
});


// "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"
// node node_modules/nodemon/bin/nodemon src/server

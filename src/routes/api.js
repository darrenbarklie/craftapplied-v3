const express = require('express')
const router = express.Router()

// (Test) GET
router.get('/test', function(req, res){
  res.send({type: 'GET'})
})

// POST ContactMessage to db
router.post('/contact', function(req, res){
  res.send({type: 'POST'})
})

module.exports = router

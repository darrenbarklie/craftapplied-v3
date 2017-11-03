const express = require('express')
const router = express.Router()

const ContactMessage = require('../models/contactMessage')


// (Test) GET
router.get('/contact', function(req, res){
  res.send({type: 'GET'})
})

// POST ContactMessage to db
router.post('/contact', function(req, res){
  // Create new instance with body content
  ContactMessage.create(req.body).then(function(contactMessage){
    res.send(contactMessage)
  })
})

module.exports = router

const express = require('express')
const router = express.Router()

const ContactMessage = require('../models/contactMessage')


//GET (Testing)
router.get('/contact', function(req, res, next){
  res.send({type: 'GET'})
  console.log('GET')
})

// POST : ContactMessage to db
router.post('/contact', function(req, res, next){
  // Create new instance with body content, then send
  ContactMessage.create(req.body).then(function(contactMessage){
    res.send(contactMessage)
  }).catch(next)
})

module.exports = router

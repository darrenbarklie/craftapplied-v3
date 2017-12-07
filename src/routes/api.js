const express = require('express')
const router = express.Router()

const ContactMessage = require('../models/contactMessage')


// GET (Testing)
router.get('/contact', function(req, res, next){
  res.send({type: 'GET'})
  console.log('GET')
})

// POST : ContactMessage to db
router.post('/contact', function(req, res, next){

  //req.checkBody('name', 'Invalid name').notEmpty();
  //req.checkBody('name', 'Invalid name').isAlpha();
  //req.checkBody('age', 'Invalid age').notEmpty().isInt();

  // Create new instance with body content, then send
  ContactMessage.create(req.body).then(function(contactMessage){
    res.send(contactMessage)
  }).catch(next)
})

module.exports = router

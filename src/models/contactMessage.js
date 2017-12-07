const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContactMessageSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  // TODO : type to select, required
  projectType: {
    type: String,
    //required: [true, 'Project type is required']
  },
  message: {
    type: String,
    required: [true, 'Message is required']
  },
  newsletter: {
    type: Boolean,
    default: false
  },
  dtgSubmitted: {
    type: Date,
    default: Date.now
  },
  source: {
    type: String,
    default: 'craftapplied.com/contact'
  }
})

const ContactMessage = mongoose.model('contactMessage', ContactMessageSchema)

module.exports = ContactMessage

const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
  author: {
    type: String,
    required: [true, 'Author is required']
  },
  message: {
    type: String,
    required: [true, 'Message is required']
  },
  created: {
    type: String,
    required: [true, 'Created date is required']
  }
})

module.exports = messageSchema
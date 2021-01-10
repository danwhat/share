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
  createdAt: {
    type: String,
    required: [true, 'Created date is required']
  }
})

const Message = mongoose.model('message', messageSchema)

module.exports = Message
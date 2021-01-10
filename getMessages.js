module.exports = (req, res) => {
  
  const Message = require('./messageSchema')
  const quantMessages = require('./index')

  Message.find().sort({'date': -1}).limit(30).exec((err, Message) => {
    if (err) return console.error(err);
    res.status(200).send({ messages: Message, total: quantMessages.quantMessages.quantity })
  })
}

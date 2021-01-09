module.exports = (req, res) => {
  const Message = require('./messageSchema')
  Message.find((err, Message) => {
    if (err) return console.error(err);
    res.status(200).send({ message: Message })
  })
}
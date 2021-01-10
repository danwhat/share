module.exports = (req, res) => {
  const { message, author } = req.body
  if (message && author) {

    const Message = require('./messageSchema')
    const createdAt = new Date().toJSON()
    const newMessage = new Message({ message, author, createdAt });

    newMessage.save(function (err, newMessage) {
      if (err) return console.error(err);
    });
    res.status(200).send({message:'tudo funfando legal'})
  }
  else res.status(400).send({message:'deu merda aqui'})
}
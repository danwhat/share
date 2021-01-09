module.exports = (req, res) => {
  const { message, author } = req.body
  if (message && author) {
    const mongoose = require('./mongoose')

    const messageSchema = require('./messageSchema')
    const Message = mongoose.model('message', messageSchema)

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
      console.log('Conecto Carai!')

      const created = new Date().toJSON()
      const newMessage = new Message({ message, author, created });

      newMessage.save(function (err, newMessage) {
        if (err) return console.error(err);
        console.log("Provavelmente Salvou.")
      });
    });
    res.status(200).send({message:'tudo funfando legal'})
  }
  elseres.status(400).send({message:'deu merda aqui'})
}
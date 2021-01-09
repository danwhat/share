module.exports = async (req, res) => {
  const mongoose = require('./mongoose')

  const messageSchema = require('./messageSchema')
  const Message = mongoose.model('message', messageSchema)

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  await db.once('open', function () {
    console.log('Conecto Carai!')
    
    Message.find( (err, Message) => {
      if (err) return console.error(err);
      res.status(200).send({message : Message})
    })
  });

}
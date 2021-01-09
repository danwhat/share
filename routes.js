const express = require('express');
const router = express.Router();

const getMessages = require('./getMessages')
router.get('/messages', getMessages);

const addMessage = require('./addMessage')
router.post('/message/add', (req, res) => {
  const {message, author} = req.body
  if (message && author) {
    addMessage(message, author)
    res.status(200).send({message:'tudo funfando legal'})
  }
  res.status(400).send({message:'deu merda aqui'})
});

module.exports = router;

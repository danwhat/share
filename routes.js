const express = require('express');
const router = express.Router();

const mongoose = require('mongoose')

const urldb = 'mongodb+srv://user:12345@share.alkm5.mongodb.net/share?retryWrites=true&w=majority'
mongoose.connect(urldb, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Conecto Carai!')
});

const getMessages = require('./getMessages')
router.get('/messages', getMessages);

const addMessage = require('./addMessage')
router.post('/message/add', addMessage);

module.exports = router;

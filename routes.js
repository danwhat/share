const express = require('express');
const router = express.Router();

const getMessages = require('./getMessages')
router.get('/messages', getMessages);

const addMessage = require('./addMessage')
router.post('/message/add', addMessage);

module.exports = router;

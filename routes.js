const express = require('express');
const router = express.Router();

const Message = require('./controllers/Message');

router.get('/messages', Message.getMessages);
router.post('/messages', Message.createMessage);
router.delete('/messages', Message.deleteAllMessages);

module.exports = router;

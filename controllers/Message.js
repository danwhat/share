const Message = require('../services/Message');

const getMessages = async (req, res) => {
  const messages = await Message.getMessages();

  res.status(200).json(messages);
};

const createMessage = async (req, res) => {
  const { author, message } = req.body;

  const result = await Message.createMessage(author, message);
  console.log(result);

  if (!result) return res.status(400).send({ message: 'Invalid data' });

  res.status(200).send({ message: 'Created successfully' });
};

const deleteAllMessages = async (req, res) => {
  await Message.deleteAllMessages();

  res.status(200).json({ message: 'All messages deleted' });
};

module.exports = {
  getMessages,
  createMessage,
  deleteAllMessages,
};

const Message = require('../models/Message');

const validateData = (author, message) => {
  if (!author || typeof author !== 'string') return false;
  if (!message || typeof message !== 'string') return false;

  return true;
};

const getMessages = async () => {
  const messages = await Message.getMessages();
  const total = await Message.countMessages();

  return { messages, total };
};

const createMessage = async (author, message) => {
  const isDataValid = validateData(author, message);

  if (!isDataValid) return null;

  const createdAt = new Date().toJSON();
  await Message.createMessage(author, message, createdAt);

  return true;
};

const deleteAllMessages = async () => {
  await Message.deleteAllMessages();
};

module.exports = {
  getMessages,
  createMessage,
  deleteAllMessages,
};

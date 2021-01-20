const Message = require('../models/Message');

const validateData = (message) => message && typeof message === 'string';

const getMessages = async () => {
  const messages = await Message.getMessages();
  const total = await Message.countMessages();

  return { messages, total };
};

const createMessage = async (author, message) => {
  const isDataValid = validateData(message);

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

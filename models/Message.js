const connection = require('./connection');

const errorHandler = (err) => {
  console.log(err);
  process.exit(1);
};

const countMessages = () => connection()
  .then(db => db.collection('messages').countDocuments())
  .catch(errorHandler);

const getMessages = () => connection()
  .then(db => db.collection('messages').find().limit(30).toArray())
  .catch(errorHandler);

const createMessage = (author, message, createdAt) => connection()
  .then(db => db.collection('messages').insertOne({ author, message, createdAt }))
  .catch(errorHandler);

const deleteAllMessages = () => connection()
  .then(db => db.collection('messages').deleteMany({}))
  .catch(errorHandler);


module.exports = {
  getMessages,
  createMessage,
  deleteAllMessages,
  countMessages,
};

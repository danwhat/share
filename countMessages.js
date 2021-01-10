module.exports = async () => {
  const Message = require('./messageSchema')
  return await Message.countDocuments((err, quant) => {
    if (err) return console.error(err);
    console.log(`Total de mensagens: ${quant}`)
    return quant;
  })
}

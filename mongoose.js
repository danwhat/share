const mongoose = require('mongoose')

const urldb = 'mongodb+srv://user:12345@share.alkm5.mongodb.net/share?retryWrites=true&w=majority'
mongoose.connect(urldb, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;
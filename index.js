const express = require('express');
const cors = require('cors');
const routes = require('./routes')
const port = process.env.PORT || 3000
const app = express();

const countMessages = require('./countMessages')
let quantMessages = {quantity: 0};
setInterval(async () => {
  quantMessages.quantity = await countMessages();
}, 60000);
exports.quantMessages = quantMessages;

app.use(cors());
app.use(express.json())
app.use(routes);

app.listen(port, ()=> console.log(`Server started at port ${port}.`))
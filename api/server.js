require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({msg: 'abc'})
})

const port = process.env.PORT
console.log(port);

app.listen(port, () => {
  console.log('api listening on port', port)
});
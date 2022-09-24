require('dotenv').config();
const express = require('express');

const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

// routes
app.get('/', (req, res) => {
  res.json({msg: 'abc'})
})

const port = process.env.PORT
console.log(port);

app.listen(port, () => {
  console.log('api listening on port', port)
});
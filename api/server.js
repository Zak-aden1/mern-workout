require('dotenv').config();
const express = require('express');
const workoutRouter = require('./routes/workouts');

const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

// routes
app.use('/api/workouts', workoutRouter)

const port = process.env.PORT

app.listen(port, () => {
  console.log('api listening on port', port)
});
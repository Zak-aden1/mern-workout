require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workoutRouter = require('./routes/workouts');
const userRoutes = require('./routes/user')
const path = require('path')
const cors = require('cors')

const app = express();

// middleware
app.use(express.json());
app.use(cors({
  origin: '*'
}));

app.use((req, res, next) => {0
  console.log(req.path, req.method);
  next();
})

// routes
app.use('/api/workouts', workoutRouter)
app.use('/api/user', userRoutes)

app.get('/', (req, res) => {
  res.send('app is running')
})

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('connected to db, listening on port', process.env.PORT)
    });
  })
  .catch(err => console.log('err', err))
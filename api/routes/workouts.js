const express = require('express');
const Router = express.Router();

// get all workouts
Router.get('/', (req, res) => {
  res.json({msg: 'get all workouts'})
})

// get single workout
Router.get('/:id', (req, res) => {
  res.json({msg: 'get single workout'})
})

// post new workout
Router.post('/', (req, res) => {
  res.json({msg: 'post workout'})
})

// update workout
Router.patch('/:id', (req, res) => {
  res.json({msg: 'update workout'})
})

// del workout 
Router.delete('/:id', (req, res) => {
  res.json({msg: 'delete workout'})
})

module.exports = Router;
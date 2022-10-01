const express = require('express');
const Router = express.Router();
const { getAllWorkouts, getSingleWorkout, postWorkout, updateWorkout, delWorkout} = require('../controllers/workoutController');
const requireAuth = require('../middleware/requireAuth');

// middleware
Router.use(requireAuth)

// get all workouts
Router.get('/', getAllWorkouts)

// get single workout
Router.get('/:id', getSingleWorkout)

// post new workout
Router.post('/', postWorkout)

// update workout
Router.patch('/:id', updateWorkout)

// del workout 
Router.delete('/:id', delWorkout)

module.exports = Router;
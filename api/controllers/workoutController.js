const Workout = require('../models/workoutModel');
const mongoose = require('mongoose')

// get all workouts
const getAllWorkouts = async (req, res) => {
  const user_id = req.user._id
  
  const workout = await Workout.find({user_id}).sort({createdAt: -1})
  res.status(200).json(workout)
}

// get single workout
const getSingleWorkout = async (req, res) => {
  const { id } = req.params
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({error: 'wrong id'})

  const workout = await Workout.findById(id)

  if(!workout) return res.status(404).json({error: 'No such workout'})

  res.status(200).json(workout)
}

// create new workout
const postWorkout = async (req, res) => {
  const {title, reps, sets,  _id } = req.body

  let emptyFields = [];

  if(!title) emptyFields.push('title')
  if(!reps) emptyFields.push('reps')
  if(!sets) emptyFields.push('sets')

  if(emptyFields.length > 0) return res.status(400).json({error: 'please filll in all fields', emptyFields})

  try {
    req.body.user_id = req.user._id
    const workout = await Workout.create(req.body)
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error?.message})
  }
}

// update workout
const updateWorkout = async (req, res) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({error: 'wrong id'})

  const workout = await Workout.findByIdAndUpdate(id, req.body)

  if(!workout) return res.status(400).json({error: 'cant update workout'})

  res.status(200).json(workout)
}

// del workout 
const delWorkout = async (req, res) => {
  const { id } = req.params
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({error: 'wrong id'})

  const workout =  await Workout.findByIdAndDelete(id);

  if(!workout) return res.status(400).json({error: 'cant del workout'})
  
  res.status(200).json(workout)
}

module.exports = {
  getAllWorkouts,
  getSingleWorkout,
  updateWorkout,
  postWorkout,
  delWorkout
}
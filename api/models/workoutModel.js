const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  sets: {
    type: Number,
    required: true
  },
  type: {
    type: String, 
    enum: ['legs', 'chest', 'back', 'arms'],
    required: true
  },
  user_id: {
    type: String,
    required: true
  }
}, {timestamps: true});

module.exports = mongoose.model('Workout', workoutSchema)
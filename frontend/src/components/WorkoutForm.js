import React, { useState } from 'react'

const WorkoutForm = () => {
  const [title, setTitle] = useState('')
  const [sets, setSets] = useState('')
  const [reps, setReps] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('uyo ');
  }

  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Add a new workout for {}</h3>

      <label>Title for excercise</label>
      <input 
        onChange={(e) => setTitle(e.target.value)} 
        type="text"
        value={title}
      />

      <label>sets</label>
      <input 
        onChange={(e) => setSets(e.target.value)} 
        type="number"
        value={sets}
      />
      <label>reps</label>
      <input 
        onChange={(e) => setReps(e.target.value)} 
        type="number"
        value={reps}
      />

      <button>Add workout</button>
    </form>
  )
}

export default WorkoutForm;
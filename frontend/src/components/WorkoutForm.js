import axios from 'axios'
import React, { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const WorkoutForm = ({ type }) => {
  const { dispatch } = useWorkoutsContext();

  const [title, setTitle] = useState('')
  const [sets, setSets] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const workout = {type, title, sets, reps}
    axios.post('/api/workouts', workout)
      .then(({data}) => {
        console.log('new data', data);
        setError(null)
        setTitle('')
        setReps('')
        setSets('')
        dispatch({type: 'CREATE_WORKOUT', payload: data})
      })
      .catch(({response: {data}}) => {
        console.log('err', data); setError(data.error)
      })
  }

  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Add new {type} workout</h3>

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
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default WorkoutForm;
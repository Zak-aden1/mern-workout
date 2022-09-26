import axios from 'axios'
import React, { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

/* Form to create new specific workout */
const WorkoutForm = ({ type }) => {
  const { dispatch } = useWorkoutsContext();

  const [title, setTitle] = useState('')
  const [sets, setSets] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

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
        setEmptyFields([])
        dispatch({type: 'CREATE_WORKOUT', payload: data})
      })
      .catch(({response: {data}}) => {
        console.log('err', data); setError(data.error)
        setEmptyFields(data.emptyFields)
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
        className={emptyFields.includes('title') ? 'error': ''}
      />

      <label>sets</label>
      <input 
        onChange={(e) => setSets(e.target.value)} 
        type="number"
        value={sets}
        className={emptyFields.includes('sets') ? 'error': ''}
      />
      <label>reps</label>
      <input 
        onChange={(e) => setReps(e.target.value)} 
        type="number"
        value={reps}
        className={emptyFields.includes('reps') ? 'error': ''}
      />
      <button>Add workout</button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default WorkoutForm;
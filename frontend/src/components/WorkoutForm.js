import React, { useState } from 'react'
import { useFormik } from "formik";
import axios from 'axios'

import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

/* Form to create new specific workout */
const WorkoutForm = ({ type }) => {
  const { dispatch } = useWorkoutsContext();


  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = (values) => {
    axios.post('/api/workouts', {...values, type})
      .then(({data}) => {
        setError(null)
        setEmptyFields([])
        dispatch({type: 'CREATE_WORKOUT', payload: data})
      })
      .catch(({response: {data}}) => {
        console.log('err', data); setError(data.error)
        setEmptyFields(data.emptyFields)
      })
  }

  const formik = useFormik({
    initialValues: {
      title: '',
      sets: '',
      reps: ''
    },
    onSubmit: handleSubmit,
  });

  return (
    <form className='create' onSubmit={formik.handleSubmit}>
      <h3>Add new {type} workout</h3>

      <label>Title for excercise</label>
      <input 
        type="text"
        id="title"
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
        className={emptyFields.includes('title') ? 'error': ''}
      />

      <label>sets</label>
      <input 
        type="number"
        id="sets"
        name="sets"
        value={formik.values.sets}
        onChange={formik.handleChange}
        className={emptyFields.includes('sets') ? 'error': ''}
      />
      <label>reps</label>
      <input 
        type="number"
        id="reps"
        name="reps"
        value={formik.values.reps}
        onChange={formik.handleChange}
        className={emptyFields.includes('reps') ? 'error': ''}
      />
      <button type="submit">Add workout</button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default WorkoutForm;
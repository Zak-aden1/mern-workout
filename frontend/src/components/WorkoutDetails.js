import axios from 'axios';
import React from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

/* card to show and delete specific workout */
const WorkoutDetails = ({ workout: {title, reps, sets, createdAt, _id} }) => {
  const { dispatch } = useWorkoutsContext();

  const handleClick = () => {
    axios.delete(`/api/workouts/${_id}`)
      .then(({data}) => {
        console.log('deleted', data);
        dispatch({type: 'DELETE_WORKOUT', payload: data })
      })
      .catch(err => console.log('del err', err))
  }

  return (
    <div className='workout-details'>
      <h4>{title}</h4>
      <p><strong>Sets: </strong>{sets}</p>
      <p><strong>Reps: </strong>{reps}</p>
      <p>{formatDistanceToNow(new Date(createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined"  onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails;
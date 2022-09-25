import React from 'react'

const WorkoutDetails = ({ workout: {title, reps, sets, createdAt} }) => {
  return (
    <div className='workout-details'>
      <h4>{title}</h4>
      <p><strong>Sets: </strong>{sets}</p>
      <p><strong>Reps: </strong>{reps}</p>
      <p>{createdAt}</p>
    </div>
  )
}

export default WorkoutDetails;
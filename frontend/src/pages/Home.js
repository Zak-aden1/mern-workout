import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {
  const { type } = useParams();
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    axios.get('/api/workouts')
      .then(({data}) => setWorkouts(data))
      .catch(err => console.log(err))
  }, [])

  const bodyWorkout = workouts.filter(({ type: workoutType }) => workoutType === type);
  
  return (
    <div className='home'>
      <div className='workouts'>
        {bodyWorkout.length > 0 ? bodyWorkout.map((workout) => 
          <WorkoutDetails key={workout._id} workout={workout}/>
        ) : (
          <h4>Start by adding a workout!</h4>
        )}

      </div>
      <WorkoutForm type={type} />
    </div>
  )
}

export default Home;
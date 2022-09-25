import React, { useEffect, useState } from 'react'
import axios from 'axios';

import WorkoutDetails from '../components/WorkoutDetails';

const Home = () => {
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    axios.get('/api/workouts')
      .then(({data}) => setWorkouts(data))
      .catch(err => console.log(err))
  }, [])

  console.log(workouts);

  return (
    <div className='home'>
      <div className='workouts'>
        {workouts.length > 0 && workouts.map((workout) => 
          <WorkoutDetails key={workout._id} workout={workout}/>
        )}
      </div>
    </div>
  )
}

export default Home;
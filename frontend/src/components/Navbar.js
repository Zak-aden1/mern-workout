import React from 'react'
import {Link} from 'react-router-dom'

/* navbar component */
const Navbar = () => {
  return (
    <header>
      <div className='container'>
        <Link to='/'>
          <h1>Your Workouts</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar
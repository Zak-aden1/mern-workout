import React from 'react'
import WorkoutForm from './WorkoutForm';

const Modal = ({ handleClose, workout }) => {

  return (
    <div className='modal display-block'>
      <section className="modal-main">
        ff
        <WorkoutForm />
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  )
}

export default Modal;
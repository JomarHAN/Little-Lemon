import React from 'react'
import BookingForm from './BookingForm'

function BookingPage({state, dispatch}) {
  return (
    <div className='bookingPage-section container-row'>
      <BookingForm state={state} dispatch={dispatch} />
    </div>
  )
}

export default BookingPage
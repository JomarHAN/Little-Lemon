import React from 'react'
import BookingForm from './BookingForm'

function BookingPage({availableTimes, dispatchUpdateTimes}) {
  return (
    <div className='bookingPage-section container-row'>
      <BookingForm availableTimes={availableTimes} dispatchUpdateTimes={dispatchUpdateTimes} />
    </div>
  )
}

export default BookingPage
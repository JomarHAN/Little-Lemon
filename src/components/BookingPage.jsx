import React from 'react'
import BookingForm from './BookingForm'

function BookingPage(props) {
  return (
    <div className='bookingPage-section container-row'>
      <h1 className="booking-title">Reservation</h1>
      <BookingForm {...props} />
    </div>
  )
}

export default BookingPage
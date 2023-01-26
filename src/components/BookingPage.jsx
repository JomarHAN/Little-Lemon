import React from 'react'
import BookingForm from './BookingForm'

function BookingPage(props) {
  return (
    <div className='bookingPage-section container-row'>
      <BookingForm {...props} />
    </div>
  )
}

export default BookingPage
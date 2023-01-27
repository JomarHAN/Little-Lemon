import React from 'react'
import { useNavigate } from 'react-router-dom'

function ConfirmedBooking({reservation}) {
  const {fullName, phoneNumber, email, pickedDate, pickedTime, isMessage, occasion, guests} = reservation
  const navigate = useNavigate()
  return (
    <div className='container-row'>
      <div className='confirm-section'>
        <h1 className="confirm-title">Confirm Reservation</h1>
        <h2>Customer's Information</h2>
        <div className="confirm__info-box">
          <p className="left">Full Name:</p>
          <p className="right"><b>{fullName}</b></p>
        </div>
        <div className="confirm__info-box">
          <p className="left">Phone Number:</p>
          <p className="right"><b>{phoneNumber}</b></p>
        </div>
        <div className="confirm__info-box">
          <p className="left">Email:</p>
          <p className="right"><b>{email}</b></p>
        </div>
        <div className="confirm__info-box">
          <p className="left">Reserved Date:</p>
          <p className="right"><b>{pickedDate}</b></p>
        </div>
        <div className="confirm__info-box">
          <p className="left">Reserved Time:</p>
          <p className="right"><b>{pickedTime}</b></p>
        </div>
        <div className="confirm__info-box">
          <p className="left">Guests:</p>
          <p className="right"><b>{guests}</b></p>
        </div>
        <div className="confirm__info-box">
          <p className="left">Occasion:</p>
          <p className="right"><b>{occasion}</b></p>
        </div>
        <div className="confirm__info-box">
          <p className="left">Note:</p>
          <p className="right"><b>{isMessage ? 'I want to receive a reminder message' : 'No'}</b></p>
        </div>
        <button className='confirm-btn' onClick={() => navigate('/')}>Back to Home Page</button>
      </div>
    </div>
  )
}

export default ConfirmedBooking
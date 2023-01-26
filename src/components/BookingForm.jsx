import React, { useEffect, useState } from 'react'

const ValidatingMessage = () => {
  return <p className="error-message" >Invalid</p>
}

function BookingForm({availableTimes, dispatchAvailableTimes, submitForm}) {
  const [pickedDate, setPickedDate] = useState()
  const [pickedTime, setPickedTime] = useState()
  const [guests, setGuests] = useState()
  const [occasion, setOccasion] = useState()
  const [fullName, setFullName] = useState({
    value: undefined,
    isTouched: false,
  })
  const [phoneNumber, setPhoneNumber] = useState()
  const [email, setEmail] = useState()
  const [isMessage, setIsMessage] = useState(false)

  useEffect(() => {
    if(pickedDate !== undefined){
      dispatchAvailableTimes({type: 'updating times',payload: pickedDate})
    }
  },[pickedDate, dispatchAvailableTimes])

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({pickedDate, pickedTime, guests, occasion});
  }

  return (
      <form className='bookingForm-container'>
        <label htmlFor="user-name">Full Name</label>
        <input
          className={fullName.isTouched && !fullName.value ? 'error-input' : null}
          type="text"
          id="user-name"
          name="fullName"
          value={fullName.value}
          onChange={(e) => setFullName({...fullName ,value:e.target.value})}
          onBlur={() => setFullName({...fullName, isTouched: true})}
          required
        />
        {fullName.isTouched && !fullName.value ? <ValidatingMessage/> : null}
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id='phone' name="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <div className="cols-container">
          <div className="col-left">
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" name='pickedDate' value={pickedDate} onChange={(e) => setPickedDate(e.target.value)} min={new Date().toISOString().split("T")[0]} required/>
          </div>
          <div className="col-right">
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" name='pickedTime' value={pickedTime} onChange={(e) => setPickedTime(e.target.value)} required>
              <option value={undefined} >--:--</option>
              {availableTimes?.length !== 0
                && availableTimes.map(time => (
                  <option key={time} value={time} >{time}</option>
                ))
              }
            </select>
          </div>
        </div>
        <div className="cols-container">
          <div className="col-left">
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="0" min="1" max="10" id="guests" name='guests' value={guests} onChange={(e) => setGuests(e.target.value)} required/>
          </div>
          <div className="col-right">
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name='occasion' value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option value={undefined}>Select Occasion</option>
                <option value='Birthday'>Birthday</option>
                <option value='Anniversary'>Anniversary</option>
            </select>
          </div>
        </div>
        <div className="checkBox-container">
          <input type="checkbox" name="receivedMessage" id="message" value={isMessage} onChange={(e) => setIsMessage(e.target.value)} />
          <label htmlFor="message">I want to receive a reminder message.</label>
        </div>
        <button
          className='booking-btn'
          aria-label='On Click'
          type='submit'
          onClick={handleSubmit}
          disabled={!pickedDate || !pickedTime || !guests || !occasion || !fullName || !phoneNumber || !email}>
            Book Now
        </button>
      </form>
  )
}

export default BookingForm
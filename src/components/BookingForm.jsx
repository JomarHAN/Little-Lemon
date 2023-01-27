import React, { useEffect, useState } from 'react'

const ValidatingMessage = ({note}) => {
  return <p className="error-message" >{note ? note :'Invalid'}</p>
}

function BookingForm({availableTimes, dispatchAvailableTimes, submitForm, dispatchReservation, reservation}) {
  const [pickedDate, setPickedDate] = useState({
    value: undefined,
    isTouched: false
  })
  const [pickedTime, setPickedTime] = useState({
    value: undefined,
    isTouched: false
  })
  const [guests, setGuests] = useState({
    value: undefined,
    isTouched: false
  })
  const [occasion, setOccasion] = useState("Any")
  const [fullName, setFullName] = useState({
    value: undefined,
    isTouched: false,
  })
  const [phoneNumber, setPhoneNumber] = useState(
    {
      value: undefined,
      isTouched: false,
    }
  )
  const [email, setEmail] = useState({
    value: undefined,
    isTouched: false,
  })
  const [isMessage, setIsMessage] = useState(false)

  useEffect(() => {
    if(pickedDate.value !== undefined){
      dispatchAvailableTimes({type: 'updating times',payload: pickedDate.value})
    }
  },[pickedDate.value, dispatchAvailableTimes])


  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({
      fullName: fullName.value,
      phoneNumber: phoneNumber.value,
      email: email.value,
      pickedDate: pickedDate.value,
      pickedTime: pickedTime.value,
      guests: guests.value,
      occasion: occasion,
      isMessage: isMessage
    });
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
        <input
          type="tel"
          id='phone'
          name="phoneNumber"
          value={phoneNumber.value}
          onChange={(e) => setPhoneNumber({...phoneNumber ,value: e.target.value})}
          onBlur={() => setPhoneNumber({...phoneNumber, isTouched: true})}
          className={phoneNumber.isTouched && !phoneNumber.value ? 'error-input' : null}
          required
        />
        {phoneNumber.isTouched && !phoneNumber.value ? <ValidatingMessage/> : null}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email.value}
          onChange={(e) => setEmail({...email, value:e.target.value})}
          onBlur={() => setEmail({...email, isTouched: true})}
          className={email.isTouched && !email.value ? 'error-input' : null}
          required
        />
        {email.isTouched && !email.value ? <ValidatingMessage/> : null}
        <div className="cols-container">
          <div className="col-left">
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              name='pickedDate'
              value={pickedDate.value}
              onChange={(e) => setPickedDate({...pickedDate, value: e.target.value})}
              onBlur={() => setPickedDate({...pickedDate, isTouched: true})}
              className={pickedDate.isTouched && !pickedDate.value ? 'error-input' : null}
              min={new Date().toISOString().split("T")[0]}
              required
            />
            {pickedDate.isTouched && !pickedDate.value ? <ValidatingMessage/> : null}
          </div>
          <div className="col-right">
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time"
              name='pickedTime'
              value={pickedTime.value}
              onChange={(e) => setPickedTime({...pickedTime, value: e.target.value})}
              onBlur={() => setPickedTime({...pickedTime, isTouched: true})}
              className={pickedTime.isTouched && !pickedTime.value ? 'error-input' : null}
              required
            >
              <option value={undefined} >--:--</option>
              {availableTimes?.length !== 0
                && availableTimes.map(time => (
                  <option key={time} value={time} >{time}</option>
                ))
              }
            </select>
            {pickedTime.isTouched && !pickedTime.value ? <ValidatingMessage/> : null}
          </div>
        </div>
        <div className="cols-container">
          <div className="col-left">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="0"
              min="1"
              max="10"
              id="guests"
              name='guests'
              value={guests.value}
              onChange={(e) => setGuests({...guests, value: e.target.value})}
              onBlur={() => setGuests({...guests, isTouched: true})}
              className={(guests.isTouched && !guests.value) || guests.value > 10 ? 'error-input' : null}
              required
            />
            {guests.isTouched && !guests.value ? <ValidatingMessage/> : guests.isTouched && guests.value > 10 ? <ValidatingMessage note="No more than 10 peoples!" /> : null}
          </div>
          <div className="col-right">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              name='occasion'
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
                <option value={undefined}>Select Occasion</option>
                <option value='Birthday'>Birthday</option>
                <option value='Anniversary'>Anniversary</option>
            </select>
          </div>
        </div>
        <div className="checkBox-container">
          <input
            type="checkbox"
            name="receivedMessage"
            id="message"
            value={isMessage}
            onChange={(e) => setIsMessage(e.target.value)}
          />
          <label htmlFor="message">I want to receive a reminder message.</label>
        </div>
        <button
          className='booking-btn'
          aria-label='On Click'
          type='submit'
          onClick={handleSubmit}
          disabled={!pickedDate.value || !pickedTime.value || !guests.value || guests.value > 10 || !fullName.value || !phoneNumber.value || !email.value}>
            Book Now
        </button>
      </form>
  )
}

export default BookingForm
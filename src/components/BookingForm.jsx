import React, { useEffect, useState } from 'react'

function BookingForm({ state, dispatch}) {
  const [bookingInfo, setBookingInfo] = useState({
    availableDate: `${new Date().toISOString().split("T")[0]}`,
    availableTime: "17:00",
    guests: 1,
    occasion: "Birthday"
  })


  useEffect(() => {
    console.log(state);
  },[state])

  const handleChange = (e) => {
    const {name, value} = e.target
    setBookingInfo({...bookingInfo, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({type: "booking", payload: bookingInfo})
  }
  return (
      <form className='bookingForm-container'>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" name='availableDate' value={bookingInfo.availableDate} onChange={handleChange} min={new Date().toISOString().split("T")[0]}/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" name='availableTime' value={bookingInfo.availableTime} onChange={handleChange}>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" name='guests' value={bookingInfo.guests} onChange={handleChange} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name='occasion' value={bookingInfo.occasion} onChange={handleChange}>
            <option value='Birthday'>Birthday</option>
            <option value='Anniversary'>Anniversary</option>
        </select>
        <button type='submit' onClick={handleSubmit}>Book Now</button>
      </form>
  )
}

export default BookingForm
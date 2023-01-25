import React, { useEffect, useState } from 'react'
import { fetchAPI, submitAPI } from '../dateData'

function BookingForm({ state, dispatch}) {
  const [bookingInfo, setBookingInfo] = useState({
    pickedDate: undefined,
    pickedTime: undefined,
    guests: 1,
    occasion: undefined
  })
  const [availableTimes, setAvailableTimes] = useState([])

  console.log(state)

  useEffect(() => {
    setAvailableTimes(fetchAPI(new Date(bookingInfo.pickedDate)))
  },[bookingInfo.pickedDate])

  const handleChange = (e) => {
    const {name, value} = e.target
    setBookingInfo({...bookingInfo, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(bookingInfo.pickedDate !== undefined && bookingInfo.pickedTime !== undefined && bookingInfo.occasion !== undefined && bookingInfo.guests > 0){
      dispatch({type: "booking", payload: bookingInfo})
      submitAPI(bookingInfo)
    } else {
      alert('Please fill out the form')
    }
  }
  return (
      <form className='bookingForm-container'>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" name='pickedDate' value={bookingInfo.pickedDate} onChange={handleChange} min={new Date().toISOString().split("T")[0]}/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" name='pickedTime' value={bookingInfo.pickedTime} onChange={handleChange}>
          <option value={undefined} >--:--</option>
          {availableTimes.length !== 0
            && availableTimes.map(time => (
              <option key={time} value={time} >{time}</option>
            ))
          }
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" name='guests' value={bookingInfo.guests} onChange={handleChange} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name='occasion' value={bookingInfo.occasion} onChange={handleChange}>
            <option value={undefined}>Select Occasion</option>
            <option value='Birthday'>Birthday</option>
            <option value='Anniversary'>Anniversary</option>
        </select>
        <button type='submit' onClick={handleSubmit}>Book Now</button>
      </form>
  )
}

export default BookingForm
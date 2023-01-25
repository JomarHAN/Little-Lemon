import React, { useEffect, useState } from 'react'
import { fetchAPI, submitAPI } from '../dateData'

function BookingForm({availableTimes, dispatchUpdateTimes}) {
  const [pickedDate, setPickedDate] = useState()
  const [pickedTime, setPickedTime] = useState()
  const [guests, setGuests] = useState()
  const [occasion, setOccasion] = useState()

  useEffect(() => {
    if(pickedDate !== undefined){
      dispatchUpdateTimes({type: 'updating times',payload: pickedDate})
    }
  },[pickedDate, dispatchUpdateTimes])

  return (
      <form className='bookingForm-container'>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" name='pickedDate' value={pickedDate} onChange={(e) => setPickedDate(e.target.value)} min={new Date().toISOString().split("T")[0]}/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" name='pickedTime' value={pickedTime} onChange={(e) => setPickedTime(e.target.value)}>
          <option value={undefined} >--:--</option>
          {availableTimes.length !== 0
            && availableTimes.map(time => (
              <option key={time} value={time} >{time}</option>
            ))
          }
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" name='guests' value={guests} onChange={(e) => setGuests(e.target.value)} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name='occasion' value={occasion} onChange={(e) => setOccasion(e.target.value)}>
            <option value={undefined}>Select Occasion</option>
            <option value='Birthday'>Birthday</option>
            <option value='Anniversary'>Anniversary</option>
        </select>
        <button type='submit'>Book Now</button>
      </form>
  )
}

export default BookingForm
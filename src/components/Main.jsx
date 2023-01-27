import React, { useReducer, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import About from './About'
import BookingPage from './BookingPage'
import Home from './Home'
import { fetchAPI, submitAPI } from '../dateData'
import ConfirmedBooking from './ConfirmedBooking'


const initializeTimes = fetchAPI(new Date())

const updateTimes = (state, {type, payload}) => {
  switch(type){
    case "updating times":
      const updatedAvailableTimes = fetchAPI(new Date(payload))
      state = updatedAvailableTimes
      return state
    default:
      return state;
  }
}

const initializeCustomer = {
  fullName: "",
  phoneNumber: "",
  email: "",
  pickedDate: "",
  pickedTime: "",
  guests: "",
  occasion: "",
  isMessage: false
}

const reservationReducer = (state, {type, payload}) => {
  switch(type){
    case 'booking':
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
}

function Main() {
  const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes,initializeTimes)
  const [reservation, dispatchReservation] = useReducer(reservationReducer, initializeCustomer)
  const navigate = useNavigate()

  const submitForm = (form) => {
    if(submitAPI(form)){
      dispatchReservation({type: 'booking', payload: form})
      navigate('/confirmed-booking')
    }
  }

  return (
    <main>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/about' element={<About/>} />
        <Route path='/reservation' element={<BookingPage availableTimes={availableTimes} dispatchAvailableTimes={dispatchAvailableTimes} submitForm={submitForm} />}  dispatchReservation={dispatchReservation} />
        <Route path='/confirmed-booking' element={<ConfirmedBooking reservation={reservation} />} />
      </Routes>
    </main>
  )
}

export default Main
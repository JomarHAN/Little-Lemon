import React, { useState, useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import BookingPage from './BookingPage'
import Home from './Home'
import Login from './Login'
import Menu from './Menu'
import OrderOnline from './OrderOnline'


const initializeTimes = ["17:00","18:00","19:00","20:00"]

const updateTimes = (state, {type, payload}) => {
  console.log(payload)
  switch(type){
    case "updating times":
      return state
    default:
      return state;
  }
}

function Main() {
  const [availableTimes, dispatchUpdateTimes] = useReducer(updateTimes,initializeTimes)

  return (
    <main>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/about' element={<About/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/reservation' element={<BookingPage availableTimes={availableTimes} dispatchUpdateTimes={dispatchUpdateTimes} />} />
        <Route path='/order-online' element={<OrderOnline/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </main>
  )
}

export default Main
import React from 'react'
import { useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import BookingPage from './BookingPage'
import Home from './Home'
import Login from './Login'
import Menu from './Menu'
import OrderOnline from './OrderOnline'

export const initialState = {
  pickedDate: '',
  pickedTime:  '',
  guests: '',
  occasion: ""
}


export const formReducer = (state, {type, payload}) => {
  switch(type){
    case "booking":
      return {
        ...state,
        pickedDate: payload.pickedDate,
        pickedTime: payload.pickedTime,
        guests: payload.guests,
        occasion: payload.occasion
      }
    default:
      return state;
  }
}

function Main() {
  const [state, dispatch] = useReducer(formReducer, initialState)
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/about' element={<About/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/reservation' element={<BookingPage state={state} dispatch={dispatch} />} />
        <Route path='/order-online' element={<OrderOnline/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </main>
  )
}

export default Main
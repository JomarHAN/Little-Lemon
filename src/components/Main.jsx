import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import BookingPage from './BookingPage'
import Home from './Home'
import Login from './Login'
import Menu from './Menu'
import OrderOnline from './OrderOnline'


function Main() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/about' element={<About/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/reservation' element={<BookingPage/>} />
        <Route path='/order-online' element={<OrderOnline/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </main>
  )
}

export default Main
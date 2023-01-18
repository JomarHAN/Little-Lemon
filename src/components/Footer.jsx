import React from 'react'
import logo from './../images/little-lemon-logo.jpg'

function Footer() {
  return (
    <footer>
        <img src={logo} alt="" />
        <ul>
            <li><h4>Navigation</h4></li>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservation">Reservation</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
        </ul>
       <div>
            <h4>Contact</h4>
            <p>Address</p>
            <p>Phone Number</p>
            <p>Email</p>
       </div>
       <div>
            <h4>Social Media</h4>
            <p>Address</p>
            <p>Phone Number</p>
            <p>Email</p>
       </div>
    </footer>
  )
}

export default Footer
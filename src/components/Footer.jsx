import React from 'react'
import logo from './../images/little-lemon-logo.jpg'

function Footer() {
  return (
    <footer>
      <div className='container-row footer-content'>
        <img className='footer-logo' src={logo} alt="" />
        <div className="footer-details">
          <div className='footer-navigation'>
            <h4>Navigation</h4> 
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservation">Reservation</a></li>
                <li><a href="/order-online">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
          </div>
        <div className='footer-contact'>
              <h4>Contact</h4>
              <p>Address</p>
              <p>Phone Number</p>
              <p>Email</p>
        </div>
        <div className='footer-social'>
              <h4>Social Media</h4>
              <p>Address</p>
              <p>Phone Number</p>
              <p>Email</p>
        </div>
      </div>

      </div>
    </footer>
  )
}

export default Footer
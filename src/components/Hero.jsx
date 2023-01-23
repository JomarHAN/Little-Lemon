import React from 'react'
import { Link } from 'react-router-dom'

import banner from './../images/banner.jpg'

function Hero() {
  return (
    <div className="slider-container">
        <div className="slider-contents container-row">
        <div className="slider-content-left">
            <h2>Little Lemon</h2>
            <h4>Chicago</h4>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipe served with a modern twist</p>
            <Link to='/reservation' >Reserve a Table</Link>
        </div>
        <div className="slider-content-right">
            <div className="box-container">
              <img src={banner} alt="" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero
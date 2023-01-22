import React from 'react'
import {testimonials} from './../data'
import TestimonialCard from './TestimonialCard'

function Testimonials() {
  return (
    <div className='testimonials-section'>
        <div className="testimonial-container container-row">
            <h2>Testimonials</h2>
            <div className="testimonial__cards-group">
                {testimonials.map((customer) => (
                    <TestimonialCard customer={customer} />
                ))}

            </div>
        </div>
    </div>
  )
}

export default Testimonials
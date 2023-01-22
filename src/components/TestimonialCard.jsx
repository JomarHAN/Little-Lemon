import React from 'react'
import Rating from './Rating'

function TestimonialCard({customer}) {
  return (
    <article className='testimonial__card'>
        <Rating rating={customer.rating} />
        <div className="testimonial__mid-card">
            <div className="testimonial__card-image">
                <img src={customer.image} alt="" />
            </div>
            <h4 className="testimonial__card-name">{customer.name}</h4>
        </div>
        <i>"{customer.testimony}"</i>
    </article>
  )
}

export default TestimonialCard
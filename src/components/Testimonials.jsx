import React from 'react'
import {testimonials} from './../data'

function Testimonials() {

  return (
    <div className='testimonials-section'>
        <div className="testimonial-container container-row">
            <h2>Testimonials</h2>
            <div className="testimonial__cards-group">
                {testimonials.map((customer) => (

                <article className='testimonial__card'>
                    <div>⭐️⭐️⭐️⭐️⭐️</div>
                    <div className="testimonial__mid-card">
                        <div className="testimonial__card-image">
                            <img src={customer.image} alt="" />
                        </div>
                        <h4 className="testimonial__card-name">{customer.name}</h4>
                    </div>
                    <i>"{customer.testimony}"</i>
                </article>
                ))}

            </div>
        </div>
    </div>
  )
}

export default Testimonials
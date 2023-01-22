import React from 'react'

function SpecialCard({title, image, price, text}) {
  return (
    <article className='special-card'>
        <div className="card-image">
        <img src={image} alt="" />
        </div>
        <div className="card-details">
        <div className="card-header">
            <h2 className='title'>{title}</h2>
            <h2 className='price'>{price}</h2>
        </div>
        <p>{text}</p>
        <b>Order a delivery</b>
        </div>
    </article>
  )
}

export default SpecialCard
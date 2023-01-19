import React from 'react'
import banner from './../images/banner.jpg'
import salad from './../images/greek-salad.jpg'
import dessert from './../images/lemon-dessert.jpg'
import bruchetta from './../images/bruchetta.jpg'

function Main() {
  return (
    <main>
      <div className="slider-container">
        <div className="slider-contents container-row">
          <div className="slider-content-left">
            <h2>Little Lemon</h2>
            <h4>Chicago</h4>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipe served with a modern twist</p>
            <button>Reserve a Table</button>
          </div>
          <div className="slider-content-right">
            <div className="box-container">
              <img src={banner} alt="" />
            </div>
          </div>

        </div>
      </div>
      <div className="specials-container container-row">
        <div className="specials-head">
          <h2>This week specials!</h2>
          <button>order online</button>
        </div>
        <div className="specials-cards">
          <article>
            <div className="card-image">
              <img src={salad} alt="" />
            </div>
            <div className="card-details">
              <div className="card-header">
                <h2 className='title'>Greek Salad</h2>
                <h2 className='price'>$12.99</h2>
              </div>
              <p>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
              <b>Order a delivery</b>
            </div>
          </article>
          <article>
            <div className="card-image">
              <img src={bruchetta} alt="" />
            </div>
            <div className="card-details">
              <div className="card-header">
                <h2 className='title'>Bruchetta</h2>
                <h2 className='price'>$5.99</h2>
              </div>
              <p>Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
              <b>Order a delivery</b>
            </div>
          </article>
          <article>
            <div className="card-image">
              <img src={dessert} alt="" />
            </div>
            <div className="card-details">
              <div className="card-header">
                <h2 className='title'>Lemon Dessert</h2>
                <h2 className='price'>$5.00</h2>
              </div>
              <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined</p>
              <b>Order a delivery</b>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}

export default Main
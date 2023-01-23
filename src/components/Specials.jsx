import React from 'react'
import {specials} from './../data'
import SpecialCard from './SpecialCard'

function Specials() {
  return (
    <div className="specials-container container-row">
        <div className="specials-head">
        <h2>This week specials!</h2>
        <button>online menu</button>
        </div>
        <div className="specials-cards">
            {specials.map(({image, title, price, text}) => (
                <SpecialCard image={image} key={title} title={title} price={price} text={text}  />
            ))}
        </div>
    </div>
  )
}

export default Specials
import React from 'react'
import about1 from './../images/about-1.jpeg'
import about2 from './../images/about-2.jpeg'

function About() {
  return (
    <div className="about-section">
      <div className="about-container container-row">
        <div className="about__left">
          <div className="about__left-container">
            <h2 className="about__title">Little Lemon</h2>
            <h4>Chicago</h4>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
          </div>
        </div>
        <div className="about__right">
          <div className="about__images-box">
            <img src={about2} alt="" className="about__image-left" />
            <img src={about1} alt="" className="about__image-right" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
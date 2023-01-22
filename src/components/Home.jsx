import React from 'react'
import About from './About'

import Hero from './Hero'
import Specials from './Specials'
import Testimonials from './Testimonials'

function Home() {
  return (
    <>
        <Hero/>
        <Specials/>
        <Testimonials/>
        <About/>
    </>
  )
}

export default Home
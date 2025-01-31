import React from 'react'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div className='w-full h-dvh'>
      <Navbar />
        <Hero />
        <Footer />
    </div>
  )
}

export default Home
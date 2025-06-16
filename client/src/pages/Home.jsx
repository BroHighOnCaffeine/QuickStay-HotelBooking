import React from 'react'
import Hero from '../Components/Hero'
import FeaturedDestinations from '../Components/FeaturedDestinations'

const Home = () => {
  return (

    // This is Fragment
    <>  
        {/* Importing Hero Component for Background */}
        <Hero/>
        <FeaturedDestinations/>
    </>
  )
}

export default Home
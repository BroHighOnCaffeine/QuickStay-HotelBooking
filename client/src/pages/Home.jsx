import React from 'react'
import Hero from '../Components/Hero'
import FeaturedDestinations from '../Components/FeaturedDestinations'
import ExclusiveOffers from '../Components/ExclusiveOffers'

const Home = () => {
  return (

    // This is Fragment
    <>  
        {/* Importing Hero Component for Background */}
        <Hero/>
        <FeaturedDestinations/>
        <ExclusiveOffers/>
    </>
  )
}

export default Home
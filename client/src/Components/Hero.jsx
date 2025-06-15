import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col item-start justify-center px-6 md:px16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen'>Hero</div>
  )
}

export default Hero

// Now we've made a component for the background and we'll mount this on the Home Page
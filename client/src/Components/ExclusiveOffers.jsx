import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'

const ExclusiveOffers = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30'>

        <div className='flex flex-col md:flex-row items-center justify-between w-full' >
        
            <Title align='left' title='Exclusive Offers' subTitle='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque praesentium ullam vel laudantium fugiat nihil perferendis facilis error tempora.'/>

            <button className='group flex items-center gap-2 font-medium cursor-pointer max-md : mt -12t'>
                View All Offers
                <img src={assets.arrowIcon} alt="arrow-icon" 
                className="group-hover:translate-x-1 transaction-all " />
                
                </button>
        </div>

        {/* In this div we'll display cards */}
        {/* <div>

        </div> */}

    </div>
  )
}

export default ExclusiveOffers


// Now we'll mount this Exclusive offers in the Home Page.
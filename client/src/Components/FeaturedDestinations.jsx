// Mounting the HotelCard Component here.

import React from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import Title from "./Title";

const FeaturedDestinations = () => {
  return (
    //                                                         lg:px-15 is used for spacing .
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-15 bg-slate-50 py-20'> 

    <Title title='Featured Destination' subTitle=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, consequatur. Voluptatibus, fuga ipsa, ducimus optio expedita, veritatis atque error possimus commodi ex obcaecati!'/>
   



    {/* Here in this div we've Mounted all the Hotel Cards */}
      <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
        {/* Using Dummy Hotel Data From Assets */}
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedDestinations;

// We will mount this Featured Destination Component in Our HomePage.

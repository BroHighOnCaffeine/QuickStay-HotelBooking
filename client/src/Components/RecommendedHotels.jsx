// Mounting the HotelCard Component here.

import React, { useEffect, useState } from "react";

import HotelCard from "./HotelCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const RecommendedHotels = () => {

  const {rooms , searchedCities} = useAppContext() ;

//   Creating State Variable
 const [recommended , setRecommended] = useState([])  // Initializing with empty array

//   Creating Function - filterHotels  - to filter the Hotels For the Particular City that is avilable in the searchedCities Array
const filterHotels = () => {                                      // Here room is passed as parameter
    const filteredHotels = rooms.slice().filter( room => searchedCities.includes(room.hotel.city)  )

                // setting this hotels in the setRecommended

                setRecommended(filteredHotels) ;
}

//  Calling this function whenever the page gets loaded
useEffect( () => { 
                    // Function Call
                filterHotels();             

}, [rooms, searchedCities] ) //here rooms & searchedCities are added in the dependency array


// added a logic here 
  return rooms.length > 0 && (   // when we'll have any data in the rooms array  then only we'll display these HTML Tags
    //                                                         lg:px-15 is used for spacing .
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-15 bg-slate-50 py-20'> 

    <Title title='Featured Destination' subTitle=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, consequatur. Voluptatibus, fuga ipsa, ducimus optio expedita, veritatis atque error possimus commodi ex obcaecati!'/>
   



    {/* Here in this div we've Mounted all the Hotel Cards */}
      <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
        {/* Displaying the rooms data using maps. */}
        {rooms.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>

{/* Adding here ScrollTo(0,0) So it can scroll the webpage to the Top. */}
      <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}}
      className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'>
        
        View All Destinations

      </button>
    </div>
  );
};

export default RecommendedHotels;

// We will mount this Featured Destination Component in Our HomePage.

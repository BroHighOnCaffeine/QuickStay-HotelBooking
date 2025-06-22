import React from "react";
import Title from "../Components/Title";
import {userBookingsDummyData, assets} from '../assets/assets'
import { useState } from "react";


// Now we have to create a State variable to store the data form the usersBooking Dummy Data. 

const Mybooking = () => {

    // Now we have to create a State variable to store the data form the usersBooking Dummy Data. 
    const [booking, setBookings] = useState(userBookingsDummyData)



  return (
    <div className="py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">
      <Title
        title="My Bookings"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta rerum temporibus distinctio nobis quibusdam, sit repellendus deserunt expedita tempore necessitatibus quod corporis nemo voluptas, eum deleniti porro exercitationem soluta ad"
        align="left"
      />

      {/* // Now we'll Show the Data in the Table Format. */}
      <div className="max-w-6xl mt-8 w-full text-gray-800">
        {/* This Div contains Data for the Table Head. */}
        <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base">
          {/* This will be hidden on the Phone Screen and will only be Displayed in the large and medium Screen due to property "hidden and md-grid" */}

          <div className="w-1/3">Hotels</div>
          <div className="w-1/3">Date & Timmings</div>
          <div className="w-1/3">Payement</div>
        </div>

        {/* Here we will display all our Booking Data , Soo we will get it in a arrray*/}
        {booking.map((booking)=>(
            <div key={booking._id}  className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t'>

                {/* Hotel Details */}
                <div className='flex flex-col md:flex-row' >
                    <img src={booking.room.images[0]} alt="hotel-img" className='min-md:w-44 rounded shadow object-cover' />
                    <div className="flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4">
                        <p className="font-playfair text-2xl">{booking.hotel.name}
                          <span className="font-inter text-sm"> ({booking.room.roomType})</span>
                        </p>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                            <img src={assets.locationIcon} alt="location-icon" />
                            <span>{booking.hotel.address}</span>
                        </div>
                         <div className="flex items-center gap-1 text-sm text-gray-500">
                            <img src={assets.guestsIcon} alt="guests-icon" />
                            <span>Guests: {booking.guests}</span>
                        </div>
                        <p>Total: Rs.{booking.totalPrice}</p>
                    </div>
                </div>

                {/* Date[CheckIn and Checkout] and Time */}
                <div className='flex flex-row md:items-center md:gap-12 mt-3 gap-8'>
                    <div>
                        <p>Check-In:</p>
                        <p className="text-gray-500 text-sm"> {new Date(booking.checkInDate).toDateString()}</p>
                    </div>

              

                    <div>
                        <p>Check-Out:</p>
                        <p className="text-gray-500 text-sm"> {new Date(booking.checkOutDate).toDateString()}</p>
                    </div>

                </div >

                {/* Payement Status */}
                <div className='flex flex-col items-start justify-center pt-3'>
                    <div className="fleax items-center gap-2">
                        {/* Displaying the red or Green Color Dot For Payment Status */}
                        <div className={`h-3 w-3 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500"}`}>
                        </div>
                        <p className={`text-sm ${booking.isPaid ? "text-green-500" : "text-red-500"}`}>{booking.isPaid ? "Paid" : "Unpaid"} </p>
                        

                    </div>
                    
                </div>

            </div>
        ))}
      </div>
    </div>
  );
};

export default Mybooking;

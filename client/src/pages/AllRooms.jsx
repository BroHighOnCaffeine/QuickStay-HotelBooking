import React from "react";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "../Components/StarRating";

const AllRooms = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 1g:px-24 x1:px-32">
      {/* we will divide this Page into two Parts - left and Right  */}

      {/* For Right Side */}
      <div>
        <div className="filex flex-col items-start text-left">
          <h1 className="font-playfair text-4x] md:text-[40px]">Hotel Rooms</h1>
          <p ClassName="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
            aperiam optio facilis aliquam corrupti odit quo! Labore modi,
            consequuntur quidem placeat ipsam velit.
          </p>
        </div>

        {roomsDummyData.map((room) => (
          <div
            key={room._id}
            className="flex flex-col md:flex-row items-start py-10 gap-6
border-b border-gray-300 last:pb-30 last:border-0"
          >
            <img
              onClick={() => {
                navigate(`/rooms/${room._id}`), scrollTo(0, 0);
              }}
              src={room.images[0]}
              alt="hotel-img"
              title="View Room Details"
              className="max-h-65 md:w-1/2 rounded-xl shadow-1g object-cover cursor-pointer"
            />

            {/* Displaying Some Other Data */}
            <div className="md:w-1/2 flex flex-col gap-2">
              <p className="text gray-500">{room.hotel.city}</p>
              <p
                onClick={() => {
                  navigate(`/rooms/${room._id}`), scrollTo(0, 0);
                }}
                className="text gray-800 text-3xl font-playfair cursor-pointer"
              >
                {room.hotel.name}
              </p>
              <div className="flex items-center">
                <StarRating />
                <p className="ml-2">200+ reviews</p>
              </div>
              <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{room.hotel.address}</span>
              </div>

              {/* Room Amenities */}
              <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                {room.amenities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 rounded-1g bg-[#F5F5FF]/70"
                  >
                    <img
                      src={facilityIcons[item]}
                      alt={item}
                      className="w-5 h-5"
                    />
                    <p className="text-xs">{item}</p>
                  </div>
                ))}
              </div>
              {/* Room Price Per Night  */}
              <p className="txt-xl font-medium text-gray-700" >Rs. {room.pricePerNight} /night</p>
            </div>
          </div>
        ))}
      </div>

      {/* <h1>Hotel Rooms</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui aperiam
        optio facilis aliquam corrupti odit quo! Labore modi, consequuntur
        quidem placeat ipsam velit.
      </p> */}

      {/* For Left Side [It will Contain Filters] */}
      <div className='bg-white w-80 border border-gray-300 text-gray-600 max-1g:mb-8 min-1g:mt-16'>
        <div>
            <p className="text-base font-medium text-gray-800" >FILTERS</p>
            <div className="text-xs cursor-pointer">
                <span className="lg:hidden">HIDE</span> 
                {/* This will be hidden on LARGE SCreen and Displayed only on smaller screen 👆🏻 */}

                {/* This CLEAR will be displayed on the bigger screen[i.e. Desktop view] and we can hide it using filter.👇🏻 */}
                <span className="hidden lg:block">CLEAR</span>
            </div>


        </div>

      </div>
    </div>
  );
};

export default AllRooms;

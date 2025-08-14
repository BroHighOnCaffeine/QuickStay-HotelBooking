import React, { useState } from "react";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate, useSearchParams } from "react-router-dom";
import StarRating from "../Components/StarRating";
import { useAppContext } from "../context/AppContext";

// Creating a Component - CheckBox
const CheckBox = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="checkBox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
      />
      {/* e means event */}
      <span className="font-light selected-none">{label}</span>
    </label>
  );
};

// Adding another Component RadioButton
const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="radio"
        name="sortOption"
        checked={selected}
        onChange={(e) => onChange(label)}
      />
      {/* e means event */}
      <span className="font-light selected-none">{label}</span>
    </label>
  );
};

const AllRooms = () => {

  const [searchParams, setSearchParams] = useSearchParams() // So from the URL we get the Search Paramenter

  //Geting the room data from the AppContext
  const{rooms , navigate, currency} = useAppContext();


  const roomTypes = ["Single Bed", "Double Bed", "Luxury Room", "Family Suite"];

  const priceRange = [
    "O to 500",
    "500 to 1000",
    "1000 to 2000",
    "2000 to 3000",
  ];
  const sortOptions = [
    "price Low to High",
    "price High to Low",
    "Newest First",
  ];


  //   Now we have to hide the whole filter Section [column 2] in SmallerScreen [i.e. Mobile Screen] so we will first create a "state variable" for it . 👇🏻
  const [openFilters, setOpenFilters] = useState(false); //State Variable

  // Creating two other state variables using that we can filter the Hotel List
  const [selectedFilters , setSelectedFilters] = useState({ // adding object in useState & adding two property in this object.
    
                                                          roomType : [],
                                                          priceRange : [],
                                                          })


  // Creating State variable for the filter - sortby
  const [selectedSort , setSelectedSort] = useState('') //Initlizing it with empty string bcoz as the page loades the filter needs to be clear or unchecked

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
              <p className="txt-xl font-medium text-gray-700">
                Rs. {room.pricePerNight} /night
              </p>
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
      <div className="bg-white w-80 border border-gray-300 text-gray-600 max-1g:mb-8 min-1g:mt-16">
        <div
          className={`flex items-center justify-between px-5 py-2.5 min-1g:border-b border-gray-300  ${
            openFilters && "border-b"
          }`}
        >
          <p className="text-base font-medium text-gray-800">FILTERS</p>
          <div className="text-xs cursor-pointer">
            <span
              onClick={() => setOpenFilters(!openFilters)}
              className="lg:hidden"
            >
              {openFilters ? "HIDE" : "SHOW"}
            </span>
            {/* This will be hidden on LARGE SCreen and Displayed only on smaller screen 👆🏻 */}

            {/* This CLEAR will be displayed on the bigger screen[i.e. Desktop view] and we can hide it using filter.👇🏻 */}
            <span className="hidden lg:block">CLEAR</span>
          </div>
        </div>

        {/* Here We will display the Filter-Options */}
        <div
          className={`${
            openFilters ? "h-auto" : "h-0 lg:h-auto"
          } overflow-hidden transition-all duration-700`}
        >
          {/* This is will be displayed when the OpenFilter is already open Or Opendup[Mobile] */}

          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Popular Filters</p>
            {roomTypes.map((room, index)=>(
                <CheckBox key={index} label={room}/>
            ))}

            {/* We will keep the FilterOption in an Array and use the CheckBox Component also we'll need the Radio Buttons*/}
          </div>
          
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Price Range</p>
            {priceRange.map((range , index)=>(
                <CheckBox key={index} label={`$ ${range}`}/>
            ))}
          </div>

          <div className="px-5 pt-5 pb-7">
            <p className="font-medium text-gray-800 pb-2">Sort by</p>
            {sortOptions.map((option , index)=>(
                <RadioButton key={index} label={option} />
            ))}
          </div>


        </div>
      </div>
    </div>
  );
};

export default AllRooms;

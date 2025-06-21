import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { useState } from "react";
import StarRating from "../Components/StarRating";

const RoomDetails = () => {
  // From the url parameter we will get the room id and then we will store it a state variable.
  const { id } = useParams();

  const [room, setRoom] = useState(null); //State Variable initialised with null .
  const [mainImage, setmainImage] = useState(null);

  // First we will find Rooms in this Function
  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);

    // Now we will  use a setter function to set this room in the state(room) created above.
    room && setRoom(room);
    room && setmainImage(room.images[0]);
  }, []);
  // [] is called here as dependency array.

  return (
    room && ( // Here "room &&" means wheh room data  will be available then only return div
      <div className="py-28 md:py-35 px-4 md:px-16 1g:px-24 x1:px-32">
        {/* Room Details */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h1 className="text-3x] md:text-4xl font-playfair">
            {room.hotel.name}{" "}
            <span className="font-inter text-sm">({room.roomType})</span>{" "}
          </h1>
          <p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full">
            20% OFF{" "}
          </p>
        </div>

        {/* Room Rating */}
        <div className="flex items-center gap-1 mt-2">
          <StarRating />
          <p className="ml-2">200+ reviews</p>
        </div>

        {/* Room Address */}
        <div className="flex items-center gap-1 text-gray-500 mt-2">
          <img src={assets.locationIcon} alt="location-icon" />
          <span>{room.hotel.address}</span>
        </div>

        {/* Room Images */}
        <div className="flex flex-col lg:flex-row mt-6 gap-6">
          <div className=" lg:w-1/2 w-full">
            <img
              src={mainImage}
              alt="Room Image"
              className="w-full rounded-xl shadow-lg object-cover "
            />
          </div>

          {/* displaying other images */}
          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {room?.images.length > 1 &&
              room.images.map((image, index) => (
                <img
                  onClick={() => setmainImage(image)}
                  key={index}
                  src={image}
                  alt="Room Image"
                  className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${
                    mainImage === image && "outline-3 outline-orange-500"
                  } `}
                />
              ))}
          </div>
        </div>

        {/* ROOM HIGHLIGHTS */}
        <div className=" flex flex-col md:flex-row  md:justify-between mt-10">
            <div className="flex flex-col ">
                <h1 className="text-3xl md:text-4xl font-playfair">Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
                {/* Here We'll display Ameneties */}
                <div className="flex flex-wrap items-center mt-3 mb-6 gap-4 ">
                    {room.amenities.map((item , index)=>(
                        <div key={index} className="flex items-center gap-2px-3 py-2 rounded-lg bg-gray-100">
                            {/* This👆🏻 Div is converted into a flexbox. */}
                            <img src={facilityIcons[item]} alt={item} className="w-5 h-5" />
                            <p className="text-xs">{item}</p>

                        </div>
                    ))}
                    {/* Here, This aminities is a array so we are map method */}

                </div>
            </div>
            {/* Room Price */}
            <p className="text-2xl font-medium" >Rs.{room.pricePerNight}/night</p>

        </div>
      </div>
    )
  );
};

export default RoomDetails;

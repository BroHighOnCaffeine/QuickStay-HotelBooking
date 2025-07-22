import React, { useState } from "react";
import Title from "../../Components/Title";
import { assets } from "../../assets/assets";
import {useAppContext} from '../../context/AppContext'
import toast from "react-hot-toast";

const AddRoom = () => {

  // Here we've to get Some Data 
  const {axios ,getToken} = useAppContext()   // Using axios to make the API CAll ,, getToken to get the Autherization Token


  // Creating a State Variable which will Store the Form Data

  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    roomType: "",
    pricePerNight: 0,
    amenities: {
      "free Wifi": false,
      "free Breakfast": false,
      "Room Service": false,
      "Mountain View": false,
      "Pool Access": false
    }
  });

  // Creating One more State Variable
  const [loading, setLoading] = useState(false)

  
  //Creating onSubmitHandler Function
  const onSubmitHandler = async (e) => {
    e.preventDefault()  //Prevents Page from Reloading

    // Check if All Inputs are Filled
    if(!inputs.roomType || !inputs.pricePerNight || !inputs.amenities || !Object.values(images).some(image => image) ){
      toast.error("Please Fill in All the Details")
      return;
    }

    // Now when we've All the Data available
    setLoading(true);
    try {
      const formData = new FormData()
      formData.append('roomType', inputs.roomType)
      formData.append('pricePerNight', inputs.pricePerNight)

      // converting amenties to array & keeping only enabled amenities
      const amenities = Object.keys(input.amenities).filter(key => input.amenities[key])

      // Appending these amenities in the Form Data
      formData.append('amenities', JSON.stringify(amenities))

      // Adding images to Form Data
      Object.keys(images).forEach( (key)=>{
            images[key] && formData.append('images' , images[key])
      } )

     // Now we have the Form data So we Can API
      const {data} = await axios.post('/api/rooms/' , formData, {headers : {Authorization :`Bearer ${await getToken()}`}})

      // Checking the data Response
      if(data.success){
        toast.success(data.message) // We are getting this data from the API Response

        // Now we have to clear the input Fields Once Data is sent in database
        setInputs({
          roomType: '',
          pricePerNight: 0,
          amenities: {
            'free Wifi' : false,
            'free Breakfast' : false,
            'Room Service' : false,
            'Mountain View' : false,
            'Pool Access' : false

          }
        })

        // Now we have to reset the Selected Images
        setImages({1: null,2: null,3: null,4: null, })
      }else{
        toast.error(data.message)
      }


    } catch (error) {
      toast.error(error.message)
    }finally{
      setLoading(false); // In this file in upside we've made setLoading = True , here we are making it false
    }

  }

  return (
    // Adding onSubmitHandler Function in the Form
    <form onSubmit={onSubmitHandler}>  
      <Title
        align="left"
        font="outfit"
        title="Add Room"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, minima qui? Non sequi voluptates delectus aliquid temporibus pariatur alias, atque, expedita facilis minima vitae id officia nihil! Iste, atque totam!"
      />
      {/* Upload Area For Images */}
      <p className="text-gray-800 mt-10">Images</p>
      <div className="grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap">
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImage${key}`} key={key}>
            <img
              className="max-h-13 cursor-pointer opacity-80"
              src={
                images[key]
                  ? URL.createObjectURL(images[key])
                  : assets.uploadArea
              }
              alt=""
            />
            <input
              type="file"
              accept="image/*"
              id={`roomImage${key}`}
              hidden
              onChange={(e) =>
                setImages({ ...images, [key]: e.target.files[0] })
              }
            />
            {/* e here means event , and is being passed as a parameter */}
            {/* "..." is Spread Operator */}
          </label>
        ))}
      </div>

      <div className="w-full flex max-sm:flex-col sm:gap-4 mt-4">
        <div className="flex-1 max-w-48">
          <p className="text-gray-800 mt-4">Room Type</p>
          <select
            value={inputs.roomType}
            onChange={(e) => setInputs({ ...inputs, roomType: e.target.value })}
            className="border opacity-70 border-gray-300 mt-1 rounded p-2 w-full">
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>

        <div>
          <p className="mt-4 text-gray-800">
            Price <span className="text-xs"> /night </span>
          </p>
          <input
            type="number"
            placeholder="0"
            className="border border-gray-300 mt-1 rounded p-2 w-24"
            value={inputs.pricePerNight}
            onChange={(e) =>
              setInputs({ ...inputs, pricePerNight: e.target.value })
            }
          />
          {/* "..." is Spread Operator */}
        </div>
   
      </div>

           
           
        <p className='text-gray-800 mt-4' >Amenities</p>
         <div className='flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm'>
          {Object.keys(inputs.amenities).map((amenity, index)=>(
                <div key={index}>
                    <input type="checkbox" id={`amenities${index+1}`} checked={inputs.amenities[amenity]} onChange={()=>setInputs({...inputs, amenities:{...inputs.amenities, [amenity]: !inputs.amenities[amenity]}})}/>
                          <label htmlFor={`amenities${index+1}`}> {amenity}</label>
            
                </div>
        ))}

      </div>

      <button className='bg-primary text-white px-8 py-2 rounded mt-8 cursor-pointer'>
        Add Room

      </button>
    </form>
  );
};

export default AddRoom;

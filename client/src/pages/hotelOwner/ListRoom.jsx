import React, { useEffect } from 'react'
import { useState } from 'react'
import Title from '../../Components/Title'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const ListRoom = () => {

  // Creating a State Variable 
  const [rooms, setRooms] = useState([]) //Removing dummy data from here and adding an empty array

  // Getting axios,getToken and user from context
  const {axios, user, getToken} = useAppContext()

  // Creating a function that will fetch the room. i.e Fetch Rooms of the Hotel Owner
  const fetchRooms = async ()=>{
    try {
      const {data} = await axios.get('/api/rooms/owner', {headers : {Authorization :`Bearer ${await getToken()}`}} ) // After this we need to check the response data
        if (data.success) {
          setRooms(data.rooms)
        }else{
          toast.error(data.message)
        }
        
    } catch (error) {
      toast.error(error.message)
    }

  }

  // Toggle Availability of the Room
  const toggleAvailability = async (roomId) => {
        //Making API Call
        const {data} = await axios.post('/api/rooms/toggle-availability', {roomId}, {headers : {Authorization :`Bearer ${await getToken()}`}} ) 
        // After this API Call we'll get the response data

        try {
              // Checking Response Data
            if (data.success){
              toast.success(data.message)
              fetchRooms()
            }else{
              toast.error(data.message)
        }
        } catch (error) {
          toast.error(error.message)
        }
       

  }



  // We have to use this fetchRooms() whenerver the page gets Reloaded
  useEffect(()=>{ 
    if(user){// Whenever the user is available
      fetchRooms() //  Whenever the page gets reloaded this function will be called .
    }
  }, [user])


  return (
    <div>
      <Title align='left' font='outfit' title='Room Listings' subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolorum debitis, harum recusandae quos molestiae provident quasi  '/>
      <p className='text-gray-500 mt-8'>All Rooms</p>

      <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3'>
            <table className='w-full'>
              <thead className='bg-gray-50'>
                
                  <tr>
                    <th className='py-3 px-4 text-gray-800 font-medium'>Name</th>
                    <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Facility</th>
                    <th className='py-3 px-4 text-gray-800 font-medium '>Price/Night</th>
                    <th className='py-3 px-4 text-gray-800 font-medium text-center'>Action</th>

                  </tr>
                
              </thead>
              {/* Table Body */}
             <tbody className='text-sm'>


            
            {
              rooms.map((item, index)=>(
                <tr key={index}>
                  <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{item.roomType}</td>
                  <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>{item.amenities.join(', ')}</td>
                  <td className='py-3 px-4 text-gray-700 border-t border-gray-300  '>Rs. {item.pricePerNight}</td>
                  <td className='py-3 px-4 text-red-500 border-t border-gray-300 text-sm text-center '>
                    <label className='relative inline-flex items-center cursor-pointer text-gray-900 gap-3'>
                      <input onChange={ ()=> toggleAvailability(item._id) } type="checkbox" className='sr-only peer' checked={item.isAvailable} />
                      <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
                      <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                    </label>
                  </td>
                  
                </tr>
                
              ))
            }

             </tbody>
            </table> 
            
          </div>




    </div>
  )
}

export default ListRoom
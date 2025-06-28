import Hotel from "../models/Hotel";
import {v2 as cloudinary} from "cloudinary";


// API to create a new Room for Hotel
export const createRoom = async (req, res) => {
    try {
        const {roomType , pricePerNight , amenities} = req.body ;
        const hotel = await Hotel.findOne({owner: req.auth.userId})  //We will find the Hotels using this owner property
        // After Finding the Hotel, check the room is available or Not
        if (!hotel) {
            return res.json({success:false , message : "No Hotel Found"});
            
        } 

        // Upload images to cloudinary
        const uploadImages = req.files.map(async (file)=>{
           const response =  await cloudinary.uploader.upload(file.path);
        //    From response we will get a secure URL and we will return this URl

            return response.secure_url;
        })

        // Wait for all upload to complete
   const images = await Promise.all(uploadImages)
    } catch (error) {
        
    }

}


// API to get All Rooms
export const getRooms = async (req, res) => {
    
}



// API to get All Rooms for a Specific Hotel
export const getOwnerRooms = async (req, res) => {
    
}


// API to toggle availability of a Room
export const toggleRoomAvailability = async (req, res) => {
    
}
import Hotel from "../models/Hotel.js";
import {v2 as cloudinary} from "cloudinary";
import Room from "../models/Room.js";


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


         //    Now we can Store the data in the data base using Room Model
                await Room.create({
                    hotel : hotel._id,
                    roomType,
                    pricePerNight: +pricePerNight , //here we added "+" because we will et the price in string format and the plus will convert it in the number
                    amenities: JSON.parse(amenities),
                    images
                })
                res.josn({success:true , message:"Room Created Successfully"})

    } catch (error) {
         res.josn({success:false , message: error.message})
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


// Now we will create a Route using this Controller Function 
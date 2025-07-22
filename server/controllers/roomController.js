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
                res.json({success:true , message:"Room Created Successfully"})

    } catch (error) {
         res.json({success:false , message: error.message})
    }

}


// API to get All Rooms
export const getRooms = async (req, res) => {

    try {
        // Here it will find the room where isAvailable Property is True and slo it will add the hotel in it . Instead of just adding the hotel id it will add the entire hotel data
      const rooms =  await Room.find({isAvailable : true}).populate({
        path:'hotel',
        populate: {
            path:'owner', // this will add the owner Image data in the room data
            select:'image'
        }
      }).sort({createdAt : -1 }) //this sort the room based on the creation date 

      res.json({success: true , rooms}); // It will return rooms so we can display it in the FrontEnd

        
    } catch (error) {

        res.json({success: false , message : error.message});
        
    }
    
}



// API to get All Rooms for a Specific Hotel
export const getOwnerRooms = async (req, res) => {
    try {
        const hotelData = await Hotel.findOne({owner : req.auth.userId}); // Geting Owner id

        // Now getting Rooms of that Hotel
        const rooms = await Room.find({hotel : hotelData._id.toString()}).populate("hotel");

        res.json({success : true , rooms});
        
    } catch (error) {
        res.json({success : false , message: error.message});
    }
    
}


// API to toggle availability of a Room
export const toggleRoomAvailability = async (req, res) => {
    try {
        const {roomId} = req.body;
        const roomData = await Room.findById(roomId) ;

        // Now we have to Toggle the isAvailable Property
        roomData.isAvailable = !roomData.isAvailable; //if roomdata is availabel it will make it flase and if it is already false the it will make it True
        await roomData.save();

        res.json({success:true , message: "Room Availability Updated"});
    } catch (error) {
        res.json({success:false , message: error.message});
        
    }
}
// Now using this controller function we will create different routes


// Now we will create a Route using this Controller Function 
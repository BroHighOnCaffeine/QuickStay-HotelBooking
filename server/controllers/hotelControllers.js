import Hotel from "../models/Hotel.js";
import User from "../models/User.js";

// Creating API Controller Function

export const registerHotel = async (req, res) =>{
    try {

        // here we'll extract the name ,address ,contact and  city  from the Body
        const {name, address, contact, city} = req.body ;
        const owner = req.user._id

        // Check if the User is already Registered
        const hotel = await Hotel.findOne({owner})
        if (hotel) {
            return res.json({success: false , message: "Hotel Already Registered" })
            
        } 

        // If Hotel is not already available then 
         await Hotel.create({name, address, contact, city, owner});

        // Also Updating the role - from user to HotelOwner
        await User.findByIdAndUpdate(owner, {role : "HotelOwner"});

        res.json({success : true , message:"Hotel Registerd Successfully"});

        
    } catch (error) {

        res.json({success : false, message: error.message});
        
    }

}

// Now We Have to Create a Route for this
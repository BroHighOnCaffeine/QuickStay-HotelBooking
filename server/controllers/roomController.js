import Hotel from "../models/Hotel";


// API to create a new Room for Hotel
export const createRoom = async (req, res) => {
    try {
        const {roomType , pricePerNight , amenities} = req.body ;
        const hotel = await Hotel.findOne({owner: req.auth.userId})  //We will find the Hotels using this owner property
        // After Finding the Hotel, check the room is available or Not
        if (!hotel) {
            return res.json({success:false , message : "No Hotel Found"});
            
        } 
        
   
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
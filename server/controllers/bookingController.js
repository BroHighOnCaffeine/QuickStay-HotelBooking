import Booking from "../models/Booking.js"


//  Function to Check Availability of Room 
const checkAvailability = async ({checkInDate ,checkOutDate, room})=>{   // we will get get this parameters data from the API
    try {
        // Using this we will  get the bookings data.
        const bookings = await Booking.find({
            room,
            checkInDate:{$lte: checkOutDate},
            checkOutDate:{$gte: checkInDate},
        });
        const isAvailable = bookings.length === 0; //If it is true than the room is available and if it is false than the room is nott available
        return isAvailable ;
    } catch (error) {
        console.error(error.message);
        
    }

}

//Now we need to create the controller function which will listen to the API Call.


// API to check Avalibility of room

// - This API EndPoint will we using POST method
// Post /api/bookings/check-availability

export const checkAvailabilityAPI = async (req, res)=>{

    try {
        const {room, checkInDate , checkOutDate } = req.body ;
        const isAvailable = await checkAvailability({checkInDate , checkOutDate , room});
        res.json({success : true , isAvailable});
        
    } catch (error) {
        res.json({success : false , message : error.message});
        
    }

}
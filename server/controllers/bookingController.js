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
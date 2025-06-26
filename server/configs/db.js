
import mongoose from "mongoose"

const connectDB = async ()=> {
    try{
        mongoose.connection.on('connected',()=>console.log("Database Connected")); 
        await mongoose.connect(`${process.env.MONGODB_URI}/Quickstay`)
        // Here we have to provide the project's Name inplace of "hotel-booking" .
        //  I've changed here the name from "hotel-booking" to "QuickStay-HotelBooking" 

    }catch(error){
        console.log(error.message);
        

    }

}

export default connectDB ;
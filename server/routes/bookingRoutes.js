import express from "express" ;
import { checkAvailabilityAPI, createBooking, getHotelBookings, getUserBookings } from "../controllers/bookingController.js";
import {protect} from '../middleware/authMiddleware.js';
// Using this express we will create a Router named - BookingRouter

const bookingRouter = express.Router();
// Created One Router 
// Now we've to create diff. API EndPoints in this Router


// Creating  API Endpoints
bookingRouter.post('/check-availability', checkAvailabilityAPI);
//                (           Path      ,  Controller Function)


// TO Book Room / Create a Room Booking
bookingRouter.post('/book', protect  ,   createBooking);
//                (  Path  , middleware , ControllerFunction)


// To get the Booking Details For this Particular User
bookingRouter.get('/user', protect  , getUserBookings  );
//                (  Path  , middleware , ControllerFunction)


// To get the Booking Detials for particular Hotel Owner 
bookingRouter.get('/hotel', protect  , getHotelBookings  );
//                (  Path  , middleware , ControllerFunction)


export default bookingRouter;
// Now adding this router in Server.js File
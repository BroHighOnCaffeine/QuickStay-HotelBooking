import express from "express" ;
import { protect } from "../middleware/authMiddleware.js";
import { registerHotel } from "../controllers/hotelControllers.js";


const hotelRouter = express.Router();

// Now in this router we have to create an endpoint

hotelRouter.post('/' , protect , registerHotel);
// protect is a middleware to protect this route
// registerHotel is a Controller Function

// Now we need to export this route
export default hotelRouter ;

// now placing this in Server.js file



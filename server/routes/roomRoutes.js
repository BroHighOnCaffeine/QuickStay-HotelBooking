import { createRoom, getOwnerRooms, getRooms, toggleRoomAvailability } from "../controllers/roomController.js";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";
import express from "express";

const roomRouter = express.Router();

// First Route
roomRouter.post('/' , upload.array("images" , 4), protect, createRoom ) // FieldName is images and dur to parameter-4 it will upload max. 4 images
// upload and protect is a MiddleWare
// And createRoom is a Controller Function .


// Another Route
roomRouter.get('/' , getRooms ) //getRooms is a Controller Function

// Another Route
roomRouter.get('/owner' , protect ,getOwnerRooms ) // Here we will get RoomData for the particular Owner & "protect" is middleware
//getOwnerRooms is a Controller Function

// Route for toggleAvailablity
roomRouter.post('/toggle-availability' , protect , toggleRoomAvailability ) //In the Body we will send the Current Status

export default roomRouter ;

// Now we have created 4 different EndPoints using 4 different Controller Functions

// Now we need to mount this Route in the Server.js File

// Till Now Features are completed for Adding Rooms and Getting the Rooms Data
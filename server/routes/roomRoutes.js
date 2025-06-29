import { createRoom } from "../controllers/roomController.js";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";
import express from "express";

const roomRouter = express.Router();

roomRouter.post('/' , upload.array("images" , 4), protect, createRoom ) // FieldName is images and dur to parameter-4 it will upload max. 4 images
// upload and protect is a MiddleWare
// And createRoom is a Controller Function .

export default roomRouter ;

// Now we need to mount this Route in the Server.js File
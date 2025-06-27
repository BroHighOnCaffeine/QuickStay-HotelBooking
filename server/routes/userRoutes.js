import express from "express"
import { protect } from "../middleware/authMiddleware.js";
import { getUserData } from "../controllers/userController.js";

// Creating a Router
const userRouter = express.Router();

userRouter.get('/', protect, getUserData)
// Protect is a middleware function

userRouter.post('/store-recent-search', protect, getUserData)


export default userRouter ;

// Now we'll add this server.js file in the Server.js File
//This function will be executed as a MiddleWare before excuting the controller function 
// This function will check if thw user is authenticated or not
// If it's authenticated then it will execute the controller function - [userController]
// Else it will response with message - user not authenticated

// import User from "../models/User.js";


// // Middleware to check if the user is authenticated
// export const protect = async (req, res, next) => {
//   const { userId } = req.auth;
//   if (!userId) {
//     res.json({ success: false, message: "not aunthenticated" });
//   }else{
//     const user = await User.findById(userId);
//     // This userId - we are getting it from the request auth

//     // After this we have to insert "user" in the request
//     req.user =user;
//     next(); 
//   }
// };




//This below code is also working [GPT's Code]

//authMiddleware.js

import { getAuth } from "@clerk/express";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  try {
    const auth = getAuth(req); // <-- Backend equivalent of useAuth()

    if (!auth?.userId) {
      return res.status(401).json({ success: false, message: "Not authenticated" });
    }

    const user = await User.findById(auth.userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    req.auth = auth; // attach Clerk userId, sessionId etc.
    req.user = user; // your own DB user
    next();
  } catch (err) {
    console.error("Auth error:", err);
    res.status(401).json({ success: false, message: "Authentication error" });
  }
};

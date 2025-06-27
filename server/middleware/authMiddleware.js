//This function will be executed as a MiddleWare before excuting the controller function 
// This function will check if thw user is authenticated or not
// If it's authenticated then it will execute the controller function - [userController]
// Else it will response with message - user not authenticated

import User from "../models/User.js";

// Middleware to check if the user is authenticated
export const protect = async (req, res, next) => {
  const { userID } = req.auth;
  if (!userID) {
    res.json({ success: false, message: "not aunthenticated" });
  }else{
    const user = await User.findById(userId);
    // This userId - we are getting it from the request auth

    // After this we have to insert "user" in the request
    req.user =user;
    next(); 
  }
};


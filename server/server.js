import express from "express"
import "dotenv/config"
import cors from "cors"
import connectDB from "./configs/db.js"
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebhooks.js"
import userRouter from "./routes/userRoutes.js"
import hotelRouter from "./routes/hotelRoutes.js"
import connectCloudinary from "./configs/cloudinary.js"

// Calling the ConnectDB() function
connectDB()

connectCloudinary();
// This will connect our Project with Cloudinary

// Creating an app using Express
const app = express()
app.use(cors())  // Enable Cross origin Resource Sharing
// This will help in connect frontend with the backend

// one more middleware - all requests will be passed using json method.
app.use(express.json())

// Adding ClerkMiddle ware
app.use(clerkMiddleware())

// API to Listen Clerk WebHooks
app.use("/api/clerk", clerkWebhooks);


// First API End-Point
//req - request and res - response .
app.get('/', (req ,res) => res.send("API is working."))

// Created the first route
app.use('/api/user', userRouter)
// Now when we'll hit this api endpoint we will get the userData such as - role , SearchedCities

// Creating another EndPoint for hotels - for when new hotel is registered
app.use('/api/hotels', hotelRouter)


// For Port Number
const PORT = process.env.PORT || 3000 ;

app.listen(PORT, ()=>console.log(`Server running on this port ${PORT}`)) ; 
import express from "express"
import "dotenv/config"
import cors from "cors"
import connectDB from "./configs/db.js"
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebhooks.js"


connectDB()

// Creating an app using Express
const app = express()
app.use(cors())  // Enable Cross origin Resource Sharing
// This will help in connect frontend with the backend

app.use(express.json())

// Adding ClerkMiddle ware
app.use(clerkMiddleware())

// API for Clerk WebHooks
// Now using clerkWebhooks function we will create An API Endpoint in Server.js File
app.use("/api/clerk" , clerkWebhooks);


// First API End-Point
//req - request and res - response .
app.get('/', (req ,res) => res.send("API is working."))


// For Port Number
const PORT = process.env.PORT || 3000 ;

app.listen(PORT, ()=>console.log(`Server running on this port ${PORT}`)) ; 
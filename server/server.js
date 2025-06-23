import express from "express"
import "dotenv/config"
import cors from "cors"

// Creating an app using Express
const app = express()
// Enable Cross origin Resource Sharing
app.use(cors()) // this will help in connect frontend with the backend


//req - request and res - response .
app.get('/', (req ,res) => res.send("API is working fine."))


// For Port Number
const PORT = process.env.PORT || 3000 ;

app.listen(PORT, ()=>console.log(`Server running on this port ${PORT}`)) ; 
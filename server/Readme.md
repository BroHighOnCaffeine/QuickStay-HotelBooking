# Backend Server

here we will add some packages to create our BAckend server.

Open server.js
Then open integrated terminal in server folder

Command 1 :  npm init -y


 Now  Installing packages 
Command2 : npm install express dotenv cors mongoose cloudinary multer svix

now we'll add this line in package,json file:  "type" : "module", 
 
# One More Package
We will install one more package - nodemon

In terminal write  - "npm install --save-dev nodemon"

Then in Package.json 
change the 7th line from "start" : "sfbhaefw f  wnefw ef",
 to  "server" : "nodemon server.js",

 So ,whenever we will use serve the it will execute this script nodemon server.js

# Clerk in Backend

We are getting our user data from Clerk.
So in our backend we need to integrate Clerk



# Storing Data in DataBase
To store any data in the database we will store it through models


// Now we can access the clerkWebhook at URl - /api/clerk and we have to provide the url in the Dashboard



# Saving User's account's actions in the database using Clerk and Vercel
From now if new user is created or updated or deleted it will be stored in  the database by using clerck and vercel.

<!-- From now if new user is created or updated or deleted it will be stored in  the database by using clerk and vercel. -->


# Api Created for Users
files - userController.js and userRoutes.js


# Api for Hotel
Create API for hotel to store hotels-data in the database





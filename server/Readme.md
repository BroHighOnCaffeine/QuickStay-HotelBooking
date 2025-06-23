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


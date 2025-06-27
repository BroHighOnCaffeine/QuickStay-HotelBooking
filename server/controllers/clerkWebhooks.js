import React from 'react'
import User from "../models/User.js" ;
import {Webhook} from "svix" ;

// Now we have to create this ClerkWebHook Function from where wee will get the user data.

const clerkWebhooks = async (req, res)=>{ 

    try{
        // Create a SVIX instance with ClerkWebHook Secret
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        // Getting Headers
        const headers = {
            "svix-id":req.headers["svix-id"],
            "svix-timestamp":req.headers["svix-timestamp"],
            "svix-signature":req.headers["svix-signature"]
        };

        // Verifying Headers
        await whook.verify(JSON.stringify(req.body), headers)

        // Getting data from Request BODy
        const {data, type} =  req.body

        // we will store this above created "data" in this "userdata" in a strucute that we have created in the UserData file
        const userData = {
            _id : data.id,
            email : data.email_addresses[0].email_address,
            username : data.first_name + " " + data.last_name,
            image : data.image_url,

        }

        console.log(type, data);
        
        // This Switch Case will execute the code based on different events "types" . we are reciving events types in "types" of this line  // Getting data from Request BODy

        // SWITCH Case for different Events.

        switch (type) {
            case "user.created" : {
              console.log("Check Message - User ID Created ");
              
                await User.create(userData);
                 break;
            }

             case "user.updated" : {
                console.log("Check Message - User ID Updated ");

                await User.findByIdAndUpdate(data.id , userData);
                 break;
             }

             case "user.deleted" : {
                console.log("Check Message - User ID Deleted ");

                await User.findByIdAndDelete(data.id);
                 break;
             }
                
        
            default:
                break;

        }

        res.json({success: true, message: "WebHook Received" }) ;



    } catch(error){
        console.log(error.message);
        res.json( {success: false, message:  error.message});
    }

}

export default clerkWebhooks ;

// Now using this function we will create An API Endpoint in Server.js File
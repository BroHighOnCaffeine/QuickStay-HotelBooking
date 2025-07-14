import mongoose from "mongoose";
 import Hotel from "./Hotel.js";

const roomSchema = new mongoose.Schema(
  {
    hotel: {type : String, ref: "Hotel", required : true },
    roomType: {type : String, required : true },
    pricePerNight: {type : Number, required : true },
    amenities: {type : Array, required : true },
    images: [{type : String}],
    isAvailable: {type : Boolean , default: true},
   
  }, {timestamps: true} );


  const Room = mongoose.model("Room" , roomSchema) ;

  export default Room ;

//   Now using this Room Model we can store the data in the database .
//  To Store that we'll create the Controller Function - roomController.js
import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: String, required: true },
    owner: { type: String, required: true, ref: "User" },
    city: { type: String, required: true },
  }, { timestamps: true } );


  const Hotel = mongoose.model("Hotel" , hotelSchema) ;

  export default Hotel ;

//   Now using this Hotel Model we can store the data in the database .
//  To Store that we'll create the Controller Function 
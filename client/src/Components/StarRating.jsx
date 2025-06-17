import React from "react";
import { assets } from "../assets/assets";

// Now we will mount this star rating component in the Testimonial Component

const StarRating = ({ rating = 4 }) => {
  return (
    <>
      {Array(5)
        .fill("")
        .map((_, index) => (
          <img
            src={rating > index ? assets.starIconFilled : assets.starIconOutlined}
            alt="star-icon"
            className="w-4.5 h-4.5"
          />
        ))}
    </>
  );
};

export default StarRating;

//  This is k\a "Fragment" -  <></>

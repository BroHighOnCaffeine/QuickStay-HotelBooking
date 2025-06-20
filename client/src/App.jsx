import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";

const App = () => {
  // The Navbar will be displayed on all pages but is needed to be hidden from Owner

  // finding pathname of Owner[Admin]
  const isOwnerPath = useLocation().pathname.includes("owner"); //This will return a Boolean
  // for value = True we'll hide Navbar.

  //  Now we've to create the routing for Home Page.

  return (
    <div>
      {/* when ever we will be on Owner Path then this Navbar will be hidden */}
      {!isOwnerPath && <Navbar />}

      <div className="min-h-[70vh]">
        {/* within this div we've to create Route ; first import routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default App;

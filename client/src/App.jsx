import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import Mybooking from "./pages/Mybooking";
import HotelReg from "./Components/HotelReg";
import Layout from "./pages/hotelOwner/Layout";
import Dashboard from "./pages/hotelOwner/Dashboard";
import AddRoom from "./pages/hotelOwner/AddRoom";
import ListRoom from "./pages/hotelOwner/ListRoom";
import {Toster} from 'react-hot-toast'
import { useAppContext } from "./context/AppContext";

const App = () => {
  // The Navbar will be displayed on all pages but is needed to be hidden from Owner

  // finding pathname of Owner[Admin]
  const isOwnerPath = useLocation().pathname.includes("owner"); //This will return a Boolean
  // for value = True we'll hide Navbar.

  // Getting the State from the Context File.
  const {showHotelReg} = useAppContext();

  //  Now we've to create the routing for Home Page.

  return (
    <div>
      <Toster/>
      {/* when ever we will be on Owner Path then this Navbar will be hidden */}
      {!isOwnerPath && <Navbar />}
     {false && <HotelReg/>}  

      <div className="min-h-[70vh]">
        {/* within this div we've to create Route ; first import routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails/>} />
          <Route path="/my-bookings" element={<Mybooking />} />

          {/* Creating new Route for -  */}
          <Route path="/owner" element={<Layout/>} >
          <Route index element={<Dashboard/>} />
          <Route path="add-room" element={<AddRoom/>} />
          <Route path="list-room" element={<ListRoom/>} />

          </Route>

        </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default App;

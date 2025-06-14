import React from 'react'
import Navbar from './Components/Navbar'
import { useLocation } from 'react-router-dom'

const App = () => {
  // The Navbar will be displayed on all pages but is needed to be hidden from Owner 

  // finding pathname of Owner[Admin]
  const isOwnerPath = useLocation().pathname.includes("owner"); //This will return a Boolean
  // for value = True we'll hide Navbar.

 


  return (
    <div>
      {!isOwnerPath && <Navbar/>}  
      {/* when ever we will be on Owner Path then this Navbar will be hidden */}
    </div>
  )
}

export default App
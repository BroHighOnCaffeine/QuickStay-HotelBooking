// In this Context Folder we will store all the Central LOGIC , State Variable and Functions That will be used in Entire Web Application

import axios from "axios" ;
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { useUser, useAuth } from "@clerk/clerk-react";
import {toast} from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
// Now we've BackEnd Url in FrontEnd and we can the Backend url from any file as we've it in AppContext.jsx file


// Now creating createContextHook
const AppContext = createContext(); 

// Creating AppContext Provider Function
export const AppProvider = ({ children }) => {

    // Creating Some variable and functions that will be used in the whole WebApp
    const currency = import.meta.env.VITE_CURRENCY ||  "$"  ;   //  || - OR Operator
    const navigate = useNavigate();
    const {user} = useUser();
    const { getToken } = useAuth();


    // Creating Some State Variables
    
    const [isOwner, setIsOwner] = useState(false)
    const [showHotelReg, setShowHotelReg] = useState(false)

    // State Variable for Recent Searched Cities
    const [searchedCities, setSearchedCities] = useState([])


    // Now we Create Some Functions and using these Functions we'll FETCH the users and check the user roles also
    const fetchUser = async ()=>{
        try {
            const {data} = await axios.get('/api/user'  ,  {headers: {Authorization:`Bearer ${await getToken() }`}} )  //On this API-EndPoint we'll get the user Data
                                         //(Api-Endpoint Path,  Headers)
            
            // Now we'll Check This Data
            if(data.success){
                setIsOwner(data.role === "hotelOwner")  //Checking the Role
                setSearchedCities(data.recentSearchedCities) // We are getting the data Through the API
            }else{
                // Retry fetching User Details after 5 sec.
                setTimeout( ()=>{
                    fetchUser()
                }, 5000 )

            }
            
        } catch (error) {
            // displaying the Toast Notification
            toast.error(error.message)
            
        }
    }


// whenever the user gets changed then only this function will be executed
    useEffect( ()=>{
        if (user){
            fetchUser();       //Function Calling - Above created function is called here
                              // after this func. call we get the details about user ,like setSearchedCities, setIsOwner
        }
    },[user] )  // Here the array is k/a Dependency Array

        // object
        const value ={
            currency , navigate, user, getToken, isOwner, setIsOwner,
            axios,
            showHotelReg, setShowHotelReg,
            searchedCities, setSearchedCities
            // Here we've Provided axios so that we can can access axios through AppContext.jsx File
        }
    return (
            <AppContext.Provider value={value} >
                {children}
            </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);
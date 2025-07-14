// In this Context Folder we will store all the Central LOGIC , State Variable and Functions That will be used in Entire Web Application

import axios from "axios" ;
import { createContext, useContext } from "react";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
// Now we've BackEnd Url in FrontEnd and we can the Backend url from any file as we've it in AppContext.jsx file


// Now creating createContextHook
const AppContext = createContext(); 

// Creating AppContext Provider Function
export const AppProvider = ({ children }) => {
    

        // object
        const value ={
            
        }

    return (
            <AppContext.Provider value={value} >
                {children}
            </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);
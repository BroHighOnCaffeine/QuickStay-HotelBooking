// Here we'll create that will get the user data
// Get /api/user/

export const getUserData = async (req ,res) => {
    try{
        const role = req.user.role ;

        // we can get here the searched cities data
        const recentSearchedCities = req.user.recentSearchedCities;
        res.json({success : true , role , recentSearchedCities})

    }catch(error){
        res.json({success:false , message: error.message})

    }


}

// Now using this Controller Function we have to create a route
    

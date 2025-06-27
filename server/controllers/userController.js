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

// Now using this Controller Function we have to create a route
}


// Creating a new controller Function to get the user's Searched Data 

// Store- User's Recent Searched Cities
export const storeRecentSearchedCities = async (req ,res) => {
    try{

        // Here before this function below we'll add a Middle Ware so it will add the UserData in the Request Body
        const {recentSearchedCities} = req.body;
        const user = await req.user;


        // Checking the search History
        if (user.recentSearchedCities.length < 3) {
            user.recentSearchedCities.push(recentSearchedCities);
            
        } else {
            user.recentSearchedCities.shift();
            user.recentSearchedCities.push(recentSearchedCities);
        }

        // Now we'll add this data in the database
        await user.save() ; // It will save the user

        // NOw we wil send the response
        res.json({success: true, message : "City Added"})

    }catch(error){
        res.json({success: false, message : error.message})


    }

};

// Creating a middleware function to upload the data in the cloudinary

import multer from "multer";

 const  upload = multer({storage: multer.diskStorage({ })})

 export default upload ;
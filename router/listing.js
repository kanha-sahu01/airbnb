const express= require("express");
const router=express.Router();
const ExpressError = require("../utils/ExpressError");
const {listingSchema,reviewSchema}=require("../schema.js");
const listing=require("../models/listing.js")
const review = require("../models/review.js");
const {isLoggedIn, isOwner}=require("../middleware.js");
const listingController=require("../controllers/listingController.js")
const multer=require("multer");
const {storage}=require("../cloudConfig.js")
const upload= multer({storage})





const validateListing=(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    if(error){
    let errMsg=error.details.map((el)=>el.message).join(",");
    throw new ExpressError(400,errMsg);
  }
  next();
}

// GETTING ALL LISTINGS  
//   -------------------------------------------------------------------------------
router
.route("/")
.get(listingController.index)
.post(validateListing,isLoggedIn, upload.single('listing[image]'), listingController.createListing);


// NEW ROUTE----------------------------------------------------------
router.get("/new",isLoggedIn,listingController.renderNewForm)





// GETTING INDIVIDUAL LIST------show-----------------------------------------------------
router.get("/:id", listingController.showListing);

//EDIT AND UPDATE ROUTE
router.get("/:id/edit",isLoggedIn,isOwner,listingController.renderEditForm);


router.put("/:id",validateListing ,isLoggedIn,isOwner,upload.single('listing[image]'),listingController.UpdateListing)


//DELETE ROUTE---------------------------------------------------

router.delete("/:id",isLoggedIn,isOwner,listingController.destroyListing);



module.exports=router;
const express= require("express");
const router=express.Router({mergeParams:true});
const ExpressError = require("../utils/ExpressError");
const {listingSchema,reviewSchema}=require("../schema.js");
const listing=require("../models/listing.js")
const review = require("../models/review.js");
const { isLoggedIn,  isReviewAuthor } = require("../middleware.js");
const reviewController=require("../controllers/reviewController.js")

const validateReview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
    if(error){
        errMsg=error.details.map((el)=el.message).join(",")}
        throw new ExpressError(400,error);
    
}

//POST REQUEST FOR THE REVIEW--------------------
router.post("/",isLoggedIn,reviewController.createReview)

//delete

router.delete("/:reviewId",isLoggedIn,isReviewAuthor,reviewController.destroyReview)

module.exports=router;
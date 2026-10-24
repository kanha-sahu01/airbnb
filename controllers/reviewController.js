const review=require("../models/review")
const listing=require("../models/listing")

//New
module.exports.createReview = async(req,res)=>{
   let list = await listing.findById(req.params.id);
   let review1 = new review(req.body.review) ;
   review1.author=req.user._id;
   list.review.push(review1);

   await list.save();
   await review1.save();
   console.log("review saved");
   res.redirect(`/listing/${req.params.id}`)
};

//delete
module.exports.destroyReview = async(req,res)=>{
    let {id,reviewId}=req.params;
    await review.findByIdAndDelete(reviewId);
    await listing.findByIdAndUpdate(id,{$pull:{review:reviewId}});
    res.redirect(`/listing/${req.params.id}`)
}


const listing=require("./models/listing.js")
const review=require("./models/review.js")
module.exports.isLoggedIn= (req,res,next)=>{
    if(!req.isAuthenticated())
    {  req.session.redirectUrl=req.originalUrl;
        req.flash("error","You need to logged in");
       return res.redirect("/login");

    }
    next();
    
}
module.exports.saveUrlInLocal=(req,res,next)=>{
    if(req.session.redirectUrl)
    {
        res.locals.redirectUrl=req.session.redirectUrl;
        delete req.session.redirectUrl;
    }
    next()
}
module.exports.isOwner =async(req,res,next)=>{
   let{id}=req.params;
    let list=await listing.findById(id);
    if(!list)
   {
     req.flash("error","Listing not found");
     return res.redirect("/listing");
    }
    if(!list.owner || !list.owner.equals(req.user._id))
    {
     req.flash("error","You do not have access");
   return res.redirect(`/listing/${id}`)
   }
   next()


}
module.exports.isReviewAuthor =async(req,res,next)=>{
    let{id,reviewId}=req.params;
    let review1=await review.findById(reviewId);

     if(!review1 || !review1.author || !review1.author.equals(req.user._id))
    {
     req.flash("error","You do not have access");
   return res.redirect(`/listing/${id}`)
   }
   next()
}
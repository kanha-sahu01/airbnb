const listing = require("../models/listing");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");

const geocodingClient = mbxGeocoding({
    accessToken: process.env.MAP_TOKEN
});

//index
module.exports.index=async(req,res)=>{
    let lists= await listing.find({});
   res.render("listings/index.ejs",{lists});
   
}

//New
module.exports.renderNewForm=(req,res)=>{
    res.render("listings/new.ejs");
}

module.exports.createListing=async(req,res)=>{
 let response=await geocodingClient.forwardGeocode({
  query: req.body.listing.location,
  limit: 2
})
  .send()
  

  

    let url=req.file.secure_url;
    let filename=req.file.public_id;
    let list1=listing(req.body.listing);
  list1.owner=req.user._id;
  list1.image={url,filename}
  list1.geometry=response.body.features[0].geometry;
  await list1.save();

  req.flash("success","New listing Added!!")
   res.redirect("/listing");
   
}

//show
module.exports.showListing=async(req,res)=>{
  let {id}=req.params;
    let list= await listing.findById(id).populate({path:"review",populate:{
      path:"author"
    }}).populate("owner");
   
  res.render("listings/show.ejs",{list});
 
}

// edit
module.exports.renderEditForm=async(req,res)=>{
    let {id}=req.params;
    let list1= await listing.findById(id).populate("review");
  
   list1.image.url=list1.image.url.replace("/upload","/upload/h_200,w_250")
    

res.render("listings/edit.ejs",{list1});

};
module.exports.UpdateListing=async(req,res)=>{
     let {id}=req.params;
      let list=req.body.listing;
     if(typeof req.file!="undefined")
   {     let url=req.file.secure_url;
    let filename=req.file.public_id;
  
   list.image={url,filename}}
    await listing.findByIdAndUpdate(id,list);
     req.flash("success","Listing edited successfully!!")
    res.redirect("/listing");
};

// delete
module.exports.destroyListing=async(req,res)=>{
    let {id}=req.params;
  await  listing.findByIdAndDelete(id);
   req.flash("success","Listing deleted successfully!!")
    res.redirect("/listing");
}

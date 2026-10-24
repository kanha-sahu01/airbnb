const mongoose=require("mongoose");
const review =require("./review");
const user=require("./user.js");
const { string } = require("joi");

let Schema= mongoose.Schema;
let listingSchema = Schema({
    description:{
        type:String,
        required:true,
    },
    image:{
       url:String,
       filename:String
    },
    location:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    country:String,
    review:[{
        type:Schema.Types.ObjectId,
        ref:"review",
    }],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    geometry: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
});


 listingSchema.post("findOneAndDelete",async(list)=>{
    if(list){
 await review.deleteMany({_id:{$in:list.review}})
    }
 })
 
let listing=mongoose.model("listing",listingSchema);
module.exports=listing;
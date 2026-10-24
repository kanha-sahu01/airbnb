const mongoose=require("mongoose");
const listing=require("../models/listing.js");
const data=require("./data.js")

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Wonderlust');
}
main().then((res)=>{
    console.log("DB connected succesfully");
});

const insert= async function(){
   await listing.deleteMany({});
  const listingsWithOwner = data.map((e) => {
  return {
    ...e,
    owner: "6aae58d828aef58a800a433c",
  };
});

await listing.insertMany(listingsWithOwner);
};

insert();



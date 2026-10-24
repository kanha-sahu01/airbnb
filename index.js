if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const app = express();

const path = require("path");
const ejsMate = require("ejs-mate");

const listings = require("./router/listing.js");
const passport=require("passport");
const LocalStrategy = require("passport-local")

const wrapAsync = require("./utils/wrapAsync.js");
const reviews=require("./router/review.js")
const session = require("express-session");
const { MongoStore } = require("connect-mongo");

const flash=require("connect-flash");
const ExpressError = require("./utils/ExpressError.js");
const user=require("./models/user.js")
const userRouter=require("./router/user.js")
//-----------------------------------------------------------
const store=  MongoStore.create({ mongoUrl: process.env.MONGO_LINK
    ,touchAfter:24*3600
 })

store.on("error",()=>{
console.log("error on store")
})

const sessionOptions={
    store,
    secret:"mysecret",
    resave:false,
    saveUninitialized:true,
    cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000
    }
}


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")))


// Root -------------------------------------
app.get("/", (req, res) => {
    res.send("This is root directory");
})

app.use(session(sessionOptions))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser())
passport.deserializeUser(user.deserializeUser())

//middleware for flash execution-------------------------------------------
app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user
    next();
})




app.use("/listing", listings);
app.use("/listing/:id/review", reviews)
app.use("/",userRouter)





const mongoUri = process.env.MONGO_LINK || "mongodb://127.0.0.1:27017/wonderhub";

async function main() {
    try {
        await mongoose.connect(mongoUri, {
            serverSelectionTimeoutMS: 10000,
            retryWrites: true
        });

        console.log("DB connected succesfully");
        app.listen(8080, () => {
            console.log("app is listening at port 8080");
        });
    } catch (err) {
        console.error("Unable to connect to MongoDB.");
        console.error("Check your MONGO_LINK in .env or start a local MongoDB instance on port 27017.");
        console.error(err.message);
        process.exitCode = 1;
    }
}

main();

app.all("/{*splat}", (req, res, next) => {
    next(new ExpressError(404, "Page not found"));
})

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "something went wrong" } = err;
    if (err.name === "ValidationError") statusCode = 400;
    res.status(statusCode).render("listings/error.ejs", { message })
})
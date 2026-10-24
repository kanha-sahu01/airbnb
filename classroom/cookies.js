const express = require("express");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const path=require("path");
const flash=require("connect-flash");

const app = express();
const sessiondefine={secret:"mysecretcode",
    saveUninitialized:true,
    resave:false
}
app.use(cookieParser("code"));
app.use(expressSession(sessiondefine));
app.use(flash());
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"));

app.get("/register",(req,res)=>{
    let {name="koi bhi"}=req.query;
    req.session.name=name;
    req.flash("success","user signed succesfully")
    res.redirect("/hello")
})
app.get("/hello",(req,res)=>{
   res.render("flash.ejs",{name:req.session.name,message:req.flash("success")})
})

// app.get("/getcookies", (req, res) => {
// 	res.cookie("color", "red");
// 	res.cookie("brand", "ferrari", { signed: true });

// 	res.send("sended you some cookies");
// 	console.log(req.signedCookies);
// });

// app.get("/color", (req, res) => {
// 	const { color = "ananomous" } = req.cookies;
// 	res.send(`your car color is ${color} `);
// });

app.listen(3001, () => {
	console.log("cookie practice app is listening at port 3001");
});

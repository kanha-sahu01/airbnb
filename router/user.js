const user = require("../models/user");
const express = require("express");
const router = express.Router();
const passport = require("passport");
const { saveUrlInLocal } = require("../middleware");
const userController = require("../controllers/userController");

router.get("/signup",userController.renderSignupForm )

router.post("/signup",userController.signup )


router.get("/login", userController.renderLoginForm)

router.post("/login",saveUrlInLocal, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }),userController.login)


router.get("/logout",userController.logout)
module.exports = router;
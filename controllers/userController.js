 
const user=require("../models/user")
//signup
 module.exports.renderSignupForm=(req, res) => {
  res.render("user/signup.ejs")
};

module.exports.signup= async (req, res) => {
  try {
    let { username, password, email } = req.body;
    const newUser = new user({
      email, username
    })
    let registeredUser = await user.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) {
        next(err);
      }
    })
    req.flash("success", "welcome to wonderlust")
    res.redirect("/listing");
  }
  catch (err) {
    req.flash("error", err.message);

    res.redirect("/signup");
  }
}

//login
module.exports.renderLoginForm = (req, res) => {
  res.render("user/login.ejs")
};

module.exports.login =  async (req, res) => {
  let redirectUrl=res.locals.redirectUrl || "/listing";
  res.redirect(redirectUrl);
}

//logout
module.exports.logout =  (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "you are logged out");
    res.redirect("/listing");
  });
}

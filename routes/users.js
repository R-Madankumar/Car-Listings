const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync");
const {saveRedirectUrl,isLoggedIn} = require("../middleware.js");
const passport = require("passport");
const UserController = require("../controllers/user.js")

router.route("/signup")
    .get(UserController.renderSignupForm)
    .post(wrapAsync(UserController.signup));
// 

router.route("/login")
    .get(UserController.renderLogin)
    .post(saveRedirectUrl,passport.authenticate("local",{failureRedirect:"/login",failureFlash:true}),UserController.login)
// 

router.get("/logout",UserController.logout);

module.exports = router;
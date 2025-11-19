const User = require("../models/users.js");

module.exports.renderSignupForm = (req,res)=>{
    res.render("users/signup");
}

module.exports.signup = async(req,res)=>{
    try{
        let {username,email,password} = req.body;
        const newUser =new User({email,username});
        const registerdUser =await User.register(newUser,password);
        console.log(registerdUser);
        req.login(registerdUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success","Welcome to carlust");
            res.redirect("/listings");
        })
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
}

module.exports.renderLogin = (req,res)=>{
    res.render("users/login");
}

module.exports.login = async(req,res)=>{
    let redirectUrl = res.locals.redirectUrl || "/listings";
    req.flash("success","Welcome back to carlust");
    res.redirect(redirectUrl);
}

module.exports.logout = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","you are logged out");
        res.redirect("/listings");
    })
}
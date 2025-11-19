const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

module.exports.createReview = async(req,res)=>{
    const {id} = req.params; 
    let listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing not found")
        return res.redirect("/listings");
    }

    let review = new Review(req.body.review);
    review.author = req.user._id; //verry imp to display username
    
    console.log(review);

    listing.reviews.push(review);

    await review.save();
    await listing.save();
    req.flash("success","New review created");
    res.redirect(`/listings/${listing._id}`);
}

module.exports.deleteReview = async(req,res)=>{
    let {id,reviewId} = req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    const review = await Review.findByIdAndDelete(reviewId);
    if (!review) {
        req.flash("error","Listing not found")
        return res.redirect("/listings");
    }
    req.flash("success","Review Deleted!");
    res.redirect(`/listings/${id}`);
}




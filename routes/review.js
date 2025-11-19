const express = require("express");
const router = express.Router({mergeParams:true});

const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview,isLoggedIn, isReviewAuthor} = require("../middleware.js");
const ReviewController = require("../controllers/review.js");


router.post("/",isLoggedIn,validateReview,wrapAsync(ReviewController.createReview));

router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(ReviewController.deleteReview));


module.exports = router;
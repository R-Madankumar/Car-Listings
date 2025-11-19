const Listing = require("../models/listing.js");
const GEOAPIFY_API_KEY = process.env.MAP_TOKEN;

module.exports.index = async(req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index",{allListings});
}

module.exports.renderForm = (req,res)=>{
    res.render("listings/new");
}

module.exports.showListing = async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id)
    .populate({
        path:"reviews",
        populate:{
            path:"author",
        }
    }).populate("owner");
    if(!listing){
        req.flash("error","Listing not found");
        res.redirect("/listings"); 
    }
    res.render("listings/show",{listing});
}

module.exports.createListing =async(req,res)=>{
   try {
        const address = req.body.listing.location || "New Delhi, India";
        const urls = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
        address
        )}&apiKey=${GEOAPIFY_API_KEY}`;

        const geoResponse = await fetch(urls);
        const geoData = await geoResponse.json();

        if (!geoData.features || geoData.features.length === 0) {
            console.log(" No results found for:", address);
            return res.send("No coordinates found!");
        }

        const geometry = geoData.features[0].geometry; // { type: 'Point', coordinates: [lon, lat] }

        let url = req.file.path;
        let filename = req.file.filename;
        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
        newListing.image = {url,filename};
        newListing.geometry = geometry;
        console.log(newListing);
        await newListing.save();
        req.flash("success","New Listing Created!");
        res.redirect("/listings");

    } catch (error) {
        console.error("⚠️ Geocoding Error:", error);
        res.send("Error while fetching coordinates.");
    }
}

module.exports.renderEditForm =async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing not found");
        res.redirect("/listings");
    }
    res.render("listings/edit",{listing});
}

module.exports.updateListing = async(req,res)=>{

    const address = req.body.listing.location || "New Delhi, India";
    const urls = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
    address
    )}&apiKey=${GEOAPIFY_API_KEY}`;

    const geoResponse = await fetch(urls);
    const geoData = await geoResponse.json();

    if (!geoData.features || geoData.features.length === 0) {
        console.log(" No results found for:", address);
        return res.send("No coordinates found!");
    }

    const geometry = geoData.features[0].geometry; 

    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(
        id,
        {
            ...req.body.listing,
            geometry: geometry   // 👈 Important step (you missed this)
        },
        { new: true }
    );
    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url,filename};
        await listing.save();
    }
    
    req.flash("success","new Listing created")
    res.redirect(`/listings/${id}`);
}

module.exports.deleteListing = async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findByIdAndDelete(id);
    console.log(listing);
    req.flash("success","Listing deleted")
    res.redirect("/listings");
}
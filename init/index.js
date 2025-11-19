require("dotenv").config();
const mongoose = require("mongoose");
const initData = require("./data.js")
const Listing = require("../models/listing.js");

const dbUrl = process.env.ATLAS_URL;

main().then(()=>{
    console.log("connected to db");
}).catch(e=>{
    console.log(e);
})

async function main() {
    await mongoose.connect(dbUrl);
}

const initDB = async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj,owner:"691d7c5997165a63c5114ab3"}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized")
}

initDB();
const mongoose = require('mongoose')
require('dotenv').config();


const mongoURI = process.env.MONGO_URI

//for conecting to database
const connnectToMongo = async () => {
    await mongoose.connect(mongoURI);
    console.log("Hey I'm Connected to MongoDB");
}


module.exports = connnectToMongo
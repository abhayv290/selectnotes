const mongoose = require('mongoose')

const mongoURI = "mongodb://localhost:27017/SelectNotes?directConnection=true"

//for conecting to database
const connnectToMongo = async () => {
    await mongoose.connect(mongoURI);
    console.log("Hey I'm Connected to MongoDB");
}


module.exports = connnectToMongo
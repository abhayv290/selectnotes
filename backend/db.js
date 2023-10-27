const mongoose = require('mongoose')
require('dotenv').config();
<<<<<<< HEAD

const mongoURI = process.env.MONGO_URI


=======


const mongoURI = process.env.MONGO_URI
>>>>>>> 514bcf70408eb8b31cb7b7614eae35f8738e558f

//for conecting to database
const connnectToMongo = async () => {
    await mongoose.connect(mongoURI);
    console.log("Hey I'm Connected to MongoDB");
}


module.exports = connnectToMongo
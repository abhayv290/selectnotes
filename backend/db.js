const mongoose = require('mongoose')

const mongoURI=   "mongodb://localhost:27017/SelectNotes?directConnection=true"

//for conecting to database
const connnectToMongo = async() => {
   await mongoose.connect(mongoURI);
    await console.log('hey im connected');
}


module.exports= connnectToMongo
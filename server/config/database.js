const mongoose = require("mongoose")

async function connectionToMongoDB(url){
    try{
        await mongoose.connect(url)
        console.log("Connect to MongoDB")
    }catch(err){
        console.log(`Connection error: ${err.message}`)
    }
}

module.exports = connectionToMongoDB
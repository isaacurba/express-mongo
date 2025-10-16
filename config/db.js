const mongoose = require("mongoose")

const connectedDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_ATLAS_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        });
        console.log("MongoDB connected..........")
    }catch(error){
        console.error("MongoDB connection failed:", error.message)
        process.exit(1)
    }
}

module.exports = connectedDB;
const mongoose = require("mongoose")
require("dotenv").config()

const studentSchema = new mongoose.Schema({
    name:{
        type: String,  
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    email:{ 
        type: String,
        required: true,
        unique: true
    }
},{timestamps: true})

// Create a model for the student schema
const Student = mongoose.model("Student", studentSchema)

module.exports = Student;
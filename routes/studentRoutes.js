const express = require("express");
const router = express.Router();
const Student = require("../models/student")

// Fetch all students CREATE
router.get("/", async (req, res) =>{
    try{
        const students = await Student.find();
        res.json(students);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
});

// create a new student READ
router.post("/", async (req, res) =>{
    const { name, age, email }= req.body;
     try{
        const student = new Student({name, age, email})
        const saved = await student.save();
        res.status(201).json(saved)
     }catch(error){
         res.status(400).json({ message: error.message });
     }
});

// update student by id UPDATE
router.put("/:id", async (req, res) =>{
    try{
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(student);  
    }catch(error){
        res.status(400).json({ message: error.message });
    } 
});

// Delete student by id DELETE
router.delete("/:id", async (req, res) =>{
    try{
        await Student.findByIdAndDelete(
            req.params.id
        );
        res.json({ message: "Student deleted successfully" });
    }catch(error){
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;
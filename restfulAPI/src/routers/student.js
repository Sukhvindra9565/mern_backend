const express = require("express");
const router = new express.Router();
const Student = require("../models/students");


router.get("/thapa",(req,res)=>{
    res.send("hello guys");
});
// create a new student
// router.post("/students",(req,res)=>{
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((err)=>{
//         res.status(404).send(err);
//     })
// })

// Create student
router.post("/students", async (req, res) => {
    try {
      const user = new Student(req.body);
      const result = await user.save();
      res.status(201).send(result);
    } catch (err) {
      res.status(404).send(err);
    }
  });
  
  // Get whole students data
  router.get("/students", async (req, res) => {
    try {
      const result = await Student.find();
      res.status(201).send(result);
    } catch (err) {
      res.status(404).send(err);
    }
  });
  
  // Get individual student data using id
  router.get("/students/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const studentData = await Student.findById(_id);
      console.log(studentData);
  
      if (!studentData) {
        return res.status(404).send();
      } else {
        res.send(studentData);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  // Update the students by it id
  router.patch("/students/:id", async (req,res)=>{
      try{
          const _id = req.params.id;
          const updatestudent = await Student.findByIdAndUpdate(_id,req.body,{new:true});
          res.status(201).send(updatestudent);
          console.log(updatestudent);
      }catch(e){
          res.status(404).send(e);
      }
  })
  // Delete by students by it id
   router.delete("/students/:id", async (req,res)=>{
      try{
          const _id = req.params.id;
          const updatestudent = await Student.findByIdAndDelete(_id);
          if(!req.params.id){
              return res.status(400).send();
          }
          else{
              res.status(201).send(updatestudent);
              console.log(updatestudent);
          }
      }catch(e){
          res.status(500).send(e);
      }
  })
module.exports = router;
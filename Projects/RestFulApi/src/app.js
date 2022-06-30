const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const MensRanking = require("../src/models/mens");
require("./db/conn");

app.use(express.json());
app.post("/mens", async (req,res)=>{
    try{
        const addingMensRecord = new MensRanking(req.body);
        const result = await addingMensRecord.save();
        console.log(result);
        res.status(201).send(result);
    }catch(err){
        res.status(400).send(err);
    }
})
app.get("/mens", async (req,res)=>{
    try{
        const result = await MensRanking.find({});
        console.log(result);
        res.status(201).send(result);
    }catch(err){
        res.status(400).send(err);
    }
})
app.get("/mens/:id", async (req,res)=>{
    try{
        const _id = req.params.id;
        const result = await MensRanking.findById(_id);
        console.log(result);
        res.status(201).send(result);
    }catch(err){
        res.status(400).send(err);
    }
})

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})
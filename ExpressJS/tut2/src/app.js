const express = require('express');

const app= express();

app.get("/",(req,res)=>{
    res.send("hello world");

})
app.get("/about",(req,res)=>{
    res.send("hello from about page");
});

app.listen(8000,()=>{
    console.log("Listen in port 8000");
});
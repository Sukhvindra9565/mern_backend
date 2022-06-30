const express = require('express');
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Home Page<\h1>");
});
app.get("/about",(req,res)=>{
    res.status(200).send("Welcome to About Page");
});
app.get("/contact",(req,res)=>{
    res.send("Welcome to contact Page");
});
app.get("/temp",(req,res)=>{
    res.send("Welcome to Temperature Page");
});

app.listen(port,()=>{
    console.log(`Listening in port number ${port}`);
});
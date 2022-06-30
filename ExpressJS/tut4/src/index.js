const path = require('path');
const express = require('express');
const app = express();
const port = 8000;

// absolute path

// console.log(__dirname);
// console.log(path.join(__dirname,"../public"));

const staticPath = path.join(__dirname,"../public");
// builtin middleware
app.use(express.static(staticPath));
// app.get("/",(req,res)=>{
//     res.send("<h1>Welcome to Home Page<\h1>");
// });
// app.get("/about",(req,res)=>{
//     res.status(200).send("Welcome to About Page");
// });
// app.get("/contact",(req,res)=>{
//     res.send("Welcome to contact Page");
// });
// app.get("/temp",(req,res)=>{
//     res.send("Welcome to Temperature Page");
// });

app.listen(port,()=>{
    console.log(`Listening in port number ${port}`);
});
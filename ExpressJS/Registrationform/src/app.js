require('./db/conn');
const Register = require('./models/registers');
const hbs = require("hbs");
const  express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialPath = path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(staticPath));
app.use("/src",express.static(__dirname));
app.set("views",templatePath);
app.set("view engine","hbs");
hbs.registerPartials(partialPath);



app.get("/",(req,res)=>{
    res.render("index.hbs");
});
app.get("/register",(req,res)=>{
    res.render("register.hbs");
});

// Create a new user in our database
app.post("/register",async (req,res)=>{
    try{
        const password = req.body.password;
        const cpassword = req.body.cpassword;

        if(password === cpassword){
            const registerEmployee = new Register({
                username:req.body.username,
                password:req.body.password,
                cpassword:req.body.cpassword,
                phone:req.body.phone,
                email:req.body.email
            })
            const registered = await registerEmployee.save();
            res.status(201).render("index");
        }else{
            res.send("Password are not matching");
        }
    }catch(err){
        res.status(400).send(err);
    }
})
app.get("/login",(req,res)=>{
    res.render("login.hbs");
});
app.get("/contact",(req,res)=>{
    res.render("contact.hbs");
});
app.get("/contact/*",(req,res)=>{
    res.render("404.hbs",{
        errorcomment:"OOPs Contact Page couldn't found Please click here to go back",
    });
});
app.get("/signup/*",(req,res)=>{
    res.render("404.hbs",{
        errorcomment:"OOPs Contact Page couldn't found",
    });
});

app.get("*",(req,res)=>{
    res.render('404',{
        errorcomment:"OOPs page couldn't found",
    });
});;


app.listen(port,()=>{
    console.log(`Server is running at port no ${port}`);
})
// http://localhost:3000

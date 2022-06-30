const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    username : {
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true
    },
    cpassword : {
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})

// Now we need to create a collections

const Register = new mongoose.model("Register",employeeSchema);

module.exports = Register;
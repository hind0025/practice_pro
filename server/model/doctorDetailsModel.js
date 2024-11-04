const mongoose = require("mongoose");
const DoctorSchema = mongoose.Schema({
    name:{
        type : String , 
        require : [ true , "please add your name"],
    },
    speciality:{
        type : String , 
        require : [ true , "please add your spl"],
    },
    
    experience:{
        type : Number , 
        require : [ true , "please add your exp"],
    },
    
    
    phoneNumber:{
        type : Number , 
        require : [ true , "please add your phone number"],
    },
    address:{
        type : String,
        require : [ true , "please add your add"],
    },
    email:{
        type:String,
        require:[true,"please add your email"],
    }
},
{
    timestamps : true ,
});
module.exports = mongoose.model("Doctor" , DoctorSchema);
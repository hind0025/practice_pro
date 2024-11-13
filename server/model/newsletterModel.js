const mongoose = require("mongoose");
const newsletterSchema = mongoose.Schema({
    title:{
        type : String , 
        require : [ true , "please add your name"],
    },
    author:{
        type : String , 
        require : [ true , "please add your author name"],
    },
    date:{
        type : String , 
        require : [ true , "please add your date"],
    },
    ImageUrl:{
        type : String , 
        require : [ true , "please add your url"],
    },
    description:{
        type : String , 
        require : [ true , "please add your description"],
    }
    
},
{
    timestamps : true ,
});
module.exports = mongoose.model("newsletter" , newsletterSchema);
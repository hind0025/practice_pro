const mongoose=requires("mongoose");

const connectDb=async()=>
{
    try
    {
        const connect=await mongoose.connect(process.env.CONENCTION_STRING);
        console.log("database connected: ", connect.connection.host,connect.connection.name);

    }
    catch{
        console.log(err);
        process.exit(1);

    }
}
module.exports=connectDb;

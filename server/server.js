const express = require('express');
const connectDb=require("./config/dbConnection");
const errorHandler=require("./middleware/errorHandler");
const cors=require("cors");
connectDb();
constapp=express();
const port=process.env.PORT||5000;
app.use(express.json());
app.get('/', (req, res) => {
  res.send("working");
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


app.use(cors());
 app.use(errorHandler);
app.listen(port,()=>{
  console.log(`server running at http://localhost:${port}/`)
})
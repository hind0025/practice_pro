const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const cors= require("cors");
const hbs = require("hbs");
const path = require("path");
const doctorDetails=require("./routes/doctorDetails");
const multer=require("multer");
//const upload = multer({ dest: 'uploads/' });

const users = [
    { name: "Harman Dhiman", age: 20 },
    { name: "Hindveer", age: 19 },
    { name: "Jaikirat", age: 20 },
];
const app = express();
const port = 3001 || 5000;
const dotenv = require("dotenv");
 dotenv.config();
 connectDb();
app.use(express.json());
app.use(cors());
app.get('/' , (req , res)=>{
    res.send("working");
})
app.set('view engine' , 'hbs');
app.set('views', path.join(__dirname, 'views'));

hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.get("/home",(req , res)=>{
    res.render("home" , {
       username:" Harman Dhiman",
       posts : " time pass"
    })
})
app.get("/alluser", (req, res) => {
    res.render("alluser", {
        users: users, 
    });
});
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads"); // Directory to save files
    },
    filename: (req, file, cb) => {
        const uniqueSuffex = Date.now() + "-" + Math.round(Math.random()*1E9);
        cb(null, file.filename +'-'+uniqueSuffex); 
    },
})
const upload=multer({storage:storage});
//register route
app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log(req.body);
    console.log(req.file);
    return res.redirect("/home");
  });
 

app.use("/api/register" , require("./routes/userRoutes"));
app.use("/api/doctor",doctorDetails);
app.listen(port , ()=>{
    console.log(`server running on http://localhost:${port}`);
})
const express  =require("express");
require('dotenv').config();
const app = express();
const router = require("./router/auth-router")
const connectDb = require("./utils/db")

app.use(express.json());


app.use("/api/auth",router);

app.get("/", (req,res) =>{
     res.status(200).send("Welcome")
});


app.get("/register", (req,res) =>{
    res.status(200).send("welcome to registration page")
});


const PORT =5000

connectDb().then(() =>{
app.listen(PORT, () =>{
    console.log("server is running",PORT)
})
});
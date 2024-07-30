const User = require("../models/user-model");
const bcrypt = require("bcryptjs")
const home = async(req,res) =>{
   try{
       res.status(200).send("Welcome to home")
   }catch(error)
   {
    console.log(error)
   }
}

const register = async (req,res) =>{
    try{
        const {username,email,phone,password} = req.body;

        const userExist = User.findOne({email:email});

        if(!userExist) {
            return res.status(400).json({msg:"email already exists"});
        }
        

        const saltRound =10;
        const hash_password = await bcrypt.hash(password,saltRound);
        const createduser = await User.create({username,email,phone,password})
        res.status(201).json({msg:createduser,token: await createduser.generateToken(),userId: createduser._id.toString(),});
    }catch(error)
    {
       res.status(500).json({msg:"Internal Server Error"})
    }
 }
 
 module.exports = {home,register};
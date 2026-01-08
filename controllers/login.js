import UserDB from "./../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const jwtKey = process.env.JWT_SECRET_KEY;

const LoginUser =async (req,res) =>{
    const { email , password} = req.body;
    console.log(email,password);
    try{
    const user = await UserDB.findOne({email});
    if(!user){
        return res.status(400).json({message:"User not found"});
    }

    const checkPass = await bcrypt.compare(password,user.password);
    if(!checkPass){
        return res.status(401).json({message:"Check your email and password again"});
    }

    const payload={
        user:{
            email:user.email,
        }
    }

    const jwtToken = jwt.sign(payload,jwtKwey,{expiresIn:"2h"});
    res.json({message:"logged in successfully", jwtToken});
}
catch(error){
    console.log(error);
}

}

export default LoginUser;
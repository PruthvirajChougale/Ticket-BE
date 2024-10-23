import UserDB from "./../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const jwtKey = process.env.JWT_SECRET_KEY;

const SignupUser = async(req,res) =>{
    const {username, email ,password}=req.body;
    try{
        const ExistingUser = await UserDB.findOne({email});
        if(ExistingUser){
            return res.status(500).json({message:"User already exists"});
        }
        const salt = await bcrypt.genSalt(12);
        const hashedPass = await bcrypt.hash(password, salt);

        const user = new UserDB({
            username,
            email,
            password:hashedPass,
        });
        await user.save();

        const payload = {
            user:{
                email:user.email,
            }
        }

        const jwtToken = jwt.sign(payload,jwtKey,{expiresIn:"2h"});
        res.json({ message: 'Login successful', jwtToken });
    }
    catch(error){
        console.log(error);
    }
}

export default SignupUser;
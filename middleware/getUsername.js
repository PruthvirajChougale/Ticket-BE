import UserDB from "./../models/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const GetUsername = async (req,res,next) => {
    console.log("hi");
    const token = req.headers.authorization.split(" ")[1];
    try{
        const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = await UserDB.findOne({email:decodedData.user.email});
        next();
    }
    catch(err){
        res.status(401).json({ message: "Invalid token" });
    }
}

export default GetUsername;
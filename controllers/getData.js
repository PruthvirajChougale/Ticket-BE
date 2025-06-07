import UserDB from "./../models/user.js";
const GetData = async(req,res) => {
    try{
        const user = req.user;
        const data = await UserDB.findOne({email:user.email}).select("ticket");
        res.json(data.ticket);
    }catch(err){
        res.send(err.message);
    }
}
export default GetData;
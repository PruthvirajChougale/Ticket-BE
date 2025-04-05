import UserDB from "./../models/user.js";
const GetData = async(__,res) => {
    try{
        const Users = await UserDB.find();
        res.json(Users);
    }catch(err){
        res.send(err);
    }
}
export default GetData;
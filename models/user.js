import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    ticket:[{
        seat: [{type: String, required:false}],
        start: {type: String, required : false},
        destination: { type: String, required: false },
        category: { type: String, required: false },
        date: {type: String, required: false},
        time: {type: String, required: false}
    }]
})

const UserDB = mongoose.model("User",UserSchema);
export default UserDB;
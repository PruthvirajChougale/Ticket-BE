import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
    name:{type:String,required:true},
    ticketID:[{type: String,required:false}]
})

const TicketDB = mongoose.model("Ticket",TicketSchema);
export default TicketDB;
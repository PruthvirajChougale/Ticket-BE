import UserDB from "./../models/user.js";
import TicketDB from "../models/ticket.js";
import { io } from "../index.js";
export const BookFlight = async (req,res) => {
    try{
        const user =req.user;
        const {seat,start,destination,date,time,category} = req.body;
        user.ticket.push({seat,start,destination,date,time,category});

        await user.save();

        const trip = `${start}-${destination}`;
        let vehicle = await TicketDB.findOne({name:trip});
        if(vehicle){
            vehicle.ticketID.push(...seat);
        }
        else{
            vehicle = new TicketDB({
                name:trip,
                ticketID:[...seat]
            });
        }
        
        await vehicle.save();
        io.emit("bookedSeats",seat);
        res.json({ message: "Ticket booked successfully" });
    }
    catch(err){
        console.log(err.message);
        res.status(400).json({message: "Ticket booking unsuccessful"});
    }
}

export const getTicket = async (req,res) => {
    try{
        const {from,to} = req.query;
        const trip = `${from}-${to}`;
        let bookedTickets = await TicketDB.findOne({name:trip});
        res.json(bookedTickets);
    }
    catch(err){
        res.status(400).json({message: "Booked ticket fetching unsuccessful"});
    }
    
}
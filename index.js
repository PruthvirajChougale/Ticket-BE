import express from "express";
import ConnectToDB from "./config/_mongodb.js";
import Routes from "./routes/route.js";
import bodyParser from "body-parser";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

import dotenv from "dotenv";
dotenv.config();

const PORT =process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);

export const io = new Server (server,{
    cors: {
        origin: ["https://isrogeonli.in"],
        methods: ["GET", "POST"],
        credentials: true,
      },
});

io.on("connection" , (socket) => {
    console.log("user connected",socket.id);

    socket.on("disconnect",()=>{
        console.log("user disconnected",socket.id);
    })
})
app.use(cors());
app.use(bodyParser.json());

app.use(express.json());
ConnectToDB();

app.use("/",Routes);

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
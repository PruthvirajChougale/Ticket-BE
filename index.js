import express from "express";
import ConnectToDB from "./config/_mongodb.js";
import Routes from "./routes/route.js";
import bodyParser from "body-parser";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

const PORT =process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(express.json());
ConnectToDB();

app.use("/",Routes);

app.listen(PORT ,() => {
    console.log(`You are listening to Port ${PORT}.`);
})
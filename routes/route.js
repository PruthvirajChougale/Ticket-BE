import express from "express";
const router = express.Router();
import LoginUser from "../controllers/login.js";
import SignupUser from "../controllers/signup.js";
import GetData from "../controllers/getData.js";
import GetUsername from "../middleware/getUsername.js";
import { BookFlight, getTicket } from "../controllers/bookTicket.js";

router.post("/login",LoginUser);
router.post("/signup",SignupUser);
router.post("/book-flight",GetUsername,BookFlight);
router.get("/get-tickets",getTicket);
router.get("/get-my-tickets",GetUsername,GetData);
export default router;
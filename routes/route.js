import express from "express";
const router = express.Router();
import LoginUser from "../controllers/login.js";
import SignupUser from "../controllers/signup.js";
import GetData from "../controllers/getData.js";

router.post("/login",LoginUser);
router.post("/signup",SignupUser);
router.post("/get-data",GetData);

export default router;
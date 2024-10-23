import express from "express";
const router = express.Router();
import LoginUser from "../controllers/login.js";
import SignupUser from "../controllers/signup.js";

router.post("/login",LoginUser);
router.post("/signup",SignupUser);

export default router;
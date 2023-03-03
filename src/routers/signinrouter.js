import { Router } from "express";
import login from "../controllers/signincontroller.js";

const signin = Router();

signin.post("/signin",login);

export default signin;
import { Router } from "express";
import { validateSchema } from "../middlewares/signupmiddleware.js";
import { userRegisterSchema } from "../schemas/signupschema.js";
import { signUp } from "../controllers/signupcontroller.js";

const signup = Router();

signup.post("/signup",validateSchema(userRegisterSchema) , signUp);

export default signup;
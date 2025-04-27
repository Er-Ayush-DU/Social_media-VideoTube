import { Router } from "express";
import registerUser from "../controllers/user.register.js";


const router = Router();

router.route("/register").post(registerUser)
// router.get("/register" , registerUser)



export default router;


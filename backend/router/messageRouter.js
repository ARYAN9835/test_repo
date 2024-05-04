import express from "express";
import { sendMessage, signup, login} from "../controller/messageController.js";
import { userVerification } from "../middlewares/AuthMiddleware.js";
//import { signup} from "../controller/Signup.js";

const router = express.Router();

router.post("/send", sendMessage);
router.post("/signup", signup);
router.post("/login",login);
router.post('/', userVerification);

export default router;
 
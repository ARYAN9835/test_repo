import { Message } from "../models/messageSchema.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config({ path: "./config/config.env" });

export const userVerification = async (req, res) => {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ status: false });
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) {
        return res.json({ status: false });
      } else {
        try {
          const user = await Message.findById(data.id);
          if (user) {
            return res.json({ status: true, user: user.username });
          } else {
            return res.json({ status: false });
          }
        } catch (error) {
          console.error("Error finding user:", error);
          return res.json({ status: false });
        }
      }
    });
  };
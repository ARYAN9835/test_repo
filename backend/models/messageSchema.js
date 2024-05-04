import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [false, "Name Required!"],
    minLength: [3, "Name must contain at least 3 characters!"],
  },
  email: {
    type: String,
    required: [false, "Email Required!"],
    validate: [validator.isEmail, "Please provide valid email!"],
  }, 
  subject: {
    type: String,
    required: [false, "Subject Required!"],
    minLength: [5, "Subject must contain at least 5 characters!"],
  },
  username :{
    type: String,
    required: [false, "Username is required"]
  },
  password :{
    type: String,
    required: [false, "password required"]
  },
  message: {
    type: String,
    required: [false, "Message Required!"],
    minLength: [10, "Message must contain at least 10 characters!"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

messageSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

export const Message = mongoose.model("Message", messageSchema);

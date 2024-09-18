import express from "express";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

const router = express.Router();

router.post("/signup", async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "User Registration Success!!" });
  } catch (error) {
    next(error);
  }
});

export default router;

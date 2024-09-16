import express from "express";
import User from "../models/user.model.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({ username, email, password });
  try {
    await newUser.save();
    res.status(201).json({ message: "User Registration Success!!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in registration : " + error.message });
  }
});

export default router;

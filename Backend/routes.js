const express = require("express");
const User = require("./model");
const { UNSAFE_ErrorResponseImpl } = require("react-router-dom");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (!req.body.username || !req.body.email || !req.body.age) {
      return res
        .status(400)
        .json({ message: "username, email address and age are required." });
    }

    const newUser = new User(req.body);
    const SavedUser = await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: SavedUser._id,
        username: SavedUser.username,
        email: SavedUser.email,
        age: SavedUser.age,
        dob: SavedUser.dob,
        gender: SavedUser.gender,
      },
    });
  } catch (error) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      res.status(400).json({ message: `${field} already exists` });
    } else {
      console.error("Error creating user: ", error);
      res.status(500).json({ message: "Server error" });
    }
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find().lean();
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(users, null, 2));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

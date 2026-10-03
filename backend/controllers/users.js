import User from "../models/user.model.js";

// GET /users - Retrieve all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-__v");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users", details: err.message });
  }
};

// POST /users/add - Create a new user
export const postUsers = async (req, res) => {
  try {
    const { username } = req.body;

    if (!username || !username.trim()) {
      return res.status(400).json({ error: "Username is required." });
    }

    const newUser = new User({ username: username.trim() });
    const savedUser = await newUser.save();

    res.status(201).json({
      message: "User added!",
      user: savedUser,
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ error: "Username already exists." });
    }
    res.status(400).json({ error: err.message });
  }
};

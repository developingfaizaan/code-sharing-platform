const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/auth");

const { signupValidation, loginValidation } = require("../utils/validation.js");

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const { error } = signupValidation({ name, email, password });

    if (error) {
      res.status(400);
  
      throw new Error(error.details[0].message);
    }

    const existingEmail = await User.findOne({ email });

    if (existingEmail) {
      res.status(400);
      throw new Error("⚠️ Email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const savedUser = await User.create({ name, email, password: hashedPassword });

    const token = jwt.sign({ id: savedUser._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });

    res.status(201).json({
      user: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
      },
      token,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const { error } = loginValidation({ email, password });

    if (error) {
      res.status(400);
      throw new Error(error.details[0].message);
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      res.status(400);
      throw new Error("⚠️ Email not found");
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect) {
      res.status(400);
      throw new Error("❌ Password is wrong");
    }

    const token = jwt.sign({ id: existingUser._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });

    res.status(201).json({
      user: {
        id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
      },
      token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  signup,
};

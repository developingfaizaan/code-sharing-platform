const User = require("../models/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { signupValidation, loginValidation } = require("../utils/validation.js");

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    // Validation
    const { error } = signupValidation({ name, email, password });

    if (error) {
      res.status(400);
      throw new Error(error.details[0].message);
      // return res.status(400).json({ error:  });
    }

    const existingEmail = await User.findOne({ email });

    if (existingEmail) {
      res.status(400);
      throw new Error("⚠️ Email already exists");
    }
    //   return res.status(400).json({ error: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const savedUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { id: savedUser._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Validation
    const { error } = loginValidation({ email, password });

    if (error) {
      res.status(400);
      throw new Error(error.details[0].message);
    }
    //   if (error) return res.status(400).json({ error: error.details[0].message });

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      res.status(400);
      throw new Error("⚠️ Email not found");
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      res.status(400);
      throw new Error("❌ Password is wrong");
    }

    const token = jwt.sign(
      { id: existingUser._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  signup,
};

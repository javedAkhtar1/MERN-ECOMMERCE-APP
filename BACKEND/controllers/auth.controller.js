const User = require("../models/user.model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const maxAge = 10 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_KEY, {
    expiresIn: maxAge,
  });
};

async function postSignup(req, res) {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  } catch (e) {
    console.log(e);
  }
}

async function postLogin(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password!" });
    }
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });

    res.status(200).json({ message: "Login successful", user: user._id });
  } 
  catch (err) {
    console.log("error", err);
  }
}

async function postLogout(req, res) {
  try {
    res.cookie('jwt', '', {
      httpOnly: true,
      expires: new Date(0)
    });
    res.status(200).json({ message: 'Logout successful' });
  } 
  catch (error) {
    res.status(500).json({ message: 'An error occurred while logging out' });
  }
}


module.exports = { postSignup, postLogin, postLogout };

const User = require("../models/user.model.js")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const maxAge = 10 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({id}, process.env.ACCESS_TOKEN_KEY, {
    expiresIn: maxAge
  })
} 

async function postSignup(req, res) {
    const {username, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10)
    try {
        const user = await User.create({username, email, password: hashedPassword});
        const token = createToken(user._id)
        res.cookie("jwt", token, {httpOnly: true, maxAge: maxAge*1000})
        res.status(201).json({user: user._id})
    }
    catch (e) {
        console.log(e)
    }
}

async function postLogin(req, res) {
  const { email, password } = req.body;
  console.log(req.body);

  try {
    const isUser = await User.find({ email });
    console.log(email);

    if (isUser.length !== 0) {
      const checkPassword = await bcrypt.compare(password, isUser[0].password);
      console.log(checkPassword);

      if (checkPassword) {
        console.log("correct user with pass");
        res.status(200).json({ message: "Login successful", user: isUser[0] });
      } 
      else {
        console.log("wrong pass");
        res.status(401).json({ message: "Incorrect password" });
      }
    } 
    else {
      console.log("not found");
      res.status(404).json({ message: "User not found" });
    }
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
}


module.exports = {postSignup, postLogin}
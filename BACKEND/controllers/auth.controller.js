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
  const {email, password} = req.body;
  console.log(req.body)
  const isUser = await User.find({email})
  console.log(email)
  // console.log(isUser)
  if (isUser.length !== 0) {
    const checkPassword = await bcrypt.compare(password, isUser[0].password)
    console.log(checkPassword)
    if (checkPassword) {
      console.log("corect user with pass")
    }
    else {
      console.log("wrong pass")
    }
  }
  else console.log("not found")

}

module.exports = {postSignup, postLogin}
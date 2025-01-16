const Feedback = require("../models/feedback.model.js");

async function postFeedback(req, res) {
  const { user, email, rating, message } = req.body;
  try {
    const feedback = await Feedback.create({user, email, rating, message})
    res.status(201).json({message: "feedback received"});
  }
  catch (e) {
    console.log("error in feedback")
    console.log(e)
  }
}

module.exports = {postFeedback}
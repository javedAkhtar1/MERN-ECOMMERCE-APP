const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema(
  {
    user: {
      type: String,
      ref: "User",
      required: true,
    },
    email: {
      type: String,
      ref: "User",
      required: true,
      unique: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feedback", feedbackSchema);

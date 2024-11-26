const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
    },
    ratingCount: {
      type: String,
    },
    discount: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    isFeatured: { type: Boolean, default: false },
    isBestSeller: { type: Boolean, default: false },
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        rating: { type: Number, required: true, min: 1, max: 5 },
        comment: { type: String, default: "" },
        date: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);

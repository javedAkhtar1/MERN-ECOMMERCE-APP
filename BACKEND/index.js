require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectToDB = require("./connect.js");
const {postSignup} = require("./controllers/auth.controller.js")
const cors = require("cors");

app.use(cors({ origin: "http://localhost:5173", credentials: true }));


connectToDB();

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/signup", postSignup)

app.listen(PORT, () => {
  console.log("server running at port: ", PORT);
});

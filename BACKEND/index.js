  require("dotenv").config();

  const express = require("express");
  const app = express();
  const PORT = process.env.PORT || 3000;
  const connectToDB = require("./connect.js");
  const {postSignup, postLogin} = require("./controllers/auth.controller.js")
  const cors = require("cors");
  const productRoutes = require("./routes/productsRoutes.js")

  app.use(cors({ origin: "http://localhost:5173", credentials: true }));

  connectToDB();

  // middlewares
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json())

  // routes
  app.use("/api/products", productRoutes);

  app.get("/", (req, res) => {
    res.send("hello");
  });

  app.post("/signup", postSignup)
  app.post("/login", postLogin)

  app.listen(PORT, () => {
    console.log("server running at port: ", PORT);
  });

require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectToDB = require("./connect.js");
const {
  postSignup,
  postLogin,
  postLogout,
} = require("./controllers/auth.controller.js");
const { postFeedback } = require("./controllers/feedback.controller.js");
const cors = require("cors");
const productRoutes = require("./routes/productsRoutes.js");
const {getCheckout, postVerify} = require("./controllers/payment.controller.js")


app.use(cors({ origin: "http://localhost:5173", credentials: true }));

connectToDB();

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/signup", postSignup);
app.post("/login", postLogin);
app.post("/logout", postLogout);
app.post("/feedback", postFeedback);
app.get("/checkout", getCheckout);
app.post("/verify", postVerify)

app.listen(PORT, () => {
  console.log("server running at port: ", PORT);
});

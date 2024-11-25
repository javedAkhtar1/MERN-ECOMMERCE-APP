require("dotenv").config()

const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000;
const connectToDB = require("./connect.js")

connectToDB()

app.get('/', (req, res) => {
    res.send("hello")
})


app.listen(PORT, () => {
    console.log("server running at port: ", PORT)
})


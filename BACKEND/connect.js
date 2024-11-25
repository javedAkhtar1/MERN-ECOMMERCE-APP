const mongoose = require("mongoose");

async function connectToDB() {
    try {
        const connectionInstance  = await mongoose.connect(`${process.env.MONGODB_URI}/penta`)
        console.log("db connected", connectionInstance.connection.host)
        console.log("Database connected successfully!")
    }
    catch (err) {
        console.log(err)
        // console.log("Database connection failed! ")
    }
}

module.exports = connectToDB
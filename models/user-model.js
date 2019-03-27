const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: String,
    imgUrl: {
        type: String,
        default: "http://placekitten.com/g/200/300"
    }
})

module.exports = mongoose.model("User", userSchema)
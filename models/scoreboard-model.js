const mongoose = require("mongoose")

const scoreBoard = new mongoose.Schema({
    first: Number,
    second: Number,
    third: Number
})

module.exports = mongoose.model("Scores", scoreBoard)
require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const path = require("path")

let {SERVER_PORT, PORT, MONGODB_URI} = process.env;

app.use(express.json())

app.use(express.static(path.join(__dirname, "client", "build")))

app.use("/users", require("./routes/user-routes"))

mongoose.connect(MONGODB_URI || "mongodb://localhost:27017/react-game", {useNewUrlParser: true}).then(()=> console.log("Connected to MongoDB"))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`Server listening on port:${PORT}`))
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const PORT = 3889;

app.use(express.json())

app.use("/users", require("./routes/user-routes"))

mongoose.connect("mongodb://localhost:27017/react-game", {useNewUrlParser: true}).then(()=> console.log("Connected to MongoDB"))

app.listen(PORT, () => console.log(`Server listening on port:${PORT}`))
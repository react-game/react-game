const express = require("express")
const userRoute = express.Router()
const Users = require("../models/user-model")

userRoute.route("/")
    .get((req, res) => {
        Users.find((err, users) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(users)
        })
    })

    .post((req, res, next) => {
        let newUser = new Users(req.body)
        newUser.save().then(savedUser => res.status(201).send(savedUser)).catch(err => {
            res.status(500)
            next(err)
        })
    })

userRoute.route("/:_id")
    .put((req,res) => {
        Users.findOneAndUpdate({_id: req.params._id}, req.body, {new: true}, (err, user) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(user)
        } )
    })

module.exports = userRoute
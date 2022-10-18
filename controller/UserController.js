const { request, response } = require("express")
const UserModel = require("../models/UserModel")

exports.addUser = (req,res) => {
    const user = new UserModel({
        fname: request.body.fname,
        lname: request.body.lname,
        email: request.body.email,
        age: request.body.age

    })

    user.
    save().
    then( (data) => {
        response.send(data)    
    }).
    catch((error) => {
        res.send(error)
    })
}
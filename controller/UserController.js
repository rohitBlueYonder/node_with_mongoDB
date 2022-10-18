const { request, response } = require("express")
const UserModel = require("../models/UserModel")

exports.addUser = (request,response) => {
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
        response.send(error)
    })
}
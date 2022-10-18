const { request, response } = require("express")
const UserModel = require("../models/UserModel")

exports.addUser = (req,res) => {
    const user = new UserModel({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        age: req.body.age

    })

    user.
    save().
    then( (data) => {
        res.send(data)    
    }).
    catch((error) => {
        res.send(error)
    })
}


// getAll
exports.getUsers = (req,res) => {
    const users = UserModel.find()
    users.
        then( (data) => {
            res.send(data)
        }).
        catch( (error) => {
            res.send(error)
        })
}

// getByName (q1)
exports.getByName = (req,res) => {
    const users = UserModel.find({fname:req.params.fname})
    users.
        then( (data) => {
            res.send(data)
        }).
        catch( (error) => {
            res.send(error)
        })
}

// show custom fields (q2)
exports.getNameAndAge = (req,res) => {
    const users = UserModel.find({},{fname:1, age:1})
    users.
        then( (data) => {
            res.status(200).json({
                message:"Successfully got name and age",
                data:data,
            })
        }).
        catch( (error) => {
            res.send(error)
        })
}

// udate Age by Name

exports.updateAgeByname=(req,res)=>{
    UserModel.findOne({fname:"Rohit"},(error,user)=>{
        if(error) res.send(error)
        user.age=req.body.age ? req.body.age: user.age
        user.save((error)=>{
            if(error) res.send(error)
            res.status(200).json({
                message:"Successfully updated and got the name and age",
                data:user
            })
        })
    })
}



// Increment Age by name

exports.updateAgeByName2 = (req,res) => {
    UserModel.updateOne({fname:"Kajal"}, { $inc : {age : 25}}, (data) => {
        res.status(200).json({
            message : "successfully updated Kajal's Age",
            data : data
        })
    })
}
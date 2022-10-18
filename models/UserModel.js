const mongoose = require("mongoose")

//Creating a schema on type of data communicated to mongodb

const UserSchema = new mongoose.Schema({
    fname: {
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:false
    }    

})

// var a = 10
// module.exports = a
// -> this model can be reused anywhere using require()
module.exports = mongoose.model("user", UserSchema)
// importing module
const express = require("express")

// importing mongoose
const mongoose = require("mongoose")

// initializing express app
const app = express()

// importing the router
const routes = require("./routes/routes")

// creates the server
app.listen(3000, () => {
    console.log("Server running on port 3000!!")
}
) 


app.use(express.json())

// default routing
// app.use("/welcome", (req,res)=>{ res.send("Welcome to node applicaiton")})

app.use("/user", routes)



// connecting with mongo DB atlas with mongoose Library
const uri = "mongodb+srv://Rohit_Rai:Rohit123456@cluster1.cksibjs.mongodb.net/employeeNodejs?retryWrites=true&w=majority"
mongoose.
connect(uri, {useNewUrlParser:true}).
then(() => {console.log("DataBase Connected")}).
catch((error) => {console.log(error)})
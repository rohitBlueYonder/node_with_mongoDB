// importing module
const express = require("express")

// initializing express app
const app = express()

// creates the server
app.listen(3000, () => {
    console.log("Server running on port 3000!!")
}
) 

app.use("/", (req,res)=>{ res.send("Welcome to node applicaiton")})
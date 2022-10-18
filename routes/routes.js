const express = require("express")

const router = express.Router()

const controller = require("../controller/UserController")


//API paths

router.post("/addUser", controller.addUser)
router.get("/getAllUsers", controller.getUsers)
router.get("/getByName/:fname", controller.getByName)
router.get("/getByNameAndAge", controller.getNameAndAge)
router.put("/updateAgeByName", controller.updateAgeByname)
router.put("/updateIncAgeByName", controller.updateAgeByName2)

module.exports = router
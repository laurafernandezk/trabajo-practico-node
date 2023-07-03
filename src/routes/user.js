const express = require("express");
const {userController}= require("../controllers")

const router = express.Router();

router.get("/:userId", userController.getUser)

router.get("/", userController.getAllUsers)

router.post("/", userController.createUser)

router.put("/:userId", userController.updateUser)

router.delete("/:userId",userController.deleteUser) 


module.exports = router
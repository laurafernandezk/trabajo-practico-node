const express = require("express");
const {libraryController}= require("../controllers");
const {login} = require("../middleware")

const router = express.Router();

router.get("/", libraryController.getAllLibraries);

router.get("/:libraryId", libraryController.getLibrary);

router.post("/", login.jwtValidMDW, libraryController.createLibrary );

router.put("/:libraryId", login.jwtValidMDW, libraryController.updateLibrary );

router.delete("/:libraryId",login.jwtValidMDW, libraryController.deleteLibrary);

module.exports = router


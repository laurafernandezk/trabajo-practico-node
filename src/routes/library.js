const express = require("express");
const {libraryController}= require("../controllers")

const router = express.Router();

router.get("/", libraryController.getAllLibraries);

router.get("/:libraryId", libraryController.getLibrary);

router.post("/", libraryController.createLibrary );

router.put("/:libraryId", libraryController.updateLibrary );

router.delete("/:libraryId",libraryController.deleteLibrary);

module.exports = router


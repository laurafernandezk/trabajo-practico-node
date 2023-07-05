const express = require("express");
const {bookController}= require("../controllers");
const {login} = require("../middleware")

const router = express.Router();

router.get("/", bookController.getAllBooks)

router.get("/:bookId", bookController.getBook)

router.post("/", login.jwtValidMDW, bookController.createBook )

router.put("/:bookId", login.jwtValidMDW, bookController.updateBook)

router.delete("/:bookId",login.jwtValidMDW, bookController.deleteBook) 

module.exports = router
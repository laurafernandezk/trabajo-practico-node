const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const {login }=require("../middleware")

router.post("/", async (req, res)=>{
const {user, pass} = req.body;
if(user=== "admin" && pass ==="admin"){
    const token = jwt.sign({user, role:"admin"}, login.SERVER_SECRET);
    res.json({token})
}else{
    res.status(401).json({error: "invalid user"})
}
});



module.exports = router
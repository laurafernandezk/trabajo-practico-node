const setHeader =(req, res, next)=>{
    console.log(`Header seteado en ${req.url}`)
    res.setHeader("Content-Type", "Application/json");
    next()

}

module.exports= setHeader;
const express = require("express")

const app = express();

const libraryRouter = require("./routes/library")

const PORT= 5000;

app.use(express.json())

app.use("/library", libraryRouter);

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})   

;  


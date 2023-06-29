const express = require("express")
const app = express();
const {libraryRouter, bookRouter, userRouter} = require("./routes")
const {setHeader} = require("./middleware")

const PORT= 5000;

app.use(express.json())
app.use(setHeader)
app.use("/library", libraryRouter);
app.use("/book", bookRouter);
app.use("/user", userRouter);

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
});


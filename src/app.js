const express = require("express");
const { libraryRouter, bookRouter, userRouter, loginRouter } = require("./routes");
const { setHeader } = require("./middleware");
const { initializeDB } = require("./config/db-config")

const app = express();
const PORT = 3060;

app.use(express.json());
app.use(setHeader);
app.use("/library", libraryRouter);
app.use("/book", bookRouter);
app.use("/user", userRouter);
app.use("/login", loginRouter)

app.listen(PORT, async () => {
  await initializeDB()
  console.log(`Listening on port ${PORT}`);
});

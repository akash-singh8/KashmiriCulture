const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const userRouter = require("./routes/users.js");
const actionRouter = require("./routes/actions.js")

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/", userRouter);
app.use("/", actionRouter);

mongoose.connect(process.env.MONGODB_URI);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
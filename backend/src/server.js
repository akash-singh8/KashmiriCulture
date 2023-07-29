const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const userRouter = require("./routes/users.js");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/", userRouter);

mongoose.connect(process.env.MONGODB_URI);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
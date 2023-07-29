const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
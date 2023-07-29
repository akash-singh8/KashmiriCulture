const express = require("express");
const mongoose = require("mongoose");
const authenticate = require("../middlewares/auth.js");
const Cultures = require("../models/Cultures.js");

const actionRouter = express.Router();

actionRouter.put("/like", authenticate, async (req, res) => {
  const { cultureID } = req.body;

  if (!mongoose.Types.ObjectId.isValid(cultureID)) {
    return res.status(400).send({ message: "Invalid cultureID" });
  }

  try {
    const result = await Cultures.updateOne(
      { _id: cultureID },
      { $inc: { likes: 1 } }
    );

    if (result.matchedCount > 0) {
      res.sendStatus(200);
    } else {
      res.status(404).send({ message: "Culture not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Internal server error" });
  }
});

actionRouter.put("/comment", authenticate, async (req, res) => {
  const { cultureID, username, comment } = req.body;

  if (!mongoose.Types.ObjectId.isValid(cultureID)) {
    return res.status(400).send({ message: "Invalid cultureID" });
  }

  try {
    const result = await Cultures.updateOne(
      { _id: cultureID },
      {
        $push: {
          comments: {
            username: username,
            comment: comment,
          },
        },
      }
    );

    if (result.matchedCount > 0) {
      res.sendStatus(200);
    } else {
      res.status(404).send({ message: "Culture not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = actionRouter;

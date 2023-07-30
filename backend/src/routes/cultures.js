const express = require("express");
const mongoose = require("mongoose");
const CultureHeads = require("../models/CultureHead");
const Visitors = require("../models/Visitors");

const cultureRouter = express.Router();

cultureRouter.get("/cultures", async (req, res) => {
  try {
    const visitors = await Visitors.findOneAndUpdate(
      { _id: "64c576bf90e7d01f5ccb09c3" },
      { $inc: { visitorCount: 1 } },
      { new: true }
    );

    const cultures = await CultureHeads.find();

    res.json({ visitorCount: visitors.visitorCount, cultureHeads: cultures });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch culture heads." });
  }
});

cultureRouter.get("/cultures/:cultureID", async (req, res) => {
  const { cultureID } = req.params;

  if (!mongoose.Types.ObjectId.isValid(cultureID)) {
    return res.status(400).send({ message: "Invalid cultureID" });
  }

  try {
    const cultures = await CultureHeads.findOne({ _id: cultureID }).populate(
      "cultures"
    );

    if (!cultures) {
      return res.status(404).json({ message: "Culture not found" });
    }

    res.json({ cultures: cultures });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch cultures" });
  }
});

module.exports = cultureRouter;

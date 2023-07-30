const express = require("express");
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

module.exports = cultureRouter;

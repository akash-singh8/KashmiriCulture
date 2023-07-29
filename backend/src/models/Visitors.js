const mongoose = require("mongoose");

const VisitorsSchema = new mongoose.Schema({
  visitorCount: { type: Number, default: 0 },
});

const Visitors = mongoose.model("visitors", VisitorsSchema);

module.exports = Visitors;

const mongoose = require("mongoose");

const CultureHeadSchema = new mongoose.Schema({
  imageLink: { type: String, required: true },
  cultureName: { type: String, required: true },
  cultures: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "cultures" }],
    required: true,
  },
});

const CultureHeads = mongoose.model("cultureHeads", CultureHeadSchema);

module.exports = CultureHeads;

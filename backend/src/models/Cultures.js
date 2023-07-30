const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({
  imageLink: { type: String, required: true },
  description: { type: String, required: true },
});

const CommentSchema = new mongoose.Schema({
  username: { type: String, required: true },
  comment: { type: String, required: true },
});

const CultureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: [ContentSchema], required: true },
  likes: { type: Number, default: 0 },
  comments: { type: [CommentSchema] },
});

const Cultures = mongoose.model("cultures", CultureSchema);

module.exports = Cultures;

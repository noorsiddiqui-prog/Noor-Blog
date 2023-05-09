const mongoose = require("mongoose");
// const { Schema } = mongoose;

// const AuthUser = new Schema({
const PostSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  postType: {
    type: String,
    require: true,
  },
  comment: {
    type: [String],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  // time: { type: time,},
  image: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("PostSchema", PostSchema);

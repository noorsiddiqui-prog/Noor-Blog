const mongoose = require("mongoose");
// const { Schema } = mongoose;

// const AuthUser = new Schema({
const AuthUser = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Auth", AuthUser);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userModel = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
  },
  password: {
    type: String,
  },
  age: {
    type: Number,
  },
  city: {
    type: String,
  },
  is_married: {
    type: Boolean,
  },
});

const postModel = new Schema({
  title: String,
  body: String,
  device: String,
  no_of_comments: Number,
  posted_by: String,
});

const user = mongoose.model("users", userModel);
const post = mongoose.model("posts", postModel);

module.exports = { user, post };

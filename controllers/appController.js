const model = require("../models/model");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { query } = require("express");

app.use(bodyParser.urlencoded({ extended: false }));

const register = async (req, res, next) => {
  try {
    const users = await model.user.find({ email: req.body.email });
    if (users) {
      res.send({ message: "User already exist, please login" });
    } else {
      await model.user.insertMany(req.body);
      res.send({ message: "User added successfully" });
    }
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res, next) => {
  try {
    const users = await model.user.find();
    users.map((user) => {
      if (
        req.body.email === user.email &&
        req.body.password === user.password
      ) {
        res.sendStatus(200);
        return;
      }
    });
    res.sendStatus(401);
  } catch (error) {
    console.log(error);
  }
};

const addPost = async (req, res, next) => {
  try {
    await model.post.insertMany(req.body);
    res.send({ message: "Post has been added successfully" });
  } catch (error) {
    console.log(error);
  }
};

const posts = async (req, res, next) => {
  try {
    const query = req.query;
    if (query.min && query.max) {
      var data = await model.post.find({ posted_by: query.email });
      data = data.filter((post) => {
        return (
          post.no_of_comments >= query.min && post.no_of_comments <= query.max
        );
      });
      res.send(data);
    } else {
      data = await model.post.find({ posted_by: query.email });
      res.send(data);
    }
  } catch (error) {
    console.log(error);
  }
};

const topPost = async (req, res, next) => {
  try {
    const query = req.query;
    var data = await model.post.find({ posted_by: query.email });
    var maxPost = {};
    maxComment = -Infinity;
    for (let i = 0; i < data.length; i++) {
      if (data[i].no_of_comments > maxComment) {
        maxComment = data[i].no_of_comments;
        maxPost = data[i];
      }
    }
    res.send(maxPost);
  } catch (error) {
    console.log(error);
  }
};

const updatePost = async (req, res, next) => {
  try {
    await model.user.insertMany(req.body);
    res.send({ message: "User added successfully" });
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    await model.post.deleteOne({ _id: req.body.id });
    console.log(req.body);
    res.send("Deleted successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  register,
  login,
  addPost,
  posts,
  topPost,
  updatePost,
  deletePost,
};

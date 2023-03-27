const express = require("express");
const router = express();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const appController = require("../controllers/appController");

router.post("/users/register", jsonParser, appController.register);
router.post("/users/login", jsonParser, appController.login);
router.post("/posts/add", jsonParser, appController.addPost);

router.get("/posts", appController.posts);
router.get("/posts/top", appController.topPost);

router.patch("/posts/update", appController.updatePost);

router.delete("/posts/delete", appController.deletePost);

module.exports = router;

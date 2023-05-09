const express = require("express");
const { CreatePost, getPost } = require("../../Controllers/post/Post.js");
const multer = require("multer");

const postRouter = express.Router();
const upload = multer({ dest: "uploads/" });

// post routing
postRouter.post("/add", upload.single("image"), CreatePost);
postRouter.get("/get", getPost);
// postRouter.post("/login", login);

module.exports = postRouter;

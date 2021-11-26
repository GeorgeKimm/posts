const express = require("express");
const router = express.Router(); // создание роутера
const {
  getPost,
  deletePost,
  getPosts,
  addPost,
} = require("../controllers/api-post-controller");

// get all posts
router.get("/api/posts", getPosts);
// add new post
router.post("/api/post", addPost);
// get post by id
router.get("/api/post/:id", getPost);
// delete post by id
router.delete("/api/post/:id", deletePost);

module.exports = router;

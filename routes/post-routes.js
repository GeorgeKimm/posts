const express = require("express");
const router = express.Router(); // создание роутера
const {
  getPost,
  deletePost,
  getPosts,
  addPost,
  getAddPost,
} = require("../controllers/post-controller");

router.get("/posts/:id", getPost);
router.delete("/posts/:id", deletePost);
router.get("/posts", getPosts);
// для отправки данных с клиента на сервер используется метод post
router.post("/add-post", addPost);
router.get("/add-post", getAddPost);
router.get("/about-us", (req, res) => {
  res.redirect("/contacts");
});

module.exports = router;

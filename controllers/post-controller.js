const Post = require("../models/post");
const createPath = require("../helpers/create-path");

const handleError = (res, err) => {
  console.log(err);
  res.render(createPath("error"));
};

const getPost = (req, res) => {
  // свойство params хранит различное значение из url
  Post.findById(req.params.id)
    .then((post) => {
      console.log(post);
      res.render(createPath("post"), { post });
    })
    .catch((err) => handleError(res, err));
};

const deletePost = (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then((result) => {
      console.log(result);
      res.sendStatus(200);
    })
    .catch((err) => handleError(res, err));
};

const getPosts = (req, res) => {
  Post.find()
    // сортировка по убыванию
    .sort({ createdAt: -1 })
    .then((posts) => {
      console.log(posts);
      res.render(createPath("posts"), { posts });
    })
    .catch((err) => handleError(res, err));
};

const addPost = (req, res) => {
  const { title, author, text } = req.body;
  const post = new Post({ title, author, text });
  // метод save тоже является ассинхронным
  post
    .save()
    .then((result) => {
      console.log(result);
      res.redirect("/posts");
    })
    .catch((err) => handleError(res, err));
};

const getAddPost = (req, res) => {
  res.render(createPath("add-post"));
};

module.exports = {
  getPost,
  deletePost,
  getPosts,
  addPost,
  getAddPost,
};

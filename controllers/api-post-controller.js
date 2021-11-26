const Post = require("../models/post");

const handleError = (res, err) => {
  res.status(500).send(err.message);
};

const getPost = (req, res) => {
  // свойство params хранит различное значение из url
  Post.findById(req.params.id)
    .then((post) => res.status(200).json(post))
    .catch((err) => handleError(res, err));
};

const deletePost = (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json(req.params.id))
    .catch((err) => handleError(res, err));
};

const getPosts = (req, res) => {
  Post.find()
    // сортировка по убыванию
    .sort({ createdAt: -1 })
    .then((posts) => res.status(200).json(posts))
    .catch((err) => handleError(res, err));
};

const addPost = (req, res) => {
  const { title, author, text } = req.body;
  const post = new Post({ title, author, text });
  // метод save тоже является ассинхронным
  post
    .save()
    .then((post) => res.status(200).json(post))
    .catch((err) => handleError(res, err));
};

module.exports = {
  getPost,
  deletePost,
  getPosts,
  addPost,
};

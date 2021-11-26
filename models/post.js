const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 1 параметр описание свойств, 2 параметр конфигурируемый объект
const postSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // дата которая будет автоматически присваиваться любому посту
);

// теперь схему выше нужно применить к модели
// в модели передаю 2 аргумента: имя модели, схему
// по умолчанию если имя модели Post ищет таблицу posts, если надо уточнить название укажи его 3 аргументом
const Post = mongoose.model("Post", postSchema);

module.exports = Post;

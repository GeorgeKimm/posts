const express = require("express");
const router = express.Router(); // создание роутера
const Contact = require("../models/contact");
const createPath = require("../helpers/create-path");

router.get("/contacts", (req, res) => {
  // метод find помогает найти и вернуть все значения из коллекции
  Contact.find()
    .then((contacts) => {
      console.log(contacts);
      res.render(createPath("contacts"), { contacts });
    })
    .catch((err) => {
      console.log(err);
      res.render(createPath("error"));
    });
});

module.exports = router;

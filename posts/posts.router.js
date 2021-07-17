const express = require("express");
const Post = require("./posts-model");
const app = express.Router();

app.post("/", (req, res) => {
  // implement registration
  let userData = req.body;

  Post.insert(userData)
    .then((user) => {
      res.status(200).json({
        message: "Thanks for posting a new post!",
      });
    })
    .catch((err) => {
      res.status(500).json({ Error: "failed to retrieve database", err });
    });
});
// get all posts

app.get("/", (req, res) => {
  Post.getAllPosts()
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: "Database failed to get posts. " });
    });
});

// get my posts

app.get("/myposts/:id", (req, res) => {
  const { id } = req.params;
  Post.getMyPosts(id)
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: "Database failed to get posts. " });
    });
});

module.exports = app;

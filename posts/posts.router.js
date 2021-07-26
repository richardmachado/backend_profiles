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
} );

// delete a post
app.delete( "/:id", ( req, res ) => {
  const { id } = req.params;
  Post.removePosts( id )
  .then((deleted) => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: "No post with that id exists" });
    }
  })
  .catch((err) => {
    res
      .status(500)
      .json({ errorMessage: "Failed to delete temas. You done mest up" });
  });
})

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

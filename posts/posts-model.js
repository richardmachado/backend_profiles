const database = require("../data/dbConfig");

const add = (post) => {
  return database("posts").insert(post).returning("id");
};

function removePosts(id) {
  return database("posts").where("id", id).del();
}
async function insert(postData) {
  const [id] = await database("posts").insert(postData, "id");
  return database("posts").where({ id }).first();
}

function getAllPosts() {
  return database.select("*").from("posts");
}

async function getMyPosts(user_id) {
  return database("posts")
    .select("id", "title", "body", "user_id")
    .where({ user_id: user_id });
}

function findPostById(id) {
  return database("posts").where({ id });
}

module.exports = {
  add,
  insert,
  removePosts,
  getAllPosts,
  getMyPosts,
  findPostById,
};

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

function getMyPosts() {
  return database.select("*").from("posts").where({ id }).first();
}

module.exports = {
  add,
  insert,
  removePosts,
  getAllPosts,
  getMyPosts,
};

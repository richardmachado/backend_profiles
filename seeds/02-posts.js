exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("posts")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("posts").insert([
        {
          id: 1,
          title: "first post",
          body: "this is my first post for id #1",
          user_id: 1,
        },
      ]);
    });
};

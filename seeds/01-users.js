exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "richard",
          password:
            "$2a$12$1GUEmXmakbPEZW.2cfEqausZoK5Dis3ZACj6hAztI9hH0GZJ85ZQG",
            created_at: "2021-06-09 18:53:08",
            updated_at : "2021-06-09 18:53:08"
        },
      ]);
    });
};

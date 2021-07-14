exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .delete()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "richardm",
          password:
            "$2a$12$1GUEmXmakbPEZW.2cfEqausZoK5Dis3ZACj6hAztI9hH0GZJ85ZQG",
          first_name: "Richard",
          last_name: "Machado",
          telephone: "619-555-8420",
        },
      ]);
    });
};

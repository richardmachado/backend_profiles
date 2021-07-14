exports.seed = function (knex) {
  // Deletes ALL existing entries

      // Inserts seed entries
      return knex("users").insert([
        {
          id: 2,
          username: "richardm",
          password:
            "$2a$12$1GUEmXmakbPEZW.2cfEqausZoK5Dis3ZACj6hAztI9hH0GZJ85ZQG",
          first_name: "Richard",
          last_name: "Machado",
          telephone: "619-555-8420",
        },
      ]);
};


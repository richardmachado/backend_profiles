exports.up = async function (knex) {
  await knex.schema
    .createTable("users", (table) => {
      table.increments("id").unique();
      table.string("username").unique().notNullable();
      table.string("password").notNullable();
      table.string("first_name", 24);
      table.string("last_name", 24);
      table.string("telephone", 24);
    })
    .createTable("posts", (table) => {
      table.increments("id").unique();
    })
    .createTable("roles", (table) => {
      table.increments();
      table.string("role").notNullable();
    });
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("posts")
    .dropTableIfExists("roles");
};

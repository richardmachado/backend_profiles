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
      table.increments("id").unique;
      table.string("title", 24).notNullable();
      table.string("body", 1024).notNullable();
      table
        .string("user_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("users").dropTableIfExists("posts");
};

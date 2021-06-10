exports.up = async function (knex) {
  await knex.schema
    .createTable("users", (table) => {
      table.increments("id").unique();
      table.string("username").unique().notNullable();
      table.string("password").notNullable();
      table
        .integer("role_id")
        .notNullable()
        .unsigned()
        .defaultTo(1)
        .references("id")
        .inTable("roles")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.boolean("visible").defaultTo(1);
    })
    .createTable("roles", (table) => {
      table.increments();
      table.string("role").notNullable();
    })
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("users").dropTableIfExists("roles");
};

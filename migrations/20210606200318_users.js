exports.up = async function (knex) {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').unique();
    table.string('username').unique().notNullable();
    table.string('password').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('users');
};

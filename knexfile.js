// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/users.db3",
    },
    useNullAsDefault: true,
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: `${process.env.DATABASE_URL}?ssl=no-verify`,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "./migrations",
    },
    seeds: { directory: "./seeds" },
  },
};

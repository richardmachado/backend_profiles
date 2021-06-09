// Update with your config settings.

DATABASE_URL = "postgres://hwxsazcyjtxwpz:7e0f22a4180fb79a4041e304dfd2917cf7472f02e219e9efa3618f01370e4147@ec2-34-230-115-172.compute-1.amazonaws.com:5432/d5t35roe4ctghn"

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
    client: "pg",
    connection: `${DATABASE_URL}`,
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
console.log("database", DATABASE_URL)

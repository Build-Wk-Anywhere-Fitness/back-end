const sharedConfig = {
  useNullAsDefault: true,
  migrations: { directory: "./data/migrations" },
  pool: {
    afterCreate: (conn, done) => conn.run("PRAGMA foreign_keys = ON", done),
  },
};

module.exports = {
  development: {
    ...sharedConfig,
    client: "sqlite3",
    connection: { filename: "./data/anywhere-fitness.db3" },
    seeds: { directory: "./data/seeds" },
  },
  testing: {
    ...sharedConfig,
    client: "sqlite3",
    connection: { filename: "./data/test.db3" },
  },
  production: {
    ...sharedConfig,
    client: "pg",
    connection: process.env.DATABASE_URL,
    seeds: { directory: "./data/seeds" },
  },
};

module.exports = {
  development: {
    timezone: "CET",
    client: "postgresql",
    connection: "postgres://postgres@localhost:5432/postgres"
  },
  production: {
    timezone: "CET",
    client: "pg",
    connection: process.env.DATABASE_URL + `?ssl=true`,
    migrations: {
      directory: './migrations'
    }
  }
};

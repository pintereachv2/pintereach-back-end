// Update with your config settings.
const localPgConnection = {
  host: 'localhost',
  database: 'my_db',
  user: 'username',
  password: 'password'
}

const dbConnection = process.env.DATABASE_URL || localPgConnection
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/pintereach.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },


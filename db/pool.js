const { Pool } = require(`pg`);
require(`dotenv`).config();

module.exports = new Pool({
  host: process.env.DATABASE_HOST, // or wherever the db is hosted
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  ssl: true,
});

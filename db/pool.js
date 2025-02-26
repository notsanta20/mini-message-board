const { Pool } = require(`pg`);
require(`dotenv`).config();

module.exports = new Pool({
  host: process.env.HOST, // or wherever the db is hosted
  user: `koyeb-adm`,
  database: process.env.DB,
  password: process.env.PASS,
  ssl: true,
});

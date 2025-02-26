const { Client } = require("pg");
require(`dotenv`).config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  age INTEGER,
  mail VARCHAR (255),
  bio VARCHAR (255)
);

INSERT INTO messages (username, age, mail, bio)
VALUES
  ( 'Santa' , 23, 'santa@dev.com', 'Full stack Developer');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgres://koyeb-adm:npg_e0HfFX6DQBoU@ep-mute-art-a2ma5jr4.eu-central-1.pg.koyeb.app/koyebdb?sslmode=require`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

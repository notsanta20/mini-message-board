const pool = require(`./pool`);

async function getUser() {
  const { rows } = await pool.query(`SELECT * FROM messages`);
  return rows;
}

async function addUser({ name, mail, age, bio }) {
  await pool.query(
    `INSERT INTO messages (username, age, mail, bio) VALUE ( '${name}' , ${age}, '${mail}', '${bio}');`
  );
}

async function searchUser(user) {
  const { rows } = await pool.query(
    `SELECT * FROM messages WHERE username LIKE '%${user}%';`
  );

  if (rows.length === 0) {
    return false;
  } else {
    return rows;
  }
}

module.exports = { addUser, getUser, searchUser };

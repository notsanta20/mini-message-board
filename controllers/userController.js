const storage = require(`../storages/storage`);
const db = require(`../db/queries`);
const { body, validationResult } = require(`express-validator`);

const validateEmail = [
  body(`name`)
    .trim()
    .isAlpha()
    .withMessage(`Name should only contain letters`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`Name should be between 1-10 characters`),
  body(`mail`).isEmail().normalizeEmail().withMessage(`Enter valid E-Mail`),
  body(`age`)
    .optional()
    .isFloat({ min: 18, max: 120 })
    .withMessage(`Age must be between 18 - 120`),
  body(`bio`)
    .trim()
    .optional()
    .isLength({ min: 0, max: 200 })
    .withMessage(`Bio should be maximum of 200 characters`),
];

async function getUser(req, res) {
  const messages = await db.getUser();
  console.log(messages);
  res.render(`index`, { mess: `Users`, messages: messages });
}

getForm = (req, res) => {
  res.render(`form`);
};

addUser = [
  validateEmail,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render(`form`, { error: errors.array() });
    }
    const { name, mail, age, bio } = req.body;
    await storage.addUser({ name, mail, age, bio });
    res.redirect(`/`);
  },
];

searchUser = (req, res) => {
  res.render(`searchUser`);
};

async function search(req, res) {
  const user = req.query.search;
  const result = await db.searchUser(user);
  console.log(result);
  res.render(`search`, { data: result });
}

module.exports = { getUser, getForm, addUser, searchUser, search };

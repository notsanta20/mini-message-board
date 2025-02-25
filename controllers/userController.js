const storage = require(`../storages/storage`);
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

exports.getUser = (req, res) => {
  res.render(`index`, { mess: `Users`, messages: storage.getUser() });
};

exports.getForm = (req, res) => {
  res.render(`form`);
};

exports.addUser = [
  validateEmail,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render(`form`, { error: errors.array() });
    }
    const { name, mail, age, bio } = req.body;
    storage.addUser({ name, mail, age, bio });
    res.redirect(`/`);
  },
];

exports.searchUser = (req, res) => {
  res.render(`searchUser`);
};

exports.search = (req, res) => {
  const user = req.query.search;
  const result = storage.searchUser(user);
  res.render(`search`, { data: result });
};

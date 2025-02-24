const express = require(`express`);
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app
  .get(`/`, (req, res, next) => {
    res.render(`index`, { mess: `Mini Messageboard`, messages: messages });
  })
  .get(`/new`, (req, res) => {
    res.render(`form`);
  });

app.post(`/new`, (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect(`/`);
});

app.listen(3030, console.log(`Server started`));

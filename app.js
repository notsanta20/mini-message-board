const express = require(`express`);
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const userRoute = require(`./routes/userRoutes`);

app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(`/`, userRoute);

app.listen(8000, console.log(`Server started`));

const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");

const route = require('./routes');
const db = require('./config/db');

// Connect to db
db.connect();

const app = express();
const port = 3002;

app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("combined"));

app.engine(".hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "/resources/views"));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

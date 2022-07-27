const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const { config } = require("dotenv");

const routes = require("./routes");

const app = express();

config();
app.use(cors());
// app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", routes);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});

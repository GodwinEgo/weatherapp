const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

dotenv.config();
const port = process.env.PORT || 5001;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>EgoTheDev Welcomes you to this space</h1>");
});

app.listen(port, (req, res) => {
  console.log(`App is up and running on ${port}`);
});

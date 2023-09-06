const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

dotenv.config();
const port = process.env.PORT || 5001;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("EgoTheDev Welcomes you to this space");
});
app.get("/check-qualification", (req, res) => {
  const age = req.body;

  if (age >= 18) {
    res.json({ reply: "Qualified to register for the gambling site" });
  } else {
    res.json({ reply: "Get the fuck out of here, you minor" });
  }
});

app.listen(port, (req, res) => {
  console.log(`App is up and running on ${port}`);
});

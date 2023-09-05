const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

dotenv.config();
const port = process.env.PORT || 5001;
const app = express();
app.use(express.json());

app.listen(, (req, res) => {
    res.send(`App is run`)
} );

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv").config();

require("./DB/Connection");
app.use(express.json());
// app.use(require("./routes/auth"));
app.use(require("./routes/route"));
app.listen(5000, () => {
  console.log(`PORT listening to 5000`);
});

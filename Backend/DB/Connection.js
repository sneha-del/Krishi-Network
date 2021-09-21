const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error in Connecting to Database"));
db.once("open", () => {
  console.log("connected sucessfully !");
});

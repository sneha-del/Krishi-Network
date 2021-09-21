const mongoose = require("mongoose");
const krishiSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

// collectipn creation
const User = mongoose.model("USER", krishiSchema);
module.exports = User;

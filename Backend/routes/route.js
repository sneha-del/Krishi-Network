const express = require("express");
const router = express.Router();
require("../DB/Connection");
const User = require("../modal/krishiSchema");
router.use(express.static(__dirname + "./public/"));
router.get("/", (req, res) => {
  res.send("Hello krishi");
});
// page 1
router.post("/first", async (req, res) => {
  const { name, email, gender, image } = req.body;
  if (!name || !email || !gender) {
    return res.status(422).json({ error: "Plz fill" });
  }
  try {
    const userExist = await User.find({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email Already exists" });
    } else {
      const user = new User({ name, email, gender, image });

      await user.save();
      res.status(201).json({ message: "Data Added sucessfully !" });
    }
  } catch (err) {
    console.log(err);
  }
});
// to display the data
router.get("/firsts", (req, res) => {
  User.find()
    .then((result) => {
      res.status(200).json({
        userData: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
  //res.send("All the data");
});
module.exports = router;

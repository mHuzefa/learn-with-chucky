const express = require("express");
const Users = require("../database/models/UserSchema");
const router = express.Router();

router.get("/", async (req, res) => {
  const users = await Users.find({});
  res.send(users);
});
router.get("/:id", async (req, res) => {
  const user = await Users.findOne({ googleID: req.params.id });

  console.log(user);
  res.send(user);
});
router.post("/add_user", async (req, res) => {
  const user = new Users({
    name: req.body.name,
    email: req.body.email,
    imageUrl: req.body.imageUrl,
    password: req.body.password,
    googleID: req.body.googleID,
  });
  await user
    .save()
    .then(() => {
      const users = Users.find({});
      res.json(users);
    })
    .catch((err) => res.json(err));
});

module.exports = router;

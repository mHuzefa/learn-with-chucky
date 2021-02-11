const mongoose = require("mongoose");
const express = require("express");
const Users = require("../database/models/UserSchema");
const router = express.Router();

router.get("/", async (req, res) => {
  const users = await Users.find({});
  res.send(users);
});
router.get("/:id", async (req, res) => {
  const user =
    (await Users.findOne({ username: req.params.id })) ||
    (await Users.findById(req.params.id));
  console.log(user);
  res.send(user);
});
router.post("/add_user", async (req, res) => {
  const user = new Users({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    isTeacher: req.body.isTeacher,
    childName: req.body.childName,
    gender: req.body.gender,
    gradeID: req.body.gradeID,
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

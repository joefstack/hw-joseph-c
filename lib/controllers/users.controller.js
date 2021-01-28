const express = require("express");
const userController = express.Router();
const User = require("../models/users");

userController.get("/", async (req, res) => {
  const users = await User.find();
  res.set("Access-Control-Allow-Origin", "*");
  res.json(users);
});

userController.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.set("Access-Control-Allow-Origin", "*");
  res.json(user);
});

userController.post("/", async (req, res) => {
  if (!req.body) return res.status(403).end();
  const user = await User.create(req.body);
  res.set("Access-Control-Allow-Origin", "*");
  res.json(user);
});

module.exports = userController;

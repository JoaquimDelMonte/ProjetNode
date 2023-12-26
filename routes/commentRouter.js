const { Router } = require("express");
const Comment = require("../models/Comment");
const checkAuth = require("../middlewares/checkAuth");
const router = new Router();

router.get("/comments", checkAuth, async (req, res, next) => {
  try {
    res.json(await Comment.findAll());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

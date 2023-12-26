const { Router } = require("express");
const Comment = require("../models/Comment");
const checkAuth = require("../middlewares/checkAuth");
const router = new Router();

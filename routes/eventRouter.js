const {Router} = require("express");
const Event = require("./models/Event");
const checkAuth = require("./middlewares/checkAuth");
const router = new router();


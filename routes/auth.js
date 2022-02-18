const express = require("express");
const { register, login } = require("../controllers/authController");
const auth = express.Router();

auth.route("/register").post(register);
auth.route("/login").post(login);

module.exports = auth;

const express = require("express");
const users = express.Router();
const {
	createUser,
	getAllUsers,
	getUsersByAuthLevel,
	updateUser,
	deleteUser,
} = require("../controllers").userController;

users.post("/", createUser);
users.get("/", getAllUsers);
users.get("/:authLevel", getUsersByAuthLevel);
users.put("/:userId", updateUser);
users.delete("/:userId", deleteUser);

module.exports = users;

const express = require("express");
const categories = express.Router();
const {
	createCategory,
	getCategories,
	updateCategory,
	deleteCategory,
} = require("../controllers").categoryController;

categories.post("/", createCategory);
categories.get("/", getCategories);
categories.put("/:catId", updateCategory);
categories.delete("/:catId", deleteCategory);

module.exports = categories;

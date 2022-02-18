const express = require("express");
const products = express.Router();
const {
	createProduct,
	getAllProducts,
	getProductsByCategory,
	updateProduct,
	deleteProduct,
} = require("../controllers").productController;

products.post("/", createProduct);
products.get("/", getAllProducts);
products.get("/:categoryId", getProductsByCategory);
products.put("/:productId", updateProduct);
products.delete("/:productId", deleteProduct);

module.exports = products;

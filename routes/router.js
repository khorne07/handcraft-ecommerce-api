const express = require("express");
const auth = require("./auth");
const home = require("./home");
const products = require("./products");
const categories = require("./categories");
const users = require("./users");
const router = express.Router();

router.use("/auth", auth);
router.use("/home", home);
router.use("/products", products);
router.use("/categories", categories);
router.use("/users", users);

module.exports = router;

const { Product } = require("../models");
const { buildError } = require("../helpers");
const productController = {
	createProduct: async (req, res, next) => {
		const { productName, productDescription, price, catId } = req.body;
		let data;
		try {
			await Product.create({
				productName,
				productDescription,
				price,
				catId,
			});
			data = await Product.findOne({
				where: {
					productName,
				},
			});
		} catch (error) {
			error.status = 400;
			return next(error);
		}
		return res.json({ created: data });
	},

	getAllProducts: async (req, res) => {
		let data;
		try {
			data = await Product.findAll();
		} catch (error) {
			error.status = 400;
			return next(error);
		}
		return res.json(data);
	},

	getProductsByCategory: async (req, res) => {
		let data;
		try {
			data = await Product.findAll({ where: { catId: req.params.categoryId } });
		} catch (error) {
			error.status = 400;
			return next(error);
		}
		return res.json(data);
	},

	updateProduct: async (req, res, next) => {
		let oldData;
		try {
			const { productName, productDescription, price, catId } = req.body;
			oldData = await Product.findByPk(req.params.productId);
			if (!oldData) {
				throw next(
					buildError(
						400,
						"The product you are trying to Update does not exist",
						req.body
					)
				);
			} else
				await Product.update(
					{ productName, productDescription, price, catId },
					{ where: { id: req.params.productId } }
				);
		} catch (error) {
			error ? (error.status = error.status || 400) : null;
			return next(error);
		}
		return res.json({
			old: oldData,
			updatedFields: req.body,
		});
	},

	deleteProduct: async (req, res, next) => {
		let deletedProduct;
		try {
			const productToDelete = await Product.findByPk(req.params.productId);
			if (!productToDelete) {
				throw next(
					buildError(
						400,
						"The product you are trying to Delete does not exist",
						null
					)
				);
			} else {
				await Product.destroy({
					where: {
						id: req.params.productId,
					},
				});
				deletedProduct = productToDelete;
			}
		} catch (error) {
			error ? (error.status = error.status || 400) : null;
			return next(error);
		}
		return res.json({ deleted: deletedProduct });
	},
};
module.exports = productController;

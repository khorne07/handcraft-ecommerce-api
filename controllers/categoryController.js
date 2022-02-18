const { Category } = require("../models");
const { Product } = require("../models");
const { buildError } = require("../helpers");
const categoryController = {
	createCategory: async (req, res, next) => {
		const { categoryName } = req.body;
		let data;
		try {
			await Category.create({
				categoryName,
			});
			data = await Category.findOne({
				where: {
					categoryName,
				},
			});
		} catch (error) {
			error.status = 400;
			return next(error);
		}
		return res.json({ created: data });
	},

	getCategories: async (req, res) => {
		let categories, products, data;
		try {
			categories = await Category.findAll();
			products = await Product.findAll();
			data = categories.map((category) => {
				let newProducts = products.filter(
					(product) => product.catId === category.id
				);
				category.dataValues.products = newProducts;
				return category;
			});
		} catch (error) {
			error.status = 400;
			return next(error);
		}
		console.log(data);
		return res.json(data);
	},

	updateCategory: async (req, res, next) => {
		let oldData;
		try {
			const { categoryName } = req.body;
			oldData = await Category.findByPk(req.params.productId);
			if (!oldData) {
				throw next(
					buildError(
						400,
						"The category you are trying to Update does not exist",
						req.body
					)
				);
			} else
				await Category.update(
					{ categoryName },
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

	deleteCategory: async (req, res, next) => {
		let deletedCategory;
		try {
			const categoryToDelete = await Category.findByPk(req.params.productId);
			if (!categoryToDelete) {
				throw next(
					buildError(
						400,
						"The category you are trying to Delete does not exist",
						null
					)
				);
			} else {
				await Category.destroy({
					where: {
						id: req.params.productId,
					},
				});
				deletedCategory = categoryToDelete;
			}
		} catch (error) {
			error ? (error.status = error.status || 400) : null;
			return next(error);
		}
		return res.json({ deleted: deletedCategory });
	},
};
module.exports = categoryController;

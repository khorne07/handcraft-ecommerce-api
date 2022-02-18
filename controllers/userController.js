const { User } = require("../models");
const { buildError } = require("../helpers");

const userController = {
	createUser: async (req, res, next) => {
		const { userName, email, password, phoneNumber } = req.body;
		let data;
		try {
			await User.create({
				userName,
				email,
				password,
				phoneNumber,
			});
			data = await User.findOne({
				where: {
					userName,
				},
			});
		} catch (error) {
			error.status = 400;
			return next(error);
		}
		return res.json({ created: data });
	},

	getAllUsers: async (req, res) => {
		let data;
		try {
			data = await User.findAll();
		} catch (error) {
			error.status = 400;
			return next(error);
		}
		const usersData = data.map((user) => ({
			id: user.dataValues.id,
			userName: user.dataValues.userName,
			email: user.dataValues.email,
			authLevel: user.dataValues.isAdmin
				? 3
				: user.dataValues.isSuperAdmin
				? 7
				: 1,
		}));
		return res.json(usersData);
	},

	getUsersByAuthLevel: async (req, res) => {
		let data;
		try {
			data = await User.findAll({ where: { authLevel: req.params.authLevel } });
		} catch (error) {
			error.status = 400;
			return next(error);
		}
		return res.json(data);
	},

	updateUser: async (req, res, next) => {
		let oldData;
		try {
			const { userName, productDescription, price, catId } = req.body;
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

	deleteUser: async (req, res, next) => {
		let deletedUser;
		try {
			const userToDelete = await User.findByPk(req.params.userId);
			if (!userToDelete) {
				throw next(
					buildError(
						400,
						"The User you are trying to Delete does not exist",
						null
					)
				);
			} else {
				await User.destroy({
					where: {
						id: req.params.userId,
					},
				});
				deletedUser = userToDelete;
			}
		} catch (error) {
			error ? (error.status = error.status || 400) : null;
			return next(error);
		}
		return res.json({ deleted: deletedUser });
	},
};
module.exports = userController;

const bcryptjs = require("bcryptjs");
const { User } = require("../models");
const { buildError } = require("../helpers");
const JWT = require("../utils/JWT");

const authController = {
	register: async (req, res, next) => {
		if (!Object.keys(req.body).length)
			throw next(buildError(403, "Request body empty", req.body));
		if (Object.keys(req.body).length < 3)
			throw next(buildError(403, "Request body incomplete", req.body));
		const { userName, password, email } = req.body;
		let user;
		const hashPassword = await bcryptjs.hash(password, 10);
		try {
			await User.create({
				userName,
				password: hashPassword,
				email,
			});
			user = await User.findOne({
				where: {
					userName,
				},
			});
		} catch (error) {
			error.status = 400;
			return next(error);
		}
		const token = JWT.signToken(user.id);
		return res
			.status(201)
			.json({ token, id: user.id, userName: user.userName, authLevel: 1 });
	},
	login: async (req, res, next) => {
		const { userName, email, password, extended } = req.body;
		let user;
		try {
			if (userName)
				user = await User.findOne({
					where: {
						userName,
					},
				});
			else if (email)
				user = await User.findOne({
					where: {
						email,
					},
				});
			if (!(await bcryptjs.compare(password, user.password)))
				throw next(buildError(401, "Wrong Password", req.body));
		} catch (error) {
			error.status = 400;
			return next(error);
		}
		const token = JWT.signToken(user.id, extended);
		return res.status(201).json({
			token,
			id: user.id,
			userName: user.userName,
			authLevel: user.isSuperAdmin ? 7 : user.isAdmin ? 3 : 1,
		});
	},
};

module.exports = authController;

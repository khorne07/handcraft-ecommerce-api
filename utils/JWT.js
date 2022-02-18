const JWT = require("jsonwebtoken");
const { JWT_SIGNATURE_KEY } = require("../config/appConfig");

module.exports = {
	signToken: (userId, extended = false) => {
		return JWT.sign(
			{
				iss: "HandCraftShop",
				sub: userId,
				iat: Date.now(),
			},
			JWT_SIGNATURE_KEY,
			{ expiresIn: extended ? "1d" : 300000 }
		);
	},
	verifyToken: (token) => {
		const decoded = JWT.verify(token, JWT_SIGNATURE_KEY);
		console.log(decoded);
	},
};

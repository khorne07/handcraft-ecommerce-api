"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Categories",
			[
				{
					categoryName: "Sets",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					categoryName: "Necklaces",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					categoryName: "Bracelets",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					categoryName: "Rings",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					categoryName: "Earings",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Categories", null, {});
	},
};

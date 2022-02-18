"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Users",
			[
				{
					userName: "JohnDoe",
					email: "john.doe@somemail.com",
					//JohnP4ssw0rd
					password:
						"$2a$10$5AxdAt9FyX0FUe2vHUxrrOYrUUmxuP1IpmMm1T1gUUYc.WBUqqxDe",
					isAdmin: false,
					isSuperAdmin: false,
					firstName: "John",
					lastName: "Doe",
					address: "United Kingdom",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					userName: "Admin",
					email: "admin@somemail.com",
					password: "4dmin123",
					isAdmin: true,
					isSuperAdmin: false,
					firstName: "Big",
					lastName: "Boss",
					address: "Germany",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					userName: "Pepe",
					email: "pepe@mail.com",
					password: "Pepe123",
					isAdmin: false,
					isSuperAdmin: false,
					firstName: "Jose Alejandro",
					lastName: "Perez Tabarez",
					address: "Cuba",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					userName: "Masterchief",
					email: "masterchief@gmail.com",
					//Sp4rth4n
					password:
						"$2a$10$1tgjHkPDK.pmF7LOIH6uB.PhKwJ.kJqJPDNnSdX/deoEq9VZOTZI.",
					isAdmin: false,
					isSuperAdmin: true,
					firstName: "Masterchief",
					lastName: null,
					address: "Pillar of Autumn",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					userName: "Lola",
					email: "lola@hotmail.com",
					password: "LolaMent0",
					isAdmin: false,
					isSuperAdmin: false,
					firstName: "Lola",
					lastName: "Menta",
					address: "Unknown",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					userName: "Pedro",
					email: "pedropicapiedras@gmail.com",
					password: "Pic4Piedr4s",
					isAdmin: false,
					isSuperAdmin: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Users", null, {});
	},
};

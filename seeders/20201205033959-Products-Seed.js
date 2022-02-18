"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Products",
			[
				{
					productName: "Necklace + Earings",
					productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
				dolor purus non enim praesent elementum facilisis leo vel. Risus at
				ultrices mi tempus imperdiet.`,
					price: 12.5,
					createdAt: new Date(),
					updatedAt: new Date(),
					catId: 1,
				},
				{
					productName: "Necklace + Bracelet",
					productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
				dolor purus non enim praesent elementum facilisis leo vel. Risus at
				ultrices mi tempus imperdiet.`,
					price: 10.0,
					createdAt: new Date(),
					updatedAt: new Date(),
					catId: 1,
				},
				{
					productName: "Bracelet + Earings",
					productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
				dolor purus non enim praesent elementum facilisis leo vel. Risus at
				ultrices mi tempus imperdiet.`,
					price: 7.5,
					createdAt: new Date(),
					updatedAt: new Date(),
					catId: 1,
				},
				{
					productName: "Bone Necklace",
					productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
				dolor purus non enim praesent elementum facilisis leo vel. Risus at
				ultrices mi tempus imperdiet.`,
					price: 9.5,
					createdAt: new Date(),
					updatedAt: new Date(),
					catId: 2,
				},
				{
					productName: "Ebony Necklace",
					productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
				dolor purus non enim praesent elementum facilisis leo vel. Risus at
				ultrices mi tempus imperdiet.`,
					price: 13.75,
					createdAt: new Date(),
					updatedAt: new Date(),
					catId: 2,
				},
				{
					productName: "Ivory Necklace",
					productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
				dolor purus non enim praesent elementum facilisis leo vel. Risus at
				ultrices mi tempus imperdiet.`,
					price: 15.0,
					createdAt: new Date(),
					updatedAt: new Date(),
					catId: 2,
				},
				{
					productName: "Bone Bracelet",
					productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
				dolor purus non enim praesent elementum facilisis leo vel. Risus at
				ultrices mi tempus imperdiet.`,
					price: 4.75,
					createdAt: new Date(),
					updatedAt: new Date(),
					catId: 3,
				},
				{
					productName: "Ebony Bracelet",
					productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
				dolor purus non enim praesent elementum facilisis leo vel. Risus at
				ultrices mi tempus imperdiet.`,
					price: 6.2,
					createdAt: new Date(),
					updatedAt: new Date(),
					catId: 3,
				},
				{
					productName: "Ivory Bracelet",
					productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
				dolor purus non enim praesent elementum facilisis leo vel. Risus at
				ultrices mi tempus imperdiet.`,
					price: 7.25,
					createdAt: new Date(),
					updatedAt: new Date(),
					catId: 3,
				},
				{
					productName: "Bone Ring",
					productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
				dolor purus non enim praesent elementum facilisis leo vel. Risus at
				ultrices mi tempus imperdiet.`,
					price: 3.65,
					createdAt: new Date(),
					updatedAt: new Date(),
					catId: 4,
				},
				{
					productName: "Ebony Ring",
					productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
				dolor purus non enim praesent elementum facilisis leo vel. Risus at
				ultrices mi tempus imperdiet.`,
					price: 4.75,
					createdAt: new Date(),
					updatedAt: new Date(),
					catId: 4,
				},
				{
					productName: "Ivory Ring",
					productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
				dolor purus non enim praesent elementum facilisis leo vel. Risus at
				ultrices mi tempus imperdiet.`,
					price: 5.3,
					createdAt: new Date(),
					updatedAt: new Date(),
					catId: 4,
				},
				{
					productName: "Bone Earings",
					productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
				dolor purus non enim praesent elementum facilisis leo vel. Risus at
				ultrices mi tempus imperdiet.`,
					price: 2.15,
					createdAt: new Date(),
					updatedAt: new Date(),
					catId: 5,
				},
				{
					productName: "Ebony Earings",
					productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
				dolor purus non enim praesent elementum facilisis leo vel. Risus at
				ultrices mi tempus imperdiet.`,
					price: 2.95,
					createdAt: new Date(),
					updatedAt: new Date(),
					catId: 5,
				},
				{
					productName: "Ivory Earings",
					productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
				dolor purus non enim praesent elementum facilisis leo vel. Risus at
				ultrices mi tempus imperdiet.`,
					price: 6.75,
					createdAt: new Date(),
					updatedAt: new Date(),
					catId: 5,
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Products", null, {});
	},
};

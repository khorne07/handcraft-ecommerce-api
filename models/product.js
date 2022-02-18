module.exports = (sequelize, DataTypes) => {
	var Product = sequelize.define(
		"Product",
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},
			productName: {
				type: DataTypes.STRING(25),
				allowNull: false,
				unique: true,
			},
			productDescription: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			price: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			createdAt: DataTypes.DATE,
			updatedAt: DataTypes.DATE,
		},
		{}
	);
	Product.associate = (models) => {
		Product.belongsTo(models.Category, {
			foreignKey: "catId",
		});
		Product.belongsToMany(models.ProductStatus, {
			through: "Products-ProductStatuses",
		});
		Product.belongsToMany(models.User, {
			through: "FavoriteProducts",
		});
	};
	return Product;
};

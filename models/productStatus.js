module.exports = (sequelize, DataTypes) => {
	var ProductStatus = sequelize.define(
		"ProductStatus",
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},
			status: {
				type: DataTypes.STRING(25),
				allowNull: false,
				unique: true,
			},
			createdAt: DataTypes.DATE,
			updatedAt: DataTypes.DATE,
		},
		{}
	);
	ProductStatus.associate = (models) => {
		ProductStatus.belongsToMany(models.Product, {
			through: "Products-ProductStatuses",
		});
	};
	return ProductStatus;
};

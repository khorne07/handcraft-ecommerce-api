module.exports = (sequelize, DataTypes) => {
	var Category = sequelize.define(
		"Category",
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},
			categoryName: {
				type: DataTypes.STRING(25),
				allowNull: false,
				unique: true,
			},
			createdAt: DataTypes.DATE,
			updatedAt: DataTypes.DATE,
		},
		{}
	);
	Category.associate = (models) => {
		Category.hasMany(models.Product, {
			foreignKey: "catId",
			onUpdate: "CASCADE",
			onDelete: "CASCADE",
		});
	};
	return Category;
};

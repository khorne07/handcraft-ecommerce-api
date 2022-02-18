module.exports = (sequelize, DataTypes) => {
	var User = sequelize.define("User", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		userName: {
			type: DataTypes.STRING(25),
			allowNull: false,
			unique: true,
		},
		email: {
			type: DataTypes.STRING(50),
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		isAdmin: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		isSuperAdmin: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		address: DataTypes.STRING,
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE,
	});
	User.associate = (models) => {
		User.belongsToMany(models.Product, {
			through: "FavoriteProducts",
		});
	};
	return User;
};

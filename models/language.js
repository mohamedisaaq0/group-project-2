const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Language extends Model {}

Language.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    UserId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'language',
  }
);

module.exports = Language;

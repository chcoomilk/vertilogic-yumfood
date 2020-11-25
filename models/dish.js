'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      dish.hasOne(models.order, { foreignKey: "dish_id" });
    }
  };
  dish.init({
    name: DataTypes.STRING,
    vendor_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'dish',
  });
  return dish;
};
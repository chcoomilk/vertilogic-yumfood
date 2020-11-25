'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  order.init({
    dish_id: DataTypes.INTEGER,
    special_request: DataTypes.STRING,
    quantity: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1
      }
    }
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};
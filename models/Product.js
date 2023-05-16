// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // integer
      allowNull: false, // doesn't allow null values
      primaryKey: true, // set as primary key
      autoIncrement: true, // uses auto increment
  },
  product_name: {
      type: DataTypes.STRING, // string
      allowNull: false, // doesn't allow null values
  },
  price: {
      type: DataTypes.DECIMAL, // decimal
      allowNull: false, // doesn't allow null values
      // validates that the value is numeric
      validate: {
          isDecimal: {
            msg: 'Must be a decimal value',
          }
      },
    },
    stock: {
      type: DataTypes.INTEGER, // integer
      allowNull: false, // doesn't allow null values
      // set default value to 10
      defaultValue: 10,
      // validates that the value is numeric
      validate: {
          isNumeric: {
            msg: 'Must be a numeric value',
          }
        },
      },
      category_id: {
        type: DataTypes.INTEGER, // integer
        // references the category model's id
        references: {
          model: 'category',
          key: 'id',
        },
      },

},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;

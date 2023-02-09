// import models
const User = require('./User');
const Product = require('./product');
const Category = require('./category');


// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});




module.exports = {
    Product,
    Category,
    User
  };
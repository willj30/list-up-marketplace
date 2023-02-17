const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Upcycled Furniture',
  },
  {
    category_name: 'Retro Video Games',
  },
  {
    category_name: 'Vintage Clothing',
  },
  {
    category_name: 'Modded Vehicles',
  },

];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;

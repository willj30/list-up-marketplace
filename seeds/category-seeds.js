const {Category} = require('../models');

const categoryData = [
    {
        category_name: 'Upcycled-Furniture',
    },
    {
        category_name: 'Retro-Games',
    },
    {
        category_name: 'Vintage-Clothing',
    },
    {
        category_name: 'Vehicles',
    },
   
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');

// ****MISSING CONFIG FOLDER****
// import our database connection from config.js
const sequelize = require('../config/connection');


const seedAll = async () => {
    await sequelize.sync ({ force: true});
  console.log('\n----- DATABASE SYNCED -----\n');
    await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');
    await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
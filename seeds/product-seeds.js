const {Product} = require('../models');

const productData = [
    
  {
    product_name: '',
    price: 50.99,
    stock: 2,
    category_id: 1,
  },
  {
    product_name: '',
    price: 50.99,
    stock: 2,
    category_id: 2,
  },
  {
    product_name: '',
    price: 50.99,
    stock: 2,
    category_id: 3,
  },
  {
    product_name: '',
    price: 50.99,
    stock: 2,
    category_id: 4,
  },
  {
    product_name: '',
    price: 50.99,
    stock: 2,
    category_id: 1,
  },
  {
    product_name: '',
    price: 50.99,
    stock: 2,
    category_id: 2,
  },
  {
    product_name: '',
    price: 50.99,
    stock: 2,
    category_id: 3,
  },

];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
const {product} = require('../models');

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
    category_id: 5,
  },
  {
    product_name: '',
    price: 50.99,
    stock: 2,
    category_id: 6,
  },
  {
    product_name: '',
    price: 50.99,
    stock: 2,
    category_id: 7,
  },

];

const seedProducts = () => product.bulkCreate(productData);

module.exports = seedProducts;
const {Product} = require('../models');

const productData = [
    
  {
    product_name: 'Vintage Coffee Table',
    price: 150.00,
    seller: 'Juan G',
    filename: 'vintage-coffee-table.jpg',
    description: 'Coffe Table',
    category_id: 1,
  },
  {
    product_name: 'Vintage Drawer',
    price: 135.00,
    seller: 'Will J',
    filename: 'vintage-drawer.jpg',
    description: 'Old Fashioned Drawer',
    category_id: 1,
  },
  {
    product_name: 'Table Set',
    price: 110.00,
    seller: 'Alex P',
    filename: 'table-set.jpg',
    description: 'Rounded Table With 3 Stools',
    category_id: 1,
  },
  {
    product_name: 'Volkswagen Bus Dresser',
    price: 135.00,
    seller: 'Cameron S',
    filename: 'Volkswagen-Bus-Dresser.jpg',
    description: 'Repainted Dresser',
    category_id: 1,
  },
  {
    product_name: 'Game-Boy',
    price: 150.99,
    seller: "Geneveve P",
    filename: 'gameboy.jpg',
    description: 'GAMEBOY COLOR with Pokemon Game',
    category_id: 2,
  },
  {
    product_name: 'Nintendo 64',
    price: 145.00,
    seller: 'Juan G',
    filename: 'nintendo64.jpg',
    description: 'Black Nintendo 64 with two Remote controls and one game',
    category_id: 2,
  },
  {
    product_name: 'Super Nintendo',
    price: 150.50,
    seller: 'Will J',
    filename: 'nintendo.jpg',
    description: 'Super Ninendo with one Remote control',
    category_id: 2,
    
  },
  {
    product_name: 'Playstation 1',
    price: 120.00,
    seller: "Geneveve P",
    filename: 'playstation.jpg',
    description: 'Playstation 1 with one Remote control and one Wrestling game',
    category_id: 2,
  },
  {
    product_name: 'Letterman Jacket',
    price: 60.00,
    seller: 'Juan G',
    filename: 'letterman.jpg',
    description: 'WB Jacket',
    category_id: 3,
  },
  {
    product_name: 'Windbreaker Jacket',
    price: 35.00,
    seller: 'Alex P',
    filename: 'windbreaker.jpg',
    description: 'Vintage Windbreaker Jacket',
    category_id: 3,
  },
  {
    product_name: 'Levi Jeans',
    price: 25.00,
    seller: 'Cameron S',
    filename: 'levipants.jpg',
    description: 'Women Levi pants size 4',
    category_id: 3,
  },
  {
    product_name: 'Dress Shirt',
    price: 20.00,
    seller: 'Alex P',
    filename: 'dressshirt.jpg',
    description: 'Dress Shirt',
    category_id: 3,
  },
  {
    product_name: 'BMW',
    price: 35500,
    seller: "Geneveve P",
    filename: 'bmw.jpg',
    description: '2003 BMW Mileage: 145,000',
    category_id: 4,
  },
  {
    product_name: 'Honda Civic',
    price: 27500,
    seller: 'Cameron S',
    filename: 'honda.jpg',
    description: '1993 Honda Civic Mileage: 153,000',
    category_id: 4,
  },
  {
    product_name: 'Mitsubishi Lancer',
    price: 32500,
    seller: 'Alex P',
    filename: 'lancer.jpg',
    description: '2013 Mitsubishi Lancer Mileage: 47,000',
    category_id: 4,
  },
  {
    product_name: 'Mitsubishi Lancer',
    price: 13500,
    seller: 'Will J',
    filename: 'mitLancer.jpg',
    description: '2004 Mitsubishi Lancer Mileage: 108,000',
    category_id: 4,
  },

];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
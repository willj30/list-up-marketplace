const {Product} = require('../models');

const productData = [
    
  {
    product_name: 'Furniture 1',
    price: 50.99,
    seller: 'Juan G',
    filename: '02-cosmos-flowers.jpg',
    description: 'type,model, etc',
    category_id: 1,
  },
  {
    product_name: 'Furniture 2',
    price: 50.99,
    seller: 'Will J',
    filename: '02-cosmos-flowers.jpg',
    description: 'type,model, etc',
    category_id: 1,
  },
  {
    product_name: 'Furniture 3',
    price: 50.99,
    seller: 'Alex P',
    filename: '02-cosmos-flowers.jpg',
    description: 'type,model, etc',
    category_id: 1,
  },
  {
    product_name: 'Furniture 4',
    price: 50.99,
    seller: 'Cameron S',
    filename: '02-cosmos-flowers.jpg',
    description: 'type,model, etc',
    category_id: 1,
  },
  {
    product_name: 'Retro-Games 1',
    price: 50.99,
    seller: "Geneveve P",
    filename: '02-cosmos-flowers.jpg',
    description: 'type,model, etc',
    category_id: 2,
  },
  {
    product_name: 'Retro-Games 2',
    price: 50.99,
    seller: 'Juan G',
    filename: '02-cosmos-flowers.jpg',
    description: 'type,model, etc',
    category_id: 2,
  },
  {
    product_name: 'Retro-Games 3',
    price: 50.99,
    seller: 'Will J',
    filename: '02-cosmos-flowers.jpg',
    description: 'type,model, etc',
    category_id: 2,
    
  },
  {
    product_name: 'Retro-Games 4',
    price: 50.99,
    seller: "Geneveve P",
    filename: '02-cosmos-flowers.jpg',
    description: 'type,model, etc',
    category_id: 2,
  },
  {
    product_name: 'Vintage-Clothing 1',
    price: 55,
    seller: 'Juan G',
    filename: '02-cosmos-flowers.jpg',
    description: 'type,model, etc',
    category_id: 3,
  },
  {
    product_name: 'Vintage-Clothing 2',
    price: 55,
    seller: 'Alex P',
    filename: '02-cosmos-flowers.jpg',
    description: 'type,model, etc',
    category_id: 3,
  },
  {
    product_name: 'Vintage-Clothing 3',
    price: 55,
    seller: 'Cameron S',
    filename: '02-cosmos-flowers.jpg',
    description: 'type,model, etc',
    category_id: 3,
  },
  {
    product_name: 'Vintage-Clothing 4',
    price: 55,
    seller: 'Alex P',
    filename: '02-cosmos-flowers.jpg',
    description: 'type,model, etc',
    category_id: 3,
  },
  {
    product_name: 'Vehicles 1',
    price: 55,
    seller: "Geneveve P",
    filename: '02-cosmos-flowers.jpg',
    description: 'type,model, etc',
    category_id: 4,
  },
  {
    product_name: 'Vehicles 2',
    price: 55,
    seller: 'Cameron S',
    filename: '02-cosmos-flowers.jpg',
    description: 'type,model, etc',
    category_id: 4,
  },
  {
    product_name: 'Vehicles 3',
    price: 55,
    seller: 'Alex P',
    filename: '02-cosmos-flowers.jpg',
    description: 'type,model, etc',
    category_id: 4,
  },
  {
    product_name: 'Vehicles 4',
    price: 55,
    seller: 'Will J',
    filename: '02-cosmos-flowers.jpg',
    description: 'type,model, etc',
    category_id: 4,
  },

];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
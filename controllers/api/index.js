// importing packages
const router = require('express').Router();
const userRoutes = require('./user-routes');
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');

router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);

module.exports = router;
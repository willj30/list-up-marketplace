const router = require('express').Router();
const { Product, Category } = require('../../models');



// The `/api/products` endpoint
// get all products
// find all products
router.get('/', async (req, res) => {
    try{
        const productData = await Product.findAll ({
            attributes: ['id','price', 'product_name', 'stock', 'category_id'],
            include: [{model: Category, attributes: ['category_name']}],
        });
        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json.apply(err);
    }
});




// get one product
// find a single product by its `id`
router.get('/:id', async (req, res) => {
    try {
        const productData = await Product.findByPk (req.params.id, {
            attributes: ['id', 'price', 'product_name', 'stock', 'category_id'],
            include: [{model: Category, attributes: ['category_name']}],
        });
        if(!productData) {
            res.status(404).json({ message: 'Cannot find the Product You are looking for' });
            return;
        }
        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// // create new product
// router.post('/', async (req, res) => {


    
// });



module.exports = router;
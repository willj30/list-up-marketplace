const router = require('express').Router();
const { Category, Product } = require('../../models');


// The `/api/categories` endpoint
router.get('/', async (req, res) => {
    try{
        const categoryData = await Category.findAll({
            include: [ {model: Product}],
        });
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json.apply(err);
    }
});

//  get by ID
router.get('/:id', async (req, res) => {
    try {
        const categoryData = await Category.findByPk(req.params.id, {
            include: [{ model: Product}],
        });

        if(!categoryData) {
            res.status(404).json ({ message: 'Cannot find the Category You are looking for'});
            return;
        }

        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// // POST create new category?

// router.post('/', async (req, res) => {
//     try {

//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // update a category?

// router.put('/:id', async (req, res) => {
//     try {


//     } catch (err) {
//         // console.error(err);
//         res.status(500).json({error: err.message});
//     }
// });



module.exports = router;
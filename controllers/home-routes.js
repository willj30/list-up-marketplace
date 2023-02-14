const router = require('express').Router();

const { Category, Product } = require('../models');

// GET all categories for homepage
router.get('/', async (req, res) => {
  try {
    const dbCategoryData = await Category.findAll({
      include: [
        {
          model: Product,
          attributes: ['product_name', 'price'],
        },
      ],
    });

    const categories = dbCategoryData.map((category) =>
      category.get({ plain: true })
    );

    res.render('homepage', {
      categories,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one category
router.get('/category/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the categories
    try {
      const dbCategoryData = await Category.findByPk(req.params.id, {
        include: [
          {
            model: Product,
            attributes: [
              'product_name',
              'price',
              'seller',
              'filename',
              'description',
              'category_id',
            ],
          },
        ],
      });
      const category = dbCategoryData.get({ plain: true });
      res.render('category', { category, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// GET one product
router.get('/product/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the product
    try {
      const dbProductData = await Product.findByPk(req.params.id);

      const product = dbProductData.get({ plain: true });

      res.render('product', { product, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
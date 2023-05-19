const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // Find all categories and include their associated Products
  Category.findAll({
    include: Product
  })
    .then((categoryData) => {
      res.status(200).json(categoryData);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    });
});

router.get('/:id', (req, res) => {
  // Find one category by its `id` value and include its associated Products
  Category.findOne({
    where: { id: req.params.id },
    include: Product
  })
    .then((categoryData) => {
      res.status(200).json(categoryData);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    });
});


router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;

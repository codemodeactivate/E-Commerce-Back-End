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
  Category.create(req.body)
    .then((categoryData) => {
      res.status(200).json(categoryData);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    });
});

router.put("/:id", (req, res) => {
    // update a category by its `id` value
    Category.update(req.body, {
        where: { id: req.params.id },
    })
        .then((categoryData) => {
            res.status(200).json(categoryData);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ message: "Internal server error" });
        });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: { id: req.params.id }
  })
    .then((categoryData) => {
      if (categoryData === 0) {
        res.status(404).json({ message: 'No category found with this id!' });
        return;
      }
      res.status(200).json({ message: 'Category deleted successfully' });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    });
});


module.exports = router;

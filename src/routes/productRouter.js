const express = require('express');
const {
  getAllProductController,
  getByIdProductController,
  addProductByName,
} = require('../controllers/productController');

const { validateAddProduct } = require('../middlewares/validateProducts');

const router = express.Router();

router.get('/', getAllProductController);

router.get('/:id', getByIdProductController);

router.post('/', validateAddProduct, addProductByName);

module.exports = router;
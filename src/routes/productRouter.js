const express = require('express');
const {
  getAllProductController,
  getByIdProductController,
  addProductByName,
  putProductController,
  deleteProductController,
} = require('../controllers/productController');

const { validateAddProduct, validateIdProduct } = require('../middlewares/validateProducts');

const router = express.Router();

router.get('/', getAllProductController);

router.post('/', validateAddProduct, addProductByName);

router.put('/:id', validateAddProduct, validateIdProduct, putProductController);

router.get('/:id', getByIdProductController);

router.delete('/:id', validateIdProduct, deleteProductController);

module.exports = router;
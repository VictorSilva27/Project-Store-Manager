const express = require('express');
// const connection = require('../models/connection');
const {
  getAllProductController,
  getByIdProductController,
} = require('../controllers/productController');

const router = express.Router();

router.get('/', getAllProductController);

router.get('/:id', getByIdProductController);

module.exports = router;
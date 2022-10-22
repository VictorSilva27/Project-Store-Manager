const express = require('express');
const {
  getAllSalesController,
  getByIdSalesController,
  deleteSalesController,
} = require('../controllers/salesController');

const router = express.Router();

router.get('/', getAllSalesController);

router.get('/:id', getByIdSalesController);

router.delete('/:id', deleteSalesController);

module.exports = router;
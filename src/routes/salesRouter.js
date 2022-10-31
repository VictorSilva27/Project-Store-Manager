const express = require('express');
const {
  getAllSalesController,
  getByIdSalesController,
  deleteSalesController,
  postSalesController,
  putSalesController,
} = require('../controllers/salesController');

const validateSales = require('../middlewares/validateSales');
const { validateSalesId } = require('../middlewares/validateSaleId');

const ObjValidate = Object.values(validateSales);

const router = express.Router();

router.get('/', getAllSalesController);

router.post('/', ...ObjValidate, postSalesController);

router.get('/:id', getByIdSalesController);

router.put('/:id', validateSalesId, ...ObjValidate, putSalesController);

router.delete('/:id', deleteSalesController);

module.exports = router;
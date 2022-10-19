const express = require('express');
const {
// postRegisterSalesController,
// getByIdProductController,
  getAllSalesController,
  getByIdSalesController,
} = require('../controllers/salesController');

// const { validateSalesProductId, validateSalesQuantity } = require('../middlewares/validateSales');

const router = express.Router();

// router.post('/', validateSalesProductId, validateSalesQuantity, (req, res) => {
//   console.log('entrou no falso');
//   res.status(201).json({ message: 'Tudo certo' });
// });

router.get('/', getAllSalesController);
router.get('/:id', getByIdSalesController);

// router.get('/:id', getByIdProductController);

module.exports = router;
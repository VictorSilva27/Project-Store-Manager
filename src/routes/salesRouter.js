const express = require('express');
// const {
//   postRegisterSalesController,
//   // getByIdProductController,
// } = require('../controllers/salesController');

const { validateSalesProductId, validateSalesQuantity } = require('../middlewares/validateSales');

const router = express.Router();

router.post('/', validateSalesProductId, validateSalesQuantity, (req, res) => {
  console.log('entrou no falso');
  res.status(201).json({ message: 'Tudo certo' });
});

// router.get('/:id', getByIdProductController);

module.exports = router;
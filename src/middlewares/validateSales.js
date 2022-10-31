const productModel = require('../models/productModel');

const validateSalesProductId = (req, res, next) => {
  const array = req.body;
  const result = array.every(({ productId }) => productId !== undefined);
  if (!result) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  return next();
};

const validateSalesQuantity = (req, res, next) => {
  const array = req.body;
  const result = array.every(({ quantity }) => quantity !== undefined);
  if (!result) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  const result2 = array.every(({ quantity }) => quantity > 0);
  if (!result2) {
    return res.status(422)
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }
  return next();
};

const validateSalesProductFound = async (req, res, next) => {
  const arrayBody = req.body;
  const tableProduct = await productModel.getAllProductModel();
  const filtered = arrayBody.map(({ productId }) => 
    tableProduct.filter(({ id }) => id === productId));
  const result = filtered.every((item) => item.length !== 0);
  if (!result) return res.status(404).json({ message: 'Product not found' });
  return next();
};

module.exports = {
  validateSalesProductId,
  validateSalesQuantity,
  validateSalesProductFound,
};
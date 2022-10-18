// const { getByIdProductService } = require('../services/productService');

const validateSalesProductId = (req, res, next) => {
  const array = req.body;
  array.forEach(({ productId }) => {
    if (!productId) return res.status(400).json({ message: '"productId" is required' });
  });
  return next();
};

const validateSalesQuantity = (req, res, next) => {
  const array = req.body;
  array.forEach(({ quantity }) => {
    if (quantity === undefined) return res.status(400).json({ message: '"quantity" is required' });
    if ((+quantity) <= 0) {
      return res.status(404)
        .json({ message: '"quantity" must be greater than or equal to 1' });
    }
  });
  return next();
};

// const validateProductId = (req, res, next) => {
  
// }; 

module.exports = { validateSalesProductId, validateSalesQuantity };
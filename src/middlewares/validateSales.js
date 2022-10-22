// const productModel = require('../models/productModel');

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
      return res.status(422)
        .json({ message: '"quantity" must be greater than or equal to 1' });
    }
  });
  return next();
};

// const validateSalesProductFound = async (req, res, next) => {
//   const arrayBody = req.body;
//   const tableProduct = await productModel.getAllProductModel();
//   const filtered = arrayBody.map(({ productId }) => 
//      tableProduct.filter(({ id }) => id === productId));
//   return filtered.forEach((item) => {
//     switch (item.length) {
//       case 0:
//         return res.status(404).json({ message: 'Product not found' });
//       default:
//         next();
//         break;
//     }
//   });
// };

module.exports = {
  validateSalesProductId,
  validateSalesQuantity,
  // validateSalesProductFound,
};
const modelSale = require('../models/salesModel');

const validateSalesId = async (req, res, next) => {
  const saleId = req.params.id;
  const result = await modelSale.getByIdSalesModel(saleId);
  if (result.length === 0) return res.status(404).json({ message: 'Sale not found' });
  return next();
};

module.exports = {
  validateSalesId,
};
const productsModel = require('../models/productModel');

const validateAddProduct = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  if (name.length < 5) {
 return res.status(422)
    .json({ message: '"name" length must be at least 5 characters long' }); 
  } 
  return next();
};

const validateIdProduct = async (req, res, next) => {
  const idProduct = Number(req.params.id);
  const result = await productsModel.getByIdProductModel(idProduct);
  if (result.length === 0) return res.status(404).json({ message: 'Product not found' });
  return next();
};

module.exports = { validateAddProduct, validateIdProduct };
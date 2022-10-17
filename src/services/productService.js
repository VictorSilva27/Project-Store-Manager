const productModel = require('../models/productModel');

const getByIdProductService = async (idProduct) => {
  const result = await productModel.getByIdProductModel(idProduct);
  return result;
};

module.exports = {
  getByIdProductService,
};
const productModel = require('../models/productModel');

const getByIdProductService = async (idProduct) => {
  const result = await productModel.getByIdProductModel(idProduct);
  return result;
};

const addProductService = async (nameProduct) => {
  const result = await productModel.addProductModel(nameProduct);
  return result;
};

module.exports = {
  getByIdProductService,
  addProductService,
};
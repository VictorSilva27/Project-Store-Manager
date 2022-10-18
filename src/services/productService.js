const productModel = require('../models/productModel');

const getAllProductService = async () => {
  const result = await productModel.getAllProductModel();
  return { status: 200, response: result };
};

const getByIdProductService = async (idProduct) => {
  const result = await productModel.getByIdProductModel(idProduct);
  const product = result.find((productItem) => productItem.id === idProduct);
  if (!product) {
  return { status: 404, response: { message: 'Product not found' },
  }; 
}
  return { status: 200, response: product };
};

const addProductService = async (req) => {
  const { name } = req.body;
  const [result] = await productModel.addProductModel(name);
  return { status: 201, response: result };
};

module.exports = {
  getAllProductService,
  getByIdProductService,
  addProductService,
};
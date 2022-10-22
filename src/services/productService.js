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

const putProductService = async (req) => {
  const { name } = req.body;
  const idProduct = req.params.id;
  const [result] = await productModel.putProductModel(idProduct, name);
  return { status: 200, response: result };
};

const deleteProductService = async (req) => {
  const idProduct = req.params.id;
  await productModel.deleteProductModel(idProduct);
  return { status: 204 };
};

const getByNameProductService = async (query) => {
  const result = await productModel.getByNameProductModel(query);
  return { status: 200, response: result };
};

module.exports = {
  getAllProductService,
  getByIdProductService,
  addProductService,
  putProductService,
  deleteProductService,
  getByNameProductService,
};
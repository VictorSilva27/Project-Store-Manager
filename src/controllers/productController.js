const productService = require('../services/productService');

const getAllProductController = async (_req, res) => {
  const { status, response } = await productService.getAllProductService();
  return res.status(status).json(response);
};

const getByIdProductController = async (req, res) => {
  const productId = Number(req.params.id);
  const { status, response } = await productService.getByIdProductService(productId);
  return res.status(status).json(response);
};

const addProductByName = async (req, res) => {
  const { status, response } = await productService.addProductService(req);
  return res.status(status).json(response);
};

const putProductController = async (req, res) => {
  const { status, response } = await productService.putProductService(req);
  return res.status(status).json(response);
};

module.exports = {
  getAllProductController,
  getByIdProductController,
  addProductByName,
  putProductController,
};
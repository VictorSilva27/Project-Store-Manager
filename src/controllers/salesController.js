const salesService = require('../services/salesService');

const getAllSalesController = async (_req, res) => {
  const { status, response } = await salesService.getAllSalesService();
  return res.status(status).json(response);
};

const getByIdSalesController = async (req, res) => {
  const saleId = (+req.params.id);
  const { status, response } = await salesService.getByIdSalesService(saleId);
  return res.status(status).json(response);
};

const deleteSalesController = async (req, res) => {
  const saleId = (+req.params.id);
  const { status, response } = await salesService.deleteSalesService(saleId);
  return res.status(status).json(response);
};

const postSalesController = async (req, res) => {
  const arrayBody = req.body;
  const { status, response } = await salesService.postSalesService(arrayBody);
  return res.status(status).json(response);
};

const putSalesController = async (req, res) => {
  const salesId = Number(req.params.id);
  const arrayBody = req.body;
  const { status, response } = await salesService.putSalesService(arrayBody, salesId);
  return res.status(status).json(response);
};
module.exports = {
  getByIdSalesController,
  getAllSalesController,
  deleteSalesController,
  postSalesController,
  putSalesController,
};
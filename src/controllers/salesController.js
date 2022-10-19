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

module.exports = { getByIdSalesController, getAllSalesController };
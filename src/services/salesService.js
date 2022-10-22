const salesModel = require('../models/salesModel');

const getAllSalesService = async () => {
  const result = await salesModel.getAllSalesModel();
  return { status: 200, response: result };
};

const getByIdSalesService = async (idSale) => {
  const result = await salesModel.getByIdSalesModel(idSale);
  if (result.length === 0) return { status: 404, response: { message: 'Sale not found' } };
  return { status: 200, response: result };
};

const deleteSalesService = async (idSale) => {
  const result = await salesModel.getByIdSalesModel(idSale);
  if (result.length === 0) return { status: 404, response: { message: 'Sale not found' } };
  await salesModel.deleteSalesModel(idSale);
  return { status: 204 };
};

module.exports = {
  getAllSalesService,
  getByIdSalesService,
  deleteSalesService,
};
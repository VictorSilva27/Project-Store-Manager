const salesModel = require('../models/salesModel');

// const postRegisterSalesService = async (array) => {
//   const result = await array
//     .map((item) => postRegisterSalesModel(item.productId, item.quatity));
//   console.log(result);
// };

const getAllSalesService = async () => {
  const result = await salesModel.getAllSalesModel();
  return { status: 200, response: result };
};

const getByIdSalesService = async (idSale) => {
  const result = await salesModel.getByIdSalesModel(idSale);
  if (result.length === 0) return { status: 404, response: { message: 'Sale not found' } };
  return { status: 200, response: result };
};

module.exports = { getAllSalesService, getByIdSalesService };
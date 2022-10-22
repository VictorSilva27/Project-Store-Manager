const connection = require('./connection');

// const postRegisterSalesModel = async (productId, quantity) => {
//   const [{ insertId }] = await connection.execute(
//     'INSERT INTO sales_products (product_id, quantity) VALUES (?, ?) ',
//     [productId, quantity],
//   );

//   const [result] = await connection.execute(
//     'SELECT * FROM sales WHERE id = ?',
//     [insertId],
//   );
//   return result;
// };

const getAllSalesModel = async () => {
  const [result] = await connection.execute(
    `SELECT sp.sale_id AS saleId, s.date, sp.product_id AS productId, sp.quantity
    FROM StoreManager.sales_products sp
    INNER JOIN StoreManager.sales s ON sp.sale_id = s.id
    ORDER BY sp.sale_id ASC, sp.product_id ASC`,
  );

  return result;
};

const getByIdSalesModel = async (idSale) => {
  const [result] = await connection.execute(
    `SELECT s.date, sp.product_id AS productId, sp.quantity
    FROM StoreManager.sales_products sp
    INNER JOIN StoreManager.sales s ON sp.sale_id = s.id
    WHERE sp.sale_id = ?
    ORDER BY sp.sale_id ASC, sp.product_id ASC`,
    [idSale],
  );
  return result;
};

const deleteSalesModel = async (idSale) => {
  await connection.execute(
    'DELETE FROM sales WHERE id = ?',
    [idSale],
  );
  return true;
};

module.exports = { getAllSalesModel, getByIdSalesModel, deleteSalesModel };
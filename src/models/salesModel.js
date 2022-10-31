const connection = require('./connection');

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

const postSalesModel = async (arraySales) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO sales (date) VALUES (NOW()) ',
  );
  const promises = [];
  arraySales.forEach((sale) => {
    const insertSale = connection.execute(
      `INSERT INTO StoreManager.sales_products
      (sale_id, product_id, quantity)
      VALUES (?, ?, ?)`,
      [insertId, sale.productId, sale.quantity],
    );
    promises.push(insertSale);
  });
  await Promise.all(promises);
  const res = {
    id: insertId, itemsSold: arraySales,
  };
  return res;
};

const putSalesModel = async (arraySales, saleId) => {
  await connection.execute(
    'DELETE FROM StoreManager.sales_products WHERE sale_id = ?',
    [saleId],
  );
  const promises = [];
  arraySales.forEach((sale) => {
    const insertSale = connection.execute(
      `INSERT INTO StoreManager.sales_products
      (sale_id, product_id, quantity)
      VALUES (?, ?, ?)`,
      [saleId, sale.productId, sale.quantity],
    );
    promises.push(insertSale);
  });
  await Promise.all(promises);

  const res = { saleId, itemsUpdated: arraySales };
  return res;
};

const deleteSalesModel = async (idSale) => {
  await connection.execute(
    'DELETE FROM sales WHERE id = ?',
    [idSale],
  );
  return true;
};

module.exports = {
  getAllSalesModel,
  getByIdSalesModel,
  deleteSalesModel,
  postSalesModel,
  putSalesModel,
};
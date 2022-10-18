// const connection = require('./connection');

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

// module.exports = { postRegisterSalesModel };
const connection = require('./connection');

const getAllProductModel = async () => {
  const [result] = await connection.execute('SELECT * FROM products');
  return result;
};

const getByIdProductModel = async (idProduct) => {
  const [result] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [idProduct],
  );
  return result;
};

const getByNameProductModel = async (nameProduct) => {
  const [result] = await connection.execute(
    `SELECT * FROM products WHERE name LIKE '%${nameProduct}%'`,
  );
  return result;
};

const addProductModel = async (nameProduct) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [nameProduct],
  );
  const result = await getByIdProductModel(insertId);
  return result;
};

const putProductModel = async (idProduct, nameProduct) => {
  await connection.execute(
    `UPDATE products
    SET name = ? 
    WHERE id = ?`,
    [nameProduct, idProduct],
  );
  
  const result = await getByIdProductModel(idProduct);
  return result;
};

const deleteProductModel = async (idProduct) => {
  await connection.execute(
    'DELETE FROM products WHERE id = ?',
    [idProduct],
  );
  return true;
};

module.exports = {
  getAllProductModel,
  getByIdProductModel,
  addProductModel,
  putProductModel,
  deleteProductModel,
  getByNameProductModel,
};
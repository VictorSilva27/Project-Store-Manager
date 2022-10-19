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

module.exports = {
  getAllProductModel,
  getByIdProductModel,
  addProductModel,
  putProductModel,
};
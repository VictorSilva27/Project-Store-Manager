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

module.exports = { getAllProductModel, getByIdProductModel };
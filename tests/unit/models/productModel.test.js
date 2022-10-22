const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const productModel = require('../../../src/models/productModel');

const mockProduct = require('../mock/products.mock');

describe('Testando unidade do model de products', function () {
  afterEach(() => {
    sinon.restore();
  });
  
  describe('getAllProductModel', function () {
    it('Realizando SELECT allProducts do model', async function () {
      sinon.stub(connection, 'execute').resolves([mockProduct])
      const result = await productModel.getAllProductModel();
      expect(result).to.be.deep.eq(mockProduct);
    });
  });
  
  describe('getByIdProductModel', function () {
    it('Realizando SELECT/WHERE byIdProducts do model', async function () {
      sinon.stub(connection, 'execute').resolves([mockProduct[1]])
      const result = await productModel.getByIdProductModel(2);
      expect(result).to.be.deep.eq(mockProduct[1]);
    });
  });

  describe('addProductModel', function () {
    it('Realizando INSERT do model', async function () {
      sinon.stub(connection, 'execute').resolves([{ id: 4, name: 'Victor' }]);
      sinon.stub(productModel, 'getByIdProductModel').resolves({ id: 4, name: 'Victor' });
      await productModel.addProductModel('Victor');
    });
  });

  describe('putProductModel', function () {
    it('Realizando UPDATE na tabela products', async function () {
      sinon.stub(connection, 'execute').resolves([{ id: 2, name: 'Panela de Kripton' }]);
      sinon.stub(productModel, 'getByIdProductModel').resolves({ id: 2, name: 'Panela de Kripton' });
      await productModel.putProductModel(2, 'Panela de Kripton');
    });
  });

  describe('deleteProductModel', function () {
    it('Deletando products com id', async function () {
      sinon.stub(connection, 'execute').resolves([]);
      await productModel.deleteProductModel(2);
    });
  });
  describe('getByNameProductModel', function () {
    it('Pesquisando produto pelo name', async function () {
      sinon.stub(connection, 'execute').resolves([mockProduct[1]]);
      await productModel.getByNameProductModel('Traje');
    });
  });
});
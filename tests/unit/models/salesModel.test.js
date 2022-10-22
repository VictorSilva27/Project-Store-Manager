const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const salesModel = require('../../../src/models/salesModel');

const {mockAllSales, mockByIdSales } = require('../mock/sales.mock');

describe('Testando unidade do model de products', function () {
  afterEach(() => {
    sinon.restore();
  });

  describe('getAllSalesModel', () => {
    it('Realizando SELECT getAllSalesModel do model', async function () {
      sinon.stub(connection, 'execute').resolves([mockAllSales])
      const result = await salesModel.getAllSalesModel();
      expect(result).to.be.deep.eq(mockAllSales);
    });
  });

  describe('getByIdSalesModel', () => {
    it('Realizando SELECT/WHERE getByIdSalesModel do model', async function () {
      sinon.stub(connection, 'execute').resolves([mockByIdSales[1]])
      const result = await salesModel.getByIdSalesModel(2);
      expect(result).to.be.deep.eq(mockByIdSales[1]);
    });
  });
  
  describe('deleteSalesModel', () => {
    it('Deletando uma venda pelo id', async function () {
      sinon.stub(connection, 'execute').resolves();
      await salesModel.deleteSalesModel(2);
    });
  });
});
const { expect } = require('chai');
const sinon = require('sinon');

const salesModel = require('../../../src/models/salesModel');
const salesService = require('../../../src/services/salesService');

const { mockAllSales, mockByIdSales } = require('../mock/sales.mock');

describe('Testando o Service products', function () {
  describe('getAllSalesService', function () {
    it('Buscar todos os dados de sales e sales_products', async function () {
      sinon.stub(salesModel, 'getAllSalesModel').resolves(mockAllSales);
      const result = await salesService.getAllSalesService();

      expect(result.response).to.be.eq(mockAllSales);
    });
  });
  describe('getByIdSalesService', function () {
    it('Buscando um venda pelo sale_id correto', async function () {
      sinon.stub(salesModel, 'getByIdSalesModel').resolves(mockByIdSales[1]);
      const result = await salesService.getByIdSalesService(2);

      expect(result.response).to.be.eq(mockByIdSales[1]);
    });
    it('Buscando um venda pelo sale_id errado', async function () {
      sinon.stub(salesModel, 'getByIdSalesModel').resolves([]);
      await salesService.getByIdSalesService(7);
    });
  });
  afterEach(() => {
    sinon.restore();
  });
})
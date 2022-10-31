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

  describe('deleteSalesService', function () {
    it('deletando uma venda com id valido', async function () {
      sinon.stub(salesModel, 'getByIdSalesModel').resolves(mockByIdSales[1]);
      sinon.stub(salesModel, 'deleteSalesModel').resolves();
      await salesService.deleteSalesService(2);
    });
    it('deletando uma venda com id invalido', async function () {
      sinon.stub(salesModel, 'getByIdSalesModel').resolves([]);
      sinon.stub(salesModel, 'deleteSalesModel').resolves();
      await salesService.deleteSalesService(7);
    });
  });

  describe('postSalesService', function () {
    it('Adicionando venda', async function () {
      sinon.stub(salesModel, 'postSalesModel').resolves({});
      await salesService.postSalesService([]);
    });
  });

  describe('putSalesService', function () {
    it('Atualizando venda', async function () {
      sinon.stub(salesModel, 'putSalesModel').resolves({});
      await salesService.putSalesService([]);
    });
  });

  afterEach(() => {
    sinon.restore();
  });
})
const sinon = require('sinon');
const chai = require('chai');

const { expect } = chai;
const connection = require('../../../src/models/connection');
const salesController = require('../../../src/controllers/salesController');
const salesService = require('../../../src/services/salesService');

const {mockAllSales, mockByIdSales} = require('../mock/sales.mock');

describe('Teste de controllers da rota /sales', function () {
  describe('getAllSalesController', function () {
    it('Testando para pegar todas as informações da tabela products', async function () {
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(connection, 'execute').resolves([mockAllSales]);

      await salesController.getAllSalesController({}, res);
    });

  });

  describe('getByIdSalesController', function () {

    it('Testando para pegar todas as informações de um produto', async function () {
      const req = {
        params: { id: 2 }
      };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, 'getByIdSalesService').resolves(
        {
          status: 200,
          response: mockByIdSales[1],
        }
      );
      await salesController.getByIdSalesController(req, res);
    });
  });
  afterEach(() => {
    sinon.restore();
  });

});

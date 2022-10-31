const sinon = require('sinon');
const chai = require('chai');

const { expect } = chai;
const connection = require('../../../src/models/connection');
const salesController = require('../../../src/controllers/salesController');
const salesService = require('../../../src/services/salesService');

const {mockAllSales, mockByIdSales} = require('../mock/sales.mock');

describe('Teste de controllers da rota /sales', function () {
  describe('getAllSalesController', function () {
    it('Testando para pegar todas as informações da tabela sales', async function () {
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(connection, 'execute').resolves([mockAllSales]);

      await salesController.getAllSalesController({}, res);
    });

  });

  describe('getByIdSalesController', function () {

    it('Testando para pegar todas as informações de uma venda', async function () {
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

  describe('deleteSalesController', function () {

    it('Deletando uma venda com ID correto', async function () {
      const req = {
        params: { id: 2 }
      };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, 'deleteSalesService').resolves(
        {
          status: 204,
        }
      );
      await salesController.deleteSalesController(req, res);
    });
  });

  describe('postSalesController', function () {

    it('Adicionando vendas', async function () {
      const req = {
        body: [
          {
            productId: 2,
            quantity: 122
          },
          {
            productId: 1,
            quantity: 51
          }
        ],
      };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, 'postSalesService').resolves(
        {
          status: 201,
          response: { id: 3,
          itemsSold: [
            {
              productId: 2,
              quantity: 122
            },
            {
              productId: 1,
              quantity: 51
            }
          ]
        },
        }
      );
      await salesController.postSalesController(req, res);
    });
  });

  describe('putSalesController', function () {
    it('Atulizando vendas vendas', async function () {
      const req = {
        body: [
          {
            productId: 2,
            quantity: 12
          },
          {
            productId: 1,
            quantity: 5
          }
        ],
        params: { id: 1 }
      };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, 'putSalesService').resolves(
        {
          status: 201,
          response: { saleId: 1,
            itemsUpdated: [
            {
              productId: 2,
              quantity: 122
            },
            {
              productId: 1,
              quantity: 51
            }
          ]
        },
        }
      );
      await salesController.putSalesController(req, res);
    });
  });
  afterEach(() => {
    sinon.restore();
  });

});

const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const app = require('../../../src/app');
const connection = require('../../../src/models/connection');
const productController = require('../../../src/controllers/productController');

const mockProduct = require('../mock/products.mock');

describe('Teste de controllers do products', function () {

  it('Testando para pegar todas as informações da tabela products', async function () {
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(connection, 'execute').resolves([mockProduct]);

    await productController.getAllProductController({}, res);
  });

  // it('Testando para pegar todas as informações de um produto', async function () {
  //   const response = await sinon.requests;
  //   await productController.getByIdProductController({params: { id: 2 }}, {});
  //   console.log(result);
  //   expect(response.status).to.be.equal(200);
  //   expect(response.json).to.be.equal(mockData[1]);
  // });

  afterEach(() => {
    sinon.restore();
  });

});
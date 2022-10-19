const sinon = require('sinon');
const chai = require('chai');

const { expect } = chai;
const connection = require('../../../src/models/connection');
const { getByIdProductController,
  getAllProductController,
  addProductByName,
  putProductController,
  deleteProductController,
} = require('../../../src/controllers/productController');
const productService = require('../../../src/services/productService');

const mockProduct = require('../mock/products.mock');

describe('Teste de controllers da rota /products', function () {
  describe('getAllProductController', function () {
    it('Testando para pegar todas as informações da tabela products', async function () {
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(connection, 'execute').resolves([mockProduct]);

    await getAllProductController({}, res);
    });
    
}); 

  describe('getByIdProductController', function () { 
  
    it('Testando para pegar todas as informações de um produto', async function () {
      const req = {
        params: { id: 2}
      };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'getByIdProductService').resolves(
        {
          status: 200,
          response: mockProduct[1],
        }
      );
      await getByIdProductController(req, res);
  });
  });

  describe('addProductByName', function () {

    it('Cadastrar produto com name', async function () {
      const req = {};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'addProductService').resolves({});
      await addProductByName(req, res);
    });
  });

    describe('putProductController', function () {

      it('Atualizar nome de produto com o id', async function () {
        const req = {};
        const res = {};
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        sinon.stub(productService, 'putProductService').resolves({});
        await putProductController(req, res);
      });
  });
  describe('deleteProductController', function () {

      it('Deletar produto pelo id', async function () {
        const req = {};
        const res = {};
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        sinon.stub(productService, 'deleteProductService').resolves({});
        await deleteProductController(req, res);
      });
  });

  afterEach(() => {
    sinon.restore();
  });

  });
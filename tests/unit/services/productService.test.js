const { expect } = require('chai');
const sinon = require('sinon');

const productModel = require('../../../src/models/productModel');
const productService = require('../../../src/services/productService');

const mockProduct = require('../mock/products.mock');

describe('Testando o Service products', function () {

  describe('getByIdProductModel', function () {
    it('Caso de sucesso, model retorna um elemento', async function () {
      sinon.stub(productModel, 'getByIdProductModel').resolves([mockProduct[1]]);
      const result = await productService.getByIdProductService(2);

      expect(result.response).to.be.eq(mockProduct[1]);
    });
    it('Caso de falha, model retorna um error', async function () {
      sinon.stub(productModel, 'getByIdProductModel').resolves([]);

      const result = await productService.getByIdProductService(6);
      expect(result.status).to.be.eq(404);
    });
  });

  describe('addProductService', function () {
    it('Adicionando um novo Produto', async function () {
      sinon.stub(productModel, 'addProductModel').resolves([{ id: 4, name: 'Victor' }]);
      await productService.addProductService({ body: {name: 'Victor' } });
    });
  });

  describe('putProductService', function () {
    it('Atualizar um produto', async function () {
      sinon.stub(productModel, 'putProductModel').resolves([{ id: 2, name: 'Panela de Kripton' }]);
      const mockBody = { body: { name: 'Panela de Kripton' }, params: { id: 2 } }
      await productService.putProductService(mockBody);
    });
  });

  describe('deleteProductService', function () {
    it('Deletando um Produto', async function () {
      sinon.stub(productModel, 'deleteProductModel').resolves([]);
      const mockBody = { params: { id: 2 } }
      await productService.deleteProductService(mockBody);
    });
  });

  describe('getByNameProductService', function () {
    it('Pesquisando um Produto pelo nome', async function () {
      sinon.stub(productModel, 'getByNameProductModel').resolves([mockProduct[1]]);
      await productService.getByNameProductService('Traje');
    });
  });

  afterEach(() => {
    sinon.restore();
  });
})
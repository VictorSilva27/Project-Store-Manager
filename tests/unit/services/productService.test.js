const { expect } = require('chai');
const sinon = require('sinon');

const productModel = require('../../../src/models/productModel');
const productService = require('../../../src/services/productService');

const mockProduct = require('../mock/products.mock');

describe('Testando o Service products', function () {
  it('Caso de sucesso, model retorna um array de com um elemento', async function () {
    sinon.stub(productModel, 'getByIdProductModel').resolves(mockProduct[1]);

    const result = await productService.getByIdProductService(2);

    expect(result).to.be.eq(mockProduct[1]);
    expect(result).to.be.a('array');
  })
})
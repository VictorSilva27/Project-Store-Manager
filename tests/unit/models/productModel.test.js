const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const productModel = require('../../../src/models/productModel');

const mockProduct = require('../mock/products.mock');

describe('Testando unidade do model de products', function () {
  afterEach(() => {
    sinon.restore();
  });
  it('Realizando SELECT allProducts do model', async function () {
    sinon.stub(connection, 'execute').resolves([mockProduct])
    const result = await productModel.getAllProductModel();
    expect(result).to.be.deep.eq(mockProduct);
  });
  it('Realizando SELECT/WHERE byIdProducts do model', async function () {
    sinon.stub(connection, 'execute').resolves([mockProduct[1]])
    const result = await productModel.getByIdProductModel(2);
    expect(result).to.be.deep.eq(mockProduct[1]);
  });
})
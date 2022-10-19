const mockAllSales = [
  {
    "saleId": 1,
    "date": "2021-09-09T04:54:29.000Z",
    "productId": 1,
    "quantity": 2
  },
  {
    "saleId": 2,
    "date": "2021-09-09T04:54:54.000Z",
    "productId": 2,
    "quantity": 21
  },
  {
    "saleId": 2,
    "date": "2021-09-09T04:54:54.000Z",
    "productId": 1,
    "quantity": 4
  }
];

const mockByIdSales = [
  {
    "date": "2021-09-09T04:54:29.000Z",
    "productId": 1,
    "quantity": 2
  },
  {
    "date": "2021-09-09T04:54:54.000Z",
    "productId": 2,
    "quantity": 21
  },
  {
    "date": "2021-09-09T04:54:54.000Z",
    "productId": 1,
    "quantity": 4
  }
];

module.exports = { mockAllSales, mockByIdSales };
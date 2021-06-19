const sumAllObjectsPricesInArray = (array) =>
  array.reduce((a, b) => +a + +b.price.selling_price, 0);

export { sumAllObjectsPricesInArray };

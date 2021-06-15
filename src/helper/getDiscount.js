const getDiscount = (newPrice, oldPrice) => {
  const discountPrice = (newPrice * 100) / oldPrice;
  const percentage = 100 - discountPrice;
  const roundPrice = Math.round(percentage);
  return roundPrice;
};

export { getDiscount };

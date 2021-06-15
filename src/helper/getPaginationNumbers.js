const getPaginationNumbers = (totalPagesNumbers) =>
  Array.from({ length: totalPagesNumbers }, (_, i) => i + 1);

export { getPaginationNumbers };

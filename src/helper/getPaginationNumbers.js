const getPaginationNumbers = (totalPages) =>
  Array.from({ length: totalPages }, (_, i) => i + 1);

export { getPaginationNumbers };

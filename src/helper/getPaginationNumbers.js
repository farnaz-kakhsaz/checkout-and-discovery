const getPaginationNumbers = (totalPages) => {
  console.log("totalPages", totalPages);
  const newArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  return newArray;
};

export { getPaginationNumbers };

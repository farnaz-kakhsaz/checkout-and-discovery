const removeObjectFromArray = (array, id) =>
  array.filter((item) => item.id !== id);

export { removeObjectFromArray };

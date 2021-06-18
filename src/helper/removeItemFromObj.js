const removeItemFromObj = (obj, id) => {
  delete obj[id];
  return obj;
};

export { removeItemFromObj };

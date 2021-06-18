const findObjectByIdInArray = (array, id) =>
  array?.find((item) => item.id === id)?.id;

export { findObjectByIdInArray };

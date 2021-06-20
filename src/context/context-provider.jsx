import { createContext, useState, useMemo } from "react";
import { getProductsListPage } from "../services/handleResponse";

const Context = createContext();

const initialState = {
  isLoading: true,
  isModalOpen: false,
  currentPageNumber: 1,
  selectedCardsList:
    JSON.parse(localStorage.getItem("selectedCardsList")) || [],
  addedProductsToCartList: [],
  getProductsListPage: (pageNumber) => getProductsListPage(pageNumber),
};

const ContextProvider = ({ children }) => {
  const [value, setValue] = useState(initialState);
  const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
};

export { Context };
export default ContextProvider;

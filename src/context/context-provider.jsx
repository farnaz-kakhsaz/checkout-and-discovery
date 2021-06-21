import { createContext, useState, useMemo } from "react";
import {
  getProductsListPage,
  getProductDetailsPage,
} from "../services/handleResponse";

const Context = createContext();

const initialState = {
  isLoading: true,
  isModalOpen: false,
  currentPageNumber: 1,
  totalPagesNumber: 0,
  searchKeyword: "",
  selectedCardsList:
    JSON.parse(localStorage.getItem("selectedCardsList")) || [],
  addedProductsToCartList: [],
  productListPage: {},
  productDetailsPage: {},
  getProductsListPage: (pageNumber, searchKeyword) =>
    getProductsListPage(pageNumber, searchKeyword),
  getProductDetailsPage: (id) => getProductDetailsPage(id),
};

const ContextProvider = ({ children }) => {
  const [value, setValue] = useState(initialState);
  const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
};

export { Context };
export default ContextProvider;

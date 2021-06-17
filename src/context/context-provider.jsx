import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router";

import { getProductsListPage } from "../services/handleResponse";

const Context = createContext();

const initialState = {
  currentPageNumber: 1,
  isLoading: true,
  cartProductsList: [],
  productsListPage: [],
  getProductsListPage: (pageNumber) => getProductsListPage(pageNumber),
};

const ContextProvider = ({ children }) => {
  const [value, setValue] = useState(initialState);
  const history = useHistory();

  useEffect(() => {
    // Update URL
    console.log("yeds");
    history.push(`/page=${value.currentPageNumber}`);
  }, [history, value]);
  console.log("procider section");
  return (
    <Context.Provider value={{ value, setValue }}>{children}</Context.Provider>
  );
};

export { Context };
export default ContextProvider;

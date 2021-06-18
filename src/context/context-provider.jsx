import { createContext, useEffect, useState, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { getProductsListPage } from "../services/handleResponse";

const Context = createContext();

const initialState = {
  isLoading: true,
  selectedCardsObj: {},
  addedProductsToCartList: [],
  getProductsListPage: (pageNumber) => getProductsListPage(pageNumber),
};

const ContextProvider = ({ children }) => {
  const [value, setValue] = useState(initialState);
  const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);

  const history = useHistory();
  useEffect(() => history.push(`/page=1`), []);

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
};

export { Context };
export default ContextProvider;

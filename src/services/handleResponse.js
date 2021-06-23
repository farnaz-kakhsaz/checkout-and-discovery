const getProductsListPage = async (pageNumber, searchKeyword) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL_PRODUCTS_LIST_PAGE}?page=${pageNumber}&rows=20&price[min]=0&price[max]=100000&has_selling_stock=1&sort=4&q=${searchKeyword}`,
      {
        headers: {
          token: process.env.REACT_APP_TOKEN,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    localStorage.setItem("data", JSON.stringify(data));

    return data;
  } catch (error) {
    console.error(
      `There has been a problem with your fetch operation: ${error.message}`
    );
  }
};

const getProductDetailsPage = async (productId) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_HEROKU}${process.env.REACT_APP_SERVER_URL_PRODUCT_DETAILS_PAGE}${productId}`,
      {
        headers: {
          token: process.env.REACT_APP_TOKEN,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      `There has been a problem with your fetch operation: ${error.message}`
    );
  }
};

export { getProductsListPage, getProductDetailsPage };

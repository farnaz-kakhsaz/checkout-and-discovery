async function getPLP() {
  try {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.digikala.com/front-end/search/?page=2&rows=25&price[min]=0&price[max]=100000&has_selling_stock=1&sort=4&q=سیب",
      {
        headers: {
          token: "mpfKW9ghVTCSuBZ7qTkSmEyvL38ShZxv",
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
}

async function getPDP() {
  try {
    const response = await fetch(
      "https://www.digikala.com/front-end/product/{productId}",
      {
        headers: {
          token: "mpfKW9ghVTCSuBZ7qTkSmEyvL38ShZxv",
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
}

export { getPLP, getPDP };

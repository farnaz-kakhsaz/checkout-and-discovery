import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
// Functions
import { Context } from "../../context/context-provider";
import { getDiscount } from "../../helper/getDiscount";
import { getNumberFromString } from "../../helper/getNumberFromString";
import { getPaginationNumbers } from "../../helper/getPaginationNumbers";
// Components
import Card from "../../components/card/card.compenent";
import Pagination from "../../components/pagination/pagination-container.component";
import Spinner from "../../components/spinner/spinner.component";
// CSS
import "./home-page.styles.css";

export default function HomePage() {
  const { pageNumberURL } = useParams();
  const { value, setValue } = useContext(Context);
  const [productList, setProductList] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState();
  // getNumberFromString(pageNumberURL)
  const [totalPagesNumbers, setTotalPagesNumbers] = useState(0);

  useEffect(() => {
    console.log("Me", value);
    console.log("Me", setValue);
    setValue((prevValue) => ({ ...prevValue, isLoading: true }));
    value
      .getProductsListPage(getNumberFromString(pageNumberURL))
      .then((data) => {
        setProductList(data?.data);
        setTotalPagesNumbers(data?.data?.pager.total_pages);
        setValue((prevValue) => ({ ...prevValue, isLoading: false }));
      })
      .catch((error) =>
        setValue((prevValue) => ({ ...prevValue, isLoading: false }))
      );
  }, [pageNumberURL]);

  const handlePaginationClick = (newPageNumber) => {
    setCurrentPageNumber(newPageNumber);
  };

  console.log("productList: ", productList);

  return (
    <div className="home-page-container">
      {!value.isLoading ? (
        <>
          <div className="home-page-card-container">
            {productList?.products?.map((item) => (
              <Card
                key={item.id}
                discount={getDiscount(
                  item?.price.selling_price,
                  item?.price.rrp_price
                )}
                {...item}
              />
            ))}
          </div>
          <Pagination
            currentPageNumber={value.currentPageNumber}
            paginationNumbers={getPaginationNumbers(totalPagesNumbers)}
            handlePaginationClick={handlePaginationClick}
          />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
// Functions
import { getPLP } from "../services/handleResponse";
import { getDiscount } from "../helper/getDiscount";
import { getNumberFromString } from "../helper/getNumberFromString";
import { getPaginationNumbers } from "../helper/getPaginationNumbers";
// Components
import Card from "../components/card/card.compenent";
import Pagination from "../components/pagination/pagination-container.component";
import Spinner from "../components/spinner/spinner.component";
// CSS
import "./home-page.styles.css";

export default function HomePage() {
  const history = useHistory();
  const { pageNumberURL } = useParams();
  const [productList, setProductList] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(
    getNumberFromString(pageNumberURL)
  );
  const [totalPagesNumbers, setTotalPagesNumbers] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    updateURL(currentPageNumber);
    setIsLoading(true);
    getPLP(currentPageNumber)
      .then((data) => {
        setProductList(data?.data);
        setTotalPagesNumbers(data?.data?.pager.total_pages);
        setIsLoading(false);
      })
      .catch((error) => setIsLoading(false));
  }, [currentPageNumber]);

  const handlePaginationClick = (newPageNumber) => {
    setCurrentPageNumber(newPageNumber);
  };

  const updateURL = (pageNumber) => {
    history.push(`/page=${pageNumber}`);
  };

  console.log("productList: ", productList);

  return (
    <div className="home-page-container">
      {!isLoading ? (
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
            currentPageNumber={currentPageNumber}
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

import { useEffect, useState } from "react";
import { useParams } from "react-router";
// Functions
import { getPLP } from "../services/handleResponse";
import { getDiscount } from "../helper/getDiscount";
import { getPaginationNumbers } from "../helper/getPaginationNumbers";
// Components
import Card from "../components/card/card.compenent";
import Pagination from "../components/pagination/pagination-container.component";
// Images
import SpinnerIcon from "../assets/images/icon-spinner.gif";
// CSS
import "./home-page.styles.css";

export default function HomePage() {
  const [productList, setProductList] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [totalPagesNumbers, setTotalPagesNumbers] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  // const [pageNumber, setPageNumber] = useState(false);

  const { pageNumber } = useParams();
  console.log("pageNumber: ", pageNumber);

  useEffect(() => {
    setIsLoading(true);
    getPLP(currentPageNumber)
      .then((data) => {
        setProductList(data?.data);
        setTotalPagesNumbers(data?.data?.pager.total_pages);
        setIsLoading(false);
      })
      .catch((error) => setIsLoading(false));
    // setProductList(JSON.parse(localStorage.getItem("data")));
  }, [currentPageNumber]);

  const handlePaginationClick = (newPageNumber) => {
    setCurrentPageNumber(newPageNumber);
  };

  console.log("productList: ", productList);

  return (
    <div className="home-page-container">
      <div className="home-page-card-container">
        {!isLoading ? (
          <>
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
            <Pagination
              currentPageNumber={currentPageNumber}
              paginationNumbers={getPaginationNumbers(totalPagesNumbers)}
              handlePaginationClick={handlePaginationClick}
            />
          </>
        ) : (
          <img className="spinner" src={SpinnerIcon} alt="spinner" />
        )}
      </div>
    </div>
  );
}

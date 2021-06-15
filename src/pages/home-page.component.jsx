import { useEffect, useState } from "react";
// Functions
import { getPLP } from "../services/handleResponse";
import { getDiscount } from "../helper/getDiscount";
import { getPaginationNumbers } from "../helper/getPaginationNumbers";
// Components
import Card from "../components/card/card.compenent";
import Pagination from "../components/pagination/pagination-container.component";
// CSS
import "./home-page.styles.css";

export default function HomePage() {
  const [productList, setProductList] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(4);
  const [totalPagesNumbers, setTotalPagesNumbers] = useState(1);

  useEffect(() => {
    getPLP(currentPageNumber).then((data) => {
      setProductList(data?.data);
      setTotalPagesNumbers(data?.data?.pager.total_pages);
    });
    // setProductList(JSON.parse(localStorage.getItem("data")));
  }, [currentPageNumber]);

  const handlePaginationClick = (newPageNumber) => {
    setCurrentPageNumber(newPageNumber);
  };

  console.log("productList: ", productList);

  return (
    <div className="home-page-container">
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
        paginationNumbers={getPaginationNumbers(totalPagesNumbers)}
        handlePaginationClick={handlePaginationClick}
      />
    </div>
  );
}

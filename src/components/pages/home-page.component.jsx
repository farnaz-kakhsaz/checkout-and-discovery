import { useEffect, useState } from "react";
import { getPLP } from "../../services/handleResponse";
import { getPaginationNumbers } from "../../helper/getPaginationNumbers";
// Components
import Card from "../card/card.compenent";
import Pagination from "../pagination/pagination.components";
// CSS
import "./home-page.styles.css";

export default function HomePage() {
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  console.log("me", currentPage);

  useEffect(() => {
    getPLP(currentPage).then((data) => {
      setProductList(data?.data);
      setTotalPages(data?.data?.pager.total_pages);
    });
    // setProductList(JSON.parse(localStorage.getItem("data")));
  }, [currentPage]);
  console.log("productList: ", productList);
  console.log("getPaginationNumbers: ", getPaginationNumbers(totalPages));

  return (
    <div className="home-page-container">
      <div className="home-page-card-container">
        {productList?.products?.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

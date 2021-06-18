import { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
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
  const history = useHistory();
  const { urlPageNumber } = useParams();
  const { value, setValue } = useContext(Context);

  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [productPageList, setProductPageList] = useState([]);
  const [totalPagesNumbers, setTotalPagesNumbers] = useState(0);

  useEffect(() => {
    const getUrlPageNumber = getNumberFromString(urlPageNumber);
    setCurrentPageNumber(getUrlPageNumber);

    setValue((prevValue) => ({ ...prevValue, isLoading: true }));

    value
      .getProductsListPage(currentPageNumber)
      .then((data) => {
        setProductPageList(data?.data);
        setTotalPagesNumbers(data?.data?.pager.total_pages);
        setValue((prevValue) => ({ ...prevValue, isLoading: false }));
      })
      .catch((error) => {
        setValue((prevValue) => ({ ...prevValue, isLoading: false }));
      });
  }, [currentPageNumber]);

  const handlePaginationClick = (newPageNumber) => {
    setCurrentPageNumber(newPageNumber);
    history.push(`/page=${newPageNumber}`);
  };

  console.log("productList: ", productPageList);

  return (
    <div className="home-page-container">
      {!value.isLoading ? (
        <>
          <div className="home-page-card-container">
            {productPageList?.products?.map((item) => (
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

import { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
// Functions
import { Context } from "../../context/context-provider";
import { getNumberFromString } from "../../helper/getNumberFromString";
import { getPaginationNumbers } from "../../helper/getPaginationNumbers";
// Components
import CardContainer from "../../components/card/card-container.component";
import Pagination from "../../components/pagination/pagination-container.component";
import SpinnerIcon from "../../components/spinner-icon/spinner-icon.component";
// CSS
import "./home-page.styles.css";

export default function HomePage() {
  const history = useHistory();
  const { value, setValue } = useContext(Context);
  const { urlPageNumber } = useParams();
  const getUrlPageNumber = getNumberFromString(urlPageNumber);
  const [productPageList, setProductPageList] = useState({});
  const [totalPagesNumbers, setTotalPagesNumbers] = useState(0);

  useEffect(() => {
    if (!getUrlPageNumber) history.push(`/page=1`);
    setValue((prevValue) => ({
      ...prevValue,
      currentPageNumber: getUrlPageNumber || 1,
    }));
  }, []);

  useEffect(() => {
    setValue((prevValue) => ({ ...prevValue, isLoading: true }));
    value
      .getProductsListPage(getUrlPageNumber || 1)
      .then((data) => {
        setProductPageList(data?.data);
        setTotalPagesNumbers(data?.data?.pager.total_pages);
        setValue((prevValue) => ({
          ...prevValue,
          isLoading: false,
        }));
      })
      .catch((error) => {
        setValue((prevValue) => ({ ...prevValue, isLoading: false }));
      });
  }, [value.currentPageNumber]);

  const handlePaginationClick = (newPageNumber) => {
    setValue((prevValue) => ({
      ...prevValue,
      currentPageNumber: newPageNumber,
    }));

    history.push(`/page=${newPageNumber}`);
  };

  return (
    <div className="home-page-container">
      {!value.isLoading ? (
        <>
          <CardContainer productPageList={productPageList} />
          <Pagination
            currentPageNumber={value.currentPageNumber}
            paginationNumbers={getPaginationNumbers(totalPagesNumbers)}
            handlePaginationClick={handlePaginationClick}
          />
        </>
      ) : (
        <SpinnerIcon />
      )}
    </div>
  );
}

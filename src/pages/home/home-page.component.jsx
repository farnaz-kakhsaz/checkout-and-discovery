import { useEffect, useContext } from "react";
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
  const { urlPageNumber } = useParams();
  const getUrlPageNumber = getNumberFromString(urlPageNumber);
  const { value, setValue } = useContext(Context);

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
      .then((data) =>
        setValue((prevValue) => ({
          ...prevValue,
          totalPagesNumber: data?.data?.pager.total_pages,
          productListPage: data?.data,
          isLoading: false,
        }))
      )
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
          <CardContainer productListPage={value.productListPage} />
          <Pagination
            currentPageNumber={value.currentPageNumber}
            paginationNumbers={getPaginationNumbers(value.totalPagesNumber)}
            handlePaginationClick={handlePaginationClick}
          />
        </>
      ) : (
        <SpinnerIcon />
      )}
    </div>
  );
}

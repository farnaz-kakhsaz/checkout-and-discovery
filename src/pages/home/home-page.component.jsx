import { useEffect, useContext } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
// Functions
import { Context } from "../../context/context-provider";
import { getSpecificStringFromString } from "../../helper/getSpecificStringFromString";
import { getPaginationNumbers } from "../../helper/getPaginationNumbers";
// Components
import CardContainer from "../../components/card/card-container.component";
import Pagination from "../../components/pagination/pagination-container.component";
import SpinnerIcon from "../../components/spinner-icon/spinner-icon.component";
// Images
import { ReactComponent as DeadEmojiIcon } from "../../assets/images/icon-dead-emoji.svg";

// CSS
import "./home-page.styles.css";

export default function HomePage() {
  const history = useHistory();
  const location = useLocation();
  const { urlPageNumber } = useParams();
  const { urlQuery } = useParams();
  const getUrlPageNumber = Number(
    getSpecificStringFromString(urlPageNumber, "page=")
  );
  const getUrlQuery = getSpecificStringFromString(urlQuery, "q=");
  const { value, setValue } = useContext(Context);

  useEffect(() => {
    if (!getUrlPageNumber) history.push("/page=1/q=سیب");
    setValue((prevValue) => ({
      ...prevValue,
      currentPageNumber: getUrlPageNumber || 1,
    }));
  }, []);

  useEffect(() => {
    if (value.currentPageNumber) {
      setValue((prevValue) => ({ ...prevValue, isLoading: true }));
      value
        .getProductsListPage(
          getUrlPageNumber || 1,
          value.searchKeyword || getUrlQuery || "سیب"
        )
        .then((data) =>
          setValue((prevValue) => ({
            ...prevValue,
            totalPagesNumber: data?.data?.pager.total_pages,
            productListPage: data?.data,
            currentPageNumber: getUrlPageNumber || 1,
            isLoading: false,
          }))
        )
        .catch((error) => {
          setValue((prevValue) => ({ ...prevValue, isLoading: false }));
        });
    }
  }, [value.currentPageNumber, location.pathname]);

  const handlePaginationClick = (newPageNumber, disabledClick) => (event) => {
    if (!disabledClick) {
      setValue((prevValue) => ({
        ...prevValue,
        currentPageNumber: newPageNumber,
      }));

      history.push(
        `/page=${newPageNumber}/q=${
          value.searchKeyword || getUrlQuery || "سیب"
        }`
      );
    }
  };

  return (
    <div className="home-page-container">
      {!value.isLoading ? (
        value.currentPageNumber <= 20 ? (
          value.productListPage?.products?.length > 0 ? (
            <>
              <CardContainer productListPage={value.productListPage} />
              <Pagination
                currentPageNumber={value.currentPageNumber}
                paginationNumbers={getPaginationNumbers(value.totalPagesNumber)}
                handlePaginationClick={handlePaginationClick}
              />
            </>
          ) : (
            <DeadEmojiIcon className="home-page-dead-emoji-icon" />
          )
        ) : (
          <div className="home-page-limited-number">
            بیشترین مقدار عددی برای صفحه 20 می باشد.
          </div>
        )
      ) : (
        <SpinnerIcon />
      )}
    </div>
  );
}

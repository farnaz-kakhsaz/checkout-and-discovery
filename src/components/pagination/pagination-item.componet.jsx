import PropTypes from "prop-types";
import clsx from "clsx";
// CSS
import "./pagination-item.styles.css";

export default function PaginationItem({
  currentPageNumber,
  pageNumber,
  handlePaginationClick,
}) {
  console.log("me", currentPageNumber === pageNumber);

  return (
    <button
      className={clsx("pagination-item", {
        "pagination-item-selected": currentPageNumber === pageNumber,
      })}
      key={pageNumber}
      onClick={() => handlePaginationClick(pageNumber)}
    >
      {pageNumber}
    </button>
  );
}

PaginationItem.propTypes = {
  currentPageNumber: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  handlePaginationClick: PropTypes.func.isRequired,
};

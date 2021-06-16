import PropTypes from "prop-types";
// CSS
import "./pagination-item.styles.css";

export default function PaginationItem({
  currentPageNumber,
  pageNumber,
  handlePaginationClick,
}) {
  return (
    <button
      className="pagination-item"
      key={pageNumber}
      onClick={() => handlePaginationClick(pageNumber)}
      style={{
        backgroundColor:
          currentPageNumber === pageNumber ? "#30c9e8" : "#9b97b5",
      }}
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

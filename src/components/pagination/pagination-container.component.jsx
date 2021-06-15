import PropTypes from "prop-types";
// Components
import PaginationItem from "./pagination-item.componet";
// CSS
import "./pagination-container.styles.css";

export default function Pagination({
  currentPageNumber,
  paginationNumbers,
  handlePaginationClick,
}) {
  return (
    <div className="pagination-container">
      {paginationNumbers.map((pageNumber) => (
        <PaginationItem
          currentPageNumber={currentPageNumber}
          pageNumber={pageNumber}
          handlePaginationClick={handlePaginationClick}
          key={pageNumber}
        />
      ))}
    </div>
  );
}

Pagination.propTypes = {
  currentPageNumber: PropTypes.number.isRequired,
  paginationNumbers: PropTypes.array.isRequired,
  handlePaginationClick: PropTypes.func.isRequired,
};

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
      <PaginationItem
        paginationNumbers={paginationNumbers}
        currentPageNumber={currentPageNumber}
        handlePaginationClick={handlePaginationClick}
      />
    </div>
  );
}

Pagination.propTypes = {
  currentPageNumber: PropTypes.number.isRequired,
  paginationNumbers: PropTypes.array.isRequired,
  handlePaginationClick: PropTypes.func.isRequired,
};

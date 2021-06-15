import PropTypes from "prop-types";
// Components
import PaginationItem from "./pagination-item.componet";
// CSS
import "./pagination-container.styles.css";

export default function Pagination({
  paginationNumbers,
  handlePaginationClick,
}) {
  return (
    <div className="pagination-container">
      {paginationNumbers.map((item) => (
        <PaginationItem
          item={item}
          handlePaginationClick={handlePaginationClick}
          key={item}
        />
      ))}
    </div>
  );
}

Pagination.propTypes = {
  paginationNumbers: PropTypes.array.isRequired,
  handlePaginationClick: PropTypes.func.isRequired,
};

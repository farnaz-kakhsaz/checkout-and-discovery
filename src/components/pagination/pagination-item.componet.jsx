import PropTypes from "prop-types";
// CSS
import "./pagination-item.styles.css";

export default function PaginationItem({ item, handlePaginationClick }) {
  return (
    <button
      className="pagination-item"
      key={item}
      onClick={() => handlePaginationClick(item)}
    >
      {item}
    </button>
  );
}

PaginationItem.propTypes = {
  item: PropTypes.number.isRequired,
  handlePaginationClick: PropTypes.func.isRequired,
};

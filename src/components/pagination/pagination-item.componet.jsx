import PropTypes from "prop-types";
// CSS
import "./pagination-item.styles.css";

export default function PaginationItem({ item }) {
  return (
    <button className="pagination-item" key={item}>
      {item}
    </button>
  );
}

PaginationItem.propTypes = {
  item: PropTypes.number.isRequired,
};

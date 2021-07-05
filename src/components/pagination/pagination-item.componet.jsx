import PropTypes from "prop-types";
import clsx from "clsx";
// CSS
import "./pagination-item.styles.css";

export default function PaginationItem({
  currentPageNumber,
  paginationNumbers,
  handlePaginationClick,
}) {
  return (
    <>
      <button
        className={clsx("pagination-item", {
          "pagination-item-disabled": currentPageNumber <= 1,
        })}
        onClick={handlePaginationClick(
          currentPageNumber - 1,
          currentPageNumber <= 1
        )}
      >
        &lt;
      </button>
      {currentPageNumber > 1 && (
        <button
          className="pagination-item"
          onClick={handlePaginationClick(currentPageNumber - 1)}
        >
          {currentPageNumber - 1}
        </button>
      )}
      <button className={clsx("pagination-item", "pagination-item-selected")}>
        {currentPageNumber}
      </button>
      {paginationNumbers.length !== currentPageNumber && (
        <button
          className="pagination-item"
          onClick={handlePaginationClick(currentPageNumber + 1)}
        >
          {currentPageNumber + 1}
        </button>
      )}
      <button
        className={clsx("pagination-item", {
          "pagination-item-disabled":
            paginationNumbers.length === currentPageNumber,
        })}
        onClick={handlePaginationClick(
          currentPageNumber + 1,
          paginationNumbers.length === currentPageNumber
        )}
      >
        &gt;
      </button>
    </>
  );
}

PaginationItem.propTypes = {
  paginationNumbers: PropTypes.array.isRequired,
  currentPageNumber: PropTypes.number.isRequired,
  handlePaginationClick: PropTypes.func.isRequired,
};

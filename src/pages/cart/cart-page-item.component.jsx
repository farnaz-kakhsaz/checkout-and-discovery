import PropTypes from "prop-types";
// Images
import { ReactComponent as DeleteIcon } from "../../assets/images/icon-delete.svg";
// CSS
import "./cart-page-item.styles.css";

export default function CartPageItem({
  id,
  images,
  title,
  rating,
  price,
  discount,
  handleRemoveFromCartClick,
}) {
  return (
    <div className="cart-page-item">
      <div
        className="cart-page-item-delete-icon-container"
        onClick={handleRemoveFromCartClick(id)}
      >
        <DeleteIcon className="cart-page-item-delete-icon" />
      </div>
      <h5 className="cart-page-item-title">{title}</h5>
      <img className="cart-page-item-image" src={images.main} alt={title} />
    </div>
  );
}

CartPageItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.object.isRequired,
  rating: PropTypes.object.isRequired,
  price: PropTypes.object.isRequired,
  discount: PropTypes.number.isRequired,
  handleRemoveFromCartClick: PropTypes.func.isRequired,
};

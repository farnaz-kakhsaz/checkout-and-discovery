import PropTypes from "prop-types";
// Images
import { ReactComponent as DeleteIcon } from "../../assets/images/icon-delete.svg";
// CSS
import "./modal-item.styles.css";

export default function ModalItem({
  id,
  images,
  title,
  rating,
  price,
  discount,
  handleRemoveFromCartClick,
}) {
  return (
    <div className="modal-item">
      <div
        className="modal-item-delete-icon-container"
        onClick={handleRemoveFromCartClick(id)}
      >
        <DeleteIcon className="modal-item-delete-icon" />
      </div>
      <h5 className="modal-item-title">{title}</h5>
      <img className="modal-item-image" src={images.main} alt={title} />
    </div>
  );
}

ModalItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.object.isRequired,
  rating: PropTypes.object,
  price: PropTypes.object,
  discount: PropTypes.number,
  handleRemoveFromCartClick: PropTypes.func.isRequired,
};

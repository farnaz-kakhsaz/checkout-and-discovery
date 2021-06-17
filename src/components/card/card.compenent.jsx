import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
// Images
import { ReactComponent as InfoIcon } from "../../assets/images/icon-info.svg";
import { ReactComponent as StarIcon } from "../../assets/images/icon-star.svg";
import { ReactComponent as DeadEmojiIcon } from "../../assets/images/icon-dead-emoji.svg";
import { ReactComponent as ShoppingCartIcon } from "../../assets/images/icon-shopping-cart.svg";
import { ReactComponent as DoneIcon } from "../../assets/images/icon-done.svg";
import { ReactComponent as ClearIcon } from "../../assets/images/icon-clear.svg";
// CSS
import "./card.styles.css";

export default function Card({ id, images, title, rating, price, discount }) {
  const [clicked, setClicked] = useState(false);

  const handleAddToCartClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="card-container" key={id}>
      <div className="card-image-container">
        <div className="card-images">
          <img src={images.main} alt={title}></img>
          <img src={images.main} alt={title}></img>
        </div>
        <div className="info-icon-container">
          <InfoIcon className="info-icon" />
          <div className="info-icon-content">
            {rating.count !== 0 && rating.count ? (
              <>
                <StarIcon />
                <div className="rate">{rating.rate}</div>
                <div className="count">({rating.count})</div>
              </>
            ) : (
              price.selling_price === price.rrp_price && (
                <DeadEmojiIcon className="dead-emoji-icon" />
              )
            )}
            {price.selling_price !== price.rrp_price && (
              <p className="discount">
                <span className="discount-percent">%{discount}</span>
                تخفیف شما از این خرید!
              </p>
            )}
          </div>
        </div>
      </div>
      <div
        className={clsx("card-footer-container", {
          "card-footer-clicked": clicked,
        })}
      >
        <div className="card-footer-container-left">
          <div className="details-container">
            <h4 className="card-title-left">{title}</h4>
            <div className="price-container">
              <p className="price-toman">تومان</p>
              <p className="price-new">{price.selling_price}</p>
              {price.selling_price !== price.rrp_price && (
                <p className="price-old">{price.rrp_price}</p>
              )}
            </div>
          </div>
          <button
            className="shopping-cart-icon-container"
            onClick={handleAddToCartClick}
          >
            <ShoppingCartIcon className="shopping-cart-icon" />
          </button>
        </div>
        <div className="card-footer-container-right">
          <div className="done-section-container">
            <button className="done-icon-container">
              <DoneIcon className="done-icon" />
            </button>
            <div className="details-container">
              <h4 className="card-title-right">{title}</h4>
              <p className="added-to-cart-text">به سبد خرید اضافه شد.</p>
            </div>
          </div>
          <button
            className="clear-icon-container"
            onClick={handleAddToCartClick}
          >
            <ClearIcon className="clear-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  images: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.object.isRequired,
  price: PropTypes.object.isRequired,
  discount: PropTypes.number.isRequired,
};

import { ReactComponent as InfoIcon } from "../../assets/images/icon-info.svg";
import "./card.styles.css";

export default function Card({ id, images, title, rating, price }) {
  return (
    <div className="card-container" key={id}>
      <div className="card-image-container">
        <div className="card-images">
          <img src={images.main} alt={title}></img>
          <img src={images.main} alt={title}></img>
        </div>
        <div className="info-icon-container">
          <div className="info-icon">
            <InfoIcon />
          </div>
          <div className="info-icon-content">
            <div>{rating.rate}</div>
            <div>{rating.count}</div>
          </div>
        </div>
      </div>
      <div>{title}</div>
      {price.selling_price !== price.rrp_price && <div>{price.rrp_price}</div>}
      <div>{price.selling_price}</div>
    </div>
  );
}

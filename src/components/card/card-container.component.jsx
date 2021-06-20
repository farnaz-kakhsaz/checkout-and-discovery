import PropTypes from "prop-types";
// Component
import CardItem from "./card-item.component";
import { getDiscount } from "../../helper/getDiscount";
// CSS
import "./card-container.styles.css";

export default function CardContainer({ productListPage }) {
  return (
    <div className="card-container">
      {productListPage?.products?.map((item) => (
        <CardItem
          key={item.id}
          discount={getDiscount(
            item?.price.selling_price,
            item?.price.rrp_price
          )}
          {...item}
        />
      ))}
    </div>
  );
}

CardContainer.propTypes = {
  productListPage: PropTypes.object.isRequired,
};

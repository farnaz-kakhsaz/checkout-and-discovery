import CardItem from "./card-item.component";
import { getDiscount } from "../../helper/getDiscount";
// CSS
import "./card-container.styles.css";

export default function CardContainer({ productPageList }) {
  return (
    <div className="card-container">
      {productPageList?.products?.map((item) => (
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

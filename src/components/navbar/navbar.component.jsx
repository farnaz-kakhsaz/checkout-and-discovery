import Basket from "../basket/basket.component";
import { useContext } from "react";
import { Context } from "../../context/context-provider";
// CSS
import "./navbar.styles.css";

export default function Navbar() {
  const { value, setValue } = useContext(Context);
  console.log(value.selectedCardsList.length);
  return (
    <div className="navbar">
      <div className="basket-and-nember-container">
        <Basket />
        {value.selectedCardsList.length !== 0 && (
          <div className="added-to-cart-product-number">
            {value.selectedCardsList.length}
          </div>
        )}
      </div>
    </div>
  );
}

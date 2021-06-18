import Basket from "../basket/basket.component";
import { useContext } from "react";
import { Context } from "../../context/context-provider";
// CSS
import "./navbar.styles.css";

export default function Navbar() {
  const { value, setValue } = useContext(Context);
  console.log(value.selectedCardsObj.length);
  return (
    <div className="navbar">
      <div className="basket-and-nember-container">
        <Basket />
        {Object.keys(value.selectedCardsObj).length !== 0 && (
          <div className="added-to-cart-product-number">
            {Object.keys(value.selectedCardsObj).length}
          </div>
        )}
      </div>
    </div>
  );
}

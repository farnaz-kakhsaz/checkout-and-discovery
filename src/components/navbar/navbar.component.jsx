import { useContext, useState } from "react";
import { Context } from "../../context/context-provider";
// Components
import Basket from "../basket/basket.component";
import ModalContainer from "../modal/modal-container.component";
// CSS
import "./navbar.styles.css";

export default function Navbar() {
  const [isModalOpen, setIsModalOpern] = useState(false);
  const { value, setValue } = useContext(Context);

  const handleModalClick = (isModalOpen) => (event) => {
    setIsModalOpern(!isModalOpen);
  };

  return (
    <div className="navbar">
      <div
        className="basket-and-modal-container"
        onClick={handleModalClick(isModalOpen)}
      >
        <Basket />
        {Object.keys(value.selectedCardsObj).length !== 0 && (
          <div className="added-to-cart-product-number">
            {Object.keys(value.selectedCardsObj).length}
          </div>
        )}
        {isModalOpen && <ModalContainer />}
      </div>
    </div>
  );
}

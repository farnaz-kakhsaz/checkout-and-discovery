import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context-provider";
// Components
import Basket from "../basket/basket.component";
import ModalContainer from "../modal/modal-container.component";
// CSS
import "./navbar.styles.css";

export default function Navbar() {
  const [isModalOpen, setIsModalOpern] = useState(false);
  const { value, setValue } = useContext(Context);

  useEffect(
    () => setValue((prevValue) => ({ ...prevValue, isModalOpen: isModalOpen })),
    [isModalOpen]
  );

  const handleModalClick = () => {
    if (value.selectedCardsList.length > 0) {
      setIsModalOpern(true);
      setValue((prevValue) => ({ ...prevValue, isModalOpen: isModalOpen }));
    }
  };

  return (
    <div className="navbar">
      <div className="basket-and-modal-container" onClick={handleModalClick}>
        <Basket />
        {Object.keys(value.selectedCardsList).length !== 0 && (
          <div className="added-to-cart-product-number">
            {Object.keys(value.selectedCardsList).length}
          </div>
        )}
        {value.isModalOpen && <ModalContainer />}
      </div>
    </div>
  );
}

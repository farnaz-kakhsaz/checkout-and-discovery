import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { removeObjectFromArray } from "../../helper/removeObjectFromArray";
import useOuterClick from "../../helper/useOuterClick";
import { sumAllObjectsPricesInArray } from "../../helper/sumAllObjectsPricesInArray";
// Components
import { Context } from "../../context/context-provider";
import ModalItem from "./modal-item.component";
// CSS
import "./modal-container.styles.css";

export default function ModalContainer() {
  const { value, setValue } = useContext(Context);
  const [isModalOpen, setIsModalOpern] = useState(true);

  useEffect(() => {
    setValue((prevValue) => ({ ...prevValue, isModalOpen: isModalOpen }));
  }, [isModalOpen]);

  const handleRemoveFromCartClick = (id) => (event) => {
    event.stopPropagation();
    const newselectedCardsList = removeObjectFromArray(
      value.selectedCardsList,
      id
    );

    setValue((prevValue) => ({
      ...prevValue,
      selectedCardsList: [...newselectedCardsList],
    }));

    localStorage.setItem(
      "selectedCardsList",
      JSON.stringify([...newselectedCardsList])
    );
  };

  const handleCloseModal = () => {
    setIsModalOpern(false);
  };

  const innerRef = useOuterClick((ev) => setIsModalOpern(false));

  return (
    <div className="modal-container" ref={innerRef}>
      <p className="modal-header-product-number">
        {value.selectedCardsList.length} کالا
      </p>
      <div className="modal-item-container">
        {value.selectedCardsList.map((selectedCardInfo) => (
          <ModalItem
            {...selectedCardInfo}
            key={selectedCardInfo.id}
            handleRemoveFromCartClick={handleRemoveFromCartClick}
          />
        ))}
      </div>
      <div className="modal-footer-container">
        <Link to="/cart" onClick={handleCloseModal}>
          <div className="modal-cart-btn">مشاهده سبد خرید</div>
        </Link>
        <div className="modal-product-price-container">
          <p className="modal-product-price-text">مبلغ قابل پرداخت</p>
          <h4 className="modal-product-price-number">
            {sumAllObjectsPricesInArray(value.selectedCardsList)}
          </h4>
          <p className="modal-product-price-text-toman">تومان</p>
        </div>
      </div>
    </div>
  );
}

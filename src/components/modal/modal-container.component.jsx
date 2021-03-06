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
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    setValue((prevValue) => ({ ...prevValue, isModalOpen: isModalOpen }));
  }, [isModalOpen]);

  const handleRemoveFromCartClick = (id) => (event) => {
    event.stopPropagation();
    const newSelectedCardsList = removeObjectFromArray(
      value.selectedCardsList,
      id
    );

    if (newSelectedCardsList.length === 0) handleCloseModal();

    setValue((prevValue) => ({
      ...prevValue,
      selectedCardsList: [...newSelectedCardsList],
    }));

    localStorage.setItem(
      "selectedCardsList",
      JSON.stringify([...newSelectedCardsList])
    );
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Close modal when clicking outside it
  const innerRef = useOuterClick((event) => setIsModalOpen(false));

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

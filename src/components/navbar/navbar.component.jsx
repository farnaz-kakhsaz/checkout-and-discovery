import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../context/context-provider";
// Components
import HomeIcon from "../home-icon/home-icon.component";
import BasketIcon from "../basket-icon/basket-icon.component";
import ModalContainer from "../modal/modal-container.component";
import Input from "./input.component";
// CSS
import "./navbar.styles.css";

export default function Navbar() {
  const [isModalOpen, setIsModalOpern] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const { value, setValue } = useContext(Context);

  useEffect(
    () => setValue((prevValue) => ({ ...prevValue, isModalOpen: isModalOpen })),
    [isModalOpen]
  );

  useEffect(() => {
    setValue((prevValue) => ({ ...prevValue, isLoading: true }));
    value
      .getProductsListPage(value.currentPageNumber, inputValue || "سیب")
      .then((data) => {
        setValue((prevValue) => ({
          ...prevValue,
          searchKeyword: inputValue,
          totalPagesNumber: data?.data?.pager?.total_pages,
          productListPage: data?.data,
          isLoading: false,
        }));
      })
      .catch((error) => {
        setValue((prevValue) => ({ ...prevValue, isLoading: false }));
      });
  }, [inputValue]);

  const handleInputChange = (event) => setInputValue(event.target.value);

  const handleModalClick = () => {
    if (value.selectedCardsList.length > 0) {
      setIsModalOpern(true);
      setValue((prevValue) => ({ ...prevValue, isModalOpen: isModalOpen }));
    }
  };

  return (
    <div className="navbar">
      <div className="basket-input-home-container">
        <div onClick={handleModalClick}>
          <BasketIcon />
        </div>
        {Object.keys(value.selectedCardsList).length !== 0 && (
          <div className="added-to-cart-product-number">
            {Object.keys(value.selectedCardsList).length}
          </div>
        )}
        {value.isModalOpen && <ModalContainer />}
        <Input inputValue={inputValue} handleInputChange={handleInputChange} />
        <Link to="/">
          <HomeIcon />
        </Link>
      </div>
    </div>
  );
}

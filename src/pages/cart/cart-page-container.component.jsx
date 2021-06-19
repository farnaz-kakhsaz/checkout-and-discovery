import { useContext } from "react";

import CardPageItem from "./cart-page-item.component";
import { Context } from "../../context/context-provider";
import { removeObjectFromArray } from "../../helper/removeObjectFromArray";
import { sumAllObjectsPricesInArray } from "../../helper/sumAllObjectsPricesInArray";
// Images
import { ReactComponent as DeadEmojiIcon } from "../../assets/images/icon-dead-emoji.svg";
// CSS
import "./cart-page-container.styles.css";

export default function CartPageContainer() {
  const { value, setValue } = useContext(Context);

  const handleRemoveFromCartClick = (id) => (event) => {
    const newselectedCardsList = removeObjectFromArray(
      value.selectedCardsList,
      id
    );

    setValue((prevValue) => ({
      ...prevValue,
      selectedCardsList: [...newselectedCardsList],
    }));
  };

  return (
    <div className="cart-page-container">
      {value.selectedCardsList.length !== 0 ? (
        <>
          <div className="cart-page-left-side">
            <h2 className="cart-page-left-side-title">جمع سبد خرید شما</h2>
            <div className="cart-page-left-side-total-sum">
              {sumAllObjectsPricesInArray(value.selectedCardsList)}
            </div>
            <span className="cart-page-left-side-toman">تومان</span>
          </div>
          <div className="cart-page-right-side">
            {value.selectedCardsList.map((selectedCardInfo) => (
              <CardPageItem
                {...selectedCardInfo}
                key={selectedCardInfo.id}
                handleRemoveFromCartClick={handleRemoveFromCartClick}
              />
            ))}
          </div>
        </>
      ) : (
        <DeadEmojiIcon className="cart-page-dead-emoji-icon" />
      )}
    </div>
  );
}

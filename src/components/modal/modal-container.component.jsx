import { useContext } from "react";
// Components
import { Context } from "../../context/context-provider";
import ModalItem from "./modal-item.component";
// CSS
import "./modal-container.styles.css";

export default function Modal() {
  const { value, seValue } = useContext(Context);

  const handleClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="modal-container" onClick={handleClick}>
      {value.selectedCardsList.map((selectedCardInfo) => (
        <ModalItem selectedCardInfo={selectedCardInfo} />
      ))}
    </div>
  );
}

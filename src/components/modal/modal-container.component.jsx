import { useContext } from "react";
import PropTypes from "prop-types";
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
      <ModalItem />
    </div>
  );
}

Modal.propTypes = {};

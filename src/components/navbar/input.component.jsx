import PropTypes from "prop-types";
import "./input.styles.css";

export default function Input({ inputValue, handleInputChange }) {
  return (
    <input
      className="input"
      onChange={handleInputChange}
      value={inputValue}
      dir="auto"
      placeholder="جستجو..."
    />
  );
}

Input.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

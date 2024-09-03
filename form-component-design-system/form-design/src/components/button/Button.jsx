import React from "react";
import PropTypes from "prop-types";
import "../styles/global.css";
import "./button.css";

const Button = ({ text, onClick, variant }) => {
  return (
    <button className={`button button--${variant}`} onClick={onClick}>
      {text}
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["flat", "elevated"]),
};

Button.defaultProps = {
  onClick: () => {},
  variant: "flat", // default style is flat
};
export default Button;

import React from "react";
import PropTypes from "prop-types";
import "../styles/global.css";
import "./input.css";
const Input = ({ type, name, value, label, onChange }) => {
  return (
    <div className="input-container">
      <input
        className={`input ${value ? "input--filled" : ""}`}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        id={name}
      ></input>
      <label htmlFor={name} className="label">
        {label}
      </label>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
};

Input.defaultProps = {
  type: "text",
};

export default Input;

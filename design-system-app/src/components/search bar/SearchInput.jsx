import "./searchInput.css";
import React from "react";

function SearchInput({ value, label, placeholder, type, onChange, name }) {
  return (
    <input
      type={type}
      className="input"
      label={label}
      placeholder={placeholder}
      onChange={onChange}
      id={name}
      value={value}
    ></input>
  );
}

export default SearchInput;

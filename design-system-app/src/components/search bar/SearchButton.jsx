import React from "react";
import "./searchButton.css";

function SearchButton({ value, onClick }) {
  return (
    <button className="search-button" type="submit" onClick={onClick}>
      {" "}
      {value}{" "}
    </button>
  );
}

export default SearchButton;

import React from "react";
import "./searchButton.css";

function SearchButton({ value }) {
  return (
    <button className="search-button" type="submit">
      {" "}
      {value}{" "}
    </button>
  );
}

export default SearchButton;

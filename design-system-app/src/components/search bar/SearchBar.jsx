import React from "react";
// import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import "./searchBar.css";

function SearchBar({ userInput, setUserInput, onSearch }) {
  function handleChange(e) {
    setUserInput(e.target.value);
    onSearch();
  }

  return (
    <div className="input-wrapper">
      <SearchInput
        type="text"
        name="item-name"
        value={userInput}
        label="Search"
        onChange={handleChange}
        placeholder="Enter your item to search"
      ></SearchInput>
      {/* <SearchButton value="Search" onClick={onSearch} /> */}
    </div>
  );
}

export default SearchBar;

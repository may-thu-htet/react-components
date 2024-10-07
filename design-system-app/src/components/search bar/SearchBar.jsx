import React from "react";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import "./searchBar.css";
import { useState } from "react";

function SearchBar() {
  const [userInput, setUserInput] = useState(" ");

  function handleChange(e) {
    setUserInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
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
      <SearchButton value="Search" onSubmit={handleSubmit} />
    </div>
  );
}

export default SearchBar;

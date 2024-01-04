import { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="search">
      <input
        className="search-input"
        placeholder="search..."
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default SearchBar;

import React from "react";

const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <input
      value={keyword}
      placeholder={"search music"}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
};
export default SearchBar;

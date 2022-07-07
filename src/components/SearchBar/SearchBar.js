import React from "react";

// Importing styles
import "./SearchBar.css";

const SearchBar = ({ handleSearchUser }) => {
  return (
    <div style={{ width: "100%" }}>
      <input
        type="text"
        className="search-input"
        placeholder="Search Users"
        onChange={handleSearchUser}
      />
    </div>
  );
};

export default SearchBar;

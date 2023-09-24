import React from "react";
import {
  Line, Search

} from "./style";
function SearchInput({ searchQuery, handleSearchQueryChange, handleSearch }) {

  const isSearchEmpty = searchQuery.trim() === "";

  return (
    <div>
     
      <Search className={isSearchEmpty ? "" : "scrolled"}>
        <input
          type="text"
          placeholder="Pesquisar"
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
       
      </Search>
      <Line />
    </div>
  );
}

export default SearchInput;

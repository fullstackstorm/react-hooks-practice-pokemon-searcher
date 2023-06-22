import React, {useContext} from "react";
import { SearchContext } from "./SearchContext";

function Search() {
  const { searchQuery, handleSearch } = useContext(SearchContext);

  const handleChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={searchQuery} onChange={(event) => handleChange(event)} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;

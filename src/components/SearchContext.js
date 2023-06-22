import React, { createContext, useState } from "react";

// Create a new context
const SearchContext = createContext();

// Create a provider component
function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <SearchContext.Provider value={{ searchQuery, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };

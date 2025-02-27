import React, { useContext, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { productsContext } from "../context/ProductsContextProvider.jsx";

function SearchBar() {
  const { query, setQuery } = useContext(productsContext);
  const inputRef = useRef(null);

  const handleSearch = () => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex justify-center mx-auto max-w-6xl mt-5">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search for item..."
        name="search"
        id="search"
        value={query}
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
        onKeyDown={handleKeyPress}
        className="select-none border border-gray-400 border-r-0 rounded-l-sm outline-none text-gray-500 text-left w-[30%] px-1"
        autoComplete="off"
      />
      <button
        className="border border-gray-400 border-l-0 rounded-r-sm px-1 bg-gray-200 hover:bg-gray-300 flex items-center"
        onClick={handleSearch}
      >
        <SearchIcon />
      </button>
    </div>
  );
}

export default SearchBar;

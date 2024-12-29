import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useRef, useState } from "react";
import CartIcon from "./CartIcon";
import Favourites from "./HeartIcon";
import SearchDropMenu from "./SearchResults/SearchDropMenu";
import { useNavigate } from "react-router-dom";
import { searchProducts } from "../../services/products";

function Searchbar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);
  const dropDownRef = useRef(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    const results = await searchProducts(searchTerm);
    setSearchResults(results.products);
    console.log(searchResults);
  };

  // search submit transfer to another page
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm([]);
    }
  };

  const handleClickOutside = (event) => {
    if (
      dropDownRef.current &&
      !dropDownRef.current.contains(event.target) &&
      searchRef.current &&
      !searchRef.current.contains(event.target)
    ) {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex gap-4">
      <form
        action="submit"
        className="relative"
        onChange={handleSearch}
        onSubmit={handleSearchSubmit}
      >
        <input
          type="text"
          placeholder="Search for products..."
          className="bg-gray-100 px-2 py-1 rounded-lg w-72 h-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          ref={searchRef}
        />
        <MagnifyingGlassIcon className="absolute right-2 top-2 w-5 h-5 text-gray-400" />
        {searchResults.length > 0 && searchTerm && (
          <div
            ref={dropDownRef}
            className="absolute top-15 left-0 w-72 bg-white rounded-lg shadow-lg z-10 h-96 overflow-y-scroll flex flex-col gap-2 border border-gray-200"
          >
            {searchResults.map((product) => (
              <SearchDropMenu product={product} key={product.id} />
            ))}
          </div>
        )}
      </form>
      <Favourites />
      <CartIcon />
    </div>
  );
}

export default Searchbar;

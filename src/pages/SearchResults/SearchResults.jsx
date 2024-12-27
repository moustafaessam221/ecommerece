import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../../components/Product/ProductList";
import { searchProducts } from "../../services/products";

function SearchResults() {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      const results = await searchProducts(query);
      setSearchResults(results.products);
      setLoading(false);
    };
    fetchResults();
  }, [query]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-bold text-3xl mb-6">Search Results for "{query}"</h1>
      {searchResults.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No products found.</p>
          <p className="text-gray-500 mt-2">Try adjusting your search terms or filters.</p>
        </div>
      ) : (
        <ProductList items={searchResults} />
      )}
    </div>
  );
}


export default SearchResults;

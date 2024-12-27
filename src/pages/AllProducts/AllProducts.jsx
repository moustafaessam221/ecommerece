import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../services/products";
import ProductList from "../../components/Product/ProductList";
import Pagination from "./Pagintation/Pagination";
import SpinnerLoading from "../../components/loading/SpinnerLoading";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getAllProducts(20, (page - 1) * 20);
        setProducts(data.products);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center sm:text-4xl lg:text-5xl">
          Discover Our Products
          <span className="block mt-2 text-base font-normal text-gray-600">
            Explore our curated collection of premium items
          </span>
        </h1>

        {loading ? (
          <SpinnerLoading />
        ) : error ? (
          <div className="text-center py-12">
            <div className="text-red-500 text-lg">{error}</div>
            <button
              onClick={() => setPage(page)}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
            >
              Try Again
            </button>
          </div>
        ) : products.length > 0 ? (
          <div className="space-y-8">
            <ProductList items={products} />
            <div className="mt-8 flex justify-center">
              <Pagination page={page} setPage={setPage} />
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllProducts;

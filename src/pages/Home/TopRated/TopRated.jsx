import React, { useEffect, useState } from "react";
import { sortedProducts } from "../../../services/products";
import ProductCard from "../../../components/Product/ProductCard";
import SpinnerLoading from "../../../components/loading/SpinnerLoading";

function TopRated() {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const fetchTopRated = async () => {
      try {
        const response = await sortedProducts("rating", "desc");
        console.log(response);
        setTopRated(response.products);
      } catch (error) {
        console.error("Error fetching top-rated products:", error);
      }
    };

    fetchTopRated();
  }, []);

  return (
    <div className="px-6 lg:px-24 py-12">
      <h1 className="font-bold text-3xl lg:text-4xl text-gray-800 text-center mb-8">
        Top Rated Products
      </h1>
      {topRated.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {topRated.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <SpinnerLoading />
      )}
    </div>
  );
}

export default TopRated;

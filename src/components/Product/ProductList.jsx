import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductFilter from "./Filters/ProductFilter";
import FilterToggleButton from "./Filters/FilterToggleButton";

function ProductList({ items }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: "",
    rating: "",
    discount: "",
    sortBy: "default",
  });

  useEffect(() => {
    setProducts(items);
    setFilteredProducts(items);
  }, [items]);

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const handleSortChange = (value) => {
    const newFilters = { ...filters, sortBy: value };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (currentFilters) => {
    let result = [...products];

    // Apply price range filter
    if (currentFilters.priceRange) {
      const [min, max] = currentFilters.priceRange.split("-").map(Number);
      result = result.filter((product) => {
        if (max) {
          return product.price >= min && product.price <= max;
        } else {
          return product.price >= min;
        }
      });
    }

    // Apply rating filter
    if (currentFilters.rating) {
      const minRating = Number(currentFilters.rating);
      result = result.filter((product) => product.rating >= minRating);
    }

    // Apply discount filter
    if (currentFilters.discount) {
      const minDiscount = Number(currentFilters.discount);
      result = result.filter(
        (product) => product.discountPercentage >= minDiscount
      );
    }

    // Apply sorting
    switch (currentFilters.sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "discount":
        result.sort((a, b) => b.discountPercentage - a.discountPercentage);
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <ProductFilter
        filters={filters}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
        showFilters={showFilters}
      />

      <div className="flex-1 p-6 lg:pl-86">
        <div
          className="grid justify-center sm:px-4 gap-6 p-6"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <FilterToggleButton
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />
    </div>
  );
}

export default ProductList;

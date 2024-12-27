import React from "react";

function ProductFilter({ onFilterChange, onSortChange }) {
  return (
    <div className="mb-8 px-4 lg:px-20 sm:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Price Range Filter */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700">
            Price Range
          </label>
          <select
            onChange={(e) => onFilterChange("priceRange", e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300 ease-in-out"
          >
            <option value="">All Prices</option>
            <option value="0-50">$0 - $50</option>
            <option value="51-100">$51 - $100</option>
            <option value="101-200">$101 - $200</option>
            <option value="201+">$201+</option>
          </select>
        </div>

        {/* Rating Filter */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700">
            Minimum Rating
          </label>
          <select
            onChange={(e) => onFilterChange("rating", e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300 ease-in-out"
          >
            <option value="">All Ratings</option>
            <option value="4">4+ Stars</option>
            <option value="3">3+ Stars</option>
            <option value="2">2+ Stars</option>
            <option value="1">1+ Star</option>
          </select>
        </div>

        {/* Discount Filter */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700">
            Discount
          </label>
          <select
            onChange={(e) => onFilterChange("discount", e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300 ease-in-out"
          >
            <option value="">All Items</option>
            <option value="10">10% or more</option>
            <option value="20">20% or more</option>
            <option value="30">30% or more</option>
            <option value="50">50% or more</option>
          </select>
        </div>

        {/* Sort Options */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700">
            Sort By
          </label>
          <select
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300 ease-in-out"
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="discount">Biggest Discount</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;

import React from "react";
import FilterSelect from "./FilterSelect";

const filterOptions = {
  priceRange: [
    { value: "", label: "All Prices" },
    { value: "0-50", label: "$0 - $50" },
    { value: "51-100", label: "$51 - $100" },
    { value: "101-200", label: "$101 - $200" },
    { value: "201+", label: "$201+" },
  ],
  rating: [
    { value: "", label: "All Ratings" },
    { value: "4", label: "4+ Stars" },
    { value: "3", label: "3+ Stars" },
    { value: "2", label: "2+ Stars" },
    { value: "1", label: "1+ Star" },
  ],
  discount: [
    { value: "", label: "All Items" },
    { value: "10", label: "10% or more" },
    { value: "20", label: "20% or more" },
    { value: "30", label: "30% or more" },
    { value: "50", label: "50% or more" },
  ],
  sortBy: [
    { value: "default", label: "Default" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
    { value: "discount", label: "Biggest Discount" },
  ],
};

function ProductFilter({ filters, onFilterChange, onSortChange, showFilters }) {
  return (
    <div
      className={`fixed lg:static top-0 left-0 h-full bg-white w-80 p-6 shadow-xl transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto ${
        showFilters ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="space-y-6">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Filters</h2>

        <FilterSelect
          label="Price Range"
          value={filters.priceRange}
          options={filterOptions.priceRange}
          onChange={(value) => onFilterChange("priceRange", value)}
        />

        <FilterSelect
          label="Minimum Rating"
          value={filters.rating}
          options={filterOptions.rating}
          onChange={(value) => onFilterChange("rating", value)}
        />

        <FilterSelect
          label="Discount"
          value={filters.discount}
          options={filterOptions.discount}
          onChange={(value) => onFilterChange("discount", value)}
        />

        <div className="border-t border-gray-200 pt-6">
          <FilterSelect
            label="Sort By"
            value={filters.sortBy}
            options={filterOptions.sortBy}
            onChange={onSortChange}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;

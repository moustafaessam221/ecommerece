import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

function SearchDropMenu({ product }) {
  const { title, price, thumbnail: image } = product;
  return (
    <Link
      to={`/product/${product.id}`}
      className="flex items-center w-full p-3 gap-4 hover:bg-blue-50 transition-all duration-200 border-b border-gray-100 last:border-b-0 group"
    >
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-16 h-16 object-cover rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="flex flex-col flex-grow min-w-0">
        <h3 className="font-medium text-gray-800 truncate group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-blue-600 font-semibold mt-1">
          ${typeof price === "number" ? price.toFixed(2) : price}
        </p>
      </div>
      <div className="flex-shrink-0 text-gray-400 group-hover:text-blue-500 transition-colors">
        {/* Arrow */}
        <ArrowRightCircleIcon className="h-5 w-5" />
      </div>
    </Link>
  );
}

export default SearchDropMenu;

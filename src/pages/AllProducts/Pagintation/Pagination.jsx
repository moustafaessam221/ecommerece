import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

function Pagination({ page, setPage }) {
  const handleNext = () => setPage(page + 1);
  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="flex items-center justify-center space-x-4 my-6">
      <button
        onClick={handlePrev}
        disabled={page === 1}
        className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 
          ${
            page === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 border border-gray-300"
          }`}
      >
        <ArrowLeftCircleIcon className="w-5 h-5 mr-2" />
        Previous
      </button>

      <span className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md">
        Page {page}
      </span>

      <button
        onClick={handleNext}
        className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md transition-colors duration-200 hover:bg-indigo-50 hover:text-indigo-600"
      >
        Next
        <ArrowRightCircleIcon className="w-5 h-5 ml-2" />
      </button>
    </div>
  );
}

export default Pagination;

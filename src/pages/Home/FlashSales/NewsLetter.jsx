import React from "react";

export default function Newsletter() {
  return (
    <div className="bg-gray-100 py-16 px-4 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-8">
          Get the latest updates on new products and upcoming sales
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-md flex-1 max-w-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

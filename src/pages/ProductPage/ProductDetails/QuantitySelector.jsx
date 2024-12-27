import React from "react";

export function QuantitySelector({ quantity, setQuantity }) {
  return (
    <div className="flex items-center border border-gray-300 rounded-md">
      <button
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
        className="px-4 py-2 text-gray-600 hover:bg-gray-100"
      >
        -
      </button>
      <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
      <button
        onClick={() => setQuantity(quantity + 1)}
        className="px-4 py-2 text-gray-600 hover:bg-gray-100"
      >
        +
      </button>
    </div>
  );
}

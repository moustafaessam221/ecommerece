import React from "react";

function CartItem({ item, product, onRemove }) {
  if (!product) {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  const { title, thumbnail, price } = product;
  const itemTotal = (item.amount * price).toFixed(2);

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center">
        <img
          src={thumbnail}
          alt={title}
          className="w-16 h-16 object-cover rounded-lg mr-4"
        />
        <div>
          <h3 className="text-lg font-medium text-gray-700">{title}</h3>
          <p className="text-gray-500">Amount: {item.amount}</p>
          <p className="text-gray-800 font-semibold">Total: ${itemTotal}</p>
        </div>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600 transition-colors"
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;

import React from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';

function CartItem({ item, product, onRemove }) {
  if (!product) {
    return (
      <div className="p-4 bg-gray-50 rounded-lg shadow-sm animate-pulse">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
          <div className="flex-1">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/4 mt-2"></div>
          </div>
        </div>
      </div>
    );
  }

  const { title, thumbnail, price } = product;
  const itemTotal = (item.amount * price).toFixed(2);

  return (
    <div className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
      {/* Product Image */}
      <div className="relative shrink-0 w-20 h-20">
        <img
          src={thumbnail}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0 space-y-1">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-medium text-gray-900 line-clamp-2">{title}</h3>
          <button
            onClick={() => onRemove(item.id)}
            className="shrink-0 p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors duration-200"
            aria-label={`Remove ${title} from cart`}
          >
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          <span className="inline-flex items-center text-gray-500">
            Quantity: <span className="ml-1 font-medium text-gray-900">{item.amount}</span>
          </span>
          <span className="text-gray-500">
            Price: <span className="font-medium text-gray-900">${price}</span>
          </span>
          <span className="text-gray-500">
            Total: <span className="font-medium text-gray-900">${itemTotal}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
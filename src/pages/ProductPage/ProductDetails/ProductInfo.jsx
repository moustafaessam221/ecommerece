import { HeartIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import renderRatingStars from "../../../utils/renderRatingStars";
import { QuantitySelector } from "./QuantitySelector";

export function ProductInfo({
  product,
  quantity,
  setQuantity,
  handleAddToCart,
  handleAddToWishList,
  cartLoading,
  wishListLoading,
}) {
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleBuyNowClick = async () => {
    setIsAddingToCart(true);
    try {
      await handleAddToCart();
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <div className="flex-1 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          {renderRatingStars(product.rating)}
        </div>
        <span className="text-gray-500">
          ({product.reviews?.length} Reviews)
        </span>
        <span className="text-green-600">{product.availabilityStatus}</span>
      </div>

      <p className="text-gray-600 text-lg">{product.description}</p>

      <div className="text-3xl font-bold text-gray-900">
        ${product.price?.toFixed(2)}
      </div>

      <div className="flex gap-4 items-center">
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <button
          className={`flex-1 py-3 px-6 rounded-md transition-colors ${
            isAddingToCart
              ? "bg-blue-400 text-white cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
          onClick={handleBuyNowClick}
          disabled={cartLoading || isAddingToCart}
        >
          {isAddingToCart ? "Adding..." : "Buy Now"}
        </button>
        <button
          className="p-3 border border-gray-300 rounded-md hover:bg-gray-100"
          onClick={handleAddToWishList}
          disabled={wishListLoading}
        >
          <HeartIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

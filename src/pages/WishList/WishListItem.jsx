import React, { useEffect, useState } from "react";
import { getProductById } from "../../services/products";

function WishListItem({ item, onRemove }) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(item.id);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [item.id]);

  return (
    <div className="flex items-center p-4 bg-white shadow rounded-lg mb-4">
      {/* Thumbnail */}
      <div className="w-24 h-24 flex-shrink-0">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 ml-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {product.title || "Loading..."}
        </h3>
        <p className="text-gray-500 mt-1">
          {product.price ? `$${product.price}` : "Price unavailable"}
        </p>
      </div>

      {/* Remove Button */}
      <div>
        <button
          onClick={() => onRemove(item.id)}
          className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default WishListItem;

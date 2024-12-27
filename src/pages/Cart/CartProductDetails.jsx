import React, { useEffect, useState } from "react";
import { getProductById } from "../../services/products";

function CartProductDetails({ product, id, onProductLoad }) {
  const [productFetched, setProductFetched] = useState(null);

  useEffect(() => {
    let isMounted = true;
    getProductById(id).then((data) => {
      if (isMounted) {
        setProductFetched(data);
        onProductLoad(data);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [id, onProductLoad]);

  if (!productFetched) {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  const { title, thumbnail, price } = productFetched;

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
          <p className="text-gray-500">Amount: {product.amount}</p>
          <p className="text-gray-800 font-semibold">
            Total: ${(product.amount * price).toFixed(2)}
          </p>
        </div>
      </div>
      <button className="px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600 transition-colors">
        Remove
      </button>
    </div>
  );
}

export default CartProductDetails;

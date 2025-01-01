import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import React from "react";
import { useCart } from "../../../hooks/useCart";
import CartItem from "../../Cart/CartItem";
import { calculateCartTotal } from "../../../utils/CartCalculations";

const CartSummary = () => {
  const { cartItems, products, removeFromCart } = useCart();

  if (!cartItems || !products) {
    return (
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <p className="text-gray-600">Loading your cart...</p>
      </div>
    );
  }

  const totalPrice = calculateCartTotal(cartItems, products);
  const hasItems = cartItems.length > 0;

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-700 flex items-center">
        <ShoppingCartIcon className="h-6 w-6 text-gray-500 mr-2" />
        Your Cart
      </h2>

      {hasItems ? (
        <ul className="mt-4 space-y-4">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              product={products[item.id]}
              onRemove={removeFromCart}
            />
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-gray-500">Your cart is empty. Add some products!</p>
      )}

      {hasItems && (
        <div className="flex justify-between items-center mt-6 border-t pt-4">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-lg font-bold text-gray-900">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
      )}
    </div>
  );
};

export default CartSummary;

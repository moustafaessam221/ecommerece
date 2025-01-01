import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { calculateCartTotal } from "../../utils/CartCalculations";
import CartItem from "./CartItem";

const CartPage = () => {
  const { cartItems, products, isLoading, removeFromCart } = useCart();
  const totalPrice = calculateCartTotal(cartItems, products);

  if (isLoading) {
    return (
      <div className="px-4 lg:px-20 sm:p-8 bg-gray-100 min-h-screen">
        <p className="text-center text-gray-600">Loading cart...</p>
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-20 sm:p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Your Shopping Cart
      </h2>
      {cartItems.length > 0 ? (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              product={products[item.id]}
              onRemove={removeFromCart}
            />
          ))}
          <div>
            <p className="text-lg font-semibold text-gray-800 mb-2">
              Total Price: ${totalPrice.toFixed(2)}
            </p>
            <Link className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md"
              to="/checkout">
              Checkout
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;

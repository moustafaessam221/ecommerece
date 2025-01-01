import React from "react";
import CartSummary from "./components/CartSumary";
import PaymentForm from "./components/PaymentForm";

const CheckOut = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Checkout</h1>

        {/* Cart Summary */}
        <CartSummary />

        {/* Payment Form */}
        <PaymentForm />
      </div>
    </div>
  );
};

export default CheckOut;

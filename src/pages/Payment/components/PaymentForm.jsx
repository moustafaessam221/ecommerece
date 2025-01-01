import { CreditCardIcon } from "@heroicons/react/16/solid";
import React from "react";

const PaymentForm = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-700 flex items-center">
        <CreditCardIcon className="h-6 w-6 text-gray-500 mr-2" />
        Payment Details
      </h2>
      <form className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Card Number
          </label>
          <input
            type="text"
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-200"
            placeholder="1234 5678 9012 3456"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Expiry Date
            </label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-200"
              placeholder="MM/YY"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              CVV
            </label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-200"
              placeholder="123"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
        >
          Confirm Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;

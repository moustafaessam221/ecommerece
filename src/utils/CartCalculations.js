export const calculateItemTotal = (amount, price) => {
  return amount * price;
};

export const calculateCartTotal = (cartItems, products) => {
  return cartItems.reduce((total, item) => {
    const product = products[item.id];
    if (product) {
      return total + calculateItemTotal(item.amount, product.price);
    }
    return total;
  }, 0);
};

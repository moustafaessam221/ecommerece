import { useState, useEffect } from "react";
import { fetchCart, removeFromCart } from "../firebase/storage";
import { useAuth } from "../context/AuthContext";
import { getProductById } from "../services/products";

export const useCart = () => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [itemsAmount, setItemsAmount] = useState(0);

  const calculateItemsAmount = (items) => {
    return items.reduce((total, item) => total + item.amount, 0);
  };

  const loadCart = async () => {
    if (!user) {
      setIsLoading(false);
      return;
    }

    try {
      const items = await fetchCart(user.uid);
      setCartItems(items);
      setItemsAmount(calculateItemsAmount(items));

      const productPromises = items.map((item) =>
        getProductById(item.id).then((product) => [item.id, product])
      );

      const productDetails = await Promise.all(productPromises);
      const productsMap = Object.fromEntries(productDetails);
      setProducts(productsMap);
    } catch (error) {
      console.error("Error loading cart:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadCart();
  }, [user]);

  const handleRemoveFromCart = async (productId) => {
    if (!user) return;

    try {
      await removeFromCart(user.uid, productId);
      // Update local state immediately for better UX
      const updatedItems = cartItems.filter((item) => item.id !== productId);
      setCartItems(updatedItems);
      setItemsAmount(calculateItemsAmount(updatedItems));

      // Remove product from products map
      const updatedProducts = { ...products };
      delete updatedProducts[productId];
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Error removing item from cart:", error);
      // Reload cart in case of error to ensure consistency
      loadCart();
    }
  };

  return {
    cartItems,
    products,
    isLoading,
    itemsAmount,
    removeFromCart: handleRemoveFromCart,
  };
};

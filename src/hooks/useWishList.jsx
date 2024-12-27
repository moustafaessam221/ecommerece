import { useEffect, useState } from "react";
import { fetchWishlist, removeFromWishlist } from "../firebase/storage";
import { useAuth } from "../context/AuthContext";

export const useWishList = () => {
  const { user } = useAuth();
  const [wishListItems, setWishListItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsAmount, setItemsAmount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      const getWishlist = async () => {
        try {
          const data = await fetchWishlist(user.uid);
          setWishListItems(data);
          setItemsAmount(data.length);
          setError(null); // Reset error state
        } catch (error) {
          console.error("Error fetching wishlist:", error);
          setError(error); // Set error state
        } finally {
          setIsLoading(false);
        }
      };

      getWishlist();
    } else {
      setIsLoading(false); // If user is not logged in, stop loading
    }
  }, [user]);

  const handleRemove = async (productId) => {
    try {
      await removeFromWishlist(user.uid, productId);
      setWishListItems((prev) => prev.filter((item) => item.id !== productId));
    } catch (error) {
      console.error("Error removing item from wishlist:", error);
    }
  };

  return { wishListItems, isLoading, itemsAmount, handleRemove, error };
};

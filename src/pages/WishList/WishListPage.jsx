import { useWishList } from "../../hooks/useWishList";
import WishListItem from "./WishListItem";

const WishListPage = () => {
  const { wishListItems, isLoading, handleRemove } = useWishList();

  if (isLoading) {
    return (
      <div className="px-4 lg:px-20 sm:p-8 bg-gray-100 min-h-screen">
        <p className="text-center text-gray-600">Loading wishlist...</p>
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-20 sm:p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Your Wishlist
      </h2>
      {wishListItems.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {wishListItems.map((item) => (
            <WishListItem key={item.id} item={item} onRemove={handleRemove} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default WishListPage;

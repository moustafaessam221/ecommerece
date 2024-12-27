import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useWishList } from "../../hooks/useWishList";

function Favourites() {
  const { itemsAmount } = useWishList();
  return (
    <Link to="/wishlist" className="relative">
      <HeartIcon className="w-8 h-8 cursor-pointer hover:text-red-600" />
      {itemsAmount > 0 && (
        <span className="absolute top-0 right-0 bg-red-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
          {itemsAmount}
        </span>
      )}
    </Link>
  );
}

export default Favourites;

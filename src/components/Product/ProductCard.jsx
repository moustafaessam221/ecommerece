import { EyeIcon, HeartIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import renderRatingStars from "../../utils/renderRatingStars";
import { useAuth } from "../../context/AuthContext";
import {
  addToWishlist,
  fetchWishlist,
  removeFromWishlist,
} from "../../firebase/storage";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/16/solid";

function ProductCard({ product }) {
  const { id } = product;
  const { user } = useAuth();

  const [isInWishlist, setIsInWishlist] = useState(false);

  const navigate = useNavigate();

  // Add to wishlist
  const handleAddToWishList = async () => {
    try {
      if (!user) {
        navigate("/signin");
        return;
      }
      await addToWishlist(user.uid, String(id));
      setIsInWishlist(true);
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  };

  // Remove from wishlist
  const handleRemoveFromWishList = async () => {
    try {
      if (!user) {
        alert("Please login to remove from wishlist");
        return;
      }
      await removeFromWishlist(user.uid, String(id));
      setIsInWishlist(false);
    } catch (error) {
      console.error("Error removing from wishlist:", error);
    }
  };

  // fetch the product from wishlist to check if it exists
  useEffect(() => {
    const isProductInWishlist = async () => {
      try {
        if (!user) {
          setIsInWishlist(false);
          return;
        }
        const wishlist = await fetchWishlist(user.uid);
        if (wishlist) {
          const productExists = wishlist.some(
            (item) => String(item.id) === String(id)
          );
          setIsInWishlist(productExists);
        }
      } catch (error) {
        console.error("Error fetching wishlist:", error);
        setIsInWishlist(false);
      }
    };

    isProductInWishlist();
  }, [user, id]);

  return (
    <Link
      className="w-64 bg-white p-3 transition-transform duration-300 hover:shadow-xl hover:scale-105 flex-shrink-0"
      to={`/product/${product.id}`}
    >
      <div className="relative aspect-square overflow-hidden rounded-md">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-110 bg-gray-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute right-2 top-2 flex gap-2 flex-col">
          <button
            className={`rounded-full p-2 transition-transform ${
              isInWishlist
                ? "bg-white text-red-500"
                : "bg-white/90 hover:bg-white hover:text-red-500"
            }`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (isInWishlist) {
                handleRemoveFromWishList();
              } else {
                handleAddToWishList();
              }
            }}
          >
            {isInWishlist ? (
              <HeartIconSolid className="h-6 w-6 text-red-500 hover:scale-110 hover:rotate-6 transition-transform duration-200" />
            ) : (
              <HeartIcon className="h-5 w-5 hover:scale-110 hover:rotate-6 transition-transform duration-200" />
            )}
          </button>
          <button className="rounded-full bg-white/90 p-2 transition-colors hover:bg-white hover:text-red-500 hover:scale-110">
            <EyeIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="overflow-hidden text-ellipsis whitespace-nowrap font-medium hover:text-red-500 hover:translate-x-1 transition-transform duration-200">
          {product.title}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold">${product.price}</span>
          {product.discountPercentage > 0 && (
            <span className="text-sm font-medium text-red-500">
              -{product.discountPercentage}%
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex">
            {renderRatingStars(product.rating)}
            <p className="text-sm text-gray-500 ml-2 font-semibold">
              ({product.rating})
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;

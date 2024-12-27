import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products";
import { useAuth } from "../../context/AuthContext";
import { addToCart, addToWishlist } from "../../firebase/storage";
import ReviewsList from "./Reviews/ReviewsList";
import { ImageGallery } from "./ProductDetails/ImageGallery";
import { ProductInfo } from "./ProductDetails/ProductInfo";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { user } = useAuth();

  useEffect(() => {
    getProductById(id).then((data) => setProduct(data));
  }, [id]);

  const handleAddToCart = async () => {
    try {
      if (!user) {
        alert("Please login to add to cart");
        return;
      }
      await addToCart(user.uid, id, quantity);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleAddToWishList = async () => {
    try {
      if (!user) {
        alert("Please login to add to wishlist");
        return;
      }
      await addToWishlist(user.uid, id);
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white">
          <div className="flex flex-col lg:flex-row gap-8">
            <ImageGallery
              images={product.images}
              selectedImage={selectedImage}
              onImageSelect={setSelectedImage}
            />
            <ProductInfo
              product={product}
              quantity={quantity}
              setQuantity={setQuantity}
              handleAddToCart={handleAddToCart}
              handleAddToWishList={handleAddToWishList}
            />
          </div>
        </div>
      </div>
      {product.reviews && <ReviewsList reviews={product.reviews} />}
    </div>
  );
}

export default ProductPage;
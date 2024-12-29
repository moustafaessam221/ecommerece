import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../../services/products";
import ProductList from "../../../../components/Product/ProductList";
import ProductCard from "../../../../components/Product/ProductCard";
import renderRatingStars from "../../../../utils/renderRatingStars";
import ProductModal from "./ProductModal";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getAllProducts(20, (page - 1) * 20);
        setProducts(data.products);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <form action="submit">
        <input type="text" />
      </form>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className="flex flex-wrap gap-4 justify-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col gap-4 w-[291px] border p-4"
              onClick={() => handleProductClick(product)}
            >
              <div>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full object-cover rounded-lg"
                />
              </div>
              <div>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap font-medium">
                  {product.title}
                </p>
                <p>{renderRatingStars(product.rating)}</p>
                <p>${product.price}</p>
                <p>{product.stock} in stock</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default AdminProducts;

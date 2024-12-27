import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../../services/products";
import ProductList from "../../components/Product/ProductList";

function ProductsPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsByCategory(category).then((data) => setProducts(data.products));
  }, [category]);
  return (
    <div className="px-4 lg:px-20 py-8">
      <h1 className="font-bold text-3xl">{category}</h1>
      <ProductList items={products} />
    </div>
  );
}

export default ProductsPage;

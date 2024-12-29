import React, { useEffect, useState } from "react";
import { getProductById, updateProduct } from "../../../../services/products";
import { XCircleIcon } from "@heroicons/react/16/solid";

function ProductModal({ product, onClose }) {
  const [chosenProduct, setChosenProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    thumbnail: "",
  });

  useEffect(() => {
    setChosenProduct(product);
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await getProductById(product.id);
        setChosenProduct(response);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      await updateProduct(chosenProduct.id, newProduct);
      onClose();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  if (!chosenProduct) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 text-gray-500 hover:text-red-600 transition-colors bg-white rounded-full shadow-lg p-1"
        >
          <XCircleIcon className="w-6 h-6" />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Edit Product
          </h2>

          <form
            className="space-y-4"
            onSubmit={handleUpdateProduct}
            action="submit"
          >
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                defaultValue={chosenProduct.title}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                name="title"
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                defaultValue={chosenProduct.price}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                name="price"
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                defaultValue={chosenProduct.description}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                name="description"
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <input
                type="text"
                defaultValue={chosenProduct.category}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                name="category"
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Thumbnail URL
              </label>
              <input
                type="url"
                defaultValue={chosenProduct.thumbnail}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                name="thumbnail"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;

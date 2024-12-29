import React, { useState } from "react";
import styles from "./Add.module.css";
import { addProduct } from "../../../services/products";
import SuccessAnimation from "../../../components/loading/SuccessAnimation";

function AddProduct() {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      await addProduct(product);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      setLoading(false);
      setProduct({
        title: "",
        description: "",
        price: "",
        image: "",
      });
    }
  };

  return (
    <div>
      <form
        action="submit"
        className={styles["add-container"]}
        onSubmit={handleSubmit}
      >
        <div className={styles["input-group"]}>
          <label htmlFor="title" className={styles["add-label"]}>
            Product Title
          </label>
          <input
            id="title"
            type="text"
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
            placeholder="Enter product title"
            className={styles["add-input"]}
          />
        </div>

        <div className={styles["input-group"]}>
          <label htmlFor="description" className={styles["add-label"]}>
            Description
          </label>
          <input
            id="description"
            type="text"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
            placeholder="Enter product description"
            className={styles["add-input"]}
          />
        </div>

        <div className={styles["input-group"]}>
          <label htmlFor="price" className={styles["add-label"]}>
            Price
          </label>
          <input
            id="price"
            type="text"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            placeholder="Enter product price"
            className={styles["add-input"]}
          />
        </div>

        <div className={styles["input-group"]}>
          <label htmlFor="image" className={styles["add-label"]}>
            Image URL
          </label>
          <input
            id="image"
            type="text"
            value={product.image}
            onChange={(e) => setProduct({ ...product, image: e.target.value })}
            placeholder="Enter image URL"
            className={styles["add-input"]}
          />
        </div>

        <button
          type="submit"
          className={styles["add-button"]}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>

      {success && <SuccessAnimation text="Product added successfully" />}
      {/* <SuccessAnimation text="Product added successfully" /> */}
    </div>
  );
}

export default AddProduct;

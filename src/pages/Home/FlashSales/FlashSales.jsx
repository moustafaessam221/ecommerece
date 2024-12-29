import React from "react";
import ProductCard from "../../../components/Product/ProductCard";

import useHorizontalScroll from "../../../utils/useHorizontalScroll";
import styles from "./ScrollButton.module.css";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function FlashSales({ products }) {
  const { scrollRef, scroll } = useHorizontalScroll();

  return (
    <div className="flex flex-col px-4 lg:px-20 py-8">
      <div className="flex justify-between items-center mb-5">
        <h1 className="font-bold text-3xl">Flash Sales</h1>
        <div className="flex gap-4">
          {/* left button */}
          <button
            className={styles["scroll-button"]}
            onClick={() => scroll("left")}
          >
            <ArrowLeftCircleIcon />
          </button>
          {/* right button */}
          <button
            className={styles["scroll-button"]}
            onClick={() => scroll("right")}
          >
            <ArrowRightCircleIcon />
          </button>
        </div>
      </div>
      <div
        className="flex overflow-x-scroll scroll-smooth gap-4"
        style={{ scrollbarWidth: "none" }}
        ref={scrollRef}
      >
        {products?.length > 0 &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      <Link
        to="/allproducts"
        className="bg-red-600 w-52 h-[56px] text-white px-8 py-3 font-semibold mx-auto mt-12 hover:bg-red-700 flex items-center justify-center"
      >
        View All Products
      </Link>
      <div className="mt-12 border-b border-black"></div>
    </div>
  );
}

export default FlashSales;

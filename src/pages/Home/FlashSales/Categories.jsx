import React, { useEffect, useState, useRef } from "react";
import {
  getCategories,
  getProductsByCategory,
} from "../../../services/products";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import useHorizontalScroll from "../../../utils/useHorizontalScroll";
import SpinnerLoading from "../../../components/loading/SpinnerLoading";
import styles from "./ScrollButton.module.css";
import { useNavigate } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState();
  const { scrollRef, scroll } = useHorizontalScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigate = useNavigate();

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/products/${category}`);
  };

  if (!categories) return <SpinnerLoading />;

  return (
    <div className="flex flex-col px-4 lg:px-20 py-8">
      <div className="flex justify-between items-center mb-5">
        <button className="font-bold text-3xl">
          <Bars3Icon onClick={toggleMenu} className={`w-8 h-8 transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`} />
        </button>
        {menuOpen && (
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
        )}
      </div>
      <div
        className={`flex gap-8 font-semibold overflow-x-scroll scroll-smooth transition-all ease-in-out duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ scrollbarWidth: "none" }}
        ref={scrollRef}
      >
        {categories?.map((category, index) => (
          <button
            className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition-colors bg-white px-4 py-2 rounded-full border border-gray-300 hover:border-red-600 "
            key={index}
            onClick={() => handleCategoryClick(category)}
          >
            <p className="whitespace-nowrap">{category}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;

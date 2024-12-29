import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/products";
import Carousel from "./Carousel/Carousel";
import FlashSales from "./FlashSales/FlashSales";
import SideMenu from "./SideMenu";
import Categories from "./FlashSales/Categories";
import Newsletter from "./FlashSales/NewsLetter";
import TopRated from "./TopRated/TopRated";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data.products));
  }, []);

  return (
    <>
      <div className="flex px-4 lg:px-20 pt-8">
        <SideMenu />
        <Carousel />
      </div>
      <div className="px-4 lg:px">
        <FlashSales products={products} />
        <Categories />
        <TopRated />
        <Newsletter />
      </div>
    </>
  );
}

export default Home;
